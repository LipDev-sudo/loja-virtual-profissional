import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, QrCode, Package, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'Pagamento via PIX',
    description: 'Receba pagamentos instantâneos via PIX com confirmação automática',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: CreditCard,
    title: 'Cartão de Crédito',
    description: 'Aceite todas as bandeiras com processamento seguro e automático',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Package,
    title: 'Controle de Pedidos',
    description: 'Gerencie todos os pedidos em tempo real com notificações automáticas',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: BarChart3,
    title: 'Painel Administrativo',
    description: 'Dashboard completo com métricas, relatórios e análises detalhadas',
    color: 'from-orange-500 to-red-600',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Sistema Completo de Automação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar sua loja virtual em uma única plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="size-6 text-white" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
