/**
 * WKRLY contact-form handler (Cloudflare Worker).
 *
 * Routed at `wkrly.com/api/*` so the form's same-origin POST to
 * /api/contact is intercepted at the edge (never hits the static
 * Railway origin) and turned into emails via the Resend API.
 *
 * Config (set in Cloudflare → Worker → Settings → Variables):
 *   RESEND_API_KEY            (secret, required) — Resend API key
 *   CONTACT_NOTIFICATION_EMAIL(var, optional)    — where submissions go; default info@wkrly.com
 *   RESEND_FROM_ADDRESS       (var, optional)    — verified sender; default onboarding@resend.dev
 */

const JSON_HEADERS = { "Content-Type": "application/json" };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]),
  );

async function sendEmail(env, payload) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/api/contact") {
      return json({ error: "Not found" }, 404);
    }
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: "Invalid request." }, 400);
    }

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const company = typeof data.company === "string" ? data.company.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || message.length < 10) {
      return json(
        { error: "Please provide your name, a valid email, and a message of at least 10 characters." },
        400,
      );
    }

    if (!env.RESEND_API_KEY) {
      return json({ error: "Email service is not configured." }, 500);
    }

    const fromAddress = env.RESEND_FROM_ADDRESS || "WKRLY Group <onboarding@resend.dev>";
    const notificationTo = env.CONTACT_NOTIFICATION_EMAIL || "info@wkrly.com";
    const s = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      message: escapeHtml(message),
    };

    const notificationHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="border-bottom: 2px solid #34d6a6; padding-bottom: 8px;">New contact form submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Name</td><td style="padding: 8px 0;">${s.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${s.email}">${s.email}</a></td></tr>
          ${s.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td><td style="padding: 8px 0;">${s.company}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px;">
          <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
          <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${s.message}</div>
        </div>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="color: #0a1626;">Thanks for reaching out, ${s.name}.</h2>
        <p>We've received your message and will be in touch soon.</p>
        <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 0 0 8px; font-weight: bold; color: #555;">Your message:</p>
          <p style="margin: 0; white-space: pre-wrap;">${s.message}</p>
        </div>
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e4e7;" />
        <p style="color: #888; font-size: 13px;">WKRLY Group LLC · Sheridan, WY 82801</p>
      </div>
    `;

    // The notification to WKRLY must succeed — otherwise the submission is lost,
    // so we surface an error and let the visitor retry / email directly.
    let notifRes;
    try {
      notifRes = await sendEmail(env, {
        from: fromAddress,
        to: [notificationTo],
        reply_to: email,
        subject: `[Contact] New message from ${name}`,
        html: notificationHtml,
      });
    } catch {
      return json(
        { error: "We couldn't send your message right now. Please email info@wkrly.com directly." },
        502,
      );
    }
    if (!notifRes.ok) {
      return json(
        { error: "We couldn't send your message right now. Please email info@wkrly.com directly." },
        502,
      );
    }

    // Confirmation to the visitor is best-effort — never block success on it.
    try {
      await sendEmail(env, {
        from: fromAddress,
        to: [email],
        subject: "We received your message — WKRLY Group",
        html: confirmationHtml,
      });
    } catch {
      /* ignore */
    }

    return json({ success: true });
  },
};
