import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, AlertCircle, CheckCircle, Eye, Brain, Heart, Users, Lock, Smartphone, Clock, BookOpen, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { BackButton } from '../components/ui';
import { Link } from 'react-router-dom';

// Data for dangerous apps
const dangerousApps = [
  {
    name: "Character.AI",
    description: "Umožňuje vytvářet a chatovat s AI \"osobnostmi\". Děti si vytváří romantické partnery, nejlepší přátele, nebo chatují s \"celebritami\".",
    risks: [
      "Emocionální závislost na virtuální bytosti",
      "Nahrazování skutečných vztahů",
      "Manipulativní obsah (AI říká, co chce dítě slyšet)",
      "Riziko sebepoškozování – několik zdokumentovaných případů",
      "24/7 dostupnost = žádné hranice"
    ],
    warning: "V roce 2024 dokumentované případy sebevražd spojených s používáním této aplikace."
  },
  {
    name: "Replika",
    description: "AI navržená explicitně jako \"přítel\" nebo \"romantický partner\". Zaměřená na vytváření emocionálního pouta.",
    risks: [
      "Designovaná k vytváření závislosti",
      "Romantické/sexuální konverzace (i u dětí)",
      "Falešný pocit intimity",
      "Zkreslené představy o vztazích"
    ],
    warning: "Mnoho uživatelů hlásí deprese po \"rozchodu\" s AI."
  },
  {
    name: "Snapchat My AI",
    description: "AI chatbot integrovaný do Snapchatu – platformy, kterou používá většina teenagerů.",
    risks: [
      "Nelze vypnout (bez předplatného)",
      "Děti ji považují za \"kamaráda\"",
      "Sbírá data o dětech",
      "Normalizuje AI jako sociální kontakt"
    ],
    warning: "Většina rodičů neví, že existuje. Zkontrolujte Snapchat svého dítěte."
  },
  {
    name: "Nomi.AI / Kindroid",
    description: "AI \"kompanioni\" s důrazem na romantické vztahy a \"personalizaci\".",
    risks: [
      "Explicitní obsah",
      "\"Pamatuje si\" konverzace = hlubší pouto",
      "Manipulativní design",
      "Cílí na osamělé lidi – včetně teenagerů"
    ],
    warning: "Některé verze umožňují NSFW obsah."
  },
  {
    name: "Chai",
    description: "Platforma s tisíci AI \"osobnostmi\" vytvořenými komunitou.",
    risks: [
      "Nekontrolovaný obsah",
      "Sexuální a násilné postavy",
      "Žádná skutečná moderace",
      "Gamifikace (body za chatování)"
    ],
    warning: "Komunitou vytvořené postavy nemají žádné bezpečnostní filtry."
  }
];

// Data for gray zone apps
const grayZoneApps = [
  {
    name: "ChatGPT",
    provider: "OpenAI",
    description: "Nejznámější AI asistent. Užitečný nástroj, ale vyžaduje dohled.",
    pros: [
      "Silné bezpečnostní filtry",
      "Odmítá škodlivý obsah",
      "Užitečný pro učení a kreativitu"
    ],
    cons: [
      "Může \"halucinovat\" (vymýšlet informace)",
      "Děti ho mohou používat k podvádění",
      "Bez dohledu může nahrazovat vlastní myšlení"
    ],
    recommendation: "Vhodný od 13+ let s dohledem. Nastavte sdílený účet, kde vidíte historii."
  },
  {
    name: "Claude",
    provider: "Anthropic",
    description: "AI asistent s důrazem na bezpečnost a etiku. Jeden z nejbezpečnějších.",
    pros: [
      "Velmi silný důraz na bezpečnost",
      "Odmítá hraní rolí a manipulaci",
      "Transparentní o svých limitech"
    ],
    cons: [
      "Stále může poskytovat nepřesné informace",
      "Riziko nadměrného spoléhání se na AI"
    ],
    recommendation: "Relativně bezpečnější volba. Stále doporučujeme dohled."
  },
  {
    name: "Google Gemini",
    provider: "Google",
    description: "AI od Googlu integrovaná do mnoha služeb.",
    pros: [
      "Dobré bezpečnostní filtry",
      "Integrace s ověřenými zdroji"
    ],
    cons: [
      "Sbírá data pro Google",
      "Může být v telefonech dětí bez vašeho vědomí"
    ],
    recommendation: "Zkontrolujte nastavení Google účtu vašeho dítěte."
  },
  {
    name: "Microsoft Copilot",
    provider: "Microsoft",
    description: "AI integrovaná do Windows, Edge a Office produktů.",
    pros: [
      "Bezpečnostní filtry od Microsoftu",
      "Užitečná pro práci a školu"
    ],
    cons: [
      "Může být aktivní bez vašeho vědomí",
      "Děti ji mohou používat k obcházení učení"
    ],
    recommendation: "Nastavte rodičovskou kontrolu v Microsoft Family Safety."
  },
  {
    name: "Perplexity",
    provider: "Perplexity AI",
    description: "AI vyhledávač, který poskytuje odpovědi s citacemi zdrojů.",
    pros: [
      "Uvádí zdroje informací",
      "Méně halucinací díky vyhledávání",
      "Dobrý pro výzkum"
    ],
    cons: [
      "Může najít nevhodný obsah z internetu",
      "Bez specifických filtrů pro děti"
    ],
    recommendation: "Vhodný pro starší děti s kritickým myšlením."
  }
];

// Data for recommended apps
const recommendedApps = [
  {
    name: "Khanmigo",
    provider: "Khan Academy",
    description: "AI tutor vytvořený neziskovou vzdělávací organizací. Navržený specificky pro učení.",
    features: [
      "Neposkytuje odpovědi – vede k řešení",
      "Sokratovská metoda výuky",
      "Rodičovský přehled o aktivitě",
      "Bezpečné prostředí bez \"přátelství\""
    ],
    ageGroup: "Vhodné pro všechny věkové skupiny",
    cost: "Placená služba, ale Khan Academy je neziskovka"
  },
  {
    name: "Duolingo",
    provider: "Duolingo",
    description: "Aplikace na učení jazyků s AI prvky. Jasně definovaný účel.",
    features: [
      "Zaměřeno pouze na jazyky",
      "Gamifikace motivuje k učení",
      "Žádné \"chatování\" nebo vztahy",
      "Bezpečné pro děti"
    ],
    ageGroup: "Vhodné od 4+ let",
    cost: "Základní verze zdarma"
  },
  {
    name: "Photomath",
    provider: "Photomath",
    description: "AI pro řešení matematických úloh s vysvětlením postupu.",
    features: [
      "Vysvětluje postup krok za krokem",
      "Pomáhá pochopit matematiku",
      "Jasně definovaný účel"
    ],
    ageGroup: "Vhodné pro školáky",
    cost: "Základní funkce zdarma"
  },
  {
    name: "Grammarly",
    provider: "Grammarly",
    description: "AI pro kontrolu gramatiky a stylu psaní.",
    features: [
      "Pomáhá zlepšovat psaní",
      "Vysvětluje chyby",
      "Jasně definovaný nástroj"
    ],
    ageGroup: "Vhodné pro starší děti",
    cost: "Základní verze zdarma"
  }
];

// Expandable section component
const ExpandableSection = ({ title, icon: Icon, children, defaultOpen = false, variant = "default" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const variantStyles = {
    danger: "from-[#B85C5C] to-[#8B4444]",
    warning: "from-[#C9A962] to-[#9A7B3C]",
    safe: "from-[#5B7B6A] to-[#3D5A4A]",
    default: "from-[#5B7B6A] to-[#4A6B5A]"
  };

  return (
    <div className="card overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 bg-gradient-to-r ${variantStyles[variant]} text-white hover:opacity-95 transition-opacity`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <h2 className="font-display font-bold text-lg md:text-xl text-left">{title}</h2>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-5 md:p-6">
          {children}
        </div>
      )}
    </div>
  );
};

// App card components
const DangerousAppCard = ({ app }) => (
  <div className="p-5 rounded-xl bg-[#FDF8F8] border border-[#B85C5C]/20 mb-4">
    <div className="flex items-start justify-between mb-3">
      <h4 className="font-display font-bold text-[#8B4444] text-lg">{app.name}</h4>
      <span className="px-2 py-1 rounded text-xs font-bold bg-[#B85C5C] text-white">NEBEZPEČNÉ</span>
    </div>
    <p className="text-[#4A5568] text-sm mb-4">{app.description}</p>

    <div className="mb-4">
      <p className="font-semibold text-[#8B4444] text-sm mb-2">Rizika:</p>
      <ul className="space-y-1">
        {app.risks.map((risk, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#6B3A3A]">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#B85C5C]" />
            {risk}
          </li>
        ))}
      </ul>
    </div>

    {app.warning && (
      <div className="p-3 rounded-lg bg-[#B85C5C]/10 border border-[#B85C5C]/30">
        <p className="text-xs font-semibold text-[#8B4444]">
          <AlertCircle className="w-4 h-4 inline mr-1" />
          {app.warning}
        </p>
      </div>
    )}
  </div>
);

const GrayZoneAppCard = ({ app }) => (
  <div className="p-5 rounded-xl bg-[#FFFDF5] border border-[#C9A962]/30 mb-4">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h4 className="font-display font-bold text-[#8B6B22] text-lg">{app.name}</h4>
        <p className="text-xs text-[#9A7B3C]">{app.provider}</p>
      </div>
      <span className="px-2 py-1 rounded text-xs font-bold bg-[#C9A962] text-white">S DOHLEDEM</span>
    </div>
    <p className="text-[#4A5568] text-sm mb-4">{app.description}</p>

    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div>
        <p className="font-semibold text-[#3D5A4A] text-sm mb-2 flex items-center gap-1">
          <CheckCircle className="w-4 h-4" /> Výhody:
        </p>
        <ul className="space-y-1">
          {app.pros.map((pro, i) => (
            <li key={i} className="text-xs text-[#4A6B5A]">• {pro}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-[#8B4444] text-sm mb-2 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" /> Rizika:
        </p>
        <ul className="space-y-1">
          {app.cons.map((con, i) => (
            <li key={i} className="text-xs text-[#6B3A3A]">• {con}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="p-3 rounded-lg bg-[#C9A962]/10 border border-[#C9A962]/30">
      <p className="text-xs text-[#8B6B22]">
        <strong>Doporučení:</strong> {app.recommendation}
      </p>
    </div>
  </div>
);

const RecommendedAppCard = ({ app }) => (
  <div className="p-5 rounded-xl bg-[#F5FAF7] border border-[#5B7B6A]/20 mb-4">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h4 className="font-display font-bold text-[#3D5A4A] text-lg">{app.name}</h4>
        <p className="text-xs text-[#5B7B6A]">{app.provider}</p>
      </div>
      <span className="px-2 py-1 rounded text-xs font-bold bg-[#5B7B6A] text-white">DOPORUČENO</span>
    </div>
    <p className="text-[#4A5568] text-sm mb-4">{app.description}</p>

    <div className="mb-4">
      <p className="font-semibold text-[#3D5A4A] text-sm mb-2">Proč je bezpečná:</p>
      <ul className="space-y-1">
        {app.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#4A6B5A]">
            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5B7B6A]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 rounded-full text-xs bg-[#5B7B6A]/10 text-[#3D5A4A]">
        {app.ageGroup}
      </span>
      <span className="px-2 py-1 rounded-full text-xs bg-[#5B7B6A]/10 text-[#3D5A4A]">
        {app.cost}
      </span>
    </div>
  </div>
);

export default function BezpecnostPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C4785A] via-[#A65D42] to-[#8B4444]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <BackButton />
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Průvodce pro rodiče
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Bezpečnost AI v rodině
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Kompletní průvodce: co je nebezpečné, co vyžaduje dohled a co můžete doporučit svým dětem
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 70 480 20 720 40C960 60 1200 10 1440 40V80H0Z" fill="#FAF8F5"/>
          </svg>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-3 md:px-4 py-6 md:py-12">

        {/* Quick Overview */}
        <div className="card p-5 md:p-8 mb-8">
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#2D3436] mb-6">
            Rychlý přehled
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-[#B85C5C]" />
                <span className="font-bold text-[#8B4444]">Nebezpečné</span>
              </div>
              <p className="text-sm text-[#6B3A3A] mb-2">AI „přátelé" a kompanioni</p>
              <p className="text-xs text-[#8B4444]">Character.AI, Replika, Snapchat AI, Nomi, Chai</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-[#9A7B3C]" />
                <span className="font-bold text-[#8B6B22]">S dohledem</span>
              </div>
              <p className="text-sm text-[#6B5522] mb-2">AI asistenti a nástroje</p>
              <p className="text-xs text-[#8B6B22]">ChatGPT, Claude, Gemini, Copilot, Perplexity</p>
            </div>

            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-[#5B7B6A]" />
                <span className="font-bold text-[#3D5A4A]">Doporučené</span>
              </div>
              <p className="text-sm text-[#4A6B5A] mb-2">Vzdělávací AI nástroje</p>
              <p className="text-xs text-[#3D5A4A]">Khanmigo, Duolingo, Photomath, Grammarly</p>
            </div>
          </div>
        </div>

        {/* Key Principle */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-2">Klíčový princip</h3>
              <p className="text-white/90">
                <strong>AI jako NÁSTROJ = OK.</strong> AI jako VZTAH = problém.<br />
                Kalkulačka je nástroj. Kamarád, který je kalkulačka, je lež.
              </p>
            </div>
          </div>
        </div>

        {/* Dangerous Apps Section */}
        <ExpandableSection
          title="Nebezpečné aplikace"
          icon={AlertTriangle}
          variant="danger"
          defaultOpen={true}
        >
          <div className="mb-6 p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
            <h3 className="font-display font-semibold text-[#8B4444] mb-2">Proč jsou nebezpečné?</h3>
            <p className="text-sm text-[#6B3A3A] mb-3">
              Tyto aplikace jsou navrženy tak, aby vytvářely <strong>emocionální závislost</strong>.
              Nejsou to nástroje – jsou to simulace vztahů. A simulovaný vztah je vždy lež.
            </p>
            <ul className="space-y-2 text-sm text-[#6B3A3A]">
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#B85C5C]" />
                <span><strong>Emocionální manipulace:</strong> AI vždy říká to, co chce uživatel slyšet</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#B85C5C]" />
                <span><strong>Nahrazování skutečných vztahů:</strong> Proč riskovat odmítnutí od člověka?</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#B85C5C]" />
                <span><strong>24/7 dostupnost:</strong> Žádné zdravé hranice, žádný odpočinek</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#B85C5C]" />
                <span><strong>Zkreslené očekávání:</strong> Skutečný partner nikdy nebude tak „dokonalý"</span>
              </li>
            </ul>
          </div>

          {dangerousApps.map((app, index) => (
            <DangerousAppCard key={index} app={app} />
          ))}

          <div className="p-4 rounded-xl bg-[#8B4444] text-white">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Co dělat, pokud vaše dítě používá tyto aplikace:
            </p>
            <ol className="space-y-2 text-sm text-white/90">
              <li>1. <strong>Nepanikařte</strong> – dítě to nedělá ze zlé vůle</li>
              <li>2. <strong>Mluvte s ním</strong> – zeptejte se, co mu ta aplikace dává</li>
              <li>3. <strong>Pochopte potřebu</strong> – osamělost? Zvědavost? Nuda?</li>
              <li>4. <strong>Nabídněte alternativu</strong> – skutečný vztah, aktivitu, komunitu</li>
              <li>5. <strong>Nastavte hranice</strong> – odinstalujte aplikaci, vysvětlete proč</li>
            </ol>
          </div>
        </ExpandableSection>

        {/* Gray Zone Section */}
        <ExpandableSection
          title="Šedá zóna – S dohledem rodiče"
          icon={Eye}
          variant="warning"
        >
          <div className="mb-6 p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
            <h3 className="font-display font-semibold text-[#8B6B22] mb-2">Proč šedá zóna?</h3>
            <p className="text-sm text-[#6B5522] mb-3">
              Tyto nástroje jsou <strong>užitečné</strong>, ale vyžadují dohled. Nejsou navrženy jako „přátelé",
              ale stále nesou rizika – od podvádění přes nadměrné spoléhání až po dezinformace.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/50">
                <p className="font-semibold text-[#8B6B22] text-sm mb-1">Kdy jsou OK:</p>
                <ul className="text-xs text-[#6B5522] space-y-1">
                  <li>• Pomoc s pochopením látky</li>
                  <li>• Brainstorming a kreativita</li>
                  <li>• Učení se nových dovedností</li>
                  <li>• Ověřování informací (s kritickým myšlením)</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-white/50">
                <p className="font-semibold text-[#8B6B22] text-sm mb-1">Kdy jsou problém:</p>
                <ul className="text-xs text-[#6B5522] space-y-1">
                  <li>• Psaní úkolů za dítě</li>
                  <li>• Nahrazování vlastního myšlení</li>
                  <li>• Trávení příliš mnoho času</li>
                  <li>• Slepá důvěra v odpovědi</li>
                </ul>
              </div>
            </div>
          </div>

          {grayZoneApps.map((app, index) => (
            <GrayZoneAppCard key={index} app={app} />
          ))}

          <div className="p-4 rounded-xl bg-[#C9A962]/20 border border-[#C9A962]/30">
            <p className="font-semibold text-[#8B6B22] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Pravidla pro používání AI asistentů:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-[#6B5522]">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#9A7B3C]">1.</span>
                  Sdílený účet – vidíte historii
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#9A7B3C]">2.</span>
                  AI pomáhá pochopit, ne udělat za vás
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#9A7B3C]">3.</span>
                  Vždy ověřujte důležité informace
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-[#6B5522]">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#9A7B3C]">4.</span>
                  Časový limit na používání
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#9A7B3C]">5.</span>
                  Nikdy nesdílet osobní údaje
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#9A7B3C]">6.</span>
                  Mluvte o tom, na co AI použili
                </li>
              </ul>
            </div>
          </div>
        </ExpandableSection>

        {/* Recommended Section */}
        <ExpandableSection
          title="Doporučené aplikace"
          icon={CheckCircle}
          variant="safe"
        >
          <div className="mb-6 p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
            <h3 className="font-display font-semibold text-[#3D5A4A] mb-2">Proč jsou bezpečnější?</h3>
            <p className="text-sm text-[#4A6B5A] mb-3">
              Tyto aplikace mají <strong>jasně definovaný účel</strong> – vzdělávání.
              Nejsou navrženy k vytváření vztahů nebo závislosti. Jsou to nástroje, které dělají to, co slibují.
            </p>
            <ul className="space-y-2 text-sm text-[#4A6B5A]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5B7B6A]" />
                <span><strong>Jasný účel:</strong> Učení jazyků, matematika, psaní – ne „přátelství"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5B7B6A]" />
                <span><strong>Pedagogický přístup:</strong> Vedou k pochopení, ne k závislosti</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5B7B6A]" />
                <span><strong>Rodičovská kontrola:</strong> Možnost sledovat pokrok</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5B7B6A]" />
                <span><strong>Ověřené organizace:</strong> Khan Academy, Duolingo jsou důvěryhodné</span>
              </li>
            </ul>
          </div>

          {recommendedApps.map((app, index) => (
            <RecommendedAppCard key={index} app={app} />
          ))}

          <div className="p-4 rounded-xl bg-[#5B7B6A] text-white">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Tip pro rodiče:
            </p>
            <p className="text-sm text-white/90">
              I u doporučených aplikací platí: <strong>Zájem je lepší než kontrola.</strong>
              Zeptejte se dítěte, co se dnes naučilo. Ukažte, že vás to zajímá.
              Technologie je nástroj – vztah s vámi je základ.
            </p>
          </div>
        </ExpandableSection>

        {/* Fake Christian AI Warning */}
        <div className="card p-5 md:p-8 mb-8 border-2 border-[#C9A962]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-[#9A7B3C]" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl md:text-2xl text-[#2D3436] mb-2">
                Pozor na „křesťanské" AI stránky
              </h2>
              <p className="text-[#4A5568]">
                Ne vše, co zní křesťansky, je od křesťanů.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A962]/30 mb-6">
            <p className="text-[#6B5522] mb-3">
              Na internetu existuje řada stránek, které vypadají jako křesťanské služby – mají jména jako
              „Jesus AI", „AI Bible", „Chat with Jesus" apod. <strong>Většina z nich ale NENÍ provozována křesťany</strong>
              a jejich skutečným cílem je:
            </p>
            <ul className="space-y-2 text-sm text-[#6B5522]">
              <li className="flex items-start gap-2">
                <span className="text-[#9A7B3C] font-bold">$</span>
                <span><strong>Komerční zisk</strong> – předplatné, reklamy, prodej dat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9A7B3C] font-bold">📊</span>
                <span><strong>Sběr osobních dat</strong> – vaše modlitby, starosti, osobní informace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9A7B3C] font-bold">🎯</span>
                <span><strong>Cílená manipulace</strong> – využití duchovní zranitelnosti k marketingu</span>
              </li>
            </ul>
          </div>

          <h3 className="font-display font-semibold text-[#8B4444] mb-3">Příklady problematických stránek:</h3>

          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8]/50 border border-[#B85C5C]/20">
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-[#8B4444]">thejesusai.com</p>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#B85C5C]/20 text-[#8B4444]">Riziko</span>
              </div>
              <p className="text-sm text-[#6B3A3A]">
                Slibuje „konverzaci s Ježíšem". Ve skutečnosti jde o komerční projekt bez teologického dohledu.
                Sbírá data o duchovních potřebách uživatelů.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5E8E8]/50 border border-[#B85C5C]/20">
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-[#8B4444]">aijesus.live</p>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#B85C5C]/20 text-[#8B4444]">Riziko</span>
              </div>
              <p className="text-sm text-[#6B3A3A]">
                Další „AI Ježíš" bez jakékoliv církevní afiliace. Neznámí provozovatelé, nejasné nakládání s daty.
                Může poskytovat teologicky zavádějící odpovědi.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <h4 className="font-display font-semibold text-[#8B4444] mb-3">Proč je to problém:</h4>
              <ul className="space-y-2 text-sm text-[#6B3A3A]">
                <li>• AI NENÍ Ježíš – je to rouhání vydávat se za Boha</li>
                <li>• Žádný teologický dohled nad odpověďmi</li>
                <li>• Může podávat heretické nebo zavádějící informace</li>
                <li>• Intimní duchovní data končí u neznámých firem</li>
                <li>• Vytváří falešný pocit duchovního vedení</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <h4 className="font-display font-semibold text-[#3D5A4A] mb-3">Jak to poznat:</h4>
              <ul className="space-y-2 text-sm text-[#4A6B5A]">
                <li>• Chybí informace o provozovateli</li>
                <li>• Žádná církevní afiliace nebo doporučení</li>
                <li>• Agresivní monetizace (předplatné, reklamy)</li>
                <li>• Sliby typu „mluvte s Ježíšem"</li>
                <li>• Nejasné podmínky použití dat</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[#5B7B6A] to-[#3D5A4A] text-white">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Co doporučujeme:
            </p>
            <ul className="space-y-1 text-sm text-white/90">
              <li>• <strong>Bible</strong> – originál nepotřebuje AI prostředníka</li>
              <li>• <strong>Modlitba</strong> – přímý rozhovor s Bohem, ne s algoritmem</li>
              <li>• <strong>Známá duchovní autorita</strong> – skutečný člověk s teologickým vzděláním</li>
            </ul>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="card p-5 md:p-8 mb-8">
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#2D3436] mb-6 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-[#C4785A]" />
            Varovné signály
          </h2>

          <p className="text-[#4A5568] mb-6">
            Jak poznat, že dítě může mít problém s AI? Sledujte tyto signály:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm">Emocionální závislost</p>
                <p className="text-xs text-[#6B3A3A]">Mluví o AI jako o „příteli", je smutné když nemá přístup</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm">Tajnůstkářství</p>
                <p className="text-xs text-[#6B3A3A]">Skrývá, co s AI dělá, zavírá obrazovku</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm">Stažení se</p>
                <p className="text-xs text-[#6B3A3A]">Preferuje AI před skutečnými lidmi</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm">Změny nálady</p>
                <p className="text-xs text-[#6B3A3A]">Podrážděnost když nemůže používat AI</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm">Poruchy spánku</p>
                <p className="text-xs text-[#6B3A3A]">Chatuje s AI pozdě v noci</p>
              </div>
              <div className="p-3 rounded-lg bg-[#F5E8E8]/50 border border-[#B85C5C]/10">
                <p className="font-semibold text-[#8B4444] text-sm">Zhoršení ve škole</p>
                <p className="text-xs text-[#6B3A3A]">AI dělá úkoly za něj, neučí se</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[#C4785A] to-[#8B4444] text-white">
            <p className="font-semibold mb-2">Pokud vidíte tyto signály:</p>
            <p className="text-sm text-white/90">
              Neobviňujte, ale mluvte. Zeptejte se: „Co ti ta aplikace dává?"
              Dítě často neví, že má problém – potřebuje vaše vedení, ne odsouzení.
            </p>
          </div>
        </div>

        {/* Practical Checklist */}
        <div className="card p-5 md:p-8 mb-8">
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#2D3436] mb-6 flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-[#5B7B6A]" />
            Praktický checklist
          </h2>

          <p className="text-[#4A5568] mb-6">
            Co zkontrolovat na zařízení vašeho dítěte:
          </p>

          <div className="space-y-3 mb-6">
            {[
              "Zkontrolujte nainstalované aplikace – hledejte Character.AI, Replika, Chai, Nomi",
              "Podívejte se do Snapchatu – My AI je tam automaticky",
              "Zkontrolujte historii prohlížeče – character.ai, replika.ai, chai-ml.com",
              "Nastavte rodičovskou kontrolu na App Store / Google Play",
              "Nastavte Screen Time / Digital Wellbeing limity",
              "Vytvořte sdílený účet pro ChatGPT/Claude, pokud je používáte",
              "Mluvte s dítětem o tom, co online dělá – bez vyslýchání"
            ].map((item, index) => (
              <label key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E4DE] cursor-pointer hover:bg-[#F5F1EB] transition-colors">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-[#E8E4DE] text-[#5B7B6A] focus:ring-[#5B7B6A]" />
                <span className="text-sm text-[#4A5568]">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Crisis Lines */}
        <div className="card p-5 md:p-8 mb-8">
          <h2 className="font-display font-bold text-xl md:text-2xl text-[#2D3436] mb-6 flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#B85C5C]" />
            Krizové linky
          </h2>

          <p className="text-[#4A5568] mb-6">
            Pokud má vaše dítě vážné problémy, neváhejte požádat o pomoc:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href="tel:116111" className="p-4 rounded-xl bg-[#F5E8E8] border-2 border-[#B85C5C] hover:bg-[#F0E0E0] transition-colors">
              <p className="font-display font-bold text-[#8B4444] text-lg">Linka bezpečí</p>
              <p className="text-2xl font-bold text-[#B85C5C]">116 111</p>
              <p className="text-sm text-[#6B3A3A]">Pro děti a rodiče. Nonstop, zdarma.</p>
            </a>
            <a href="tel:606021021" className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] hover:bg-[#F5F1EB] transition-colors">
              <p className="font-display font-bold text-[#2D3436]">Rodičovská linka</p>
              <p className="text-2xl font-bold text-[#5B7B6A]">606 021 021</p>
              <p className="text-sm text-[#4A5568]">Podpora pro rodiče v těžkých situacích.</p>
            </a>
          </div>
        </div>

        {/* Link to Seminar */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-[#4A6B5A] to-[#2D4A3A] text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-white/90 text-sm mb-1">Chcete vědět více?</p>
              <p className="font-display font-bold text-lg">Projděte si naše semináře</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/seminar/1"
                className="px-4 py-2 rounded-lg bg-white text-[#3D5A4A] hover:bg-white/90 transition-colors text-sm font-semibold"
              >
                Seminář 1
              </Link>
              <Link
                to="/seminar/2"
                className="px-4 py-2 rounded-lg bg-white text-[#3D5A4A] hover:bg-white/90 transition-colors text-sm font-semibold"
              >
                Seminář 2
              </Link>
              <Link
                to="/slovnik"
                className="px-4 py-2 rounded-lg bg-white text-[#3D5A4A] hover:bg-white/90 transition-colors text-sm font-semibold"
              >
                Slovník
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Shield className="w-4 h-4 md:w-5 md:h-5" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Bezpečnost AI v rodině</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2026 • S láskou pro rodiče</p>
        </div>
      </footer>
    </div>
  );
}
