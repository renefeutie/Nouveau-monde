import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={containerRef} className="relative py-28 sm:py-36 overflow-hidden bg-[#0c0c0e]">
      {/* Background with Hardware-Accelerated Parallax and Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          style={{ y }}
          src="/assets/aistudio/IMG_4244_5c647a50.jpeg"
          alt="Ambiance lounge Nouveau Monde"
          className="w-full h-[120%] -top-[10%] absolute object-cover object-center filter brightness-[0.35] contrast-[1.1] transform-gpu will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-[#0c0c0e]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#f5c253] uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d9242d]" />
          <span>L'Excellence & La Fête à Douala</span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f4f1ea] leading-tight mb-8 max-w-4xl"
        >
          « Plus qu’un repas, une véritable escale où chaque instant se déguste dans la joie et la convivialité. »
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-[#d6d2c8] max-w-xl font-light mb-12"
        >
          Venez vivre l’ambiance de Nouveau Monde avec vos proches. Une cuisine riche en saveurs et une hospitalité sincère qui vous font vous sentir chez vous.
        </motion.p>

        {/* 4 Pillars in a refined row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#f5c253]">7j / 7</span>
            <span className="text-xs text-[#a8a396] mt-1 font-light">Service midi & soir</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#f5c253]">100% Frais</span>
            <span className="text-xs text-[#a8a396] mt-1 font-light">Braisés & Fait maison</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#f5c253]">Lounge VIP</span>
            <span className="text-xs text-[#a8a396] mt-1 font-light">Espace climatisé & feutré</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#f5c253]">Baby-Foot</span>
            <span className="text-xs text-[#a8a396] mt-1 font-light">Moments de détente</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
