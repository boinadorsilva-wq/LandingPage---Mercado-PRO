
import React from 'react';

export const Problems: React.FC = () => {
  return (
    <section className="mt-32 py-32 bg-slate-50/50 dark:bg-slate-900/40" id="problemas">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-24">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight font-display">
              Cansado da bagunça <br /> nas anotações?
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              Controlar seu comércio no papel ou na cabeça faz você perder dinheiro todos os dias. Veja como resolvemos isso para você:
            </p>
          </div>
          <div className="grid gap-8">
            <ProblemItem
              icon="edit_off"
              title="Chega de erros manuais"
              description="Pare de errar contas e perder o controle do que entra e sai."
            />
            <ProblemItem
              icon="inventory_2"
              title="Estoque sempre em dia"
              description="Saiba exatamente quando repor produtos antes que eles acabem."
            />
            <ProblemItem
              icon="event_busy"
              title="Fim dos produtos vencidos"
              description="O sistema avisa o que está perto de vencer para você fazer promoções."
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="relative glass-card rounded-4xl shadow-2xl border-white/60 overflow-hidden">
            <div className="p-6 border-b border-slate-100/50 flex items-center justify-between bg-white/60 dark:bg-slate-800/60">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Painel de Lucro do Seu Comércio</div>
            </div>
            <div className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Vendas Hoje</p>
                  <p className="text-2xl font-black text-primary">R$ 4.250,00</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Produtos em Falta</p>
                  <p className="text-2xl font-black text-red-500">3 Itens</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Movimento da Semana</p>
                  <span className="text-xs font-bold text-primary">Crescendo!</span>
                </div>
                <div className="h-40 flex items-end justify-between gap-3">
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-[40%] rounded-lg"></div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-[60%] rounded-lg"></div>
                  <div className="w-full bg-primary h-[85%] rounded-lg shadow-lg shadow-primary/20"></div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-[50%] rounded-lg"></div>
                  <div className="w-full bg-primary h-[95%] rounded-lg shadow-lg shadow-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemItem: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start gap-5">
    <div className="w-14 h-14 shrink-0 rounded-2xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  </div>
);
