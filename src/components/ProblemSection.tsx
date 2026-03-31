import { Reveal } from "./Reveal";

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 section-padding bg-off-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            The Problem
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 max-w-3xl tracking-tight">
            Leadership hiring is a high-stakes process run on{" "}
            <span className="text-crimson">low-quality data.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <Reveal delay={0.2} direction="left">
            <div className="p-8 bg-background rounded-sm border border-border shadow-sm">
              <div className="font-mono-brand text-[10px] tracking-[0.3em] text-tangerine uppercase mb-4">
                The Resume Problem
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Resumes record where someone has been, not how they lead. They reveal nothing about decision-making patterns, thinking under pressure, or leadership style. Yet organizations rely on them to make lasting strategic decisions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="right">
            <div className="p-8 bg-background rounded-sm border border-border shadow-sm">
              <div className="font-mono-brand text-[10px] tracking-[0.3em] text-tangerine uppercase mb-4">
                The JD Problem
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Job descriptions specify what a role entails on paper. They do not describe the difficulties the new leader will face, the operational environment, strategic challenges, and the culture they will inherit.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 p-8 bg-navy rounded-sm">
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 bg-crimson rounded-full flex-shrink-0 mt-1" />
              <div>
                <p className="text-primary-foreground text-lg font-bold mb-2">
                  A bad leadership hire costs time, money, and organizational momentum.
                </p>
                <p className="text-steel text-sm leading-relaxed">
                  xyrus.ai is built to solve this. Not by making the old process faster, by replacing the foundation it runs on.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
