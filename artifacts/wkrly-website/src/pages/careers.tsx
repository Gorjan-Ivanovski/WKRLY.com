import { motion } from "framer-motion";

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

const lookFor = [
  { lead: "Character and curiosity", rest: " over a perfect résumé." },
  { lead: "Ownership", rest: " — people who run toward the outcome." },
  { lead: "Craft", rest: " — a real standard for the work you put your name on." },
];

export default function Careers() {
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
          <Eyebrow mb={28}>Careers</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 780, margin: "0 0 28px" }}
          >
            Build things that matter, with people who care.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 580 }}>
            We're a small team that holds a high bar. If that's where you do your best work, we'd like to meet you.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>What We Look For</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              Three things we hire for
            </h2>
          </motion.div>
          <div
            className="wk-three-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {lookFor.map((item, i) => (
              <motion.div key={item.lead} {...fadeUp(i * 0.1)} style={{ background: C.navyCard, padding: "38px 32px" }}>
                <p style={{ ...sora, fontSize: 18, fontWeight: 500, lineHeight: 1.5, color: C.headingAlt, margin: 0 }}>
                  <span style={{ fontWeight: 700, color: C.heading }}>{item.lead}</span>{item.rest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CURRENT OPENINGS */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Current Openings</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 40px)", lineHeight: 1.1, color: C.heading, margin: "0 0 32px", letterSpacing: "-.02em", maxWidth: 600 }}
            >
              We're always interested in meeting exceptional people.
            </h2>
            <div
              style={{ maxWidth: 620, background: C.navyCard, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: 40 }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.7, color: C.body, marginBottom: 28 }}>
                We don't have specific roles posted right now, but we're growing. If you think you'd be a strong addition to WKRLY Group, introduce yourself — we read every message.
              </p>
              <a
                href="mailto:info@wkrly.com"
                data-testid="link-careers-introduce"
                style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "13px 26px", borderRadius: 9, fontSize: 14, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Introduce Yourself → info@wkrly.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* EQUAL OPPORTUNITY */}
      <div style={{ borderTop: `1px solid ${C.hairline}` }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 56px" }}
        >
          <p style={{ fontSize: 13, lineHeight: 1.7, color: C.muted, maxWidth: 720 }}>
            <span style={{ color: C.body, fontWeight: 600 }}>Equal Opportunity Employer.</span>{" "}
            WKRLY Group LLC is an equal opportunity employer. We are committed to building a team that reflects a range of backgrounds, perspectives, and experiences, and we do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, veteran status, or any other characteristic protected by applicable law.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
