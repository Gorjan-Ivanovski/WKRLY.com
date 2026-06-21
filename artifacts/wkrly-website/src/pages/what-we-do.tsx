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
  { title: "SaaS products.", body: "Subscription software built to solve real, recurring problems for professionals and the teams they work in. Tools people return to because they make work measurably better." },
  { title: "Digital properties.", body: "Beyond core software, we build the digital experiences — platforms, content, and services — that help our products reach and serve their audiences." },
  { title: "A focused portfolio.", body: "Rather than chasing every opportunity, we build a deliberate portfolio of products that share a common purpose: helping people achieve their professional goals." },
];

const process = [
  { num: "1", title: "Discover", body: "We start by understanding people and problems. Through research, conversation, and analysis, we find the goals people are struggling to reach and the friction standing in their way." },
  { num: "2", title: "Validate", body: "Before we commit to building, we test our thinking. We prototype, we put ideas in front of real people, and we look for evidence that a product is worth building — and worth using." },
  { num: "3", title: "Design & Build", body: "We design experiences that are intuitive and humane, and we engineer software that's reliable, secure, and built to scale. Craft shows up in the details, so we sweat them." },
  { num: "4", title: "Launch", body: "We bring products to market with clear positioning, the right infrastructure, and the momentum to find an audience. A great launch is a beginning, not an event." },
  { num: "5", title: "Grow & Operate", body: "Once a product is live, the real work begins. We measure, learn, and iterate — compounding small, consistent improvements into durable value for the people who rely on us." },
];

const principles = [
  { title: "Real problems only.", body: "If it doesn't help someone make progress, we don't build it." },
  { title: "Speed with judgment.", body: "We move fast, but never past the things that matter." },
  { title: "Built to be trusted.", body: "Security, reliability, and privacy are foundational, not features." },
  { title: "Designed to last.", body: "We build for the long term, not the next spike." },
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
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 820, margin: "0 0 28px" }}
          >
            We build, launch, and grow products that help people get ahead.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 580 }}>
            WKRLY Group is part product studio, part operator. We take ideas from a blank page to a live, growing product — and we run them for the long term.
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
              Three things we build.
            </h2>
          </motion.div>
          <div
            className="wk-three-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {whatWeMake.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)} style={{ background: C.navyCard, padding: "38px 32px" }}>
                <div style={{ ...sora, fontSize: 20, fontWeight: 600, color: C.heading, marginBottom: 12 }}>{item.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: C.muted }}>{item.body}</div>
              </motion.div>
            ))}
          </div>
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

      {/* WHAT GUIDES EVERY BUILD */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Our Standards</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              What guides every build
            </h2>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
          >
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.08)}
                style={{ borderLeft: `2px solid ${C.teal}`, padding: "4px 0 4px 24px" }}
              >
                <div style={{ ...sora, fontSize: 18, fontWeight: 600, color: C.heading, marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: C.muted }}>{p.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE SERVE */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}`, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}
        >
          <Eyebrow mb={28}>Who We Serve</Eyebrow>
          <p style={{ ...sora, fontWeight: 600, fontSize: "clamp(1.3rem, 2.5vw, 32px)", lineHeight: 1.3, color: C.headingAlt, marginBottom: 24, letterSpacing: "-.01em" }}>
            The people who use what we build share one thing in common: they have goals, and they're serious about reaching them.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: C.body }}>
            They might be professionals sharpening their edge, teams trying to do their best work, or individuals building something of their own. Whoever they are, our job is to help them get there faster, with less friction and more confidence.
          </p>
        </motion.div>
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
            Curious about what we're building next?
          </h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/portfolio"
              data-testid="link-wwd-portfolio"
              style={{ border: `1px solid rgba(255,255,255,.18)`, color: C.heading, fontWeight: 600, padding: "14px 28px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "background 150ms" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Explore Our Portfolio
            </Link>
            <Link
              to="/contact"
              data-testid="link-wwd-contact"
              style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "14px 28px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Get in Touch →
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
