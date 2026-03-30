import React from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Cart: React.FC = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const total = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleCart}
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Cart Sidebar Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#131921] text-white">
          <h2 className="text-xl font-bold">
            Carrinho ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
          </h2>
          <button
            onClick={toggleCart}
            className="p-1 hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#565959] p-8">
              <div className="text-7xl mb-4">
                <svg className="size-24 text-[#D5D9D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-[#111]">Seu carrinho esta vazio</p>
              <p className="text-sm mt-1">Adicione produtos para comecar</p>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 border-b border-[#D5D9D9]"
                >
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-[#F7F7F7] flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-[#0F1111] line-clamp-2 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#007600] font-medium mb-1">Em estoque</p>
                    <p className="text-lg font-bold text-[#0F1111]">
                      R$ {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#D5D9D9] rounded-lg overflow-hidden shadow-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 bg-[#F0F2F2] hover:bg-[#E3E6E6] transition-colors border-r border-[#D5D9D9]"
                        >
                          <Minus className="size-3 text-[#111]" />
                        </button>
                        <span className="px-4 py-1 text-sm font-medium text-[#111] bg-white min-w-[36px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 bg-[#F0F2F2] hover:bg-[#E3E6E6] transition-colors border-l border-[#D5D9D9]"
                        >
                          <Plus className="size-3 text-[#111]" />
                        </button>
                      </div>

                      <span className="text-[#D5D9D9]">|</span>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="size-3.5" />
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#D5D9D9] bg-white p-4 space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-[#0F1111]">
                Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'itens'}):
              </span>
              <span className="text-xl font-bold text-[#0F1111]">
                R$ {total.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] font-bold py-3 px-4 rounded-full text-base transition-colors shadow-sm border border-[#FCD200]">
              Fechar Pedido
            </button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#565959]">
              <ShieldCheck className="size-4 text-[#007600]" />
              Compra 100% segura - Criptografia SSL
            </div>
          </div>
        )}
      </div>
    </>
  );
};
