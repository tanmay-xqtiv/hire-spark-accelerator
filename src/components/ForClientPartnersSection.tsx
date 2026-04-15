import { Reveal } from "./Reveal";

export const ForClientPartnersSection = () => {
  return (
    <section className="py-14 md:py-20 section-padding bg-navy">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            For Client Partners & Commercial Leaders
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-snug mt-5 font-light tracking-tight">
            Stop hiring leaders who fit the job description.{" "}
            <span className="text-white font-semibold">
              Start hiring leaders who redefine it.
            </span>{" "}
            xyrus.ai is currently live with a narrowly defined, curated pool of Client Partners across industries, built to help you identify and retain the leadership talent that moves your business forward.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
