import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { BackButton } from '../components/ui';

const glossaryData = [
  {
    category: "Základní pojmy",
    terms: [
      {
        term: "Umělá inteligence (AI)",
        definition: "Počítačový program, který dokáže \"přemýšlet\" a učit se. Není to skutečná inteligence jako u člověka – AI nemá vědomí, city ani duši. Je to velmi sofistikovaný nástroj, který rozpoznává vzory a generuje odpovědi na základě dat, na kterých byl trénován.",
        analogy: "Představte si velmi chytrý kalkulátor, který místo čísel pracuje s textem a obrázky."
      },
      {
        term: "Chatbot",
        definition: "Program, se kterým můžete \"chatovat\" – píšete mu zprávy a on odpovídá. Může být jednoduchý (odpovídá jen na předem naprogramované otázky) nebo založený na AI (generuje vlastní odpovědi).",
        analogy: "Jako automatická telefonní linka, ale textová a mnohem chytřejší."
      },
      {
        term: "AI Asistent",
        definition: "Chatbot na steroidech. AI asistent (jako Claude, ChatGPT, Gemini) dokáže pomáhat s úkoly – psát texty, vysvětlovat, překládat, programovat. Je navržen jako NÁSTROJ pro produktivitu.",
        analogy: "Jako velmi vzdělaný pomocník, který ale nemá vlastní názory ani city."
      },
      {
        term: "AI Companion / AI Přítel",
        definition: "AI navržená tak, aby simulovala přátelství nebo romantický vztah. VAROVÁNÍ: Tyto aplikace (Character.AI, Replika) jsou pro děti nebezpečné – vytváří emocionální závislost na něčem, co není skutečné.",
        analogy: "Představte si herce, který hraje vašeho přítele 24/7. Vypadá jako přítel, ale není to skutečný vztah.",
        warning: true
      },
      {
        term: "AI Agent",
        definition: "AI, která může sama provádět akce – nejen odpovídat, ale i klikat, vyhledávat, objednávat. Zatím vzácné, ale za pár let běžné. Představte si AI, která vám sama zarezervuje restauraci.",
        analogy: "Jako osobní asistent, který nejen radí, ale i jedná za vás."
      },
      {
        term: "Avatar",
        definition: "Vizuální reprezentace – obrázek nebo 3D postava. \"AI Avatar\" je umělá tvář/postava ovládaná umělou inteligencí. Může vypadat jako skutečný člověk (deepfake) nebo jako animovaná postava.",
        analogy: "Jako loutka, kterou ovládá AI místo člověka."
      }
    ]
  },
  {
    category: "Jak AI funguje",
    terms: [
      {
        term: "Token",
        definition: "Základní jednotka, kterou AI \"čte\" text. Není to celé slovo – spíš kousek slova. Například \"přátelství\" může být 3-4 tokeny. AI má limit tokenů, kolik textu může najednou zpracovat.",
        analogy: "Jako puzzle dílky, ze kterých AI skládá a čte věty."
      },
      {
        term: "Prompt",
        definition: "Váš dotaz nebo instrukce pro AI. Čím lepší prompt, tím lepší odpověď. \"Napiš mi recept\" je slabý prompt. \"Napiš mi jednoduchý recept na oběd pro 4 osoby, který zvládne začátečník za 30 minut\" je silný prompt.",
        analogy: "Jako zadání úkolu – čím přesněji zadáte, tím lepší výsledek dostanete."
      },
      {
        term: "Kontext / Context Window",
        definition: "Kolik si AI \"pamatuje\" z vaší konverzace. AI nemá trvalou paměť – pamatuje si jen aktuální rozhovor, a i ten má limity. Když je konverzace moc dlouhá, AI \"zapomene\" začátek.",
        analogy: "Jako pracovní stůl – vejde se na něj jen omezené množství papírů najednou."
      },
      {
        term: "Trénování / Training",
        definition: "Proces, kterým se AI \"učí\". AI přečte miliardy textů z internetu a naučí se vzory – jak slova následují za sebou, jak lidé komunikují. DŮLEŽITÉ: AI se neučí z vašich konverzací (většinou).",
        analogy: "Jako student, který přečetl celou knihovnu, ale nikdy nežil skutečný život."
      },
      {
        term: "Halucinace",
        definition: "Když si AI vymýšlí – uvádí nepravdivé informace, které znějí přesvědčivě. AI \"neví, co neví\" – když nezná odpověď, často si ji vymyslí místo přiznání. VŽDY ověřujte důležité informace!",
        analogy: "Jako student u zkoušky, který neví odpověď, ale mluví tak přesvědčivě, že tomu skoro věříte.",
        warning: true
      },
      {
        term: "Model",
        definition: "Konkrétní verze AI. Například GPT-4, Claude 3, Gemini Pro jsou různé \"modely\". Novější modely jsou obvykle chytřejší, ale i dražší na provoz.",
        analogy: "Jako různé modely aut – všechny jezdí, ale každý má jiné vlastnosti."
      }
    ]
  },
  {
    category: "Generování obsahu",
    terms: [
      {
        term: "Generativní AI",
        definition: "AI, která vytváří (generuje) nový obsah – texty, obrázky, hudbu, video. ChatGPT generuje text, DALL-E generuje obrázky, Suno generuje hudbu.",
        analogy: "Jako umělec, který tvoří na zakázku podle vašeho zadání."
      },
      {
        term: "Deepfake",
        definition: "Falešné video nebo audio, kde AI \"nasadí\" tvář nebo hlas jednoho člověka na jiného. Může být neškodné (zábava) nebo velmi nebezpečné (podvody, dezinformace).",
        analogy: "Jako digitální maska, která je tak dokonalá, že ji nepoznáte.",
        warning: true
      },
      {
        term: "Text-to-Image",
        definition: "AI, která vytvoří obrázek podle textového popisu. Napíšete \"západ slunce nad horami\" a AI vygeneruje obrázek. Příklady: DALL-E, Midjourney, Stable Diffusion.",
        analogy: "Jako malíř, kterému popíšete, co chcete, a on to namaluje."
      },
      {
        term: "LLM (Large Language Model)",
        definition: "Velký jazykový model – základ dnešních AI asistentů. \"Velký\" znamená miliardy parametrů (čísel), které určují, jak AI zpracovává jazyk. ChatGPT, Claude, Gemini jsou všechno LLM.",
        analogy: "Jako obří mozek specializovaný na jazyk a text."
      }
    ]
  },
  {
    category: "Bezpečnost a soukromí",
    terms: [
      {
        term: "Data Privacy / Ochrana dat",
        definition: "Co se děje s informacemi, které AI řeknete. Některé služby používají vaše konverzace k trénování. Jiné ne. NIKDY nesdílejte s AI citlivé informace (hesla, rodná čísla, intimní detaily).",
        analogy: "Jako rozdíl mezi šeptáním příteli a mluvením do megafonu na náměstí.",
        warning: true
      },
      {
        term: "Content Moderation",
        definition: "Filtrování obsahu – AI má \"pravidla\", co smí a nesmí říkat. Kvalitní AI odmítne generovat škodlivý obsah. Ale žádný filtr není dokonalý.",
        analogy: "Jako učitel, který odmítne odpovídat na nevhodné otázky."
      },
      {
        term: "Jailbreak",
        definition: "Pokus \"obejít\" bezpečnostní omezení AI. Lidé (včetně dětí) zkoušejí přimět AI říct nebo udělat věci, které by neměla. Seriózní AI to většinou odmítne.",
        analogy: "Jako snaha přemluvit učitele, aby vám prozradil odpovědi na test."
      },
      {
        term: "End-to-End Encryption",
        definition: "Šifrování, kdy vaše zprávy může přečíst jen příjemce. Většina AI chatbotů toto NEMÁ – provozovatel vidí vaše konverzace.",
        analogy: "Rozdíl mezi zamčeným dopisem a pohlednicí, kterou může přečíst kdokoliv."
      }
    ]
  },
  {
    category: "Pro rodiče důležité",
    terms: [
      {
        term: "Parasociální vztah",
        definition: "Jednostranný \"vztah\" – když člověk cítí emocionální spojení s někým/něčím, kdo ho nezná (celebrita, fiktivní postava, AI). Děti si snadno vytvoří parasociální vztah k AI, které se tváří jako přítel.",
        analogy: "Jako když dítě považuje postavu z filmu za skutečného přítele.",
        warning: true
      },
      {
        term: "Doom Scrolling",
        definition: "Nekontrolované scrollování negativním obsahem. AI algoritmy na sociálních sítích vybírají obsah, který vás \"chytí\" – často negativní, šokující, kontroverzní. Velmi návykové.",
        analogy: "Jako jíst chipsy – nemůžete přestat, i když víte, že to není zdravé.",
        warning: true
      },
      {
        term: "Algoritmus",
        definition: "Matematický \"recept\", podle kterého počítač rozhoduje. Na sociálních sítích algoritmus určuje, co uvidíte. Je navržen tak, aby vás udržel co nejdéle – ne aby vám pomohl.",
        analogy: "Jako neviditelný DJ, který vybírá, jakou hudbu uslyšíte – ale chce, abyste nikdy neodešli."
      },
      {
        term: "Digital Footprint / Digitální stopa",
        definition: "Všechno, co o vás existuje online – příspěvky, fotky, komentáře, ale i data, která sbírají aplikace. Jednou online = navždy online. Vaše děti budou mít digitální stopu dřív, než se narodí.",
        analogy: "Jako tetování – můžete ho zakrýt, ale nikdy úplně nezmizí."
      },
      {
        term: "Screen Time",
        definition: "Čas strávený u obrazovky. Není to jen o množství – záleží i na KVALITĚ. Hodina učení s AI je jiná než hodina scrollování TikTokem.",
        analogy: "Jako jídlo – záleží nejen kolik, ale hlavně co."
      }
    ]
  }
];

export default function SlovnikPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(
    glossaryData.reduce((acc, cat) => ({ ...acc, [cat.category]: true }), {})
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredData = glossaryData.map(category => ({
    ...category,
    terms: category.terms.filter(term =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.terms.length > 0);

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
              <BookOpen className="w-4 h-4" />
              Pro rodiče
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Slovník AI pojmů
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Jednoduché vysvětlení technických termínů pro rodiče bez technického zázemí
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
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
            <input
              type="text"
              placeholder="Hledat pojem..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#E8E4DE] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/30 focus:border-[#5B7B6A] transition-all"
            />
          </div>
        </div>

        {/* Glossary */}
        <div className="space-y-6">
          {filteredData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card overflow-hidden">
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-[#5B7B6A] to-[#4A6B5A] text-white hover:opacity-95 transition-opacity"
              >
                <h2 className="font-display font-bold text-lg md:text-xl">{category.category}</h2>
                {expandedCategories[category.category] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {expandedCategories[category.category] && (
                <div className="divide-y divide-[#E8E4DE]">
                  {category.terms.map((item, termIndex) => (
                    <div
                      key={termIndex}
                      className={`p-5 ${item.warning ? 'bg-[#FDF6E3]/50' : ''}`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <h3 className="font-display font-bold text-[#2D3436] text-base md:text-lg">
                          {item.term}
                        </h3>
                        {item.warning && (
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#C9A962]/20 text-[#9A7B3C]">
                            Pozor
                          </span>
                        )}
                      </div>
                      <p className="text-[#4A5568] text-sm md:text-base mb-3 leading-relaxed">
                        {item.definition}
                      </p>
                      {item.analogy && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E4DE]">
                          <span className="text-[#5B7B6A] font-medium text-sm">💡</span>
                          <p className="text-[#5B7B6A] text-sm italic">{item.analogy}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#7A7A7A] text-lg">Žádné výsledky pro "{searchTerm}"</p>
          </div>
        )}

        {/* Info box */}
        <div className="mt-8 p-5 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
          <p className="text-[#3D5A4A] text-sm md:text-base">
            <strong>Tip:</strong> Tento slovník můžete použít i s dětmi – vysvětlete jim pojmy jednoduše a diskutujte o nich. Čím víc rozumí technologii, tím lépe ji mohou používat zodpovědně.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Slovník AI pojmů pro rodiče</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2026 • S láskou pro rodiče</p>
        </div>
      </footer>
    </div>
  );
}
