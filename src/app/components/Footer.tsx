import React from 'react';
import { Link } from 'react-router';
import { Store, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="size-6 text-blue-500" />
              <span className="text-xl text-white">TechStore</span>
            </div>
            <p className="text-sm mb-4">
              Sua loja de tecnologia com pagamento automático e gestão inteligente de pedidos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="size-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-blue-500 transition-colors">
                  Painel Admin
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Computadores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Áudio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Câmeras
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="about">
            <h3 className="text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <span>contato@techstore.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 TechStore. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">
            Sistema de e-commerce com pagamento automático e gestão inteligente
          </p>
        </div>
      </div>
    </footer>
  );
};
