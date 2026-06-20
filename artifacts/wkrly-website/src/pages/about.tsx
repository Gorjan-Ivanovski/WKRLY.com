import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">About</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            We exist to help people reach further.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            WKRLY Group is a product company built on a simple belief: the right tool, at the right moment, can change the trajectory of someone's work — and their life.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="bg-secondary/30 py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our story</h2>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                WKRLY Group was founded to build software that takes ambition seriously. We saw a gap between what people want to achieve in their professional lives and the tools available to help them get there. Too many products are built to capture attention. We set out to build products that create progress.
              </p>
              <p>
                Today, we develop, launch, and operate a portfolio of SaaS products and digital properties — each one designed around a single question: <em className="text-foreground not-italic font-medium">Does this genuinely help someone move closer to their goals?</em> If the answer is yes, we build it. If it isn't, we don't.
              </p>
              <p>
                We're a company of builders, designers, researchers, and operators who care about craft and outcomes in equal measure. We move quickly, we hold ourselves to a high standard, and we measure our success by the success of the people who use what we make.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          <motion.div
            {...fadeInUp}
            className="p-10 rounded-xl bg-primary text-primary-foreground"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Our Mission</p>
            <p className="text-xl font-medium leading-relaxed">
              To build digital products that help people achieve their professional goals — and to make meaningful progress feel within reach for everyone who uses them.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-10 rounded-xl border border-border/60 bg-background"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">Our Vision</p>
            <p className="text-xl font-medium leading-relaxed text-muted-foreground">
              A world where ambitious people are never held back by their tools. Where setting a goal and reaching it is supported by software that's genuinely on their side.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-28 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Beliefs</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
              What we believe
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "People come first.",
                body: "Every decision starts with the person on the other side of the screen. Their goals are the goals.",
              },
              {
                title: "Progress over noise.",
                body: "We don't build for engagement metrics or vanity. We build to help people do, finish, and grow.",
              },
              {
                title: "Evidence over opinion.",
                body: "We test our assumptions, listen to real users, and let what we learn shape what we build.",
              },
              {
                title: "Craft is non-negotiable.",
                body: "Reliable, thoughtful, well-made software is a sign of respect for the people who use it.",
              },
              {
                title: "We're here for the long game.",
                body: "We build products we intend to operate and improve for years, not abandon after launch.",
              },
              {
                title: "Ownership at every level.",
                body: "We act like owners — accountable, resourceful, and invested in the outcome.",
              },
            ].map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 bg-background rounded-xl border border-border/60 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{belief.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{belief.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Practice */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Values in Practice</p>
          <h2 className="text-4xl font-bold tracking-tight max-w-xl">How we actually operate</h2>
        </motion.div>
        <div className="max-w-2xl space-y-4">
          {[
            "We ship, then we listen, then we improve.",
            "We say no to good ideas so we can do great work on the right ones.",
            "We treat our users' time, attention, and trust as things to be earned.",
            "We hire for character and curiosity, and we give people room to do their best work.",
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start p-6 rounded-lg border border-border/40 hover:bg-secondary/30 transition-colors"
            >
              <span className="text-primary font-bold text-lg mt-0.5 shrink-0">—</span>
              <p className="text-foreground font-medium leading-relaxed">{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-foreground text-background py-28">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
              Want to build with us — or for us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/careers"
                className="inline-flex h-12 items-center justify-center rounded-md border border-background/30 px-8 font-semibold text-background transition-colors hover:bg-background/10"
                data-testid="link-about-see-roles"
              >
                See Open Roles
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                data-testid="link-about-get-in-touch"
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
