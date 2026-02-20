
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="mt-20 py-24 relative mx-6 rounded-[3rem] overflow-hidden bg-navy-dark text-white shadow-2xl">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_#00A878_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
        <StatItem value="500+" label="Pequenos negócios lucrando mais" />
        <StatItem value="100%" label="Suporte em Português" />
        <StatItem value="24%" label="Aumento Médio no Lucro" />
      </div>
    </section>
  );
};

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="space-y-4">
    <div className="text-7xl font-black text-primary tracking-tighter">{value}</div>
    <div className="text-sm font-bold opacity-60 uppercase tracking-[0.2em]">{label}</div>
  </div>
);
