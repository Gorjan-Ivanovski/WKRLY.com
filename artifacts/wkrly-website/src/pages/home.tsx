import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero — dark navy */}
      <section className="bg-[hsl(215,65%,10%)] min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 md:px-12 py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Teal eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">WKRLY Group</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.08]">
              Software for people<br className="hidden md:block" /> who are going somewhere.
            </h1>
            <p className="text-xl md:text-2xl text-white/65 mb-12 max-w-2xl leading-relaxed">
              WKRLY Group builds and launches digital products that help people make real progress toward their professional goals — one tool, one win, at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/what-we-do"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                data-testid="link-hero-what-we-do"
              >
                Explore What We Do
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-8 font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
                data-testid="link-hero-portfolio"
              >
                See Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
              We're a product company with a single thesis: when people have better tools, they do better work — and better work changes lives.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              WKRLY Group develops, launches, and operates a growing portfolio of SaaS products and digital properties, each built to help people set meaningful goals and actually reach them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
              Built, launched, and run for the long haul.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <p className="text-5xl font-bold text-border mb-6 group-hover:text-primary/40 transition-colors">{item.num}</p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp}>
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors text-lg"
              data-testid="link-learn-how-we-work"
            >
              Learn how we work <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Throughline — dark navy with teal */}
      <section className="bg-[hsl(215,65%,10%)] py-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" />
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">The Throughline</p>
            </div>
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
              Everything we make shares one purpose: helping people achieve their professional targets and goals. Whether the goal is to work smarter, learn faster, grow a career, or build something of their own, our products are designed to turn intention into outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
            Four steps. One obsession.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {[
            { num: "1", title: "Find the problem worth solving.", body: "We start with people, not features." },
            { num: "2", title: "Validate before we build.", body: "Evidence beats assumptions." },
            { num: "3", title: "Build with craft.", body: "Reliable, intuitive, genuinely useful software." },
            { num: "4", title: "Launch and grow.", body: "We ship, learn, and keep going." },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start p-8 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/30 transition-all"
            >
              <span className="text-4xl font-bold text-primary/25 shrink-0">{step.num}</span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeInUp} className="mt-12">
          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors text-lg"
            data-testid="link-approach-detail"
          >
            See our approach in detail <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Why WKRLY */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Why WKRLY</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
              Built differently, on purpose.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { title: "Focused mission.", body: "Every product we touch is built to help people get ahead." },
              { title: "Operator mindset.", body: "We don't just launch and leave — we run our products for the long haul." },
              { title: "Built to last.", body: "We optimize for durable value, not short-term spikes." },
              { title: "Quality first.", body: "We'd rather ship one product we're proud of than ten we're not." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-1 bg-primary rounded-full mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — dark navy */}
      <section className="bg-[hsl(215,65%,10%)] py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Have an idea, a partnership, or a question?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a potential partner, a future teammate, or simply curious about what we're building, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 text-lg"
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
