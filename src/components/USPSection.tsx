import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  { value: "5×", label: "Faster shortlisting" },
  { value: "100%", label: "Pre-assessed candidates" },
  { value: "Zero", label: "Cold starts" },
];

export const USPSection = () => {
  return (
    <section className="py-24 md:py-36 section-padding bg-navy relative overflow-hidden">
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--steel)), hsl(var(--steel)) 1px, transparent 1px, transparent 60px)`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Impact
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1] mt-6 tracking-tight">
            Know more. Decide faster.
            <br />
            <span className="text-crimson">Hire right.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.2 + i * 0.1}>
              <div className="text-center">
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-golden mb-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <p className="font-mono-brand text-xs tracking-widest text-steel uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
