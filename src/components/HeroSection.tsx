import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-background flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background grid + depth */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/5" />
      </div>

      {/* AI logic structure — right side */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] z-0 hidden lg:block pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full opacity-40"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M100 200 L180 120 M100 200 L180 280 M180 120 L300 120 M180 280 L300 280 M300 120 L350 200 M300 280 L350 200 M180 120 L180 280"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
            <circle cx="100" cy="200" r="3" fill="hsl(var(--primary))" className="animate-pulse" />
            <circle cx="180" cy="120" r="3" fill="hsl(var(--primary))" />
            <circle cx="180" cy="280" r="3" fill="hsl(var(--primary))" />
            <circle cx="300" cy="120" r="3" fill="hsl(var(--primary))" />
            <circle cx="300" cy="280" r="3" fill="hsl(var(--primary))" />
            <circle cx="350" cy="200" r="4" fill="hsl(var(--primary))" />
          </svg>

          <div className="absolute w-full h-full">
            <div className="absolute top-[20%] right-[30%] p-4 bg-foreground/[0.02] border border-border rounded-xl backdrop-blur-sm animate-bounce [animation-duration:8s]">
              <div className="w-8 h-1 bg-primary/50 rounded-full mb-2" />
              <div className="w-12 h-1 bg-foreground/10 rounded-full" />
            </div>
            <div className="absolute bottom-[25%] right-[45%] p-3 bg-foreground/[0.02] border border-border rounded-lg backdrop-blur-sm animate-bounce [animation-duration:6s]">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              </div>
            </div>
          </div>

          <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>
      </div>

      <div className="container mx-auto px-0 sm:px-6 relative z-10 py-16 sm:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center w-full"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-foreground/[0.03] border border-border mb-6 sm:mb-8 transition-colors hover:border-primary/30">
            <div className="relative">
              <span className="block w-2 h-2 rounded-full bg-primary animate-ping absolute inset-0" />
              <span className="relative block w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-foreground/90 uppercase">
              Expert No-Code & IA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.05] sm:leading-[0.95] mb-5 sm:mb-6 px-2">
            <span className="text-foreground">Des sites web</span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[size:200%_auto]"
              style={{ animation: "gradient-x 4s linear infinite" }}
            >
              propulsés par l'IA
            </span>
            <br />
            <span className="text-foreground">qui font vendre.</span>
          </h1>

          {/* Subline */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8 sm:mb-10 font-medium px-2">
            Expert No-Code & IA, je conçois des sites vitrine et des landing pages haute conversion — livrés en quelques jours, sans compromis sur le design ni la performance.
          </p>

          {/* Stats / Features */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10 max-w-2xl w-full">
            <div className="p-4 rounded-2xl border border-border bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-all">
              <div className="text-primary font-bold text-base sm:text-lg mb-1">48h</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Déploiement</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-all">
              <div className="text-primary font-bold text-base sm:text-lg mb-1">+40%</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Conversion</div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-all">
              <div className="text-primary font-bold text-base sm:text-lg mb-1">100%</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Responsive</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
            <Button asChild variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 group w-full sm:w-auto">
              <a href="#contact">
                Discutons de votre projet
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-foreground/70 font-bold transition-colors hover:text-foreground group"
            >
              Voir mes réalisations
              <span className="w-1 h-1 rounded-full bg-primary group-hover:w-6 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
