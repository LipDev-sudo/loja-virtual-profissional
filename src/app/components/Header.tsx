import React from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

export const Header: React.FC = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Store className="size-6 text-blue-600" />
          <span className="text-xl font-semibold">TechStore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-blue-600 transition-colors">
            Produtos
          </Link>
          <Link to="/admin" className="text-sm hover:text-blue-600 transition-colors">
            Painel Admin
          </Link>
          <a href="#about" className="text-sm hover:text-blue-600 transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-sm hover:text-blue-600 transition-colors">
            Contato
          </a>
        </nav>

        <Button
          onClick={toggleCart}
          variant="outline"
          size="icon"
          className="relative"
        >
          <ShoppingCart className="size-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 size-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};
