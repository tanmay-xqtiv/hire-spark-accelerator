import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "What is xyrus", href: "#what-is-xyrus" },
  { label: "The Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 section-padding"
    >
      <div className="mx-auto max-w-7xl mt-4">
        <div className="flex items-center justify-between rounded-sm bg-navy/95 backdrop-blur-md px-6 py-3 border border-steel-20">
          <button onClick={() => scrollTo("#hero")} className="font-mono-brand text-sm tracking-widest text-primary-foreground uppercase">
            xyrus<span className="text-crimson">.ai</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-xs tracking-wide text-steel hover:text-primary-foreground transition-colors duration-200 uppercase font-mono-brand"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-crimson text-primary-foreground text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <motion.div animate={mobileOpen ? { rotate: 45, y: 6 } : {}} className="h-[1.5px] bg-current" />
              <motion.div animate={mobileOpen ? { opacity: 0 } : {}} className="h-[1.5px] bg-current" />
              <motion.div animate={mobileOpen ? { rotate: -45, y: -6 } : {}} className="h-[1.5px] bg-current" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy/95 backdrop-blur-md mt-1 rounded-sm border border-steel-20 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-xs tracking-wide text-steel hover:text-primary-foreground transition-colors uppercase font-mono-brand text-left py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="bg-crimson text-primary-foreground text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-sm mt-2"
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
