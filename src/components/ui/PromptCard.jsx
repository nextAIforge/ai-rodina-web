import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const PromptCard = ({ title, prompt, description }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F1EB] rounded-xl md:rounded-2xl p-4 md:p-5 mb-4 border border-[#E8E4DE] transition-all duration-300 hover:shadow-lg hover:shadow-[#5B7B6A]/5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
        <h4 className="font-display font-semibold text-[#2D3436] text-base md:text-lg">{title}</h4>
        <button
          onClick={copyToClipboard}
          className={`flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto flex-shrink-0 ${
            copied
              ? 'bg-[#5B7B6A] text-white'
              : 'bg-white text-[#5B7B6A] border border-[#5B7B6A]/20 hover:bg-[#5B7B6A] hover:text-white hover:border-transparent'
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Zkopirováno!' : 'Kopírovat'}
        </button>
      </div>
      {description && <p className="text-[#4A5568] mb-4 leading-relaxed text-sm md:text-base">{description}</p>}
      <div className="code-block p-3 md:p-5 text-xs md:text-sm whitespace-pre-wrap leading-relaxed overflow-x-auto">
        {prompt}
      </div>
    </div>
  );
};

export default PromptCard;
