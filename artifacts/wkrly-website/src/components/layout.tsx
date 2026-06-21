import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CookieBanner from "./cookie-banner";
import logoLightSrc from "@assets/wkrly-logo-light_1782025718093.svg";
import logoMarkSrc from "@assets/wkrly-mark_1782025718094.svg";

const TEAL = "#34d6a6";
const HAIRLINE = "rgba(255,255,255,.07)";

function WkrlyLogo({ height = 28 }: { height?: number }) {
  return (
    <img
      src={logoLightSrc}
      alt="WKRLY"
      height={height}
      style={{ display: "block", height, width: "auto", flexShrink: 0 }}
    />
  );
}

function WkrlyMark({ size = 28 }: { size?: number }) {
  return (
    <img
      src={logoMarkSrc}
      alt=""
      aria-hidden
      height={size}
      style={{ display: "block", height: size, width: "auto", flexShrink: 0 }}
    />
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
  ];

  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a1626" }}>

      {/* ── NAV ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#0a1626",
          borderBottom: `1px solid ${scrolled ? HAIRLINE : "transparent"}`,
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,.35)" : "none",
          transition: "border-color 300ms, box-shadow 300ms",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 56px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="wk-section-pad"
        >
          <Link
            to="/"
            data-testid="link-logo"
            aria-label="WKRLY"
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            <WkrlyLogo height={28} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: ".01em",
                  color: pathname === link.href ? TEAL : "rgba(255,255,255,.65)",
                  textDecoration: "none",
                  transition: "color 150ms",
                }}
                onMouseEnter={e => { if (pathname !== link.href) e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { if (pathname !== link.href) e.currentTarget.style.color = "rgba(255,255,255,.65)"; }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-testid="link-nav-contact"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                background: TEAL,
                color: "#08121f",
                padding: "9px 20px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "opacity 150ms",
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8, borderRadius: 6 }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            style={{
              position: "fixed", inset: 0, zIndex: 40,
              background: "#08121f",
              paddingTop: 96, paddingLeft: 32, paddingRight: 32, paddingBottom: 32,
              display: "flex", flexDirection: "column",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: pathname === link.href ? TEAL : "#fff",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                style={{
                  marginTop: 16,
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  background: TEAL,
                  color: "#08121f",
                  padding: "14px 24px",
                  borderRadius: 9,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-[72px] flex flex-col">{children}</main>
      <CookieBanner />

      {/* ── FOOTER ── */}
      <footer style={{ background: "#08121f", borderTop: `1px solid ${HAIRLINE}` }}>
        {/* Main grid */}
        <div
          className="wk-section-pad wk-footer-grid"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "56px 56px 40px",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 48,
          }}
        >
          {/* Brand + descriptor + contact */}
          <div style={{ maxWidth: 340 }}>
            <Link
              to="/"
              data-testid="link-footer-logo"
              aria-label="WKRLY"
              style={{ textDecoration: "none", display: "inline-block", marginBottom: 18 }}
            >
              <WkrlyLogo height={24} />
            </Link>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, lineHeight: 1.65, color: "#aab9c6", margin: "0 0 20px" }}>
              We build, launch, and operate a portfolio of SaaS products and digital properties.
            </p>
            <address style={{ fontStyle: "normal", fontFamily: "'Manrope', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#7e93a5" }}>
              <div>WKRLY Group LLC</div>
              <div>Sheridan, WY 82801</div>
              <div style={{ marginTop: 8 }}>
                <a href="tel:+13074005868" style={{ color: "#7e93a5", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#aab9c6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#7e93a5")}
                >(307) 400-5868</a>
                {" · "}
                <a href="mailto:info@wkrly.com" style={{ color: "#7e93a5", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#aab9c6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#7e93a5")}
                >info@wkrly.com</a>
              </div>
            </address>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, letterSpacing: ".14em", fontWeight: 600, color: "#56697a", marginBottom: 18, textTransform: "uppercase" }}>Explore</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 14, color: "#aab9c6", textDecoration: "none", transition: "color 150ms" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#aab9c6")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 11, letterSpacing: ".14em", fontWeight: 600, color: "#56697a", marginBottom: 18, textTransform: "uppercase" }}>Legal</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 14, color: "#aab9c6", textDecoration: "none", transition: "color 150ms" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#aab9c6")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Hairline divider */}
        <div style={{ height: 1, background: HAIRLINE, maxWidth: 1240, margin: "0 auto 0" }} className="wk-section-pad" />

        {/* Bottom row */}
        <div
          className="wk-section-pad"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "20px 56px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "#56697a", margin: 0 }}>
            &copy; 2026 WKRLY Group LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
