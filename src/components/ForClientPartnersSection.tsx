import { Reveal } from "./Reveal";

export const ForClientPartnersSection = () => {
  return (
    <section className="py-20 md:py-28 section-padding bg-navy">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            For Client Partners & Commercial Leaders
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-snug mt-6 font-light tracking-tight">
            Stop hiring leaders who fit the job description.{" "}
            <span className="text-white font-semibold">
              Start hiring leaders who redefine it.
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed mt-8 font-light tracking-tight">
            <span className="text-white font-semibold">xyrus.ai</span> sees beyond. It identifies the commercial instinct, the leadership edge, and the deal-maker edge that no resume can capture.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
