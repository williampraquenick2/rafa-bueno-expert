import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { EXPERT_DATA } from '../constants';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 px-6 z-50 md:hidden animate-fade-in-up">
      <a
        href={EXPERT_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] text-white font-bold py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle size={24} />
        <span>Marcar Consulta Grátis</span>
      </a>
    </div>
  );
};