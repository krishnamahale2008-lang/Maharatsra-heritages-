import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Compass, Mountain, X, MapPin, Calendar, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';

interface DestinationSectionProps {
  onSelectDestination: (dest: Destination) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const DestinationSection: React.FC<DestinationSectionProps> = ({
  onSelectDestination,
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'elevation-desc' | 'name-asc' | 'duration-asc'>('featured');

  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging', 'Difficult'];
  const categories = [
    'All',
    'Mountain Peaks',
    'Historic Forts',
    'Forest Trails',
    'Waterfalls',
    'Weekend Escapes',
  ];

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let list = DESTINATIONS.filter((dest) => {
      // Search check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchName = dest.name.toLowerCase().includes(q);
        const matchMarathi = dest.marathiName.includes(q);
        const matchDistrict = dest.district.toLowerCase().includes(q);
        const matchRegion = dest.region.toLowerCase().includes(q);
        const matchSummary = dest.summary.toLowerCase().includes(q);
        if (!matchName && !matchMarathi && !matchDistrict && !matchRegion && !matchSummary) {
          return false;
        }
      }

      // Category check
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) {
        return false;
      }

      // Difficulty check
      if (selectedDifficulty !== 'All' && dest.difficulty !== selectedDifficulty) {
        return false;
      }

      return true;
    });

    // Sorting
    switch (sortBy) {
      case 'elevation-desc':
        list = [...list].sort((a, b) => b.elevationMeters - a.elevationMeters);
        break;
      case 'name-asc':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'duration-asc':
        list = [...list].sort((a, b) => a.durationHours - b.durationHours);
        break;
      case 'featured':
      default:
        list = [...list].sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
        break;
    }

    return list;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery('');
    onCategoryChange('All');
    setSelectedDifficulty('All');
    setSortBy('featured');
  };

  const isFiltering = searchQuery !== '' || selectedCategory !== 'All' || selectedDifficulty !== 'All';

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#F5F3EA] text-[#252C26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header with SEO H1 and Keywords */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#647A52] font-semibold block mb-3">
            The Complete Sahyadri Travel Guide
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#183D32] tracking-tight leading-tight">
            Trekking Places in Maharashtra: Complete Travel Guide
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#252C26]/85 font-light leading-relaxed">
            Exploring the diverse <strong>trekking places in Maharashtra</strong> takes you through the heart of the Western Ghats—from 350-year-old Maratha fortifications to misty volcanic ridges and cascading seasonal streams. Whether you are seeking the <strong>best trekking places in Maharashtra</strong> for high-altitude summits or family-friendly <strong>trekking near Mumbai and Pune</strong>, our verified trail directory details route profiles, difficulty levels, duration, and safety guidance for sixteen iconic destinations.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-[#A8B69A]/30 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#806B50] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search trails by name, district (e.g. Pune, Nashik, Kalsubai, Rajmachi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-[#F5F3EA]/50 rounded-lg border border-[#A8B69A]/30 focus:border-[#183D32] focus:bg-white focus:outline-hidden transition-colors placeholder:text-[#806B50]/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label htmlFor="sort-trails" className="text-xs text-[#806B50] font-medium uppercase tracking-wider whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-trails"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-medium py-2 px-3 bg-[#F5F3EA]/50 border border-[#A8B69A]/30 rounded-lg text-[#183D32] focus:outline-hidden focus:border-[#183D32] transition-colors"
              >
                <option value="featured">Featured Curations</option>
                <option value="elevation-desc">Highest Altitude</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
                <option value="duration-asc">Shortest Duration</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-5 pt-5 border-t border-[#A8B69A]/20 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-[#806B50] mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors whitespace-nowrap font-medium ${
                  selectedCategory === cat
                    ? 'bg-[#183D32] text-[#F5F3EA]'
                    : 'bg-[#F5F3EA]/70 text-[#252C26] hover:bg-[#A8B69A]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Difficulty Filter */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-[#806B50] mr-2">Difficulty:</span>
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors whitespace-nowrap font-medium ${
                  selectedDifficulty === diff
                    ? 'bg-[#647A52] text-white'
                    : 'bg-[#F5F3EA]/70 text-[#252C26] hover:bg-[#A8B69A]/30'
                }`}
              >
                {diff}
              </button>
            ))}

            {isFiltering && (
              <button
                onClick={clearAllFilters}
                className="ml-auto text-xs text-[#806B50] hover:text-[#183D32] underline font-medium cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#806B50] mb-8 pb-3 border-b border-[#A8B69A]/20">
          <span>Showing {filteredDestinations.length} of {DESTINATIONS.length} verified Sahyadri trails</span>
          <span className="font-mono tabular-nums">Western Ghats, Maharashtra</span>
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="py-20 text-center bg-white rounded-2xl border border-[#A8B69A]/20 p-8">
            <Compass className="w-10 h-10 text-[#806B50] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-2xl text-[#183D32]">No matching trails found</h3>
            <p className="text-sm text-[#252C26]/70 mt-2 max-w-md mx-auto">
              We couldn't find any destination matching your current filters. Try relaxing your search terms or view all destinations.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#183D32] text-[#F5F3EA] rounded-md hover:bg-[#183D32]/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Editorial Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, index) => {
            const isFeaturedLarge = (index === 0 || index === 5) && filteredDestinations.length > 3;

            return (
              <article
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#A8B69A]/30 hover:border-[#647A52] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer ${
                  isFeaturedLarge ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Image Container with subtle hover zoom */}
                <div className={`relative overflow-hidden ${isFeaturedLarge ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
                  <img
                    src={dest.image}
                    alt={dest.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />

                  {/* Top Location & Elevation */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-medium bg-black/45 backdrop-blur-md px-3 py-1 rounded-sm border border-white/20">
                      {dest.district}
                    </span>
                    <span className="font-mono tabular-nums bg-black/45 backdrop-blur-md px-3 py-1 rounded-sm border border-white/20">
                      {dest.elevationMeters}m / {dest.elevationFeet}ft
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] uppercase tracking-wider text-[#A8B69A] font-medium block">
                      {dest.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-tight">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs text-[#806B50] mb-3">
                      <span className="font-semibold text-[#183D32]">{dest.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#647A52] font-medium">{dest.region}</span>
                    </div>

                    <p className="text-sm text-[#252C26]/80 font-light line-clamp-2 leading-relaxed">
                      {dest.summary}
                    </p>
                  </div>

                  {/* Discover Trek Link */}
                  <div className="mt-6 pt-4 border-t border-[#A8B69A]/20 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] group-hover:text-[#647A52] flex items-center gap-1.5 transition-colors">
                      Discover Trek
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] text-[#806B50] font-light">
                      Base: {dest.baseVillage.split(',')[0]}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* AEO: Two Question-and-Answer Sections formatted as H2 Headings with direct answers */}
        <div className="mt-20 pt-16 border-t border-[#A8B69A]/30 max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#647A52] font-semibold block mb-1">
              Trail Planning Q&amp;A
            </span>
            <div className="font-serif text-2xl sm:text-3xl text-[#183D32]">
              Frequently Asked Questions for Maharashtra Trekking
            </div>
          </div>

          {/* Question 1 */}
          <article className="p-6 sm:p-8 bg-white rounded-2xl border border-[#A8B69A]/30 shadow-xs">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#183D32] text-[#F5F3EA] flex items-center justify-center shrink-0 mt-0.5">
                <Mountain className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#647A52] block mb-1">
                  Beginner Routes
                </span>
                {/* H2 Question */}
                <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-semibold leading-snug">
                  Which trekking places in Maharashtra are suitable for beginners?
                </h2>
              </div>
            </div>

            {/* Direct, concise answer immediately below the H2 */}
            <p className="text-base text-[#183D32] font-medium leading-relaxed pl-10 mb-3">
              The most suitable trekking places in Maharashtra for beginners are Lohagad Fort, Sinhagad Fort, Karnala Fort, and the gentle descending forest trail of Andharban in Tamhini Ghat. Both Lohagad and Sinhagad feature well-defined stone staircases, accessible base villages with regular public bus or shared transport from Lonavala and Pune, and modest elevation gain taking only 2 to 4 hours round-trip.
            </p>

            {/* Supporting Details */}
            <div className="pl-10 space-y-2.5 text-sm text-[#252C26]/80 font-light leading-relaxed">
              <p>
                These routes provide forgiving trails with local village stalls offering potable water, hot tea, and fresh pithla-bhakri, allowing novice hikers to build trail stamina without facing vertical rock climbs or complex route-finding. Once confident on these beginner routes, hikers typically progress to moderate day treks such as Kalsubai Peak, Rajmachi Fort, or Visapur Fort.
              </p>
            </div>
          </article>

          {/* Question 2 */}
          <article className="p-6 sm:p-8 bg-white rounded-2xl border border-[#A8B69A]/30 shadow-xs">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#647A52] text-white flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#647A52] block mb-1">
                  Pre-Trek Checklist
                </span>
                {/* H2 Question */}
                <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-semibold leading-snug">
                  What should you check before planning a trek in Maharashtra?
                </h2>
              </div>
            </div>

            {/* Direct, concise answer immediately below the H2 */}
            <p className="text-base text-[#183D32] font-medium leading-relaxed pl-10 mb-3">
              Before planning a trek in Maharashtra, you should check five essential factors: current weather forecasts and local monsoon flood advisories, the technical difficulty and rock exposure of the route, water source availability on the plateau, required forest department entry permits (mandatory for Andharban and Vasota in Koyna Sanctuary), and your return transport connectivity from the base village back to major transport hubs like Mumbai or Pune.
            </p>

            {/* Supporting Details */}
            <div className="pl-10 space-y-2.5 text-sm text-[#252C26]/80 font-light leading-relaxed">
              <p>
                Additionally, verify whether your planned trail has ladder sections or steep cliff steps (such as at Harihar or Kalsubai) and avoid ascending during thunderstorms. Always inform family or local villagers of your expected return time, carry at least 2.5 liters of drinking water per person, and ensure your group begins the descent early enough to reach the base before darkness falls.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
