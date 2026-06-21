import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const C = {
  navy: "#0a1626", navyDeep: "#08121f", navyCard: "#0c1a2b",
  teal: "#34d6a6", heading: "#f1f6f9",
  body: "#92a6b8", muted: "#7e93a5", hairline: "rgba(255,255,255,.07)",
};
const sora: React.CSSProperties = { fontFamily: "'Sora', sans-serif" };
const manrope: React.CSSProperties = { fontFamily: "'Manrope', sans-serif" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: `1px solid ${C.hairline}`, paddingTop: 32, marginTop: 32 }}>
      <h2 style={{ ...sora, fontSize: 20, fontWeight: 700, color: C.heading, marginBottom: 14, letterSpacing: "-.01em" }}>{title}</h2>
      {children}
    </div>
  );
}

export default function CookiePolicy() {
  return (
    <div style={{ ...manrope, background: C.navy }}>
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "84px 40px 100px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <div style={{ fontSize: 11, letterSpacing: ".16em", fontWeight: 600, color: C.teal, marginBottom: 20, textTransform: "uppercase" }}>Legal</div>
          <h1 style={{ ...sora, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 48px)", color: C.heading, margin: "0 0 10px", letterSpacing: "-.02em" }}>Cookie Policy</h1>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 40 }}>Last updated: June 2026</p>

          <div style={{ background: C.navyCard, border: `1px solid ${C.hairline}`, borderRadius: 10, padding: "18px 22px", fontSize: 13, lineHeight: 1.65, color: C.muted, marginBottom: 8 }}>
            <span style={{ color: C.body, fontWeight: 600 }}>Important: </span>
            This is a template only, not legal advice. Adapt to the actual cookies and trackers your site uses, and have it reviewed by an attorney.
          </div>

          <Section title="What are cookies?">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Cookies are small text files placed on your device when you visit a website. They help websites function, remember your preferences, and understand how the site is used.
            </p>
          </Section>

          <Section title="How we use cookies">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 14 }}>WKRLY Group LLC uses cookies and similar technologies to:</p>
            <ul style={{ fontSize: 15, lineHeight: 1.75, color: C.body, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><span style={{ color: C.heading, fontWeight: 600 }}>Operate our website</span> — essential cookies required for the site to function;</li>
              <li><span style={{ color: C.heading, fontWeight: 600 }}>Understand usage</span> — analytics cookies that help us see how visitors interact with our site; and</li>
              <li><span style={{ color: C.heading, fontWeight: 600 }}>Improve your experience</span> — preference cookies that remember your settings.</li>
            </ul>
          </Section>

          <Section title="Managing cookies">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Most browsers let you control cookies through their settings, including blocking or deleting them. Disabling certain cookies may affect how our website functions. Where required, we will request your consent before placing non-essential cookies.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              We may update this Cookie Policy from time to time and will post any changes on this page.
            </p>
          </Section>

          <Section title="Contact us">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Questions about our use of cookies can be sent to{" "}
              <a href="mailto:info@wkrly.com" style={{ color: C.teal, textDecoration: "none" }}>info@wkrly.com</a>.
            </p>
          </Section>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.hairline}`, display: "flex", gap: 24, fontSize: 13 }}>
            <Link to="/privacy-policy" style={{ color: C.teal, textDecoration: "none" }}>Privacy Policy</Link>
            <Link to="/terms-of-use" style={{ color: C.teal, textDecoration: "none" }}>Terms of Use</Link>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
