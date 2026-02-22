import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de produtos tecnológicos de alta qualidade com
            preços competitivos e entrega garantida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden aspect-square bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl text-blue-600">
                      R$ {product.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {product.stock} unidades
                    </div>
                  </div>
                  <Button
                    onClick={() => addToCart(product)}
                    size="sm"
                    className="gap-2"
                  >
                    <ShoppingCart className="size-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
