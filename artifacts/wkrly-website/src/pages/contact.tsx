import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail } from "lucide-react";

const C = {
  navy: "#0a1626", navyDeep: "#08121f", navyCard: "#0c1a2b",
  teal: "#34d6a6", heading: "#f1f6f9",
  body: "#92a6b8", muted: "#7e93a5", faint: "#56697a", hairline: "rgba(255,255,255,.07)",
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

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay },
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "", privacyPolicy: false },
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, company: data.company, message: data.message }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ ...manrope, background: C.navy }}>

      {/* HERO */}
      <section style={{ padding: "84px 0 60px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="wk-section-pad"
          style={{ maxWidth: 1240, margin: "0 auto", padding: "0 56px" }}
        >
          <Eyebrow mb={28}>Contact</Eyebrow>
          <h1
            className="wk-section-h2"
            style={{ ...sora, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 64px)", lineHeight: 1.06, letterSpacing: "-.03em", color: C.heading, maxWidth: 560, margin: "0 0 24px" }}
          >
            Let's talk.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 20px)", lineHeight: 1.65, color: C.body, maxWidth: 520 }}>
            Potential partner, future teammate, or just curious about what we're building — we'd like to hear from you.
          </p>
        </motion.div>
      </section>

      {/* FORM + INFO */}
      <div style={{ background: C.navyDeep, borderTop: `1px solid ${C.hairline}` }}>
        <div className="wk-section-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 56px 96px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64, alignItems: "start" }} className="wk-two-col">

            {/* FORM */}
            <motion.div {...fadeUp()}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-testid="text-form-success"
                  style={{ background: C.navyCard, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: "56px 40px", textAlign: "center" }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(52,214,166,.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <span style={{ color: C.teal, fontSize: 22, fontWeight: 700 }}>✓</span>
                  </div>
                  <h3 style={{ ...sora, fontSize: 22, fontWeight: 700, color: C.heading, marginBottom: 12 }}>Message sent.</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: C.body }}>
                    Thanks for reaching out. We've received your message and will be in touch soon.
                  </p>
                </motion.div>
              ) : (
                /* CSS variable overrides so shadcn form components render on dark bg */
                <div style={{
                  "--foreground": "210 20% 95%",
                  "--muted-foreground": "215 20% 65%",
                  "--border": "215 30% 22%",
                  "--input": "215 30% 16%",
                  "--ring": "168 68% 47%",
                  "--background": "215 40% 12%",
                  "--card": "215 40% 12%",
                  "--accent": "215 30% 18%",
                  "--accent-foreground": "210 20% 95%",
                  "--destructive": "0 72% 60%",
                  color: "#eef3f7",
                } as React.CSSProperties}>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name <span style={{ color: C.teal }}>*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email <span style={{ color: C.teal }}>*</span></FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@company.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company <span style={{ fontSize: 12, color: C.muted, fontWeight: 400 }}>(optional)</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message <span style={{ color: C.teal }}>*</span></FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us what's on your mind..." className="min-h-[140px] resize-none" {...field} data-testid="textarea-message" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="privacyPolicy"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <div className="flex flex-row items-center space-x-3">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-privacy" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer leading-none" style={{ color: C.muted }}>
                                I agree to the{" "}
                                <Link to="/privacy-policy" style={{ color: C.teal, textDecoration: "none" }}>
                                  Privacy Policy
                                </Link>
                              </FormLabel>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {submitError && (
                        <p className="text-sm text-destructive" data-testid="text-submit-error">{submitError}</p>
                      )}

                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        <button
                          type="submit"
                          disabled={submitting}
                          data-testid="button-submit"
                          style={{ ...sora, alignSelf: "flex-start", background: C.teal, color: "#08121f", fontWeight: 700, padding: "14px 32px", borderRadius: 9, fontSize: 15, border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.6 : 1, transition: "opacity 150ms", display: "inline-block" }}
                        >
                          {submitting ? "Sending…" : "Send Message"}
                        </button>
                        <p style={{ fontSize: 13, lineHeight: 1.6, color: C.muted, margin: 0 }}>
                          We read every message and aim to reply within two business days.
                        </p>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div {...fadeUp(0.15)} style={{ paddingTop: 8 }}>
              <div style={{ marginBottom: 40 }}>
                <div style={{ ...manrope, fontSize: 11, letterSpacing: ".14em", fontWeight: 600, color: C.faint, marginBottom: 20, textTransform: "uppercase" }}>Direct Contact</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <a href="mailto:info@wkrly.com" data-testid="link-email" style={{ display: "flex", alignItems: "center", gap: 12, color: C.body, textDecoration: "none", fontSize: 15, transition: "color 150ms" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.heading)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.body)}
                  >
                    <Mail size={15} color={C.teal} style={{ flexShrink: 0 }} />
                    info@wkrly.com
                  </a>
                  <a href="tel:+13074005868" data-testid="link-phone" style={{ display: "flex", alignItems: "center", gap: 12, color: C.body, textDecoration: "none", fontSize: 15, transition: "color 150ms" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.heading)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.body)}
                  >
                    <Phone size={15} color={C.teal} style={{ flexShrink: 0 }} />
                    (307) 400-5868
                  </a>
                </div>
              </div>

              <div>
                <div style={{ ...manrope, fontSize: 11, letterSpacing: ".14em", fontWeight: 600, color: C.faint, marginBottom: 20, textTransform: "uppercase" }}>Office</div>
                <address style={{ display: "flex", gap: 12, alignItems: "flex-start", fontStyle: "normal", color: C.body, fontSize: 15, lineHeight: 1.7 }}>
                  <MapPin size={15} color={C.teal} style={{ flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ color: C.heading, fontWeight: 600, marginBottom: 4 }}>WKRLY Group LLC</div>
                    <div>Sheridan, WY 82801</div>
                    <div>United States</div>
                  </div>
                </address>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
}
