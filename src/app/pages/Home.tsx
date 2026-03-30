import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { FeaturesSection } from '../components/FeaturesSection';
import { AdminMockup } from '../components/AdminMockup';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ShoppingCart, Clock, Zap, TrendingUp } from 'lucide-react';

/* ---- Countdown Timer Hook ---- */
const useCountdown = (hours: number) => {
  const [timeLeft, setTimeLeft] = useState(hours * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;
  return { h, m, s };
};

/* ---- Deals Section with Countdown ---- */
const DealsSection: React.FC = () => {
  const { addToCart } = useCart();
  const countdown = useCountdown(8);
  const dealProducts = products.slice(0, 3);
  const dealDiscounts = [30, 25, 40];

  return (
    <section className="py-8 bg-white border-t border-[#D5D9D9]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Zap className="size-6 text-[#CC0C39]" />
            <h2 className="text-2xl font-bold text-[#111]">Ofertas Relampago</h2>
          </div>
          <div className="flex items-center gap-2 text-[#565959]">
            <Clock className="size-5" />
            <span className="text-sm">Termina em:</span>
            <div className="flex gap-1">
              {[
                { value: countdown.h, label: 'h' },
                { value: countdown.m, label: 'm' },
                { value: countdown.s, label: 's' },
              ].map((unit, i) => (
                <React.Fragment key={i}>
                  <span className="bg-[#131921] text-white font-bold px-2 py-1 rounded text-sm min-w-[32px] text-center">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  {i < 2 && <span className="text-[#131921] font-bold">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dealProducts.map((product, index) => {
            const discount = dealDiscounts[index];
            const originalPrice = product.price / (1 - discount / 100);
            const claimed = [67, 45, 82][index];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-[#D5D9D9] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#CC0C39] text-white text-center py-1.5 text-sm font-bold">
                  {discount}% OFF - Oferta Relampago
                </div>

                <Link to={`/product/${product.id}`} className="block p-4">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain"
                  />
                </Link>

                <div className="px-4 pb-4">
                  <h3 className="text-sm font-medium text-[#0F1111] line-clamp-2 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl font-bold text-[#CC0C39]">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-[#565959] line-through">
                      R$ {originalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Progress bar for claimed */}
                  <div className="mb-3">
                    <div className="w-full bg-[#F0F0F0] rounded-full h-5 overflow-hidden relative">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF9900] to-[#CC0C39] transition-all duration-500"
                        style={{ width: `${claimed}%` }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
                        {claimed}% vendidos
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full flex items-center justify-center gap-2 bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] font-medium py-2 rounded-full text-sm transition-colors border border-[#FCD200]"
                  >
                    <ShoppingCart className="size-4" />
                    Aproveitar Oferta
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---- Product Recommendation Row ---- */
const RecommendationRow: React.FC<{ title: string; icon: React.ReactNode; startIdx: number }> = ({
  title,
  icon,
  startIdx,
}) => {
  const { addToCart } = useCart();
  const items = [...products.slice(startIdx), ...products.slice(0, startIdx)].slice(0, 4);

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h2 className="text-xl font-bold text-[#111]">{title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-[#D5D9D9] rounded-lg p-3 hover:shadow-md transition-shadow group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-2 group-hover:scale-105 transition-transform duration-200"
                />
                <h3 className="text-sm text-[#0F1111] line-clamp-2 hover:text-[#C7511F]">
                  {product.name}
                </h3>
              </Link>
              <p className="text-lg font-bold text-[#0F1111] mt-1">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-xs text-[#007600] font-medium">Frete GRATIS</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full mt-2 bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] text-xs font-medium py-1.5 rounded-full transition-colors border border-[#FCD200]"
              >
                Adicionar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---- Home Page ---- */
export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />
      <Hero />

      {/* Product category cards overlapping banner */}
      <section className="relative -mt-16 z-10 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Smartphones', color: '#232F3E' },
              { title: 'Computadores', color: '#37475A' },
              { title: 'Audio', color: '#131921' },
              { title: 'Cameras', color: '#232F3E' },
            ].map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer border border-[#D5D9D9]"
              >
                <h3 className="text-lg font-bold text-[#111] mb-2">{cat.title}</h3>
                <div className="bg-[#F7F7F7] h-28 rounded-md flex items-center justify-center">
                  <ImageWithFallback
                    src={products.find(p => p.category === cat.title || (cat.title === 'Audio' && p.category === 'Audio') || (cat.title === 'Cameras' && p.category === 'Cameras'))?.image || products[0].image}
                    alt={cat.title}
                    className="h-24 object-contain"
                  />
                </div>
                <a href="#products" className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline mt-2 inline-block">
                  Ver mais
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DealsSection />
      <ProductGrid />

      <RecommendationRow
        title="Inspirados nas suas buscas"
        icon={<TrendingUp className="size-5 text-[#232F3E]" />}
        startIdx={2}
      />

      <FeaturesSection />
      <AdminMockup />
      <Footer />
      <Cart />
    </div>
  );
};
