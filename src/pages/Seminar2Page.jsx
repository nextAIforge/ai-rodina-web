import React, { useState, useEffect } from 'react';
import { MessageCircle, BookOpen, Heart, Shield, AlertTriangle, FileText, CheckCircle, XCircle, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, PromptCard, WarningBox, EmergencyCard } from '../components/ui';
import { BackButton, TableCard, InfoBox, InfographicCard } from '../components/ui/SeminarComponents';

export default function Seminar2Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7B6A] via-[#4A6B5A] to-[#3D5A4A]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <BackButton />
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-4">
              Seminář 2
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              AI jako nástroj, ne náhrada
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Praktický workshop – jak používat AI správně a jak řešit problémy, když už nastaly
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

        {/* Intro */}
        <div className="card p-5 md:p-8 mb-6">
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            V prvním semináři jsme mluvili o rizicích. Teď ukážeme, jak AI používat <strong>SPRÁVNĚ</strong>:
            ne jako chůvu, ne jako zpovědníka, ne jako náhradního rodiče, ale jako nástroj, který vám
            <strong> POMÁHÁ</strong> být lepšími rodiči.
          </p>
        </div>

        {/* BLOK 1: Jak použít AI jako pomocníka, ne náhradu */}
        <Section title="Blok 1: Jak použít AI jako pomocníka, ne náhradu" icon={MessageCircle} defaultOpen={true} accentColor="sage">

          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-4">Pravidlo #1: AI ti nemá nahradit rodičovství</h4>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-[#F5E8E8] border border-[#B85C5C]/20">
                <p className="text-[#8B4444] font-medium mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Povrchní použití
                </p>
                <p className="text-sm text-[#6B3A3A] italic">„Napiš mi, co mám říct dítěti."</p>
              </div>
              <div className="p-4 rounded-lg bg-[#EDF5F0] border border-[#5B7B6A]/20">
                <p className="text-[#3D5A4A] font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Zralé použití
                </p>
                <p className="text-sm text-[#4A6B5A] italic">„Pomoz mi připravit se na rozhovor. Ptej se mě na dítě, na vztah a na situaci. Pak se mnou natrénuj dvě verze rozhovoru a ukaž mi, co by dítě mohlo zranit."</p>
              </div>
            </div>

            <p className="text-[#4A5568] text-sm">
              <strong>Rozdíl:</strong> AI nemá vyrábět hotové věty místo tebe. Má ti pomoci zpomalit, doptat se, natrénovat rozhovor a odhalit slepá místa.
            </p>
          </div>

          <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-4">Jak má AI rodiči opravdu pomoci:</h4>
            <ol className="space-y-2 text-white/90">
              <li><strong>1. NEJPRVE SE PTEJ:</strong> ať AI nejdřív zjistí věk dítěte, vztah, citlivá místa a kontext</li>
              <li><strong>2. PAK SIMULUJ:</strong> ať AI zahraje dítě nebo teenagera a vyzkouší tvoje věty v praxi</li>
              <li><strong>3. UPOZORNI NA RIZIKA:</strong> ať pojmenuje, co je manipulativní, zraňující, moralistní nebo příliš tvrdé</li>
              <li><strong>4. NABÍDNI VÍCE CEST:</strong> ne jeden univerzální návod, ale 2–3 možné přístupy</li>
              <li><strong>5. RESPEKTUJ HRANICE:</strong> modlitbu, svědomí, autoritu a lásku rodiče AI nepřebírá</li>
              <li><strong>6. ZŮSTAŇ KONKRÉTNÍ:</strong> výstup musí být praktický, ne povrchně „hezký“</li>
            </ol>
          </div>

          <InfoBox type="warning">
            <strong>Pravidlo před každým promptem:</strong> Nedávej AI celé jméno dítěte, školu, adresu, intimní detaily,
            screenshoty cizích dětí ani rodinná tajemství, která bys neposlal cizímu člověku e-mailem.
          </InfoBox>

          <PromptCard
            title="Scénář #1: Nácvik těžkého rozhovoru"
            description="AI jako simulace dítěte a zrcadlo rodiče"
            prompt={`Jsem rodič a potřebuji se připravit na těžký rozhovor s dítětem.

Nechci, abys mi napsal hotový projev.
Chci, abys mi pomohl se připravit zrale a citlivě.

Nejdřív se mě zeptej maximálně na 8 stručných otázek:
- věk dítěte
- co se stalo
- jaký máme vztah
- čeho se dítě nejvíc bojí
- čeho se bojím já
- co už dítě ví
- co rozhodně nechci pokazit
- jestli jsme křesťanská rodina a jakou roli má víra

Potom:
1. shrň hlavní rizika mé komunikace
2. napiš mi 3 možné začátky rozhovoru: jemný, přímý, vztahový
3. zahraj dítě a reaguj realisticky
4. po každé mé odpovědi mi řekni, co bylo dobré a co mohlo dítě zranit
5. upozorni mě na věty, které zní manipulativně, studem nebo moralizováním

Chci nácvik, ne náhradu rodičovského rozhovoru.`}
          />

          <PromptCard
            title="Scénář #2: AI, která rodiče vyzpovídá kvůli učení"
            description="Ne jeden návod pro všechny, ale pomoc podle konkrétního dítěte"
            prompt={`Chci pomoct svému dítěti s učením doma.

Nechci univerzální návod.
Chci, abys mě nejdřív vyzpovídal a pak navrhl vhodný postup přesně pro moje dítě.

Nejdřív se mě ptej na:
1. věk a ročník dítěte
2. co mu jde a co mu nejde
3. jestli se učí lépe čtením, psaním, mluvením, pohybem, hrou nebo vizuálně
4. jak dlouho udrží pozornost
5. jestli se spíš blokuje, vzdává, nebo spěchá
6. jak reaguje na tlak a opravy
7. jaká je konkrétní látka nebo úkol
8. kolik máme času a pomůcek

Potom:
1. shrň, jaký učební styl je pro dítě pravděpodobně nejvhodnější
2. navrhni 3 verze práce: krátká, hravá a důkladná
3. napiš, jak mám látku vysvětlit já jako rodič
4. navrhni, jak může AI pomoci bez toho, aby úkol udělala za dítě
5. dej mi varování, co by dítě mohlo přetížit nebo znechutit

Výstup musí být praktický, jednoduchý a přizpůsobený konkrétnímu dítěti.`}
          />

          <PromptCard
            title="Scénář #3: Rozbor rodičovských vět"
            description="AI ukáže, které formulace dítě zraňují nebo zavírají"
            prompt={`Budu ti psát věty, které bych mohl říct svému dítěti v napjaté situaci.

Ty u každé věty udělej toto:
1. napiš, jak může ta věta znít v uších dítěte
2. řekni, jestli v ní je stud, manipulace, hrozba, moralizování nebo chaos
3. vysvětli, proč může zavřít vztah
4. navrhni lepší verzi, která zachová pravdu i autoritu rodiče
5. napiš, jak by asi reagovalo mladší dítě a jak teenager

Chci, aby ses choval jako trenér komunikace rodiče, ne jako generátor líbivých frází.`}
          />

          <PromptCard
            title="Scénář #4: Příprava rodiče na konflikt, který se vrací"
            description="AI pomůže najít vzorec, ne jen hasit poslední hádku"
            prompt={`Chci s tebou rozebrat opakující se konflikt doma.

Nechci, abys mi dal rychlou radu bez pochopení.
Nejdřív se mě ptej, abys odhalil vzorec.

Ptej se na:
- kdo je v konfliktu
- co bývá spouštěč
- co tomu obvykle předchází
- jak reaguji já
- co situaci zhoršuje
- co dítě potřebuje, ale neumí říct
- co je kázeňský problém a co je spíš bolest, únava nebo chaos

Potom:
1. rozliš, co je kořen problému a co jen povrchový projev
2. napiš mi, co mám řešit hned a co dlouhodobě
3. navrhni, jak s dítětem mluvit po konfliktu
4. ukaž mi, kde jako rodič nechtěně přiléváme olej do ohně
5. dej mi krátký plán na jeden týden

Nechci instantní psychologii. Chci poctivý rozbor situace.`}
          />

          <div className="mt-6 p-5 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
            <h4 className="font-display font-semibold text-[#8B6B22] mb-3">Pravidla pro práci s AI:</h4>
            <ul className="space-y-2 text-sm text-[#6B5522]">
              <li><strong>1. AI NENÍ TERAPEUT</strong> - Když je problém vážný, AI pomůže připravit se na rozhovor, ale POTŘEBUJEŠ odborníka.</li>
              <li><strong>2. AI NEZNÁ TVOJE DÍTĚ</strong> - Ty ho znáš. AI dává všeobecné rady. Ty je filtruješ přes znalost svého dítěte.</li>
              <li><strong>3. AI SE MŮŽE MÝLIT</strong> - Kritické myšlení. Pokud ti něco nesedí, nevěř tomu jen proto že to řekla AI.</li>
              <li><strong>4. AI JE START, NE CÍL</strong> - AI ti pomůže připravit se. Ale rozhovor vedeš TY. Objetí dáváš TY. Přítomný jsi TY.</li>
              <li><strong>5. AI NENÍ ZPOVĚDNÍK</strong> - Neříkej jí to, co nechceš ukládat, sdílet nebo jednou vysvětlovat cizímu člověku.</li>
              <li><strong>6. MODLITBA NENÍ PRODUKT AI</strong> - Modlitba je vztah s Bohem a výraz srdce. AI může maximálně pomoci rodiči ujasnit si myšlenky, ale modlit se za tebe nemá.</li>
            </ul>
          </div>
        </Section>

        {/* BLOK 2: Skolni situace */}
        <Section title="Blok 2: Škola a učení" icon={BookOpen} accentColor="gold">

          <WarningBox type="warning">
            <p className="font-semibold mb-2">Realita podvádění:</p>
            <p className="text-sm">
              Podle Common Sense Media z <strong>18. září 2024</strong> použilo aspoň jeden generativní AI nástroj
              <strong> 70 % teenagerů</strong>. <strong>40 %</strong> ho využilo při školní práci a
              <strong> 46 %</strong> z nich to udělalo bez svolení učitele. Jen <strong>37 % rodičů</strong>, jejichž dítě AI skutečně používalo,
              si myslelo, že jejich dítě AI používá. A <strong>49 % rodičů</strong> se o AI se svým dítětem vůbec nebavilo.
            </p>
          </WarningBox>

          <InfographicCard
            title="AI ve škole: realita, ne výjimka"
            description="Když rodina nemá pravidla, dítě si je vytvoří samo. A většinou podle pohodlí, ne podle poctivosti."
            src="/infographics/seminar2-school-chart.svg"
            alt="Infografika s daty o používání AI teenagery ve škole"
          />

          <TableCard
            title="Dva typy použití AI ve škole"
            headers={['Podvádění', 'Učení']}
            rows={[
              ['"Napiš mi esej o 2. světové válce"', '"Vysvětli mi příčiny 2. světové války jednoduše"'],
              ['"Vyřeš tuto rovnici"', '"Ukaž mi postup řešení této rovnice krok za krokem"'],
              ['"Napiš mi referát"', '"Jaká by měla být struktura referátu o tomto tématu?"'],
              ['AI dělá práci ZA dítě', 'AI pomáhá dítěti POCHOPIT'],
            ]}
          />

          <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <p className="font-display font-bold text-lg mb-2">Pravidlo pro děti:</p>
            <p className="text-white/90">"AI je TUTOR, ne AUTOR. Můžeš se ho ptát. Nemůže za tebe psát."</p>
          </div>

          <InfoBox type="info">
            <strong>Další tvrdé pravidlo:</strong> Když dítě neumí vlastními slovy vysvětlit, co odevzdalo, není to jeho práce.
            A když rodič neví, jaké nástroje dítě používá, pravidla zatím ve skutečnosti neexistují.
          </InfoBox>

          <PromptCard
            title="Adaptivní prompt pro domácí úkoly"
            description="Nejprve poznat dítě, potom navrhnout způsob učení"
            prompt={`Pomoz mi nastavit pomoc s domácím úkolem pro konkrétní dítě.

Nejdřív zjisti:
1. kolik je dítěti let a co je za předmět
2. co přesně mu nejde
3. jestli se učí lépe čtením, přepisováním, mluvením, obrázky, pohybem nebo hrou
4. jestli potřebuje krátké kroky, soutěž, klid, nebo vedení otázkami
5. co už zkoušelo a co nefungovalo

Pak:
1. navrhni nejvhodnější způsob vysvětlení pro tohle dítě
2. dej mi 2–3 varianty práce: rychlou, hravou a důkladnou
3. napiš, co mám dělat já jako rodič a co může dělat AI
4. dávej jen malé kroky a po každém kroku zkontroluj porozumění
5. nikdy neřeš úkol za dítě, ale pomáhej mu dojít k odpovědi

Mluv jednoduše a prakticky. Žádné obecné fráze.`}
          />

          <TableCard
            title="Jak rozpoznat že dítě podvádí"
            headers={['Signál', 'Co to může znamenat']}
            rows={[
              ['Náhlé zlepšení písemného projevu', 'Text nevznikal běžným způsobem'],
              ['Neví vysvětlit co napsalo', 'Nerozumí vlastní úloze'],
              ['Používá slova která běžně nepoužívá', 'Převzatý nebo přegenerovaný text'],
              ['Úloha je "příliš dokonalá"', 'Chybí osobní styl a přemýšlení dítěte'],
              ['Nervozita když se ptáš na detaily', 'Ví, že proces nebyl poctivý'],
            ]}
          />

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <h4 className="font-display font-semibold text-[#8B4444] mb-3">Co NEDĚLAT když přichytíš:</h4>
              <ul className="space-y-1.5 text-sm text-[#6B3A3A]">
                <li>• Okamžitý křik</li>
                <li>• "Jsi podvodník"</li>
                <li>• Trest bez rozhovoru</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <h4 className="font-display font-semibold text-[#3D5A4A] mb-3">Co DĚLAT:</h4>
              <ul className="space-y-1.5 text-sm text-[#4A6B5A]">
                <li>• Zeptej se otevřeně: "Tato úloha vypadá jinak. Pověz mi jak jsi to dělal?"</li>
                <li>• Vysvětli PROČ je to problém</li>
                <li>• Ukaž správný způsob</li>
              </ul>
            </div>
          </div>

          <PromptCard
            title="Prompt pro rodiče - pomoc s úlohou"
            description="Když sám nevíš jak něco vysvětlit"
            prompt={`Můj syn (10 let) má domácí úlohu z matematiky: [zadání].
Já sám nevím jak to vysvětlit jednoduše.

Potřebuji:
1. Vysvětlení pro mě (dospělého) - co je princip
2. Jak to vysvětlit 10letému - jednoduchý jazyk
3. Praktický příklad ze života
4. Jaké chyby děti často dělají
5. Jak ověřit že pochopil

NECHCI hotové řešení. Chci vědět jak ho naučit.`}
          />

          <div className="mt-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Co říct dítěti o ověřování odpovědí AI</h4>
            <ul className="space-y-2 text-sm text-[#4A5568]">
              <li>• „Ukaž mi zdroj nebo mi řekni, odkud to bereš."</li>
              <li>• „Řekni mi i druhou možnost nebo protiargument."</li>
              <li>• „Co si nejsi jistá?"</li>
              <li>• „Teď mi to vysvětli tak, jako bys to měl učit mladšího sourozence."</li>
            </ul>
          </div>

          <div className="mt-6 p-5 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Triky pro rodiče, které už dnes dávají smysl</h4>
            <ul className="space-y-2 text-sm text-[#4A5568]">
              <li>• Nech AI rodiče nejdřív vyzpovídat, než začne radit.</li>
              <li>• Nech AI simulovat dítě různého věku a temperamentu.</li>
              <li>• Požádej AI, aby označila věty, které zní tvrdě, chaoticky nebo studem.</li>
              <li>• U učení nech AI nabídnout více cest podle stylu dítěte, ne jednu „správnou“ metodu.</li>
              <li>• Vždy chtěj krátké kroky, kontrolu porozumění a alternativní přístup, když první selže.</li>
            </ul>
          </div>

          <InfographicCard
            title="AI je tutor, ne autor"
            description="Dva rozdílné procesy. Jeden buduje porozumění, druhý jen vyrábí hotový text."
            src="/infographics/seminar2-tutor-not-author.svg"
            alt="Rozhodovací infografika tutor versus autor při použití AI"
          />
        </Section>

        {/* BLOK 3: Emocni situace */}
        <Section title="Blok 3: Emoční situace" icon={Heart} accentColor="terracotta">

          <InfoBox type="info">
            <strong>Klíčový princip:</strong> AI ti pomůže PŘIPRAVIT se na rozhovor. Ale rozhovor vedeš TY. Objetí dává TY. Přítomný je TY.
          </InfoBox>

          <WarningBox type="warning">
            <p className="text-sm">
              Hodnocení Common Sense Media a Stanford Brainstorm Lab z <strong>20. listopadu 2025</strong> ukázalo,
              že velké chatboty opakovaně selhávají u úzkosti, deprese, poruch příjmu potravy, mánie a psychózy.
              Čím déle dítě řeší psychiku s AI místo s člověkem, tím větší je riziko špatné a sebejistě podané rady.
            </p>
          </WarningBox>

          <div className="space-y-6">
            {/* Situace 1: Hněv */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C4785A]/10 flex items-center justify-center text-[#C4785A]">1</span>
                Dítě je nahněvané
              </h4>

              <TableCard
                headers={['V MOMENTĚ', 'POTOM', 'DLOUHODOBĚ']}
                rows={[
                  ['Zůstaň pokojný (ty)', '"Vidím že jsi byl velmi nahněvaný"', 'Identifikuj triggery'],
                  ['Méně slov, ne přednášky', '"Co se stalo těsně předtím?"', 'Nauč pojmenovat emoce'],
                  ['"Vidím že jsi nahněvaný. Jsem tu."', '"Co můžeme udělat příště?"', 'Pravidelný rozhovor o emocích'],
                ]}
              />

              <div className="mt-4 p-3 rounded-lg bg-[#F5E8E8]">
                <p className="text-[#8B4444] text-sm font-medium mb-2">Co NEŘÍKAT:</p>
                <p className="text-[#6B3A3A] text-sm">"Přestaň!" (neví přestat) | "Co to má být?!" (hanba) | "Chovej se jako velký!" (negace emoce)</p>
              </div>
            </div>

            {/* Situace 2: Smutek */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#5B7B6A]/10 flex items-center justify-center text-[#5B7B6A]">2</span>
                Dítě je smutné
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#F5E8E8]">
                  <p className="text-[#8B4444] text-sm font-medium mb-2">Ne:</p>
                  <p className="text-[#6B3A3A] text-sm">"Co se děje? Proč jsi smutný? Pověz mi!"</p>
                </div>
                <div className="p-3 rounded-lg bg-[#EDF5F0]">
                  <p className="text-[#3D5A4A] text-sm font-medium mb-2">Ano:</p>
                  <p className="text-[#4A6B5A] text-sm">"Všiml jsem si že jsi poslední dny tišší. Nemusíš mi nic říkat. Ale jsem tu. Kdykoliv."</p>
                </div>
              </div>

              <p className="text-[#4A5568] text-sm mb-3"><strong>Otázky které otevírají:</strong></p>
              <ul className="space-y-1 text-sm text-[#4A5568]">
                <li>• "Jak se ti dnes ve škole dařilo? Co bylo nejlepší? Co nejhorší?"</li>
                <li>• "Je něco co ti jde hlavou v noci před spaním?"</li>
                <li>• "Kdybys měl jedno přání - co by to bylo?"</li>
              </ul>
            </div>

            {/* Situace 3: Osamělost */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C9A962]/15 flex items-center justify-center text-[#9A7B3C]">3</span>
                Dítě je osamělé
              </h4>

              <WarningBox type="danger">
                <p className="text-sm">Pokud je dítěti snadněji mluvit s AI než s lidmi - máš problém. Ale ne dítě. Problém je že lidé jsou těžší než AI. A dítě nikdo nenaučil jak.</p>
              </WarningBox>

              <p className="text-[#4A5568] text-sm mb-3"><strong>Řešení NENÍ:</strong> Zakázat telefon | "Jdi si hrát ven" | "Co je s tebou?"</p>

              <p className="text-[#4A5568] text-sm mb-2"><strong>Řešení JE:</strong></p>
              <ul className="space-y-1 text-sm text-[#4A5568]">
                <li>• <strong>Prostředí kde MUSÍ interagovat:</strong> Kroužky, sport, tábory - ne online, fyzicky</li>
                <li>• <strong>Nauč zručnosti:</strong> Jak začít rozhovor, jak reagovat když neví co říct</li>
                <li>• <strong>Tvoje přítomnost:</strong> Ty buď ten s kým je snadné být</li>
              </ul>
            </div>

            {/* Situace 4: Strach */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C4785A]/10 flex items-center justify-center text-[#C4785A]">4</span>
                Dítě se bojí (spát samo, tmy...)
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-[#F5E8E8]">
                  <p className="text-[#8B4444] text-sm font-medium mb-2">Co NEFUNGUJE:</p>
                  <ul className="text-[#6B3A3A] text-sm space-y-1">
                    <li>• "Neboj se, příšery neexistují"</li>
                    <li>• "Jsi už velký/á"</li>
                    <li>• "Ostatní děti se nebojí"</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-[#EDF5F0]">
                  <p className="text-[#3D5A4A] text-sm font-medium mb-2">Co FUNGUJE:</p>
                  <ul className="text-[#4A6B5A] text-sm space-y-1">
                    <li>• Uznej strach: "Vidím že se bojíš. To je v pořádku."</li>
                    <li>• Dej kontrolu: "Co by ti pomohlo?"</li>
                    <li>• Rituál: Stejný každý večer</li>
                    <li>• Modlitba: "Bože, chraň dceru když spí."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Situace 5: Trauma z online */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#B85C5C]/10 flex items-center justify-center text-[#B85C5C]">5</span>
                Dítě vidělo něco online co ho traumatizovalo
              </h4>

              <p className="text-[#4A5568] text-sm mb-3"><strong>Správná reakce:</strong></p>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li>• "Děkuji že jsi mi to pověděl." (ne "Co jsi dělal na internetu?!")</li>
                <li>• "Není to tvoje chyba." (často najdou náhodou)</li>
                <li>• "Chceš mi povědět co jsi viděl?" (bez tlaku)</li>
                <li>• "Některé věci na internetu nejsou pro děti. Ne proto že jsi špatný, ale proto že tvůj mozek není připraven."</li>
                <li>• "Když uvidíš něco co ti je nepříjemné, vždy přijď za mnou. Nebudu se hněvat. Nikdy."</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* BLOK 4: Rodinna zmluva */}
        <Section title="Blok 4: Rodinná digitální dohoda" icon={FileText} accentColor="gold">

          <TableCard
            headers={['Pravidla', 'Dohoda']}
            rows={[
              ['Rodič diktuje', 'Rodina se dohodne'],
              ['Dítě musí poslouchat', 'Dítě se zavazuje'],
              ['Jednostranná', 'Oboustranná'],
              ['Můžu změnit kdykoliv', 'Měníme společně'],
              ['Platí pro dítě', 'Platí pro VŠECHNY'],
            ]}
          />

          <InfoBox type="warning">
            Pokud telefon u jídla je zakázaný pro dítě ale ne pro tebe - není to pravidlo, je to pokrytectví.
          </InfoBox>

          <div className="my-6 p-5 rounded-xl bg-[#FAF8F5] border-2 border-dashed border-[#E8E4DE]">
            <h4 className="font-display font-bold text-[#2D3436] text-lg mb-4 text-center">ŠABLONA RODINNÉ DIGITÁLNÍ DOHODY</h4>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">ČÁST 1: Pravidla pro VŠECHNY (i rodiče)</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Žádné telefony při jídle</li>
                  <li>☐ Telefony se nabíjí v _________ od _____</li>
                  <li>☐ Prvních ____ minut po příchodu domů - bez obrazovek</li>
                  <li>☐ Když někdo mluví, díváme se na něj - ne na telefon</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">ČÁST 2: Pravidla pro dítě</p>
                <p className="text-[#7A7A7A] text-xs mb-2">Jméno: _____________ Věk: ____</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Max. čas denně (školní den): _____ hodin</li>
                  <li>☐ Max. čas denně (víkend): _____ hodin</li>
                  <li>☐ Telefon se odkládá o _____ (večer)</li>
                  <li>☐ Tyto appky jsou povolené: _________________</li>
                  <li>☐ Tyto appky jsou zakázané: _________________</li>
                  <li>☐ AI chatboty na "přátelství" jsou zakázané</li>
                  <li>☐ AI smím používat na UČENÍ, ne na psaní za mě</li>
                  <li>☐ Nesmím nahrávat cizí fotky do AI bez souhlasu</li>
                  <li>☐ Nesmím vytvářet fake nudes, deepfake fotky ani klon hlasu</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">ČÁST 3: Důsledky</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>Když poruším pravidlo poprvé: → _____________</li>
                  <li>Když poruším pravidlo podruhé: → _____________</li>
                  <li>Když poruším pravidlo opakovaně: → _____________</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">ČÁST 4: Práva dítěte</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Mám právo na soukromí přiměřené věku</li>
                  <li>☐ Mám právo vědět PROČ existuje pravidlo</li>
                  <li>☐ Mám právo požádat o změnu pravidla (rozhovorem)</li>
                  <li>☐ Mám právo říct když rodič poruší pravidlo</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">ČÁST 5: Závazky rodičů</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Budeme dodržovat pravidla která platí pro všechny</li>
                  <li>☐ Nebudeme kontrolovat tajně - zeptáme se</li>
                  <li>☐ Když přijdeš s problémem, nebudeme křičet</li>
                  <li>☐ Vysvětlíme PROČ, ne jen "protože jsem řekl"</li>
                  <li>☐ Tuto dohodu přehodnotíme každé ____ měsíce</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E4DE] text-center">
                <p className="text-[#4A5568] mb-2">PODPISY:</p>
                <p className="text-[#7A7A7A] text-xs">_________ (rodič)  _________ (rodič)  _________ (dítě)</p>
                <p className="text-[#7A7A7A] text-xs mt-2">Datum: _________</p>
              </div>
            </div>
          </div>

          <TableCard
            title="Když dítě protestuje"
            headers={['Protest', 'Odpověď']}
            rows={[
              ['"Proč JÁ?"', '"Pravidla platí pro všechny. I pro mě. Podívej - tu je napsané."'],
              ['"Nikdo jiný to nemá"', '"My nejsme jiní. A mně záleží na tobě, ne na jiných."'],
              ['"Je to hloupé"', '"Co konkrétně ti překáží? Vysvětli mi to."'],
              ['"Nevěříš mi"', '"Věřím ti. Ale nevěřím algoritmu, který je navržený, aby tě manipuloval a držel déle uvnitř."'],
            ]}
          />

          <InfographicCard
            title="Rodinná digitální dohoda"
            description="Dohoda funguje, když je jasná, krátká a platí i pro rodiče."
            src="/infographics/seminar2-family-agreement.svg"
            alt="Myšlenková mapa rodinné digitální dohody"
          />
        </Section>

        {/* BLOK 5: Zachrana */}
        <Section title="Záchrana: Když už je problém" icon={Shield} accentColor="terracotta">

          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <p className="text-[#4A5568] mb-4">
              Realita se kterou rodiče přicházejí: Dítě už má telefon roky. Už jsou tam zlozvyky. Už byly hádky.
              Už ztratili přehled. Už nemají energii. Už se cítí jako špatní rodiče.
            </p>
            <p className="font-semibold text-[#2D3436]">Nepotřebují mrakodrap. Potřebují zalepit díru ve stresu.</p>
          </div>

          <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#F5E8E8] to-[#FDF5F5] border border-[#B85C5C]/20">
            <h4 className="font-display font-semibold text-[#8B4444] mb-3">České varování pro rodiče</h4>
            <p className="text-sm text-[#6B3A3A] mb-3">
              Linka bezpečí v roce <strong>2025</strong> řešila <strong>1 641 kontaktů</strong> kvůli problémům na internetu,
              což je meziročně o <strong>40 % více</strong>. Patřily sem kyberšikana, fake nudes, kyberstalking a sexting.
            </p>
            <p className="text-sm text-[#6B3A3A]">
              Sebevražedná tematika navíc vzrostla o dalších <strong>25 %</strong> na <strong>7 314 kontaktů</strong>.
              Jestli dítě mluví o beznaději, smrti nebo se uzavírá do AI a obrazovky, není čas čekat.
            </p>
          </div>

          <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-3">Jedna věc kterou můžeš změnit DNES:</h4>
            <p className="text-xl font-semibold text-[#C9A962] mb-3">"Telefony spí mimo ložnici."</p>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• Největší škody se dějí v noci</li>
              <li>• AI chatboty, doom scrolling, pornografie, sexting - všechno po 22:00</li>
              <li>• Dítě samo neví přestat - mozek to nedokáže</li>
              <li>• Jak zavést: Kup nabíječku do obýváku. Řekni "Od dnes telefony spí tady. Všechny. I můj."</li>
            </ul>
          </div>

          <TableCard
            title="Červené vlajky které nesmíš ignorovat"
            headers={['Vidíš', 'Může znamenat', 'Co udělat']}
            rows={[
              ['Skrývá telefon když přijdeš', 'Něco co nechce abys viděl', 'Rozhovor, ne kontrola'],
              ['Extrémní reakce když nemá telefon', 'Závislost', 'Postupné snižování, možná odborník'],
              ['Nespí, je stále unavený', 'Noční používání', 'Telefon mimo ložnici'],
              ['Náhle nový "kamarád" o kterém nevíš', 'Online vztah', 'Zjisti víc bez paniky'],
              ['Mluví o AI jako o jediném, kdo mu rozumí', 'Vztahové stažení a přesun důvěry', 'Okamžitě vstup do vztahu, ne do hádky'],
              ['Kolují fotky, memy nebo "sranda" obrázky z AI', 'Deepfake ponižování nebo vydírání', 'Důkazy, škola, rodiče, policie'],
              ['Změna nálady, stažení se', 'Deprese, problém', 'Rozhovor, možná odborník'],
              ['Mluví o beznaději, smrti', 'Sebevražedné myšlenky', 'OKAMŽITĚ - odborná pomoc'],
            ]}
          />

          <div className="my-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Co udělat tento týden:</h4>
            <ul className="space-y-2 text-[#4A5568]">
              <li><strong>Pondělí:</strong> Jeden společný oběd/večeře bez telefonu. Jen jednou. Jen zkusit.</li>
              <li><strong>Úterý:</strong> Zeptej se: "Co teď sleduješ? Co tě baví?" Jen zájem, ne kontrola.</li>
              <li><strong>Středa:</strong> Telefony mimo ložnici v noci. Začni od sebe.</li>
              <li><strong>Čtvrtek:</strong> 15 minut společné aktivity. Bez obrazovky. Cokoliv.</li>
              <li><strong>Pátek:</strong> Řekni: "Vím že nejsem dokonalý rodič. Ale záleží mi na tobě. Kdybys něco potřeboval, přijdeš?"</li>
            </ul>
          </div>

          <TableCard
            title="Věty které fungují"
            headers={['Namísto', 'Řekni']}
            rows={[
              ['"Dej pryč ten telefon!"', '"Potřebuji tvou pozornost na 5 minut. Potom můžeš pokračovat."'],
              ['"Co tam pořád děláš?!"', '"Co zajímavého sleduješ? Ukážeš mi?"'],
              ['"To je škodlivé!"', '"Proč ti to líbí? Co ti to dává?"'],
              ['"Dokud ti nebude 18, budu kontrolovat!"', '"Chci ti důvěřovat. Pomoz mi vědět že můžu."'],
            ]}
          />

          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 my-6">
            <EmergencyCard
              title="Linka bezpečí"
              phone="116 111"
              description="Pro děti, mladé lidi i rodiče. Nonstop, zdarma. V roce 2025 řešila prudký nárůst online problémů."
              isPrimary={true}
            />
            <EmergencyCard
              title="Rodičovská linka"
              phone="606 021 021"
              description="Podpora pro rodiče v těžkých situacích"
            />
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-[#C9A962] to-[#9A7B3C] text-white">
            <h4 className="font-display font-bold text-lg mb-3">Pro rodiče kteří se cítí bezmocně:</h4>
            <p className="text-white/90 mb-4">
              <strong>Nejste špatní rodiče.</strong> Nikdo vás na tohle nepřipravil. Technologie jde rychleji než kdokoliv stíhá.
              Vaši rodiče neřešili nic z toho. Snažíte se - to je víc než nic.
            </p>
            <p className="font-semibold">Nepotřebujete být dokonalí. Potřebujete být přítomní.</p>
          </div>
        </Section>

        {/* Závěr */}
        <Section title="Závěr" icon={Home} accentColor="sage">
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white mb-6">
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              AI je nástroj. Kladivo může postavit dům i rozbít lebku. Záleží kdo ho drží.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Vy držíte víc než kladivo. <strong>Držíte vztah.</strong> A vztah vždy vyhrává.
            </p>
            <p className="text-[#C9A962] font-semibold text-lg">
              Jděte domů. Odložte telefony. Dívejte se na své děti. Poslouchejte je. Buďte přítomní.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] text-center">
            <p className="text-[#2D3436] font-display font-semibold text-lg mb-2">
              To je jediná věc kterou AI nikdy nedokáže.
            </p>
            <p className="text-[#4A5568]">
              Jeden rozhovor. Jeden společný večer. Jeden pohled do očí a ideálně krátká společná modlitba.
              <br />To není málo. To je začátek.
            </p>
          </div>

          {/* Link to future */}
          <Link
            to="/seminar/priprava"
            className="mt-6 flex items-center justify-between p-5 rounded-xl bg-gradient-to-br from-[#C4785A] to-[#8B4444] text-white hover:opacity-95 transition-opacity group"
          >
            <div>
              <p className="text-white/70 text-sm mb-1">Pokračovat dál</p>
              <p className="font-display font-bold text-lg">Na co se připravit</p>
              <p className="text-white/80 text-sm">Pohled do budoucnosti – za 5 let</p>
            </div>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Seminář „AI jako nástroj, ne náhrada"</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2026 • S láskou pro rodiče</p>
        </div>
      </footer>
    </div>
  );
}
