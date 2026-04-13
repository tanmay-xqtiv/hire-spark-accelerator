import { useState, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    title: "Founder and CEO",
    company: "Of one of the fastest growing Healthcare Data and Analytics Startup in Asia",
    quote: "\"XQtiv built our entire leadership team across India and the Middle East. They have tremendous business depth and were able to understand our requirements like no other search firm. They were our true brand ambassadors and helped us find world-class talent.\"",
  },
  {
    title: "CEO",
    company: "Of a Fintech startup which is part of a USD 100B AUM global financial powerhouse",
    quote: "\"XQtiv helped us find outstanding leaders when we didn't even have a website to show. They were extraordinary ambassadors of our brand and helped senior candidates understand our unique value proposition to the discerning Indian consumer.\"",
  },
  {
    title: "Chief Data Officer",
    company: "Of a NYC headquartered Data and Analytics startup wanting to build an engineering team in India",
    quote: "\"XQtiv helped us build a high-end engineering team in India which helped us significantly expand our capabilities. They understand Data, AI and Platform engineering and found candidates that met our high-quality bar.\"",
  },
  {
    title: "Founder and CEO",
    company: "Of a $US$D 100M pharmaceutical startup with a unique platform-based business model",
    quote: "\"XQtiv helped us hire a CFO in record team in spite of a very narrow set of requirements. They constructed the target set of candidates in a methodical and rigorous manner and presented us 2 candidates. We offered the first candidate we spoke to. They were brilliant!\"",
  },
];

export const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Show 2 cards per page on md+, 1 on mobile
  const cardsPerPage = typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const visibleTestimonials = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-24 md:py-32 section-padding bg-off-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15] tracking-tight max-w-4xl">
            Our clients love us for the dedication and depth.{" "}
            <span className="text-crimson">They value our business knowledge and unorthodox strategies.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 relative" ref={containerRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-grab active:cursor-grabbing"
              >
                {visibleTestimonials.map((t, i) => (
                  <div
                    key={i}
                    className="relative border-t-[3px] border-crimson rounded-sm bg-background p-8 md:p-10 flex flex-col justify-between min-h-[340px] shadow-sm"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{t.title}</h3>
                      <p className="text-sm text-steel italic mt-1 leading-relaxed">{t.company}</p>
                      <p className="mt-6 text-sm md:text-[15px] text-foreground leading-[1.7] tracking-tight">
                        {t.quote}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border hover:border-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Previous testimonials"
              >
                <span className="text-muted-foreground">←</span>
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === page ? "bg-crimson" : "bg-border"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border hover:border-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Next testimonials"
              >
                <span className="text-muted-foreground">→</span>
              </button>
              <span className="font-mono-brand text-[10px] tracking-widest text-muted-foreground ml-2">
                {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
