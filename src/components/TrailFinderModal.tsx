import React, { useState } from 'react';
import { X, Sparkles, Compass, ArrowRight, Mountain, Trees, Droplets, ShieldCheck } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';

interface TrailFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (dest: Destination) => void;
}

export const TrailFinderModal: React.FC<TrailFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectDestination,
}) => {
  const [experience, setExperience] = useState<'beginner' | 'moderate' | 'expert'>('moderate');
  const [vibe, setVibe] = useState<'peaks' | 'forts' | 'forests' | 'waterfalls' | 'canyons'>('forts');
  const [time, setTime] = useState<'day' | 'overnight'>('day');

  if (!isOpen) return null;

  // Filter recommendations based on answers
  const recommended = DESTINATIONS.filter((d) => {
    // Experience matching
    if (experience === 'beginner' && (d.difficulty === 'Challenging' || d.difficulty === 'Difficult')) {
      return false;
    }
    if (experience === 'expert' && d.difficulty === 'Easy') {
      return false;
    }

    // Vibe matching
    if (vibe === 'peaks' && d.category !== 'Mountain Peaks') return false;
    if (vibe === 'forts' && d.category !== 'Historic Forts') return false;
    if (vibe === 'forests' && d.category !== 'Forest Trails') return false;
    if (vibe === 'waterfalls' && d.category !== 'Waterfalls') return false;
    if (vibe === 'canyons' && d.category !== 'Weekend Escapes') return false;

    return true;
  }).slice(0, 3);

  // Fallback if none match strictly
  const finalResults = recommended.length > 0 ? recommended : DESTINATIONS.slice(0, 3);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F5F3EA] text-[#252C26] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#A8B69A]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close finder"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#183D32]/10 hover:bg-[#183D32] text-[#183D32] hover:text-[#F5F3EA] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#647A52] mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Trail Curator</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-semibold">
            Find Your Sahyadri Escape
          </h2>
          <p className="text-xs sm:text-sm text-[#252C26]/70 mt-1">
            Answer three quick questions to discover the ideal trail tailored to your pace and mood.
          </p>
        </div>

        {/* Step 1: Experience */}
        <div className="space-y-2 mb-5">
          <label className="text-xs font-semibold text-[#183D32] uppercase tracking-wider block">
            1. Your Experience Level
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'beginner', label: 'First-Timer' },
              { id: 'moderate', label: 'Regular Hiker' },
              { id: 'expert', label: 'Adrenaline / Expert' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setExperience(opt.id as any)}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                  experience === opt.id
                    ? 'bg-[#183D32] text-white border-[#183D32]'
                    : 'bg-white text-[#252C26] border-[#A8B69A]/30 hover:border-[#647A52]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Desired Vibe */}
        <div className="space-y-2 mb-5">
          <label className="text-xs font-semibold text-[#183D32] uppercase tracking-wider block">
            2. What are you seeking?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'forts', label: 'Ancient Forts' },
              { id: 'peaks', label: 'High Summits' },
              { id: 'forests', label: 'Dense Jungle' },
              { id: 'waterfalls', label: 'Waterfalls' },
              { id: 'canyons', label: 'Deep Canyons' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setVibe(opt.id as any)}
                className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors ${
                  vibe === opt.id
                    ? 'bg-[#647A52] text-white border-[#647A52]'
                    : 'bg-white text-[#252C26] border-[#A8B69A]/30 hover:border-[#647A52]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Duration */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-semibold text-[#183D32] uppercase tracking-wider block">
            3. Available Time
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'day', label: 'Day Trek (4 – 7 hours)' },
              { id: 'overnight', label: 'Overnight / Multi-day' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTime(opt.id as any)}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                  time === opt.id
                    ? 'bg-[#806B50] text-white border-[#806B50]'
                    : 'bg-white text-[#252C26] border-[#A8B69A]/30 hover:border-[#806B50]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Recommendations */}
        <div className="pt-4 border-t border-[#A8B69A]/30">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#183D32] mb-3 flex items-center justify-between">
            <span>Recommended for You ({finalResults.length})</span>
            <span className="text-[#806B50] font-normal lowercase">click to explore</span>
          </div>

          <div className="space-y-2.5">
            {finalResults.map((trail) => (
              <div
                key={trail.id}
                onClick={() => {
                  onClose();
                  onSelectDestination(trail);
                }}
                className="group flex items-center justify-between p-3 bg-white rounded-xl border border-[#A8B69A]/30 hover:border-[#183D32] transition-all cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={trail.image}
                    alt={trail.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#183D32] group-hover:text-[#647A52] transition-colors leading-tight">
                      {trail.name}
                    </h4>
                    <div className="text-xs text-[#806B50] flex items-center gap-2 mt-0.5">
                      <span>{trail.district}</span>
                      <span>·</span>
                      <span>{trail.difficulty}</span>
                      <span>·</span>
                      <span>{trail.duration}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#183D32] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
