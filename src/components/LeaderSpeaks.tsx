import { Reveal } from "./Reveal";

export const LeaderSpeaks = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-off-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Leader Speaks
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 relative">
            <div className="absolute -left-4 md:-left-8 top-0 w-[2px] h-full bg-crimson rounded-full" />
            <blockquote className="pl-8 md:pl-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
                "This gives our clients a level of clarity and confidence that transforms hiring from a gamble into a{" "}
                <span className="text-crimson">precision process.</span>"
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">TG</span>
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-foreground">
                    Tarun Goel
                  </cite>
                  <p className="font-mono-brand text-[10px] tracking-widest text-muted-foreground uppercase mt-0.5">
                    Managing Partner, US
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
