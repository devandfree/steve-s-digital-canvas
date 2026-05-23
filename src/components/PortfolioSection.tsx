import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Restaurant Gastronomique",
    category: "Site vitrine",
    description: "Landing page immersive avec réservation en ligne et menu interactif.",
  },
  {
    image: portfolio2,
    title: "Agence Immobilière Premium",
    category: "Site vitrine",
    description: "Vitrine élégante avec catalogue de biens et formulaire de contact.",
  },
  {
    image: portfolio3,
    title: "Coach Fitness",
    category: "Landing page",
    description: "Page de vente haute conversion avec témoignages et prise de rendez-vous.",
  },
  {
    image: portfolio4,
    title: "Salon de Beauté & Spa",
    category: "Site vitrine",
    description: "Design raffiné avec système de réservation et galerie de prestations.",
  },
  {
    image: portfolio5,
    title: "Agence Créative",
    category: "Portfolio",
    description: "Portfolio dynamique avec showcase de projets et animations immersives.",
  },
  {
    image: portfolio6,
    title: "Boutique Mode",
    category: "E-commerce",
    description: "Vitrine e-commerce élégante avec collections et lookbook interactif.",
  },
];

const INTERVAL = 5000;

const PortfolioSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const getIndex = (offset: number) =>
    (current + offset + projects.length) % projects.length;

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Des sites qui{" "}
            <span className="text-gradient">convertissent</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque projet est conçu avec une stack No-Code & IA pour maximiser
            l'impact visuel et le taux de conversion de mes clients.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main carousel area */}
          <div className="relative flex items-center justify-center h-[420px] md:h-[520px]">
            {/* Previous slide (left) */}
            <div className="hidden md:block absolute left-0 w-[28%] z-10 opacity-40 scale-90 transition-all duration-700 ease-in-out blur-[1px]">
              <img
                src={projects[getIndex(-1)].image}
                alt={projects[getIndex(-1)].title}
                className="w-full aspect-video object-cover rounded-xl border border-border/30"
              />
            </div>

            {/* Current slide (center) */}
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full md:w-[56%] z-20"
            >
              <div className="relative group">
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full aspect-video object-cover rounded-xl border border-border/50 shadow-2xl"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase mb-2">
                    {projects[current].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                    {projects[current].title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md mb-4">
                    {projects[current].description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Next slide (right) */}
            <div className="hidden md:block absolute right-0 w-[28%] z-10 opacity-40 scale-90 transition-all duration-700 ease-in-out blur-[1px]">
              <img
                src={projects[getIndex(1)].image}
                alt={projects[getIndex(1)].title}
                className="w-full aspect-video object-cover rounded-xl border border-border/30"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Aller au projet ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-4 max-w-xs mx-auto h-0.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              key={`${current}-${isPaused}`}
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? undefined : "100%" }}
              transition={{
                duration: INTERVAL / 1000,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
