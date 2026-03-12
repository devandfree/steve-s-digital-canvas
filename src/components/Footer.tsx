const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Steve EMANE · Créateur de sites web vitrine & landing pages
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
