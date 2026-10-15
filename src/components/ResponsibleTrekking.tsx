import React from 'react';
import { ShieldCheck, HeartHandshake, VolumeX, Trash2, Mountain, AlertCircle } from 'lucide-react';

export const ResponsibleTrekking: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#183D32] text-[#F5F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A8B69A] font-medium block">
              Sahyadri Stewardship
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Treading Lightly on Ancient Soil.
            </h2>
            <p className="text-sm sm:text-base text-[#A8B69A] font-light leading-relaxed">
              The Sahyadri mountain range is a fragile, 150-million-year-old sanctuary. As outdoor wanderers, it is our collective duty to protect its waterfalls, dense forests, and historical fortifications for generations to come.
            </p>
            <div className="p-5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xs">
              <div className="font-serif text-xl text-[#F5F3EA] italic mb-1">
                “Leave only footprints. Take only memories.”
              </div>
              <p className="text-xs text-[#A8B69A] font-light">
                Adopt the Take-Five rule on every trek: carry out all your own waste plus at least five pieces of litter discarded along the path.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Golden Principles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#A8B69A]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A8B69A] mb-4">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">Zero Plastic Tolerance</h3>
              <p className="text-xs text-[#F5F3EA]/80 font-light leading-relaxed">
                Never bring single-use plastic bottles or snack wrappers onto the trails. Discarded plastics choke wildlife and contaminate natural water bodies.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#A8B69A]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A8B69A] mb-4">
                <VolumeX className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">Preserve Mountain Silence</h3>
              <p className="text-xs text-[#F5F3EA]/80 font-light leading-relaxed">
                Keep Bluetooth speakers off. Allow fellow trekkers to experience the natural whispers of mountain winds, bird songs, and running cascades.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#A8B69A]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A8B69A] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">Honor Fort Heritage</h3>
              <p className="text-xs text-[#F5F3EA]/80 font-light leading-relaxed">
                Never engrave names or paint on ancient rock walls and ramparts. Every stone is an irreplaceable piece of Maratha and Western Ghats history.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#A8B69A]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#A8B69A] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">Support Village Hosts</h3>
              <p className="text-xs text-[#F5F3EA]/80 font-light leading-relaxed">
                Hire local village guides and purchase freshly cooked local meals (bhakri, pitla, kanda bhaji) to directly sustain indigenous hill communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
