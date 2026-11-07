import { motion } from 'motion/react';
import { ArrowDown, MessageSquare, Utensils, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0e]"
    >
      {/* Background Image with Dark Vignette Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/IMG_4244_5c647a50.jpeg"
          alt="Ambiance lounge et restaurant Nouveau Monde à Bonamoussadi"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Multilayered Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0c0e]/60 to-[#0c0c0e]" />
      </div>

      {/* Decorative Gold & Red Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f5c253]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[250px] bg-[#d9242d]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* Overline with Authentic Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#f5c253] uppercase mb-4"
        >
          <MapPin className="w-4 h-4 text-[#d9242d]" />
          <span>Bonamoussadi · Douala · Cameroun</span>
        </motion.div>

        {/* Central Official Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-6 flex items-center justify-center group"
        >
          {/* Warm Ambient Backlight */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#f5c253]/20 blur-3xl group-hover:bg-[#f5c253]/30 transition-all duration-700 pointer-events-none" />

          {/* Full Uncropped Official Logo */}
          <img
            src={RESTAURANT_INFO.logo}
            alt="Logo officiel NOUVEAU MONDE"
            className="relative w-60 sm:w-72 md:w-80 lg:w-96 max-w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] filter group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Subtitle Designation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#f5c253] uppercase mb-4"
        >
          Restaurant · Lounge · Bonamoussadi
        </motion.div>

        {/* Catchy Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#d6d2c8] max-w-2xl font-light leading-relaxed mb-10 text-balance"
        >
          L’art du goût, des braisés savoureux et de la convivialité.
          Découvrez une cuisine généreuse et une atmosphère lounge unique au cœur de Bonamoussadi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#specialites"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#f5c253] hover:bg-[#e5a93c] text-[#0c0c0e] font-semibold text-sm tracking-wider uppercase rounded-lg shadow-xl shadow-[#f5c253]/15 transition-all hover:scale-102"
          >
            <Utensils className="w-4 h-4" />
            <span>Découvrir notre carte</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-[#f4f1ea] font-medium text-sm tracking-wider uppercase rounded-lg backdrop-blur-sm transition-all hover:scale-102"
          >
            <MessageSquare className="w-4 h-4 text-[#f5c253]" />
            <span>Nous contacter</span>
          </a>
        </motion.div>

        {/* Quiet Informational Strip (Unboxed Clean Metadata) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#a8a396]"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5c253]" />
            Braisés au feu de bois
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Pizzas & Burgers gourmets</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Lounge & Cocktails signatures</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Baby-foot & Convivialité</span>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#univers"
        aria-label="Faire défiler vers la section Notre Univers"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#f5c253] transition-colors p-2"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
