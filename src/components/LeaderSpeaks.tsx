import { Reveal } from "./Reveal";
import tarunGoel from "@/assets/tarun-goel.png";

export const LeaderSpeaks = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-off-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Leader Speaks
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src={tarunGoel}
                alt="Tarun Goel"
                className="w-32 h-32 md:w-40 md:h-40 rounded-md object-contain"
              />
            </div>
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 w-[2px] h-full bg-crimson rounded-full" />
              <blockquote className="pl-8 md:pl-12">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
                  "This gives our clients a level of clarity and confidence that transforms hiring from a gamble into a{" "}
                  <span className="text-crimson">precision process.</span>"
                </p>
                <footer className="mt-8">
                  <cite className="not-italic text-sm font-bold text-foreground">
                    Tarun Goel
                  </cite>
                  <p className="font-mono-brand text-[10px] tracking-widest text-muted-foreground uppercase mt-0.5">
                    Managing Partner, US
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
