
import React from 'react';

export const Steps: React.FC = () => {
  return (
    <section className="py-40 max-w-7xl mx-auto px-6" id="como-funciona">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">Passo a passo simples</h2>
        <p className="text-lg text-slate-500 font-medium">Você pronto para vender em apenas 3 minutos.</p>
      </div>
      <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
        <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-0.5 opacity-20 -z-10 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

        <StepItem
          number="1"
          title="Entre no site"
          description="Crie sua conta rapidinho com seu e-mail."
        />
        <StepItem
          number="2"
          title="Coloque seus produtos"
          description="Cadastre o que você vende pelo celular ou computador."
        />
        <StepItem
          number="3"
          title="Veja seu lucro crescer"
          description="Acompanhe as vendas entrando e seu mercado ficando organizado."
        />
      </div>
    </section>
  );
};

const StepItem: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex-1 text-center space-y-6 group">
    <div className="w-24 h-24 bg-primary text-white text-4xl font-black rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-primary/40 border-8 border-white dark:border-slate-900 group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div className="space-y-3">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium max-w-[240px] mx-auto">{description}</p>
    </div>
  </div>
);
