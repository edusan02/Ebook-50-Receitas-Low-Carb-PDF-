import React from 'react';
import { Clock, Wallet, Repeat, Check } from 'lucide-react';
import { Feature } from '../types';

const painPoints: Feature[] = [
  {
    title: "Frustração com o Cardápio",
    description: "Você sempre cai na mesmice e acaba desistindo da dieta por falta de criatividade e sabor nos pratos.",
    icon: <Repeat className="w-6 h-6 text-red-500" />
  },
  {
    title: "Ingredientes Caros",
    description: "Acha que Low Carb é caro, difícil de fazer e exige ingredientes que você só encontra em lojas especializadas.",
    icon: <Wallet className="w-6 h-6 text-red-500" />
  },
  {
    title: "Falta de Tempo",
    description: "Chega cansado(a) em casa e precisa de opções rápidas para não cair em tentações ou pedir delivery.",
    icon: <Clock className="w-6 h-6 text-red-500" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="pt-16 pb-0 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DORES - Pain Points */}
        <div className="mb-12">
            <div className="text-center mb-8">
                <h2 className="text-base text-red-500 font-bold tracking-wide uppercase">Você se identifica?</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                    As maiores dificuldades da dieta
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((feature, index) => (
                <div 
                    key={index} 
                    className="relative p-6 bg-red-50 rounded-2xl border border-red-100 hover:shadow-lg transition-all"
                >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                    {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                    {feature.description}
                </p>
                </div>
            ))}
            </div>
        </div>

        {/* NOVA SEÇÃO SOLUÇÕES - Benefits List & Photos */}
        <div className="border-t border-stone-100 pt-12">
            <div className="text-center mb-10">
                <h2 className="text-base text-primary font-bold tracking-wide uppercase">A Solução Definitiva</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                    Veja a diferença: Chega de comidas sem graça!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
                {/* Lista de Benefícios com Checkmarks */}
                <div className="space-y-5">
                    <div className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                                <Check className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-stone-900">100% Testadas e Aprovadas</h4>
                            <p className="text-stone-600 text-sm mt-1">Todas as receitas são minuciosamente testadas e prontas para surpreender a sua família e amigos.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                                <Check className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-stone-900">Biblioteca Vitalícia</h4>
                            <p className="text-stone-600 text-sm mt-1">Acesso Vitalício garantido para que você monte a sua própria biblioteca de pratos favoritos.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                                <Check className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-stone-900">Pronto para Imprimir</h4>
                            <p className="text-stone-600 text-sm mt-1">Versão para impressão em alta qualidade, ideal para levar a receita direto para a bancada.</p>
                        </div>
                    </div>
                </div>

                {/* Galeria de Imagens */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Foto de Destaque (Bowl) */}
                    <div className="col-span-2 relative group">
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors rounded-2xl"></div>
                         <img 
                            src="https://i.ibb.co/gx1jZZL/4965637185738574609.jpg" 
                            alt="Bowl de Salada Low Carb" 
                            className="rounded-2xl shadow-xl w-full h-56 object-cover border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]"
                         />
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                            RESULTADO REAL
                         </div>
                    </div>
                    
                    {/* Foto Secundária (Waffles/Breakfast) */}
                    <div className="col-span-1 relative">
                         <img 
                            src="https://i.ibb.co/qYks0pHB/4965637185738574610.jpg" 
                            alt="Café da Manhã Low Carb" 
                            className="rounded-2xl shadow-lg w-full h-32 md:h-40 object-cover border-4 border-white hover:rotate-1 transition-transform"
                         />
                    </div>

                    {/* Foto Terciária (Mesa/Ingredientes) - Adicionada de volta */}
                    <div className="col-span-1 relative">
                         <img 
                            src="https://i.ibb.co/Y45kXyJt/4965637185738574611.jpg" 
                            alt="Variedade de Ingredientes" 
                            className="rounded-2xl shadow-lg w-full h-32 md:h-40 object-cover border-4 border-white hover:-rotate-1 transition-transform"
                         />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;