import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 md:p-16 glow-primary"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prêt à avoir un site qui <span className="text-gradient">convertit vraiment</span> ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Réservez un appel gratuit de 30 minutes avec un Expert Lovable. On parle de votre projet, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              <Mail className="w-5 h-5 mr-2" />
              Réserver un appel
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              Me contacter
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
