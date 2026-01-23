import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Copy, Check, MessageCircle, Shield, BookOpen, Heart, Smartphone, Brain, ExternalLink, AlertTriangle } from 'lucide-react';

const Section = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-gray-800">{title}</span>
        </div>
        {isOpen ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && <div className="px-6 pb-6 pt-2">{children}</div>}
    </div>
  );
};

const PromptCard = ({ title, prompt, description }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <button 
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Zkopírováno!' : 'Kopírovat'}
        </button>
      </div>
      {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
      <div className="bg-white rounded border border-gray-200 p-3 text-sm font-mono text-gray-700 whitespace-pre-wrap">
        {prompt}
      </div>
    </div>
  );
};

const WarningBox = ({ children }) => (
  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-4">
    <div className="flex gap-3">
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-amber-800">{children}</div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('uvod');
  
  const tabs = [
    { id: 'uvod', label: 'Úvod', icon: BookOpen },
    { id: 'pruvodce', label: 'AI Průvodce', icon: MessageCircle },
    { id: 'prompty', label: 'Superprompty', icon: Brain },
    { id: 'bezpeci', label: 'Bezpečnost', icon: Shield },
    { id: 'zdroje', label: 'Zdroje', icon: ExternalLink },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">AI v křesťanské rodině</h1>
          <p className="text-indigo-100">Praktický průvodce pro rodiče v digitální době</p>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex overflow-x-auto py-2 gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        
        {/* ÚVOD */}
        {activeTab === 'uvod' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Vítejte!</h2>
              <p className="text-gray-600 mb-4">
                AI už mluví s našimi dětmi. Otázka není, jestli to dovolíme – ale jak u toho budeme přítomni jako rodiče.
              </p>
              <p className="text-gray-600 mb-4">
                Tato stránka je praktickým doplňkem k semináři. Najdete zde:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-indigo-600" />
                  <span><strong>Rodinného AI Průvodce</strong> – váš pomocník pro těžké situace</span>
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-600" />
                  <span><strong>Superprompty</strong> – připravené otázky pro různé situace</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-600" />
                  <span><strong>Bezpečnostní tipy</strong> – co je nebezpečné a proč</span>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-indigo-600" />
                  <span><strong>Zdroje</strong> – kam dál pro více informací</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">💡 Klíčové poselství</h3>
              <p className="text-indigo-100 mb-4">
                AI není nepřítel víry ani spása pro rodiče. Je to nástroj – jako kladivo. 
                Můžeš s ním postavit dům nebo si ublížit. Záleží na tom, kdo ho drží a jak.
              </p>
              <p className="text-indigo-100 font-medium">
                "Cokoli děláte, dělejte z celého srdce, jako Pánu, a ne lidem." – Koloským 3:23
              </p>
            </div>
          </div>
        )}
        
        {/* AI PRŮVODCE */}
        {activeTab === 'pruvodce' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Rodinný AI Průvodce</h2>
              <p className="text-gray-600 mb-4">
                Vytvořili jsme pro vás speciálního AI pomocníka – "Rodinného AI Průvodce". 
                Je to jako mít po ruce moudrého křesťanského přítele, který vám pomůže s:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Těžkými rozhovory s dětmi (smrt, rozvod, šikana...)</li>
                <li>• Nastavením hranic pro telefony a sociální sítě</li>
                <li>• Pomocí s domácími úkoly (učí myslet, ne podvádět)</li>
                <li>• Výchovou ve víře přiměřeně věku</li>
                <li>• Řešením emočních situací a konfliktů</li>
              </ul>
            </div>
            
            <Section title="Jak si Průvodce nastavit (5 minut)" icon={Smartphone} defaultOpen={true}>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium">Otevřete claude.ai</p>
                    <p className="text-sm text-gray-600">Jděte na <a href="https://claude.ai" className="text-indigo-600 underline" target="_blank" rel="noreferrer">claude.ai</a> a přihlaste se (je zdarma)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium">Vytvořte nový Projekt</p>
                    <p className="text-sm text-gray-600">Klikněte na ikonu složky vlevo → "Create Project"</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium">Přidejte instrukce</p>
                    <p className="text-sm text-gray-600">Klikněte na "Set project instructions" a vložte text níže</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-medium">Hotovo!</p>
                    <p className="text-sm text-gray-600">Pojmenujte projekt "Rodinný Průvodce" a začněte konverzaci</p>
                  </div>
                </div>
              </div>
            </Section>
            
            <Section title="Instrukce ke zkopírování" icon={Copy}>
              <p className="text-sm text-gray-600 mb-3">
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
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Superprompty pro rodiče</h2>
              <p className="text-gray-600">
                Připravené otázky, které můžete použít s jakýmkoli AI (Claude, ChatGPT, Gemini...). 
                Stačí upravit věk a situaci.
              </p>
            </div>
            
            <Section title="Těžké rozhovory" icon={Heart} defaultOpen={true}>
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
            
            <Section title="Škola a učení" icon={BookOpen}>
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
            
            <Section title="Digitální hranice" icon={Smartphone}>
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
            
            <Section title="Emoce a konflikty" icon={Heart}>
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
            
            <Section title="Víra v rodině" icon={BookOpen}>
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
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Co je bezpečné a co ne</h2>
              <p className="text-gray-600">
                Ne všechna AI je stejná. Některé nástroje jsou užitečné, jiné jsou pro děti nebezpečné.
              </p>
            </div>
            
            <WarningBox>
              <strong>AI "přátelé" a companioni nejsou bezpečné pro děti pod 18 let.</strong>
              <p className="mt-1">Character.AI, Replika, Nomi a podobné aplikace jsou navrženy k vytváření emocionální závislosti. 
              Výzkumy ukazují, že správně reagují na krizové situace jen ve 22% případů.</p>
            </WarningBox>
            
            <Section title="🚫 Nebezpečné – NEPOUŽÍVAT" icon={AlertTriangle} defaultOpen={true}>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800">Character.AI</h4>
                  <p className="text-sm text-red-700">AI "přátelé" a postavy. Vytváří emocionální závislost, špatně reaguje na krizové situace, byly zaznamenány případy sexuálního obsahu a sebepoškozování.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800">Replika</h4>
                  <p className="text-sm text-red-700">AI "partner" nebo "přítel". Navrženo pro dospělé, ale děti ho často používají pro emocionální podporu.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-800">Snapchat My AI</h4>
                  <p className="text-sm text-red-700">Integrovaný chatbot v Snapchatu. Může poskytovat nevhodné odpovědi, děti ho používají jako "přítele".</p>
                </div>
              </div>
            </Section>
            
            <Section title="⚠️ Opatrně – s dohledem rodiče" icon={Shield}>
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-amber-800">ChatGPT, Claude, Gemini</h4>
                  <p className="text-sm text-amber-700">Obecné AI nástroje. Užitečné pro učení, ale vyžadují dohled. Mohou poskytnout nevhodný obsah při špatných otázkách.</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-amber-800">DALL-E, Midjourney</h4>
                  <p className="text-sm text-amber-700">Generování obrázků. Mohou vytvořit nevhodný obsah. Používat pouze s rodičem.</p>
                </div>
              </div>
            </Section>
            
            <Section title="✅ Bezpečnější možnosti" icon={Check}>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800">Khanmigo (Khan Academy)</h4>
                  <p className="text-sm text-green-700">Vzdělávací AI tutor. Navržený pro děti, s bezpečnostními omezeními. Nevyžaduje placení za základní funkce.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800">Duolingo</h4>
                  <p className="text-sm text-green-700">Učení jazyků s AI prvky. Bezpečné, zaměřené na vzdělávání.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800">AI v rodičovském účtu</h4>
                  <p className="text-sm text-green-700">Používejte AI (Claude, ChatGPT) pod svým účtem s dítětem vedle vás. Nejbezpečnější způsob.</p>
                </div>
              </div>
            </Section>
            
            <Section title="Varovné signály" icon={AlertTriangle}>
              <p className="text-gray-600 mb-4">Pozorujte své dítě. Znepokojivé může být, když:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Tráví hodiny chatováním s AI a skrývá to</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Mluví o AI "příteli" jako o reálné osobě</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Preferuje AI před lidskými vztahy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Je rozrušené, když nemůže používat AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Mění se jeho/její nálada nebo chování</span>
                </li>
              </ul>
            </Section>
          </div>
        )}
        
        {/* ZDROJE */}
        {activeTab === 'zdroje' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Další zdroje</h2>
              <p className="text-gray-600">
                Kam dál pro více informací a podpory.
              </p>
            </div>
            
            <Section title="Krizové linky" icon={Heart} defaultOpen={true}>
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-red-800">Linka bezpečí</h4>
                <p className="text-2xl font-bold text-red-700">116 111</p>
                <p className="text-sm text-red-600">Pro děti, mladé lidi a rodiče. Nonstop, zdarma.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800">Rodičovská linka</h4>
                <p className="text-2xl font-bold text-blue-700">606 021 021</p>
                <p className="text-sm text-blue-600">Podpora pro rodiče v těžkých situacích.</p>
              </div>
            </Section>
            
            <Section title="Doporučené články a weby" icon={ExternalLink}>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-generative-ai" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">
                    Common Sense Media: Průvodce AI pro rodiče
                  </a>
                  <p className="text-sm text-gray-600">Komplexní anglický průvodce od důvěryhodné organizace</p>
                </li>
                <li>
                  <a href="https://www.internetmatters.org/resources/parent-guide-to-artificial-intelligence-ai-tools/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">
                    Internet Matters: AI nástroje pro rodiče
                  </a>
                  <p className="text-sm text-gray-600">Praktické tipy pro bezpečné používání AI</p>
                </li>
                <li>
                  <a href="https://www.khanmigo.ai/parents" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-medium">
                    Khanmigo pro rodiče
                  </a>
                  <p className="text-sm text-gray-600">Bezpečný AI tutor pro děti</p>
                </li>
              </ul>
            </Section>
            
            <Section title="Knihy a podcasty" icon={BookOpen}>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-gray-800">Raising Christian Kids Podcast</span>
                  <p className="text-sm text-gray-600">Epizoda: "Faith-centered Parenting in the Age of AI"</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Courageous Parenting</span>
                  <p className="text-sm text-gray-600">Epizoda: "Christian Perspectives on AI"</p>
                </li>
              </ul>
            </Section>
            
            <Section title="Nástroje pro rodičovskou kontrolu" icon={Shield}>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium text-gray-800">Bark</span>
                  <p className="text-sm text-gray-600">Monitorování obsahu a alertů bez špehování</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Circle</span>
                  <p className="text-sm text-gray-600">Správa screen time a filtrování obsahu</p>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Google Family Link / Apple Screen Time</span>
                  <p className="text-sm text-gray-600">Vestavěné nástroje v telefonech</p>
                </li>
              </ul>
            </Section>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">Vytvořeno pro seminář "AI v křesťanské rodině"</p>
          <p>2025 • S láskou pro rodiče, kteří chtějí vést své děti moudře</p>
        </div>
      </footer>
    </div>
  );
}
