import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Legal</p>
          <h1 className="text-5xl font-bold tracking-tight mb-4 leading-[1.1]">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: June 2026</p>

          <div className="prose prose-slate max-w-none space-y-10">
            <div className="p-6 rounded-lg border border-border/60 bg-secondary/20 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Important:</strong> This Privacy Policy is a starting template written in plain, professional language. It is not legal advice. Before publishing, have it reviewed by a qualified attorney and tailored to your actual data practices and the laws that apply to you (for example, US state privacy laws such as the CCPA/CPRA, and the GDPR if you have users in the EU/UK).
            </div>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how WKRLY Group LLC ("WKRLY Group," "we," "us," or "our") collects, uses, and protects information when you visit our website or interact with us. By using our website, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Information we collect</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground font-semibold">Information you provide to us.</strong> When you contact us, apply for a role, or otherwise communicate with us, we may collect information such as your name, email address, company, and the contents of your message.</p>
                <p><strong className="text-foreground font-semibold">Information we collect automatically.</strong> When you visit our website, we may automatically collect technical information such as your IP address, browser type, device information, pages viewed, and how you arrived at and navigate our site. We collect this information using cookies and similar technologies (see our Cookie Policy).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">How we use information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your enquiries and communicate with you;</li>
                <li>Review and process career applications;</li>
                <li>Operate, maintain, and improve our website;</li>
                <li>Understand how our website is used;</li>
                <li>Protect the security and integrity of our website and business; and</li>
                <li>Comply with our legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">How we share information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground font-semibold">Service providers</strong> who help us operate our website and business (for example, hosting, analytics, and email providers), under appropriate confidentiality obligations;</li>
                <li><strong className="text-foreground font-semibold">Legal and regulatory authorities</strong> where required by law or to protect our rights; and</li>
                <li><strong className="text-foreground font-semibold">Successors</strong> in the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Data retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Your rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on where you live, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the use of your information, and to object to certain processing. To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@wkrly.com" className="text-primary hover:underline">info@wkrly.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Data security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable technical and organizational measures to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Children's privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is not directed to children under 13, and we do not knowingly collect personal information from them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">International users</h2>
              <p className="text-muted-foreground leading-relaxed">
                WKRLY Group LLC is based in the United States. If you access our website from outside the United States, you understand that your information may be processed in the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Changes to this policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the "Last updated" date above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Contact us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <address className="not-italic mt-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">WKRLY Group LLC</strong><br />
                30 N Gould St Ste N<br />
                Sheridan, WY 82801, United States<br />
                <a href="mailto:info@wkrly.com" className="text-primary hover:underline">info@wkrly.com</a> · (307) 400-5868
              </address>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 flex gap-6 text-sm">
            <Link to="/terms-of-use" className="text-primary hover:underline">Terms of Use</Link>
            <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
