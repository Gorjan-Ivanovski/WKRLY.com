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

export default function PrivacyPolicy() {
  return (
    <div style={{ ...manrope, background: C.navy }}>
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "84px 40px 100px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <div style={{ fontSize: 11, letterSpacing: ".16em", fontWeight: 600, color: C.teal, marginBottom: 20, textTransform: "uppercase" }}>Legal</div>
          <h1 style={{ ...sora, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 48px)", color: C.heading, margin: "0 0 10px", letterSpacing: "-.02em" }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 40 }}>Last updated: June 2026</p>

          <div style={{ background: C.navyCard, border: `1px solid ${C.hairline}`, borderRadius: 10, padding: "18px 22px", fontSize: 13, lineHeight: 1.65, color: C.muted, marginBottom: 8 }}>
            <span style={{ color: C.body, fontWeight: 600 }}>Important: </span>
            This Privacy Policy is a starting template written in plain, professional language. It is not legal advice. Before publishing, have it reviewed by a qualified attorney and tailored to your actual data practices and the laws that apply to you.
          </div>

          <Section title="Introduction">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              This Privacy Policy explains how WKRLY Group LLC ("WKRLY Group," "we," "us," or "our") collects, uses, and protects information when you visit our website or interact with us. By using our website, you agree to the practices described in this policy.
            </p>
          </Section>

          <Section title="Information we collect">
            <div style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              <p style={{ marginBottom: 12 }}><span style={{ color: C.heading, fontWeight: 600 }}>Information you provide to us.</span> When you contact us, apply for a role, or otherwise communicate with us, we may collect information such as your name, email address, company, and the contents of your message.</p>
              <p><span style={{ color: C.heading, fontWeight: 600 }}>Information we collect automatically.</span> When you visit our website, we may automatically collect technical information such as your IP address, browser type, device information, pages viewed, and how you arrived at and navigate our site. We collect this information using cookies and similar technologies (see our Cookie Policy).</p>
            </div>
          </Section>

          <Section title="How we use information">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 12 }}>We use the information we collect to:</p>
            <ul style={{ fontSize: 15, lineHeight: 1.75, color: C.body, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "Respond to your enquiries and communicate with you;",
                "Review and process career applications;",
                "Operate, maintain, and improve our website;",
                "Understand how our website is used;",
                "Protect the security and integrity of our website and business; and",
                "Comply with our legal obligations.",
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </Section>

          <Section title="How we share information">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 12 }}>We do not sell your personal information. We may share information with:</p>
            <ul style={{ fontSize: 15, lineHeight: 1.75, color: C.body, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><span style={{ color: C.heading, fontWeight: 600 }}>Service providers</span> who help us operate our website and business (for example, hosting, analytics, and email providers), under appropriate confidentiality obligations;</li>
              <li><span style={{ color: C.heading, fontWeight: 600 }}>Legal and regulatory authorities</span> where required by law or to protect our rights; and</li>
              <li><span style={{ color: C.heading, fontWeight: 600 }}>Successors</span> in the event of a merger, acquisition, or sale of assets.</li>
            </ul>
          </Section>

          <Section title="Data retention">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.</p>
          </Section>

          <Section title="Your rights">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Depending on where you live, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the use of your information, and to object to certain processing. To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@wkrly.com" style={{ color: C.teal, textDecoration: "none" }}>info@wkrly.com</a>.
            </p>
          </Section>

          <Section title="Data security">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>We take reasonable technical and organizational measures to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="Children's privacy">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>Our website is not directed to children under 13, and we do not knowingly collect personal information from them.</p>
          </Section>

          <Section title="International users">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>WKRLY Group LLC is based in the United States. If you access our website from outside the United States, you understand that your information may be processed in the United States.</p>
          </Section>

          <Section title="Changes to this policy">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the "Last updated" date above.</p>
          </Section>

          <Section title="Contact us">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 16 }}>If you have questions about this Privacy Policy, contact us at:</p>
            <address style={{ fontStyle: "normal", fontSize: 15, lineHeight: 1.75, color: C.body }}>
              <div style={{ color: C.heading, fontWeight: 600 }}>WKRLY Group LLC</div>
              <div>30 N Gould St Ste N</div>
              <div>Sheridan, WY 82801, United States</div>
              <div><a href="mailto:info@wkrly.com" style={{ color: C.teal, textDecoration: "none" }}>info@wkrly.com</a> · (307) 400-5868</div>
            </address>
          </Section>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.hairline}`, display: "flex", gap: 24, fontSize: 13 }}>
            <Link to="/terms-of-use" style={{ color: C.teal, textDecoration: "none" }}>Terms of Use</Link>
            <Link to="/cookie-policy" style={{ color: C.teal, textDecoration: "none" }}>Cookie Policy</Link>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
