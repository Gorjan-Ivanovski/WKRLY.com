import { motion } from "framer-motion";
import { Link } from "wouter";

export default function TermsOfUse() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Legal</p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 leading-[1.1]">Terms of Use</h1>
          <p className="text-muted-foreground mb-12">Last updated: June 2026</p>

          <div className="space-y-10">
            <div className="p-6 rounded-lg border border-border/60 bg-secondary/20 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Important:</strong> This is a starting template, not legal advice. Have it reviewed and adapted by a qualified attorney before publishing.
            </div>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Acceptance of terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use ("Terms") govern your access to and use of the website operated by WKRLY Group LLC ("WKRLY Group," "we," "us," or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Use of our website</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the website in any way that violates applicable law or regulation;</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems;</li>
                <li>Interfere with or disrupt the operation of the website; or</li>
                <li>Use the website to transmit harmful, fraudulent, or unlawful content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Intellectual property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The website and its content — including text, graphics, logos, and design — are owned by or licensed to WKRLY Group LLC and are protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Third-party links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites, and links do not imply endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is provided "as is" and "as available" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted, error-free, or secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Limitation of liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, WKRLY Group LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless WKRLY Group LLC and its officers, employees, and affiliates from any claims, damages, or expenses arising out of your use of the website or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Changes to these terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Governing law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of Wyoming, United States, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Contact us</h2>
              <p className="text-muted-foreground leading-relaxed">Questions about these Terms can be directed to:</p>
              <address className="not-italic mt-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">WKRLY Group LLC</strong><br />
                30 N Gould St Ste N<br />
                Sheridan, WY 82801, United States<br />
                <a href="mailto:info@wkrly.com" className="text-primary hover:underline">info@wkrly.com</a> · (307) 400-5868
              </address>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
            <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
