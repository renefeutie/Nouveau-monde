import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Eye, Flame, ChefHat } from 'lucide-react';
import { DISHES, DISH_CATEGORIES } from '../data/restaurantData';
import { Dish, DishCategory } from '../types';

interface SpecialtiesGridProps {
  onSelectDish: (dish: Dish) => void;
}

export function SpecialtiesGrid({ onSelectDish }: SpecialtiesGridProps) {
  const [activeCategory, setActiveCategory] = useState<DishCategory>('all');

  const filteredDishes =
    activeCategory === 'all'
      ? DISHES
      : DISHES.filter((dish) => dish.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Buttons (Segmented Controls) */}
      <div className="flex items-center justify-center mb-12">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#15151c] border border-white/10 rounded-xl max-w-full">
          {DISH_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as DishCategory)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#f5c253] text-[#0c0c0e] font-semibold shadow-md'
                    : 'text-[#d6d2c8] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Dishes */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredDishes.map((dish, index) => (
            <motion.div
              layout
              key={dish.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.03, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectDish(dish)}
              className="group bg-[#15151c] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#f5c253]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between transform-gpu"
            >
              {/* Dish Photo */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1c1c24]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15151c] via-transparent to-black/20" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[11px] font-medium tracking-wide text-[#f5c253]">
                  {dish.highlight || dish.categoryLabel}
                </div>

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5c253] text-[#0c0c0e] text-xs font-semibold shadow-xl">
                    <Eye className="w-4 h-4" />
                    <span>Agrandir la photo</span>
                  </span>
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#a8a396] mb-1 font-medium uppercase tracking-wider">
                    <span>{dish.categoryLabel}</span>
                    {dish.isSignature && (
                      <span className="flex items-center gap-1 text-[#d9242d] font-semibold">
                        <Flame className="w-3.5 h-3.5" />
                        Signature
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#f4f1ea] group-hover:text-[#f5c253] transition-colors mb-2.5">
                    {dish.name}
                  </h3>

                  <p className="text-sm text-[#b8b4a7] leading-relaxed font-light">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom Assurance */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-1.5 text-[#f5c253]">
                    <ChefHat className="w-4 h-4" />
                    <span>Cuisiné minute</span>
                  </span>
                  <span className="text-[11px] text-white/40">Recette authentique</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Helpful Order / Info Callout */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#181822] via-[#1c1c26] to-[#181822] border border-white/10 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h4 className="font-serif text-lg font-bold text-[#f4f1ea]">
            Envie de savourer ces délices dès ce soir ?
          </h4>
          <p className="text-xs sm:text-sm text-[#b8b4a7] font-light mt-1">
            Contactez notre équipe sur WhatsApp pour réserver votre table ou connaître les suggestions du chef.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#d9242d] hover:bg-[#b81b23] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-900/30 transition-all whitespace-nowrap shrink-0"
        >
          <Utensils className="w-4 h-4" />
          <span>Réserver une table</span>
        </a>
      </div>
    </div>
  );
}
