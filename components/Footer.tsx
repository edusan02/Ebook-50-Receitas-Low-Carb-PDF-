import React from 'react';
import { UtensilsCrossed, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 pt-16 pb-8">
      {/* FAQ Section embedded in Footer area */}
      <div id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Perguntas Frequentes</h3>
        <div className="space-y-4">
            <div className="bg-stone-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">O Ebook é físico ou digital?</h4>
                <p className="text-stone-400 text-sm">Totalmente digital. Você recebe o acesso por e-mail e pode baixar imediatamente no celular, tablet ou computador.</p>
            </div>
            <div className="bg-stone-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">Por que o preço é tão baixo?</h4>
                <p className="text-stone-400 text-sm">Nosso objetivo é democratizar o acesso à Low Carb. É uma oferta de lançamento por tempo limitado.</p>
            </div>
            <div className="bg-stone-800 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2">As receitas são fáceis mesmo?</h4>
                <p className="text-stone-400 text-sm">Sim! O foco é em receitas 'Rápido e Barato'. Evitamos ingredientes exóticos.</p>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-t border-stone-800 pt-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary p-1 rounded-md">
                    <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Low Carb Prático</span>
            </div>
            <p className="text-stone-400 text-sm mb-4">
                Transformando vidas através de uma alimentação saudável, acessível e deliciosa.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-stone-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="text-stone-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
                <a href="#" className="text-stone-400 hover:text-primary transition-colors"><Mail className="w-5 h-5"/></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#pricing" className="hover:text-white">Comprar Ebook</a></li>
                <li><a href="#features" className="hover:text-white">Benefícios</a></li>
                <li><a href="#testimonials" className="hover:text-white">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Política de Reembolso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-stone-400">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> suporte@lowcarbpratico.com.br</li>
            </ul>
            <p className="text-xs text-stone-500 mt-4">
                Aviso Legal: Este produto não substitui a consulta a um nutricionista ou médico.
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm">© 2024 Low Carb Prático. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;