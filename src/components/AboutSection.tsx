import { motion } from "framer-motion";
import { Lightbulb, Brush, Target, Heart } from "lucide-react";
import stevePhoto from "@/assets/steve-emane.webp";

const highlights = [
  {
    icon: Lightbulb,
    label: "Expert No-Code & IA",
    description: "Maîtrise des meilleurs outils IA pour bâtir vite, bien et sans limites",
  },
  {
    icon: Brush,
    label: "Design sur-mesure",
    description: "Des créations uniques qui reflètent votre identité de marque",
  },
  {
    icon: Target,
    label: "Conversion optimisée",
    description: "Chaque élément est pensé pour transformer vos visiteurs en clients",
  },
  {
    icon: Heart,
    label: "Accompagnement premium",
    description: "Un suivi personnalisé du brief à la mise en ligne et au-delà",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-2 sm:mx-0"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square max-w-md mx-auto lg:max-w-none">
              <img
                src={stevePhoto}
                alt="Steve EMANE - Développeur No-Code & IA"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute bottom-4 right-4 lg:bottom-8 lg:-right-8 glass rounded-2xl p-3 sm:p-4 shadow-xl"
            >
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="text-sm text-muted-foreground">sites web réalisés</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-primary/10 mb-6">
              <span className="text-sm font-medium text-primary">À propos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Je suis <span className="text-gradient">Steve EMANE</span>
              <br />
              <span className="text-foreground/80">Développeur No-Code & IA</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">Développeur No-Code & IA</strong>, je combine les outils les plus puissants du marché pour concevoir des sites vitrine et des landing pages qui impressionnent et convertissent.
              </p>
              <p>
                Là où d'autres mettent des semaines, je livre en quelques jours des sites professionnels, performants et optimisés — grâce à une stack No-Code dopée à l'IA.
              </p>
              <p>
                Entrepreneurs, freelances, PME : je transforme votre vision en une vitrine digitale qui attire, rassure et convertit vos visiteurs en clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
