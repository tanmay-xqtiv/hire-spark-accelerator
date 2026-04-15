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

      <motion.div 
        className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-crimson to-transparent opacity-20"
        style={{ left: "15%" }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <Reveal delay={0.1}>
              <div className="font-mono-brand text-xs tracking-[0.3em] text-steel uppercase mb-8">
                XQtiv Talent Intelligence
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[0.95] tracking-tight mb-8">
                <span className="text-crimson">Precision</span> in Talent.
                <br />
                <span className="text-crimson">Speed</span> in Decisions.
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-lg md:text-xl text-steel max-w-2xl leading-relaxed mb-12">
                xyrus.ai is XQtiv's talent intelligence platform that replaces resume-based hiring with structured candidate intelligence, so every leadership decision is backed by evidence.
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
                  Book Demo
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Video Placeholder */}
          <Reveal delay={0.5} direction="right">
            <div className="relative aspect-video rounded-sm border border-steel-20 bg-navy/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-transparent" />
              
              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-full border-2 border-steel-20 flex items-center justify-center group-hover:border-crimson transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-steel border-b-[8px] border-b-transparent ml-1 group-hover:border-l-crimson transition-colors duration-300" />
                </motion.div>
                <span className="font-mono-brand text-[10px] tracking-[0.3em] text-steel uppercase">
                  xyrus Launch Video
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-steel-20" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-steel-20" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
