import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  subtext?: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  onClick, 
  variant = 'primary',
  className = '' 
}) => {
  const baseStyles = "w-full rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center py-4 px-6 shadow-lg";
  
  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:shadow-[0_0_20px_rgba(190,242,100,0.4)]",
    secondary: "bg-brand-gray text-white border border-brand-accent/20 hover:border-brand-accent/50",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="flex items-center gap-2 text-lg uppercase tracking-wide">
        {variant === 'whatsapp' && <MessageCircle className="w-6 h-6" />}
        {text}
      </div>
      {subtext && (
        <span className="text-xs opacity-80 font-normal mt-1 block">
          {subtext}
        </span>
      )}
    </button>
  );
};