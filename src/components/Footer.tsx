const Footer = () => (
  <footer className="bg-foreground text-background/70 py-10 px-4 sm:px-6 lg:px-8">
    <div className="container-narrow">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm mb-6">
        <p className="font-display text-lg font-bold text-background">JAYA SURYA Dental</p>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/drjayanth/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">Facebook</a>
          <a href="https://www.instagram.com/jayasuryadentalclinic/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">Instagram</a>
          <a href="https://www.youtube.com/@jayasuryadental1810" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">YouTube</a>
        </div>
      </div>
      <div className="text-center text-background/40 text-xs">
        © {new Date().getFullYear()} JAYA SURYA Dental & Advanced Implant Center. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
