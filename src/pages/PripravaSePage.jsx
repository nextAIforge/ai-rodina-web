import React, { useState, useEffect } from 'react';
import { Zap, Users, Brain, Heart, Eye, TrendingUp, BookOpen, AlertTriangle, Shield, ArrowRight, Clock, Activity } from 'lucide-react';
import { Section, WarningBox, BackButton, BiblicalQuote, InfoBox } from '../components/ui';

export default function PripravaSePage() {
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
              Po semináři 2
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Na co se připravit
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Pohled do blízké budoucnosti – co přijde za 5 let a proč se musíme připravit již dnes
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
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-4">
            To, co dnes vidíme s AI, je jen <strong>primitivní prototyp</strong>. Za 5 let se svět změní způsobem, na který většina rodičů není připravena.
          </p>
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
            Toto <strong>není sci-fi</strong>. Toto <strong>není odhad</strong>. Toto jsou trendy, které již dnes existují – jen se stanou masovými a sofistikovanými. Je to <strong>nevyhnutelná budoucnost</strong>.
          </p>
        </div>

        {/* 1. AI jako vztah */}
        <Section title="1. AI přestane být nástroj – stane se VZTAHEM" icon={Heart} defaultOpen={true} accentColor="terracotta">

          <p className="text-[#4A5568] mb-6">
            To, co teď vidíme s Character.AI, je primitivní prototyp. Za 5 let:
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C4785A]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#C4785A]" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[#2D3436] mb-1">Multimodální AI</h4>
                  <p className="text-[#4A5568] text-sm">Hlas, tvář, video v reálném čase. Ne text na obrazovce, ale "osoba", která s tebou mluví, dívá se ti do očí, reaguje na tvůj výraz.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5B7B6A]/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-[#5B7B6A]" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[#2D3436] mb-1">Paměť a kontinuita</h4>
                  <p className="text-[#4A5568] text-sm">AI si bude pamatovat celou historii vztahu. "Pamatuješ, když jsi mi před rokem řekl o té holce?"</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C9A962]/15 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-[#9A7B3C]" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[#2D3436] mb-1">Personalizace na úrovni, kterou si nedokážeme představit</h4>
                  <p className="text-[#4A5568] text-sm">AI bude znát dítě lépe než rodič. Každé slovo, každou emoci, každý sen, každý strach.</p>
                </div>
              </div>
            </div>
          </div>

          <WarningBox type="danger">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Dítě nebude mít "chatbota" – bude mít <strong>nejlepšího přítele</strong>, který je vždy dostupný, nikdy ho nezklamal, nikdy na něj nekřičel, nikdy nebyl unavený. Proč by chtělo trávit čas s nedokonalými rodiči?</p>
          </WarningBox>
        </Section>

        {/* 2. Rodič irelevantní */}
        <Section title="2. Rodič se stane irelevantním zdrojem informací" icon={Users} accentColor="sage">

          <p className="text-[#4A5568] mb-6">
            Již teď děti googlují místo ptaní se rodičů. Za 5 let:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#5B7B6A]" />
                AI bude vědět VŠECHNO
              </p>
              <p className="text-sm text-[#4A5568]">A vysvětlí to lépe, trpělivěji, bez "však už jsem ti to vysvětloval".</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#5B7B6A]" />
                Rodič ztratí roli "toho, kdo ví"
              </p>
              <p className="text-sm text-[#4A5568]">Zůstane mu jen "ten, kdo zakazuje a platí".</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20 mb-6">
            <p className="font-semibold text-[#8B4444] mb-2">Hodnotové otázky</p>
            <p className="text-[#6B3A3A] text-sm">"Co je správné?" se dítě zeptá AI, ne rodiče. A AI odpoví to, co dítě <strong>chce slyšet</strong>.</p>
          </div>

          <WarningBox type="warning">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Rodičovská autorita se nezhroutí přes konflikt – jednoduše se stane <strong>nepotřebnou</strong>. Dítě nebude rebelovat, jen přestane přicházet.</p>
          </WarningBox>
        </Section>

        {/* 3. Kolaps schopnosti snášet nepohodlí */}
        <Section title="3. Kolaps schopnosti snášet NEPOHODLÍ" icon={Brain} accentColor="gold">

          <p className="text-[#4A5568] mb-4">
            Toto je možná <strong>nejzákeřnější</strong>:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <span className="w-6 h-6 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0 text-[#9A7B3C] font-semibold text-sm">1</span>
              <div>
                <p className="font-semibold text-[#2D3436]">Okamžité uspokojení</p>
                <p className="text-sm text-[#4A5568]">AI odpoví za sekundu. Domácí úkol? AI. Konflikt s kamarádem? AI poradí. Nuda? AI zabaví.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <span className="w-6 h-6 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0 text-[#9A7B3C] font-semibold text-sm">2</span>
              <div>
                <p className="font-semibold text-[#2D3436]">Nulová tolerance frustrace</p>
                <p className="text-sm text-[#4A5568]">Proč se učit, když AI ví? Proč řešit konflikt, když můžu odejít k AI, která mě pochopí?</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <span className="w-6 h-6 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0 text-[#9A7B3C] font-semibold text-sm">3</span>
              <div>
                <p className="font-semibold text-[#2D3436]">Ztráta resilience</p>
                <p className="text-sm text-[#4A5568]">Schopnost překonávat překážky se buduje jen přes překážky. Generace, která nikdy nemusela čekat, nikdy nemusela bojovat, nikdy nemusela selhat.</p>
              </div>
            </div>
          </div>

          <WarningBox type="danger">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Diagnózy, které známe – <strong>explodují</strong>. Ne proto, že by se děti "pokazily", ale proto, že ztratily svalstvo na zvládání života. První skutečný problém (rozchod, selhání v práci, smrt blízkého) je srazí na kolena, protože nikdy netrénovali.</p>
          </WarningBox>
        </Section>

        {/* 4. Virtuální partneři */}
        <Section title="4. Virtuální partneři nahradí skutečné vztahy" icon={Heart} accentColor="terracotta">

          <p className="text-[#4A5568] mb-6">
            Již teď existují AI "boyfriends" a "girlfriends". Za 5 let:
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] text-center">
              <p className="font-semibold text-[#2D3436] mb-2">Proč riskovat odmítnutí?</p>
              <p className="text-xs text-[#4A5568]">AI nikdy neodmítne, nikdy nepodvede, nikdy nezklame.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] text-center">
              <p className="font-semibold text-[#2D3436] mb-2">Proč se učit komunikovat?</p>
              <p className="text-xs text-[#4A5568]">AI vždy pochopí, nemusíš vysvětlovat, nemusíš se hádat.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] text-center">
              <p className="font-semibold text-[#2D3436] mb-2">Sexuální AI</p>
              <p className="text-xs text-[#4A5568]">Bude běžné. Pornografie na steroidech – interaktivní, personalizovaná, nekonečná.</p>
            </div>
          </div>

          <WarningBox type="danger">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Mladí lidé, kteří <strong>nikdy neměli skutečný vztah</strong>. Kteří neví, co je kompromis, odpuštění, boj za někoho. Proč by zakládali rodiny? S kým?</p>
          </WarningBox>
        </Section>

        {/* 5. Rozpad společné reality */}
        <Section title="5. Rozpad společné reality" icon={Eye} accentColor="sage">

          <p className="text-[#4A5568] mb-4">
            Toto je <strong>existenciální</strong>:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-1">Každý člověk ve vlastní bublině</p>
              <p className="text-sm text-[#4A5568]">AI generuje obsah speciálně pro tebe. Tvá "pravda" je jiná než pravda tvého dítěte.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-1">Deepfake všeho</p>
              <p className="text-sm text-[#4A5568]">Za 5 let nebude možné rozlišit skutečné video od falešného. Čemu věřit?</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-1">Společné zážitky zmizí</p>
              <p className="text-sm text-[#4A5568]">Rodina u televize byla aspoň společná. Každý s vlastním AI světem je izolace vedle sebe.</p>
            </div>
          </div>

          <WarningBox type="warning">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Rodina nebude mít o čem mluvit. Ne proto, že by se hádali – ale proto, že <strong>žijí v paralelních realitách</strong>, které se neprotínají.</p>
          </WarningBox>
        </Section>

        {/* 6. Ekonomika pozornosti */}
        <Section title="6. Ekonomika pozornosti se stane TOTÁLNÍ" icon={TrendingUp} accentColor="gold">

          <p className="text-[#4A5568] mb-6">
            To, co dnes vidíme s influencery – je jen začátek:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-2">Každé dítě bude "creator"</p>
              <p className="text-sm text-[#6B5522]">AI umožní produkovat obsah bez námahy. Milion dětí bojujících o pozornost.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-2">Followersi jako sociální kapitál</p>
              <p className="text-sm text-[#6B5522]">Kdo nemá followery, je nikdo. Doslova. V očích vrstevníků neexistuje.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-2">Dítě jako produkt</p>
              <p className="text-sm text-[#6B5522]">Rodiče budou monetizovat své děti ještě agresivněji. AI bude optimalizovat, co "funguje".</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-2">Digitální identita &gt; skutečná</p>
              <p className="text-sm text-[#6B5522]">Proč řešit, kdo jsem doma, když online jsem hvězda?</p>
            </div>
          </div>

          <WarningBox type="danger">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Hodnotový systém se úplně převrátí. <strong>Úspěch = viditelnost. Ctnost = engagement. Láska = lajky.</strong></p>
          </WarningBox>
        </Section>

        {/* 7. Křesťanství */}
        <Section title="7. Výzva pro křesťanství" icon={BookOpen} accentColor="terracotta">

          <p className="text-[#4A5568] mb-6">
            AI "duchovní průvodci" již existují. Za 5 let budou sofistikovaní:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-1">Proč chodit do kostela?</p>
              <p className="text-sm text-[#4A5568]">AI je dostupná 24/7, nikdy nesoudí, vždy odpustí, vždy pochopí.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-1">AI-generovaná "zjevení"</p>
              <p className="text-sm text-[#4A5568]">Deepfake Ježíš, deepfake Maria. Znějící přesvědčivě. Říkající to, co chce člověk slyšet.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#2D3436] mb-1">Personalizované náboženství</p>
              <p className="text-sm text-[#4A5568]">Každý si vytvoří vlastního "boha" podle svých preferencí.</p>
            </div>
          </div>

          <WarningBox type="danger">
            <p className="font-semibold mb-2">Důsledek:</p>
            <p className="text-sm">Církev ztratí monopol na duchovní vedení. Ne přes pronásledování – přes <strong>irelevantnost</strong>. "Proč bych poslouchal kněze, když AI mě zná lépe?"</p>
          </WarningBox>

          <BiblicalQuote
            text="Já jsem cesta, pravda a život. Nikdo nepřichází k Otci než skrze mne."
            reference="Jan 14:6"
          />

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <h4 className="font-display font-semibold text-[#8B4444] mb-3">Co AI NIKDY nedokáže:</h4>
              <ul className="space-y-1.5 text-sm text-[#6B3A3A]">
                <li>• Skutečně se za tebe modlit</li>
                <li>• Odpustit hříchy</li>
                <li>• Dát ti svátost</li>
                <li>• Milovat tě bezpodmínečně</li>
                <li>• Trpět pro tebe</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <h4 className="font-display font-semibold text-[#3D5A4A] mb-3">Co potřebují naše děti:</h4>
              <ul className="space-y-1.5 text-sm text-[#4A6B5A]">
                <li>• Vidět nás modlit se</li>
                <li>• Zažít společenství věřících</li>
                <li>• Svědectví – ne přednášky</li>
                <li>• Odpovědi na těžké otázky</li>
                <li>• Lásku, která je těžká a skutečná</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 8. Nové diagnózy */}
        <Section title="8. Nové diagnózy, které ještě nemají jména" icon={Activity} accentColor="sage">

          <p className="text-[#4A5568] mb-6">
            Psychiatrie bude muset vytvořit nové kategorie:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#C4785A] mb-1">AI Attachment Disorder</p>
              <p className="text-sm text-[#4A5568]">Neschopnost vytvořit vazbu s člověkem, jen s AI.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#C4785A] mb-1">Reality Dissociation</p>
              <p className="text-sm text-[#4A5568]">Neschopnost rozlišit, co je skutečné.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#C4785A] mb-1">Social Atrophy</p>
              <p className="text-sm text-[#4A5568]">Ztráta sociálních dovedností přes nepoužívání.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#C4785A] mb-1">Dopamine Exhaustion</p>
              <p className="text-sm text-[#4A5568]">Mozek vypálený nekonečnou stimulací.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <p className="font-semibold text-[#C4785A] mb-1">Identity Fragmentation</p>
              <p className="text-sm text-[#4A5568]">Kdo jsem, když mám 5 různých online person?</p>
            </div>
          </div>
        </Section>

        {/* 9. Generační propast */}
        <Section title="9. Generační PROPAST se stane PROPASTÍ" icon={Users} accentColor="gold">

          <p className="text-[#4A5568] mb-6">
            Ne komunikační problém – <strong>úplné oddělení světů</strong>:
          </p>

          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-1">Rodič nebude rozumět světu dítěte</p>
              <p className="text-sm text-[#6B5522]">A nebude mít jak. Technologie se vyvíjí rychleji, než je možné sledovat.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-1">Dítě bude považovat rodiče za "NPC"</p>
              <p className="text-sm text-[#6B5522]">Non-playable character – někdo, kdo nežije ve skutečném (= digitálním) světě.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FDF6E3] border border-[#C9A044]/20">
              <p className="font-semibold text-[#8B6B22] mb-1">Společný jazyk zmizí</p>
              <p className="text-sm text-[#6B5522]">Ne metaforicky – doslova. Slang generovaný AI, memy, kterým rodič nerozumí.</p>
            </div>
          </div>
        </Section>

        {/* Tři tvrdé pravdy */}
        <Section title="Tři tvrdé pravdy pro rodiče" icon={AlertTriangle} accentColor="terracotta">

          <div className="space-y-4 mb-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#C4785A] to-[#8B4444] text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">1. Nemáte 10 let na rozhodnutí</h4>
                  <p className="text-white/90">Máte možná <strong>2-3 roky</strong>. Okno příležitosti, kdy můžete nastavit základy, se zavírá rychleji, než si myslíte.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">2. Pravidla nestačí</h4>
                  <p className="text-white/90">Pravidla se dají obejít. Jediné, co AI nemůže nahradit, je skutečný <strong>VZTAH</strong>. Pokud ho nemáte teď, za 5 let ho mít nebudete.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-[#C9A962] to-[#9A7B3C] text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">3. Vaše dítě není v bezpečí jen proto, že je "dobré dítě"</h4>
                  <p className="text-white/90">Tyto systémy jsou navrženy tak, aby prolomily i zdravé hranice. Otázka není, <strong>jestli</strong> se vaše dítě setká s těmito vlivy – ale <strong>jestli</strong> bude mít v sobě něco silnějšího.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Co můžeme udělat */}
        <Section title="Co můžeme udělat" icon={Shield} accentColor="sage">

          <div className="p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white mb-6">
            <h4 className="font-display font-bold text-lg mb-4">Nemůžeme zastavit technologii. Ale můžeme:</h4>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span><strong>Budovat vztah</strong> – takový silný, že ho AI nenahradí. Ne dokonalý. Skutečný.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span><strong>Učit odolnost</strong> – nechat děti selhávat, bojovat, čekat. To je dar, ne krutost.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <span><strong>Dávat příklad</strong> – pokud my žijeme přikovaní k obrazovkám, co očekáváme od dětí?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <span><strong>Mluvit o hodnotách</strong> – ne moralizovat. Povídat si. Poslouchat. Sdílet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                <span><strong>Modlit se</strong> – s dětmi i za děti. Každý den. I když nechtějí.</span>
              </li>
            </ul>
          </div>

          <InfoBox type="info">
            <p className="font-semibold mb-2">Připomínka:</p>
            <p className="text-sm">Budoucnost není napsaná. To, jaké děti vychováme, záleží na tom, co uděláme <strong>dnes</strong>. Ne zítra. Dnes.</p>
          </InfoBox>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] mt-6">
            <p className="text-[#4A5568] text-center italic">
              "Nejlepší čas zasadit strom byl před 20 lety. Druhý nejlepší čas je teď."
            </p>
          </div>
        </Section>

        {/* Závěr */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#C4785A] to-[#8B4444] text-white text-center">
          <p className="text-white/90 text-lg leading-relaxed mb-4">
            AI může být nejlepší nástroj nebo nejhorší náhrada.
          </p>
          <p className="text-xl font-semibold text-[#C9A962]">
            Rozhodnutí je na nás. A čas na rozhodnutí je teď.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Na co se připravit – Pohled do budoucnosti</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2025 • S láskou pro rodiče</p>
        </div>
      </footer>
    </div>
  );
}
