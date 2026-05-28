import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "À qui s'adresse la formation No-Code & IA ?",
    answer:
      "À toute personne souhaitant créer, automatiser et lancer ses projets sans coder : entrepreneurs, indépendants, freelances, marketeurs, product managers ou simples curieux qui veulent enfin passer à l'action grâce au No-Code et à l'IA.",
  },
  {
    question: "Faut-il avoir des compétences techniques pour suivre la formation ?",
    answer:
      "Aucune compétence en développement n'est requise. La formation est pensée pour les débutants comme pour les profils plus avancés qui veulent structurer leur stack No-Code & IA et accélérer leur productivité.",
  },
  {
    question: "Quels outils seront couverts ?",
    answer:
      "Les meilleurs outils du moment : Lovable, Supabase, n8n, Make, Airtable, Notion, ainsi que les modèles d'IA les plus performants (ChatGPT, Claude, Gemini) pour automatiser et créer plus vite.",
  },
  {
    question: "Quel format aura la formation ?",
    answer:
      "Un format hybride et pratique : modules en ligne accessibles à votre rythme, ateliers live pour passer à la pratique, et accompagnement personnalisé pour avancer sur vos propres projets.",
  },
  {
    question: "Quand la formation sera-t-elle disponible ?",
    answer:
      "La formation est en cours de finalisation. Contactez-moi dès maintenant pour rejoindre la liste d'attente et bénéficier d'un tarif privilégié au lancement.",
  },
  {
    question: "Comment être informé du lancement ?",
    answer:
      "Cliquez sur \"Discuter de mon projet\" en haut de la page pour me contacter directement. Je vous tiendrai informé en priorité dès l'ouverture des inscriptions.",
  },
];

const FAQSection = () => {
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
            Questions fréquentes sur la <span className="text-gradient">Formation No-Code & IA</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Tout ce qu'il faut savoir avant de vous lancer dans le No-Code & l'IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass rounded-2xl p-4 sm:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="border-border/40"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;