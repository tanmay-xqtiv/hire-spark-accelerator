import { Reveal } from "./Reveal";

const promises = [
  { value: "6 days", label: "Shortlist delivered" },
  { value: "Pre-evaluated", label: "Not raw resumes" },
  { value: "Structured view", label: "Score + matrix + match" },
];

export const CorePromiseSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Promise
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 max-w-3xl tracking-tight">
            The core promise
          </h2>
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
