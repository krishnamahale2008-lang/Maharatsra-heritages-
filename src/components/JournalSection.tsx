import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar, User, X } from 'lucide-react';
import { BlogStory } from '../types';
import { BLOGS } from '../data/blogs';

interface JournalSectionProps {
  onSelectStory: (story: BlogStory) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectStory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Season Guide',
    'Trail Guide',
    'Summit Story',
    'Natural Wonders',
    'Forest Expeditions',
    'Heritage & History',
    'Beginner Handbook',
    'Waterfalls & Streams',
    'Technical Adventure',
    'Conservation & Ethics',
  ];

  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      if (selectedCategory !== 'All' && blog.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = blog.title.toLowerCase().includes(q);
        const matchSub = blog.subtitle.toLowerCase().includes(q);
        const matchSummary = blog.summary.toLowerCase().includes(q);
        const matchAuthor = blog.author.name.toLowerCase().includes(q);
        if (!matchTitle && !matchSub && !matchSummary && !matchAuthor) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#F5F3EA] text-[#252C26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#647A52] font-semibold block mb-3">
            An Outdoor Travel Magazine
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#183D32] tracking-tight leading-tight">
            Field Notes from the Sahyadris.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#252C26]/80 font-light leading-relaxed">
            Stories, guides, and inspiration for your next journey into nature.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-[#A8B69A]/30 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#806B50] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search stories by topic, fort, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-[#F5F3EA]/50 rounded-lg border border-[#A8B69A]/30 focus:border-[#183D32] focus:bg-white focus:outline-hidden transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  aria-label="Clear story search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills/Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-medium text-[#806B50] whitespace-nowrap">Filter:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs font-medium py-2 px-3 bg-[#F5F3EA]/70 border border-[#A8B69A]/30 rounded-lg text-[#183D32] focus:outline-hidden focus:border-[#183D32]"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 10 Complete Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredBlogs.map((story, index) => {
            // Editorial layout: 1st story gets wide magazine presentation if multiple are shown
            const isFeatured = index === 0 && filteredBlogs.length > 2;

            return (
              <article
                key={story.id}
                onClick={() => onSelectStory(story)}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#A8B69A]/30 hover:border-[#647A52] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer ${
                  isFeatured ? 'lg:col-span-2 md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Photo Header */}
                <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-96' : 'h-56 sm:h-64'}`}>
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Metadata */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="text-[11px] font-medium tracking-wider uppercase bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20">
                      {story.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20 font-mono">
                      <Clock className="w-3 h-3 text-[#A8B69A]" />
                      {story.readTime}
                    </span>
                  </div>

                  {/* Headline over image for featured */}
                  {isFeatured && (
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="font-serif text-2xl sm:text-4xl text-white font-medium leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#F5F3EA]/80 font-light mt-2 line-clamp-1">
                        {story.subtitle}
                      </p>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {!isFeatured && (
                      <h3 className="font-serif text-xl sm:text-2xl text-[#183D32] font-semibold leading-snug mb-2 group-hover:text-[#647A52] transition-colors">
                        {story.title}
                      </h3>
                    )}

                    {/* Unboxed Metadata (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs text-[#806B50] mb-3">
                      <span>{story.author.name}</span>
                      <span aria-hidden="true">·</span>
                      <span>{story.publishedDate}</span>
                      {!isFeatured && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{story.readTime}</span>
                        </>
                      )}
                    </div>

                    <p className="text-sm text-[#252C26]/80 font-light leading-relaxed line-clamp-3">
                      {story.summary}
                    </p>
                  </div>

                  {/* Minimal Read Story Link */}
                  <div className="mt-6 pt-4 border-t border-[#A8B69A]/20 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] group-hover:text-[#647A52] flex items-center gap-1.5 transition-colors">
                      Read Story
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <span className="text-xs text-[#806B50] font-light">
                      Field Edition
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
