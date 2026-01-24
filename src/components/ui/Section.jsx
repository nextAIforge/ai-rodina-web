import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Section = ({ title, icon: Icon, children, defaultOpen = false, accentColor = 'sage' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [shouldRender, setShouldRender] = useState(defaultOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  const accentColors = {
    sage: 'bg-[#5B7B6A]/10 text-[#5B7B6A]',
    gold: 'bg-[#C9A962]/15 text-[#9A7B3C]',
    terracotta: 'bg-[#C4785A]/10 text-[#C4785A]',
  };

  return (
    <div className="mb-4 md:mb-5 card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between hover:bg-[#FAF8F5] transition-all duration-300 group"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${accentColors[accentColor]}`}>
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className="font-display text-base md:text-lg font-semibold text-[#2D3436]">{title}</span>
        </div>
        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-[#F5F1EB] transition-all duration-300 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 text-[#4A5568]" />
        </div>
      </button>
      <div
        className={`transition-all duration-400 ease-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        onTransitionEnd={handleTransitionEnd}
      >
        {shouldRender && (
          <div className="px-4 pb-5 pt-2 md:px-6 md:pb-6 animate-fade-in">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
