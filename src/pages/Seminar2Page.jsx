import React, { useState, useEffect } from 'react';
import { MessageCircle, BookOpen, Heart, Shield, AlertTriangle, FileText, CheckCircle, XCircle, Home } from 'lucide-react';
import { Section, PromptCard, WarningBox, EmergencyCard } from '../components/ui';
import { BackButton, TableCard, InfoBox } from '../components/ui/SeminarComponents';

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
            V prvním semináři jsme mluvili o rizicích. Teď ukážeme, jak AI používat <strong>SPRÁVNĚ</strong> – jako nástroj, který vám <strong>POMÁHÁ</strong> být lepšími rodiči.
          </p>
        </div>

        {/* BLOK 1: Superprompty */}
        <Section title="Blok 1: Jak se správně ptát AI" icon={MessageCircle} defaultOpen={true} accentColor="sage">

          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-4">Pravidlo #1: Jak se ptát</h4>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-[#F5E8E8] border border-[#B85C5C]/20">
                <p className="text-[#8B4444] font-medium mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Špatný prompt
                </p>
                <p className="text-sm text-[#6B3A3A] italic">„Pověz mi něco o zlomcích"</p>
              </div>
              <div className="p-4 rounded-lg bg-[#EDF5F0] border border-[#5B7B6A]/20">
                <p className="text-[#3D5A4A] font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Dobrý prompt
                </p>
                <p className="text-sm text-[#4A6B5A] italic">„Můj syn (9 let) nechápe zlomky. Neumí si představit, co je 3/4. Vysvětli mi to pomocí pizzy – něco, co mu můžu fyzicky ukázat."</p>
              </div>
            </div>

            <p className="text-[#4A5568] text-sm">
              <strong>Rozdíl:</strong> Věk dítěte, konkrétní problém, kontext, co chceš (pochopit vs hotová odpověď)
            </p>
          </div>

          <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-4">Anatomie dobrého promptu:</h4>
            <ol className="space-y-2 text-white/90">
              <li><strong>1. KDO:</strong> Můj syn/dcera [věk]</li>
              <li><strong>2. CO:</strong> má problém s [konkrétně]</li>
              <li><strong>3. KONTEXT:</strong> situace je [detaily]</li>
              <li><strong>4. ČEHO SE BOJÍM:</strong> [tvoje obavy]</li>
              <li><strong>5. CO CHCI:</strong> pomoz mi [konkrétní požadavek]</li>
              <li><strong>6. CO NECHCI:</strong> nedávej mi [co nechceš]</li>
            </ol>
          </div>

          <PromptCard
            title="Superprompt #1: Těžký rozhovor (rozvod)"
            description="Když musíš dítěti říct o rozvodu"
            prompt={`Můj syn má 8 let. S manželkou se rozvedeme. Musím mu to říct tento víkend.

On má velmi blízký vztah s oběma rodiči. Bojím se že bude mít pocit že je to jeho chyba.
Bojím se že se uzavře.

Pomoz mi:
1. Jak začít ten rozhovor
2. Přesné věty které můžu použít
3. Co NEŘÍKAT
4. Jak reagovat když se rozpláče
5. Jak reagovat když se nahněvá
6. Co dělat následující dny

Chci být upřímný ale nechci ho zahltit detaily které nepotřebuje vědět.`}
          />

          <PromptCard
            title="Superprompt #2: Vysvětlení smrti"
            description="Když zemřela babička a dítě se ptá"
            prompt={`Dcera (6 let) se ptá proč babička zemřela.
Babička zemřela na rakovinu před 3 dny.
Dcera ji velmi milovala, navštěvovali jsme ji každý týden.

Jsme křesťanská rodina. Věříme v nebe.
Ale dcera se bojí - ptá se jestli já taky zemřu.

Potřebuji:
1. Jednoduché vysvětlení smrti pro 6letou
2. Jak propojit s naší vírou (bez klišé)
3. Co říct na "ty taky zemřeš?"
4. Konkrétní věty - copy-paste
5. Co NEŘÍKAT (např. "zaspala" - bojí se pak spát)`}
          />

          <PromptCard
            title="Superprompt #3: Digitální hranice"
            description="Když dítě chce TikTok a všichni ho mají"
            prompt={`Syn (12 let) chce TikTok.
Argumentuje že všichni spolužáci ho mají a on je "outsider".

Nechci mu to jen zakázat bez vysvětlení.
Ale taky nechci povolit něco co považuji za škodlivé.

Potřebuji:
1. Argumenty PROČ NE - které 12letý pochopí
2. Jak reagovat na "všichni mají"
3. Alternativy které můžu nabídnout
4. Jak ho zapojit do rozhodnutí (aby necítil že je to diktát)
5. Konkrétní dialog - co řeknu, co možná řekne on, co odpovím

Chci zachovat vztah, ne vyhrát hádku.`}
          />

          <PromptCard
            title="Superprompt #4: Když dítě klame"
            description="Přichytil jsi dítě při klamství"
            prompt={`Dcera (14) mi řekla že jde ke spolužačce učit se.
Zjistil jsem že byla s klukem o kterém nic nevím.

Jsem nahněvaný. Ale nechci ji odehnat.

Potřebuji vyřešit:
1. Klamství
2. Zjistit kdo je ten kluk
3. Neztratit její důvěru

Jak vést ten rozhovor aby:
- Přiznala pravdu
- Pochopila proč je klamství problém
- Věděla že může přijít příště s pravdou
- Byly jasné důsledky ale ne devastace vztahu`}
          />

          <PromptCard
            title="Superprompt #5: Modlitba s dětmi"
            description="Chceš se modlit s dětmi ale nevíš jak začít"
            prompt={`Chci začít se modlit s dětmi před spaním.
Mám syna (7) a dceru (10).
Doposud jsme se nemodlili pravidelně - jen občas, formálně.

Problém: Když se modlím, děti se nudí nebo vyrušují.
Chci aby modlitba byla autentická, ne povinnost.

Dej mi:
1. Jednoduchou strukturu večerní modlitby (max 5 minut)
2. Jak zapojit děti aktivně
3. Příklady modliteb které můžu použít
4. Jak reagovat když nechtějí
5. Jak to udělat zajímavé bez toho aby to byla "show"`}
          />

          <PromptCard
            title="Superprompt #6: Konflikty sourozenců"
            description="Děti se neustále hádají"
            prompt={`Mám dva syny - 8 a 11 let.
Neustále se hádají. O hračky, o televizi, o pozornost.
Starší ubližuje mladšímu (slovně, občas fyzicky).
Mladší provokuje a potom pláče.

Jsem vyčerpaný/á. Křičím na ně. Potom se cítím špatně.

Potřebuji:
1. Jak zastavit hádku v momentě (konkrétní kroky)
2. Jak řešit když starší ubližuje mladšímu
3. Jak řešit provokování mladším
4. Dlouhodobé řešení - ne jen hasit požáry
5. Jak nebýt soudce ale pomoct jim řešit to sami`}
          />

          <div className="mt-6 p-5 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
            <h4 className="font-display font-semibold text-[#8B6B22] mb-3">Pravidla pro práci s AI:</h4>
            <ul className="space-y-2 text-sm text-[#6B5522]">
              <li><strong>1. AI NENÍ TERAPEUT</strong> - Když je problém vážný, AI pomůže připravit se na rozhovor, ale POTŘEBUJEŠ odborníka.</li>
              <li><strong>2. AI NEZNÁ TVOJE DÍTĚ</strong> - Ty ho znáš. AI dává všeobecné rady. Ty je filtruješ přes znalost svého dítěte.</li>
              <li><strong>3. AI SE MŮŽE MÝLIT</strong> - Kritické myšlení. Pokud ti něco nesedí, nevěř tomu jen proto že to řekla AI.</li>
              <li><strong>4. AI JE START, NE CÍL</strong> - AI ti pomůže připravit se. Ale rozhovor vedeš TY. Objetí dáváš TY. Přítomný jsi TY.</li>
            </ul>
          </div>
        </Section>

        {/* BLOK 2: Skolni situace */}
        <Section title="Blok 2: Škola a učení" icon={BookOpen} accentColor="gold">

          <WarningBox type="warning">
            <p className="font-semibold mb-2">Realita podvádění:</p>
            <p className="text-sm">89% studentů přiznává že použili AI na úkoly. 53% učitelů neví rozpoznat AI-generovaný text. "Detektory AI" mají 60% přesnost (horší než mince).</p>
          </WarningBox>

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

          <PromptCard
            title="Prompt pro domácí úkoly (naučte děti)"
            description="Jak se správně ptát na pomoc s učením"
            prompt={`Jsem žák [ročník]. Mám úkol: [zadání].

NECHCI abys to napsal za mě.
CHCI abys mi pomohl pochopit.

1. Vysvětli mi základní princip
2. Dej mi příklad
3. Potom se mě zeptej otázku jestli jsem pochopil
4. Když odpovím, řekni mi jestli je to správné a proč`}
          />

          <TableCard
            title="Jak rozpoznat že dítě podvádí"
            headers={['Signál', 'Co to může znamenat']}
            rows={[
              ['Náhlé zlepšení písemného projevu', 'AI psalo'],
              ['Neví vysvětlit co napsalo', 'Nerozumí vlastní úloze'],
              ['Používá slova která běžně nepoužívá', 'Zkopírované'],
              ['Úloha je "příliš dokonalá"', 'Chybí osobní styl'],
              ['Nervozita když se ptáš na detaily', 'Ví že podvedl'],
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
        </Section>

        {/* BLOK 3: Emocni situace */}
        <Section title="Blok 3: Emoční situace" icon={Heart} accentColor="terracotta">

          <InfoBox type="info">
            <strong>Klíčový princip:</strong> AI ti pomůže PŘIPRAVIT se na rozhovor. Ale rozhovor vedeš TY. Objetí dává TY. Přítomný je TY.
          </InfoBox>

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
              ['"Nevěříš mi"', '"Věřím ti. Ale nevěřím algoritmu který je navržený aby tě manipuloval."'],
            ]}
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
              description="Pro děti, mladé lidi i rodiče. Nonstop, zdarma."
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
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2025 • S láskou pro rodiče</p>
        </div>
      </footer>
    </div>
  );
}
