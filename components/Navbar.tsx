
import React from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined font-bold text-2xl">shopping_cart</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Gestão<span className="text-primary">negocio</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#problemas">Por que usar?</a>
            <a className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#beneficios">Vantagens</a>
            <a className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#como-funciona">Passo a Passo</a>
            <a className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#precos">Preços</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <span className="material-symbols-outlined text-yellow-400">light_mode</span>
            ) : (
              <span className="material-symbols-outlined">dark_mode</span>
            )}
          </button>
          <a className="hidden sm:block text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary" href="https://gestao-negocio.vercel.app/login" target="_blank" rel="noopener noreferrer">Entrar</a>
          <a className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl text-sm font-extrabold transition-all shadow-lg shadow-primary/20" href="https://gestao-negocio.vercel.app/login" target="_blank" rel="noopener noreferrer">
            Começar agora mesmo
          </a>
        </div>
      </nav>
    </header>
  );
};
