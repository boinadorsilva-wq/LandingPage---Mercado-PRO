
import React from 'react';

const FEATURE_DATA = [
  { icon: 'shopping_cart', title: 'Venda Fácil', description: 'Registre vendas em segundos, sem complicação.' },
  { icon: 'payments', title: 'Lucro Real Automático', description: 'O sistema calcula sua margem e lucro líquido automaticamente.' },
  { icon: 'inventory', title: 'Estoque Esperto', description: 'Saiba o que está acabando antes de faltar para o cliente.' },
  { icon: 'smartphone', title: 'Tudo no Celular', description: 'Acesse do celular, tablet ou computador em tempo real.' },
  { icon: 'insights', title: 'Produtos Campeões', description: 'Veja quais itens trazem mais lucro com relatórios simples.' },
  { icon: 'chat', title: 'Suporte Parceiro', description: 'Dúvidas? Chame no WhatsApp. Respondemos na hora.' },
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6" id="beneficios">
      <div className="text-center mb-24 space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display">Tudo o que você precisa</h2>
        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Ideal para mercados, hortifrutis, adegas, conveniências, lojas de ração e pequenos comércios em geral.</p>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Ferramentas simples para o dono de negócio que não quer complicações.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FEATURE_DATA.map((feature, idx) => (
          <div key={idx} className="p-10 bg-white dark:bg-slate-800/50 rounded-4xl border border-slate-100 dark:border-slate-800 hover:shadow-premium-hover transition-all duration-500 group">
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 text-primary rounded-2xl flex items-center justify-center mb-8 border border-emerald-100/50 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
