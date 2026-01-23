import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Copy, Check, MessageCircle, Shield, BookOpen, Heart, Smartphone, Brain, ExternalLink, AlertTriangle, Sparkles, ArrowRight, Phone } from 'lucide-react';

// Animated section component with smooth expand/collapse
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
    <div className="mb-5 card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#FAF8F5] transition-all duration-300 group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${accentColors[accentColor]}`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-display text-lg font-semibold text-[#2D3436]">{title}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F5F1EB] transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 text-[#4A5568]" />
        </div>
      </button>
      <div
        className={`transition-all duration-400 ease-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        onTransitionEnd={handleTransitionEnd}
      >
        {shouldRender && (
          <div className="px-6 pb-6 pt-2 animate-fade-in">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

// Elegant prompt card with copy functionality
const PromptCard = ({ title, prompt, description }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bg-gradient-to-br from-[#FAF8F5] to-[#F5F1EB] rounded-2xl p-5 mb-4 border border-[#E8E4DE] transition-all duration-300 hover:shadow-lg hover:shadow-[#5B7B6A]/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-display font-semibold text-[#2D3436] text-lg">{title}</h4>
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
            copied
              ? 'bg-[#5B7B6A] text-white'
              : 'bg-white text-[#5B7B6A] border border-[#5B7B6A]/20 hover:bg-[#5B7B6A] hover:text-white hover:border-transparent'
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Zkopírováno!' : 'Kopírovat'}
        </button>
      </div>
      {description && <p className="text-[#4A5568] mb-4 leading-relaxed">{description}</p>}
      <div className="code-block p-5 text-sm whitespace-pre-wrap leading-relaxed">
        {prompt}
      </div>
    </div>
  );
};

// Warning box with refined styling
const WarningBox = ({ children, type = 'warning' }) => {
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
    <div className={`${styles[type].container} p-5 mb-6`}>
      <div className="flex gap-4">
        <AlertTriangle className={`w-6 h-6 ${styles[type].icon} flex-shrink-0 mt-0.5`} />
        <div className="text-[#2D3436] leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

// Feature card for the intro section
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <div
    className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-[#E8E4DE]/50 hover:bg-white hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#5B7B6A]/20">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-display font-semibold text-[#2D3436] mb-1">{title}</h4>
      <p className="text-[#4A5568] text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// Step indicator for instructions
const StepIndicator = ({ number, title, description, isLast = false }) => (
  <div className="flex gap-5">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A962] to-[#9A7B3C] text-white flex items-center justify-center font-display font-bold text-lg shadow-lg shadow-[#C9A962]/30">
        {number}
      </div>
      {!isLast && <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-[#C9A962] to-transparent mt-2" />}
    </div>
    <div className="pb-6">
      <p className="font-display font-semibold text-[#2D3436] text-lg">{title}</p>
      <p className="text-[#4A5568] mt-1 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Safety card component
const SafetyCard = ({ title, description, type = 'danger' }) => {
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
    <div className={`${styles[type]} rounded-r-xl p-5 transition-all duration-300 hover:shadow-md`}>
      <h4 className={`font-display font-bold ${textStyles[type].title} text-lg mb-2`}>{title}</h4>
      <p className={`${textStyles[type].desc} text-sm leading-relaxed`}>{description}</p>
    </div>
  );
};

// Resource link component
const ResourceLink = ({ href, title, description }) => (
  <li className="group">
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block p-4 rounded-xl bg-white border border-[#E8E4DE] hover:border-[#5B7B6A]/30 hover:shadow-lg hover:shadow-[#5B7B6A]/5 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <span className="font-display font-semibold text-[#5B7B6A] group-hover:text-[#3D5A4A] transition-colors">{title}</span>
        <ExternalLink className="w-4 h-4 text-[#5B7B6A] opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-sm text-[#4A5568] mt-1">{description}</p>
    </a>
  </li>
);

// Emergency contact card
const EmergencyCard = ({ title, phone, description, isPrimary = false }) => (
  <div className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
    isPrimary
      ? 'bg-gradient-to-br from-[#B85C5C] to-[#8B4444] text-white shadow-lg shadow-[#B85C5C]/30'
      : 'bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white shadow-lg shadow-[#5B7B6A]/30'
  }`}>
    <h4 className="font-display font-bold text-xl mb-2">{title}</h4>
    <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-3xl font-bold flex items-center gap-3 mb-3 hover:opacity-90 transition-opacity">
      <Phone className="w-6 h-6" />
      {phone}
    </a>
    <p className={`text-sm ${isPrimary ? 'text-white/80' : 'text-white/80'}`}>{description}</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('uvod');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'uvod', label: 'Úvod', icon: BookOpen },
    { id: 'pruvodce', label: 'AI Průvodce', icon: MessageCircle },
    { id: 'prompty', label: 'Superprompty', icon: Brain },
    { id: 'bezpeci', label: 'Bezpečnost', icon: Shield },
    { id: 'zdroje', label: 'Zdroje', icon: ExternalLink },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Praktický průvodce pro rodiče
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI v křesťanské rodině
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Moudrý průvodce digitální dobou pro rodiče, kteří chtějí vést své děti ke Kristu
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 70 480 20 720 40C960 60 1200 10 1440 40V80H0Z" fill="#FAF8F5"/>
          </svg>
        </div>
      </header>

      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-[#E8E4DE]/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto py-3 gap-2 hide-scrollbar">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 font-medium ${
                  activeTab === tab.id
                    ? 'tab-active'
                    : 'tab-inactive'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-10 md:py-12">

        {/* ÚVOD */}
        {activeTab === 'uvod' && (
          <div className="page-transition">
            {/* Welcome card */}
            <div className="card p-8 md:p-10 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3436] mb-6">
                Vítejte!
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                AI už mluví s našimi dětmi. Otázka není, jestli to dovolíme – ale jak u toho budeme přítomni jako rodiče.
              </p>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-8">
                Tato stránka je praktickým doplňkem k semináři. Najdete zde:
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <FeatureCard
                  icon={MessageCircle}
                  title="Rodinného AI Průvodce"
                  description="Váš pomocník pro těžké situace"
                  delay={100}
                />
                <FeatureCard
                  icon={Brain}
                  title="Superprompty"
                  description="Připravené otázky pro různé situace"
                  delay={200}
                />
                <FeatureCard
                  icon={Shield}
                  title="Bezpečnostní tipy"
                  description="Co je nebezpečné a proč"
                  delay={300}
                />
                <FeatureCard
                  icon={ExternalLink}
                  title="Zdroje"
                  description="Kam dál pro více informací"
                  delay={400}
                />
              </div>
            </div>

            {/* Quote card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A] p-8 md:p-10 text-white shadow-xl shadow-[#5B7B6A]/20">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A962] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Klíčové poselství</h3>
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  AI není nepřítel víry ani spása pro rodiče. Je to nástroj – jako kladivo.
                  Můžeš s ním postavit dům nebo si ublížit. Záleží na tom, kdo ho drží a jak.
                </p>

                <blockquote className="border-l-4 border-[#C9A962] pl-5 italic text-white/80">
                  "Cokoli děláte, dělejte z celého srdce, jako Pánu, a ne lidem."
                  <footer className="mt-2 not-italic font-medium text-[#C9A962]">— Koloským 3:23</footer>
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {/* AI PRŮVODCE */}
        {activeTab === 'pruvodce' && (
          <div className="page-transition">
            <div className="card p-8 md:p-10 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3436] mb-6">
                Rodinný AI Průvodce
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                Vytvořili jsme pro vás speciálního AI pomocníka – "Rodinného AI Průvodce".
                Je to jako mít po ruce moudrého křesťanského přítele, který vám pomůže s:
              </p>
              <ul className="space-y-3 text-[#4A5568] text-lg custom-list mb-6">
                <li>Těžkými rozhovory s dětmi (smrt, rozvod, šikana...)</li>
                <li>Nastavením hranic pro telefony a sociální sítě</li>
                <li>Pomocí s domácími úkoly (učí myslet, ne podvádět)</li>
                <li>Výchovou ve víře přiměřeně věku</li>
                <li>Řešením emočních situací a konfliktů</li>
              </ul>
            </div>

            <Section title="Jak si Průvodce nastavit" icon={Smartphone} defaultOpen={true} accentColor="gold">
              <div className="space-y-2">
                <StepIndicator
                  number={1}
                  title="Otevřete claude.ai"
                  description={<>Jděte na <a href="https://claude.ai" className="text-[#5B7B6A] font-medium hover:underline" target="_blank" rel="noreferrer">claude.ai</a> a přihlaste se (je zdarma)</>}
                />
                <StepIndicator
                  number={2}
                  title="Vytvořte nový Projekt"
                  description="Klikněte na ikonu složky vlevo → 'Create Project'"
                />
                <StepIndicator
                  number={3}
                  title="Přidejte instrukce"
                  description="Klikněte na 'Set project instructions' a vložte text níže"
                />
                <StepIndicator
                  number={4}
                  title="Hotovo!"
                  description="Pojmenujte projekt 'Rodinný Průvodce' a začněte konverzaci"
                  isLast={true}
                />
              </div>
            </Section>

            <Section title="Instrukce ke zkopírování" icon={Copy} accentColor="sage">
              <p className="text-[#4A5568] mb-4">
                Zkopírujte celý text níže a vložte ho do "Project instructions" v Claude.ai:
              </p>
              <PromptCard
                title="System Prompt pro Rodinného AI Průvodce"
                prompt={`Jsi "Rodinný AI Průvodce" – moudrý, laskavý a praktický pomocník pro křesťanské rodiče. Pomáháš rodinám vychovávat děti v digitální době s moudrostí, vírou a zdravým rozumem.

## Tvá osobnost
- Jsi jako zkušený křesťanský přítel, který má děti a rozumí realitě moderního rodičovství
- Mluvíš česky, přirozeně a bez zbytečného formálního jazyka
- Nejsi "AI kazatel" – nekážeš, ale prakticky pomáháš
- Uznáváš, že AI je nástroj – ani spása, ani hrozba
- Jsi trpělivý i s úplnými začátečníky v technologiích

## Tvé oblasti pomoci
1. **Těžké rozhovory** – smrt, rozvod, šikana, sexualita, víra
2. **Digitální hranice** – pravidla pro telefony, sítě, AI podle věku
3. **Učení a škola** – vysvětlování látky, motivace (nikdy hotové odpovědi!)
4. **Víra v rodině** – modlitba s dětmi, biblické příběhy, otázky o Bohu
5. **Emoce a konflikty** – sourozenecké hádky, vztek, smutek, puberta
6. **AI gramotnost** – jak naučit děti používat AI bezpečně

## Důležité zásady
- NIKDY nedoporučuješ AI companiony (Character.AI, Replika) pro děti
- Při vážných situacích doporučuješ odbornou pomoc (Linka bezpečí: 116 111)
- Vždy se ptáš na věk dítěte a kontext
- Dáváš konkrétní příklady a "copy-paste" věty
- Posiluješ rodičovskou autoritu, nenahrazuješ ji
- Nabízíš biblickou perspektivu, ale nekážeš`}
              />
            </Section>
          </div>
        )}

        {/* SUPERPROMPTY */}
        {activeTab === 'prompty' && (
          <div className="page-transition">
            <div className="card p-8 md:p-10 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
                Superprompty pro rodiče
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed">
                Připravené otázky, které můžete použít s jakýmkoli AI (Claude, ChatGPT, Gemini...).
                Stačí upravit věk a situaci.
              </p>
            </div>

            <Section title="Těžké rozhovory" icon={Heart} defaultOpen={true} accentColor="terracotta">
              <PromptCard
                title="Jak vysvětlit smrt dítěti"
                description="Když dítě zažije ztrátu"
                prompt={`Jsem křesťanský rodič. Mé dítě (VĚK let) se ptá na smrt, protože [SITUACE - např. zemřela babička / vidělo mrtvé zvíře / ptá se obecně].

Pomoz mi:
1. Najít slova přiměřená jeho věku
2. Zahrnout křesťanskou naději (ale ne klišé)
3. Připravit se na následné otázky

Co přesně mohu říct?`}
              />
              <PromptCard
                title="Rozhovor o šikaně"
                description="Když se dítě svěří nebo máte podezření"
                prompt={`Mé dítě (VĚK let) [se svěřilo, že je šikanováno / mám podezření na šikanu].

Situace: [POPIS]

Pomoz mi:
1. Co říct jako první reakci (aby se nezavřelo)
2. Jak zjistit více bez výslechu
3. Jaké konkrétní kroky podniknout
4. Jak ho/ji podpořit z křesťanské perspektivy`}
              />
              <PromptCard
                title="Otázky o víře"
                description="Když se dítě ptá na Boha"
                prompt={`Mé dítě (VĚK let) se zeptalo: "[OTÁZKA - např. Proč Bůh dovolil, aby babička zemřela? / Je Bůh skutečný? / Proč se musíme modlit?]"

Pomoz mi odpovědět:
1. Přiměřeně jeho věku a chápání
2. Upřímně (ne vyhýbavě)
3. S prostorem pro další otázky`}
              />
            </Section>

            <Section title="Škola a učení" icon={BookOpen} accentColor="sage">
              <PromptCard
                title="Vysvětlení školní látky"
                description="Bez toho, aby AI udělalo domácí úkol za dítě"
                prompt={`Mé dítě (VĚK let, TŘÍDA) potřebuje pochopit [TÉMA - např. zlomky / fotosyntézu / druhou světovou válku].

DŮLEŽITÉ: Nechci hotovou odpověď. Potřebuji:
1. Vysvětlení principu jednoduchými slovy
2. Příklad ze života, který dítě pochopí
3. Otázky, kterými mohu ověřit, že látku chápe
4. Praktické cvičení, které můžeme udělat spolu`}
              />
              <PromptCard
                title="Motivace k učení"
                description="Když dítě nechce dělat úkoly"
                prompt={`Mé dítě (VĚK let) [nechce dělat domácí úkoly / odkládá učení / říká že ho škola nebaví].

Situace: [POPIS - co konkrétně říká, jak se chová]

Pomoz mi:
1. Pochopit, co za tím může být
2. Jak o tom mluvit bez hádky
3. Praktické tipy na vytvoření rutiny
4. Jak ho motivovat (ale ne manipulovat)`}
              />
            </Section>

            <Section title="Digitální hranice" icon={Smartphone} accentColor="gold">
              <PromptCard
                title="Pravidla pro telefon"
                description="Nastavení hranic podle věku"
                prompt={`Chci nastavit rozumná pravidla pro telefon/tablet pro mé dítě (VĚK let).

Kontext: [má vlastní telefon / používá rodinný tablet / chce si pořídit telefon]

Pomoz mi vytvořit:
1. Konkrétní pravidla (čas, místa, aplikace)
2. Jak to dítěti vysvětlit tak, aby to pochopilo (ne jen poslouchalo)
3. Důsledky při porušení (férové, ne kruté)
4. Jak pravidla postupně uvolňovat s věkem`}
              />
              <PromptCard
                title="Rodinná digitální dohoda"
                description="Pravidla pro celou rodinu"
                prompt={`Chci vytvořit "rodinnou digitální dohodu" – pravidla pro používání technologií, která budou platit pro všechny (i rodiče!).

Rodina: [počet dětí a jejich věky]

Pomoz mi vytvořit dohodu, která zahrnuje:
1. Kdy a kde používáme telefony (a kdy ne)
2. Pravidla pro sociální sítě a AI
3. Co děláme, když někdo pravidlo poruší
4. Jak budeme dohodu aktualizovat

Dohoda by měla být krátká a děti by ji měly spoluvytvářet.`}
              />
            </Section>

            <Section title="Emoce a konflikty" icon={Heart} accentColor="terracotta">
              <PromptCard
                title="Sourozenecké hádky"
                description="Když se děti neustále hádají"
                prompt={`Moje děti (VĚK a VĚK let) se neustále hádají o [DŮVOD - hračky / pozornost / kdo má pravdu].

Pomoz mi:
1. Pochopit, proč se to děje (je to normální?)
2. Jak reagovat v momentě hádky
3. Dlouhodobé strategie na zlepšení vztahu
4. Co říct každému z nich zvlášť`}
              />
              <PromptCard
                title="Dětský vztek"
                description="Zvládání záchvatů vzteku"
                prompt={`Mé dítě (VĚK let) má [záchvaty vzteku / výbuchy emocí / agresivní chování] když [SITUACE].

Pomoz mi:
1. Co dělat V MOMENTĚ, když se to děje
2. Jak o tom mluvit potom, když se uklidní
3. Jak předcházet dalším situacím
4. Kdy je to normální a kdy hledat odbornou pomoc`}
              />
            </Section>

            <Section title="Víra v rodině" icon={BookOpen} accentColor="sage">
              <PromptCard
                title="Modlitba s dětmi"
                description="Jak se modlit přiměřeně věku"
                prompt={`Chci se začít pravidelně modlit se svým dítětem (VĚK let), ale nevím jak začít.

Pomoz mi:
1. Jednoduchý způsob jak začít (ne příliš formální)
2. Příklady modliteb přiměřených věku
3. Jak zapojit dítě (ne jen poslouchat)
4. Co dělat, když dítě nechce nebo je nepozorné`}
              />
              <PromptCard
                title="Biblický příběh na večer"
                description="Převyprávění pro děti"
                prompt={`Převyprávěj biblický příběh o [PŘÍBĚH - např. David a Goliáš / Noe / Ježíšovo narození] pro dítě věku VĚK let.

Požadavky:
1. Použij jednoduché věty
2. Přidej detaily, které zaujmou (ale zůstaň věrný textu)
3. Na konci jedna otázka k zamyšlení
4. Délka: asi 5 minut čtení`}
              />
            </Section>
          </div>
        )}

        {/* BEZPEČNOST */}
        {activeTab === 'bezpeci' && (
          <div className="page-transition">
            <div className="card p-8 md:p-10 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
                Co je bezpečné a co ne
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed">
                Ne všechna AI je stejná. Některé nástroje jsou užitečné, jiné jsou pro děti nebezpečné.
              </p>
            </div>

            <WarningBox type="warning">
              <p className="font-semibold text-lg mb-2">AI "přátelé" a companioni nejsou bezpečné pro děti pod 18 let.</p>
              <p>Character.AI, Replika, Nomi a podobné aplikace jsou navrženy k vytváření emocionální závislosti.
              Výzkumy ukazují, že správně reagují na krizové situace jen ve 22% případů.</p>
            </WarningBox>

            <Section title="Nebezpečné – NEPOUŽÍVAT" icon={AlertTriangle} defaultOpen={true} accentColor="terracotta">
              <div className="space-y-4">
                <SafetyCard
                  type="danger"
                  title="Character.AI"
                  description="AI 'přátelé' a postavy. Vytváří emocionální závislost, špatně reaguje na krizové situace, byly zaznamenány případy sexuálního obsahu a sebepoškozování."
                />
                <SafetyCard
                  type="danger"
                  title="Replika"
                  description="AI 'partner' nebo 'přítel'. Navrženo pro dospělé, ale děti ho často používají pro emocionální podporu."
                />
                <SafetyCard
                  type="danger"
                  title="Snapchat My AI"
                  description="Integrovaný chatbot v Snapchatu. Může poskytovat nevhodné odpovědi, děti ho používají jako 'přítele'."
                />
              </div>
            </Section>

            <Section title="Opatrně – s dohledem rodiče" icon={Shield} accentColor="gold">
              <div className="space-y-4">
                <SafetyCard
                  type="warning"
                  title="ChatGPT, Claude, Gemini"
                  description="Obecné AI nástroje. Užitečné pro učení, ale vyžadují dohled. Mohou poskytnout nevhodný obsah při špatných otázkách."
                />
                <SafetyCard
                  type="warning"
                  title="DALL-E, Midjourney"
                  description="Generování obrázků. Mohou vytvořit nevhodný obsah. Používat pouze s rodičem."
                />
              </div>
            </Section>

            <Section title="Bezpečnější možnosti" icon={Check} accentColor="sage">
              <div className="space-y-4">
                <SafetyCard
                  type="success"
                  title="Khanmigo (Khan Academy)"
                  description="Vzdělávací AI tutor. Navržený pro děti, s bezpečnostními omezeními. Nevyžaduje placení za základní funkce."
                />
                <SafetyCard
                  type="success"
                  title="Duolingo"
                  description="Učení jazyků s AI prvky. Bezpečné, zaměřené na vzdělávání."
                />
                <SafetyCard
                  type="success"
                  title="AI v rodičovském účtu"
                  description="Používejte AI (Claude, ChatGPT) pod svým účtem s dítětem vedle vás. Nejbezpečnější způsob."
                />
              </div>
            </Section>

            <Section title="Varovné signály" icon={AlertTriangle} accentColor="terracotta">
              <p className="text-[#4A5568] mb-5 text-lg">Pozorujte své dítě. Znepokojivé může být, když:</p>
              <ul className="space-y-3">
                {[
                  'Tráví hodiny chatováním s AI a skrývá to',
                  'Mluví o AI "příteli" jako o reálné osobě',
                  'Preferuje AI před lidskými vztahy',
                  'Je rozrušené, když nemůže používat AI',
                  'Mění se jeho/její nálada nebo chování',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-[#F5E8E8]/50">
                    <span className="w-2 h-2 rounded-full bg-[#B85C5C] mt-2 flex-shrink-0" />
                    <span className="text-[#2D3436]">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        )}

        {/* ZDROJE */}
        {activeTab === 'zdroje' && (
          <div className="page-transition">
            <div className="card p-8 md:p-10 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
                Další zdroje
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed">
                Kam dál pro více informací a podpory.
              </p>
            </div>

            <Section title="Krizové linky" icon={Phone} defaultOpen={true} accentColor="terracotta">
              <div className="grid gap-4 sm:grid-cols-2">
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
            </Section>

            <Section title="Doporučené články a weby" icon={ExternalLink} accentColor="sage">
              <ul className="space-y-3">
                <ResourceLink
                  href="https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-generative-ai"
                  title="Common Sense Media: Průvodce AI pro rodiče"
                  description="Komplexní anglický průvodce od důvěryhodné organizace"
                />
                <ResourceLink
                  href="https://www.internetmatters.org/resources/parent-guide-to-artificial-intelligence-ai-tools/"
                  title="Internet Matters: AI nástroje pro rodiče"
                  description="Praktické tipy pro bezpečné používání AI"
                />
                <ResourceLink
                  href="https://www.khanmigo.ai/parents"
                  title="Khanmigo pro rodiče"
                  description="Bezpečný AI tutor pro děti"
                />
              </ul>
            </Section>

            <Section title="Knihy a podcasty" icon={BookOpen} accentColor="gold">
              <ul className="space-y-4">
                <li className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
                  <span className="font-display font-semibold text-[#2D3436] text-lg">Raising Christian Kids Podcast</span>
                  <p className="text-[#4A5568] mt-1">Epizoda: "Faith-centered Parenting in the Age of AI"</p>
                </li>
                <li className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
                  <span className="font-display font-semibold text-[#2D3436] text-lg">Courageous Parenting</span>
                  <p className="text-[#4A5568] mt-1">Epizoda: "Christian Perspectives on AI"</p>
                </li>
              </ul>
            </Section>

            <Section title="Nástroje pro rodičovskou kontrolu" icon={Shield} accentColor="sage">
              <ul className="space-y-4">
                {[
                  { name: 'Bark', desc: 'Monitorování obsahu a alertů bez špehování' },
                  { name: 'Circle', desc: 'Správa screen time a filtrování obsahu' },
                  { name: 'Google Family Link / Apple Screen Time', desc: 'Vestavěné nástroje v telefonech' },
                ].map((tool, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
                    <div className="w-10 h-10 rounded-xl bg-[#5B7B6A]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#5B7B6A]" />
                    </div>
                    <div>
                      <span className="font-display font-semibold text-[#2D3436] text-lg">{tool.name}</span>
                      <p className="text-[#4A5568] mt-1">{tool.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Heart className="w-5 h-5 fill-current" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2">Vytvořeno pro seminář "AI v křesťanské rodině"</p>
          <p className="text-[#7A9B8A] font-medium">2026 • S láskou pro rodiče, kteří chtějí vést své děti moudře ke Kristu</p>
        </div>
      </footer>
    </div>
  );
}
