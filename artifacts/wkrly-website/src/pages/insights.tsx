import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const C = {
  navy: "#0a1626", navyDeep: "#08121f", navyCard: "#0c1a2b",
  teal: "#34d6a6", heading: "#f1f6f9",
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

const categories = ["Building Products", "The Future of Work", "Goals & Progress", "Behind the Build"];

export default function Insights() {
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
          <Eyebrow mb={28}>Insights</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 640, margin: "0 0 28px" }}
          >
            Ideas worth sharing.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 560 }}>
            Thoughts from our team on building products, the future of work, and what it really takes to help people reach their goals.
          </p>
        </motion.div>
      </section>

      {/* INTRO + CATEGORIES */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 56px" }}>
          <motion.div {...fadeUp()} style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: C.body, maxWidth: 600 }}>
              We learn a lot building products for ambitious people — about software, about work, and about what actually helps someone make progress. This is where we share some of it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
          >
            {categories.map((cat) => (
              <span
                key={cat}
                data-testid={`tag-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ display: "inline-flex", alignItems: "center", padding: "6px 16px", border: `1px solid ${C.hairline}`, borderRadius: 100, fontSize: 13, fontWeight: 500, color: C.muted, cursor: "default" }}
              >
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* EMPTY STATE */}
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          {...fadeUp()}
          className="wk-section-pad"
          style={{ padding: "90px 56px", borderTop: `1px solid ${C.hairline}` }}
        >
          <div
            style={{ maxWidth: 560, background: C.navyCard, border: `1px dashed ${C.hairline}`, borderRadius: 14, padding: "56px 40px", textAlign: "center" }}
          >
            <p style={{ ...sora, fontSize: 17, fontWeight: 600, color: C.heading, marginBottom: 12 }}>We're just getting started.</p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: C.body, marginBottom: 28 }}>
              Our first pieces are on the way — check back soon, or get in touch to stay in the loop.
            </p>
            <Link
              to="/contact"
              data-testid="link-insights-get-in-touch"
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
  );
}
