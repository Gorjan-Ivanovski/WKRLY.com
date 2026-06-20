import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Portfolio() {
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
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Portfolio</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.08] text-white">
              A growing portfolio, one mission.
            </h1>
            <p className="text-xl text-white/65 leading-relaxed">
              We're building a deliberate collection of SaaS products and digital properties — each designed to help people reach their professional goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary/30 py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our portfolio philosophy</h2>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                We don't build products in isolation. Each one is a considered addition to a portfolio united by a single purpose: helping people make real progress in their working lives. We'd rather build a small number of products we believe in deeply than a long list we can't stand behind.
              </p>
              <p>
                Our products span different problems and audiences, but they answer to the same standard — they have to genuinely help someone do, finish, learn, or grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-28 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Standard</p>
          <h2 className="text-4xl font-bold tracking-tight max-w-2xl">
            What you can expect from a WKRLY product
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {[
            {
              num: "01",
              title: "Built around a real goal.",
              body: "Every product starts with a specific outcome someone is trying to reach, and works backward from there.",
            },
            {
              num: "02",
              title: "Designed to be used.",
              body: "Intuitive, fast, and dependable — software that gets out of the way so people can do their best work.",
            },
            {
              num: "03",
              title: "Trustworthy by design.",
              body: "We treat data, privacy, and security as commitments, not checkboxes.",
            },
            {
              num: "04",
              title: "Continuously improved.",
              body: "Our products get better over time, shaped by the people who use them.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start p-8 rounded-xl border border-border/60 hover:border-primary/30 hover:bg-secondary/20 transition-all"
            >
              <span className="text-3xl font-bold text-primary/20 shrink-0">{item.num}</span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-28 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-widest mb-6">Coming Soon</p>
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground mb-6">
              Something is on the way.
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10">
              We're heads-down building, and we're not ready to announce specific products just yet. When we are, you'll find them here first.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-background text-foreground px-8 font-semibold transition-colors hover:bg-background/90"
              data-testid="link-portfolio-get-in-touch"
            >
              Want to be the first to know? Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
