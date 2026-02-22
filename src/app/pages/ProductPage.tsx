import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, CreditCard } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Produto não encontrado</h1>
          <Link to="/">
            <Button>Voltar para Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8">
          <ArrowLeft className="size-4" />
          Voltar para produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-square">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-blue-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} - ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
              {product.category}
            </div>

            <h1 className="text-4xl mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">(128 avaliações)</span>
            </div>

            <div className="text-4xl text-blue-600 mb-6">
              R$ {product.price.toFixed(2)}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Truck className="size-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Entrega Rápida</div>
                  <div className="text-sm text-gray-500">
                    Receba em até 3 dias úteis
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="size-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Garantia de 12 meses</div>
                  <div className="text-sm text-gray-500">
                    Cobertura total do fabricante
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <CreditCard className="size-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Pagamento Facilitado</div>
                  <div className="text-sm text-gray-500">
                    PIX, Cartão ou Parcelamento
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="size-5" />
                Adicionar ao Carrinho
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Estoque disponível:</span>
                <span className="font-semibold text-green-600">
                  {product.stock} unidades
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="border-t pt-8">
            <h2 className="text-2xl mb-6">Especificações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Categoria:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Garantia:</span>
                <span className="font-medium">12 meses</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Condição:</span>
                <span className="font-medium">Novo</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Disponibilidade:</span>
                <span className="font-medium text-green-600">Em estoque</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
      <Cart />
    </div>
  );
};
