import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function WhatWeDo() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[hsl(215,65%,10%)]">
        <div className="container mx-auto px-6 md:px-12 pt-20 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.08] text-white">
              We build, launch, and grow products that help people get ahead.
            </h1>
            <p className="text-xl text-white/65 leading-relaxed">
              WKRLY Group is part product studio, part operator. We take ideas from a blank page to a live, growing product — and we run them for the long term.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Make */}
      <section className="bg-secondary/30 py-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight">What we make</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                title: "SaaS products.",
                body: "Subscription software built to solve real, recurring problems for professionals and the teams they work in. Tools people return to because they make work measurably better.",
              },
              {
                title: "Digital properties.",
                body: "Beyond core software, we build the digital experiences — platforms, content, and services — that help our products reach and serve their audiences.",
              },
              {
                title: "A focused portfolio.",
                body: "Rather than chasing every opportunity, we build a deliberate portfolio of products that share a common purpose: helping people achieve their professional goals.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-background rounded-xl border border-border/60"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - 5-step process */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
            How we work
          </h2>
        </motion.div>
        <div className="max-w-4xl space-y-0">
          {[
            {
              num: "1",
              title: "Discover",
              body: "We start by understanding people and problems. Through research, conversation, and analysis, we find the goals people are struggling to reach and the friction standing in their way.",
            },
            {
              num: "2",
              title: "Validate",
              body: "Before we commit to building, we test our thinking. We prototype, we put ideas in front of real people, and we look for evidence that a product is worth building — and worth using.",
            },
            {
              num: "3",
              title: "Design & Build",
              body: "We design experiences that are intuitive and humane, and we engineer software that's reliable, secure, and built to scale. Craft shows up in the details, so we sweat them.",
            },
            {
              num: "4",
              title: "Launch",
              body: "We bring products to market with clear positioning, the right infrastructure, and the momentum to find an audience. A great launch is a beginning, not an event.",
            },
            {
              num: "5",
              title: "Grow & Operate",
              body: "Once a product is live, the real work begins. We measure, learn, and iterate — compounding small, consistent improvements into durable value for the people who rely on us.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-8 items-start py-10 border-b border-border/50 last:border-0 group"
            >
              <span className="text-5xl font-bold text-border group-hover:text-primary/30 transition-colors shrink-0 mt-1">{step.num}</span>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Guides Every Build */}
      <section className="py-28 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight">What guides every build</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { title: "Real problems only.", body: "If it doesn't help someone make progress, we don't build it." },
              { title: "Speed with judgment.", body: "We move fast, but never past the things that matter." },
              { title: "Built to be trusted.", body: "Security, reliability, and privacy are foundational, not features." },
              { title: "Designed to last.", body: "We build for the long term, not the next spike." },
            ].map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-background rounded-xl border border-border/60 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Who We Serve</p>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
              The people who use what we build share one thing in common: they have goals, and they're serious about reaching them.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              They might be professionals sharpening their edge, teams trying to do their best work, or individuals building something of their own. Whoever they are, our job is to help them get there faster, with less friction and more confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-foreground text-background py-28">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 text-background">
              Curious about what we're building next?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 h-12 justify-center rounded-md border border-background/30 px-8 font-semibold text-background transition-colors hover:bg-background/10"
                data-testid="link-wwd-portfolio"
              >
                Explore Our Portfolio <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                data-testid="link-wwd-contact"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
