import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Careers() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Careers</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Build products people actually need.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            At WKRLY Group, you'll help create software that helps people reach their goals. That's the work. It matters, and we take it seriously.
          </p>
          <a
            href="#open-roles"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
            data-testid="link-careers-see-roles"
          >
            See Open Roles
          </a>
        </motion.div>
      </section>

      {/* Why Work Here */}
      <section className="bg-secondary/30 py-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Why Join Us</p>
            <h2 className="text-4xl font-bold tracking-tight max-w-xl">Why work here</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                title: "Your work has a clear purpose.",
                body: "Everything we build is meant to help someone get ahead. You'll see the impact of your work in the progress of real people.",
              },
              {
                title: "You'll own real outcomes.",
                body: "We're a company of operators. You'll have the autonomy to make decisions and the accountability that comes with it.",
              },
              {
                title: "You'll do your best work.",
                body: "We protect focus, value craft, and give people the room and trust to be excellent at what they do.",
              },
              {
                title: "You'll grow.",
                body: "We build products that help people advance — and we hold ourselves to the same standard. Your development matters to us.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-background rounded-xl border border-border/60 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Culture</p>
          <h2 className="text-4xl font-bold tracking-tight">How we work</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {[
            { title: "Small teams, big ownership.", body: "We keep teams lean so individuals can have outsized impact." },
            { title: "Bias to ship.", body: "We learn by putting real things in front of real people." },
            { title: "High standards, low ego.", body: "We push each other to be better and leave the politics out of it." },
            { title: "Long-term thinking.", body: "We make decisions we'll be proud of years from now." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start p-6 rounded-lg border border-border/40"
            >
              <span className="text-primary font-bold mt-0.5 shrink-0">—</span>
              <div>
                <span className="font-semibold">{item.title}</span>{" "}
                <span className="text-muted-foreground">{item.body}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-28 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl items-start">
            <motion.div {...fadeInUp}>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Right Fit</p>
              <h2 className="text-4xl font-bold tracking-tight">Who we're looking for</h2>
            </motion.div>
            <motion.div {...fadeInUp} className="text-muted-foreground leading-relaxed text-lg space-y-4">
              <p>
                We hire builders — people who are curious, accountable, and genuinely care about the quality of what they make. You'll fit in here if you're driven by outcomes, comfortable with ambiguity, and energized by the idea of helping people reach their goals through better software.
              </p>
              <p>
                We welcome talented people across product, engineering, design, research, growth, and operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Open Roles</p>
          <h2 className="text-4xl font-bold tracking-tight mb-8 max-w-xl">
            We're always interested in meeting exceptional people.
          </h2>
          <div className="max-w-2xl p-10 rounded-xl border border-border/60 bg-secondary/20">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We don't have specific roles posted right now, but we're growing. If you believe you'd be a great addition to WKRLY Group, introduce yourself — we read every message.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-7 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              data-testid="link-careers-contact"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="font-semibold text-foreground">Equal Opportunity Employer.</strong>{" "}
              WKRLY Group LLC is an equal opportunity employer. We are committed to building a team that reflects a range of backgrounds, perspectives, and experiences, and we do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, veteran status, or any other characteristic protected by applicable law.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
