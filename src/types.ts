export type DishCategory = 'all' | 'braises' | 'fastfood' | 'terroir' | 'boissons';

export interface Dish {
  id: string;
  name: string;
  category: DishCategory;
  categoryLabel: string;
  image: string;
  description: string;
  highlight?: string;
  tags?: string[];
  isSignature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'plats' | 'ambiance' | 'loisirs' | 'cocktails';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface SpaceHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}
