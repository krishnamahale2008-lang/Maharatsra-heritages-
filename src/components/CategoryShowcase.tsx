import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TrailCategory } from '../types';

interface CategoryShowcaseProps {
  onSelectCategory: (category: TrailCategory) => void;
  selectedCategory: string;
}

interface CategoryItem {
  name: TrailCategory;
  marathi: string;
  image: string;
  count: number;
  description: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    name: 'Mountain Peaks',
    marathi: 'उत्तुंग शिखरे',
    image: '/src/assets/images/kalsubai_peak_sunrise_1792070068175.jpg',
    count: 3,
    description: 'Towering pinnacles and high-altitude summits rising above 1,400 meters.'
  },
  {
    name: 'Historic Forts',
    marathi: 'ऐतिहासिक किल्ले',
    image: '/src/assets/images/harihar_rock_steps_1792070032229.jpg',
    count: 7,
    description: 'Impregnable cliff citadels, rock-cut stairways, and Maratha military heritage.'
  },
  {
    name: 'Forest Trails',
    marathi: 'घनदाट अरण्ये',
    image: '/src/assets/images/andharban_forest_trail_1792070033387.jpg',
    count: 2,
    description: 'Deep ancient evergreen rainforests, canopy walks, and wildlife sanctuaries.'
  },
  {
    name: 'Waterfalls',
    marathi: 'धबधबे व जलप्रपात',
    image: '/src/assets/images/visapur_waterfall_steps_1792070323553.jpg',
    count: 2,
    description: 'Cascading monsoon stairway torrents and hidden turquoise plunge pools.'
  },
  {
    name: 'Weekend Escapes',
    marathi: 'सह्याद्री मुक्काम',
    image: '/src/assets/images/sandhan_valley_canyon_1792070068212.jpg',
    count: 2,
    description: 'Adventurous canyons, ridge scrambles, and quick weekend nature getaways.'
  }
];

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#183D32] text-[#F5F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#A8B69A]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A8B69A] font-medium block mb-2">
              Curated Sahyadri Landscapes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
              Find Your Kind of Wild.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A8B69A] max-w-md font-light leading-relaxed">
            From the sheer 80-degree rock cuts of Harihar to the misty dark forest canopy of Tamhini, choose your ideal adventure.
          </p>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <div
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer h-80 sm:h-96 transition-all duration-300 border ${
                  isSelected
                    ? 'border-[#F5F3EA] ring-2 ring-[#F5F3EA]/60 -translate-y-1'
                    : 'border-[#A8B69A]/20 hover:border-[#F5F3EA]/60 hover:-translate-y-1'
                }`}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-colors" />

                {/* Card Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#A8B69A] uppercase tracking-wider">
                      {cat.count} Trails
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#F5F3EA] group-hover:text-[#183D32] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-[#A8B69A] font-light block mb-1">
                      {cat.marathi}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#F5F3EA]/70 font-light line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
