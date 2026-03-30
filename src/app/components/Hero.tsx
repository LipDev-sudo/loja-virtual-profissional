import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    title: 'Mega Ofertas de Tecnologia',
    subtitle: 'Ate 60% de desconto em smartphones, notebooks e acessorios',
    cta: 'Ver Ofertas',
    gradient: 'from-[#232F3E] via-[#37475A] to-[#131921]',
    accent: 'text-[#FFD814]',
  },
  {
    title: 'Frete GRATIS para todo Brasil',
    subtitle: 'Em milhares de produtos selecionados. Aproveite!',
    cta: 'Comprar Agora',
    gradient: 'from-[#131921] via-[#1A2530] to-[#232F3E]',
    accent: 'text-[#FF9900]',
  },
  {
    title: 'Lancamentos Exclusivos',
    subtitle: 'Os melhores produtos de tecnologia acabaram de chegar',
    cta: 'Explorar',
    gradient: 'from-[#37475A] via-[#232F3E] to-[#131921]',
    accent: 'text-[#FFD814]',
  },
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index < 0 ? banners.length - 1 : index % banners.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-gradient-to-r ${banners[current].gradient} py-16 md:py-24`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 ${banners[current].accent}`}
              >
                {banners[current].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 mb-8"
              >
                {banners[current].subtitle}
              </motion.p>
              <motion.a
                href="#products"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block bg-[#FFD814] hover:bg-[#F7CA00] text-[#111] font-bold px-8 py-3 rounded-full text-lg transition-colors shadow-lg"
              >
                {banners[current].cta}
              </motion.a>
            </div>
          </div>

          {/* Gradient fade at bottom for cards overlap effect */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EAEDED] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-md backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="size-8" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-md backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="size-8" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-[#FFD814] scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
