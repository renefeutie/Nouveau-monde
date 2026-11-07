import { motion } from 'motion/react';
import { Utensils } from 'lucide-react';
import { SpecialtiesCarousel } from './SpecialtiesCarousel';
import { SpecialtiesGrid } from './SpecialtiesGrid';
import { Dish } from '../types';

interface SpecialtiesSectionProps {
  onSelectDish: (dish: Dish) => void;
}

export function SpecialtiesSection({ onSelectDish }: SpecialtiesSectionProps) {
  return (
    <section id="specialites" className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#f5c253]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#d9242d]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.25em] text-[#f5c253] uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Utensils className="w-3.5 h-3.5 text-[#d9242d]" />
            <span>Nos Spécialités Culinaires</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f1ea] tracking-tight mb-6"
          >
            Une carte généreuse, <br className="hidden sm:block" />
            <span className="text-[#f5c253]">des cuissons maîtrisées à la flamme.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#b8b4a7] leading-relaxed font-light"
          >
            Du poulet braisé croustillant aux gambas royales, en passant par nos burgers gourmets, nos pizzas artisanales et le véritable Ndolé camerounais, chaque plat est préparé avec des ingrédients frais et généreux.
          </motion.p>
        </div>

        {/* 1. Horizontal Carousel for Instant Signature Browsing */}
        <SpecialtiesCarousel onSelectDish={onSelectDish} />

        {/* 2. Complete Filterable Dishes Catalog */}
        <SpecialtiesGrid onSelectDish={onSelectDish} />
      </div>
    </section>
  );
}
