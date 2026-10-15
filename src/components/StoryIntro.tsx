import React from 'react';
import { ShieldCheck, Droplets, Trees, Sparkles } from 'lucide-react';

export const StoryIntro: React.FC = () => {
  return (
    <section id="explore" className="relative py-24 sm:py-32 bg-[#F5F3EA] text-[#252C26] overflow-hidden">
      {/* Subtle organic decorative background shape */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#A8B69A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#647A52]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Section Kicker */}
          <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#647A52] font-semibold mb-3">
            An Ancient Wilderness
          </div>

          {/* Section Title */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#183D32] tracking-tight text-balance leading-tight">
            Every Trail Has a Story.
          </h2>

          <div className="w-12 h-0.5 bg-[#806B50] mx-auto my-6" />

          {/* Intro Narrative */}
          <p className="text-base sm:text-lg text-[#252C26]/85 font-light leading-relaxed text-balance">
            Older than the Himalayas, the Sahyadri mountains of Maharashtra are a living tapestry of volcanic basalt cliffs, dense rainforests, cascading monsoon waterfalls, and centuries of Maratha valour. Across these misty ridges, ancient rock-cut stairs lead to stone fortresses perched high above the clouds, where history whispers in the whistling wind.
          </p>
        </div>

        {/* Four Nature Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white/70 backdrop-blur-xs rounded-xl border border-[#A8B69A]/30 shadow-xs hover:border-[#647A52]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#183D32]/10 flex items-center justify-center text-[#183D32] mb-4">
              <Trees className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#183D32] mb-2">Deep Rainforests</h3>
            <p className="text-sm text-[#252C26]/80 font-light leading-relaxed">
              Vast evergreen canopies of Tamhini, Koyna, and Bhimashankar harbor rare orchids, flying squirrels, and centuries-old sacred groves.
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-xs rounded-xl border border-[#A8B69A]/30 shadow-xs hover:border-[#647A52]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#183D32]/10 flex items-center justify-center text-[#183D32] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#183D32] mb-2">Historic Fortresses</h3>
            <p className="text-sm text-[#252C26]/80 font-light leading-relaxed">
              Over 350 fortresses chiseled into vertical basalt cliffs, echoing the visionary military heritage of Chhatrapati Shivaji Maharaj.
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-xs rounded-xl border border-[#A8B69A]/30 shadow-xs hover:border-[#647A52]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#183D32]/10 flex items-center justify-center text-[#183D32] mb-4">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#183D32] mb-2">Monsoon Waterfalls</h3>
            <p className="text-sm text-[#252C26]/80 font-light leading-relaxed">
              Roaring seasonal cataracts, natural stair cascades at Visapur, and emerald turquoise plunge pools tucked inside volcanic amphitheaters.
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-xs rounded-xl border border-[#A8B69A]/30 shadow-xs hover:border-[#647A52]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#183D32]/10 flex items-center justify-center text-[#183D32] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#183D32] mb-2">Misty Horizons</h3>
            <p className="text-sm text-[#252C26]/80 font-light leading-relaxed">
              Dramatic cloud inversions, the legendary Brocken Spectre of Konkan Kada, and golden sunrises above an endless sea of white fog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
