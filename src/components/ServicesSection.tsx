import { motion } from "framer-motion";
import { Zap, Palette, Rocket, Shield } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Développement ultra-rapide",
    description: "Grâce à Lovable, je livre votre MVP en quelques jours, pas en quelques mois. Allez vite sur le marché.",
  },
  {
    icon: Palette,
    title: "Design sur-mesure",
    description: "Des interfaces modernes, intuitives et qui convertissent. Chaque pixel est pensé pour vos utilisateurs.",
  },
  {
    icon: Rocket,
    title: "Applications complètes",
    description: "Du site vitrine à la SaaS complexe : authentification, base de données, paiements — tout est inclus.",
  },
  {
    icon: Shield,
    title: "Code propre & scalable",
    description: "Un code source que vous possédez, maintenable et prêt à évoluer avec votre business.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi <span className="text-gradient">travailler avec moi</span> ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            L'expertise Lovable au service de votre vision produit.
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
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
            >
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
