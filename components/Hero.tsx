import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-orange-50">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold text-orange-800 uppercase tracking-wide">Oferta Válida Apenas Hoje</span>
            </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-6 leading-tight">
            O Ebook Que Vai Revolucionar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
               Sua Dieta Low Carb
            </span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
            Elimine a frustração de não saber o que cozinhar! Tenha acesso imediato a pratos deliciosos, fáceis de fazer e que cabem no seu bolso. Emagreça comendo bem.
          </p>

        </div>

        {/* Botão Neon Piscando */}
        <div className="mt-8 flex justify-center relative z-20">
            <a 
                href="https://eduname1224.pay.yampi.com.br/b/SUZ3AVS5XZ4W"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-5 text-xl sm:text-2xl font-extrabold text-white transition-all duration-200 bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary animate-pulse shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:shadow-[0_0_50px_rgba(249,115,22,1)] hover:scale-105"
            >
                QUERO MEU EBOOK POR R$9,90 <span className="ml-2">→</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;