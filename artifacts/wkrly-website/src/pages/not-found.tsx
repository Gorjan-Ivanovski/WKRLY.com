import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const C = {
  navy: "#0a1626", navyDeep: "#08121f", navyCard: "#0c1a2b",
  teal: "#34d6a6", heading: "#f1f6f9", body: "#92a6b8", muted: "#7e93a5",
  hairline: "rgba(255,255,255,.07)",
};
const sora: React.CSSProperties = { fontFamily: "'Sora', sans-serif" };
const manrope: React.CSSProperties = { fontFamily: "'Manrope', sans-serif" };

export default function NotFound() {
  return (
    <div style={{ ...manrope, background: C.navy, minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="wk-section-pad"
        style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 56px", width: "100%" }}
      >
        <div style={{ ...sora, fontSize: 80, fontWeight: 800, color: C.teal, lineHeight: 1, marginBottom: 24, opacity: 0.6 }}>404</div>
        <h1 style={{ ...sora, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 42px)", color: C.heading, margin: "0 0 16px", letterSpacing: "-.02em" }}>
          Page not found.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: C.body, maxWidth: 440, marginBottom: 36 }}>
          The page you're looking for doesn't exist or may have moved. Try heading back to the homepage.
        </p>
        <Link
          to="/"
          style={{ ...sora, background: C.teal, color: "#08121f", fontWeight: 700, padding: "14px 28px", borderRadius: 9, fontSize: 15, textDecoration: "none", transition: "opacity 150ms", display: "inline-block" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
