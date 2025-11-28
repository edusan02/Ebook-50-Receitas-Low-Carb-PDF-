import React, { useState } from 'react';
import { Check, ShieldCheck, AlertTriangle, ArrowRight, X, Flame } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "PLANO BÁSICO - O GUIA RÁPIDO",
    price: "R$9,90",
    originalPrice: "R$ 97,00",
    savings: "Economize R$ 87,10",
    description: "Para quem quer praticidade imediata.",
    features: [
        "Ebook 50 Receitas Low Carb (PDF)", 
        "Lista de Compras Simples (Checklist)", 
        "Acesso Imediato e Vitalício", 
        "Receitas Testadas"
    ],
    unavailableFeatures: [
        "Bônus 1: Tabela de Substituições",
        "Bônus 2: Guia Completo de Supermercado"
    ],
    cta: "Comprar Agora",
    highlighted: false
  },
  {
    name: "PLANO PREMIUM - A TRANSFORMAÇÃO",
    price: "R$17,90",
    originalPrice: "R$ 197,00",
    savings: "Economize R$ 179,10",
    purchasedCount: "1.762 pessoas já compraram",
    description: "O pacote completo para não falhar.",
    features: [
        "Ebook 50 Receitas Low Carb (PDF)", 
        "Lista de Compras Simples (Checklist)", 
        "Acesso Imediato e Vitalício", 
        "Receitas Testadas",
        "Bônus 1: Tabela de Substituições", 
        "Bônus 2: Guia Completo de Supermercado"
    ],
    highlighted: true,
    cta: "Quero o Plano Completo"
  }
];

const Pricing: React.FC = () => {
  const [showPromoPopup, setShowPromoPopup] = useState(false);

  const handleBasicPlanClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPromoPopup(true);
  };

  return (
    <section id="pricing" className="py-20 bg-orange-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Escolha o Melhor Para Você
          </h2>
          <p className="mt-4 text-xl text-stone-600">
            Oferta válida apenas para hoje. Aproveite o desconto de lançamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {tiers.map((tier, index) => (
            <div 
                key={index}
                className={`relative flex flex-col p-8 rounded-2xl border ${
                    tier.highlighted 
                    ? 'bg-white border-primary shadow-2xl shadow-orange-500/10 transform md:scale-105 z-10' 
                    : 'bg-white/50 border-stone-200 text-stone-600'
                }`}
            >
              {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                      MAIS VENDIDO (-85%)
                  </div>
              )}

              {/* Purchased Count (Social Proof) */}
              {tier.purchasedCount && (
                  <div className="absolute top-6 left-0 w-full flex justify-center">
                      <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 text-xs font-bold animate-pulse">
                          <Flame className="w-3 h-3 fill-current" />
                          {tier.purchasedCount}
                      </div>
                  </div>
              )}
              
              <h3 className={`text-lg font-bold leading-5 mb-4 text-stone-900 justify-center text-center ${tier.purchasedCount ? 'mt-8' : ''}`}>{tier.name}</h3>
              
              {/* Pricing Area */}
              <div className="flex flex-col items-center mb-4 justify-center text-center">
                {tier.originalPrice && (
                    <span className="text-stone-400 text-sm font-medium line-through mb-1">
                        De {tier.originalPrice}
                    </span>
                )}
                <span className="text-4xl font-extrabold text-primary tracking-tight">{tier.price}</span>
                
                {tier.savings && (
                    <span className="mt-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-bold border border-green-200">
                        {tier.savings}
                    </span>
                )}
              </div>

              <p className="text-sm text-stone-500 mb-6 text-center justify-center">{tier.description}</p>

              <ul className="space-y-4 mb-8 flex-1 w-full text-left">
                {/* Included Features */}
                {tier.features.map((feature, fIndex) => (
                    <li key={`inc-${fIndex}`} className="flex items-start w-full text-left">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-stone-700 font-medium">{feature}</span>
                    </li>
                ))}

                {/* Excluded Features (Only for Basic) */}
                {tier.unavailableFeatures?.map((feature, uIndex) => (
                    <li key={`exc-${uIndex}`} className="flex items-start w-full opacity-60 text-left">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-stone-500 font-medium line-through decoration-stone-400">{feature}</span>
                    </li>
                ))}
              </ul>

              <a 
                 href={tier.highlighted ? "https://eduname1224.pay.yampi.com.br/b/5MBJP1T6YEG4" : "https://eduname1224.pay.yampi.com.br/b/SUZ3AVS5XZ4W"} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 onClick={!tier.highlighted ? handleBasicPlanClick : undefined}
                 className={`w-full py-4 px-4 rounded-xl font-bold text-center transition-all transform hover:-translate-y-1 ${
                  tier.highlighted 
                  ? 'bg-primary hover:bg-secondary text-white shadow-lg shadow-orange-200' 
                  : 'bg-stone-800 hover:bg-stone-700 text-white cursor-pointer'
              }`}>
                  {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 text-center">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Experimente Sem Riscos: Garantia Dupla de 7 Dias</h3>
            <p className="text-stone-600 mb-8 text-lg">
                Baixe, use e teste as receitas por 7 dias inteiros. Se você não amar a praticidade e o sabor, devolvemos 100% do seu dinheiro, sem burocracia.
            </p>
        </div>

      </div>

      {/* SUPER DISCOUNT POP-UP */}
      {showPromoPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowPromoPopup(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-fade-in-up border-4 border-primary/20">
            <button 
                onClick={() => setShowPromoPopup(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 animate-pulse">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-stone-900 mb-2">
                    ESPERE! UMA OFERTA ÚNICA
                </h3>
                
                <p className="text-stone-600 mb-6">
                    Não compre o Básico agora. Conseguimos liberar o <strong>PLANO PREMIUM COMPLETO</strong> (com Guia de Mercado + Tabela de Substituição) por um valor especial:
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-stone-500 line-through">De R$ 17,90</p>
                    <p className="text-3xl font-extrabold text-primary">Por R$ 11,90</p>
                    <p className="text-xs text-green-600 font-bold mt-1">✅ É quase o preço do Básico!</p>
                </div>

                <div className="space-y-3">
                    {/* Botão do Desconto (Upsell) */}
                    <a 
                        href="https://eduname1224.pay.yampi.com.br/b/FDBFGSJ363KK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-transform hover:scale-105"
                    >
                        QUERO APROVEITAR O DESCONTO
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>

                    {/* Botão do Básico (Downsell) */}
                    <a 
                        href="https://eduname1224.pay.yampi.com.br/b/SUZ3AVS5XZ4W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 text-stone-400 text-sm hover:text-stone-600 font-medium underline decoration-stone-300 underline-offset-4 transition-colors"
                    >
                        Não, obrigado. Quero apenas o básico por R$ 9,90.
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Pricing;