export type DifficultyLevel = 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';

export type TrailCategory =
  | 'Mountain Peaks'
  | 'Historic Forts'
  | 'Forest Trails'
  | 'Waterfalls'
  | 'Weekend Escapes';

export interface Destination {
  id: string;
  name: string;
  marathiName: string;
  district: string;
  region: string;
  category: TrailCategory;
  difficulty: DifficultyLevel;
  duration: string;
  durationHours: number;
  elevationMeters: number;
  elevationFeet: number;
  bestSeason: string;
  image: string;
  alt: string;
  tagline: string;
  summary: string;
  description: string;
  baseVillage: string;
  distanceFromMumbai: string;
  distanceFromPune: string;
  highlights: string[];
  routeDetails: {
    trailType: string;
    totalDistanceKm: number;
    waterSourceAvailable: boolean;
    waterSourceNote: string;
    technicalSections: string;
  };
  packingChecklist: string[];
  safetyGuidelines: string[];
  historicalSignificance: string;
  isFeatured?: boolean;
}

export interface BlogStory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: {
    name: string;
    role: string;
    readExperience: string;
  };
  publishedDate: string;
  readTime: string;
  image: string;
  alt: string;
  summary: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      fieldTips?: string[];
    }[];
    takeaways: string[];
  };
  relatedDestinationId?: string;
  slug?: string;
  aliases?: string[];
  seoTitle?: string;
  metaDescription?: string;
  mainKeyword?: string;
  relatedKeywords?: string[];
  qaSections?: {
    question: string;
    answer: string;
    details?: string[];
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  district: string;
  category: string;
  image: string;
  caption: string;
  aspect: 'wide' | 'tall' | 'square' | 'standard';
}
