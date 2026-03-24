import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote: "This gives our clients a level of clarity and confidence that transforms hiring from a gamble into a precision process.",
    author: "Tarun Goel",
    role: "Managing Partner, US",
    initials: "TG",
  },
  {
    quote: "xyrus fundamentally changed the way we approach leadership mandates. The pre-assessed candidate pool means we're presenting quality, not volume.",
    author: "Search Partner",
    role: "Executive Search, India",
    initials: "SP",
  },
  {
    quote: "What used to take weeks of market mapping now starts with an intelligent shortlist on day one. That speed advantage is transformative for our clients.",
    author: "Senior Consultant",
    role: "Talent Advisory",
    initials: "SC",
  },
  {
    quote: "The competency framework xyrus uses gives us a shared language with our clients. We're no longer debating gut feelings — we're aligning on evidence.",
    author: "Practice Lead",
    role: "Leadership Advisory, APAC",
    initials: "PL",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 section-padding bg-off-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Testimonials
          </span>
        </Reveal>

        <div className="mt-12 relative">
          <div className="absolute -left-4 md:-left-8 top-0 w-[2px] h-full bg-crimson rounded-full" />

          <div className="pl-8 md:pl-12 min-h-[260px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
                    "{testimonials[current].quote}"
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-bold">{testimonials[current].initials}</span>
                    </div>
                    <div>
                      <cite className="not-italic text-sm font-bold text-foreground">
                        {testimonials[current].author}
                      </cite>
                      <p className="font-mono-brand text-[10px] tracking-widest text-muted-foreground uppercase mt-0.5">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-10 pl-8 md:pl-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground/30 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <span className="text-muted-foreground">←</span>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground/30 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <span className="text-muted-foreground">→</span>
            </button>
            <span className="font-mono-brand text-[10px] tracking-widest text-muted-foreground ml-4">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
