import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = `${import.meta.env.BASE_URL}logo.png`;

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
      {/* Header — always dark navy */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[hsl(215,65%,10%)] ${
          scrolled ? "border-b border-white/10 shadow-lg shadow-black/20" : "border-b border-transparent"
        } py-3`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="shrink-0 flex items-center" data-testid="link-logo">
            <img
              src={LOGO_URL}
              alt="WKRLY Group"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[hsl(168,68%,47%)]"
                    : "text-white/70 hover:text-white"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-[hsl(168,68%,47%)] px-5 text-sm font-semibold text-white shadow transition-colors hover:bg-[hsl(168,68%,40%)]"
              data-testid="link-nav-contact"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[hsl(215,65%,10%)] pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium ${
                    pathname === link.href
                      ? "text-[hsl(168,68%,47%)]"
                      : "text-white"
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

      <main className="flex-1 pt-[3.75rem] flex flex-col">{children}</main>

      {/* Footer — dark navy */}
      <footer className="bg-[hsl(215,65%,10%)] pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-5" data-testid="link-footer-logo">
                <img src={LOGO_URL} alt="WKRLY Group" className="h-14 w-auto" />
              </Link>
              <p className="text-white/60 max-w-sm text-base leading-relaxed">
                Building products that help people reach further.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Explore</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-white/50 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact & Legal</h3>
              <address className="not-italic text-white/50 mb-5 space-y-1 text-sm leading-relaxed">
                <p className="text-white/70 font-medium">WKRLY Group LLC</p>
                <p>30 N Gould St Ste N</p>
                <p>Sheridan, WY 82801</p>
                <p>United States</p>
              </address>
              <div className="text-white/50 space-y-1 mb-6 text-sm">
                <p>(307) 400-5868</p>
                <p>info@wkrly.com</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="text-white/50 hover:text-white transition-colors">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-white/50 hover:text-white transition-colors">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Teal divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/10" />
            <div className="h-px w-16 bg-[hsl(168,68%,47%)]" />
          </div>

          <div className="text-sm text-white/40 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 WKRLY Group LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
