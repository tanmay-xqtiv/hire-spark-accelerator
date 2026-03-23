import { Reveal } from "./Reveal";

export const WhatIsXyrus = () => {
  return (
    <section id="what-is-xyrus" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <Reveal>
              <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
                What is xyrus
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 tracking-tight">
                A candidate intelligence accelerator.{" "}
                <span className="text-muted-foreground">Not a resume database.</span>
              </h2>
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

        {/* Visual divider with tagline */}
        <Reveal delay={0.35}>
          <div className="mt-20 pt-12 border-t border-border flex items-center gap-6">
            <div className="w-12 h-[1px] bg-crimson" />
            <p className="font-mono-brand text-sm md:text-base tracking-widest text-muted-foreground uppercase">
              An executive search process that begins with clarity, not guesswork
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
