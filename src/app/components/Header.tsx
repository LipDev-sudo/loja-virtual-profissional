import React, { useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Search, MapPin, ChevronDown, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categories = [
  'Todos',
  'Smartphones',
  'Computadores',
  'Audio',
  'Wearables',
  'Cameras',
];

const navLinks = [
  'Ofertas do Dia',
  'Mais Vendidos',
  'Eletronicos',
  'Smartphones',
  'Computadores',
  'Audio',
  'Cameras',
];

export const Header: React.FC = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Header Bar */}
      <div className="bg-[#131921] text-white">
        <div className="container mx-auto flex items-center h-[60px] px-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white rounded-sm flex-shrink-0">
            <span className="text-xl font-bold tracking-tight">
              Tech<span className="text-[#FF9900]">Store</span>
            </span>
          </Link>

          {/* Deliver to */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer flex-shrink-0">
            <MapPin className="size-5 text-white mt-3" />
            <div>
              <div className="text-[#CCCCCC] text-xs">Enviar para</div>
              <div className="text-sm font-bold leading-tight">Brasil</div>
            </div>
          </div>

          {/* MEGA Search Bar */}
          <div className="flex-1 flex items-center h-[40px] rounded-md overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="h-[40px] px-3 bg-[#E6E6E6] text-[#555] text-sm flex items-center gap-1 hover:bg-[#D4D4D4] border-r border-[#CDCDCD] rounded-l-md whitespace-nowrap"
              >
                {selectedCategory}
                <ChevronDown className="size-3" />
              </button>
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 bg-white border border-[#D5D9D9] rounded-md shadow-lg z-50 min-w-[160px]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-[#111] hover:bg-[#F0F0F0]"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
              className="flex-1 h-full px-4 text-[#111] text-sm outline-none border-none bg-white min-w-0"
            />
            <button className="h-[40px] w-[46px] bg-[#FEBD69] hover:bg-[#F3A847] flex items-center justify-center rounded-r-md flex-shrink-0">
              <Search className="size-5 text-[#333]" />
            </button>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center gap-1">
            {/* Account */}
            <div className="px-3 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer">
              <div className="text-[#CCCCCC] text-xs whitespace-nowrap">Ola, faca login</div>
              <div className="text-sm font-bold flex items-center gap-0.5 whitespace-nowrap">
                Contas e Listas
                <ChevronDown className="size-3" />
              </div>
            </div>

            {/* Orders */}
            <Link to="/admin" className="px-3 py-1 border border-transparent hover:border-white rounded-sm">
              <div className="text-[#CCCCCC] text-xs">Devol. e</div>
              <div className="text-sm font-bold whitespace-nowrap">Pedidos</div>
            </Link>
          </div>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="flex items-end gap-1 px-3 py-1 border border-transparent hover:border-white rounded-sm relative"
          >
            <div className="relative">
              <ShoppingCart className="size-8" />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#FF9900] font-bold text-sm">
                {totalItems}
              </span>
            </div>
            <span className="text-sm font-bold hidden sm:inline">Carrinho</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-[#232F3E] text-white">
        <div className="container mx-auto flex items-center h-[39px] px-4 gap-1 overflow-x-auto">
          <button className="flex items-center gap-1 px-2 py-1 text-sm font-bold hover:border hover:border-white rounded-sm whitespace-nowrap border border-transparent">
            <Menu className="size-5" />
            Todos
          </button>
          {navLinks.map((link) => (
            <a
              key={link}
              href="#products"
              className="px-2 py-1 text-sm hover:border hover:border-white rounded-sm whitespace-nowrap border border-transparent"
            >
              {link}
            </a>
          ))}
          <Link
            to="/admin"
            className="px-2 py-1 text-sm hover:border hover:border-white rounded-sm whitespace-nowrap border border-transparent flex items-center gap-1"
          >
            <User className="size-4" />
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
};
