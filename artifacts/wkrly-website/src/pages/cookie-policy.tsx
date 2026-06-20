import { motion } from "framer-motion";
import { Link } from "wouter";

export default function CookiePolicy() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Legal</p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 leading-[1.1]">Cookie Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: June 2026</p>

          <div className="space-y-10">
            <div className="p-6 rounded-lg border border-border/60 bg-secondary/20 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Important:</strong> This is a template only, not legal advice. Adapt to the actual cookies and trackers your site uses, and have it reviewed by an attorney.
            </div>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">What are cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help websites function, remember your preferences, and understand how the site is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">How we use cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                WKRLY Group LLC uses cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li><strong className="text-foreground font-semibold">Operate our website</strong> — essential cookies required for the site to function;</li>
                <li><strong className="text-foreground font-semibold">Understand usage</strong> — analytics cookies that help us see how visitors interact with our site; and</li>
                <li><strong className="text-foreground font-semibold">Improve your experience</strong> — preference cookies that remember your settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Managing cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most browsers let you control cookies through their settings, including blocking or deleting them. Disabling certain cookies may affect how our website functions. Where required, we will request your consent before placing non-essential cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Changes to this policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time and will post any changes on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Contact us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about our use of cookies can be sent to{" "}
                <a href="mailto:info@wkrly.com" className="text-primary hover:underline">info@wkrly.com</a>.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-primary hover:underline">Terms of Use</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
