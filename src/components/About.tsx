const About = () => {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sobre</span>
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl">
            A MVX Studios nasceu para transformar ideias em sistemas vivos.
          </p>
          
          <p>
            Cada site, cada marca, cada automação carrega o DNA da inteligência criativa — o equilíbrio perfeito entre razão e emoção.
          </p>
          
          <p className="text-2xl md:text-3xl font-semibold text-foreground mt-8 italic">
            "Não criamos só sites. Criamos sistemas que pensam."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
