import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "250",
    tagline: "Landing page haute conversion",
    description: "Idéal pour lancer rapidement une offre, un produit ou un événement.",
    features: [
      "Landing page one-page sur-mesure",
      "Design premium responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Livraison en 48-72h",
    ],
    cta: "Démarrer mon projet",
    highlight: false,
  },
  {
    name: "Professionnel",
    price: "800",
    tagline: "Site vitrine multi-pages",
    description: "Pour les entreprises qui veulent une présence web complète et crédible.",
    features: [
      "Jusqu'à 5 pages sur-mesure",
      "Design premium & animations",
      "SEO avancé + Analytics",
      "Intégration emails / CRM",
      "Blog ou portfolio inclus",
      "Livraison en 5-7 jours",
    ],
    cta: "Choisir ce pack",
    highlight: true,
  },
  {
    name: "Sur-mesure",
    price: "Sur devis",
    tagline: "Projet stratégique avancé",
    description: "Pour des besoins spécifiques : e-commerce, automatisations IA, intégrations.",
    features: [
      "Pages illimitées",
      "Automatisations IA & No-Code",
      "Intégrations avancées (Stripe, API…)",
      "Espace membre / dashboard",
      "Accompagnement dédié",
      "Maintenance incluse",
    ],
    cta: "Discuter du projet",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/[0.03] border border-border mb-5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.15em] text-foreground/90 uppercase">
              Tarifs transparents
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Des sites à partir de <span className="text-gradient">800 $</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Choisissez la formule qui correspond à votre ambition. Sans surprise, sans frais cachés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "border-2 border-primary/50 bg-foreground/[0.02] glow-primary"
                  : "glass hover:border-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-[10px] font-bold tracking-widest uppercase">
                  Le plus choisi
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>
              <div className="mb-6">
                {plan.price === "Sur devis" ? (
                  <div className="text-4xl font-black text-foreground">Sur devis</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">à partir de</span>
                  </div>
                )}
                {plan.price !== "Sur devis" && (
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-5xl font-black text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground text-sm">USD</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.highlight ? "hero" : "heroOutline"}
                className="w-full group"
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Paiement en 2 ou 3 fois possible · Devis gratuit sous 24h
        </p>
      </div>
    </section>
  );
};

export default PricingSection;