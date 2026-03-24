import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    description: "For boutique search firms getting started with xyrus.",
    price: "Contact Us",
    features: [
      "Access to pre-assessed talent pool",
      "Basic competency mapping",
      "LinkedIn profile enrichment",
      "Up to 5 active mandates",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing firms that need deeper intelligence and faster turnarounds.",
    price: "Contact Us",
    features: [
      "Everything in Essentials",
      "Full 5-layer candidate intelligence",
      "Recruiter insights & client feedback",
      "Unlimited active mandates",
      "Priority support & onboarding",
      "Custom competency frameworks",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large practices and global search firms with complex needs.",
    price: "Contact Us",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "API access & integrations",
      "Multi-team collaboration",
      "Custom SLAs & compliance",
      "White-label reporting",
    ],
    highlighted: false,
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
            Built for search firms of{" "}
            <span className="text-crimson">every scale.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            Whether you're a solo practitioner or a global search firm, xyrus has a plan that fits your practice.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.2 + i * 0.08}>
              <div
                className={`relative rounded-sm p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-navy text-primary-foreground border-2 border-crimson shadow-lg scale-[1.02]"
                    : "bg-background border border-border hover:border-foreground/20"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 bg-crimson text-primary-foreground font-mono-brand text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`text-xl font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mt-2 ${
                    plan.highlighted ? "text-steel" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 mb-6">
                  <span
                    className={`text-2xl font-bold ${
                      plan.highlighted ? "text-crimson" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-crimson" : "text-crimson"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-steel" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

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
      </div>
    </section>
  );
};
