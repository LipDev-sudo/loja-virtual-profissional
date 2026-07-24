import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  ShoppingBag,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';
import { Button } from '../components/ui/button';
import { products } from '../data/products';

type OrderStatus = 'pending' | 'processing' | 'completed';
type OrderFilter = 'all' | OrderStatus;

const statusLabels: Record<OrderStatus, string> = {
  pending: 'Pendente',
  processing: 'Processando',
  completed: 'Concluído',
};

const initialOrders: Array<{
  id: string;
  customer: string;
  product: string;
  value: number;
  status: OrderStatus;
  date: string;
}> = [
  {
    id: '#1234',
    customer: 'João Silva',
    product: 'Smartphone Max',
    value: 3299.9,
    status: 'completed',
    date: '22/02/2026 14:32',
  },
  {
    id: '#1235',
    customer: 'Maria Santos',
    product: 'Fone Premium',
    value: 899.9,
    status: 'completed',
    date: '22/02/2026 14:15',
  },
  {
    id: '#1236',
    customer: 'Pedro Costa',
    product: 'Notebook Ultra',
    value: 4599.9,
    status: 'processing',
    date: '22/02/2026 13:58',
  },
  {
    id: '#1237',
    customer: 'Ana Paula',
    product: 'Smartwatch Pro',
    value: 1299.9,
    status: 'completed',
    date: '22/02/2026 13:45',
  },
  {
    id: '#1238',
    customer: 'Carlos Oliveira',
    product: 'Câmera Digital Pro',
    value: 8999.9,
    status: 'pending',
    date: '22/02/2026 13:22',
  },
];

export const AdminPanel: React.FC = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [orderFilter, setOrderFilter] = useState<OrderFilter>('all');
  const visibleOrders = orderFilter === 'all' ? orders : orders.filter((order) => order.status === orderFilter);

  const advanceOrder = (id: string) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) => {
        if (order.id !== id || order.status === 'completed') return order;
        return {
          ...order,
          status: order.status === 'pending' ? 'processing' : 'completed',
        };
      }),
    );
  };

  const stats = [
    {
      icon: DollarSign,
      label: 'Receita Total',
      value: 'R$ 48.250,00',
      change: '+23%',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Package,
      label: 'Pedidos Hoje',
      value: '156',
      change: '+12%',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Users,
      label: 'Novos Clientes',
      value: '1.234',
      change: '+8%',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      label: 'Taxa de Conversão',
      value: '3.2%',
      change: '+5%',
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-2"
            >
              <ArrowLeft className="size-4" />
              Voltar para loja
            </Link>
            <h1 className="text-3xl">Painel Administrativo</h1>
            <p className="text-gray-600">
              Simule a triagem de pedidos, acompanhe estoque e consulte indicadores demonstrativos
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-800">
            <ShoppingBag className="size-4" />
            Modo demonstração
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}
                >
                  <stat.icon className="size-6 text-white" />
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="min-w-0 bg-white rounded-lg shadow-sm border border-gray-200 lg:col-span-2"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl">Fila de pedidos</h2>
                <p className="mt-1 text-sm text-gray-500">Clique no status para avançar a etapa do pedido.</p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filtrar pedidos por status">
                {[
                  { value: 'all' as const, label: 'Todos' },
                  { value: 'pending' as const, label: 'Pendentes' },
                  { value: 'processing' as const, label: 'Processando' },
                  { value: 'completed' as const, label: 'Concluídos' },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={orderFilter === filter.value}
                    onClick={() => setOrderFilter(filter.value)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                      orderFilter === filter.value
                        ? 'border-[#232F3E] bg-[#232F3E] text-white'
                        : 'border-gray-300 bg-white text-gray-600 hover:border-gray-500'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm text-gray-600">ID</th>
                    <th className="text-left p-4 text-sm text-gray-600">
                      Cliente
                    </th>
                    <th className="text-left p-4 text-sm text-gray-600">
                      Produto
                    </th>
                    <th className="text-left p-4 text-sm text-gray-600">
                      Valor
                    </th>
                    <th className="text-left p-4 text-sm text-gray-600">
                      Status
                    </th>
                    <th className="text-left p-4 text-sm text-gray-600">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visibleOrders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-200">
                      <td className="p-4 text-sm">{order.id}</td>
                      <td className="p-4 text-sm">{order.customer}</td>
                      <td className="p-4 text-sm">{order.product}</td>
                      <td className="p-4 text-sm">
                        R$ {order.value.toFixed(2)}
                      </td>
                      <td className="p-4">
                        <button
                          type="button"
                          disabled={order.status === 'completed'}
                          onClick={() => advanceOrder(order.id)}
                          title={order.status === 'completed' ? 'Pedido concluído' : 'Avançar status'}
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs transition ${
                            order.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : order.status === 'processing'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          } ${order.status === 'completed' ? 'cursor-default' : 'hover:ring-2 hover:ring-blue-300'}`}
                        >
                          {order.status === 'completed' ? (
                            <CheckCircle className="size-3" />
                          ) : (
                            <AlertCircle className="size-3" />
                          )}
                          {statusLabels[order.status]}
                        </button>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                  {visibleOrders.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-sm text-gray-500">
                        Nenhum pedido neste status.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Products Inventory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl">Estoque de Produtos</h2>
            </div>
            <div className="p-6 space-y-4">
              {products.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <div className="font-medium text-sm mb-1">
                      {product.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {product.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-medium ${
                        product.stock > 30
                          ? 'text-green-600'
                          : product.stock > 15
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {product.stock} un.
                    </div>
                    <div className="text-xs text-gray-500">
                      R$ {product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Ver Todos os Produtos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <Cart />
    </div>
  );
};
