import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categories = ["Building Products", "The Future of Work", "Goals & Progress", "Behind the Build"];

export default function Insights() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Ideas worth sharing.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Thoughts from our team on building products, the future of work, and what it really takes to help people reach their goals.
          </p>
        </motion.div>
      </section>

      {/* Intro + Categories */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeInUp} className="mb-8">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              We learn a lot building products for ambitious people — about software, about work, and about what actually helps someone make progress. This is where we share some of it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center px-4 py-2 rounded-full border border-border/60 text-sm font-medium text-muted-foreground bg-background/60 cursor-default"
                data-testid={`tag-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <motion.div {...fadeInUp} className="max-w-xl">
          <div className="p-12 rounded-xl border border-dashed border-border/60 text-center">
            <p className="text-lg font-medium text-foreground mb-3">We're just getting started.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our first pieces are on the way — check back soon, or get in touch to stay in the loop.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-7 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              data-testid="link-insights-get-in-touch"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
