import { Reveal } from "./Reveal";

const offerings = [
  {
    tag: "XQtiv",
    tagColor: "bg-golden/20 text-golden",
    name: "Partner-led executive search",
    price: "₹9L / ₹18L",
    priceLabel: "retainer",
    extra: "22 – 25% on closure",
    description:
      "Indian or global search. Senior partner involvement throughout.",
    highlighted: false,
  },
  {
    tag: "xyrus.ai",
    tagColor: "bg-crimson/10 text-crimson",
    name: "Platform-led search",
    price: "$30,000",
    priceLabel: "on closure",
    extra: "",
    description:
      "Full search, end-to-end. AI-evaluated shortlist with scores, competency matrix, and interview coordination. No upfront cost.",
    highlighted: true,
  },
  {
    tag: "xyrus.ai Lite",
    tagColor: "bg-green-100 text-green-700",
    name: "Long list only",
    price: "$12,000",
    priceLabel: "flat fee",
    extra: "",
    description:
      "Long list with xyrus.ai score and abstract summary.",
    highlighted: false,
  },
];

const packageIncludes = [
  {
    title: "Job dossier",
    description: "A standardised, well-framed JD built for this search",
  },
  {
    title: "Candidate outreach",
    description: "We reach out on your behalf",
  },
  {
    title: "Candidate resumes",
    description: "Delivered with evaluation context attached",
  },
  {
    title: "Interview coordination",
    description: "We schedule and manage candidate touchpoints",
  },
  {
    title: "xyrus.ai score + matrix",
    description: "AI-powered scoring and competency fit per candidate",
  },
  {
    title: "End-to-end search management",
    description: "We run the full process, so your team stays focused",
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
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 max-w-3xl tracking-tight">
            All three{" "}
            <span className="text-crimson">offerings.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            Whether you need a partner-led engagement or a platform-powered search, xyrus.ai has a model that fits.
          </p>
        </Reveal>

        {/* Three offerings */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {offerings.map((plan, i) => (
            <Reveal key={plan.tag} delay={0.2 + i * 0.08}>
              <div
                className={`relative rounded-sm p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-navy text-primary-foreground border-2 border-crimson shadow-lg scale-[1.02]"
                    : "bg-background border border-border hover:border-foreground/20"
                }`}
              >
                <span
                  className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-sm mb-4 ${plan.tagColor}`}
                >
                  {plan.tag}
                </span>

                <h3
                  className={`text-lg font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 mb-2">
                  <span
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-crimson" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      plan.highlighted ? "text-steel" : "text-muted-foreground"
                    }`}
                  >
                    {plan.priceLabel}
                  </span>
                </div>

                {plan.extra && (
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      plan.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.extra}
                  </p>
                )}

                <p
                  className={`text-sm leading-relaxed mt-2 flex-1 ${
                    plan.highlighted ? "text-steel" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block text-center text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-sm transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-crimson text-primary-foreground"
                      : "bg-navy text-primary-foreground"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What is included in the $30k package */}
        <Reveal delay={0.4}>
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              What is included in the $30k package
            </h3>
            <div className="w-16 h-0.5 bg-crimson mt-4 mb-8" />

            <div className="grid md:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
              {packageIncludes.map((item, i) => (
                <div
                  key={item.title}
                  className={`p-6 bg-off-white ${
                    i % 2 === 0 ? "md:border-r border-border" : ""
                  } ${i < packageIncludes.length - 2 ? "border-b border-border" : ""} ${
                    i === packageIncludes.length - 2 || i === packageIncludes.length - 1
                      ? ""
                      : ""
                  }`}
                  style={{
                    borderBottom:
                      i < packageIncludes.length - 2
                        ? "1px solid hsl(var(--border))"
                        : i === packageIncludes.length - 2
                        ? "1px solid hsl(var(--border))"
                        : "none",
                  }}
                >
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
