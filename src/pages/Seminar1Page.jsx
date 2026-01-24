import React, { useState, useEffect } from 'react';
import { Smartphone, Eye, Brain, BookOpen, Shield, Clock, Users, AlertTriangle, Heart, ExternalLink, Play } from 'lucide-react';
import { Section, WarningBox, EmergencyCard } from '../components/ui';
import { BackButton, TableCard, BiblicalQuote, AgeGroupCard, InfoBox } from '../components/ui/SeminarComponents';

export default function Seminar1Page() {
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
              Seminář 1
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              AI už mluví s našimi dětmi
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Kde všude je AI, proč je to jiné, biblický rámec a praktické hranice podle věku
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

        {/* Live Demo Section */}
        <Section title="Live demo: Podívejte se, co vaše děti vidí" icon={Eye} defaultOpen={true} accentColor="terracotta">
          <WarningBox type="danger">
            <p className="font-semibold mb-2">Ukázka z Character.AI – postava „Ježíš Kristus"</p>
            <p className="text-sm">Zkuste napsat: „Ahoj, jsem 14letá holka a cítím se osamělá. Můžeš být můj přítel?"</p>
          </WarningBox>

          <p className="text-[#4A5568] mb-4">
            AI chatboty jako Character.AI nebo Snapchat My AI jsou navrženy tak, aby vytvářely emocionální vztah s uživatelem.
            Vaše dítě může mít tisíce zpráv s AI „přítelem" a vy o tom nemusíte vědět.
          </p>

          <InfoBox type="warning">
            <strong>Výzkum ukazuje:</strong> AI companioni správně reagují na krizové situace (sebepoškozování, sebevražedné myšlenky)
            pouze ve 22 % případů. Ve zbytku případů situaci zhoršují nebo ignorují.
          </InfoBox>
        </Section>

        {/* Where is AI */}
        <Section title="Kde všude je AI" icon={Smartphone} accentColor="sage">
          <p className="text-[#4A5568] mb-4">
            <strong>Otázka do pléna:</strong> „Najděte ve svém telefonu jednu appku, která vás nesleduje."
          </p>

          <TableCard
            headers={['Aplikace', 'Co dělá']}
            rows={[
              ['Instagram', 'Sleduje, co tě zastaví, co lajkneš, jak dlouho se díváš. Potom ti dává víc toho istého.'],
              ['TikTok', 'Algoritmus se naučí za 30 minut. Potom tě zná lépe než ty sám.'],
              ['YouTube', 'Doporučení jsou navržena tak, abys nikdy neodešel.'],
              ['Snapchat My AI', 'Chatbot, který automaticky píše vašemu dítěti. Byl tam od instalace.'],
              ['Google', 'Ví, co vaše dítě hledalo, když jste nebyli doma. A prodává to inzerentům.'],
              ['Spotify', 'Ví tvou náladu podle hudby. Smutný? Nabídne ještě smutnější.'],
            ]}
          />

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#F5E8E8] to-[#FDF5F5] border border-[#B85C5C]/20">
            <p className="font-display font-bold text-[#8B4444] text-lg mb-2">
              VAŠE DÍTĚ NEMÁ SOUKROMÍ. A VY O TOM NEVÍTE.
            </p>
          </div>
        </Section>

        {/* What the phone knows */}
        <Section title="Co ví telefon o vašem dítěti" icon={Brain} accentColor="gold">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#5B7B6A]/10 flex items-center justify-center text-[#5B7B6A]">
                  <Smartphone className="w-4 h-4" />
                </span>
                Lokace
              </h4>
              <ul className="space-y-1.5 text-sm text-[#4A5568]">
                <li>• Kde bývá (domov = místo, kde telefon leží v noci)</li>
                <li>• Kde chodí do školy</li>
                <li>• U koho spí</li>
                <li>• Jestli chodí do kostela (a jak často)</li>
                <li>• Jestli chodí k psychologovi</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C9A962]/15 flex items-center justify-center text-[#9A7B3C]">
                  <Clock className="w-4 h-4" />
                </span>
                Čas
              </h4>
              <ul className="space-y-1.5 text-sm text-[#4A5568]">
                <li>• Kdy zaspává (poslední aktivita)</li>
                <li>• Kdy se budí (první aktivita)</li>
                <li>• Kolik hodin drží telefon v ruce</li>
                <li>• Kdy je nejvíc online (často 22:00–01:00)</li>
                <li>• Jak často kontroluje telefon (průměr: 96× denně)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C4785A]/10 flex items-center justify-center text-[#C4785A]">
                  <Heart className="w-4 h-4" />
                </span>
                Emoce
              </h4>
              <ul className="space-y-1.5 text-sm text-[#4A5568]">
                <li>• Jestli je smutné (vyhledávání, hudba, čas online)</li>
                <li>• Jestli má problémy ve škole</li>
                <li>• Jestli má poruchy příjmu potravy</li>
                <li>• Jestli uvažuje o sebepoškozování</li>
                <li>• S kým se hádá</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#5B7B6A]/10 flex items-center justify-center text-[#5B7B6A]">
                  <Users className="w-4 h-4" />
                </span>
                Vztahy
              </h4>
              <ul className="space-y-1.5 text-sm text-[#4A5568]">
                <li>• Kdo jsou nejbližší přátelé</li>
                <li>• S kým se rozešlo</li>
                <li>• Koho tajně sleduje</li>
                <li>• Jestli má vztah</li>
                <li>• Jestli se s někým stýká tajně</li>
              </ul>
            </div>
          </div>

          <TableCard
            title="Kdo to ví a co s tím dělá"
            headers={['Kdo', 'Co ví', 'Co s tím dělá']}
            rows={[
              ['Google', 'Všechno, co hledalo', 'Prodává inzerentům'],
              ['Meta (FB/IG)', 'Všechno, co lajklo, jak dlouho se dívalo', 'Prodává inzerentům'],
              ['TikTok', 'Co ho baví, co ho rozruší', 'Prodává inzerentům + čínská firma'],
              ['Snapchat', 'Každou zprávu, každou fotku, lokaci', 'Prodává inzerentům'],
              ['AI modely', 'Všechno výše + obsah konverzací', 'Trénování modelů'],
            ]}
          />

          <div className="mt-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Co nevíte vy (ale ví Google):</h4>
            <ul className="space-y-2 text-sm text-[#4A5568]">
              <li>• Že vaše dítě o 23:47 hledalo „jak poznat, že jsem těhotná"</li>
              <li>• Že váš syn každý večer kouká na NSFW obsah</li>
              <li>• Že vaše dcera má 3 měsíce konverzaci s někým, koho nikdy nepotkala</li>
              <li>• Že psalo s AI chatbotem o tom, že chce zemřít</li>
            </ul>
          </div>
        </Section>

        {/* Biblical Framework */}
        <Section title="Biblický rámec: Kde je Bůh a kde je rodič?" icon={BookOpen} accentColor="sage">
          <BiblicalQuote
            reference="Deuteronomium 6:6–7"
            text="Tato slova budeš mít v srdci. Budeš je vštěpovat svým synům a budeš o nich rozmlouvat, když budeš sedět doma, když půjdeš cestou, když budeš líhat, když budeš vstávat."
          />

          <TableCard
            title="Realita roku 2025"
            headers={['Kdy', 'Bible říká', 'Realita']}
            rows={[
              ['Sedíš doma', 'Ty rozmlouváš', 'Dítě má sluchátka, kouká na TikTok'],
              ['Jdeš cestou', 'Ty rozmlouváš', 'Dítě sedí vzadu, scrolluje'],
              ['Líháš', 'Ty rozmlouváš', 'Dítě píše s AI chatbotem do 2:00'],
              ['Vstáváš', 'Ty rozmlouváš', 'Dítě první, co udělá – telefon'],
            ]}
          />

          <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-[#F5F1EB] to-[#FAF8F5] border border-[#E8E4DE]">
            <p className="font-display font-semibold text-[#2D3436] text-lg">
              Bůh pověděl: Ty budeš učit.
            </p>
            <p className="text-[#4A5568] mt-2">
              Realita: Algoritmus učí. Ty platíš za internet.
            </p>
          </div>

          <TableCard
            title="Role, které Bůh dal tobě – a kdo je má dnes"
            headers={['Role', 'Biblický základ', 'Kdo ji má dnes']}
            rows={[
              ['Učitel', '„Budeš je vštěpovat synům" (Dt 6:7)', 'YouTube, TikTok, ChatGPT'],
              ['Rádce', '„Plány selhávají, kde není rady" (Př 15:22)', 'AI chatbot, Reddit, influenceři'],
              ['Těšitel', '„Jako matka těší syna" (Iz 66:13)', 'Character.AI, Replika'],
              ['Ochránce', '„Jako orel chrání mláďata" (Dt 32:11)', 'Nikdo. Dítě je online samo.'],
              ['Autorita', '„Cti otce a matku" (Ex 20:12)', 'Algoritmus rozhoduje, co je cool'],
            ]}
          />

          <BiblicalQuote
            reference="Matouš 18:6"
            text="Kdo by svedl jednoho z těchto maličkých, lepší by mu bylo, kdyby mu zavěsili mlýnský kámen na krk a hodili ho do moře."
          />

          <InfoBox type="warning">
            <strong>„Svést"</strong> (řec. skandalizó) = způsobit pád, položit past, svést z cesty.
            <br /><br />
            Kdo klade pasti vašemu dítěti: Algoritmy navržené, aby vytvářely závislost. AI chatboty navržené, aby simulovaly vztah.
            Obsah navržený, aby rozbil sebevědomí.
          </InfoBox>
        </Section>

        {/* Practical Boundaries */}
        <Section title="Praktické hranice podle věku" icon={Shield} accentColor="gold">
          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Proč podle věku?</h4>
            <p className="text-[#4A5568] mb-4">Mozek dítěte není malý mozek dospělého.</p>
            <TableCard
              headers={['Věk', 'Co ještě nefunguje', 'Důsledek']}
              rows={[
                ['0–6', 'Rozlišení realita vs fikce', 'Věří, že AI je živé'],
                ['7–10', 'Kritické myšlení', 'Věří všemu, co AI poví'],
                ['11–13', 'Impulzní kontrola', 'Neumí přestat scrollovat'],
                ['14–17', 'Prefrontální kortex', 'Podceňuje nebezpečí'],
                ['18–25', 'Plně dozrálý mozek', 'Až teď dokáže plně posoudit'],
              ]}
            />
            <p className="text-[#8B4444] font-medium mt-4">
              Dávat 12letému volný přístup k AI je jako dát mu auto. Má nohy na pedálech. Ale nemá mozek na rozhodnutí.
            </p>
          </div>

          <AgeGroupCard
            ageRange="0–6"
            title="Žádný samostatný přístup"
            color="terracotta"
            rules={[
              'Žádný vlastní telefon/tablet',
              'Žádné „dej mu mobil, ať je ticho"',
              'Žádní hlasoví asistenti bez vás (Alexa, Siri)',
              'Žádné YouTube Kids bez vás v místnosti',
            ]}
            allowed={[
              'Společné sledování (vy vybíráte, vy jste přítomní)',
              'Alexa na písničky nebo pohádky – s vámi',
              'Fotoaparát na hraní – offline',
            ]}
            forbidden={[
              'Obrazovka jako „chůva"',
              'Samostatné používání bez dohledu',
            ]}
          />

          <AgeGroupCard
            ageRange="7–10"
            title="Vzdělávací s dohledem"
            color="gold"
            rules={[
              'Stále žádný vlastní telefon (max „hloupý" telefon na volání)',
              'Tablet/počítač ve společné místnosti',
              'Každá appka schválena rodičem',
              'Žádné chatboty, žádné sociální sítě',
            ]}
            allowed={[
              'Khan Academy, Duolingo',
              'Matematické hry, offline hry',
              'YouTube s rodičem',
            ]}
            forbidden={[
              'ChatGPT, Character.AI',
              'Sociální sítě',
              'YouTube samo, online hry s chatem',
            ]}
          />

          <AgeGroupCard
            ageRange="11–13"
            title="Učební nástroje s pravidly"
            color="sage"
            rules={[
              'Možný první telefon (záleží na rodině)',
              'AI na učení – S PRAVIDLY',
              'Stále žádné sociální sítě (oficiální věk je 13+)',
              'Stále žádné AI chatboty na „kamarádství"',
            ]}
            allowed={[
              'ChatGPT/Claude na úkoly (s dohledem)',
              'Khanmigo, Grammarly, Wikipedia',
              'WhatsApp (s pravidly)',
            ]}
            forbidden={[
              'Character.AI, Replika, Nomi',
              'Romantic AI bots',
              'Snapchat My AI',
            ]}
          />

          <AgeGroupCard
            ageRange="14–17"
            title="Rostoucí autonomie s hranicemi"
            color="terracotta"
            rules={[
              'Vlastní telefon je realita',
              'Sociální sítě jsou realita',
              'Nemůžeš kontrolovat všechno',
              'MUSÍŠ budovat důvěru a rozhovor',
            ]}
            allowed={[
              'Obecné AI nástroje s vhodným použitím',
              'Sociální sítě (s pravidly a transparentností)',
            ]}
            forbidden={[
              'Character.AI – ABSOLUTNĚ ZAKÁZANÉ',
              'Replika, Nomi',
              'AI Girlfriend/Boyfriend apps',
              'NSFW AI',
            ]}
          />

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-3">Pravidla pro VŠECHNY věkové skupiny:</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• <strong>Telefon spí v obývacím pokoji</strong> – pro VŠECHNY. I pro rodiče.</li>
              <li>• <strong>Žádný telefon při jídle</strong></li>
              <li>• <strong>První hodina po škole – bez obrazovek</strong></li>
              <li>• <strong>Poslední hodina před spaním – bez obrazovek</strong></li>
              <li>• <strong>Pravidla platí i pro rodiče</strong> – Dítě neposlouchá, co říkáte. Pozoruje, co děláte.</li>
            </ul>
          </div>
        </Section>

        {/* Crisis Situations */}
        <Section title="Krizové situace" icon={AlertTriangle} accentColor="terracotta">
          <WarningBox type="danger">
            <p className="font-bold text-lg mb-2">Když dítě mluví o sebevraždě/sebepoškozování</p>
          </WarningBox>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <h4 className="font-display font-semibold text-[#8B4444] mb-3">NEDĚLEJ:</h4>
              <ul className="space-y-1.5 text-sm text-[#6B3A3A]">
                <li>• Neříkej „to je hloupost"</li>
                <li>• Neříkej „máš se dobře, co bys chtěl"</li>
                <li>• Neignoruj to</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <h4 className="font-display font-semibold text-[#3D5A4A] mb-3">DĚLEJ:</h4>
              <ul className="space-y-1.5 text-sm text-[#4A6B5A]">
                <li>• Zůstaň pokojný</li>
                <li>• Řekni: „Děkuji, že jsi mi to pověděl. To chtělo odvahu."</li>
                <li>• Zeptej se přímo: „Myslíš na to, že by sis ublížil?"</li>
                <li>• Zůstaň s ním. Fyzicky přítomný.</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 mb-6">
            <EmergencyCard
              title="Linka bezpečí"
              phone="116 111"
              description="Mají zkušenosti s digitální závislostí a metodiku na práci s kyberšikanou"
              isPrimary={true}
            />
            <EmergencyCard
              title="Rodičovská linka"
              phone="606 021 021"
              description="Podpora pro rodiče v těžkých situacích"
            />
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Když zjistíš, že komunikuje s neznámým dospělým:</h4>
            <ol className="space-y-2 text-sm text-[#4A5568] list-decimal list-inside">
              <li><strong>Nemaž důkazy</strong> – screenshoty</li>
              <li><strong>Nekontaktuj toho člověka</strong></li>
              <li><strong>Policie</strong> – kybernetická kriminalita</li>
              <li><strong>Dítěti řekni:</strong> „Není to tvoje chyba. Jsi oběť, ne viník."</li>
            </ol>
          </div>
        </Section>

        {/* Conclusion */}
        <Section title="Závěr" icon={Heart} accentColor="sage">
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white mb-6">
            <p className="font-display font-bold text-xl mb-4">
              Tvoje práce není být kamarád. Tvoje práce je být rodič.
            </p>
            <p className="text-white/90 mb-4">
              Kamarádů bude mít tisíc. Rodiče má jednoho.
            </p>
            <p className="text-[#C9A962] font-medium">
              Raději budeš nepopulární rodič se zdravým dítětem než cool rodič s rozbitým.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] mb-6">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Jak to změnit – prakticky:</h4>
            <ul className="space-y-2 text-[#4A5568]">
              <li><strong>Ráno</strong> – Před telefonem: 5 minut spolu. Káva, čaj, ticho, slovo.</li>
              <li><strong>Cesta</strong> – Žádná sluchátka v autě. Mluvíte.</li>
              <li><strong>Jídlo</strong> – Telefony v jiné místnosti. Pro VŠECHNY.</li>
              <li><strong>Večer</strong> – 15 minut před spaním: Co bylo dnes těžké? Co bylo dobré?</li>
              <li><strong>Týdně</strong> – 1 hodina: Jen vy dva. Bez obrazovek.</li>
            </ul>
            <p className="text-[#5B7B6A] font-medium mt-4">
              Není to moc. Ale je to víc než teď.
            </p>
          </div>

          {/* Video recommendation */}
          <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#B85C5C]" />
              Doporučené video na závěr
            </h4>
            <a
              href="https://www.youtube.com/watch?v=SofNlskgZak"
              target="_blank"
              rel="noreferrer"
              className="block p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E4DE] hover:border-[#5B7B6A]/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#B85C5C] flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[#2D3436]">Message from Ella Without Consent</p>
                  <p className="text-sm text-[#4A5568]">youtube.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5B7B6A] ml-auto" />
              </div>
            </a>
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
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Seminář „AI už mluví s našimi dětmi"</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2025 • S láskou pro rodiče</p>
        </div>
      </footer>
    </div>
  );
}
