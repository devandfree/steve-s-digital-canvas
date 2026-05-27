import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-8 sm:p-12 md:p-16 glow-primary"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Prêt à avoir un site qui <span className="text-gradient">convertit vraiment</span> ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Réservez un appel gratuit de 30 minutes avec un Expert No-Code & IA. On parle de votre projet, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <a href="mailto:contact@steveemane.com">
                <Mail className="w-5 h-5 mr-2" />
                Réserver un appel
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <a href="https://wa.me/237622186389" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
