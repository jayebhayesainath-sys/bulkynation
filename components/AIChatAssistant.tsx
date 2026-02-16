
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: `Hi! I'm your Bulk Nation AI Advisor. Whether you're a beginner or a pro, I can help you pick the right supplements. What's your fitness goal today?` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the Bulk Nation AI Assistant. You help customers at Karan's store in Adilabad find the best supplements. 
          Bulk Nation sells: Whey Protein, Mass Gainer, Creatine, Pre-Workout, BCAA, Multivitamins, and Fat Burners from brands like MuscleBlaze (MB), Optimum Nutrition (ON), and GNC.
          Store Details: Location Shantinagar, Owner Karan.
          Tone: Energetic, fitness-focused, helpful, and professional. 
          Recommendation Rules:
          - For weight gain: Mass Gainer + Creatine.
          - For lean muscle: Whey Protein.
          - For energy/focus: Pre-Workout.
          - For recovery: BCAA.
          Always mention that products are 100% original and available for Cash on Delivery in Adilabad.`,
        },
      });

      const botText = response.text || "I'm sorry, I'm having trouble connecting to the muscle-cloud right now. Try again!";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Gym's closed for a minute! (API Error). Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-28 right-8 z-[80] w-16 h-16 bg-neonBlue text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all hover:scale-110 active:scale-95 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <Sparkles className="w-8 h-8" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-[100] w-[90vw] sm:w-[400px] h-[550px] bg-darkBg border border-white/10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-neonBlue to-neonPink p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-neonBlue" />
            </div>
            <div>
              <h4 className="text-black font-black uppercase text-sm leading-tight tracking-wider">Supplement Guru</h4>
              <p className="text-black/70 text-[10px] font-bold uppercase tracking-widest">AI Powered Assistant</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-cardBg/30">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-neonBlue text-black rounded-tr-none' 
                  : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start italic text-gray-500 text-xs animate-pulse">
              Guru is thinking...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-darkBg border-t border-white/5 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about protein, gainers..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neonBlue transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="w-12 h-12 bg-neonBlue text-black rounded-xl flex items-center justify-center hover:bg-neonPink transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default AIChatAssistant;
