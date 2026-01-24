import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, Shield, BookOpen, Heart, Brain, ExternalLink,
  Sparkles, Phone, ChevronDown, Zap, Mail, ArrowRight,
  AlertTriangle, Smartphone
} from 'lucide-react';
import { EmergencyCard } from '../components/ui';

// Dropdown Menu Component
const DropdownMenu = ({ label, icon: Icon, items, isOpen, onToggle, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl whitespace-nowrap transition-all duration-300 font-medium text-sm md:text-base ${
          isOpen
            ? 'bg-[#5B7B6A] text-white'
            : 'text-[#4A5568] hover:bg-[#5B7B6A]/10'
        }`}
      >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 py-2 bg-white rounded-xl shadow-lg border border-[#E8E4DE] min-w-[200px] z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2.5 text-[#4A5568] hover:bg-[#FAF8F5] hover:text-[#2D3436] transition-colors"
            >
              <item.icon className="w-4 h-4 text-[#5B7B6A]" />
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                {item.description && (
                  <p className="text-xs text-[#7A7A7A]">{item.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, link, color = 'sage', delay = 0 }) => {
  const colors = {
    sage: { bg: 'bg-[#5B7B6A]', light: 'bg-[#5B7B6A]/10', text: 'text-[#5B7B6A]' },
    gold: { bg: 'bg-[#C9A962]', light: 'bg-[#C9A962]/15', text: 'text-[#9A7B3C]' },
    terracotta: { bg: 'bg-[#C4785A]', light: 'bg-[#C4785A]/10', text: 'text-[#C4785A]' },
  };

  return (
    <Link
      to={link}
      className="group card p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${colors[color].light} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 md:w-7 md:h-7 ${colors[color].text}`} />
      </div>
      <h3 className="font-display font-bold text-lg md:text-xl text-[#2D3436] mb-2 group-hover:text-[#5B7B6A] transition-colors">
        {title}
      </h3>
      <p className="text-[#4A5568] text-sm md:text-base mb-3">{description}</p>
      <span className={`inline-flex items-center gap-1 text-sm font-medium ${colors[color].text} group-hover:gap-2 transition-all`}>
        Otevřít <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
};

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const seminareItems = [
    { label: 'Seminář 1', description: 'Úvod do AI pro rodiče', icon: MessageCircle, link: '/seminar/1' },
    { label: 'Seminář 2', description: 'AI jako nástroj, ne náhrada', icon: Brain, link: '/seminar/2' },
    { label: 'Budoucnost', description: 'Na co se připravit', icon: Zap, link: '/seminar/priprava' },
  ];

  const nastrojeItems = [
    { label: 'AI Průvodce', description: 'Nastavení vlastního pomocníka', icon: MessageCircle, link: '/#pruvodce' },
    { label: 'Superprompty', description: 'Připravené otázky', icon: Brain, link: '/#prompty' },
    { label: 'Slovník pojmů', description: 'Co znamenají AI termíny', icon: BookOpen, link: '/slovnik' },
  ];

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24 text-center">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Praktický průvodce pro rodiče
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
              AI v křesťanské rodině
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light px-2">
              Průvodce digitální dobou pro rodiče, kteří chtějí vést své děti ke Kristu
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 70 480 20 720 40C960 60 1200 10 1440 40V80H0Z" fill="#FAF8F5"/>
          </svg>
        </div>
      </header>

      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-[#E8E4DE]/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-2 md:px-4">
          <div className="flex items-center justify-center py-2 md:py-3 gap-1 md:gap-2">
            <DropdownMenu
              label="Semináře"
              icon={BookOpen}
              items={seminareItems}
              isOpen={openDropdown === 'seminare'}
              onToggle={() => handleDropdownToggle('seminare')}
              onClose={() => setOpenDropdown(null)}
            />
            <DropdownMenu
              label="Nástroje"
              icon={Brain}
              items={nastrojeItems}
              isOpen={openDropdown === 'nastroje'}
              onToggle={() => handleDropdownToggle('nastroje')}
              onClose={() => setOpenDropdown(null)}
            />
            <button
              onClick={() => scrollToSection('bezpecnost')}
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl whitespace-nowrap transition-all duration-300 font-medium text-sm md:text-base text-[#4A5568] hover:bg-[#5B7B6A]/10"
            >
              <Shield className="w-4 h-4" />
              <span>Bezpečnost</span>
            </button>
            <Link
              to="/kontakt"
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl whitespace-nowrap transition-all duration-300 font-medium text-sm md:text-base text-[#4A5568] hover:bg-[#5B7B6A]/10"
            >
              <Mail className="w-4 h-4" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 md:px-4 py-6 md:py-12">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="card p-5 md:p-10 mb-8">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-4 md:mb-6">
              Vítejte!
            </h2>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-3 md:mb-4">
              AI už mluví s našimi dětmi. Otázka není, jestli to dovolíme – ale jak u toho budeme přítomni jako rodiče.
            </p>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
              Tato stránka je praktickým průvodcem pro rodiče v digitální době. Najděte, co potřebujete:
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={MessageCircle}
              title="Seminář 1"
              description="Úvod do AI pro rodiče – co to je, jak funguje a proč na tom záleží"
              link="/seminar/1"
              color="sage"
              delay={100}
            />
            <FeatureCard
              icon={Brain}
              title="Seminář 2"
              description="AI jako nástroj, ne náhrada – praktický workshop"
              link="/seminar/2"
              color="sage"
              delay={150}
            />
            <FeatureCard
              icon={Zap}
              title="Budoucnost"
              description="Na co se připravit – pohled do následujících 5 let"
              link="/seminar/priprava"
              color="terracotta"
              delay={200}
            />
            <FeatureCard
              icon={BookOpen}
              title="Slovník pojmů"
              description="Co znamená token, LLM, prompt? Vysvětlení pro netechnické rodiče"
              link="/slovnik"
              color="gold"
              delay={250}
            />
            <FeatureCard
              icon={Smartphone}
              title="Superprompty"
              description="Připravené otázky pro těžké rozhovory, školu i víru"
              link="/#prompty"
              color="sage"
              delay={300}
            />
            <FeatureCard
              icon={Mail}
              title="Kontakt"
              description="Napište nám – tipy, otázky, zpětná vazba"
              link="/kontakt"
              color="gold"
              delay={350}
            />
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A] p-5 md:p-10 text-white shadow-xl shadow-[#5B7B6A]/20">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#C9A962] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">Klíčové poselství</h3>
              </div>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                AI není nepřítel víry ani spása pro rodiče. Je to nástroj – jako kladivo.
                Můžeš s ním postavit dům nebo si ublížit. Záleží na tom, kdo ho drží a jak.
              </p>

              <blockquote className="border-l-4 border-[#C9A962] pl-4 md:pl-5 italic text-white/80 text-sm md:text-base">
                „Cokoli děláte, dělejte z celého srdce, jako Pánu, a ne lidem."
                <footer className="mt-2 not-italic font-medium text-[#C9A962]">— Koloským 3:23</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* AI Průvodce Section */}
        <section id="pruvodce" className="mb-12 scroll-mt-20">
          <div className="card p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#5B7B6A]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#5B7B6A]" />
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-[#2D3436]">
                Rodinný AI Průvodce
              </h2>
            </div>

            <p className="text-[#4A5568] mb-6">
              Vytvořili jsme pro vás speciálního AI pomocníka – „Rodinného AI Průvodce".
              Je to jako mít po ruce moudrého křesťanského přítele, který vám pomůže s těžkými rozhovory,
              nastavením hranic, školou i výchovou ve víře.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] mb-6">
              <h4 className="font-semibold text-[#2D3436] mb-3">Jak na to:</h4>
              <ol className="space-y-2 text-sm text-[#4A5568]">
                <li className="flex gap-2">
                  <span className="font-bold text-[#5B7B6A]">1.</span>
                  Jděte na <a href="https://claude.ai" className="text-[#5B7B6A] font-medium hover:underline" target="_blank" rel="noreferrer">claude.ai</a> a přihlaste se (zdarma)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#5B7B6A]">2.</span>
                  Vytvořte nový Projekt (ikona složky vlevo)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#5B7B6A]">3.</span>
                  Vložte instrukce do „Project instructions" (viz Seminář 2)
                </li>
              </ol>
            </div>

            <Link
              to="/seminar/2"
              className="inline-flex items-center gap-2 text-[#5B7B6A] font-medium hover:gap-3 transition-all"
            >
              Kompletní návod v Semináři 2 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Superprompty Section */}
        <section id="prompty" className="mb-12 scroll-mt-20">
          <div className="card p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#C9A962]/15 flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#9A7B3C]" />
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-[#2D3436]">
                Superprompty pro rodiče
              </h2>
            </div>

            <p className="text-[#4A5568] mb-6">
              Připravené otázky pro různé situace – stačí upravit věk a kontext.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { title: 'Těžké rozhovory', desc: 'Smrt, rozvod, šikana...', icon: Heart },
                { title: 'Škola a učení', desc: 'Pomoc bez podvádění', icon: BookOpen },
                { title: 'Digitální hranice', desc: 'Pravidla pro telefon', icon: Smartphone },
                { title: 'Víra v rodině', desc: 'Modlitba, Bible, otázky', icon: Sparkles },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E4DE]">
                  <item.icon className="w-5 h-5 text-[#5B7B6A] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D3436] text-sm">{item.title}</p>
                    <p className="text-xs text-[#7A7A7A]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/seminar/2"
              className="inline-flex items-center gap-2 text-[#5B7B6A] font-medium hover:gap-3 transition-all"
            >
              Všechny superprompty v Semináři 2 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Bezpečnost Section */}
        <section id="bezpecnost" className="mb-12 scroll-mt-20">
          <div className="card p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#C4785A]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#C4785A]" />
              </div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-[#2D3436]">
                Co je bezpečné a co ne
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#B85C5C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#8B4444] mb-1">AI „přátelé" jsou pro děti nebezpečné</p>
                  <p className="text-sm text-[#6B3A3A]">
                    Character.AI, Replika, Nomi – tyto aplikace vytváří emocionální závislost na něčem, co není skutečné.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm mb-1">Nebezpečné</p>
                <p className="text-xs text-[#6B3A3A]">Character.AI, Replika, Snapchat AI</p>
              </div>
              <div className="p-3 rounded-lg bg-[#FDF6E3] border border-[#C9A044]/20">
                <p className="font-semibold text-[#8B6B22] text-sm mb-1">S dohledem</p>
                <p className="text-xs text-[#6B5522]">ChatGPT, Claude, Gemini</p>
              </div>
              <div className="p-3 rounded-lg bg-[#EDF5F0] border border-[#5B7B6A]/20">
                <p className="font-semibold text-[#3D5A4A] text-sm mb-1">Bezpečnější</p>
                <p className="text-xs text-[#4A6B5A]">Khanmigo, Duolingo</p>
              </div>
            </div>

            <Link
              to="/seminar/1"
              className="inline-flex items-center gap-2 text-[#5B7B6A] font-medium hover:gap-3 transition-all"
            >
              Více o bezpečnosti v Semináři 1 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Krizové linky */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-lg text-[#2D3436] mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#C4785A]" />
            Krizové linky
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <EmergencyCard
              title="Linka bezpečí"
              phone="116 111"
              description="Pro děti, mladé lidi a rodiče. Nonstop, zdarma."
              isPrimary={true}
            />
            <EmergencyCard
              title="Rodičovská linka"
              phone="606 021 021"
              description="Podpora pro rodiče v těžkých situacích."
            />
          </div>
        </section>

        {/* Zdroje */}
        <section className="mb-8">
          <div className="card p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <ExternalLink className="w-5 h-5 text-[#5B7B6A]" />
              <h3 className="font-display font-semibold text-[#2D3436]">Další zdroje</h3>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Common Sense Media', url: 'https://www.commonsensemedia.org/', desc: 'Průvodce AI pro rodiče (EN)' },
                { name: 'Internet Matters', url: 'https://www.internetmatters.org/', desc: 'Tipy pro bezpečné používání AI (EN)' },
                { name: 'Khanmigo', url: 'https://www.khanmigo.ai/', desc: 'Bezpečný AI tutor pro děti' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAF8F5] transition-colors group"
                >
                  <div>
                    <p className="font-medium text-[#2D3436] text-sm group-hover:text-[#5B7B6A]">{link.name}</p>
                    <p className="text-xs text-[#7A7A7A]">{link.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#7A7A7A] group-hover:text-[#5B7B6A]" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-display font-semibold text-[#2D3436] mb-3">Semináře</h4>
              <ul className="space-y-2">
                <li><Link to="/seminar/1" className="text-[#4A5568] hover:text-[#5B7B6A] text-sm">Seminář 1</Link></li>
                <li><Link to="/seminar/2" className="text-[#4A5568] hover:text-[#5B7B6A] text-sm">Seminář 2</Link></li>
                <li><Link to="/seminar/priprava" className="text-[#4A5568] hover:text-[#5B7B6A] text-sm">Budoucnost</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[#2D3436] mb-3">Nástroje</h4>
              <ul className="space-y-2">
                <li><Link to="/slovnik" className="text-[#4A5568] hover:text-[#5B7B6A] text-sm">Slovník pojmů</Link></li>
                <li><a href="#pruvodce" className="text-[#4A5568] hover:text-[#5B7B6A] text-sm">AI Průvodce</a></li>
                <li><a href="#prompty" className="text-[#4A5568] hover:text-[#5B7B6A] text-sm">Superprompty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[#2D3436] mb-3">Kontakt</h4>
              <p className="text-[#4A5568] text-sm mb-2">
                <a href="mailto:info@aiprorodinu.cz" className="hover:text-[#5B7B6A]">info@aiprorodinu.cz</a>
              </p>
              <Link to="/kontakt" className="text-[#5B7B6A] text-sm font-medium hover:underline">
                Napište nám →
              </Link>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-[#E8E4DE]">
            <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3">
              <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
              <Heart className="w-4 h-4 fill-current" />
              <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
            </div>
            <p className="text-[#4A5568] text-sm">Vytvořeno pro seminář „AI v křesťanské rodině"</p>
            <p className="text-[#7A9B8A] font-medium text-sm">2026 • S láskou pro rodiče</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
