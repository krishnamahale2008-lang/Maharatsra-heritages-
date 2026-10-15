import React, { useEffect } from 'react';
import { X, MapPin, Clock, Mountain, Calendar, Compass, ShieldAlert, CheckCircle2, Navigation, AlertTriangle, BookOpen } from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onSelectStory?: (storyId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (destination) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="destination-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F5F3EA] text-[#252C26] rounded-2xl shadow-2xl overflow-hidden my-8 border border-[#A8B69A]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={destination.image}
            alt={destination.alt}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#183D32] via-[#183D32]/40 to-transparent" />

          {/* Title & Marathi Name Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A8B69A] mb-1">
              <span>{destination.region}</span>
              <span>·</span>
              <span>{destination.district}</span>
            </div>
            <h2 id="destination-modal-title" className="font-serif text-3xl sm:text-5xl font-medium leading-tight">
              {destination.name}
            </h2>
            <div className="flex items-center gap-3 mt-2 text-sm text-[#F5F3EA]/90 font-light">
              <span className="text-base font-normal font-['Noto_Sans_Devanagari',sans-serif]">{destination.marathiName}</span>
              <span>—</span>
              <span className="italic">"{destination.tagline}"</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border-b border-[#A8B69A]/20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#F5F3EA] text-[#183D32]">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#806B50]">Elevation</div>
              <div className="text-sm font-semibold text-[#183D32] tabular-nums">
                {destination.elevationMeters}m ({destination.elevationFeet}ft)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#F5F3EA] text-[#183D32]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#806B50]">Duration</div>
              <div className="text-sm font-semibold text-[#183D32]">
                {destination.duration}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#F5F3EA] text-[#183D32]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#806B50]">Difficulty</div>
              <div className="text-sm font-semibold text-[#183D32]">
                {destination.difficulty}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#F5F3EA] text-[#183D32]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#806B50]">Best Season</div>
              <div className="text-sm font-semibold text-[#183D32]">
                {destination.bestSeason.split('&')[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <section>
            <h3 className="font-serif text-2xl text-[#183D32] mb-3">Trail Overview</h3>
            <p className="text-sm sm:text-base text-[#252C26]/85 font-light leading-relaxed">
              {destination.description}
            </p>
          </section>

          {/* Highlights */}
          <section className="bg-white p-6 rounded-xl border border-[#A8B69A]/30">
            <h3 className="font-serif text-xl text-[#183D32] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#647A52]" />
              Trail Highlights & Key Sights
            </h3>
            <ul className="space-y-2.5">
              {destination.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#252C26]/80 font-light">
                  <span className="text-[#647A52] font-semibold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Route & Logistics */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#A8B69A]/30">
              <h3 className="font-serif text-lg text-[#183D32] mb-3 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#806B50]" />
                Route Specifications
              </h3>
              <div className="space-y-2 text-sm text-[#252C26]/80 font-light">
                <div>
                  <strong className="font-medium text-[#183D32]">Terrain Type:</strong> {destination.routeDetails.trailType}
                </div>
                <div>
                  <strong className="font-medium text-[#183D32]">Trail Distance:</strong> {destination.routeDetails.totalDistanceKm} km
                </div>
                <div>
                  <strong className="font-medium text-[#183D32]">Water Availability:</strong> {destination.routeDetails.waterSourceNote}
                </div>
                <div>
                  <strong className="font-medium text-[#183D32]">Technical Challenges:</strong> {destination.routeDetails.technicalSections}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#A8B69A]/30">
              <h3 className="font-serif text-lg text-[#183D32] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#806B50]" />
                Base Village & Access
              </h3>
              <div className="space-y-2 text-sm text-[#252C26]/80 font-light">
                <div>
                  <strong className="font-medium text-[#183D32]">Base Village:</strong> {destination.baseVillage}
                </div>
                <div>
                  <strong className="font-medium text-[#183D32]">From Mumbai:</strong> {destination.distanceFromMumbai}
                </div>
                <div>
                  <strong className="font-medium text-[#183D32]">From Pune:</strong> {destination.distanceFromPune}
                </div>
              </div>
            </div>
          </section>

          {/* History & Significance */}
          <section className="bg-[#183D32]/5 p-6 rounded-xl border border-[#183D32]/10">
            <h3 className="font-serif text-xl text-[#183D32] mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#806B50]" />
              Historical & Cultural Significance
            </h3>
            <p className="text-sm text-[#252C26]/85 font-light leading-relaxed">
              {destination.historicalSignificance}
            </p>
          </section>

          {/* Packing & Safety Side by Side */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-serif text-lg text-[#183D32] mb-3 font-semibold">Recommended Packing List</h4>
              <ul className="space-y-2 text-sm text-[#252C26]/80 font-light">
                {destination.packingChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#806B50]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200/60">
              <h4 className="font-serif text-lg text-amber-900 mb-3 font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                Safety Advisory
              </h4>
              <ul className="space-y-2 text-xs text-amber-950 font-light">
                {destination.safetyGuidelines.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F5F3EA] border-t border-[#A8B69A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#806B50] font-light italic">
            Always register with local village panchayats and verify current weather prior to departure.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#183D32] text-[#F5F3EA] rounded-md hover:bg-[#183D32]/90 transition-colors"
          >
            Close Trail Details
          </button>
        </div>
      </div>
    </div>
  );
};
