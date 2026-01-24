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
              Seminar 2
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              AI jako nastroj, ne nahrada
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Prakticky workshop - jak pouzivat AI spravne a jak resit problemy kdyz uz nastaly
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
            V prvnim seminari jsme mluvili o rizicich. Ted ukazeme, jak AI pouzivat <strong>SPRAVNE</strong> - jako nastroj, ktery vam <strong>POMAHA</strong> byt lepsimi rodici.
          </p>
        </div>

        {/* BLOK 1: Superprompty */}
        <Section title="Blok 1: Jak se spravne ptat AI" icon={MessageCircle} defaultOpen={true} accentColor="sage">

          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-4">Pravidlo #1: Jak se ptat</h4>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-[#F5E8E8] border border-[#B85C5C]/20">
                <p className="text-[#8B4444] font-medium mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Spatny prompt
                </p>
                <p className="text-sm text-[#6B3A3A] italic">"Povez mi neco o zlomcich"</p>
              </div>
              <div className="p-4 rounded-lg bg-[#EDF5F0] border border-[#5B7B6A]/20">
                <p className="text-[#3D5A4A] font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Dobry prompt
                </p>
                <p className="text-sm text-[#4A6B5A] italic">"Muj syn (9 let) nechape zlomky. Nevie si predstavit co je 3/4. Vysvetli mi to pomoci pizzy - neco co mu mozu fyzicky ukazat."</p>
              </div>
            </div>

            <p className="text-[#4A5568] text-sm">
              <strong>Rozdil:</strong> Vek ditete, konkretni problem, kontext, co chces (pochopit vs hotova odpoved)
            </p>
          </div>

          <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-4">Anatomie dobreho promptu:</h4>
            <ol className="space-y-2 text-white/90">
              <li><strong>1. KDO:</strong> Muj syn/dcera [vek]</li>
              <li><strong>2. CO:</strong> ma problem s [konkretne]</li>
              <li><strong>3. KONTEXT:</strong> situace je [detaily]</li>
              <li><strong>4. CEHO SE BOJIM:</strong> [tvoje obavy]</li>
              <li><strong>5. CO CHCI:</strong> pomoz mi [konkretni pozadavek]</li>
              <li><strong>6. CO NECHCI:</strong> nedavej mi [co nechces]</li>
            </ol>
          </div>

          <PromptCard
            title="Superprompt #1: Tezky rozhovor (rozvod)"
            description="Kdyz musis diteti rict o rozvodu"
            prompt={`Muj syn ma 8 let. S manzelkou se rozvedeme. Musim mu to rict tento vikend.

On ma velmi blizky vztah s obema rodici. Bojim se ze bude mit pocit ze je to jeho chyba.
Bojim se ze se uzavre.

Pomoz mi:
1. Jak zacit ten rozhovor
2. Presne vety ktere muzu pouzit
3. Co NERIKT
4. Jak reagovat kdyz se rozpláce
5. Jak reagovat kdyz se nahneva
6. Co delat nasledujici dny

Chci byt uprimny ale nechci ho zahltit detaily ktere nepotrebuje vedet.`}
          />

          <PromptCard
            title="Superprompt #2: Vysvetleni smrti"
            description="Kdyz zemrela babicka a dite se pta"
            prompt={`Dcera (6 let) se pta proc babicka zemrela.
Babicka zemrela na rakovinu pred 3 dny.
Dcera ji velmi milovala, navstevovali jsme ji kazdy tyden.

Jsme krestanska rodina. Verime v nebe.
Ale dcera se boji - pta se jestli ja taky zemru.

Potrebuji:
1. Jednoduche vysvetleni smrti pro 6letou
2. Jak propojit s nasi virou (bez klise)
3. Co rict na "ty taky zemres?"
4. Konkretni vety - copy-paste
5. Co NERIKT (napr. "zaspala" - boji se pak spat)`}
          />

          <PromptCard
            title="Superprompt #3: Digitalni hranice"
            description="Kdyz dite chce TikTok a vsichni ho maji"
            prompt={`Syn (12 let) chce TikTok.
Argumentuje ze vsichni spoluzaci ho maji a on je "outsider".

Nechci mu to jen zakazat bez vysvetleni.
Ale taky nechci povolit neco co povazuji za skodlive.

Potrebuji:
1. Argumenty PROC NE - ktere 12lety pochopi
2. Jak reagovat na "vsichni maji"
3. Alternativy ktere muzu nabidnout
4. Jak ho zapojit do rozhodnuti (aby necitil ze je to diktat)
5. Konkretni dialog - co reknu, co mozna rekne on, co odpovim

Chci zachovat vztah, ne vyhrat hadku.`}
          />

          <PromptCard
            title="Superprompt #4: Kdyz dite klame"
            description="Prichytil jsi dite pri klamstvi"
            prompt={`Dcera (14) mi rekla ze jde k spoluzacce ucit se.
Zjistil jsem ze byla s klukem o kterem nic nevim.

Jsem nahnevany. Ale nechci ji odehnat.

Potrebuji vyresit:
1. Klamstvi
2. Zjistit kdo je ten kluk
3. Neztratit jeji duveru

Jak vest ten rozhovor aby:
- Priznala pravdu
- Pochopila proc je klamstvi problem
- Vedela ze muze prijit priste s pravdou
- Byly jasne dusledky ale ne devastace vztahu`}
          />

          <PromptCard
            title="Superprompt #5: Modlitba s detmi"
            description="Chces se modlit s detmi ale nevis jak zacit"
            prompt={`Chci zacit se modlit s detmi pred spanim.
Mam syna (7) a dceru (10).
Doted jsme se nemodlili pravidelne - jen obcas, formalne.

Problem: Kdyz se modlim, deti se nudi nebo vyrusují.
Chci aby modlitba byla autenticka, ne povinnost.

Dej mi:
1. Jednoduchou strukturu vecerni modlitby (max 5 minut)
2. Jak zapojit deti aktivne
3. Priklady modliteb ktere muzu pouzit
4. Jak reagovat kdyz nechteji
5. Jak to udelat zajimave bez toho aby to byla "show"`}
          />

          <PromptCard
            title="Superprompt #6: Konflikty sourozencu"
            description="Deti se neustale hadaji"
            prompt={`Mam dva syny - 8 a 11 let.
Neustale se hadaji. O hracky, o televizi, o pozornost.
Starsi ubližuje mladsimu (slovne, obcas fyzicky).
Mladsi provokuje a potom place.

Jsem vycerpany/a. Kricim na ne. Potom se citim spatne.

Potrebuji:
1. Jak zastavit hadku v momente (konkretni kroky)
2. Jak resit kdyz starsi ubližuje mladsimu
3. Jak resit provokovani mladsim
4. Dlouhodobe reseni - ne jen hasit pozary
5. Jak nebyt soudce ale pomoct jim resit to sami`}
          />

          <div className="mt-6 p-5 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
            <h4 className="font-display font-semibold text-[#8B6B22] mb-3">Pravidla pro praci s AI:</h4>
            <ul className="space-y-2 text-sm text-[#6B5522]">
              <li><strong>1. AI NENI TERAPEUT</strong> - Kdyz je problem vazny, AI pomuze pripravit se na rozhovor, ale POTREBUJES odbornika.</li>
              <li><strong>2. AI NEZNA TVOJE DITE</strong> - Ty ho znas. AI dava vseobecne rady. Ty je filtrujes pres znalost sveho ditete.</li>
              <li><strong>3. AI SE MUZE MYLIT</strong> - Kriticke mysleni. Pokud ti neco nesedi, never tomu jen proto ze to rekla AI.</li>
              <li><strong>4. AI JE START, NE CIL</strong> - AI ti pomuze pripravit se. Ale rozhovor vedes TY. Objeti davas TY. Pritomny jsi TY.</li>
            </ul>
          </div>
        </Section>

        {/* BLOK 2: Skolni situace */}
        <Section title="Blok 2: Skola a uceni" icon={BookOpen} accentColor="gold">

          <WarningBox type="warning">
            <p className="font-semibold mb-2">Realita podvadeni:</p>
            <p className="text-sm">89% studentu priznava ze pouzili AI na ukoly. 53% ucitelu nevie rozpoznat AI-generovany text. "Detektory AI" maji 60% presnost (horsi nez mince).</p>
          </WarningBox>

          <TableCard
            title="Dva typy pouziti AI ve skole"
            headers={['Podvadeni', 'Uceni']}
            rows={[
              ['"Napis mi esej o 2. svetove valce"', '"Vysvetli mi priciny 2. svetove valky jednoduse"'],
              ['"Vyres tuto rovnici"', '"Ukaz mi postup reseni teto rovnice krok za krokem"'],
              ['"Napis mi referat"', '"Jaka by mela byt struktura referatu o tomto tematu?"'],
              ['AI dela praci ZA dite', 'AI pomaha diteti POCHOPIT'],
            ]}
          />

          <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <p className="font-display font-bold text-lg mb-2">Pravidlo pro deti:</p>
            <p className="text-white/90">"AI je TUTOR, ne AUTOR. Muzes se ho ptat. Nemuze za tebe psat."</p>
          </div>

          <PromptCard
            title="Prompt pro domaci ukoly (naucte deti)"
            description="Jak se spravne ptat na pomoc s ucenim"
            prompt={`Jsem zak [rocnik]. Mam ukol: [zadani].

NECHCI aby jsi to napsal za mne.
CHCI aby jsi mi pomohl pochopit.

1. Vysvetli mi zakladni princip
2. Dej mi priklad
3. Potom se me zeptej otazku jestli jsem pochopil
4. Kdyz odpovim, rekni mi jestli je to spravne a proc`}
          />

          <TableCard
            title="Jak rozpoznat ze dite podvadi"
            headers={['Signal', 'Co to muze znamenat']}
            rows={[
              ['Nahle zlepseni pisemneho projevu', 'AI psalo'],
              ['Nevie vysvetlit co napsalo', 'Nerozumi vlastni uloze'],
              ['Pouziva slova ktera bezne nepouziva', 'Skopirovane'],
              ['Uloha je "prilis dokonala"', 'Chybi osobni styl'],
              ['Nervozita kdyz se ptas na detaily', 'Vi ze podvedl'],
            ]}
          />

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <h4 className="font-display font-semibold text-[#8B4444] mb-3">Co NEDELAT kdyz prichytis:</h4>
              <ul className="space-y-1.5 text-sm text-[#6B3A3A]">
                <li>• Okamzity krik</li>
                <li>• "Jsi podvodnik"</li>
                <li>• Trest bez rozhovoru</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <h4 className="font-display font-semibold text-[#3D5A4A] mb-3">Co DELAT:</h4>
              <ul className="space-y-1.5 text-sm text-[#4A6B5A]">
                <li>• Zeptej se otevrene: "Tato uloha vypada jinak. Povezes mi jak jsi to delal?"</li>
                <li>• Vysvetli PROC je to problem</li>
                <li>• Ukaz spravny zpusob</li>
              </ul>
            </div>
          </div>

          <PromptCard
            title="Prompt pro rodice - pomoc s ulohou"
            description="Kdyz sam nevis jak neco vysvetlit"
            prompt={`Muj syn (10 let) ma domaci ulohu z matematiky: [zadani].
Ja sam nevim jak to vysvetlit jednoduse.

Potrebuji:
1. Vysvetleni pro me (dospeleho) - co je princip
2. Jak to vysvetlit 10letemu - jednoduchy jazyk
3. Prakticky priklad ze zivota
4. Jake chyby deti casto delaji
5. Jak overit ze pochopil

NECHCI hotove reseni. Chci vedet jak ho naucit.`}
          />
        </Section>

        {/* BLOK 3: Emocni situace */}
        <Section title="Blok 3: Emocni situace" icon={Heart} accentColor="terracotta">

          <InfoBox type="info">
            <strong>Klicovy princip:</strong> AI ti pomuze PRIPRAVIT se na rozhovor. Ale rozhovor vedes TY. Objeti dava TY. Pritomny je TY.
          </InfoBox>

          <div className="space-y-6">
            {/* Situace 1: Hnev */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C4785A]/10 flex items-center justify-center text-[#C4785A]">1</span>
                Dite je nahnevane
              </h4>

              <TableCard
                headers={['V MOMENTE', 'POTOM', 'DLOUHODOBE']}
                rows={[
                  ['Zustan pokojny (ty)', '"Vidim ze jsi byl velmi nahnevany"', 'Identifikuj triggery'],
                  ['Mene slov, ne prednasky', '"Co se stalo tesne predtim?"', 'Nauc pomenovat emoce'],
                  ['"Vidim ze jsi nahnevany. Jsem tu."', '"Co muzeme udelat priste?"', 'Pravidelny rozhovor o emocich'],
                ]}
              />

              <div className="mt-4 p-3 rounded-lg bg-[#F5E8E8]">
                <p className="text-[#8B4444] text-sm font-medium mb-2">Co NERIKT:</p>
                <p className="text-[#6B3A3A] text-sm">"Prestan!" (nevie prestat) | "Co to ma byt?!" (hanba) | "Chovej se jako velky!" (negace emoce)</p>
              </div>
            </div>

            {/* Situace 2: Smutek */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#5B7B6A]/10 flex items-center justify-center text-[#5B7B6A]">2</span>
                Dite je smutne
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#F5E8E8]">
                  <p className="text-[#8B4444] text-sm font-medium mb-2">Ne:</p>
                  <p className="text-[#6B3A3A] text-sm">"Co se deje? Proc jsi smutny? Povez mi!"</p>
                </div>
                <div className="p-3 rounded-lg bg-[#EDF5F0]">
                  <p className="text-[#3D5A4A] text-sm font-medium mb-2">Ano:</p>
                  <p className="text-[#4A6B5A] text-sm">"Vsiml jsem si ze jsi posledni dny tisi. Nemusis mi nic rikat. Ale jsem tu. Kdykoliv."</p>
                </div>
              </div>

              <p className="text-[#4A5568] text-sm mb-3"><strong>Otazky ktere otviraji:</strong></p>
              <ul className="space-y-1 text-sm text-[#4A5568]">
                <li>• "Jak se ti dnes ve skole darilo? Co bylo nejlepsi? Co nejhorsi?"</li>
                <li>• "Je neco co ti jde hlavou v noci pred spanim?"</li>
                <li>• "Kdyby jsi mel jedno prani - co by to bylo?"</li>
              </ul>
            </div>

            {/* Situace 3: Osamělost */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C9A962]/15 flex items-center justify-center text-[#9A7B3C]">3</span>
                Dite je osamele
              </h4>

              <WarningBox type="danger">
                <p className="text-sm">Pokud je diteti snadneji mluvit s AI nez s lidmi - mas problem. Ale ne dite. Problem je ze lide jsou tezsi nez AI. A dite nikdo nenaucil jak.</p>
              </WarningBox>

              <p className="text-[#4A5568] text-sm mb-3"><strong>Reseni NENI:</strong> Zakazat telefon | "Jdi si hrat ven" | "Co je s tebou?"</p>

              <p className="text-[#4A5568] text-sm mb-2"><strong>Reseni JE:</strong></p>
              <ul className="space-y-1 text-sm text-[#4A5568]">
                <li>• <strong>Prostredi kde MUSI interagovat:</strong> Krouzky, sport, tabory - ne online, fyzicky</li>
                <li>• <strong>Nauc zrucnosti:</strong> Jak zacit rozhovor, jak reagovat kdyz nevi co rict</li>
                <li>• <strong>Tvoje pritomnost:</strong> Ty bud ten s kym je snadne byt</li>
              </ul>
            </div>

            {/* Situace 4: Strach */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C4785A]/10 flex items-center justify-center text-[#C4785A]">4</span>
                Dite se boji (spat samo, tmy...)
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-[#F5E8E8]">
                  <p className="text-[#8B4444] text-sm font-medium mb-2">Co NEFUNGUJE:</p>
                  <ul className="text-[#6B3A3A] text-sm space-y-1">
                    <li>• "Neboj se, prisery neexistuji"</li>
                    <li>• "Jsi uz velky/a"</li>
                    <li>• "Ostatni deti se neboji"</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-[#EDF5F0]">
                  <p className="text-[#3D5A4A] text-sm font-medium mb-2">Co FUNGUJE:</p>
                  <ul className="text-[#4A6B5A] text-sm space-y-1">
                    <li>• Uznej strach: "Vidim ze se bojis. To je v poradku."</li>
                    <li>• Dej kontrolu: "Co by ti pomohlo?"</li>
                    <li>• Ritual: Stejny kazdy vecer</li>
                    <li>• Modlitba: "Boze, chran dceru kdyz spi."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Situace 5: Trauma z online */}
            <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#B85C5C]/10 flex items-center justify-center text-[#B85C5C]">5</span>
                Dite videlo neco online co ho traumatizovalo
              </h4>

              <p className="text-[#4A5568] text-sm mb-3"><strong>Spravna reakce:</strong></p>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li>• "Dekuji ze jsi mi to povedel." (ne "Co jsi delal na internetu?!")</li>
                <li>• "Neni to tvoje chyba." (casto najdou nahodou)</li>
                <li>• "Chces mi povedzt co jsi videl?" (bez tlaku)</li>
                <li>• "Nekteré veci na internetu nejsou pro deti. Ne proto ze jsi spatny, ale proto ze tvuj mozek neni pripraven."</li>
                <li>• "Kdyz uvidis neco co ti je neprijemne, vzdy prid za mnou. Nebudu se hnevat. Nikdy."</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* BLOK 4: Rodinna zmluva */}
        <Section title="Blok 4: Rodinna digitalni dohoda" icon={FileText} accentColor="gold">

          <TableCard
            headers={['Pravidla', 'Dohoda']}
            rows={[
              ['Rodic diktuje', 'Rodina se dohodne'],
              ['Dite musi poslouchat', 'Dite se zavazuje'],
              ['Jednostranna', 'Oboustranna'],
              ['Muzu zmenit kdykoliv', 'Menime spolecne'],
              ['Plati pro dite', 'Plati pro VSECHNY'],
            ]}
          />

          <InfoBox type="warning">
            Pokud telefon u jidla je zakazany pro dite ale ne pro tebe - neni to pravidlo, je to pokrytectvi.
          </InfoBox>

          <div className="my-6 p-5 rounded-xl bg-[#FAF8F5] border-2 border-dashed border-[#E8E4DE]">
            <h4 className="font-display font-bold text-[#2D3436] text-lg mb-4 text-center">SABLONA RODINNE DIGITALNI DOHODY</h4>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">CAST 1: Pravidla pro VSECHNY (i rodice)</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Zadne telefony pri jidle</li>
                  <li>☐ Telefony se nabiji v _________ od _____</li>
                  <li>☐ Prvnich ____ minut po prichodu domu - bez obrazovek</li>
                  <li>☐ Kdyz nekdo mluvi, divame se na nej - ne na telefon</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">CAST 2: Pravidla pro dite</p>
                <p className="text-[#7A7A7A] text-xs mb-2">Jmeno: _____________ Vek: ____</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Max. cas denne (skolni den): _____ hodin</li>
                  <li>☐ Max. cas denne (vikend): _____ hodin</li>
                  <li>☐ Telefon se odklada o _____ (vecer)</li>
                  <li>☐ Tyto appky jsou povolene: _________________</li>
                  <li>☐ Tyto appky jsou zakazane: _________________</li>
                  <li>☐ AI chatboty na "pratelstvi" jsou zakazane</li>
                  <li>☐ AI smim pouzivat na UCENI, ne na psani za mne</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">CAST 3: Dusledky</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>Kdyz porusim pravidlo poprve: → _____________</li>
                  <li>Kdyz porusim pravidlo podruhe: → _____________</li>
                  <li>Kdyz porusim pravidlo opakovane: → _____________</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">CAST 4: Prava ditete</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Mam pravo na soukromi primerene veku</li>
                  <li>☐ Mam pravo vedet PROC existuje pravidlo</li>
                  <li>☐ Mam pravo pozadat o zmenu pravidla (rozhovorem)</li>
                  <li>☐ Mam pravo rict kdyz rodic porusi pravidlo</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E8E4DE]">
                <p className="font-semibold text-[#2D3436] mb-2">CAST 5: Zavazky rodicu</p>
                <ul className="text-[#4A5568] space-y-1">
                  <li>☐ Budeme dodrzovat pravidla ktera plati pro vsechny</li>
                  <li>☐ Nebudeme kontrolovat tajne - zeptame se</li>
                  <li>☐ Kdyz prijdes s problemem, nebudeme kricet</li>
                  <li>☐ Vysvetlime PROC, ne jen "protoze jsem rekl"</li>
                  <li>☐ Tuto dohodu prehodnotime kazde ____ mesice</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E4DE] text-center">
                <p className="text-[#4A5568] mb-2">PODPISY:</p>
                <p className="text-[#7A7A7A] text-xs">_________ (rodic)  _________ (rodic)  _________ (dite)</p>
                <p className="text-[#7A7A7A] text-xs mt-2">Datum: _________</p>
              </div>
            </div>
          </div>

          <TableCard
            title="Kdyz dite protestuje"
            headers={['Protest', 'Odpoved']}
            rows={[
              ['"Proc JA?"', '"Pravidla plati pro vsechny. I pro mne. Podivej - tu je napsane."'],
              ['"Nikdo jiny to nema"', '"My nejsme jini. A mne zalezi na tobe, ne na jinych."'],
              ['"Je to hlupe"', '"Co konkretne ti prekazi? Vysvetli mi to."'],
              ['"Neveris mi"', '"Verim ti. Ale neverim algoritmu ktery je navrzeny aby te manipuloval."'],
            ]}
          />
        </Section>

        {/* BLOK 5: Zachrana */}
        <Section title="Zachrana: Kdyz uz je problem" icon={Shield} accentColor="terracotta">

          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <p className="text-[#4A5568] mb-4">
              Realita s kterou rodice prichazeji: Dite uz ma telefon roky. Uz jsou tam zlonávyky. Uz byly hadky.
              Uz stratili prehled. Uz nemaji energii. Uz se citi jako spatni rodice.
            </p>
            <p className="font-semibold text-[#2D3436]">Nepotrebuji mrakodrap. Potrebuji zaplatat diru ve strese.</p>
          </div>

          <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-3">Jedna vec kterou muzes zmenit DNES:</h4>
            <p className="text-xl font-semibold text-[#C9A962] mb-3">"Telefony spi mimo spalnu."</p>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• Nejvetsi skody se deji v noci</li>
              <li>• AI chatboty, doom scrolling, pornografie, sexting - vsechno po 22:00</li>
              <li>• Dite samo nevie prestat - mozek to nedokaze</li>
              <li>• Jak zavest: Kup nabijacku do obyvaku. Rekni "Od dnes telefony spi tady. Vsechny. I muj."</li>
            </ul>
          </div>

          <TableCard
            title="Cervene vlajky ktere nesmi ignorovat"
            headers={['Vidis', 'Muze znamenat', 'Co udelat']}
            rows={[
              ['Skryva telefon kdyz prijdes', 'Neco co nechce abys videl', 'Rozhovor, ne kontrola'],
              ['Extremni reakce kdyz nema telefon', 'Zavislost', 'Postupne snizovani, mozna odbornik'],
              ['Nespi, je stale unaveny', 'Nocni pouzivani', 'Telefon mimo spalnu'],
              ['Nahle novy "kamarad" o kterem nevis', 'Online vztah', 'Zjisti vic bez paniky'],
              ['Zmena nalady, stazeni se', 'Deprese, problem', 'Rozhovor, mozna odbornik'],
              ['Mluvi o beznadëji, smrti', 'Sebevrazedne myslenky', 'OKAMZITE - odborna pomoc'],
            ]}
          />

          <div className="my-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Co udelat tento tyden:</h4>
            <ul className="space-y-2 text-[#4A5568]">
              <li><strong>Pondeli:</strong> Jeden spolecny obed/vecere bez telefonu. Jen jednou. Jen zkusit.</li>
              <li><strong>Utery:</strong> Zeptej se: "Co ted sledujes? Co te bavi?" Jen zajem, ne kontrola.</li>
              <li><strong>Streda:</strong> Telefony mimo spalnu v noci. Zacni od sebe.</li>
              <li><strong>Ctvrtek:</strong> 15 minut spolecne aktivity. Bez obrazovky. Cokoliv.</li>
              <li><strong>Patek:</strong> Rekni: "Vim ze nejsem dokonal rodic. Ale zalezi mi na tobe. Kdybys neco potreboval, prijdes?"</li>
            </ul>
          </div>

          <TableCard
            title="Vety ktere funguji"
            headers={['Namisto', 'Rekni']}
            rows={[
              ['"Dej prec ten telefon!"', '"Potrebuji tvou pozornost na 5 minut. Potom muzes pokracovat."'],
              ['"Co tam porad delas?!"', '"Co zajimaveho sledujes? Ukazes mi?"'],
              ['"To je skodlive!"', '"Proc ti to libi? Co ti to dava?"'],
              ['"Dokud ti nebude 18, budu kontrolovat!"', '"Chci ti doverovat. Pomoz mi vedet ze muzu."'],
            ]}
          />

          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 my-6">
            <EmergencyCard
              title="Linka bezpeci"
              phone="116 111"
              description="Pro deti, mlade lidi i rodice. Nonstop, zdarma."
              isPrimary={true}
            />
            <EmergencyCard
              title="Rodicovska linka"
              phone="606 021 021"
              description="Podpora pro rodice v tezkych situacich"
            />
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-[#C9A962] to-[#9A7B3C] text-white">
            <h4 className="font-display font-bold text-lg mb-3">Pro rodice kteri se citi bezmocne:</h4>
            <p className="text-white/90 mb-4">
              <strong>Nejste spatni rodice.</strong> Nikdo vas na tohle nepripravil. Technologie jde rychleji nez kdokoliv stiha.
              Vasi rodice neresili nic z toho. Snazite se - to je vic nez nic.
            </p>
            <p className="font-semibold">Nepotrebujete byt dokonali. Potrebujete byt pritomni.</p>
          </div>
        </Section>

        {/* Záver */}
        <Section title="Zaver" icon={Home} accentColor="sage">
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white mb-6">
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              AI je nastroj. Kladivo muze postavit dum i rozbit lebku. Zalezi kdo ho drzi.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Vy drzite vic nez kladivo. <strong>Drzite vztah.</strong> A vztah vzdy vyhrava.
            </p>
            <p className="text-[#C9A962] font-semibold text-lg">
              Jdete domu. Odlozte telefony. Divejte se na sve deti. Poslouchejte je. Budte pritomni.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] text-center">
            <p className="text-[#2D3436] font-display font-semibold text-lg mb-2">
              To je jedina vec kterou AI nikdy nedokaze.
            </p>
            <p className="text-[#4A5568]">
              Jeden rozhovor. Jeden spolecny vecer. Jeden pohled do oci a idealne kratka spolecna modlitba.
              <br />To neni malo. To je zacatek.
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
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Seminar "AI jako nastroj, ne nahrada"</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2026 • S laskou pro rodice</p>
        </div>
      </footer>
    </div>
  );
}
