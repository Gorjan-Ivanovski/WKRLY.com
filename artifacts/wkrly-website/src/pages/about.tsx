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

const beliefs = [
  { title: "People come first.", body: "Every decision starts with the person on the other side of the screen. Their goals are the goals." },
  { title: "Progress over noise.", body: "We don't build for engagement metrics or vanity. We build to help people do, finish, and grow." },
  { title: "Evidence over opinion.", body: "We test our assumptions, listen to real users, and let what we learn shape what we build." },
  { title: "Craft is non-negotiable.", body: "Reliable, thoughtful, well-made software is a sign of respect for the people who use it." },
  { title: "We're here for the long game.", body: "We build products we intend to operate and improve for years, not abandon after launch." },
  { title: "Ownership at every level.", body: "We act like owners — accountable, resourceful, and invested in the outcome." },
];

const values = [
  "We ship, then we listen, then we improve.",
  "We say no to good ideas so we can do great work on the right ones.",
  "We treat our users' time, attention, and trust as things to be earned.",
  "We hire for character and curiosity, and we give people room to do their best work.",
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
          <Eyebrow mb={28}>About</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 760, margin: "0 0 28px" }}
          >
            We exist to help people reach further.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 580 }}>
            WKRLY Group is a product company built on a simple belief: the right tool, at the right moment, can change the trajectory of someone's work — and their life.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <div className="wk-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            <motion.div {...fadeUp()}>
              <Eyebrow mb={18}>Our Story</Eyebrow>
              <h2 style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 36px)", lineHeight: 1.1, color: C.heading, margin: 0 }}>
                Why we exist
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} style={{ fontSize: 17, lineHeight: 1.7, color: C.body }}>
              <p style={{ marginBottom: 20 }}>
                WKRLY Group was founded to build software that takes ambition seriously. We saw a gap between what people want to achieve in their professional lives and the tools available to help them get there. Too many products are built to capture attention. We set out to build products that create progress.
              </p>
              <p style={{ marginBottom: 20 }}>
                Today, we develop, launch, and operate a portfolio of SaaS products and digital properties — each one designed around a single question:{" "}
                <span style={{ color: C.heading, fontWeight: 600 }}>Does this genuinely help someone move closer to their goals?</span>{" "}
                If the answer is yes, we build it. If it isn't, we don't.
              </p>
              <p>
                We're a company of builders, designers, researchers, and operators who care about craft and outcomes in equal measure. We move quickly, we hold ourselves to a high standard, and we measure our success by the success of the people who use what we make.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()} style={{ marginBottom: 48 }}>
            <Eyebrow mb={18}>Purpose</Eyebrow>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            <motion.div {...fadeUp()} style={{ background: C.navyCard, padding: 40 }}>
              <Eyebrow mb={20}>Our Mission</Eyebrow>
              <p style={{ ...sora, fontSize: "clamp(1rem, 1.8vw, 19px)", fontWeight: 600, lineHeight: 1.5, color: C.heading, margin: 0 }}>
                To build digital products that help people achieve their professional goals — and to make meaningful progress feel within reach for everyone who uses them.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} style={{ background: C.navyCard, padding: 40 }}>
              <Eyebrow mb={20}>Our Vision</Eyebrow>
              <p style={{ fontSize: "clamp(1rem, 1.5vw, 17px)", lineHeight: 1.65, color: C.body, margin: 0 }}>
                A world where ambitious people are never held back by their tools. Where setting a goal and reaching it is supported by software that's genuinely on their side.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WHAT WE BELIEVE */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Our Beliefs</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              What we believe
            </h2>
          </motion.div>
          <div
            className="wk-three-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {beliefs.map((b, i) => (
              <motion.div key={b.title} {...fadeUp(i * 0.07)} style={{ background: C.navyCard, padding: "32px 30px" }}>
                <div style={{ ...sora, fontSize: 16, fontWeight: 600, color: C.heading, marginBottom: 10 }}>{b.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: C.muted }}>{b.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES IN PRACTICE */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Values in Practice</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 42px)", lineHeight: 1.05, color: C.heading, margin: "0 0 40px", letterSpacing: "-.02em" }}
            >
              How we actually operate
            </h2>
          </motion.div>
          <div style={{ maxWidth: 680 }}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "22px 0", borderBottom: i < values.length - 1 ? `1px solid ${C.hairline}` : undefined }}
              >
                <span style={{ color: C.teal, fontWeight: 700, fontSize: 18, flexShrink: 0, marginTop: 2 }}>—</span>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: C.body, margin: 0 }}>{value}</p>
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
          <Eyebrow mb={24}>Join Us</Eyebrow>
          <h2
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 48px)", lineHeight: 1.05, color: C.heading, margin: "0 0 36px", letterSpacing: "-.02em" }}
          >
            Want to build with us — or for us?
          </h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/careers"
              data-testid="link-about-see-roles"
              style={{ border: `1px solid rgba(255,255,255,.18)`, color: C.heading, fontWeight: 600, padding: "14px 28px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "background 150ms" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              See Open Roles
            </Link>
            <Link
              to="/contact"
              data-testid="link-about-get-in-touch"
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
