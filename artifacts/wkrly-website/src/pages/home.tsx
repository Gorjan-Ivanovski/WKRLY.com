import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers, Target, Zap } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const NAVY = "hsl(215,65%,10%)";
const TEAL = "hsl(168,68%,47%)";

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* Subtle circuit dot-grid background */
const dotGrid = {
  backgroundImage: `radial-gradient(circle, hsl(168 68% 47% / 0.12) 1px, transparent 1px)`,
  backgroundSize: "28px 28px",
};

/* Decorative circuit SVG — reusable accent */
function CircuitAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      className={`opacity-30 ${className}`}
      aria-hidden
    >
      <circle cx="8" cy="30" r="3.5" fill={TEAL} />
      <line x1="11.5" y1="30" x2="35" y2="30" stroke={TEAL} strokeWidth="1" />
      <line x1="35" y1="30" x2="35" y2="10" stroke={TEAL} strokeWidth="1" />
      <line x1="35" y1="10" x2="65" y2="10" stroke={TEAL} strokeWidth="1" />
      <circle cx="65" cy="10" r="3" fill={TEAL} />
      <line x1="35" y1="30" x2="35" y2="50" stroke={TEAL} strokeWidth="1" />
      <line x1="35" y1="50" x2="75" y2="50" stroke={TEAL} strokeWidth="1" />
      <circle cx="75" cy="50" r="3" fill={TEAL} />
      <line x1="65" y1="10" x2="95" y2="10" stroke={TEAL} strokeWidth="1" />
      <line x1="95" y1="10" x2="95" y2="30" stroke={TEAL} strokeWidth="1" />
      <circle cx="95" cy="30" r="3" fill={TEAL} />
      <line x1="95" y1="30" x2="115" y2="30" stroke={TEAL} strokeWidth="1" />
      <circle cx="115" cy="30" r="2.5" fill={TEAL} />
    </svg>
  );
}

const differentiators = [
  {
    icon: Cpu,
    label: "Product-First",
    body: "We build and ship — we don't consult.",
  },
  {
    icon: Layers,
    label: "Long-Term Operators",
    body: "We own and run every product we launch.",
  },
  {
    icon: Target,
    label: "One Mission",
    body: "Every product helps professionals grow.",
  },
  {
    icon: Zap,
    label: "Lean by Design",
    body: "Small team. Big craft. No bloat.",
  },
];

const whatWeDo = [
  {
    num: "01",
    title: "We build products.",
    body: "We design and ship SaaS products and digital experiences from the ground up — researched, validated, and crafted to solve a real problem.",
  },
  {
    num: "02",
    title: "We launch them.",
    body: "Building is only half the work. We bring products to market with the positioning, infrastructure, and momentum they need to find their audience.",
  },
  {
    num: "03",
    title: "We grow them.",
    body: "Once a product is live, we operate it for the long term — listening, iterating, and compounding small improvements into lasting value.",
  },
];

const approach = [
  { num: "1", title: "Find the problem worth solving.", body: "We start with people, not features." },
  { num: "2", title: "Validate before we build.", body: "Evidence beats assumptions." },
  { num: "3", title: "Build with craft.", body: "Reliable, intuitive, genuinely useful software." },
  { num: "4", title: "Launch and grow.", body: "We ship, learn, and keep going." },
];

const whyWKRLY = [
  { title: "Focused mission.", body: "Every product we touch is built to help people get ahead." },
  { title: "Operator mindset.", body: "We don't just launch and leave — we run our products for the long haul." },
  { title: "Built to last.", body: "We optimize for durable value, not short-term spikes." },
  { title: "Quality first.", body: "We'd rather ship one product we're proud of than ten we're not." },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background: NAVY }}
      >
        {/* Dot-grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={dotGrid} />

        {/* Teal atmospheric glow */}
        <div
          className="absolute -top-32 right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(168 68% 47% / 0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(215 65% 25% / 0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative container mx-auto px-6 md:px-12 py-28 z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span
                className="text-primary text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Product Studio · SaaS · Digital Properties
              </span>
            </motion.div>

            <h1
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] mb-8 text-white"
              style={{ letterSpacing: "-0.025em", fontFamily: "Outfit, sans-serif" }}
            >
              Software for people<br />
              <span className="text-primary">who are going</span>{" "}
              <span className="text-white">somewhere.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              WKRLY Group builds and launches digital products that help people make real progress toward their professional goals — one tool, one win, at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/what-we-do"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 hover:-translate-y-0.5"
                data-testid="link-hero-what-we-do"
              >
                Explore What We Do
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-8 font-semibold text-white transition-all hover:bg-white/8 hover:border-white/40"
                data-testid="link-hero-portfolio"
              >
                See Our Portfolio
              </Link>
            </div>

            {/* Circuit accent decoration */}
            <CircuitAccent className="w-36" />
          </motion.div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS STRIP ────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="px-8 py-10 group"
              >
                <d.icon
                  size={20}
                  className="text-primary mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="font-bold text-foreground text-sm mb-1.5">{d.label}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO STATEMENT ──────────────────────────────────── */}
      <section className="py-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
              We're a product company with a single thesis: when people have better tools, they do better work —{" "}
              <span className="text-primary font-semibold">and better work changes lives.</span>
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-16 bg-primary/40" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                WKRLY Group develops, launches, and operates a growing portfolio of SaaS products and digital properties, each built to help people set meaningful goals and actually reach them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────── */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
                Built, launched, and run for the long haul.
              </h2>
            </div>
            <motion.div {...fadeInUp} className="hidden md:block shrink-0">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                data-testid="link-learn-how-we-work"
              >
                Learn how we work <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden border border-border/60">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-background p-10 border-r border-border/60 last:border-r-0 hover:bg-secondary/30 transition-colors"
              >
                {/* Teal top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="text-primary text-xs font-mono font-bold tracking-widest mb-5 block">{item.num}</span>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
              data-testid="link-learn-how-we-work-mobile"
            >
              Learn how we work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THROUGHLINE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28" style={{ background: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={dotGrid} />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(168 68% 47% / 0.07) 0%, transparent 70%)" }}
        />

        {/* Decorative circuit - top right */}
        <div className="absolute top-8 right-8 hidden lg:block">
          <CircuitAccent className="w-48 rotate-180" />
        </div>

        <div className="relative container mx-auto px-6 md:px-12 z-10">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" />
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                The Throughline
              </p>
            </div>
            <blockquote className="text-2xl md:text-4xl text-white font-medium leading-[1.35]">
              "Everything we make shares one purpose:{" "}
              <span className="text-primary">helping people achieve their professional goals.</span>"
            </blockquote>
            <p className="mt-8 text-white/50 text-base leading-relaxed max-w-2xl">
              Whether the goal is to work smarter, learn faster, grow a career, or build something of their own, our products are designed to turn intention into outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH ─────────────────────────────────────────── */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
            Four steps. One obsession.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {approach.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex gap-6 items-start p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all bg-background"
            >
              <span
                className="text-3xl font-black shrink-0 text-primary/20 group-hover:text-primary/40 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.body}</p>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-xl">
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-colors m-3" />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-12">
          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
            data-testid="link-approach-detail"
          >
            See our approach in detail <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── WHY WKRLY ────────────────────────────────────────── */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why WKRLY</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
              Built differently, on purpose.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {whyWKRLY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-8 bg-background rounded-xl border border-border/60 hover:border-primary/30 transition-all relative overflow-hidden"
              >
                {/* Teal top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-6 bg-primary/60 rounded-full" />
                  <h3 className="text-base font-bold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-9">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32" style={{ background: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={dotGrid} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, hsl(168 68% 47% / 0.08) 0%, transparent 100%)" }}
        />
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <CircuitAccent className="w-40" />
        </div>

        <div className="relative container mx-auto px-6 md:px-12 text-center z-10">
          <motion.div {...fadeInUp}>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              Let's build something
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-[1.05]"
              style={{ fontFamily: "Outfit, sans-serif", letterSpacing: "-0.02em" }}>
              Have an idea, a partnership,<br className="hidden md:block" /> or a question?
            </h2>
            <p className="text-lg text-white/55 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you're a potential partner, a future teammate, or simply curious about what we're building, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-12 font-bold text-white shadow-2xl shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 text-base"
              data-testid="link-cta-get-in-touch"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
