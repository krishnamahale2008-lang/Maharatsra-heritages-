import React from 'react';
import { ArrowDown, Compass, Mountain } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onFinderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onFinderClick }) => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sahyadri_monsoon_1792070032943.jpg"
          alt="Sahyadri mountain ranges covered in monsoon mist, lush green valleys and dramatic natural scenery in Maharashtra"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured subtle natural vignette overlay for maximum readability without masking the landscape */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#183D32]/85 via-black/35 to-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F5F3EA] pt-24 pb-16 flex flex-col items-center">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] text-[#A8B69A] font-medium">
          <Mountain className="w-3.5 h-3.5" />
          <span>The Western Ghats of Maharashtra</span>
          <span className="w-1 h-1 rounded-full bg-[#A8B69A]" />
          <span>Sahyadri Mountain Range</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] max-w-4xl text-balance drop-shadow-md">
          Somewhere Between the Mountains and You.
        </h1>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F5F3EA]/90 max-w-2xl font-light leading-relaxed text-balance drop-shadow-xs">
          Discover Maharashtra through its hidden trails, ancient forts, misty peaks, and untouched natural beauty.
        </p>

        {/* Minimal Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#F5F3EA] text-[#183D32] hover:bg-white text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore the Trails
          </button>
          <button
            onClick={onFinderClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-transparent border border-[#F5F3EA]/60 text-[#F5F3EA] hover:bg-[#F5F3EA]/10 hover:border-white text-sm font-semibold tracking-wide uppercase transition-all duration-300 backdrop-blur-xs"
          >
            Find Your Escape
          </button>
        </div>

        {/* Natural Key Features strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-t border-white/20 pt-8 w-full max-w-3xl text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-serif text-white tabular-nums">16</div>
            <div className="text-xs uppercase tracking-wider text-[#A8B69A] mt-1">Curated Trails</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif text-white tabular-nums">1,646m</div>
            <div className="text-xs uppercase tracking-wider text-[#A8B69A] mt-1">Highest Peak</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif text-white tabular-nums">350+</div>
            <div className="text-xs uppercase tracking-wider text-[#A8B69A] mt-1">Ancient Forts</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif text-white tabular-nums">10</div>
            <div className="text-xs uppercase tracking-wider text-[#A8B69A] mt-1">Field Guides</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#A8B69A]">Scroll to Journey</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#A8B69A]" />
      </div>
    </section>
  );
};
