import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ShoppingCart, Star, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const StarRating: React.FC<{ rating: number; reviews: number }> = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`size-4 ${
              star <= rating
                ? 'fill-[#FFA41C] text-[#FFA41C]'
                : star - 0.5 <= rating
                ? 'fill-[#FFA41C]/50 text-[#FFA41C]'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-[#007185] hover:text-[#C7511F] cursor-pointer">
        {reviews.toLocaleString()}
      </span>
    </div>
  );
};

export const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();

  // Mock data for ratings, bestseller, etc.
  const productExtras = [
    { rating: 4.5, reviews: 2847, bestseller: true, discount: 15 },
    { rating: 4, reviews: 1523, bestseller: false, discount: 0 },
    { rating: 4.5, reviews: 3891, bestseller: true, discount: 20 },
    { rating: 5, reviews: 5234, bestseller: true, discount: 10 },
    { rating: 4, reviews: 987, bestseller: false, discount: 25 },
    { rating: 4.5, reviews: 756, bestseller: false, discount: 0 },
  ];

  return (
    <section className="py-8 bg-[#EAEDED]" id="products">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">Mais Vendidos</h2>
          <p className="text-[#565959] mt-1">
            Os produtos mais populares, atualizados a cada hora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => {
            const extras = productExtras[index] || { rating: 4, reviews: 100, bestseller: false, discount: 0 };
            const originalPrice = extras.discount > 0
              ? product.price / (1 - extras.discount / 100)
              : null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-lg border border-[#D5D9D9] overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Bestseller badge */}
                {extras.bestseller && (
                  <div className="bg-[#E47911] text-white text-xs font-bold px-3 py-1">
                    <span className="flex items-center gap-1">
                      #1 Mais vendido
                    </span>
                  </div>
                )}

                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden bg-white p-4">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {extras.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-[#CC0C39] text-white text-xs font-bold px-2 py-1 rounded-sm">
                        -{extras.discount}%
                      </div>
                    )}
                  </div>
                </Link>

                <div className="px-4 pb-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-base font-medium text-[#0F1111] hover:text-[#C7511F] transition-colors line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-sm text-[#565959] line-clamp-2 mb-2">
                    {product.description}
                  </p>

                  {/* Star Rating */}
                  <StarRating rating={extras.rating} reviews={extras.reviews} />

                  {/* Price */}
                  <div className="mt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#565959]">R$</span>
                      <span className="text-2xl font-bold text-[#0F1111]">
                        {product.price.toFixed(2)}
                      </span>
                    </div>
                    {originalPrice && (
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-sm text-[#565959] line-through">
                          R$ {originalPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-[#CC0C39] font-medium">
                          ({extras.discount}% off)
                        </span>
                      </div>
                    )}
                    <div className="text-xs text-[#565959] mt-0.5">
                      em ate 12x de R$ {(product.price / 12).toFixed(2)}
                    </div>
                  </div>

                  {/* Free Shipping Badge */}
                  <div className="flex items-center gap-1 mt-2">
                    <Truck className="size-4 text-[#007600]" />
                    <span className="text-sm font-bold text-[#007600]">
                      Frete GRATIS
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-3 flex items-center justify-center gap-2 bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] font-medium py-2 px-4 rounded-full text-sm transition-colors shadow-sm border border-[#FCD200]"
                  >
                    <ShoppingCart className="size-4" />
                    Adicionar ao Carrinho
                  </button>

                  {/* Stock info */}
                  <div className="text-xs text-[#565959] mt-2 text-center">
                    {product.stock > 20 ? (
                      <span className="text-[#007600]">Em estoque</span>
                    ) : (
                      <span className="text-[#CC0C39]">
                        Restam apenas {product.stock} unidades!
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
