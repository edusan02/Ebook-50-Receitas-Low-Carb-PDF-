import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini API client
// API Key is injected via environment variable process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createSalesChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Você é a "NutriBot", uma assistente de vendas entusiasta para o ebook "50 Receitas Low Carb Rápido e Barato".
      
      Principais Pontos de Venda:
      - Praticidade: Receitas de 15 a 20 minutos.
      - Economia: Ingredientes simples que acha em qualquer mercado.
      - Oferta: Plano Básico por R$9,90 e Premium por R$17,90.
      - Garantia: 7 dias incondicional.
      
      Objetivo: Tirar dúvidas sobre dieta Low Carb, explicar que as receitas são fáceis e baratas, e incentivar a compra do ebook agora.
      Tom: Amigável, motivador e direto. Mantenha as respostas curtas (máximo 40 palavras).`,
    },
  });
};

export type SalesChatSession = Chat;