import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Package, DollarSign, Users } from 'lucide-react';
import { Button } from './ui/button';

export const AdminMockup: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Painel Administrativo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gerencie seu negócio com ferramentas profissionais e relatórios em tempo real
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Mock Admin Panel */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-white text-xl">Dashboard Administrativo</div>
            </div>

            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    icon: DollarSign,
                    label: 'Receita Hoje',
                    value: 'R$ 12.450,00',
                    change: '+23%',
                    color: 'bg-green-500',
                  },
                  {
                    icon: Package,
                    label: 'Pedidos',
                    value: '156',
                    change: '+12%',
                    color: 'bg-blue-500',
                  },
                  {
                    icon: Users,
                    label: 'Clientes',
                    value: '1.234',
                    change: '+8%',
                    color: 'bg-purple-500',
                  },
                  {
                    icon: TrendingUp,
                    label: 'Conversão',
                    value: '3.2%',
                    change: '+5%',
                    color: 'bg-orange-500',
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        <stat.icon className="size-4 text-white" />
                      </div>
                      <span className="text-green-400 text-xs">{stat.change}</span>
                    </div>
                    <div className="text-2xl text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Orders Table */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-white">Pedidos Recentes</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="text-left p-3 text-gray-400 text-sm">ID</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Cliente</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Produto</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Valor</th>
                        <th className="text-left p-3 text-gray-400 text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#1234', customer: 'João Silva', product: 'Smartphone Max', value: 'R$ 3.299,90', status: 'Pago' },
                        { id: '#1235', customer: 'Maria Santos', product: 'Fone Premium', value: 'R$ 899,90', status: 'Pago' },
                        { id: '#1236', customer: 'Pedro Costa', product: 'Notebook Ultra', value: 'R$ 4.599,90', status: 'Processando' },
                      ].map((order, index) => (
                        <tr key={index} className="border-t border-gray-700">
                          <td className="p-3 text-gray-300 text-sm">{order.id}</td>
                          <td className="p-3 text-gray-300 text-sm">{order.customer}</td>
                          <td className="p-3 text-gray-300 text-sm">{order.product}</td>
                          <td className="p-3 text-gray-300 text-sm">{order.value}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Pago'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Acessar Painel Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
