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

const whyJoin = [
  { title: "Your work has a clear purpose.", body: "Everything we build is meant to help someone get ahead. You'll see the impact of your work in the progress of real people." },
  { title: "You'll own real outcomes.", body: "We're a company of operators. You'll have the autonomy to make decisions and the accountability that comes with it." },
  { title: "You'll do your best work.", body: "We protect focus, value craft, and give people the room and trust to be excellent at what they do." },
  { title: "You'll grow.", body: "We build products that help people advance — and we hold ourselves to the same standard. Your development matters to us." },
];

const culture = [
  { title: "Small teams, big ownership.", body: "We keep teams lean so individuals can have outsized impact." },
  { title: "Bias to ship.", body: "We learn by putting real things in front of real people." },
  { title: "High standards, low ego.", body: "We push each other to be better and leave the politics out of it." },
  { title: "Long-term thinking.", body: "We make decisions we'll be proud of years from now." },
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
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 760, margin: "0 0 28px" }}
          >
            Build products people actually need.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 560, marginBottom: 36 }}>
            At WKRLY Group, you'll help create software that helps people reach their goals. That's the work. It matters, and we take it seriously.
          </p>
          <a
            href="#open-roles"
            data-testid="link-careers-see-roles"
            style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "14px 28px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            See Open Roles
          </a>
        </motion.div>
      </section>

      {/* WHY JOIN US */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Why Join Us</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              Why work here
            </h2>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {whyJoin.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.09)} style={{ background: C.navyCard, padding: "32px 30px" }}>
                <div style={{ ...sora, fontSize: 17, fontWeight: 600, color: C.heading, marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: C.muted }}>{item.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CULTURE */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Culture</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              How we work
            </h2>
          </motion.div>
          <div style={{ maxWidth: 680 }}>
            {culture.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "22px 0", borderBottom: i < culture.length - 1 ? `1px solid ${C.hairline}` : undefined }}
              >
                <span style={{ color: C.teal, fontWeight: 700, fontSize: 18, flexShrink: 0, marginTop: 2 }}>—</span>
                <div>
                  <span style={{ ...sora, fontWeight: 600, color: C.heading, fontSize: 15 }}>{item.title}</span>{" "}
                  <span style={{ color: C.body, fontSize: 15, lineHeight: 1.6 }}>{item.body}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE'RE LOOKING FOR */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <div className="wk-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            <motion.div {...fadeUp()}>
              <Eyebrow mb={18}>The Right Fit</Eyebrow>
              <h2 style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 36px)", lineHeight: 1.1, color: C.heading, margin: 0 }}>
                Who we're looking for
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} style={{ fontSize: 17, lineHeight: 1.7, color: C.body }}>
              <p style={{ marginBottom: 20 }}>
                We hire builders — people who are curious, accountable, and genuinely care about the quality of what they make. You'll fit in here if you're driven by outcomes, comfortable with ambiguity, and energized by the idea of helping people reach their goals through better software.
              </p>
              <p>
                We welcome talented people across product, engineering, design, research, growth, and operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* OPEN ROLES */}
      <div id="open-roles" style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Open Roles</Eyebrow>
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
                We don't have specific roles posted right now, but we're growing. If you believe you'd be a great addition to WKRLY Group, introduce yourself — we read every message.
              </p>
              <Link
                to="/contact"
                data-testid="link-careers-contact"
                style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "12px 24px", borderRadius: 8, fontSize: 14, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Get in Touch
              </Link>
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
