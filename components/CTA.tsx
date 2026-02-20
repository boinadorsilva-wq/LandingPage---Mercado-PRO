
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 mb-20 px-6">
      <div className="max-w-6xl mx-auto cta-radial-gradient py-24 px-10 rounded-[4rem] text-center space-y-12 border border-emerald-100 dark:border-emerald-900/10 shadow-premium">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight font-display">
            Seu negócio merece <br /><span className="text-primary">mais lucro e menos bagunça.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Junte-se a centenas de empreendedores brasileiros que já simplificaram a gestão do seu comércio.
            Teste grátis por 14 dias.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <a href="https://mercado-lovable3.vercel.app/login" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary-dark text-white text-xl font-black rounded-2xl transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1 text-center">
            Experimentar agora grátis
          </a>
          <a href="https://mercado-lovable3.vercel.app/login" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center">
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
};
