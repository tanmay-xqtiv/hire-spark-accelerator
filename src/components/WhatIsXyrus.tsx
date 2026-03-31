import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const personas = [
  {
    title: "For Talent Acquisition Teams",
    description: "Eliminate weeks of manual market mapping. xyrus.ai gives you a pre-assessed, continuously enriched pool of leadership candidates so you start every search with clarity, not a blank page.",
    number: "01",
  },
  {
    title: "For Candidates",
    description: "Your profile grows richer with every interaction. xyrus.ai captures your leadership philosophy, strategic thinking, and career trajectory, ensuring you're evaluated on merit, not just a resume.",
    number: "02",
  },
  {
    title: "For C-Suite & Board Members",
    description: "Make strategic hiring decisions backed by structured competency data, not instinct. xyrus.ai provides the evidence and confidence needed to select leaders who will drive real impact.",
    number: "03",
  },
];

export const WhatIsXyrus = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <Reveal>
              <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
                About xyrus
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 tracking-tight">
                A candidate intelligence accelerator.{" "}
                <span className="text-muted-foreground">Not a resume database.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed mt-6">
                We deal with narrowly defined talent pools — identifying, enriching, and pre-assessing leaders across industries so our clients never start from scratch.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most executive searches spend their first several weeks doing work — mapping the market, identifying who is relevant, and building a baseline understanding of the talent. By the time evaluation begins, speed derails.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base font-bold text-foreground">
                xyrus fixes that.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every candidate profile consists of their LinkedIn information, resumes, recruiter conversations, past client feedback — and gets enriched with every interaction. There is never a cold start to a search.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base text-muted-foreground leading-relaxed">
                When a new mandate arrives, xyrus already has a pool of leaders that have been pre-assessed using our structured competency framework.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Who We Serve */}
        <Reveal delay={0.35}>
          <div className="mt-20 pt-12 border-t border-border">
            <span className="font-mono-brand text-[10px] tracking-[0.3em] text-crimson uppercase">
              Who We Serve
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {personas.map((persona, i) => (
            <Reveal key={persona.title} delay={0.4 + i * 0.1}>
              <motion.div
                className="p-8 bg-off-white rounded-sm border border-border hover:border-foreground/20 transition-colors duration-300 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl mb-4">{persona.icon}</div>
                <h3 className="text-base font-bold text-foreground mb-3">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{persona.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Tagline */}
        <Reveal delay={0.7}>
          <div className="mt-20 pt-12 border-t border-border flex items-center gap-6">
            <div className="w-12 h-[1px] bg-crimson" />
            <p className="font-mono-brand text-base md:text-lg lg:text-xl tracking-widest text-muted-foreground uppercase">
              An executive search process that begins with clarity, not guesswork
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
