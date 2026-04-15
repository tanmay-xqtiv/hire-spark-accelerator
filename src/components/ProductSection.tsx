import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const layers = [
  {
    id: "01",
    title: "LinkedIn Profile",
    description: "Career trajectory, progression, and public professional context.",
  },
  {
    id: "02",
    title: "Resume",
    description: "Formal record of roles, responsibilities, and achievements.",
  },
  {
    id: "03",
    title: "Competency Map",
    description: "Candidates are assessed against a structured, role-specific competency framework which is generated and validated by partners.",
  },
  {
    id: "04",
    title: "Client Feedback",
    description: "Where a candidate has previously been presented to a client, feedback from those interactions is stored and used to build a more accurate picture over time.",
  },
  {
    id: "05",
    title: "Recruiter Insights",
    description: "Notes and observations from partner conversations with candidates, covering leadership capabilities, strategic thinking, commercial orientation, and industry depth.",
  },
];


export const ProductSection = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section id="product" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="font-mono-brand text-xs tracking-[0.3em] text-crimson uppercase">
            Product
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.05] mt-6 max-w-3xl tracking-tight">
            From fragmented data to a{" "}
            <span className="text-crimson">precision shortlist.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base text-muted-foreground leading-relaxed mt-6 max-w-2xl">
            xyrus.ai is XQtiv's 24/7 hiring accelerator. It runs continuously, enriching profiles, updating assessments, and mapping the leadership market in real time. You will have a complete 360-degree profile of a candidate, before your first interview with them.
          </p>
        </Reveal>

        {/* Five layers interactive */}
        <div className="mt-20">
          <Reveal delay={0.3}>
            <div className="font-mono-brand text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-8">
              Five Levels of Candidate Intelligence
            </div>
          </Reveal>

          <div className="space-y-[1px]">
            {layers.map((layer, i) => (
              <Reveal key={layer.id} delay={0.35 + i * 0.06}>
                <button
                  onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                  className="w-full text-left group"
                >
                  <div
                    className={`flex items-center gap-6 p-6 rounded-sm transition-all duration-300 border ${
                      activeLayer === layer.id
                        ? "bg-navy border-navy"
                        : "bg-background border-border hover:border-foreground/20"
                    }`}
                  >
                    <span
                      className={`font-mono-brand text-xs tracking-widest ${
                        activeLayer === layer.id ? "text-crimson" : "text-muted-foreground"
                      }`}
                    >
                      {layer.id}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`text-lg font-bold ${
                          activeLayer === layer.id ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {layer.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeLayer === layer.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-xl ${
                        activeLayer === layer.id ? "text-crimson" : "text-muted-foreground"
                      }`}
                    >
                      +
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeLayer === layer.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 bg-navy rounded-b-sm border-x border-b border-navy">
                          <p className="text-steel text-sm leading-relaxed max-w-2xl ml-12">
                            {layer.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
