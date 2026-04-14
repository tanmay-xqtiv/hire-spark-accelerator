import { Reveal } from "./Reveal";

export const ForCandidatesSection = () => {
  return (
    <section className="py-20 md:py-28 section-padding bg-navy">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Dear Candidates
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-snug mt-6 font-light tracking-tight">
            You are not just another resume in a pile.{" "}
            <span className="text-white font-semibold">
              xyrus.ai already understands how you lead, how you think, and what you bring to the table
            </span>{" "}
            before a single conversation happens. For the first time, you are chosen for who you are, not just what's on paper.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
