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

const standards = [
  { num: "01", title: "Built around a real goal.", body: "Every product starts with a specific outcome someone is trying to reach, and works backward from there." },
  { num: "02", title: "Designed to be used.", body: "Intuitive, fast, and dependable — software that gets out of the way so people can do their best work." },
  { num: "03", title: "Trustworthy by design.", body: "We treat data, privacy, and security as commitments, not checkboxes." },
  { num: "04", title: "Continuously improved.", body: "Our products get better over time, shaped by the people who use them." },
];

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
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 760, margin: "0 0 28px" }}
          >
            A growing portfolio, one mission.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 580 }}>
            We're building a deliberate collection of SaaS products and digital properties — each designed to help people reach their professional goals.
          </p>
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <div className="wk-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            <motion.div {...fadeUp()}>
              <Eyebrow mb={18}>Our Approach</Eyebrow>
              <h2 style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 36px)", lineHeight: 1.1, color: C.heading, margin: 0 }}>
                Our portfolio philosophy
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} style={{ fontSize: 17, lineHeight: 1.7, color: C.body }}>
              <p style={{ marginBottom: 20 }}>
                We don't build products in isolation. Each one is a considered addition to a portfolio united by a single purpose: helping people make real progress in their working lives. We'd rather build a small number of products we believe in deeply than a long list we can't stand behind.
              </p>
              <p>
                Our products span different problems and audiences, but they answer to the same standard — they have to genuinely help someone do, finish, learn, or grow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WHAT TO EXPECT */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Our Standard</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              What you can expect from a WKRLY product
            </h2>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {standards.map((item, i) => (
              <motion.div key={item.num} {...fadeUp(i * 0.1)} style={{ background: C.navyCard, padding: 32, display: "flex", gap: 22, alignItems: "flex-start" }}>
                <div style={{ ...sora, fontSize: 14, fontWeight: 700, color: "rgba(52,214,166,.55)", flexShrink: 0, marginTop: 4 }}>{item.num}</div>
                <div>
                  <div style={{ ...sora, fontSize: 17, fontWeight: 600, color: C.heading, marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.6, color: C.muted }}>{item.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* COMING SOON */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: -120, right: -80, width: 440, height: 440, background: "radial-gradient(circle, rgba(52,214,166,.12), transparent 62%)", pointerEvents: "none" }} />
          <motion.div
            {...fadeUp()}
            className="wk-section-pad"
            style={{ position: "relative", padding: "90px 56px" }}
          >
            <Eyebrow mb={28}>Coming Soon</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 48px)", lineHeight: 1.05, color: C.heading, margin: "0 0 22px", letterSpacing: "-.02em" }}
            >
              Something is on the way.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: C.body, maxWidth: 520, margin: "0 0 36px" }}>
              We're heads-down building, and we're not ready to announce specific products just yet. When we are, you'll find them here first.
            </p>
            <Link
              to="/contact"
              data-testid="link-portfolio-get-in-touch"
              style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "14px 28px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Want to be first to know? Get in Touch →
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
