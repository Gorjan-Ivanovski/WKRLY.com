import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ── Design tokens ─────────────────────────────────────────────────────────────
const C = {
  navy:      "#0a1626",
  navyDeep:  "#08121f",
  navyCard:  "#0c1a2b",
  teal:      "#34d6a6",
  heading:   "#f1f6f9",
  headingAlt:"#eef3f7",
  body:      "#92a6b8",
  muted:     "#7e93a5",
  hairline:  "rgba(255,255,255,.07)",
};

const sora:    React.CSSProperties = { fontFamily: "'Sora', sans-serif" };
const manrope: React.CSSProperties = { fontFamily: "'Manrope', sans-serif" };

// ── Shared sub-components ────────────────────────────────────────────────────
function Eyebrow({ children, mb = 18 }: { children: React.ReactNode; mb?: number }) {
  return (
    <div style={{ ...manrope, fontSize: 12, letterSpacing: ".16em", fontWeight: 600, color: C.teal, marginBottom: mb, textTransform: "uppercase" }}>
      {children}
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const whatWeDo = [
  { num: "01", title: "We build products.", body: "We design and ship SaaS products from the ground up — researched, validated, and built around a problem worth solving." },
  { num: "02", title: "We launch them.",    body: "Building is half the job. We bring products to market with the positioning, infrastructure, and momentum they need to find an audience." },
  { num: "03", title: "We grow them.",      body: "Once a product is live, we run it for years — listening, iterating, and compounding small gains into durable value." },
];

const audiences = [
  { label: "Partners",         body: "Partners with a product, an idea, or a problem worth building around." },
  { label: "Future teammates", body: "People who want to do the best work of their careers." },
  { label: "The curious",      body: "Anyone curious about what we're building next." },
];

const approach = [
  { num: "1", title: "Find the problem worth solving.", body: "We start with people, not features." },
  { num: "2", title: "Validate before we build.",       body: "Evidence beats assumptions." },
  { num: "3", title: "Build with craft.",               body: "Reliable, intuitive, useful software." },
  { num: "4", title: "Launch and operate.",             body: "We ship, learn, and keep going." },
];

const whyWKRLY = [
  { lead: "We operate — we don't abandon.", rest: "We run our products for years, not weeks." },
  { lead: "We'd rather ship one product we're proud of than ten we're not.", rest: "" },
  { lead: "Evidence before ego.", rest: "We validate with the people we're building for before we commit." },
  { lead: "Focused by design.", rest: "A small portfolio, each product earning its place." },
];

// ── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay },
});

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ ...manrope, background: C.navy }}>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", textAlign: "center", overflow: "hidden", padding: "84px 0 92px" }}>
        {/* Breathing glow */}
        <div
          className="wk-hero-glow"
          aria-hidden
          style={{
            position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
            width: 680, height: 560,
            background: "radial-gradient(circle, rgba(52,214,166,.16), transparent 62%)",
            pointerEvents: "none",
          }}
        />

        <div className="wk-section-pad" style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "0 56px" }}>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h1
              className="wk-hero-h1"
              style={{ ...sora, fontWeight: 800, fontSize: "clamp(2.4rem, 6vw, 80px)", lineHeight: 1.02, letterSpacing: "-.03em", color: C.heading, maxWidth: 880, margin: "0 auto 28px" }}
            >
              Software for people who are{" "}
              <span style={{ color: C.teal }}>going somewhere.</span>
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 600, margin: "0 auto 40px" }}>
              WKRLY Group builds, launches, and operates a portfolio of SaaS products — each one made to help people get further in their work.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/what-we-do"
                data-testid="link-hero-what-we-do"
                style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "16px 30px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Explore What We Do →
              </Link>
              <Link
                to="/portfolio"
                data-testid="link-hero-portfolio"
                style={{ border: "1px solid rgba(255,255,255,.18)", color: C.heading, fontWeight: 600, padding: "16px 30px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "background 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                See Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO / THESIS ──────────────────────────────────────────────────── */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 56px" }}
        >
          <Eyebrow mb={28}>The Thesis</Eyebrow>
          <p
            className="wk-thesis-p"
            style={{ ...sora, fontWeight: 600, fontSize: "clamp(1.7rem, 3vw, 42px)", lineHeight: 1.22, color: C.headingAlt, maxWidth: 920, margin: "0 0 28px", letterSpacing: "-.01em" }}
          >
            Give people better tools and they do better work.{" "}
            <span style={{ color: C.teal }}>That's the whole thesis.</span>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: C.body, maxWidth: 620, margin: 0 }}>
            WKRLY Group builds, launches, and operates a growing portfolio of SaaS products and digital properties — each designed to help professionals set a goal and actually reach it.
          </p>
        </motion.div>
      </div>

      {/* ── WHAT WE DO ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div
            {...fadeUp()}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 50, flexWrap: "wrap", gap: 16 }}
          >
            <div>
              <Eyebrow mb={18}>What We Do</Eyebrow>
              <h2
                className="wk-section-h2"
                style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 48px)", lineHeight: 1.05, color: C.heading, margin: 0, letterSpacing: "-.02em" }}
              >
                Built, launched, and<br />run for the long haul.
              </h2>
            </div>
            <Link
              to="/what-we-do"
              data-testid="link-learn-how-we-work"
              style={{ fontSize: 14, fontWeight: 600, color: C.teal, textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 150ms" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              See how we work →
            </Link>
          </motion.div>

          <div
            className="wk-three-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item.num}
                {...fadeUp(i * 0.1)}
                style={{ background: C.navyCard, padding: "38px 32px" }}
              >
                <div style={{ ...sora, fontSize: 14, fontWeight: 700, color: C.teal, marginBottom: 22 }}>{item.num}</div>
                <div style={{ ...sora, fontSize: 20, fontWeight: 600, color: C.heading, marginBottom: 12 }}>{item.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: C.muted }}>{item.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHO WE WORK WITH ────────────────────────────────────────────────── */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Who We Work With</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              Three kinds of people.
            </h2>
          </motion.div>
          <div
            className="wk-three-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {audiences.map((a, i) => (
              <motion.div key={a.label} {...fadeUp(i * 0.1)} style={{ background: C.navyCard, padding: "38px 32px" }}>
                <div style={{ ...manrope, fontSize: 12, letterSpacing: ".14em", fontWeight: 600, color: C.teal, marginBottom: 14, textTransform: "uppercase" }}>{a.label}</div>
                <div style={{ ...sora, fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: C.headingAlt }}>{a.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW WE WORK ─────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div
            {...fadeUp()}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}
          >
            <div>
              <Eyebrow mb={18}>How We Work</Eyebrow>
              <h2
                className="wk-section-h2"
                style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 48px)", lineHeight: 1, color: C.heading, margin: 0, letterSpacing: "-.02em" }}
              >
                Four steps. One obsession.
              </h2>
            </div>
            <Link
              to="/what-we-do"
              data-testid="link-see-approach"
              style={{ fontSize: 14, fontWeight: 600, color: C.teal, textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 150ms" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              See our approach in detail →
            </Link>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {approach.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.1)}
                style={{ background: C.navyCard, padding: 32, display: "flex", gap: 22, alignItems: "flex-start" }}
              >
                <div style={{ ...sora, fontSize: 30, fontWeight: 700, color: "rgba(52,214,166,.55)", lineHeight: 1, flexShrink: 0 }}>{step.num}</div>
                <div>
                  <div style={{ ...sora, fontSize: 18, fontWeight: 600, color: C.heading, marginBottom: 6 }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: C.muted }}>{step.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY WKRLY ───────────────────────────────────────────────────────── */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Why WKRLY</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              Built differently, on purpose.
            </h2>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
          >
            {whyWKRLY.map((item, i) => (
              <motion.div
                key={item.lead}
                {...fadeUp(i * 0.08)}
                style={{ borderLeft: `2px solid ${C.teal}`, padding: "4px 0 4px 24px" }}
              >
                <div style={{ ...sora, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: C.heading, marginBottom: item.rest ? 8 : 0 }}>{item.lead}</div>
                {item.rest && <div style={{ fontSize: 15, lineHeight: 1.6, color: C.muted }}>{item.rest}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ position: "relative", padding: "104px 56px", borderTop: `1px solid ${C.hairline}`, textAlign: "center", overflow: "hidden" }}
        >
          <div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(52,214,166,.13), transparent 60%)", pointerEvents: "none" }}
          />
          <div style={{ position: "relative" }}>
            <Eyebrow mb={26}>Let's Build Something</Eyebrow>
            <h2
              className="wk-cta-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 54px)", lineHeight: 1.05, color: C.heading, margin: "0 0 22px", letterSpacing: "-.02em" }}
            >
              Have an idea, a partnership,<br />or a question?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.body, maxWidth: 560, margin: "0 auto 36px" }}>
              Potential partner, future teammate, or just curious about what we're building — we'd like to hear from you.
            </p>
            <Link
              to="/contact"
              data-testid="link-cta-get-in-touch"
              style={{ ...sora, display: "inline-block", background: C.teal, color: "#08121f", fontWeight: 700, padding: "17px 36px", borderRadius: 9, fontSize: 16, textDecoration: "none", transition: "opacity 150ms", cursor: "pointer" }}
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
