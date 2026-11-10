import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurWorld } from './components/OurWorld';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { ParallaxBanner } from './components/ParallaxBanner';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal, LightboxData } from './components/LightboxModal';
import { GALLERY_ITEMS, DISHES } from './data/restaurantData';
import { Dish, GalleryItem } from './types';

export default function App() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  // Unified list of browsable images for full-screen viewer
  const allImages = [
    ...GALLERY_ITEMS.map((g) => ({
      image: g.image,
      title: g.title,
      caption: g.caption,
    })),
    ...DISHES.map((d) => ({
      image: d.image,
      title: d.name,
      caption: `${d.categoryLabel} · ${d.description}`,
    })),
  ];

  const handleOpenGalleryItem = (_item: GalleryItem, index: number, _total: number) => {
    setLightboxData({
      image: allImages[index].image,
      title: allImages[index].title,
      caption: allImages[index].caption,
      index,
      total: allImages.length,
    });
  };

  const handleSelectDish = (dish: Dish) => {
    const foundIndex = allImages.findIndex((img) => img.image === dish.image);
    const index = foundIndex !== -1 ? foundIndex : 0;
    setLightboxData({
      image: dish.image,
      title: dish.name,
      caption: `${dish.categoryLabel} — ${dish.description}`,
      index,
      total: allImages.length,
    });
  };

  const handleOpenCustomImage = (image: string, title: string, caption: string) => {
    const foundIndex = allImages.findIndex((img) => img.image === image);
    const index = foundIndex !== -1 ? foundIndex : 0;
    setLightboxData({
      image,
      title,
      caption,
      index,
      total: allImages.length,
    });
  };

  const handleNext = () => {
    if (!lightboxData) return;
    const nextIndex = (lightboxData.index + 1) % allImages.length;
    setLightboxData({
      image: allImages[nextIndex].image,
      title: allImages[nextIndex].title,
      caption: allImages[nextIndex].caption,
      index: nextIndex,
      total: allImages.length,
    });
  };

  const handlePrev = () => {
    if (!lightboxData) return;
    const prevIndex = (lightboxData.index - 1 + allImages.length) % allImages.length;
    setLightboxData({
      image: allImages[prevIndex].image,
      title: allImages[prevIndex].title,
      caption: allImages[prevIndex].caption,
      index: prevIndex,
      total: allImages.length,
    });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0c0c0e] text-[#f4f1ea] font-sans selection:bg-[#f5c253] selection:text-[#0c0c0e]">
        {/* Fixed Luxury Navigation Bar */}
        <Navbar />

        <main>
          {/* Section 1 & 2: Hero Section */}
          <Hero />

          {/* Section 3: Notre Univers (Restaurant, Lounge & Baby-Foot) */}
          <OurWorld onOpenImage={handleOpenCustomImage} />

          {/* Section 4 & 5: Nos Spécialités (Carousel + Filterable Grid with Motion) */}
          <SpecialtiesSection onSelectDish={handleSelectDish} />

          {/* Editorial Parallax Atmosphere Break */}
          <ParallaxBanner />

          {/* Section 6: Galerie Photos & Moments de Convivialité */}
          <PhotoGallery onOpenItem={handleOpenGalleryItem} />

          {/* Section 7: Contact, Accès Bonamoussadi, Maps & WhatsApp */}
          <ContactSection />
        </main>

        {/* Section 8: Footer */}
        <Footer />

        {/* Full-Screen Lightbox Modal */}
        <LightboxModal
          data={lightboxData}
          onClose={() => setLightboxData(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </MotionConfig>
  );
}
