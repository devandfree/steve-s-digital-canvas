import { motion } from "framer-motion";
import { Globe, Palette, Gauge, Search } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites web vitrine",
    description: "Un site élégant qui reflète votre image de marque et inspire confiance à vos visiteurs dès la première seconde.",
  },
  {
    icon: Palette,
    title: "Landing pages qui convertissent",
    description: "Des pages d'atterrissage optimisées pour transformer vos visiteurs en prospects et clients qualifiés.",
  },
  {
    icon: Gauge,
    title: "Rapidité de livraison",
    description: "Grâce à Lovable, votre site est prêt en quelques jours — pas en quelques semaines. Gagnez du temps, passez à l'action.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Des sites rapides, optimisés pour Google et pensés pour générer du trafic qualifié et des résultats concrets.",
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
            Des sites web sur-mesure, livrés rapidement, qui font la différence.
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
