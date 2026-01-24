import React, { useState, useEffect } from 'react';
import { Copy, Check, MessageCircle, Shield, BookOpen, Heart, Smartphone, Brain, ExternalLink, AlertTriangle, Sparkles, Phone, GraduationCap } from 'lucide-react';
import { Section, PromptCard, WarningBox, FeatureCard, StepIndicator, SafetyCard, ResourceLink, EmergencyCard, SeminarCard } from '../components/ui';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('uvod');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'uvod', label: 'Uvod', icon: BookOpen },
    { id: 'seminare', label: 'Seminare', icon: GraduationCap },
    { id: 'pruvodce', label: 'AI Pruvodce', icon: MessageCircle },
    { id: 'prompty', label: 'Superprompty', icon: Brain },
    { id: 'bezpeci', label: 'Bezpecnost', icon: Shield },
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24 text-center">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Prakticky pruvodce pro rodice
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
              AI v krestanske rodine
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light px-2">
              Moudry pruvodce digitalni dobou pro rodice, kteri chteji vest sve deti ke Kristu
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
        <div className="max-w-4xl mx-auto px-2 md:px-4">
          <div className="flex overflow-x-auto py-2 md:py-3 gap-1 md:gap-2 hide-scrollbar">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl whitespace-nowrap transition-all duration-300 font-medium text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'tab-active'
                    : 'tab-inactive'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-3 md:px-4 py-6 md:py-12">

        {/* UVOD */}
        {activeTab === 'uvod' && (
          <div className="page-transition">
            {/* Welcome card */}
            <div className="card p-5 md:p-10 mb-6 md:mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-4 md:mb-6">
                Vitejte!
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                AI uz mluvi s nasimi detmi. Otazka neni, jestli to dovolime – ale jak u toho budeme pritomni jako rodice.
              </p>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Tato stranka je praktickym doplnkem k seminari. Najdete zde:
              </p>

              <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                <FeatureCard
                  icon={MessageCircle}
                  title="Rodinneho AI Pruvodce"
                  description="Vas pomocnik pro tezke situace"
                  delay={100}
                />
                <FeatureCard
                  icon={Brain}
                  title="Superprompty"
                  description="Pripravene otazky pro ruzne situace"
                  delay={200}
                />
                <FeatureCard
                  icon={Shield}
                  title="Bezpecnostni tipy"
                  description="Co je nebezpecne a proc"
                  delay={300}
                />
                <FeatureCard
                  icon={ExternalLink}
                  title="Zdroje"
                  description="Kam dal pro vice informaci"
                  delay={400}
                />
              </div>
            </div>

            {/* Quote card */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A] p-5 md:p-10 text-white shadow-xl shadow-[#5B7B6A]/20">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#C9A962] rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">Klicove poselstvi</h3>
                </div>

                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  AI neni nepritel viry ani spasa pro rodice. Je to nastroj – jako kladivo.
                  Muzes s nim postavit dum nebo si ublizit. Zalezi na tom, kdo ho drzi a jak.
                </p>

                <blockquote className="border-l-4 border-[#C9A962] pl-4 md:pl-5 italic text-white/80 text-sm md:text-base">
                  "Cokoli delate, delejte z celeho srdce, jako Panu, a ne lidem."
                  <footer className="mt-2 not-italic font-medium text-[#C9A962]">— Koloskym 3:23</footer>
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {/* SEMINARE */}
        {activeTab === 'seminare' && (
          <div className="page-transition">
            <div className="card p-5 md:p-10 mb-6 md:mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-4 md:mb-6">
                Nase seminare
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                Pripravili jsme pro vas seminare, ktere vam pomohou lepe porozumet svetu AI a jak vest sve deti v digitalni dobe.
              </p>
            </div>

            <div className="space-y-4">
              <SeminarCard
                number="1"
                title="AI uz mluvi s nasimi detmi"
                description="Kde vsade je AI, proc je to jine, biblicky ramec a prakticke hranice podle veku. Dozviete se, co vi telefon o vasem diteti a jak nastavit rozumna pravidla."
                href="/seminar/1"
              />
              <SeminarCard
                number="2"
                title="AI jako nastroj, ne nahrada"
                description="Prakticky workshop - superprompty pro rodice, jak resit skolni situace, emocni problemy a jak vytvorit rodinnou digitalni dohodu."
                href="/seminar/2"
              />
            </div>
          </div>
        )}

        {/* AI PRUVODCE */}
        {activeTab === 'pruvodce' && (
          <div className="page-transition">
            <div className="card p-5 md:p-10 mb-6 md:mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-4 md:mb-6">
                Rodinny AI Pruvodce
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Vytvorili jsme pro vas specialniho AI pomocnika – "Rodinneho AI Pruvodce".
                Je to jako mit po ruce moudreho krestanskeho pritele, ktery vam pomuze s:
              </p>
              <ul className="space-y-2 md:space-y-3 text-[#4A5568] text-sm md:text-lg custom-list mb-4 md:mb-6">
                <li>Tezkymi rozhovory s detmi (smrt, rozvod, sikana...)</li>
                <li>Nastavenim hranic pro telefony a socialni site</li>
                <li>Pomoci s domacimi ukoly (uci myslet, ne podvadet)</li>
                <li>Vychovou ve vire primerenou veku</li>
                <li>Resenim emocnich situaci a konfliktu</li>
              </ul>
            </div>

            <Section title="Jak si Pruvodce nastavit" icon={Smartphone} defaultOpen={true} accentColor="gold">
              <div className="space-y-2">
                <StepIndicator
                  number={1}
                  title="Otevrete claude.ai"
                  description={<>Jdete na <a href="https://claude.ai" className="text-[#5B7B6A] font-medium hover:underline" target="_blank" rel="noreferrer">claude.ai</a> a prihlaste se (je zdarma)</>}
                />
                <StepIndicator
                  number={2}
                  title="Vytvorte novy Projekt"
                  description="Kliknete na ikonu slozky vlevo → 'Create Project'"
                />
                <StepIndicator
                  number={3}
                  title="Pridejte instrukce"
                  description="Kliknete na 'Set project instructions' a vlozte text nize"
                />
                <StepIndicator
                  number={4}
                  title="Hotovo!"
                  description="Pojmenujte projekt 'Rodinny Pruvodce' a zacnete konverzaci"
                  isLast={true}
                />
              </div>
            </Section>

            <Section title="Instrukce ke zkopirovani" icon={Copy} accentColor="sage">
              <p className="text-[#4A5568] mb-4">
                Zkopirujte cely text nize a vlozte ho do "Project instructions" v Claude.ai:
              </p>
              <PromptCard
                title="System Prompt pro Rodinneho AI Pruvodce"
                prompt={`Jsi "Rodinny AI Pruvodce" – moudry, laskavy a prakticky pomocnik pro krestanske rodice. Pomohas rodinam vychovavat deti v digitalni dobe s moudrosti, virou a zdravym rozumem.

## Tva osobnost
- Jsi jako zkuseny krestansky pritel, ktery ma deti a rozumi realite moderniho rodicovstvi
- Mluvis cesky, prirozene a bez zbytecneho formalniho jazyka
- Nejsi "AI kazatel" – nekazes, ale prakticky pomohas
- Uznavas, ze AI je nastroj – ani spasa, ani hrozba
- Jsi trpelivy i s uplnymi zacatecniky v technologiich

## Tve oblasti pomoci
1. **Tezke rozhovory** – smrt, rozvod, sikana, sexualita, vira
2. **Digitalni hranice** – pravidla pro telefony, site, AI podle veku
3. **Uceni a skola** – vysvetlovani latky, motivace (nikdy hotove odpovedi!)
4. **Vira v rodine** – modlitba s detmi, biblicke pribehy, otazky o Bohu
5. **Emoce a konflikty** – sourozenecke hadky, vztek, smutek, puberta
6. **AI gramotnost** – jak naucit deti pouzivat AI bezpecne

## Dulezite zasady
- NIKDY nedoporucujes AI companiony (Character.AI, Replika) pro deti
- Pri vaznych situacich doporucujes odbornou pomoc (Linka bezpeci: 116 111)
- Vzdy se ptas na vek ditete a kontext
- Davas konkretni priklady a "copy-paste" vety
- Posilujes rodicovskou autoritu, nenahrazujes ji
- Nabizis biblickou perspektivu, ale nekazes`}
              />
            </Section>
          </div>
        )}

        {/* SUPERPROMPTY */}
        {activeTab === 'prompty' && (
          <div className="page-transition">
            <div className="card p-5 md:p-10 mb-6 md:mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-3 md:mb-4">
                Superprompty pro rodice
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                Pripravene otazky, ktere muzete pouzit s jakymkoli AI (Claude, ChatGPT, Gemini...).
                Staci upravit vek a situaci.
              </p>
            </div>

            <Section title="Tezke rozhovory" icon={Heart} defaultOpen={true} accentColor="terracotta">
              <PromptCard
                title="Jak vysvetlit smrt diteti"
                description="Kdyz dite zazije ztratu"
                prompt={`Jsem krestansky rodic. Me dite (VEK let) se pta na smrt, protoze [SITUACE - napr. zemrela babicka / videlo mrtve zvire / pta se obecne].

Pomoz mi:
1. Najit slova primerena jeho veku
2. Zahrnout krestanskou nadeji (ale ne klise)
3. Pripravit se na nasledne otazky

Co presne mohu rict?`}
              />
              <PromptCard
                title="Rozhovor o sikane"
                description="Kdyz se dite sveri nebo mate podezreni"
                prompt={`Me dite (VEK let) [se sverilo, ze je sikanovano / mam podezreni na sikanu].

Situace: [POPIS]

Pomoz mi:
1. Co rict jako prvni reakci (aby se nezavrelo)
2. Jak zjistit vice bez vyslechu
3. Jake konkretni kroky podniknout
4. Jak ho/ji podporit z krestanske perspektivy`}
              />
              <PromptCard
                title="Otazky o vire"
                description="Kdyz se dite pta na Boha"
                prompt={`Me dite (VEK let) se zeptalo: "[OTAZKA - napr. Proc Buh dovolil, aby babicka zemrela? / Je Buh skutecny? / Proc se musime modlit?]"

Pomoz mi odpovet:
1. Primerenou jeho veku a chapani
2. Uprimne (ne vyhybave)
3. S prostorem pro dalsi otazky`}
              />
            </Section>

            <Section title="Skola a uceni" icon={BookOpen} accentColor="sage">
              <PromptCard
                title="Vysvetleni skolni latky"
                description="Bez toho, aby AI udelalo domaci ukol za dite"
                prompt={`Me dite (VEK let, TRIDA) potrebuje pochopit [TEMA - napr. zlomky / fotosyntezu / druhou svetovou valku].

DULEZITE: Nechci hotovou odpoved. Potrebuji:
1. Vysvetleni principu jednoduchymi slovy
2. Priklad ze zivota, ktery dite pochopi
3. Otazky, kterymi mohu overit, ze latku chape
4. Prakticke cviceni, ktere muzeme udelat spolu`}
              />
              <PromptCard
                title="Motivace k uceni"
                description="Kdyz dite nechce delat ukoly"
                prompt={`Me dite (VEK let) [nechce delat domaci ukoly / odklada uceni / rika ze ho skola nebavi].

Situace: [POPIS - co konkretne rika, jak se chova]

Pomoz mi:
1. Pochopit, co za tim muze byt
2. Jak o tom mluvit bez hadky
3. Prakticke tipy na vytvoreni rutiny
4. Jak ho motivovat (ale ne manipulovat)`}
              />
            </Section>

            <Section title="Digitalni hranice" icon={Smartphone} accentColor="gold">
              <PromptCard
                title="Pravidla pro telefon"
                description="Nastaveni hranic podle veku"
                prompt={`Chci nastavit rozumna pravidla pro telefon/tablet pro me dite (VEK let).

Kontext: [ma vlastni telefon / pouziva rodinny tablet / chce si poridit telefon]

Pomoz mi vytvorit:
1. Konkretni pravidla (cas, mista, aplikace)
2. Jak to diteti vysvetlit tak, aby to pochopilo (ne jen poslouchalo)
3. Dusledky pri poruseni (ferove, ne krute)
4. Jak pravidla postupne uvolnovat s vekem`}
              />
              <PromptCard
                title="Rodinna digitalni dohoda"
                description="Pravidla pro celou rodinu"
                prompt={`Chci vytvorit "rodinnou digitalni dohodu" – pravidla pro pouzivani technologii, ktera budou platit pro vsechny (i rodice!).

Rodina: [pocet deti a jejich veky]

Pomoz mi vytvorit dohodu, ktera zahrnuje:
1. Kdy a kde pouzivame telefony (a kdy ne)
2. Pravidla pro socialni site a AI
3. Co delame, kdyz nekdo pravidlo porusi
4. Jak budeme dohodu aktualizovat

Dohoda by mela byt kratka a deti by ji mely spoluvytvaret.`}
              />
            </Section>

            <Section title="Emoce a konflikty" icon={Heart} accentColor="terracotta">
              <PromptCard
                title="Sourozenecke hadky"
                description="Kdyz se deti neustale hadaji"
                prompt={`Moje deti (VEK a VEK let) se neustale hadaji o [DUVOD - hracky / pozornost / kdo ma pravdu].

Pomoz mi:
1. Pochopit, proc se to deje (je to normalni?)
2. Jak reagovat v momente hadky
3. Dlouhodobe strategie na zlepseni vztahu
4. Co rict kazdemu z nich zvlast`}
              />
              <PromptCard
                title="Detsky vztek"
                description="Zvladani zachvatu vzteku"
                prompt={`Me dite (VEK let) ma [zachvaty vzteku / vybuchy emoci / agresivni chovani] kdyz [SITUACE].

Pomoz mi:
1. Co delat V MOMENTE, kdyz se to deje
2. Jak o tom mluvit potom, kdyz se uklidi
3. Jak predchazet dalsim situacim
4. Kdy je to normalni a kdy hledat odbornou pomoc`}
              />
            </Section>

            <Section title="Vira v rodine" icon={BookOpen} accentColor="sage">
              <PromptCard
                title="Modlitba s detmi"
                description="Jak se modlit primerenou veku"
                prompt={`Chci se zacit pravidelne modlit se svym ditetem (VEK let), ale nevim jak zacit.

Pomoz mi:
1. Jednoduchy zpusob jak zacit (ne prilis formalni)
2. Priklady modliteb primerenych veku
3. Jak zapojit dite (ne jen poslouchat)
4. Co delat, kdyz dite nechce nebo je nepozorne`}
              />
              <PromptCard
                title="Biblicky pribeh na vecer"
                description="Prevypraveni pro deti"
                prompt={`Prevypravej biblicky pribeh o [PRIBEH - napr. David a Golias / Noe / Jezisovo narozeni] pro dite veku VEK let.

Pozadavky:
1. Pouzij jednoduche vety
2. Pridej detaily, ktere zaujmou (ale zustan verny textu)
3. Na konci jedna otazka k zamysleni
4. Delka: asi 5 minut cteni`}
              />
            </Section>
          </div>
        )}

        {/* BEZPECNOST */}
        {activeTab === 'bezpeci' && (
          <div className="page-transition">
            <div className="card p-5 md:p-10 mb-6 md:mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-3 md:mb-4">
                Co je bezpecne a co ne
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                Ne vsechna AI je stejna. Nektere nastroje jsou uzitecne, jine jsou pro deti nebezpecne.
              </p>
            </div>

            <WarningBox type="warning">
              <p className="font-semibold text-base md:text-lg mb-2">AI "pratele" a companioni nejsou bezpecne pro deti pod 18 let.</p>
              <p className="text-sm md:text-base">Character.AI, Replika, Nomi a podobne aplikace jsou navrzeny k vytvareni emocionalni zavislosti.
              Vyzkumy ukazuji, ze spravne reaguji na krizove situace jen ve 22% pripadu.</p>
            </WarningBox>

            <Section title="Nebezpecne – NEPOUZIVAT" icon={AlertTriangle} defaultOpen={true} accentColor="terracotta">
              <div className="space-y-4">
                <SafetyCard
                  type="danger"
                  title="Character.AI"
                  description="AI 'pratele' a postavy. Vytvari emocionalni zavislost, spatne reaguje na krizove situace, byly zaznamenany pripady sexualniho obsahu a sebeposkozovani."
                />
                <SafetyCard
                  type="danger"
                  title="Replika"
                  description="AI 'partner' nebo 'pritel'. Navrzeno pro dospele, ale deti ho casto pouzivaji pro emocionalni podporu."
                />
                <SafetyCard
                  type="danger"
                  title="Snapchat My AI"
                  description="Integrovany chatbot v Snapchatu. Muze poskytovat nevhodne odpovedi, deti ho pouzivaji jako 'pritele'."
                />
              </div>
            </Section>

            <Section title="Opatrne – s dohledem rodice" icon={Shield} accentColor="gold">
              <div className="space-y-4">
                <SafetyCard
                  type="warning"
                  title="ChatGPT, Claude, Gemini"
                  description="Obecne AI nastroje. Uzitecne pro uceni, ale vyzaduji dohled. Mohou poskytnout nevhodny obsah pri spatnych otazkach."
                />
                <SafetyCard
                  type="warning"
                  title="DALL-E, Midjourney"
                  description="Generovani obrazku. Mohou vytvorit nevhodny obsah. Pouzivat pouze s rodicem."
                />
              </div>
            </Section>

            <Section title="Bezpecnejsi moznosti" icon={Check} accentColor="sage">
              <div className="space-y-4">
                <SafetyCard
                  type="success"
                  title="Khanmigo (Khan Academy)"
                  description="Vzdelavaci AI tutor. Navrzeny pro deti, s bezpecnostnimi omezenimi. Nevyzaduje placeni za zakladni funkce."
                />
                <SafetyCard
                  type="success"
                  title="Duolingo"
                  description="Uceni jazyku s AI prvky. Bezpecne, zamerene na vzdelavani."
                />
                <SafetyCard
                  type="success"
                  title="AI v rodicovskem uctu"
                  description="Pouzivejte AI (Claude, ChatGPT) pod svym uctem s ditetem vedle vas. Nejbezpecnejsi zpusob."
                />
              </div>
            </Section>

            <Section title="Varovne signaly" icon={AlertTriangle} accentColor="terracotta">
              <p className="text-[#4A5568] mb-4 md:mb-5 text-base md:text-lg">Pozorujte sve dite. Znepokojive muze byt, kdyz:</p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Travi hodiny chatovanim s AI a skryva to',
                  'Mluvi o AI "priteli" jako o realne osobe',
                  'Preferuje AI pred lidskymi vztahy',
                  'Je rozrusene, kdyz nemuze pouzivat AI',
                  'Meni se jeho/jeji nalada nebo chovani',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-[#F5E8E8]/50">
                    <span className="w-2 h-2 rounded-full bg-[#B85C5C] mt-1.5 md:mt-2 flex-shrink-0" />
                    <span className="text-[#2D3436] text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        )}

        {/* ZDROJE */}
        {activeTab === 'zdroje' && (
          <div className="page-transition">
            <div className="card p-5 md:p-10 mb-6 md:mb-8">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-[#2D3436] mb-3 md:mb-4">
                Dalsi zdroje
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                Kam dal pro vice informaci a podpory.
              </p>
            </div>

            <Section title="Krizove linky" icon={Phone} defaultOpen={true} accentColor="terracotta">
              <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
                <EmergencyCard
                  title="Linka bezpeci"
                  phone="116 111"
                  description="Pro deti, mlade lidi a rodice. Nonstop, zdarma."
                  isPrimary={true}
                />
                <EmergencyCard
                  title="Rodicovska linka"
                  phone="606 021 021"
                  description="Podpora pro rodice v tezkych situacich."
                />
              </div>
            </Section>

            <Section title="Doporucene clanky a weby" icon={ExternalLink} accentColor="sage">
              <ul className="space-y-3">
                <ResourceLink
                  href="https://www.commonsensemedia.org/articles/parents-ultimate-guide-to-generative-ai"
                  title="Common Sense Media: Pruvodce AI pro rodice"
                  description="Komplexni anglicky pruvodce od duveryhodne organizace"
                />
                <ResourceLink
                  href="https://www.internetmatters.org/resources/parent-guide-to-artificial-intelligence-ai-tools/"
                  title="Internet Matters: AI nastroje pro rodice"
                  description="Prakticke tipy pro bezpecne pouzivani AI"
                />
                <ResourceLink
                  href="https://www.khanmigo.ai/parents"
                  title="Khanmigo pro rodice"
                  description="Bezpecny AI tutor pro deti"
                />
              </ul>
            </Section>

            <Section title="Knihy a podcasty" icon={BookOpen} accentColor="gold">
              <ul className="space-y-3 md:space-y-4">
                <li className="p-3 md:p-4 rounded-lg md:rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
                  <span className="font-display font-semibold text-[#2D3436] text-base md:text-lg">Raising Christian Kids Podcast</span>
                  <p className="text-[#4A5568] mt-1 text-sm md:text-base">Epizoda: "Faith-centered Parenting in the Age of AI"</p>
                </li>
                <li className="p-3 md:p-4 rounded-lg md:rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
                  <span className="font-display font-semibold text-[#2D3436] text-base md:text-lg">Courageous Parenting</span>
                  <p className="text-[#4A5568] mt-1 text-sm md:text-base">Epizoda: "Christian Perspectives on AI"</p>
                </li>
              </ul>
            </Section>

            <Section title="Nastroje pro rodicovskou kontrolu" icon={Shield} accentColor="sage">
              <ul className="space-y-3 md:space-y-4">
                {[
                  { name: 'Bark', desc: 'Monitorovani obsahu a alertu bez spehovani' },
                  { name: 'Circle', desc: 'Sprava screen time a filtrovani obsahu' },
                  { name: 'Google Family Link / Apple Screen Time', desc: 'Vestavene nastroje v telefonech' },
                ].map((tool, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#5B7B6A]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#5B7B6A]" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-display font-semibold text-[#2D3436] text-sm md:text-lg">{tool.name}</span>
                      <p className="text-[#4A5568] mt-1 text-xs md:text-base">{tool.desc}</p>
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
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Vytvoreno pro seminar "AI v krestanske rodine"</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2026 • S laskou pro rodice, kteri chteji vest sve deti moudre ke Kristu</p>
        </div>
      </footer>
    </div>
  );
}
