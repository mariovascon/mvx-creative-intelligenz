const About = () => {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Sobre a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MVX Studios</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          Somos um estúdio independente que cria o futuro das marcas com tecnologia e propósito.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto pt-4">
          Unimos design, automação e IA para construir ecossistemas inteligentes e experiências que respiram humanidade.
        </p>
      </div>
    </section>
  );
};

export default About;
