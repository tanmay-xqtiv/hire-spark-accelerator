import { Reveal } from "./Reveal";

const promises = [
  { value: "6 days", label: "Shortlist delivered" },
  { value: "Pre-assessed", label: "Structured candidate profiles" },
  { value: "Structured view", label: "xyrus score + role match + 360° profile" },
];

export const CorePromiseSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            The core promise
          </span>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-0 mt-12 border border-border rounded-sm overflow-hidden">
          {promises.map((item, i) => (
            <Reveal key={item.value} delay={0.2 + i * 0.08}>
              <div
                className={`p-8 text-center bg-off-white h-full ${
                  i < promises.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {item.value}
                </h3>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
