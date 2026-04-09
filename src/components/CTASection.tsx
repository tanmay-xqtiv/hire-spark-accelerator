import { Reveal } from "./Reveal";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-navy relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-crimson/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.05] tracking-tight">
            Ready to see it in action?
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-crimson text-primary-foreground text-sm font-bold tracking-wider uppercase px-10 py-4 rounded-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Book Demo
            </a>
            <a
              href="mailto:info@xqtiv.com"
              className="inline-block border border-steel-20 text-steel text-sm font-bold tracking-wider uppercase px-10 py-4 rounded-sm hover:text-primary-foreground hover:border-primary-foreground/30 transition-colors active:scale-[0.97]"
            >
              Contact Us
            </a>
          </div>
        </Reveal>

        {/* Contact details */}
        <Reveal delay={0.25}>
          <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <div className="font-mono-brand text-[10px] tracking-[0.3em] text-steel uppercase mb-3">
                Email
              </div>
              <a href="mailto:support@xyrus.ai" className="text-sm text-primary-foreground hover:text-crimson transition-colors">
                support@xyrus.ai
              </a>
            </div>
            <div>
              <div className="font-mono-brand text-[10px] tracking-[0.3em] text-steel uppercase mb-3">
                Phone (US)
              </div>
              <a href="tel:+14158503295" className="text-sm text-primary-foreground hover:text-crimson transition-colors">
                +1 415 850 3295
              </a>
            </div>
            <div>
              <div className="font-mono-brand text-[10px] tracking-[0.3em] text-steel uppercase mb-3">
                Phone (India)
              </div>
              <a href="tel:+919136540919" className="text-sm text-primary-foreground hover:text-crimson transition-colors">
                +91 913 654 0919
              </a>
            </div>
            <div>
              <div className="font-mono-brand text-[10px] tracking-[0.3em] text-steel uppercase mb-3">
                Locations
              </div>
              <p className="text-sm text-primary-foreground">
                New York, US & India
              </p>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={0.3}>
          <div className="mt-20 pt-8 border-t border-steel-20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono-brand text-xs tracking-widest text-steel uppercase">
              xyrus<span className="text-crimson">.ai</span> — by XQtiv
            </span>
            <a
              href="https://xqtiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-brand text-xs tracking-widest text-steel hover:text-primary-foreground transition-colors uppercase"
            >
              xqtiv.com →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
