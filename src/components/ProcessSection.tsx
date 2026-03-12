import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Échange & Brief", desc: "On discute de votre activité, vos objectifs et le message que votre site doit transmettre." },
  { num: "02", title: "Maquette & Design", desc: "Je crée un design sur-mesure qui reflète votre identité visuelle et séduit vos visiteurs." },
  { num: "03", title: "Intégration", desc: "Votre site prend vie en quelques jours grâce à Lovable : responsive, rapide et optimisé." },
  { num: "04", title: "Livraison & Mise en ligne", desc: "Votre site est en ligne, prêt à accueillir vos visiteurs. Je vous accompagne pour la suite." },
];

const ProcessSection = () => {
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
            Un process <span className="text-gradient">simple & efficace</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            De votre brief à la mise en ligne, en un temps record.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start glass rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <span className="text-4xl font-bold text-gradient shrink-0">{step.num}</span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
