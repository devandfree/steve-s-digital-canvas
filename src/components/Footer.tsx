const Footer = () => {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="container px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © 2026 Steve EMANE · Développeur No-Code & IA · Création de Sites Web & Automatisation des Workflows
        </p>
        <div className="flex gap-5 sm:gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">X (Twitter)</a>
          <a href="https://wa.me/237622186389" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
