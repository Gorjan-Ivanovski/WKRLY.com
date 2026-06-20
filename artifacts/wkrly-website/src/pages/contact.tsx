import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      reason: "",
      message: "",
      privacyPolicy: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          reason: data.reason,
          message: data.message,
        }),
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
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[hsl(215,65%,10%)]">
        <div className="container mx-auto px-6 md:px-12 pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.08] text-white">
              Let's talk.
            </h1>
            <p className="text-xl text-white/65 leading-relaxed">
              Whether you're a potential partner, a future teammate, or simply curious about what we're building, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pt-16 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-5xl">
            {/* Form */}
            <motion.div {...fadeInUp} className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-xl border border-border/60 bg-secondary/20 text-center"
                  data-testid="text-form-success"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary text-2xl font-bold">✓</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Message sent.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thanks for reaching out. We've received your message and will be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name <span className="text-primary">*</span></FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                data-testid="input-name"
                              />
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
                            <FormLabel>Email <span className="text-primary">*</span></FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@company.com"
                                {...field}
                                data-testid="input-email"
                              />
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
                          <FormLabel>Company <span className="text-muted-foreground text-xs font-normal">(optional)</span></FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company"
                              {...field}
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I'm reaching out about… <span className="text-primary">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-reason">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="careers">Careers</SelectItem>
                              <SelectItem value="press">Press & Media</SelectItem>
                              <SelectItem value="general">General Enquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us what's on your mind..."
                              className="min-h-[140px] resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
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
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                data-testid="checkbox-privacy"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-muted-foreground cursor-pointer leading-none">
                              I agree to the{" "}
                              <Link to="/privacy-policy" className="text-primary hover:underline">
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

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                      data-testid="button-submit"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                </Form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">Direct Contact</p>
                <div className="space-y-4">
                  <a
                    href="mailto:info@wkrly.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-email"
                  >
                    <Mail size={16} className="text-primary shrink-0" />
                    info@wkrly.com
                  </a>
                  <a
                    href="tel:+13074005868"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-phone"
                  >
                    <Phone size={16} className="text-primary shrink-0" />
                    (307) 400-5868
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">Office</p>
                <address className="not-italic text-muted-foreground leading-relaxed flex items-start gap-3">
                  <MapPin size={16} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground mb-1">WKRLY Group LLC</p>
                    <p>30 N Gould St Ste N</p>
                    <p>Sheridan, WY 82801</p>
                    <p>United States</p>
                  </div>
                </address>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
