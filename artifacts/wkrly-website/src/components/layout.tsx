import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CookieBanner from "./cookie-banner";
import logoSrc from "@assets/ChatGPT_Image_Jun_10,_2026,_06_34_04_PM_1781934314956.png";

function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const imgClass =
    size === "sm" ? "h-20 w-auto" :
    size === "lg" ? "h-40 w-auto" :
    "h-32 w-auto";

  return (
    <img
      src={logoSrc}
      alt="WKRLY Group"
      className={imgClass}
      style={{ objectFit: "contain" }}
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[hsl(215,65%,10%)] py-4 ${
          scrolled
            ? "border-b border-white/10 shadow-xl shadow-black/30"
            : "border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" data-testid="link-logo" className="shrink-0">
            <LogoMark size="md" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[hsl(168,68%,47%)]"
                    : "text-white/65 hover:text-white"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-[hsl(168,68%,47%)] px-5 text-sm font-semibold text-white shadow-md shadow-black/20 transition-all hover:bg-[hsl(168,68%,40%)] hover:shadow-lg"
              data-testid="link-nav-contact"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 z-40 bg-[hsl(215,65%,9%)] pt-24 px-6 pb-8 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium ${
                    pathname === link.href ? "text-[hsl(168,68%,47%)]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-md bg-[hsl(168,68%,47%)] px-6 font-semibold text-white"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-40 flex flex-col">{children}</main>
      <CookieBanner />

      {/* Footer */}
      <footer className="bg-[hsl(215,65%,8%)] pt-16 pb-8 border-t border-white/8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6" data-testid="link-footer-logo">
                <LogoMark size="lg" />
              </Link>
              <p className="text-white/50 max-w-xs text-sm leading-relaxed">
                Building products that help people reach further — one tool, one win, at a time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white/90 mb-5 text-xs uppercase tracking-widest">
                Explore
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/45 hover:text-[hsl(168,68%,47%)] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    className="text-white/45 hover:text-[hsl(168,68%,47%)] transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white/90 mb-5 text-xs uppercase tracking-widest">
                Contact & Legal
              </h3>
              <address className="not-italic text-white/45 mb-5 space-y-1 text-sm leading-relaxed">
                <p className="text-white/70 font-medium">WKRLY Group LLC</p>
                <p>30 N Gould St Ste N</p>
                <p>Sheridan, WY 82801</p>
                <p>United States</p>
              </address>
              <div className="text-white/45 space-y-1 mb-6 text-sm">
                <p>(307) 400-5868</p>
                <p>info@wkrly.com</p>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Use", href: "/terms-of-use" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-white/40 hover:text-white/70 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Circuit-style divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/8" />
            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" className="shrink-0 opacity-60">
              <circle cx="5" cy="5" r="2.5" fill="hsl(168,68%,47%)" />
              <line x1="7.5" y1="5" x2="32.5" y2="5" stroke="hsl(168,68%,47%)" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="35" cy="5" r="2.5" fill="hsl(168,68%,47%)" />
            </svg>
            <div className="h-px flex-1 bg-white/8" />
          </div>

          <p className="text-xs text-white/30 text-center">
            &copy; 2026 WKRLY Group LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
