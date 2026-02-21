
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl font-bold">shopping_cart</span>
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white font-display">Mercado <span className="text-primary">PRO</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm font-medium">
              A plataforma de gestão preferida dos pequenos e médios mercados do Brasil. Feito de brasileiro para brasileiro.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Acesso Rápido</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Vantagens</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Preços</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Quem usa</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Suporte</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Fale Conosco</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">WhatsApp</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Dúvidas Frequentes</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100 dark:border-slate-800/50">
          <p className="text-sm font-bold text-slate-400">© 2024 Mercado PRO Tecnologia. Orgulhosamente Brasileiro.</p>
          <div className="flex gap-8">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">security</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
