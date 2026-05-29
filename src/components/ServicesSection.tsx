import { motion } from "framer-motion";
import { Globe, Palette, Gauge, Search, Workflow, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites web vitrine premium",
    description: "Des sites élégants conçus avec les meilleurs outils No-Code & IA, qui reflètent votre marque et inspirent confiance dès le premier regard.",
  },
  {
    icon: Palette,
    title: "Landing pages haute conversion",
    description: "Des pages stratégiques optimisées pour transformer chaque visiteur en prospect qualifié grâce à un design pensé pour convertir.",
  },
  {
    icon: Gauge,
    title: "Livraison express grâce à l'IA",
    description: "Ma stack No-Code dopée à l'IA me permet de livrer votre site en 48h — là où d'autres mettent des semaines.",
  },
  {
    icon: Search,
    title: "SEO & Performance intégrés",
    description: "Chaque site est optimisé pour Google dès sa conception : vitesse, structure, et bonnes pratiques SEO incluses.",
  },
];

const upcomingServices = [
  {
    icon: Workflow,
    title: "Optimisation & Automatisation des Workflows",
    description: "Bientôt disponible : automatisez vos tâches répétitives et fluidifiez vos process grâce à des workflows intelligents propulsés par l'IA et le No-Code.",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Bientôt disponible : montez en compétences sur le No-Code & l'IA grâce à des formations pratiques pour créer, automatiser et lancer vos projets en toute autonomie.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Pourquoi choisir un <span className="text-gradient">Développeur No-Code & IA</span> ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Une expertise pointue des meilleurs outils pour des résultats exceptionnels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {upcomingServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                Bientôt
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
