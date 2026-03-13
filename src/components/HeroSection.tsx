import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Globe, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
                Expert Lovable
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="text-foreground">Votre site vitrine</span>
              <br />
              <span className="text-gradient">qui convertit</span>
              <br />
              <span className="text-foreground">dès le premier clic.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed"
            >
              Je crée des sites web vitrine et des landing pages qui captent l'attention et convertissent vos visiteurs en clients — grâce à Lovable.
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

          {/* Right — Social proof cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Stats card */}
            <div className="glass rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Globe, value: "50+", label: "Sites livrés" },
                  { icon: TrendingUp, value: "3x", label: "Plus de conversions" },
                  { icon: Zap, value: "48h", label: "Délai moyen" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                "Steve a transformé mon idée en un site vitrine professionnel en moins de 48h. Le résultat dépasse mes attentes — mes conversions ont doublé."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  ML
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marie L.</div>
                  <div className="text-xs text-muted-foreground">Fondatrice, Studio Créatif</div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="glass rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">100% satisfaction garantie</div>
                <div className="text-xs text-muted-foreground">Retouches illimitées jusqu'à votre validation finale</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats — visible on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-16 lg:hidden"
        >
          {[
            { value: "50+", label: "Sites livrés" },
            { value: "3x", label: "Plus de conversions" },
            { value: "48h", label: "Délai moyen" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
