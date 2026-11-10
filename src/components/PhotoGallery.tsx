import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

interface PhotoGalleryProps {
  onOpenItem: (item: GalleryItem, index: number, total: number) => void;
}

export function PhotoGallery({ onOpenItem }: PhotoGalleryProps) {
  const [filter, setFilter] = useState<'all' | 'plats' | 'ambiance' | 'loisirs' | 'cocktails'>('all');

  const filterTabs = [
    { id: 'all', label: 'Toutes les photos' },
    { id: 'plats', label: 'Nos Plats' },
    { id: 'ambiance', label: 'Ambiance Lounge' },
    { id: 'loisirs', label: 'Loisirs & Convivialité' },
    { id: 'cocktails', label: 'Cocktails & Bar' },
  ] as const;

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="galerie" className="py-24 sm:py-32 bg-[#0c0c0e] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#f5c253]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.25em] text-[#f5c253] uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Camera className="w-3.5 h-3.5 text-[#d9242d]" />
            <span>Galerie Visuelle</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4f1ea] tracking-tight mb-6"
          >
            L’expérience Nouveau Monde <br className="hidden sm:block" />
            <span className="text-[#f5c253]">en images.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#b8b4a7] leading-relaxed font-light"
          >
            Explorez notre galerie pour vous imprégner de l’atmosphère unique de notre restaurant : de nos généreuses assiettes à nos soirées lounge et nos parties de baby-foot.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#15151c] border border-white/10 rounded-xl">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#f5c253] text-[#0c0c0e] font-semibold shadow-md'
                      : 'text-[#d6d2c8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry-style / Clean Aspect Ratio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.03, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => onOpenItem(item, index, filteredItems.length)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#15151c] border border-white/10 hover:border-[#f5c253]/50 shadow-xl transition-all duration-300 transform-gpu"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-500 ease-out will-change-transform"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wider uppercase text-[#f5c253] border border-white/10">
                  {item.categoryLabel}
                </div>

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#f5c253] text-[#0c0c0e] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-base font-bold text-white mb-1 group-hover:text-[#f5c253] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
