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

const focusAreas = [
  "Complex workflows that should be intuitive.",
  "Repetitive administrative tasks that drain creative and strategic energy.",
  "Critical blind spots where raw data exists, but actionable insight does not.",
];

const commitments = [
  { lead: "Rooted in reality.", rest: "Solutions are built around observed, validated problems—never hypothetical use cases." },
  { lead: "Built to last.", rest: "We do not sunset products; we maintain and improve them for the long haul." },
  { lead: "Crafted with care.", rest: "Utility and user experience are given equal weight in our development lifecycle." },
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
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 720, margin: "0 0 28px" }}
          >
            A deliberate collection.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.7, color: C.body, maxWidth: 660 }}>
            We build with intention. Our portfolio consists of digital properties and SaaS solutions that meet a rigorous internal standard: each must solve a genuine, validated problem and be built for sustainable operation.
          </p>
        </motion.div>
      </section>

      {/* OUR FOCUS AREAS */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Our Focus Areas</Eyebrow>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.body, margin: "0 0 44px", maxWidth: 720 }}>
              Across our portfolio, we target universal professional pain points:
            </p>
          </motion.div>
          <div
            className="wk-three-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {focusAreas.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} style={{ background: C.navyCard, padding: "38px 32px" }}>
                <div style={{ ...sora, fontSize: 22, fontWeight: 700, color: "rgba(52,214,166,.55)", marginBottom: 18 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ ...sora, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: C.headingAlt }}>{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR COMMITMENT */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Our Commitment</Eyebrow>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.body, margin: "0 0 44px", maxWidth: 720 }}>
              Every product we operate is held to the same non-negotiable criteria:
            </p>
          </motion.div>
          <div style={{ maxWidth: 760 }}>
            {commitments.map((item, i) => (
              <motion.div
                key={item.lead}
                {...fadeUp(i * 0.08)}
                style={{ display: "flex", gap: 22, alignItems: "flex-start", padding: "26px 0", borderBottom: i < commitments.length - 1 ? `1px solid ${C.hairline}` : undefined }}
              >
                <span style={{ color: C.teal, fontWeight: 700, fontSize: 18, flexShrink: 0, marginTop: 2 }}>—</span>
                <div>
                  <span style={{ ...sora, fontWeight: 600, color: C.heading, fontSize: 17 }}>{item.lead}</span>{" "}
                  <span style={{ color: C.body, fontSize: 17, lineHeight: 1.6 }}>{item.rest}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSING + CTA */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "96px 56px", textAlign: "center", overflow: "hidden" }}
        >
          <div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(52,214,166,.12), transparent 60%)", pointerEvents: "none" }}
          />
          <div style={{ position: "relative" }}>
            <p style={{ ...sora, fontWeight: 500, fontSize: "clamp(1.2rem, 2.2vw, 26px)", lineHeight: 1.5, color: C.headingAlt, maxWidth: 720, margin: "0 auto 40px", letterSpacing: "-.01em" }}>
              Our current portfolio reflects our focus on high-impact, enduring solutions. We invite you to explore our approach and see the standard we uphold.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/what-we-do"
                data-testid="link-portfolio-approach"
                style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "16px 32px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Explore Our Approach
              </Link>
              <Link
                to="/insights"
                data-testid="link-portfolio-insights"
                style={{ border: "1px solid rgba(255,255,255,.18)", color: C.heading, fontWeight: 600, padding: "16px 32px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "background 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                Get Regular Product Insights
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
