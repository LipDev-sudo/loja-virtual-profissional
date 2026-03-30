import React from 'react';
import { motion } from 'motion/react';
import { Truck, ShieldCheck, CreditCard, Headphones, RotateCcw, Award } from 'lucide-react';

const trustBadges = [
  {
    icon: Truck,
    title: 'Entrega Rapida',
    description: 'Receba em ate 2 dias uteis para sua regiao',
    color: '#232F3E',
    bgColor: '#F0F2F2',
  },
  {
    icon: ShieldCheck,
    title: 'Pagamento Seguro',
    description: 'Seus dados protegidos com criptografia de ponta',
    color: '#007600',
    bgColor: '#F0F8F0',
  },
  {
    icon: CreditCard,
    title: 'Parcele em ate 12x',
    description: 'No cartao de credito sem juros em todos os produtos',
    color: '#C7511F',
    bgColor: '#FFF8F0',
  },
  {
    icon: RotateCcw,
    title: 'Devolucao Gratis',
    description: '30 dias para devolucao sem complicacao',
    color: '#232F3E',
    bgColor: '#F0F2F2',
  },
  {
    icon: Award,
    title: 'Produtos Originais',
    description: 'Garantia de originalidade em todos os produtos',
    color: '#FF9900',
    bgColor: '#FFF5E6',
  },
  {
    icon: Headphones,
    title: 'Suporte 24h',
    description: 'Atendimento especializado a qualquer momento',
    color: '#007185',
    bgColor: '#F0F8FA',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-[#D5D9D9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
            Por que comprar na TechStore?
          </h2>
          <p className="text-[#565959]">
            Garantias que fazem a diferenca na sua experiencia de compra
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition-shadow duration-200 border border-transparent hover:border-[#D5D9D9]"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: badge.bgColor }}
              >
                <badge.icon className="size-7" style={{ color: badge.color }} />
              </div>
              <h3 className="text-sm font-bold text-[#0F1111] mb-1">{badge.title}</h3>
              <p className="text-xs text-[#565959] leading-relaxed">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
