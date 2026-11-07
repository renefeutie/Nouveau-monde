import { MapPin, Phone, MessageSquare, Instagram, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] border-t border-white/10 text-[#a8a396] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src={RESTAURANT_INFO.logo}
                alt="Logo Nouveau Monde"
                className="w-12 h-12 rounded-lg object-contain border border-[#f5c253]/40 bg-black"
              />
              <span className="font-serif text-xl font-bold tracking-wider text-[#f4f1ea] group-hover:text-[#f5c253] transition-colors">
                NOUVEAU MONDE
              </span>
            </a>
            <p className="text-xs text-[#b8b4a7] leading-relaxed font-light">
              Restaurant & Lounge à Bonamoussadi, Douala. Spécialités braisées, grillades généreuses, pizzas artisanales et bar à cocktails dans une ambiance feutrée et festive.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#f5c253] hover:text-[#0c0c0e] text-white transition-colors"
                aria-label="Instagram Nouveau Monde"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-[#0c0c0e] text-white transition-colors"
                aria-label="WhatsApp Nouveau Monde"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#d9242d] hover:text-white text-white transition-colors"
                aria-label="Téléphone Nouveau Monde"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm font-bold text-[#f4f1ea] uppercase tracking-wider mb-1">
              Navigation
            </h4>
            <a href="#hero" className="text-xs hover:text-[#f5c253] transition-colors">
              Accueil
            </a>
            <a href="#univers" className="text-xs hover:text-[#f5c253] transition-colors">
              Notre Univers & Lounge
            </a>
            <a href="#specialites" className="text-xs hover:text-[#f5c253] transition-colors">
              Nos Spécialités & Braisés
            </a>
            <a href="#galerie" className="text-xs hover:text-[#f5c253] transition-colors">
              Galerie Photos
            </a>
            <a href="#contact" className="text-xs hover:text-[#f5c253] transition-colors">
              Contact & Réservations
            </a>
          </div>

          {/* Horaires d'Ouverture */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm font-bold text-[#f4f1ea] uppercase tracking-wider mb-1">
              Horaires de Service
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="block text-[#f4f1ea] font-medium">Lundi – Jeudi</span>
                <span className="text-white/50">11h30 – 01h00 non-stop</span>
              </div>
              <div>
                <span className="block text-[#f4f1ea] font-medium">Vendredi – Dimanche</span>
                <span className="text-[#f5c253] font-medium">11h30 – 03h00 (Soirées Lounge)</span>
              </div>
              <div className="pt-2 text-[11px] text-white/40">
                Service continu pour déjeuner, dîner et verres en soirée.
              </div>
            </div>
          </div>

            {/* Localisation */}
            <div className="flex flex-col gap-3">
              <h4 className="font-serif text-sm font-bold text-[#f4f1ea] uppercase tracking-wider mb-1">
                Localisation
              </h4>
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-[#f5c253] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#f4f1ea] font-medium">{RESTAURANT_INFO.neighborhood}, Douala</span>
                  <span className="text-white/50">Face Axe Principal · Cameroun</span>
                </div>
              </div>
              <div className="text-xs text-white/50">
                Service voiturier & parking surveillé disponible.
              </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} NOUVEAU MONDE. Tous droits réservés.</p>
          <div className="flex items-center gap-1">
            <span>Créé avec passion pour l’excellence culinaire à Douala</span>
            <Heart className="w-3.5 h-3.5 text-[#d9242d] fill-[#d9242d]" />
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-[#f5c253] transition-colors"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
