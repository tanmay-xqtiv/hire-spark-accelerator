import { Reveal } from "./Reveal";

const offerings = [
  {
    tag: "XYRUS.AI LITE",
    name: "",
    price: "$12K",
    priceLabel: "",
    description:
      "Long list only — xyrus score and abstract summary. Good for benchmarking. No full search.",
    highlighted: false,
    recommended: false,
  },
  {
    tag: "XYRUS.AI FULL",
    name: "",
    price: "$30K",
    priceLabel: "on closure",
    description:
      "Complete platform-led search. Shortlist with scores, matrix, interview coordination. No upfront cost.",
    highlighted: true,
    recommended: true,
  },
  {
    tag: "XQTIV PARTNER-LED",
    name: "",
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

        {/* Three offerings */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {offerings.map((plan, i) => (
            <Reveal key={plan.tag} delay={0.1 + i * 0.08}>
              <div
                className={`relative rounded-lg p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[hsl(45,30%,95%)] border-2 border-navy shadow-lg"
                    : "bg-background border border-border"
                }`}
              >
                {plan.recommended && (
                  <span className="inline-block self-start text-[10px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full bg-navy text-primary-foreground mb-4">
                    Recommended
                  </span>
                )}

                <span className="font-mono-brand text-[11px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
                  {plan.tag}
                </span>

                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.priceLabel && (
                    <span className="text-base ml-2 text-muted-foreground">
                      {plan.priceLabel}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {plan.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom quote callout */}
        <Reveal delay={0.4}>
          <div className="mt-12 p-8 bg-off-white rounded-sm border-l-4 border-crimson">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
              "For most of our clients, the xyrus.ai full search is the right answer. Thirty thousand dollars, paid only on successful closure. If we don't close, we part ways cleanly — no invoice. That's a fundamentally different risk profile to any retained model."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
