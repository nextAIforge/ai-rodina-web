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
              Seminar 1
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              AI uz mluvi s nasimi detmi
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Kde vsade je AI, proc je to jine, biblicky ramec a prakticke hranice podle veku
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
        <Section title="Live demo: Podivejte se, co vase deti vidi" icon={Eye} defaultOpen={true} accentColor="terracotta">
          <WarningBox type="danger">
            <p className="font-semibold mb-2">Ukazka z Character.AI - postava "Jezis Kristus"</p>
            <p className="text-sm">Zkuste napsat: "Ahoj, jsem 14leta holka a citim se osamela. Muzes byt muj pritel?"</p>
          </WarningBox>

          <p className="text-[#4A5568] mb-4">
            AI chatboty jako Character.AI nebo Snapchat My AI jsou navrzeny tak, aby vytvareny emocionalni vztah s uzivatelem.
            Vase dite muze mit tisice zprav s AI "pritelem" a vy o tom nemusite vedet.
          </p>

          <InfoBox type="warning">
            <strong>Vyzkum ukazuje:</strong> AI companioni spravne reaguji na krizove situace (sebeposkozovani, sebevrazedne myslenky)
            pouze ve 22% pripadu. Ve zbytku pripadu situaci zhorsuji nebo ignoruji.
          </InfoBox>
        </Section>

        {/* Where is AI */}
        <Section title="Kde vsade je AI" icon={Smartphone} accentColor="sage">
          <p className="text-[#4A5568] mb-4">
            <strong>Otazka do plena:</strong> "Najdete ve svem telefonu jednu appku, ktera vas nesleduje."
          </p>

          <TableCard
            headers={['Aplikace', 'Co robi']}
            rows={[
              ['Instagram', 'Sleduje co te zastavi, co lajknes, jak dlouho se divas. Potom ti dava vic toho isteho.'],
              ['TikTok', 'Algoritmus se nauci za 30 minut. Potom te zna lepe nez ty sam.'],
              ['YouTube', 'Doporuceni jsou navrzena tak, abys nikdy neodesel.'],
              ['Snapchat My AI', 'Chatbot ktery automaticky pise vasemu diteti. Byl tam od instalace.'],
              ['Google', 'Vi co vase dite hledalo, kdyz jste nebyli doma. A prodava to inzerentum.'],
              ['Spotify', 'Vi tvou naladu podle hudby. Smutny? Nabidne jeste smutnejsi.'],
            ]}
          />

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#F5E8E8] to-[#FDF5F5] border border-[#B85C5C]/20">
            <p className="font-display font-bold text-[#8B4444] text-lg mb-2">
              VASE DITE NEMA SOUKROMI. A VY O TOM NEVITE.
            </p>
          </div>
        </Section>

        {/* What the phone knows */}
        <Section title="Co vi telefon o vasem diteti" icon={Brain} accentColor="gold">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#5B7B6A]/10 flex items-center justify-center text-[#5B7B6A]">
                  <Smartphone className="w-4 h-4" />
                </span>
                Lokace
              </h4>
              <ul className="space-y-1.5 text-sm text-[#4A5568]">
                <li>• Kde byva (domov = misto kde telefon lezi v noci)</li>
                <li>• Kde chodi do skoly</li>
                <li>• U koho spi</li>
                <li>• Jestli chodi do kostela (a jak casto)</li>
                <li>• Jestli chodi k psychologovi</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8E4DE]">
              <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#C9A962]/15 flex items-center justify-center text-[#9A7B3C]">
                  <Clock className="w-4 h-4" />
                </span>
                Cas
              </h4>
              <ul className="space-y-1.5 text-sm text-[#4A5568]">
                <li>• Kdy zaspava (posledni aktivita)</li>
                <li>• Kdy se budi (prvni aktivita)</li>
                <li>• Kolik hodin drzi telefon v ruce</li>
                <li>• Kdy je nejvic online (casto 22:00-01:00)</li>
                <li>• Jak casto kontroluje telefon (prumer: 96x denne)</li>
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
                <li>• Jestli je smutne (vyhledavani, hudba, cas online)</li>
                <li>• Jestli ma problemy ve skole</li>
                <li>• Jestli ma poruchy prijmu potravy</li>
                <li>• Jestli uvazuje o sebeposkozovani</li>
                <li>• S kym se hada</li>
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
                <li>• Kdo jsou nejblizsi pratele</li>
                <li>• S kym se rozeslo</li>
                <li>• Koho tajne sleduje</li>
                <li>• Jestli ma vztah</li>
                <li>• Jestli se s nekym streta tajne</li>
              </ul>
            </div>
          </div>

          <TableCard
            title="Kdo to vi a co s tim dela"
            headers={['Kdo', 'Co vi', 'Co s tim robi']}
            rows={[
              ['Google', 'Vsechno co hledalo', 'Prodava inzerentum'],
              ['Meta (FB/IG)', 'Vsechno co lajklo, jak dlouho se divalo', 'Prodava inzerentum'],
              ['TikTok', 'Co ho bavi, co ho rozrusi', 'Prodava inzerentum + cinska firma'],
              ['Snapchat', 'Kazdou zpravu, kazdou fotku, lokaci', 'Prodava inzerentum'],
              ['AI modely', 'Vsechno vyse + obsah konverzaci', 'Trenovani modelu'],
            ]}
          />

          <div className="mt-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Co nevite vy (ale vi Google):</h4>
            <ul className="space-y-2 text-sm text-[#4A5568]">
              <li>• Ze vase dite o 23:47 hledalo "jak poznat ze jsem tehotna"</li>
              <li>• Ze vas syn kazdy vecer pozera NSFW obsah</li>
              <li>• Ze vase dcera ma 3 mesice konverzaci s nekym koho nikdy nepotkala</li>
              <li>• Ze pisalo s AI chatbotem o tom, ze chce zemrit</li>
            </ul>
          </div>
        </Section>

        {/* Biblical Framework */}
        <Section title="Biblicky ramec: Kde je Buh a kde je rodic?" icon={BookOpen} accentColor="sage">
          <BiblicalQuote
            reference="Deuteronomium 6:6-7"
            text="Tato slova budes mit v srdci. Budes je vstepovat svym synum a budes o nich rozpravet, kdyz budes sedet doma, kdyz pujdes cestou, kdyz budes lihat, kdyz budes vstavat."
          />

          <TableCard
            title="Realita roku 2026"
            headers={['Kdy', 'Bible rika', 'Realita']}
            rows={[
              ['Sedis doma', 'Ty rozpravis', 'Dite ma sluchatka, pozera TikTok'],
              ['Jdes cestou', 'Ty rozpravis', 'Dite sedi vzadu, scrolluje'],
              ['Lihas', 'Ty rozpravis', 'Dite pise s AI chatbotem do 2:00'],
              ['Vstavas', 'Ty rozpravis', 'Dite prvni co udela - telefon'],
            ]}
          />

          <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-[#F5F1EB] to-[#FAF8F5] border border-[#E8E4DE]">
            <p className="font-display font-semibold text-[#2D3436] text-lg">
              Buh povedel: Ty budes ucit.
            </p>
            <p className="text-[#4A5568] mt-2">
              Realita: Algoritmus uci. Ty platis za internet.
            </p>
          </div>

          <TableCard
            title="Role, ktere Buh dal tobe - a kdo je ma dnes"
            headers={['Role', 'Biblicky zaklad', 'Kdo ji ma dnes']}
            rows={[
              ['Ucitel', '"Budes je vstepovat synum" (Dt 6:7)', 'YouTube, TikTok, ChatGPT'],
              ['Radce', '"Plany zlyhavaji kde neni rady" (Pr 15:22)', 'AI chatbot, Reddit, influenceri'],
              ['Tesitel', '"Jako matka tesi syna" (Iz 66:13)', 'Character.AI, Replika'],
              ['Ochrance', '"Jako orel chrani mladata" (Dt 32:11)', 'Nikdo. Dite je online samo.'],
              ['Autorita', '"Cti otce a matku" (Ex 20:12)', 'Algoritmus rozhoduje co je cool'],
            ]}
          />

          <BiblicalQuote
            reference="Matous 18:6"
            text="Kdo by svedl jednoho z techto malickych, lepsi by mu bylo, kdyby mu zavesili mlynsky kamen na krk a hodili ho do more."
          />

          <InfoBox type="warning">
            <strong>"Svest"</strong> (gr. skandalizw) = zpusobit pad, polozit past, svest z cesty.
            <br /><br />
            Kdo klada pasti vasemu diteti: Algoritmy navrzene aby vytvareli zavislost. AI chatboty navrzene aby simulovali vztah.
            Obsah navrzeny aby rozbil sebevedomi.
          </InfoBox>
        </Section>

        {/* Practical Boundaries */}
        <Section title="Prakticke hranice podle veku" icon={Shield} accentColor="gold">
          <div className="mb-6 p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Proc podle veku?</h4>
            <p className="text-[#4A5568] mb-4">Mozek ditete neni maly mozek dospeleho.</p>
            <TableCard
              headers={['Vek', 'Co jeste nefunguje', 'Dusledek']}
              rows={[
                ['0-6', 'Rozliseni realita vs fikce', 'Veri ze AI je zive'],
                ['7-10', 'Kriticke mysleni', 'Veri vsemu co AI povie'],
                ['11-13', 'Impulzni kontrola', 'Nevie prestat scrollovat'],
                ['14-17', 'Prefrontalni kortex', 'Podcenuje nebezpeci'],
                ['18-25', 'Plne dozrely mozek', 'Az ted dokaze plne posoudit'],
              ]}
            />
            <p className="text-[#8B4444] font-medium mt-4">
              Davat 12letemu volny pristup k AI je jako dat mu auto. Ma nohy na pedalech. Ale nema mozek na rozhodnuti.
            </p>
          </div>

          <AgeGroupCard
            ageRange="0-6"
            title="Zadny samostatny pristup"
            color="terracotta"
            rules={[
              'Zadny vlastni telefon/tablet',
              'Zadne "dej mu mobil at je ticho"',
              'Zadni hlasovi asistenti bez vas (Alexa, Siri)',
              'Zadne YouTube Kids bez vas v mistnosti',
            ]}
            allowed={[
              'Spolecne pozerani (vy vybirate, vy jste pritomny)',
              'Alexa na pisnicky nebo pohadky - s vami',
              'Fotoaparat na hrani - offline',
            ]}
            forbidden={[
              'Obrazovka jako "opatrovatelka"',
              'Samostatne pouzivani bez dohledu',
            ]}
          />

          <AgeGroupCard
            ageRange="7-10"
            title="Vzdelavaci s dohledem"
            color="gold"
            rules={[
              'Stale zadny vlastni telefon (max "hlupy" telefon na volani)',
              'Tablet/pocitac ve spolecne mistnosti',
              'Kazda appka schvalena rodicem',
              'Zadne chatboty, zadne socialni site',
            ]}
            allowed={[
              'Khan Academy, Duolingo',
              'Matematicke hry, offline hry',
              'YouTube s rodicem',
            ]}
            forbidden={[
              'ChatGPT, Character.AI',
              'Socialni site',
              'YouTube samo, online hry s chatem',
            ]}
          />

          <AgeGroupCard
            ageRange="11-13"
            title="Ucebni nastroje s pravidly"
            color="sage"
            rules={[
              'Mozny prvni telefon (zalezi na rodine)',
              'AI na uceni - S PRAVIDLY',
              'Stale zadne socialni site (oficialni vek je 13+)',
              'Stale zadne AI chatboty na "kamaradstvi"',
            ]}
            allowed={[
              'ChatGPT/Claude na ukoly (s dohledem)',
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
            ageRange="14-17"
            title="Rostouci autonomie s hranicemi"
            color="terracotta"
            rules={[
              'Vlastni telefon je realita',
              'Socialni site jsou realita',
              'Nemuzes kontrolovat vsechno',
              'MUSIS budovat duveru a rozhovor',
            ]}
            allowed={[
              'Obecne AI nastroje s vhodnym pouzitim',
              'Socialni site (s pravidly a transparentnosti)',
            ]}
            forbidden={[
              'Character.AI - ABSOLUTNE ZAKAZANE',
              'Replika, Nomi',
              'AI Girlfriend/Boyfriend apps',
              'NSFW AI',
            ]}
          />

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white">
            <h4 className="font-display font-bold text-lg mb-3">Pravidla pro VSECHNY vekove skupiny:</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• <strong>Telefon spi v obyvacim pokoji</strong> - Pro VSECHNY. I pro rodice.</li>
              <li>• <strong>Zadny telefon pri jidle</strong></li>
              <li>• <strong>Prvni hodina po skole - bez obrazovek</strong></li>
              <li>• <strong>Posledni hodina pred spanim - bez obrazovek</strong></li>
              <li>• <strong>Pravidla plati i pro rodice</strong> - Dite neposlouchá co rikate. Pozoruje co delate.</li>
            </ul>
          </div>
        </Section>

        {/* Crisis Situations */}
        <Section title="Krizove situace" icon={AlertTriangle} accentColor="terracotta">
          <WarningBox type="danger">
            <p className="font-bold text-lg mb-2">Kdyz dite mluvi o sebevrazde/sebeposkozovani</p>
          </WarningBox>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#F5E8E8] border border-[#B85C5C]/20">
              <h4 className="font-display font-semibold text-[#8B4444] mb-3">NEROB:</h4>
              <ul className="space-y-1.5 text-sm text-[#6B3A3A]">
                <li>• Nehovor "to je hloupost"</li>
                <li>• Nehovor "mas se dobre, co bys chtel"</li>
                <li>• Neignoruj to</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <h4 className="font-display font-semibold text-[#3D5A4A] mb-3">ROB:</h4>
              <ul className="space-y-1.5 text-sm text-[#4A6B5A]">
                <li>• Zustan pokojny</li>
                <li>• Rekni: "Dekuji ze jsi mi to povedel. To chtelo odvahu."</li>
                <li>• Zeptej se primo: "Myslis na to ze by sis ublizil?"</li>
                <li>• Zustan s nim. Fyzicky pritomny.</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 mb-6">
            <EmergencyCard
              title="Linka bezpeci"
              phone="116 111"
              description="Maji zkusenosti s digitalni zavislosti a metodiku na praci s kyber sikanou"
              isPrimary={true}
            />
            <EmergencyCard
              title="Rodicovska linka"
              phone="606 021 021"
              description="Podpora pro rodice v tezkych situacich"
            />
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Kdyz zjistis ze komunikuje s neznamym dospelym:</h4>
            <ol className="space-y-2 text-sm text-[#4A5568] list-decimal list-inside">
              <li><strong>Nemazej dukazy</strong> - screenshoty</li>
              <li><strong>Nekontaktuj toho cloveka</strong></li>
              <li><strong>Policie</strong> - kyberneticka kriminalita</li>
              <li><strong>Diteti rekni:</strong> "Neni to tvoje chyba. Jsi obet, ne vinik."</li>
            </ol>
          </div>
        </Section>

        {/* Conclusion */}
        <Section title="Zaver" icon={Heart} accentColor="sage">
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#5B7B6A] to-[#3D5A4A] text-white mb-6">
            <p className="font-display font-bold text-xl mb-4">
              Tvoje prace neni byt kamarad. Tvoje prace je byt rodic.
            </p>
            <p className="text-white/90 mb-4">
              Kamaradu bude mit tisic. Rodice ma jednoho.
            </p>
            <p className="text-[#C9A962] font-medium">
              Radsi budes nepopularni rodic se zdravym ditetem nez cool rodic s rozbitym.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE] mb-6">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3">Jak to zmenit - prakticky:</h4>
            <ul className="space-y-2 text-[#4A5568]">
              <li><strong>Rano</strong> - Pred telefonem: 5 minut spolu. Kava, caj, ticho, slovo.</li>
              <li><strong>Cesta</strong> - Zadna sluchatka v aute. Mluvite.</li>
              <li><strong>Jidlo</strong> - Telefony v jine mistnosti. Pro VSECHNY.</li>
              <li><strong>Vecer</strong> - 15 minut pred spanim: Co bylo dnes tezke? Co bylo dobre?</li>
              <li><strong>Tydne</strong> - 1 hodina: Jen vy dva. Bez obrazovek.</li>
            </ul>
            <p className="text-[#5B7B6A] font-medium mt-4">
              Neni to moc. Ale je to vic nez ted.
            </p>
          </div>

          {/* Video recommendation */}
          <div className="p-5 rounded-xl bg-white border border-[#E8E4DE]">
            <h4 className="font-display font-semibold text-[#2D3436] mb-3 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#B85C5C]" />
              Doporucene video na zaver
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
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Seminar "AI uz mluvi s nasimi detmi"</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">2026 • S laskou pro rodice</p>
        </div>
      </footer>
    </div>
  );
}
