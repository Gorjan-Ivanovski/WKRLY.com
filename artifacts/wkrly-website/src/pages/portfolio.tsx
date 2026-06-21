import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const C = {
  navy: "#0a1626", navyDeep: "#08121f", navyCard: "#0c1a2b",
  teal: "#34d6a6", heading: "#f1f6f9", headingAlt: "#eef3f7",
  body: "#92a6b8", muted: "#7e93a5", hairline: "rgba(255,255,255,.07)",
};
const sora: React.CSSProperties = { fontFamily: "'Sora', sans-serif" };
const manrope: React.CSSProperties = { fontFamily: "'Manrope', sans-serif" };

function Eyebrow({ children, mb = 18 }: { children: React.ReactNode; mb?: number }) {
  return (
    <div style={{ ...manrope, fontSize: 12, letterSpacing: ".16em", fontWeight: 600, color: C.teal, marginBottom: mb, textTransform: "uppercase" }}>
      {children}
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay },
});

export default function Portfolio() {
  return (
    <div style={{ ...manrope, background: C.navy }}>

      {/* HERO */}
      <section style={{ padding: "84px 0 92px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="wk-section-pad"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "0 56px" }}
        >
          <Eyebrow mb={28}>Portfolio</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 720, margin: "0 0 28px" }}
          >
            A portfolio in the making.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.7, color: C.body, maxWidth: 620 }}>
            We build deliberately. Our first products are in development now, and we'll introduce them here as they launch. Each will hold the same standard: built around a real problem, made with care, and run for the long term.
          </p>
        </motion.div>
      </section>

      {/*
        Structured to scale: as products launch, replace the empty state below
        with a card grid — product name, one-line descriptor, status
        (In development / Live), and a link out.
      */}

      {/* IN DEVELOPMENT / CTA */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: -120, right: -80, width: 440, height: 440, background: "radial-gradient(circle, rgba(52,214,166,.12), transparent 62%)", pointerEvents: "none" }} />
          <motion.div
            {...fadeUp()}
            className="wk-section-pad"
            style={{ position: "relative", padding: "90px 56px" }}
          >
            <div
              style={{ maxWidth: 560, background: C.navyCard, border: `1px dashed ${C.hairline}`, borderRadius: 14, padding: "48px 40px" }}
            >
              <div style={{ ...manrope, fontSize: 12, letterSpacing: ".14em", fontWeight: 600, color: C.teal, marginBottom: 16, textTransform: "uppercase" }}>In Development</div>
              <p style={{ ...sora, fontSize: 19, fontWeight: 600, lineHeight: 1.45, color: C.headingAlt, marginBottom: 28 }}>
                Our first products are on the way. Want to be first to know?
              </p>
              <Link
                to="/contact"
                data-testid="link-portfolio-get-in-touch"
                style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "13px 26px", borderRadius: 9, fontSize: 14, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Get in Touch →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
