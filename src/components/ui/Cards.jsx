import React from 'react';
import { AlertTriangle, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Warning box with refined styling
export const WarningBox = ({ children, type = 'warning' }) => {
  const styles = {
    warning: {
      container: 'alert-warning',
      icon: 'text-[#C9A044]',
    },
    danger: {
      container: 'alert-danger',
      icon: 'text-[#B85C5C]',
    },
  };

  return (
    <div className={`${styles[type].container} p-4 md:p-5 mb-5 md:mb-6`}>
      <div className="flex gap-3 md:gap-4">
        <AlertTriangle className={`w-5 h-5 md:w-6 md:h-6 ${styles[type].icon} flex-shrink-0 mt-0.5`} />
        <div className="text-[#2D3436] leading-relaxed text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
};

// Feature card for the intro section
export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <div
    className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/60 border border-[#E8E4DE]/50 hover:bg-white hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#5B7B6A]/20">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
    </div>
    <div className="min-w-0">
      <h4 className="font-display font-semibold text-[#2D3436] mb-1 text-sm md:text-base">{title}</h4>
      <p className="text-[#4A5568] text-xs md:text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// Step indicator for instructions
export const StepIndicator = ({ number, title, description, isLast = false }) => (
  <div className="flex gap-3 md:gap-5">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#C9A962] to-[#9A7B3C] text-white flex items-center justify-center font-display font-bold text-base md:text-lg shadow-lg shadow-[#C9A962]/30">
        {number}
      </div>
      {!isLast && <div className="w-0.5 h-full min-h-[32px] md:min-h-[40px] bg-gradient-to-b from-[#C9A962] to-transparent mt-2" />}
    </div>
    <div className="pb-4 md:pb-6 min-w-0">
      <p className="font-display font-semibold text-[#2D3436] text-base md:text-lg">{title}</p>
      <p className="text-[#4A5568] mt-1 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  </div>
);

// Safety card component
export const SafetyCard = ({ title, description, type = 'danger' }) => {
  const styles = {
    danger: 'bg-gradient-to-br from-[#F5E8E8] to-[#FDF5F5] border-l-4 border-[#B85C5C]',
    warning: 'bg-gradient-to-br from-[#FDF6E3] to-[#FEF9EE] border-l-4 border-[#C9A044]',
    success: 'bg-gradient-to-br from-[#EDF5F0] to-[#F5FAF7] border-l-4 border-[#5B7B6A]',
  };

  const textStyles = {
    danger: { title: 'text-[#8B4444]', desc: 'text-[#6B3A3A]' },
    warning: { title: 'text-[#8B6B22]', desc: 'text-[#6B5522]' },
    success: { title: 'text-[#3D5A4A]', desc: 'text-[#4A6B5A]' },
  };

  return (
    <div className={`${styles[type]} rounded-r-xl p-4 md:p-5 transition-all duration-300 hover:shadow-md`}>
      <h4 className={`font-display font-bold ${textStyles[type].title} text-base md:text-lg mb-1 md:mb-2`}>{title}</h4>
      <p className={`${textStyles[type].desc} text-xs md:text-sm leading-relaxed`}>{description}</p>
    </div>
  );
};

// Resource link component
export const ResourceLink = ({ href, title, description }) => (
  <li className="group">
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block p-3 md:p-4 rounded-xl bg-white border border-[#E8E4DE] hover:border-[#5B7B6A]/30 hover:shadow-lg hover:shadow-[#5B7B6A]/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-display font-semibold text-[#5B7B6A] group-hover:text-[#3D5A4A] transition-colors text-sm md:text-base">{title}</span>
        <ExternalLink className="w-4 h-4 text-[#5B7B6A] opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-xs md:text-sm text-[#4A5568] mt-1">{description}</p>
    </a>
  </li>
);

// Emergency contact card
export const EmergencyCard = ({ title, phone, description, isPrimary = false }) => (
  <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl ${
    isPrimary
      ? 'bg-gradient-to-br from-[#B85C5C] to-[#8B4444] text-white shadow-lg shadow-[#B85C5C]/30'
      : 'bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white shadow-lg shadow-[#5B7B6A]/30'
  }`}>
    <h4 className="font-display font-bold text-lg md:text-xl mb-2">{title}</h4>
    <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-2xl md:text-4xl font-bold flex items-center gap-2 md:gap-3 mb-2 md:mb-3 hover:opacity-90 transition-opacity text-white drop-shadow-lg">
      <Phone className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0" />
      <span className="tracking-wide">{phone}</span>
    </a>
    <p className={`text-xs md:text-sm ${isPrimary ? 'text-white/80' : 'text-white/80'}`}>{description}</p>
  </div>
);

// Seminar card for linking to seminar pages
export const SeminarCard = ({ title, description, href, number, isComingSoon = false }) => {
  const cardContent = (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-xl md:text-2xl ${
        isComingSoon
          ? 'bg-[#E8E4DE] text-[#9A9A9A]'
          : 'bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white shadow-lg shadow-[#5B7B6A]/20'
      }`}>
        {number}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className={`font-display font-semibold text-lg md:text-xl mb-2 ${isComingSoon ? 'text-[#9A9A9A]' : 'text-[#2D3436]'}`}>
          {title}
        </h3>
        <p className={`text-sm md:text-base leading-relaxed ${isComingSoon ? 'text-[#ABABAB]' : 'text-[#4A5568]'}`}>
          {description}
        </p>
        {isComingSoon && (
          <span className="inline-block mt-3 px-3 py-1 bg-[#E8E4DE] text-[#7A7A7A] text-xs font-medium rounded-full">
            Pripravujeme...
          </span>
        )}
      </div>
    </div>
  );

  const className = `block p-5 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-300 ${
    isComingSoon
      ? 'bg-[#FAF8F5] border-[#E8E4DE] cursor-default'
      : 'bg-white border-[#E8E4DE] hover:border-[#5B7B6A]/30 hover:shadow-lg hover:shadow-[#5B7B6A]/10'
  }`;

  if (isComingSoon) {
    return <div className={className}>{cardContent}</div>;
  }

  return (
    <Link to={href} className={className}>
      {cardContent}
    </Link>
  );
};
