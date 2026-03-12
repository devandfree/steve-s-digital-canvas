import { motion } from "framer-motion";
import { Lightbulb, Brush, Target, Heart } from "lucide-react";
import stevePhoto from "@/assets/steve-emane.webp";

const highlights = [
  {
    icon: Lightbulb,
    label: "Vision créative",
    description: "Un design pensé pour votre audience cible",
  },
  {
    icon: Brush,
    label: "Spécialiste Lovable",
    description: "Maîtrise avancée de la plateforme n°1 de création web IA",
  },
  {
    icon: Target,
    label: "Sites qui convertissent",
    description: "Chaque page est conçue pour générer des résultats",
  },
  {
    icon: Heart,
    label: "Accompagnement dédié",
    description: "Un suivi personnalisé du brief à la mise en ligne",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <img
                src={stevePhoto}
                alt="Steve EMANE - Créateur de sites web & Spécialiste Lovable"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">sites web livrés</div>
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

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Je suis <span className="text-gradient">Steve EMANE</span>
              <br />
              <span className="text-foreground/80">créateur de sites web</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Spécialiste <strong className="text-foreground">Lovable</strong>, je conçois des sites web vitrine et des landing pages qui marquent les esprits et génèrent des résultats concrets pour votre activité.
              </p>
              <p>
                Mon approche ? Allier un design moderne et percutant à une stratégie de conversion efficace — le tout livré en un temps record grâce à la puissance de l'IA.
              </p>
              <p>
                Que vous soyez entrepreneur, freelance ou entreprise, je m'investis pour créer un site qui reflète vraiment votre identité et parle à vos clients.
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
