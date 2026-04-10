import React, { useState, useEffect } from 'react';
import { Mail, Send, MessageSquare, Link as LinkIcon, User, CheckCircle, Heart, ExternalLink } from 'lucide-react';
import { BackButton } from '../components/ui';

export default function KontaktPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'comment',
    message: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Zpravu se nepodarilo odeslat.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', type: 'comment', message: '', company: '' });
    } catch (error) {
      setSubmitError(error.message || 'Zpravu se nepodarilo odeslat.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const messageTypes = [
    { value: 'comment', label: 'Komentář nebo nápad', icon: MessageSquare },
    { value: 'link', label: 'Doporučení odkazu/zdroje', icon: LinkIcon },
    { value: 'help', label: 'Potřebuji pomoct', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962] via-[#B8984A] to-[#9A7B3C]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <BackButton />
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              Spojte se s námi
            </div>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Kontakt
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Máte nápad, doporučení nebo potřebujete pomoc? Napište nám!
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
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            {/* Email card */}
            <div className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#C9A962]/15 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#9A7B3C]" />
                </div>
                <h3 className="font-display font-semibold text-[#2D3436]">Email</h3>
              </div>
              <a
                href="mailto:info@aiprorodinu.cz"
                className="text-[#5B7B6A] hover:text-[#3D5A4A] font-medium transition-colors break-all"
              >
                info@aiprorodinu.cz
              </a>
              <p className="text-[#7A7A7A] text-sm mt-2">
                Odpovídáme obvykle do 48 hodin
              </p>
            </div>

            {/* What we welcome */}
            <div className="card p-5">
              <h3 className="font-display font-semibold text-[#2D3436] mb-3">Co uvítáme</h3>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li className="flex items-start gap-2">
                  <span className="text-[#5B7B6A]">✓</span>
                  Zpětnou vazbu k seminářům
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B7B6A]">✓</span>
                  Tipy na užitečné zdroje
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B7B6A]">✓</span>
                  Otázky k AI a rodičovství
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B7B6A]">✓</span>
                  Příběhy z vaší rodiny
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5B7B6A]">✓</span>
                  Návrhy na zlepšení
                </li>
              </ul>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DE]">
              <p className="text-[#7A7A7A] text-xs">
                <strong>Soukromí:</strong> Vaše údaje použijeme pouze pro odpověď na váš dotaz. Nebudeme je sdílet s třetími stranami ani používat k marketingu.
              </p>
            </div>

            {/* Parent organization */}
            <div className="p-4 rounded-xl bg-[#EDF5F0] border border-[#5B7B6A]/20">
              <p className="text-[#4A5568] text-xs mb-2">Projekt zastřešuje</p>
              <a
                href="https://radispolu.cz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#5B7B6A] font-semibold hover:text-[#3D5A4A] transition-colors"
              >
                radispolu.cz
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="card p-5 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#5B7B6A]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#5B7B6A]" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#2D3436] mb-2">
                    Děkujeme!
                  </h3>
                  <p className="text-[#4A5568] mb-4">
                    Zpráva byla odeslána na <strong>info@aiprorodinu.cz</strong>.
                  </p>
                  <p className="text-[#7A7A7A] text-sm mb-6">
                    Pokud byste nám chtěli dopsat něco dalšího, můžete napsat i přímo na{' '}
                    <a href="mailto:info@aiprorodinu.cz" className="text-[#5B7B6A] font-medium">
                      info@aiprorodinu.cz
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', type: 'comment', message: '' });
                    }}
                    className="text-[#5B7B6A] font-medium hover:underline"
                  >
                    Poslat další zprávu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display font-bold text-xl md:text-2xl text-[#2D3436] mb-6">
                    Napište nám
                  </h2>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2D3436] mb-1.5">
                      Jméno <span className="text-[#7A7A7A]">(nepovinné)</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Vaše jméno"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E8E4DE] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/30 focus:border-[#5B7B6A] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D3436] mb-1.5">
                      Email <span className="text-[#B85C5C]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vas@email.cz"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E8E4DE] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/30 focus:border-[#5B7B6A] transition-all"
                      />
                    </div>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Společnost</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block text-sm font-medium text-[#2D3436] mb-2">
                      O co se jedná?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {messageTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, type: type.value }))}
                          className={`flex items-center gap-2 p-3 rounded-lg border transition-all text-left ${
                            formData.type === type.value
                              ? 'border-[#5B7B6A] bg-[#5B7B6A]/5 text-[#3D5A4A]'
                              : 'border-[#E8E4DE] bg-white text-[#4A5568] hover:border-[#5B7B6A]/50'
                          }`}
                        >
                          <type.icon className={`w-4 h-4 ${formData.type === type.value ? 'text-[#5B7B6A]' : 'text-[#7A7A7A]'}`} />
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2D3436] mb-1.5">
                      Vaše zpráva <span className="text-[#B85C5C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={
                        formData.type === 'link'
                          ? "Napište odkaz a krátký popis, proč ho doporučujete..."
                          : formData.type === 'help'
                          ? "Popište svou situaci. Čím více detailů, tím lépe vám můžeme poradit..."
                          : "Vaše myšlenky, nápady nebo zpětná vazba..."
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[#E8E4DE] bg-white focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/30 focus:border-[#5B7B6A] transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.email || !formData.message}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#5B7B6A] to-[#4A6B5A] text-white font-semibold hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Odesílám...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Odeslat zprávu
                      </>
                    )}
                  </button>

                  {submitError && (
                    <div className="p-3 rounded-lg bg-[#F5E8E8] border border-[#B85C5C]/20 text-sm text-[#8B4444]">
                      {submitError}
                    </div>
                  )}

                  <p className="text-[#7A7A7A] text-xs text-center">
                    Formulář odešle zprávu přímo na <strong>info@aiprorodinu.cz</strong>. Pokud by odeslání selhalo, můžete napsat i ručně na tuto adresu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E4DE] bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C9A962] mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <div className="w-6 md:w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-[#4A5568] mb-2 text-sm md:text-base">Těšíme se na vaši zprávu</p>
          <p className="text-[#7A9B8A] font-medium text-sm md:text-base">info@aiprorodinu.cz</p>
        </div>
      </footer>
    </div>
  );
}
