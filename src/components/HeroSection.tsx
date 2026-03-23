import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--steel)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--steel)) 1px, transparent 1px)`,
        backgroundSize: "80px 80px"
      }} />

      {/* Animated accent line */}
      <motion.div 
        className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-crimson to-transparent opacity-20"
        style={{ left: "15%" }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto pt-32 pb-24">
        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <div className="font-mono-brand text-xs tracking-[0.3em] text-steel uppercase mb-8">
              XQtiv Talent Intelligence
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[0.95] tracking-tight mb-8">
              Precision in Talent.
              <br />
              <span className="text-crimson">Speed</span> in Decisions.
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="text-lg md:text-xl text-steel max-w-2xl leading-relaxed mb-12">
              xyrus is XQtiv's talent intelligence platform built to make leadership hiring faster, smarter, and backed by evidence rather than instinct.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-crimson text-primary-foreground text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Book a Demo
              </a>
              <button
                onClick={() => document.querySelector("#what-is-xyrus")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm font-mono-brand tracking-wider text-steel hover:text-primary-foreground transition-colors uppercase border border-steel-20 px-8 py-4 rounded-sm active:scale-[0.97]"
              >
                Learn More →
              </button>
            </div>
          </Reveal>
        </div>

        {/* Floating data indicators */}
        <Reveal delay={0.6} direction="right">
          <div className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-6">
              {["Profile Enrichment", "Competency Mapping", "Real-time Assessment"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson" style={{ opacity: 1 - i * 0.25 }} />
                  <span className="font-mono-brand text-[10px] tracking-widest text-steel uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
