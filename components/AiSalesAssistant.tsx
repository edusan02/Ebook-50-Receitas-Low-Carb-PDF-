import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { createSalesChat, SalesChatSession } from '../services/gemini';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";

const AiSalesAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Olá! 👋 Sou a NutriBot. Quer saber como emagrecer comendo coisas gostosas e baratas? Posso te ajudar!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<SalesChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        chatSessionRef.current = createSalesChat();
      } catch (e) {
        console.error("Failed to initialize Gemini Chat", e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Streaming response from Gemini
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
         const c = chunk as GenerateContentResponse;
         const text = c.text;
         if (text) {
             fullText += text;
             // Update the last message with accumulated text
             setMessages(prev => {
                 const newMessages = [...prev];
                 newMessages[newMessages.length - 1].text = fullText;
                 return newMessages;
             });
         }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Ops! Tive um probleminha na conexão. Pode tentar novamente?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 ${
          isOpen ? 'bg-stone-700 rotate-90' : 'bg-gradient-to-r from-primary to-secondary animate-bounce-slow'
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white border border-stone-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-orange-50 p-4 border-b border-orange-100 flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
                <h3 className="font-bold text-stone-800 text-sm">NutriBot</h3>
                <p className="text-xs text-stone-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                    Online Agora
                </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-stone-800 rounded-tl-none border border-stone-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2 border border-stone-200 shadow-sm">
                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    </div>
                 </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Tire sua dúvida..."
                className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 text-sm text-stone-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-stone-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiSalesAssistant;