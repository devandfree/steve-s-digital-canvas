import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import stevePhoto from "@/assets/steve-emane-hero.png";

const HeroSection = () => {
  const benefits = [
    "Livré en 48h",
    "Optimisé conversion",
    "100% responsive",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Expert No-Code & IA
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="text-foreground">Des sites web</span>
              <br />
              <span className="text-gradient">propulsés par l'IA</span>
              <br />
              <span className="text-foreground">qui font vendre.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed"
            >
              Expert No-Code & IA, je conçois des sites vitrine et des landing pages haute conversion — livrés en quelques jours, sans compromis sur le design ni la performance.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Discutons de votre projet
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                Voir mes réalisations
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Photo avec fondu et zoom */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Gradient de fondu */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute -inset-6 bg-gradient-radial from-primary/15 via-transparent to-transparent blur-3xl" />
            <img
              src={stevePhoto}
              alt="Steve Emane - Expert No-Code & IA"
                className="w-full h-auto relative z-0 scale-110"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile — Photo centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex lg:hidden justify-center mt-12 mb-8"
        >
          <div className="relative w-full max-w-[320px]">
            <div className="absolute -inset-4 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl" />
            <img
              src={stevePhoto}
              alt="Steve Emane - Expert No-Code & IA"
              className="w-full h-auto relative z-0 scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
