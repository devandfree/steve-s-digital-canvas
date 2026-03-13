import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-display font-bold text-gradient">
          Steve EMANE
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
