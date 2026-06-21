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

export default function TermsOfUse() {
  return (
    <div style={{ ...manrope, background: C.navy }}>
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "84px 40px 100px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          <div style={{ fontSize: 11, letterSpacing: ".16em", fontWeight: 600, color: C.teal, marginBottom: 20, textTransform: "uppercase" }}>Legal</div>
          <h1 style={{ ...sora, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 48px)", color: C.heading, margin: "0 0 10px", letterSpacing: "-.02em" }}>Terms of Use</h1>
          <p style={{ fontSize: 14, color: C.muted, marginBottom: 40 }}>Last updated: June 2026</p>

          <div style={{ background: C.navyCard, border: `1px solid ${C.hairline}`, borderRadius: 10, padding: "18px 22px", fontSize: 13, lineHeight: 1.65, color: C.muted, marginBottom: 8 }}>
            <span style={{ color: C.body, fontWeight: 600 }}>Important: </span>
            This is a starting template, not legal advice. Have it reviewed and adapted by a qualified attorney before publishing.
          </div>

          <Section title="Acceptance of terms">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              These Terms of Use ("Terms") govern your access to and use of the website operated by WKRLY Group LLC ("WKRLY Group," "we," "us," or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
            </p>
          </Section>

          <Section title="Use of our website">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 12 }}>You may use our website for lawful purposes only. You agree not to:</p>
            <ul style={{ fontSize: 15, lineHeight: 1.75, color: C.body, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "Use the website in any way that violates applicable law or regulation;",
                "Attempt to gain unauthorized access to any part of the website or its systems;",
                "Interfere with or disrupt the operation of the website; or",
                "Use the website to transmit harmful, fraudulent, or unlawful content.",
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </Section>

          <Section title="Intellectual property">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              The website and its content — including text, graphics, logos, and design — are owned by or licensed to WKRLY Group LLC and are protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our content without our prior written permission.
            </p>
          </Section>

          <Section title="Third-party links">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites, and links do not imply endorsement.
            </p>
          </Section>

          <Section title="Disclaimers">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              Our website is provided "as is" and "as available" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, or secure.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              To the fullest extent permitted by law, WKRLY Group LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, our website.
            </p>
          </Section>

          <Section title="Indemnification">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              You agree to indemnify and hold harmless WKRLY Group LLC and its officers, employees, and affiliates from any claims, damages, or expenses arising out of your use of the website or your violation of these Terms.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="Governing law">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body }}>
              These Terms are governed by the laws of the State of Wyoming, United States, without regard to its conflict of law principles.
            </p>
          </Section>

          <Section title="Contact us">
            <p style={{ fontSize: 15, lineHeight: 1.75, color: C.body, marginBottom: 16 }}>Questions about these Terms can be directed to:</p>
            <address style={{ fontStyle: "normal", fontSize: 15, lineHeight: 1.75, color: C.body }}>
              <div style={{ color: C.heading, fontWeight: 600 }}>WKRLY Group LLC</div>
              <div>30 N Gould St Ste N</div>
              <div>Sheridan, WY 82801, United States</div>
              <div><a href="mailto:info@wkrly.com" style={{ color: C.teal, textDecoration: "none" }}>info@wkrly.com</a> · (307) 400-5868</div>
            </address>
          </Section>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.hairline}`, display: "flex", gap: 24, fontSize: 13 }}>
            <Link to="/privacy-policy" style={{ color: C.teal, textDecoration: "none" }}>Privacy Policy</Link>
            <Link to="/cookie-policy" style={{ color: C.teal, textDecoration: "none" }}>Cookie Policy</Link>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
