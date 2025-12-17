import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-16 px-6 md:px-12 max-w-4xl mx-auto ${className}`}>
      {children}
    </section>
  );
};