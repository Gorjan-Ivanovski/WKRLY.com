import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
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
  }, [location]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight" data-testid="link-logo">
            WKRLY Group
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              data-testid="link-nav-contact"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium ${location === link.href ? "text-primary" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-primary-foreground"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-24 pb-12 flex flex-col">{children}</main>

      <footer className="border-t border-border/50 bg-secondary/30 pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block" data-testid="link-footer-logo">
                WKRLY Group
              </Link>
              <p className="text-muted-foreground max-w-sm text-lg">
                Building products that help people reach further.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact & Legal</h3>
              <address className="not-italic text-muted-foreground mb-4 space-y-1">
                WKRLY Group LLC<br />
                30 N Gould St Ste N<br />
                Sheridan, WY 82801<br />
                United States
              </address>
              <div className="text-muted-foreground space-y-1 mb-6">
                <p>(307) 400-5868</p>
                <p>info@wkrly.com</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link></li>
                <li><Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-8">
            <p>&copy; 2026 WKRLY Group LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
