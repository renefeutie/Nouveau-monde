import { motion } from 'motion/react';
import { Sparkles, Users, GlassWater, Trophy, ArrowRight } from 'lucide-react';
import { SPACES } from '../data/restaurantData';

interface OurWorldProps {
  onOpenImage?: (image: string, title: string, caption: string) => void;
}

export function OurWorld({ onOpenImage }: OurWorldProps) {
  return (
    <section id="univers" className="py-24 sm:py-32 bg-[#0c0c0e] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#f5c253]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d9242d]/5 blur-[120px] rounded-full pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-[#d9242d]" />
            <span>Notre Univers & Ambiance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f1ea] tracking-tight mb-6"
          >
            L’élégance d’un Lounge, <br className="hidden sm:block" />
            <span className="text-[#f5c253]">la chaleur du partage.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#b8b4a7] leading-relaxed font-light"
          >
            Installé au cœur de Bonamoussadi, <strong className="font-medium text-[#f4f1ea]">Nouveau Monde</strong> est bien plus qu’un restaurant. C’est un lieu de vie chaleureux où se côtoient la passion des saveurs braisées, le raffinement d’un bar lounge feutré et l’effervescence de parties de baby-foot mémorables.
          </motion.p>
        </div>

        {/* 3 Showcase Pillars with Authentic Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPACES.map((space, index) => {
            const icons = [
              <Sparkles key="1" className="w-5 h-5 text-[#f5c253]" />,
              <GlassWater key="2" className="w-5 h-5 text-[#f5c253]" />,
              <Trophy key="3" className="w-5 h-5 text-[#f5c253]" />,
            ];

            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#15151c] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#f5c253]/40 transition-all duration-300 shadow-xl transform-gpu"
              >
                {/* Image Frame */}
                <div
                  className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-[#1c1c24]"
                  onClick={() => onOpenImage && onOpenImage(space.image, space.title, space.description)}
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15151c] via-[#15151c]/20 to-transparent" />
                  
                  {/* Subtle hover icon overlay */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-full border border-white/10 text-[#f5c253]">
                    {icons[index]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-[#d9242d] uppercase">
                      {space.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f4f1ea] mt-1 mb-3">
                      {space.title}
                    </h3>
                    <p className="text-sm text-[#b8b4a7] leading-relaxed mb-6 font-light">
                      {space.description}
                    </p>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    {space.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[#d6d2c8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c253]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Convivial Quote Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#181822] via-[#15151c] to-[#181822] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#f5c253]/15 flex items-center justify-center text-[#f5c253] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#f4f1ea]">
                Une atmosphère pensée pour vos sorties entre amis & collègues
              </h4>
              <p className="text-xs sm:text-sm text-[#b8b4a7] font-light">
                Afterwork décontracté, dîner en amoureux ou soirée festive le week-end à Bonamoussadi.
              </p>
            </div>
          </div>

          <a
            href="#specialites"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#f5c253] hover:text-white uppercase group transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explorer les spécialités</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
