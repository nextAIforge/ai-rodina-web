import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Back button for seminar pages
export const BackButton = () => (
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors mb-6"
  >
    <ArrowLeft className="w-4 h-4" />
    <span>Zpět na hlavní stránku</span>
  </Link>
);

// Responsive table card
export const TableCard = ({ headers, rows, title }) => (
  <div className="mb-6 overflow-hidden">
    {title && (
      <h4 className="font-display font-semibold text-[#2D3436] text-base md:text-lg mb-3">{title}</h4>
    )}
    <div className="overflow-x-auto rounded-xl border border-[#E8E4DE]" style={{ WebkitOverflowScrolling: 'touch' }}>
      <table className="w-full text-sm md:text-base">
        <thead>
          <tr className="bg-[#F5F1EB]">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left font-display font-semibold text-[#2D3436] border-b border-[#E8E4DE]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#E8E4DE] last:border-b-0 hover:bg-[#FAF8F5] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-medium text-[#2D3436]' : 'text-[#4A5568]'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Biblical quote component
export const BiblicalQuote = ({ text, reference }) => (
  <blockquote className="my-6 p-5 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A] text-white shadow-lg shadow-[#5B7B6A]/20 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A962] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-5 h-5 text-[#C9A962]" />
        <span className="text-[#C9A962] font-medium text-sm">{reference}</span>
      </div>
      <p className="text-white/90 text-base md:text-lg leading-relaxed italic">
        "{text}"
      </p>
    </div>
  </blockquote>
);

// Age group card for practical rules
export const AgeGroupCard = ({ ageRange, title, rules, allowed, forbidden, color = 'sage' }) => {
  const colors = {
    sage: {
      header: 'bg-gradient-to-r from-[#5B7B6A] to-[#4A6B5A]',
      badge: 'bg-[#5B7B6A]/10 text-[#5B7B6A]',
    },
    gold: {
      header: 'bg-gradient-to-r from-[#C9A962] to-[#9A7B3C]',
      badge: 'bg-[#C9A962]/15 text-[#9A7B3C]',
    },
    terracotta: {
      header: 'bg-gradient-to-r from-[#C4785A] to-[#A65D42]',
      badge: 'bg-[#C4785A]/10 text-[#C4785A]',
    },
  };

  return (
    <div className="mb-6 rounded-xl md:rounded-2xl overflow-hidden border border-[#E8E4DE] bg-white">
      <div className={`${colors[color].header} px-5 py-4 text-white`}>
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl font-display font-bold">{ageRange}</span>
          <div>
            <h3 className="font-display font-semibold text-lg md:text-xl">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-5">
        {rules && (
          <div className="mb-4">
            <h4 className="font-display font-semibold text-[#2D3436] mb-2">Pravidla:</h4>
            <ul className="space-y-2">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-[#4A5568] text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B7B6A] mt-2 flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}
        {allowed && (
          <div className="mb-4">
            <h4 className="font-display font-semibold text-[#3D5A4A] mb-2">Povolené:</h4>
            <ul className="space-y-1.5">
              {allowed.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#4A6B5A] text-sm md:text-base">
                  <span className="text-[#5B7B6A]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {forbidden && (
          <div>
            <h4 className="font-display font-semibold text-[#8B4444] mb-2">Zakázané:</h4>
            <ul className="space-y-1.5">
              {forbidden.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[#6B3A3A] text-sm md:text-base">
                  <span className="text-[#B85C5C]">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Info box for important information
export const InfoBox = ({ children, type = 'info' }) => {
  const styles = {
    info: 'bg-[#EDF5F0] border-[#5B7B6A]/30 text-[#3D5A4A]',
    warning: 'bg-[#FDF6E3] border-[#C9A044]/30 text-[#8B6B22]',
    danger: 'bg-[#F5E8E8] border-[#B85C5C]/30 text-[#8B4444]',
  };

  return (
    <div className={`${styles[type]} border rounded-xl p-4 md:p-5 mb-4 text-sm md:text-base`}>
      {children}
    </div>
  );
};

// Highlight text
export const Highlight = ({ children, color = 'sage' }) => {
  const colors = {
    sage: 'bg-[#5B7B6A]/10 text-[#3D5A4A]',
    gold: 'bg-[#C9A962]/15 text-[#9A7B3C]',
    terracotta: 'bg-[#C4785A]/10 text-[#8B4444]',
  };

  return (
    <span className={`${colors[color]} px-2 py-0.5 rounded font-medium`}>
      {children}
    </span>
  );
};
