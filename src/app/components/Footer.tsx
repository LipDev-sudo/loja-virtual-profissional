import React from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475A] hover:bg-[#485769] text-white text-sm py-3 transition-colors"
      >
        Voltar ao topo
      </button>

      {/* Main footer content */}
      <div className="bg-[#232F3E] text-[#DDD]">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - Conhca-nos */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">Conheca-nos</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Sobre a TechStore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Sustentabilidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Imprensa
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 - Ganhe dinheiro */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">Ganhe Dinheiro</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Venda seus produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Programa de afiliados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Anuncie seus produtos
                  </a>
                </li>
                <li>
                  <Link to="/admin" className="hover:text-white hover:underline transition-colors">
                    Painel Admin
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Categorias */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">Categorias</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Smartphones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Computadores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Audio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Cameras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    Wearables
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contato */}
            <div id="about">
              <h3 className="text-white font-bold text-base mb-4">Fale Conosco</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="size-4 mt-0.5 flex-shrink-0 text-[#FF9900]" />
                  <span>contato@techstore.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="size-4 mt-0.5 flex-shrink-0 text-[#FF9900]" />
                  <span>(11) 98765-4321</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 flex-shrink-0 text-[#FF9900]" />
                  <span>Sao Paulo, SP - Brasil</span>
                </li>
              </ul>

              {/* Payment methods */}
              <div className="mt-4">
                <h4 className="text-white text-sm font-bold mb-2">Formas de Pagamento</h4>
                <div className="flex flex-wrap gap-2">
                  {['PIX', 'Visa', 'Master', 'Elo', 'Boleto'].map((method) => (
                    <span
                      key={method}
                      className="bg-[#37475A] text-xs px-2 py-1 rounded text-[#DDD]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#131921] text-[#999] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">
                Tech<span className="text-[#FF9900]">Store</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors">Condicoes de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Politica de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Ajuda</a>
            </div>
            <p className="text-xs">
              &copy; 2026 TechStore. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
