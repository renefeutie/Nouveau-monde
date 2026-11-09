import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin, Bike } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Notre Univers', href: '#univers' },
    { label: 'Nos Spécialités', href: '#specialites' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Contact & Réservations', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#0c0c0e]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single Brand Wordmark / Lockup */}
            <a
              href="#hero"
              className="flex items-center gap-3 group whitespace-nowrap shrink-0"
              aria-label="Accueil Nouveau Monde"
            >
              <img
                src={RESTAURANT_INFO.logo}
                alt="Logo Nouveau Monde"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-contain border border-[#f5c253]/40 bg-black shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#f4f1ea] group-hover:text-[#f5c253] transition-colors">
                NOUVEAU MONDE
              </span>
            </a>

            {/* Zone 2: Navigation Links + Livraison */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#d6d2c8] hover:text-[#f5c253] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#f5c253]/60"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={RESTAURANT_INFO.deliveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f5c253]/15 hover:bg-[#f5c253] text-[#f5c253] hover:text-[#0c0c0e] border border-[#f5c253]/40 transition-all duration-200 whitespace-nowrap shrink-0 group font-semibold shadow-sm hover:shadow-[#f5c253]/25"
                aria-label="Commander en livraison"
              >
                <Bike className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Livraison</span>
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#f5c253] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#f5c253]" />
                <span>WhatsApp Direct</span>
              </a>
              <a
                href="#contact"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#d9242d] hover:bg-[#b81b23] text-white rounded-lg shadow-lg hover:shadow-red-900/30 transition-all whitespace-nowrap shrink-0"
              >
                Nous Contacter
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#f4f1ea] hover:bg-white/10 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#121217] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={RESTAURANT_INFO.logo}
                    alt="Logo Nouveau Monde"
                    className="w-10 h-10 rounded-lg object-contain border border-[#f5c253]/40 bg-black"
                  />
                  <span className="font-serif text-base font-bold text-[#f4f1ea]">
                    NOUVEAU MONDE
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[#d6d2c8] hover:text-[#f5c253] py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Direct access to Livraison in Mobile Menu */}
                <div className="pt-3 pb-1 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={RESTAURANT_INFO.deliveryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#f5c253]/15 border border-[#f5c253]/40 text-[#f5c253] hover:bg-[#f5c253] hover:text-[#0c0c0e] font-semibold text-sm transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Bike className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Livraison</span>
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-bold">Commander ↗</span>
                  </a>
                </div>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <MapPin className="w-4 h-4 text-[#f5c253] shrink-0" />
                <span>Bonamoussadi · Face ancienne mairie, Douala</span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold text-[#f4f1ea] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f5c253]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#d9242d] hover:bg-[#b81b23] rounded-lg text-xs font-semibold uppercase tracking-wider text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Échanger sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
