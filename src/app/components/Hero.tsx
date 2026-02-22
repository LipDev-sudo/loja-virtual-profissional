import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm mb-6">
              <ShoppingBag className="size-4" />
              <span>Loja Virtual Automatizada</span>
            </div>

            <h1 className="text-4xl md:text-6xl mb-6">
              Venda Online com
              <span className="block text-blue-600">Pagamento Automático</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sistema completo de e-commerce com carrinho inteligente, checkout
              automatizado e painel administrativo. Gerencie pedidos, produtos e
              pagamentos em uma única plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Começar Agora
                <ArrowRight className="size-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demonstração
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-semibold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Disponível</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-semibold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Automático</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-semibold text-blue-600">Seguro</div>
                <div className="text-sm text-gray-600">Pagamentos</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
