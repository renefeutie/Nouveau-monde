import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { DISHES } from '../data/restaurantData';
import { Dish } from '../types';

interface SpecialtiesCarouselProps {
  onSelectDish: (dish: Dish) => void;
}

export function SpecialtiesCarousel({ onSelectDish }: SpecialtiesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const signatureDishes = DISHES.filter((d) => d.isSignature);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full mb-16">
      {/* Header with Navigation Controls */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div>
          <span className="text-xs font-semibold tracking-wider text-[#d9242d] uppercase">
            Sélection Signature
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f4f1ea]">
            Les Incontournables de la Maison
          </h3>
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full bg-[#1c1c24] border border-white/10 text-white/70 hover:text-[#f5c253] hover:border-[#f5c253]/40 transition-colors"
            aria-label="Faire défiler vers la gauche"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full bg-[#1c1c24] border border-white/10 text-white/70 hover:text-[#f5c253] hover:border-[#f5c253]/40 transition-colors"
            aria-label="Faire défiler vers la droite"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {signatureDishes.map((dish) => (
          <div
            key={dish.id}
            onClick={() => onSelectDish(dish)}
            className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start group bg-[#15151c] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#f5c253]/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div className="relative h-60 sm:h-64 overflow-hidden bg-[#1c1c24]">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15151c] via-transparent to-black/20" />

              {/* Tag / Category Badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[11px] font-medium tracking-wide text-[#f5c253]">
                {dish.highlight || dish.categoryLabel}
              </div>

              {/* Eye hover indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5c253] text-[#0c0c0e] text-xs font-semibold shadow-lg">
                  <Eye className="w-3.5 h-3.5" />
                  Agrandir
                </span>
              </div>
            </div>

            {/* Information */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-white/50 uppercase">
                  {dish.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#f4f1ea] mt-1 mb-2 group-hover:text-[#f5c253] transition-colors line-clamp-1">
                  {dish.name}
                </h4>
                <p className="text-xs text-[#b8b4a7] leading-relaxed line-clamp-2 font-light">
                  {dish.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#f5c253] font-medium">
                <span>Spécialité Maison</span>
                <span className="text-[11px] text-white/40">Nouveau Monde</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
