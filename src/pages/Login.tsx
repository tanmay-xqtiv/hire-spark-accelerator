import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import loginHero from "@/assets/login-hero.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up actual auth later
    console.log("Login attempt:", email);
  };

  return (
    <div className="relative min-h-screen flex bg-navy overflow-hidden">
      {/* Left side — hero image + text */}
      <div className="hidden lg:flex lg:w-[55%] relative items-end p-12">
        <img
          src={loginHero}
          alt="Executive walking through a portal of light"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="relative z-10 max-w-xl mb-8">
          <button
            onClick={() => navigate("/")}
            className="font-mono-brand text-sm tracking-widest text-primary-foreground uppercase mb-12 block"
          >
            xyrus<span className="text-crimson">.ai</span>
          </button>
          <h1 className="text-5xl xl:text-6xl font-bold text-primary-foreground leading-[0.95] tracking-tight uppercase">
            Precision Talent
          </h1>
          <p className="text-base text-steel mt-6 leading-relaxed max-w-md">
            Elevate hiring with Profile 360: complete candidate insights that drive smarter decisions.
          </p>
        </div>
      </div>

      {/* Right side — login form */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 md:p-16">
        {/* Mobile logo */}
        <div className="lg:hidden absolute top-6 left-6">
          <button
            onClick={() => navigate("/")}
            className="font-mono-brand text-sm tracking-widest text-primary-foreground uppercase"
          >
            xyrus<span className="text-crimson">.ai</span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-sm"
        >
          <div className="bg-steel/10 backdrop-blur-xl border border-steel-20 rounded-lg p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-foreground">Login</h2>
              <p className="text-steel text-sm mt-2">Welcome back!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-primary-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter here"
                  className="w-full bg-steel/10 border border-steel-20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-steel/60 focus:outline-none focus:ring-1 focus:ring-crimson text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-steel/30 hover:bg-steel/40 text-primary-foreground font-bold text-sm tracking-wider py-3 rounded-md transition-colors"
              >
                Continue
              </button>
            </form>

            <div className="text-center mt-8 space-y-1">
              <p className="text-steel text-xs">Powered by</p>
              <p className="text-primary-foreground font-bold text-lg tracking-wide">
                XQ<span className="text-crimson">tiv</span>
              </p>
              <p className="text-steel text-xs mt-2">Contact us : help@xqtiv.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
