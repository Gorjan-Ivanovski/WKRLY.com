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

function Eyebrow({ children, mb = 18 }: { children: React.ReactNode; mb?: number }) {
  return (
    <div style={{ ...manrope, fontSize: 12, letterSpacing: ".16em", fontWeight: 600, color: C.teal, marginBottom: mb, textTransform: "uppercase" }}>
      {children}
    </div>
  );
}

const whyWKRLY = [
  { lead: "Operators, not flippers.", rest: "We run our products for years, not weeks. Long-term viability is a prerequisite, not an afterthought." },
  { lead: "Quality over dilution.", rest: "We maintain a tight portfolio, preferring to perfect a single solution rather than juggle ten mediocre ones." },
  { lead: "Validation before code.", rest: "We invest heavily in understanding workflows before we write a single line. Evidence guides our engineering." },
  { lead: "Obsessive about craft.", rest: "Great software feels invisible—it simplifies, it accelerates, and it stays out of the way." },
];

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay },
});

export default function Home() {
  return (
    <div style={{ ...manrope, background: C.navy }}>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", textAlign: "center", overflow: "hidden", padding: "84px 0 92px" }}>
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
              WKRLY Group builds, launches, and operates a focused portfolio of SaaS products and digital properties.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                data-testid="link-hero-subscribe"
                style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "16px 30px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Subscribe for Updates
              </Link>
              <Link
                to="/portfolio"
                data-testid="link-hero-portfolio"
                style={{ border: "1px solid rgba(255,255,255,.18)", color: C.heading, fontWeight: 600, padding: "16px 30px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "background 150ms", display: "inline-block" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THESIS ──────────────────────────────────────────────────────────── */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 56px" }}
        >
          <Eyebrow mb={28}>Thesis</Eyebrow>
          <p
            className="wk-thesis-p"
            style={{ ...sora, fontWeight: 600, fontSize: "clamp(1.7rem, 3vw, 42px)", lineHeight: 1.22, color: C.headingAlt, maxWidth: 920, margin: 0, letterSpacing: "-.01em" }}
          >
            Give people better tools and they do better work.{" "}
            <span style={{ color: C.teal }}>That is the founding principle of WKRLY Group.</span>
          </p>
        </motion.div>
      </div>

      {/* ── WHAT WE DO ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div {...fadeUp()} className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <Eyebrow mb={24}>What We Do</Eyebrow>
          <p style={{ ...sora, fontWeight: 500, fontSize: "clamp(1.25rem, 2.2vw, 28px)", lineHeight: 1.45, color: C.headingAlt, maxWidth: 880, margin: 0, letterSpacing: "-.01em" }}>
            WKRLY builds, launches, and operates a focused portfolio of SaaS products and digital properties. We do not chase trends; we pursue friction—the persistent, daily inefficiencies that keep ambitious professionals from performing at their best.
          </p>
        </motion.div>
      </div>

      {/* ── WHO WE SERVE ────────────────────────────────────────────────────── */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <motion.div {...fadeUp()} className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px" }}>
          <Eyebrow mb={24}>Who We Serve</Eyebrow>
          <p style={{ fontSize: "clamp(1.05rem, 1.7vw, 19px)", lineHeight: 1.7, color: C.body, maxWidth: 820, margin: 0 }}>
            We build for operators, creators, and builders who refuse to accept "good enough" software. If you have ever felt that your core tools were designed for vendor convenience rather than your actual outcomes, we are building for you.
          </p>
        </motion.div>
      </div>

      {/* ── WHY WKRLY ───────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="wk-section-pad" style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}>
          <motion.div {...fadeUp()}>
            <Eyebrow mb={18}>Why WKRLY</Eyebrow>
            <h2
              className="wk-section-h2"
              style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 48px)", lineHeight: 1, color: C.heading, margin: "0 0 48px", letterSpacing: "-.02em" }}
            >
              Built differently, by design.
            </h2>
          </motion.div>
          <div
            className="wk-two-col"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: C.hairline, border: `1px solid ${C.hairline}`, borderRadius: 14, overflow: "hidden" }}
          >
            {whyWKRLY.map((item, i) => (
              <motion.div key={item.lead} {...fadeUp(i * 0.08)} style={{ background: C.navyCard, padding: "34px 32px" }}>
                <div style={{ ...sora, fontSize: 19, fontWeight: 600, color: C.heading, marginBottom: 10 }}>{item.lead}</div>
                <div style={{ fontSize: 15, lineHeight: 1.65, color: C.muted }}>{item.rest}</div>
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
          style={{ position: "relative", padding: "96px 56px", borderTop: `1px solid ${C.hairline}`, textAlign: "center", overflow: "hidden" }}
        >
          <div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(52,214,166,.13), transparent 60%)", pointerEvents: "none" }}
          />
          <div style={{ position: "relative", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              data-testid="link-cta-subscribe"
              style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "17px 36px", borderRadius: 9, fontSize: 16, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Subscribe for Updates
            </Link>
            <Link
              to="/portfolio"
              data-testid="link-cta-portfolio"
              style={{ border: "1px solid rgba(255,255,255,.18)", color: C.heading, fontWeight: 600, padding: "17px 36px", borderRadius: 9, fontSize: 16, textDecoration: "none", transition: "background 150ms", display: "inline-block" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              View Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
