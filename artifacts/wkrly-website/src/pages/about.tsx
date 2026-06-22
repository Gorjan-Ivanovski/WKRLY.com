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

const operate = [
  { lead: "Ship, then listen, then improve.", rest: "We do not wait for perfection; we launch, learn, and iterate with precision." },
  { lead: "Discipline over distraction.", rest: "We say no to good ideas so we have the bandwidth to do great work on the right ones." },
  { lead: "Trust is earned daily.", rest: "We treat our users' time, attention, and trust as our most valuable assets—every feature must justify its existence." },
  { lead: "Craft and outcomes in equal measure.", rest: "We hold a high bar for code, design, and utility, and we measure our success by the success of the people who use what we build." },
];

export default function About() {
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
          <Eyebrow mb={28}>About WKRLY Group</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 760, margin: "0 0 28px" }}
          >
            We take ambition seriously.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 640 }}>
            WKRLY is a product company built on a single, clear thesis: the right tool, introduced at the right moment, can fundamentally change the trajectory of someone's professional work.
          </p>
        </motion.div>
      </section>

      {/* OUR PERSPECTIVE */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <div className="wk-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            <motion.div {...fadeUp()}>
              <Eyebrow mb={0}>Our Perspective</Eyebrow>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <p style={{ ...sora, fontWeight: 500, fontSize: "clamp(1.2rem, 2vw, 26px)", lineHeight: 1.5, color: C.headingAlt, margin: 0, letterSpacing: "-.01em" }}>
                We observed a persistent gap between what professionals aim to achieve and the tools available to help them get there. Too many products are engineered to extract attention. We engineer ours to deliver tangible progress.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* OUR FOUNDATION */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <div className="wk-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            <motion.div {...fadeUp()}>
              <Eyebrow mb={0}>Our Foundation</Eyebrow>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: C.body, margin: 0 }}>
                Our team brings over 20 years of experience launching and scaling SaaS and digital products across both large enterprises and early-stage startups. This dual perspective gives us a rare combination of institutional discipline and builder agility—we understand the rigor required at scale, yet we move with the speed and intentionality of a focused founding team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* HOW WE OPERATE */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={40}>How We Operate</Eyebrow>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {operate.map((item, i) => (
              <motion.div key={item.lead} {...fadeUp(i * 0.08)} style={{ background: C.navyCard, padding: "34px 32px" }}>
                <div style={{ ...sora, fontSize: 18, fontWeight: 600, color: C.heading, marginBottom: 10 }}>{item.lead}</div>
                <div style={{ fontSize: 15, lineHeight: 1.65, color: C.muted }}>{item.rest}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ position: "relative", padding: "96px 56px", borderTop: `1px solid ${C.hairline}`, textAlign: "center", overflow: "hidden" }}
        >
          <div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(52,214,166,.12), transparent 60%)", pointerEvents: "none" }}
          />
          <Link
            to="/contact"
            data-testid="link-about-stay-connected"
            style={{ position: "relative", ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "17px 36px", borderRadius: 9, fontSize: 16, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Stay Connected with Our Work
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
