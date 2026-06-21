import { Router, type IRouter, type Request, type Response } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { z } from "zod";

const router: IRouter = Router();

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

router.post("/contact", async (req: Request, res: Response) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }

  const { name, email, company, message } = parsed.data;

  // Always log the submission so nothing is lost regardless of email delivery
  req.log.info(
    { submission: { name, email, company, message } },
    "Contact form submission received"
  );

  const connectors = new ReplitConnectors();
  const fromAddress = process.env.RESEND_FROM_ADDRESS ?? "WKRLY Group <onboarding@resend.dev>";
  const notificationTo = process.env.CONTACT_NOTIFICATION_EMAIL ?? "info@wkrly.com";

  const notificationHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <h2 style="border-bottom: 2px solid #1a56db; padding-bottom: 8px;">New contact form submission</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        ${company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
      </table>
      <div style="margin-top: 20px;">
        <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
        <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
      </div>
    </div>
  `;

  const confirmationHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <h2 style="color: #1a56db;">Thanks for reaching out, ${name}.</h2>
      <p>We've received your message and will be in touch soon.</p>
      <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin-top: 20px;">
        <p style="margin: 0 0 8px; font-weight: bold; color: #555;">Your message:</p>
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
      <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e4e7;" />
      <p style="color: #888; font-size: 13px;">WKRLY Group LLC · Sheridan, WY 82801</p>
    </div>
  `;

  // Send both emails concurrently but treat each as best-effort —
  // a delivery failure should not block the user from getting a success response.
  const [notifResult, confirmResult] = await Promise.allSettled([
    connectors.proxy("resend", "/emails", {
      method: "POST",
      body: JSON.stringify({
        from: fromAddress,
        to: [notificationTo],
        reply_to: email,
        subject: `[Contact] New message from ${name}`,
        html: notificationHtml,
      }),
    }),
    connectors.proxy("resend", "/emails", {
      method: "POST",
      body: JSON.stringify({
        from: fromAddress,
        to: [email],
        subject: "We received your message — WKRLY Group",
        html: confirmationHtml,
      }),
    }),
  ]);

  if (notifResult.status === "rejected" || (notifResult.status === "fulfilled" && !notifResult.value.ok)) {
    const detail = notifResult.status === "rejected"
      ? notifResult.reason
      : await notifResult.value.text().catch(() => "unknown");
    req.log.warn({ detail }, "Notification email delivery failed (non-fatal)");
  }

  if (confirmResult.status === "rejected" || (confirmResult.status === "fulfilled" && !confirmResult.value.ok)) {
    const detail = confirmResult.status === "rejected"
      ? confirmResult.reason
      : await confirmResult.value.text().catch(() => "unknown");
    req.log.warn({ detail }, "Confirmation email delivery failed (non-fatal)");
  }

  // Always return success — the submission is logged server-side regardless
  res.json({ success: true });
});

export default router;
