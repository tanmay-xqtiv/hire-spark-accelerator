import { Reveal } from "./Reveal";

const offerings = [
  {
    tag: "XYRUS.AI LITE",
    price: "$12K",
    priceLabel: "",
    description:
      "Long list only — xyrus score and abstract summary. Good for benchmarking. No full search.",
    highlighted: false,
    recommended: false,
  },
  {
    tag: "XYRUS.AI FULL",
    price: "$30K",
    priceLabel: "on closure",
    description:
      "Complete platform-led search. Shortlist with scores, matrix, interview coordination. No upfront cost.",
    highlighted: true,
    recommended: true,
  },
  {
    tag: "XQTIV PARTNER-LED",
    price: "$10–21K + 22–25%",
    priceLabel: "",
    description:
      "Traditional retained search with senior partner involvement throughout.",
    highlighted: false,
    recommended: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 section-padding bg-off-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Pricing
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 max-w-3xl tracking-tight">
            All three offerings
          </h2>
        </Reveal>

        {/* Pricing table */}
        <div className="mt-12 overflow-hidden rounded-sm border border-border">
          {/* Header row */}
          <div className="grid md:grid-cols-4 bg-navy text-primary-foreground">
            <div className="p-5 font-mono-brand text-[10px] tracking-[0.2em] uppercase flex items-center">
              Offering
            </div>
            <div className="p-5 font-mono-brand text-[10px] tracking-[0.2em] uppercase flex items-center">
              Investment
            </div>
            <div className="p-5 font-mono-brand text-[10px] tracking-[0.2em] uppercase flex items-center col-span-2">
              What you get
            </div>
          </div>

          {/* Rows */}
          {offerings.map((plan, i) => (
            <Reveal key={plan.tag} delay={0.1 + i * 0.06}>
              <div
                className={`grid md:grid-cols-4 border-b last:border-b-0 border-border transition-colors ${
                  plan.highlighted
                    ? "bg-[hsl(45,30%,95%)]"
                    : "bg-background"
                }`}
              >
                <div className="p-5 flex items-center gap-3">
                  <span className="font-mono-brand text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
                    {plan.tag}
                  </span>
                  {plan.recommended && (
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy text-primary-foreground whitespace-nowrap">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="p-5 flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.priceLabel && (
                    <span className="text-sm text-muted-foreground">
                      {plan.priceLabel}
                    </span>
                  )}
                </div>
                <div className="p-5 col-span-2 flex items-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom quote callout */}
        <Reveal delay={0.4}>
          <div className="mt-12 p-8 bg-off-white rounded-sm border-l-4 border-crimson">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
              "For most of our clients, the xyrus.ai full search is the right answer. Thirty thousand dollars, paid only on successful closure. If we close, you pay. If we part ways, there is no invoice. That is a fundamentally different risk profile to any retained model."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
