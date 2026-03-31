import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Executive Search Acceleration",
    description: "Reduce time-to-shortlist by weeks. xyrus.ai pre-maps and pre-assesses leadership talent continuously, so every new mandate starts with a qualified pool, not a cold search.",
  },
  {
    title: "Competency-Based Evaluation",
    description: "Move beyond resumes. Our structured competency framework assesses candidates on leadership style, decision-making, and strategic orientation — the dimensions that actually predict success.",
  },
  {
    title: "Continuous Talent Intelligence",
    description: "xyrus runs 24/7 — enriching profiles, capturing recruiter insights, and integrating client feedback in real time. The platform learns and sharpens with every interaction.",
  },
  {
    title: "Evidence-Backed Hiring Decisions",
    description: "Give your clients and stakeholders data-driven confidence. Every shortlist is backed by structured assessments, not opinion.",
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 section-padding bg-off-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Solutions
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 max-w-3xl tracking-tight">
            Leadership hiring is a high-stakes process run on{" "}
            <span className="text-crimson">low-quality data.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            Senior leaders are hired based on two documents: an "impressive" resume and a job description written under time constraints. The whole story is not told by either. xyrus replaces that broken foundation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={0.2 + i * 0.08}>
              <motion.div
                className="p-8 bg-background rounded-sm border border-border hover:border-foreground/20 transition-all duration-300 h-full"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-mono-brand text-xs text-crimson font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom callout */}
        <Reveal delay={0.5}>
          <div className="mt-16 p-8 bg-navy rounded-sm">
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 bg-crimson rounded-full flex-shrink-0 mt-1" />
              <div>
                <p className="text-primary-foreground text-lg font-bold mb-2">
                  A bad leadership hire costs time, money, and organizational momentum.
                </p>
                <p className="text-steel text-sm leading-relaxed">
                  xyrus is built to solve this. Not by making the old process faster — by replacing the foundation it runs on.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
