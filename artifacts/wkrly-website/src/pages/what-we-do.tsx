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

const whatWeMake = [
  { title: "SaaS products.", body: "Subscription software for recurring, real problems — tools people come back to because they make work measurably better." },
  { title: "Digital properties.", body: "The platforms, content, and services that help our products reach and serve the people they're built for." },
];

const process = [
  { num: "1", title: "Discover", body: "We start with people and problems — finding the goals people struggle to reach and the friction in the way." },
  { num: "2", title: "Validate", body: "Before we commit, we test the thinking. We prototype, put ideas in front of the people they're for, and look for evidence a product is worth building and worth using." },
  { num: "3", title: "Design & build", body: "Experiences that are intuitive and humane, engineered to be reliable, secure, and ready to scale. Craft lives in the details, so we sweat them." },
  { num: "4", title: "Launch", body: "Clear positioning, the right infrastructure, and the momentum to find an audience. A launch is a beginning, not an event." },
  { num: "5", title: "Grow & operate", body: "Once a product is live, the real work begins. We listen, measure, and improve — turning a launch into a product that compounds." },
];

export default function WhatWeDo() {
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
          <Eyebrow mb={28}>What We Do</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.2rem, 4.6vw, 60px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 900, margin: "0 0 28px" }}
          >
            We build, launch, and run products — and we don't stop at launch.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 600 }}>
            Part product studio, part operator. We take an idea from blank page to live product, then run it for the long term.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE MAKE */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>What We Make</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              Two things, held to one standard.
            </h2>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {whatWeMake.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)} style={{ background: C.navyCard, padding: "38px 32px" }}>
                <div style={{ ...sora, fontSize: 20, fontWeight: 600, color: C.heading, marginBottom: 12 }}>{item.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: C.muted }}>{item.body}</div>
              </motion.div>
            ))}
          </div>
          <motion.p
            {...fadeUp(0.15)}
            style={{ fontSize: 17, lineHeight: 1.7, color: C.body, maxWidth: 720, margin: "32px 0 0" }}
          >
            We build these as a focused portfolio — a deliberate set of products, each earning its place — rather than chasing every opportunity.
          </motion.p>
        </div>
      </div>

      {/* HOW WE WORK */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Our Process</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              How we work
            </h2>
          </motion.div>
          <div style={{ maxWidth: 760 }}>
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.08)}
                style={{ display: "flex", gap: 32, alignItems: "flex-start", padding: "32px 0", borderBottom: i < process.length - 1 ? `1px solid ${C.hairline}` : undefined }}
              >
                <div style={{ ...sora, fontSize: 36, fontWeight: 700, color: "rgba(52,214,166,.35)", lineHeight: 1, flexShrink: 0, minWidth: 36 }}>{step.num}</div>
                <div>
                  <div style={{ ...sora, fontSize: 20, fontWeight: 600, color: C.heading, marginBottom: 8 }}>{step.title}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.65, color: C.body }}>{step.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px", textAlign: "center" }}
        >
          <Eyebrow mb={24}>Let's Talk</Eyebrow>
          <h2
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 48px)", lineHeight: 1.05, color: C.heading, margin: "0 0 36px", letterSpacing: "-.02em" }}
          >
            Got a product worth building — or running better?
          </h2>
          <Link
            to="/contact"
            data-testid="link-wwd-contact"
            style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "16px 32px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get in Touch →
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
