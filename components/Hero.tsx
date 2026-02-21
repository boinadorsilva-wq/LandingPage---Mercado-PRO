
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-16 hero-gradient">
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-primary text-xs font-bold border border-emerald-100 dark:border-emerald-800/50">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Feito para quem vende todos os dias
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
          Mais <span className="text-primary">Gestão</span> e <br />
          muito mais <span className="italic underline decoration-primary/30 decoration-8 underline-offset-4">Lucratividade</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
          Seja mercado, hortifrúti, adega, conveniência ou loja de ração — controle estoque, vendas e lucro com o sistema mais simples do Brasil.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a href="https://gestao-negocio.vercel.app/login" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary-dark text-white text-lg font-black rounded-2xl transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1 text-center">
            Começar grátis agora
          </a>
          <a href="#como-funciona" className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center">
            Ver como funciona
          </a>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">verified</span>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Use grátis por 14 dias</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">trending_up</span>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Sem cartão. Cancele quando quiser.</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="relative rounded-4xl overflow-hidden shadow-2xl group border-8 border-white dark:border-slate-800">
          {/* OBRIGATÓRIO: Imagem do comerciante barbudo, asset fixo da marca */}
          <img
            alt="Dono de mercado sorrindo"
            className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_tU7kdI-e0afmNmyfdznPFEiF7DJDc8Yh32etUk5qD_ZWTKIWQz8KMAVmjVDrMsvJd7-3aIKOcmFJ1GqXwsTNqy3T9Ld7U6oTI9uY3B2GJZO2Fhc8V7St_1xdg5R0BPNX54krEVrgkzS1_wWquwrkCrI6HcU5YNMqcdB3qQJIn_6AcOofTLc8-wu1NHOc2cypnWmKrlf7kJ5Wmw5vQPAMd9oip6Q8hSgYbxwZ67tZ2t68AtnV0AXT7Ufn0VO9n5thNZ_tDAaco"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl shadow-premium border-white/60 max-w-[200px]">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Seu Lucro</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">+24% ao mês</div>
          </div>
        </div>
        <div className="absolute top-10 -right-4 glass-card p-5 rounded-2xl shadow-premium border-white/60">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">500+</div>
            </div>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Comércios felizes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
