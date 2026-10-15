import React from 'react';
import { Compass, Mountain, ArrowUpRight, Heart } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { BLOGS } from '../data/blogs';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenFinder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenFinder }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122820] text-[#F5F3EA] border-t border-[#A8B69A]/20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#A8B69A]/15">
          {/* Col 1 & 2: Identity & Nature Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-[#A8B69A]" />
              <span className="font-serif tracking-widest text-xl font-semibold uppercase text-white">
                Maharashtra Trails
              </span>
            </div>
            <p className="text-sm text-[#A8B69A] font-light leading-relaxed max-w-sm">
              An independent nature and heritage journal dedicated to the misty peaks, ancient rock forts, and deep rainforests of Maharashtra’s Sahyadri mountains.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenFinder}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#183D32] hover:bg-[#647A52] text-white rounded-md border border-[#A8B69A]/30 transition-colors"
              >
                <span>Find Your Escape</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8B69A]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#F5F3EA]/80 font-light">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('explore')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Every Trail Has a Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  All 16 Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('journal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Field Notes & Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Conservation & Ethics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Popular Trails */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8B69A]">
              Iconic Treks
            </div>
            <ul className="space-y-2 text-sm text-[#F5F3EA]/80 font-light">
              {DESTINATIONS.slice(0, 5).map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => scrollTo('destinations')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {d.name} ({d.district})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Field Notes Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8B69A]">
              Field Notes
            </div>
            <ul className="space-y-2 text-sm text-[#F5F3EA]/80 font-light">
              {BLOGS.slice(0, 4).map((b) => (
                <li key={b.id}>
                  <button
                    onClick={() => scrollTo('journal')}
                    className="hover:text-white transition-colors cursor-pointer text-left line-clamp-1"
                  >
                    {b.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Line and Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Closing Line mandated by user */}
          <div className="font-serif text-lg sm:text-xl text-[#F5F3EA] italic">
            “Leave only footprints. Take only memories.”
          </div>

          <div className="text-xs text-[#A8B69A] font-light">
            © {new Date().getFullYear()} Maharashtra Trails. Dedicated to the Western Ghats of India.
          </div>
        </div>
      </div>
    </footer>
  );
};
