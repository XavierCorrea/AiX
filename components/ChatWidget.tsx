
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hi! I'm your AIX assistant. How can I help you automate your business or build your next-gen website today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are the AI assistant for AIX, an AI automation and web development agency. 
          AIX offers: 
          1. AI Receptionists (24/7 calls/bookings for service businesses).
          2. AI-Powered Websites (Building high-converting, AI-native sites).
          3. AI Lead Qualifiers (screening leads).
          4. AI Social & DM automation (Instagram, Facebook, Web Chat).
          
          Target Audience: Business owners and service operators looking for operational efficiency.
          Tone: Premium, helpful, optimistic, and human-centered.
          Goal: Answer questions concisely. If a user is interested in a demo or website building, try to collect their name and email address so a human can follow up. 
          Avoid technical jargon. Always position AI as a supportive teammate.`,
          temperature: 0.7,
        },
      });

      const aiResponse = response.text || "I'm sorry, I'm having trouble connecting right now. Could you try again?";
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I apologize, I encountered an error. Please try again or book a demo directly through our site." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Bubble Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fade-in origin-bottom-right">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white">
            <h3 className="font-bold text-lg">AIX Assistant</h3>
            <p className="text-xs text-slate-400">Online | AI & Service Automation Experts</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AI automation or web design..."
              className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-slate-200 outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
