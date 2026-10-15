export interface DestinationFilterCriteria {
  searchQuery?: string;
  category?: string;
  difficulty?: string;
  region?: string;
  season?: string;
}

export interface TrekItem {
  id: string;
  name: string;
  district: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  duration: string;
  durationHours: number;
  category: 'Mountain Peaks' | 'Historic Forts' | 'Forest Trails' | 'Waterfalls' | 'Weekend Escapes';
  elevationMeters: number;
  bestSeason: string;
  isFeatured?: boolean;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
}

/**
 * Pure function to filter destinations based on criteria.
 */
export function filterDestinations(
  items: TrekItem[],
  criteria: DestinationFilterCriteria
): TrekItem[] {
  return items.filter((item) => {
    // Search query check (name or district)
    if (criteria.searchQuery && criteria.searchQuery.trim() !== '') {
      const q = criteria.searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDistrict = item.district.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      if (!matchName && !matchDistrict && !matchCategory) {
        return false;
      }
    }

    // Category check
    if (criteria.category && criteria.category !== 'All' && item.category !== criteria.category) {
      return false;
    }

    // Difficulty check
    if (criteria.difficulty && criteria.difficulty !== 'All' && item.difficulty !== criteria.difficulty) {
      return false;
    }

    // Region / District check
    if (criteria.region && criteria.region !== 'All' && !item.district.toLowerCase().includes(criteria.region.toLowerCase())) {
      return false;
    }

    // Season check
    if (criteria.season && criteria.season !== 'All') {
      const s = criteria.season.toLowerCase();
      if (!item.bestSeason.toLowerCase().includes(s)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Pure function to sort destinations.
 */
export function sortDestinations(
  items: TrekItem[],
  sortBy: 'featured' | 'elevation-desc' | 'elevation-asc' | 'name-asc' | 'duration-asc'
): TrekItem[] {
  const cloned = [...items];
  switch (sortBy) {
    case 'elevation-desc':
      return cloned.sort((a, b) => b.elevationMeters - a.elevationMeters);
    case 'elevation-asc':
      return cloned.sort((a, b) => a.elevationMeters - b.elevationMeters);
    case 'name-asc':
      return cloned.sort((a, b) => a.name.localeCompare(b.name));
    case 'duration-asc':
      return cloned.sort((a, b) => a.durationHours - b.durationHours);
    case 'featured':
    default:
      return cloned.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }
}

/**
 * Pure function to filter blogs.
 */
export function filterBlogs(
  blogs: BlogItem[],
  query?: string,
  category?: string
): BlogItem[] {
  return blogs.filter((blog) => {
    if (category && category !== 'All' && blog.category !== category) {
      return false;
    }
    if (query && query.trim() !== '') {
      const q = query.toLowerCase().trim();
      const matchTitle = blog.title.toLowerCase().includes(q);
      const matchSummary = blog.summary.toLowerCase().includes(q);
      const matchCat = blog.category.toLowerCase().includes(q);
      if (!matchTitle && !matchSummary && !matchCat) return false;
    }
    return true;
  });
}

/**
 * Calculate statistical overview for destination collection.
 */
export function calculateCollectionStats(items: TrekItem[]) {
  const total = items.length;
  const highest = items.reduce(
    (max, item) => (item.elevationMeters > max ? item.elevationMeters : max),
    0
  );
  const byDifficulty = items.reduce(
    (acc, item) => {
      acc[item.difficulty] = (acc[item.difficulty] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return {
    total,
    highestElevation: highest,
    byDifficulty,
  };
}
