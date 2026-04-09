import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "How is xyrus.ai different from other recruiting platforms?",
    answer: (
      <>
        <p className="mb-4">
          Most platforms show you where someone has worked. <span className="font-semibold text-foreground">xyrus.ai</span> shows you how they lead, what they have built, and how they operate in real situations. Every candidate is built on five structured data layers:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mb-4 ml-2">
          <li>LinkedIn profile</li>
          <li>Resume</li>
          <li>Recruiter conversations</li>
          <li>Client interview feedback</li>
          <li>Candidate self-assessments</li>
        </ul>
        <p>
          This replaces fragmented information with a consistent, evidence-backed view of a complete 360 degree profile which reflects leadership capability.
        </p>
      </>
    ),
  },
  {
    question: "How does xyrus.ai decide the right match for a role?",
    answer: (
      <>
        <p className="mb-4">
          <span className="font-semibold text-foreground">xyrus.ai</span> matches candidates against the specific competency requirements of your role, not a generic job description.
        </p>
        <p>
          Each candidate is evaluated across a structured competency framework, and the platform generates a Role Match Score, along with competency levels and valid reasoning. This ensures that every recommendation is grounded in how closely the candidate aligns with your exact hiring requirements and cross-functional needs.
        </p>
      </>
    ),
  },
  {
    question: "Can we see why a candidate has been recommended?",
    answer: (
      <p>
        Yes. Every recommendation comes with clear supporting evidence, including competency levels, match scores, recruiter insights, and the rationale behind each assessment. You are not reviewing a profile. You are reviewing a structured evaluation.
      </p>
    ),
  },
  {
    question: "What if our role requirements change mid-search?",
    answer: (
      <>
        <p className="mb-4">
          <span className="font-semibold text-foreground">xyrus.ai</span> adapts to spontaneity and flexibility.
        </p>
        <p>
          Because both candidates and roles are mapped to the same structured framework, the system can re-score the entire pool against updated requirements in real time. You don't restart the search. You simply refine the lens.
        </p>
      </>
    ),
  },
  {
    question: "Is xyrus.ai purely AI-driven?",
    answer: (
      <p>
        No. <span className="font-semibold text-foreground">xyrus.ai</span> combines AI-led analysis with human intelligence from real conversations with candidates. Human intervention ensures that assessments capture leadership judgment, decision-making patterns, and commercial thinking, not just surface-level data.
      </p>
    ),
  },
  {
    question: "Can we customize the evaluation framework for our organization?",
    answer: (
      <>
        <p className="mb-4">
          Yes. You can choose the competencies required for your role and assign weightages based on what matters most.
        </p>
        <p>
          <span className="font-semibold text-foreground">xyrus.ai</span> then evaluates every candidate against this weighted framework and generates a shortlist based on how closely each profile aligns with your specific role requirements.
        </p>
      </>
    ),
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            FAQs
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <div className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-6 p-6 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xl shrink-0 ${
                      openIndex === i ? "text-crimson" : "text-muted-foreground"
                    }`}
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
