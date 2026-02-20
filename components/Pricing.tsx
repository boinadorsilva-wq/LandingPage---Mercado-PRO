
import React from 'react';

const LOGIN_URL = 'https://mercado-lovable3.vercel.app/login';

const PLANS = [
    {
        name: 'Mensal',
        price: 'R$ 29,90',
        period: '/mês',
        subtitle: 'Perfeito para quem está começando.',
        highlight: false,
        badge: null,
        features: [
            'Gestão de Produtos Ilimitada',
            'Controle de Vendas e Estoque',
            'Relatórios Detalhados',
            'Suporte Prioritário',
            'Dashboard em Tempo Real',
            'Alertas de Estoque Baixo',
        ],
        cta: 'Assinar Agora',
    },
    {
        name: 'Trimestral',
        price: 'R$ 72,90',
        period: '/trimestre',
        subtitle: 'Economize e garanta 3 meses de gestão.',
        highlight: true,
        badge: 'Mais Popular',
        features: [
            'Gestão de Produtos Ilimitada',
            'Controle de Vendas e Estoque',
            'Relatórios Detalhados',
            'Suporte Prioritário',
            'Dashboard em Tempo Real',
            'Alertas de Estoque Baixo',
            'Consultoria Inicial Grátis',
        ],
        cta: 'Assinar Trimestral',
    },
    {
        name: 'Anual',
        price: 'R$ 358,90',
        period: '/ano',
        subtitle: 'Máxima economia para o seu negócio.',
        highlight: false,
        badge: null,
        features: [
            'Gestão de Produtos Ilimitada',
            'Controle de Vendas e Estoque',
            'Relatórios Detalhados',
            'Suporte Prioritário',
            'Dashboard em Tempo Real',
            'Alertas de Estoque Baixo',
            'Consultoria Inicial Grátis',
            'Backup Automático em Nuvem',
            'Gestor de Conta Dedicado',
        ],
        cta: 'Assinar Anual',
    },
];

export const Pricing: React.FC = () => {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6" id="precos">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
                    Escolha o plano ideal para o seu negócio
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                    Comece a gerenciar seu comércio com inteligência e eficiência hoje mesmo.<br />
                    <span className="font-bold text-slate-600 dark:text-slate-300">Sem taxas escondidas, cancele quando quiser.</span>
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-4xl border p-10 flex flex-col gap-8 transition-all duration-300 ${plan.highlight
                                ? 'bg-white dark:bg-slate-800 border-primary shadow-2xl shadow-primary/20 scale-105'
                                : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1'
                            }`}
                    >
                        {plan.badge && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="px-5 py-1.5 bg-primary text-white text-xs font-black rounded-full shadow-lg shadow-primary/30 uppercase tracking-widest">
                                    {plan.badge}
                                </span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white">{plan.name}</h3>
                            <div className="flex items-end gap-1">
                                <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                                <span className="text-slate-400 font-semibold mb-1">{plan.period}</span>
                            </div>
                            <p className="text-sm font-medium text-primary">{plan.subtitle}</p>
                        </div>

                        <ul className="space-y-3 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={LOGIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-4 rounded-2xl text-sm font-black text-center transition-all ${plan.highlight
                                    ? 'bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/30 transform hover:-translate-y-0.5'
                                    : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-100 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                                }`}
                        >
                            {plan.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
