import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

// The data array is no longer used for rendering as all slots are now images, 
// but kept for type consistency if needed in future.
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria F.",
    role: "Dona de Casa",
    company: "Comprou o Premium",
    content: "O Guia de Compras é vida! Economizei tempo e dinheiro na primeira ida ao mercado. As receitas são realmente rápidas. Nota 10!",
    avatar: "https://picsum.photos/seed/maria/100/100"
  },
  {
    id: 2,
    name: "João C.",
    role: "Advogado",
    company: "Comprou o Premium",
    content: "Estava desmotivado. Fiz o prato Low Carb de 15 minutos e não parece dieta. O melhor investimento de R$17,90 que já fiz.",
    avatar: "https://picsum.photos/seed/joao/100/100"
  },
  {
    id: 3,
    name: "Ana L.",
    role: "Professora",
    company: "Comprou o Básico",
    content: "Comprei o Básico e fiz o upgrade para o Premium no mesmo dia. A Tabela de Substituições vale ouro. Meu marido até está comendo Low Carb agora!",
    avatar: "https://picsum.photos/seed/ana/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-10 bg-white border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900">A Comunidade Low Carb que Mais Cresce</h2>
            <div className="flex justify-center items-center gap-2 mt-4">
                 <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                 </div>
                 <span className="text-stone-600 font-medium">4.8/5 de 3.125 avaliações</span>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Slot 1: Imagem Personalizada 1 */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-orange-100 hover:shadow-md transition-shadow h-full min-h-[200px]">
             <img 
                src="https://i.ibb.co/r2QndPrS/4967772329945533293.jpg" 
                alt="Depoimento Real em Foto 1" 
                className="w-full h-full object-cover"
             />
          </div>

          {/* Slot 2: Imagem Personalizada 2 */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-orange-100 hover:shadow-md transition-shadow h-full min-h-[200px]">
             <img 
                src="https://i.ibb.co/4nV3PD2K/4967772329945533298.jpg" 
                alt="Depoimento Real em Foto 2" 
                className="w-full h-full object-cover"
             />
          </div>

          {/* Slot 3: Imagem Personalizada 3 (Substituindo Card Ana L.) */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-orange-100 hover:shadow-md transition-shadow h-full min-h-[200px]">
             <img 
                src="https://i.ibb.co/S4NwDk8N/4967772329945533299.jpg" 
                alt="Depoimento Real em Foto 3" 
                className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;