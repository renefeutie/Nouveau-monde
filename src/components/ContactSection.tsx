import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Instagram,
  Facebook,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Users,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '2',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp formatted message if user wants to send directly
    const text = encodeURIComponent(
      `Bonjour Nouveau Monde ! Demande de réservation/contact :\n- Nom : ${formData.name}\n- Téléphone : ${formData.phone}\n- Date : ${formData.date || 'Non spécifiée'}\n- Convives : ${formData.guests}\n- Note : ${formData.notes || 'Aucune'}`
    );

    // Open WhatsApp in new tab
    const cleanPhone = RESTAURANT_INFO.phoneClean.replace('+', '');
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d9242d]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5c253]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.25em] text-[#f5c253] uppercase mb-3 flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5 text-[#d9242d]" />
            <span>Contact & Réservations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f1ea] tracking-tight mb-6"
          >
            Nous rendre visite <br className="hidden sm:block" />
            <span className="text-[#f5c253]">à Bonamoussadi.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#b8b4a7] leading-relaxed font-light"
          >
            Pour une table gourmande, un cocktail feutré en soirée ou une fête entre amis, notre équipe vous accueille chaleureusement tous les jours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Location Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Direct Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-[#15151c] hover:bg-[#1a1a24] border border-white/10 hover:border-[#f5c253]/50 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#f5c253]">
                    Instantané
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#f4f1ea] mb-1">
                    WhatsApp Direct
                  </h3>
                  <p className="text-xs text-[#b8b4a7] font-light mb-4">
                    Réservations rapides, informations et échange direct avec notre équipe.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5c253] group-hover:underline">
                    Démarrer la discussion →
                  </span>
                </div>
              </a>

              {/* Call Card */}
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="group p-6 bg-[#15151c] hover:bg-[#1a1a24] border border-white/10 hover:border-[#f5c253]/50 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d9242d]/20 flex items-center justify-center text-[#d9242d] group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-white/50">
                    Ligne Directe
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#f4f1ea] mb-1">
                    Nous Appeler
                  </h3>
                  <p className="text-xs text-[#b8b4a7] font-light mb-4">
                    Accueil téléphonique continu pendant les horaires d’ouverture.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5c253] group-hover:underline">
                    {RESTAURANT_INFO.phone} →
                  </span>
                </div>
              </a>
            </div>

            {/* Practical Location Note */}
            <div className="p-6 sm:p-7 bg-[#15151c] border border-white/10 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f5c253]/15 flex items-center justify-center text-[#f5c253] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold text-[#f4f1ea]">
                  Bonamoussadi · Face ancienne mairie
                </span>
                <span className="text-xs text-[#a8a396] font-light">
                  {RESTAURANT_INFO.fullAddress} · Parking gardé disponible
                </span>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 bg-[#15151c] border border-white/10 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2.5 text-[#f5c253] text-sm font-semibold mb-4">
                <Clock className="w-4 h-4" />
                <span>Horaires d’Ouverture & Service</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESTAURANT_INFO.hours.map((h) => (
                  <div key={h.days} className="text-xs flex flex-col p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-semibold text-[#f4f1ea] mb-0.5">{h.days}</span>
                    <span className="text-[#a8a396] font-light">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Channels: Facebook & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Facebook Card */}
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-[#0f172a] to-[#15151c] border border-white/10 hover:border-[#1877F2]/50 rounded-2xl shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1877F2] uppercase tracking-wider">
                    Facebook
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white mb-1">
                    Page Officielle Facebook
                  </h3>
                  <p className="text-xs text-[#b8b4a7] font-light mb-3">
                    Actualités, événements spéciaux et moments de fête en direct.
                  </p>
                  <span className="text-xs text-[#1877F2] group-hover:underline font-medium inline-flex items-center gap-1">
                    Rejoindre sur Facebook →
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gradient-to-br from-[#1a141e] to-[#15151c] border border-white/10 hover:border-[#f5c253]/40 rounded-2xl shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider">
                    Instagram
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white mb-1">
                    {RESTAURANT_INFO.instagramHandle}
                  </h3>
                  <p className="text-xs text-[#b8b4a7] font-light mb-3">
                    Stories quotidiennes, vidéos des plats et ambiance de salle.
                  </p>
                  <span className="text-xs text-[#f5c253] group-hover:underline font-medium inline-flex items-center gap-1">
                    Suivre sur Instagram →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact / Table Booking Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#15151c] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-wider text-[#d9242d] uppercase">
                  Réservation & Informations
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#f4f1ea] mt-1 mb-2">
                  Réserver une Table
                </h3>
                <p className="text-xs text-[#b8b4a7] font-light">
                  Remplissez ce formulaire pour nous transmettre vos souhaits en un instant.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-14 h-14 text-[#f5c253] mb-4 animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-[#f4f1ea] mb-2">
                    Demande transmise avec succès !
                  </h4>
                  <p className="text-xs text-[#b8b4a7] max-w-xs mb-6">
                    Votre demande a été préparée pour WhatsApp. Notre équipe vous répondra très rapidement pour confirmer votre table.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/15 text-xs text-white rounded-lg transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#d6d2c8] mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ex. Jean-Paul Moukoko"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0c0c0e] border border-white/10 rounded-lg text-sm text-[#f4f1ea] placeholder-white/30 focus:outline-none focus:border-[#f5c253] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#d6d2c8] mb-1.5">
                      Téléphone ou WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Ex. +237 6XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0c0c0e] border border-white/10 rounded-lg text-sm text-[#f4f1ea] placeholder-white/30 focus:outline-none focus:border-[#f5c253] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs font-medium text-[#d6d2c8] mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#f5c253]" />
                        <span>Date souhaitée</span>
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#0c0c0e] border border-white/10 rounded-lg text-xs text-[#f4f1ea] focus:outline-none focus:border-[#f5c253] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-xs font-medium text-[#d6d2c8] mb-1.5 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#f5c253]" />
                        <span>Convives</span>
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#0c0c0e] border border-white/10 rounded-lg text-xs text-[#f4f1ea] focus:outline-none focus:border-[#f5c253] transition-colors cursor-pointer"
                      >
                        <option value="1">1 personne</option>
                        <option value="2">2 personnes</option>
                        <option value="3-4">3 à 4 personnes</option>
                        <option value="5-8">5 à 8 personnes</option>
                        <option value="8+">Groupe (8+ personnes)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-medium text-[#d6d2c8] mb-1.5">
                      Précisions ou préférences (optionnel)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Ex. Table au calme, anniversaire, espace lounge..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0c0c0e] border border-white/10 rounded-lg text-sm text-[#f4f1ea] placeholder-white/30 focus:outline-none focus:border-[#f5c253] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#d9242d] hover:bg-[#b81b23] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-xl shadow-red-900/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer la demande</span>
                  </button>

                  <p className="text-[11px] text-center text-white/40 pt-1">
                    Confirmation immédiate par WhatsApp ou téléphone.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
