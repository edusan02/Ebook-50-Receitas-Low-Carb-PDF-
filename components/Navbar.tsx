import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-orange-50/90 backdrop-blur-md border-b border-orange-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-gradient-to-br from-primary to-secondary p-1.5 rounded-lg">
                <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-stone-800">Low Carb Prático</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-stone-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Benefícios</a>
              <a href="#pricing" className="text-stone-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Oferta</a>
              <a href="#testimonials" className="text-stone-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Depoimentos</a>
              <a href="#faq" className="text-stone-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Dúvidas</a>
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-200">
                Comprar Agora
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-primary hover:bg-orange-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-orange-50 border-b border-orange-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-stone-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Benefícios</a>
            <a href="#pricing" className="text-stone-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Oferta</a>
            <a href="#testimonials" className="text-stone-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Depoimentos</a>
            <button className="w-full text-left bg-primary text-white block px-3 py-2 rounded-md text-base font-bold">
              Quero Emagrecer Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;