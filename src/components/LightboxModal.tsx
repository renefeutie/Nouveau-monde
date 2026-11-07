import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export interface LightboxData {
  image: string;
  title: string;
  caption: string;
  index: number;
  total: number;
}

interface LightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function LightboxModal({ data, onClose, onNext, onPrev }: LightboxModalProps) {
  useEffect(() => {
    if (!data) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, onClose, onNext, onPrev]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg transition-all duration-300"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-medium tracking-widest text-[#f5c253]">
            {data.index + 1} / {data.total}
          </span>
          <span className="hidden sm:inline-block text-white/30">|</span>
          <span className="text-sm font-serif font-semibold text-white/90 truncate max-w-xs sm:max-w-md">
            {data.title}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Fermer la vue plein écran"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[80vh] w-full px-4 sm:px-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={data.image}
          alt={data.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-[#f5c253] hover:text-[#0c0c0e] text-white border border-white/20 transition-all shadow-lg"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-[#f5c253] hover:text-[#0c0c0e] text-white border border-white/20 transition-all shadow-lg"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center z-20 bg-gradient-to-t from-black/90 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-sm sm:text-base text-white/90 font-light mb-1">
            {data.caption}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#f5c253]/80">
            <MapPin className="w-3.5 h-3.5 text-[#d9242d]" />
            <span>Nouveau Monde · Bonamoussadi, Douala</span>
          </div>
        </div>
      </div>
    </div>
  );
}
