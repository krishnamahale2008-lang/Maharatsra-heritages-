import React, { useState } from 'react';
import { Maximize2, X, MapPin } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/gallery';
import { GalleryPhoto } from '../types';

export const NatureGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#183D32] text-[#F5F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A8B69A] font-medium block mb-2">
            The Sahyadri Monograph
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Where the Mountains Take Over.
          </h2>
          <div className="w-12 h-0.5 bg-[#A8B69A]/40 mx-auto my-6" />
          <p className="text-sm sm:text-base text-[#A8B69A] font-light leading-relaxed">
            Basalt ramparts sculpted by 65 million years of volcanic history, moss-cushioned forest floors, and the dramatic monsoon mist of Maharashtra.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => {
            // Asymmetrical layout spans for a curated editorial monograph look
            let colSpan = 'lg:col-span-4';
            let rowSpan = 'h-72 sm:h-80';

            if (index === 0) {
              colSpan = 'lg:col-span-8';
              rowSpan = 'h-80 sm:h-96';
            } else if (index === 1) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-80 sm:h-96';
            } else if (index === 2) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-72 sm:h-80';
            } else if (index === 3) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-72 sm:h-80';
            } else if (index === 4) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-72 sm:h-80';
            } else if (index === 5) {
              colSpan = 'lg:col-span-5';
              rowSpan = 'h-80 sm:h-96';
            } else if (index === 6) {
              colSpan = 'lg:col-span-7';
              rowSpan = 'h-80 sm:h-96';
            } else if (index === 7) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-72 sm:h-80';
            } else if (index === 8) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-72 sm:h-80';
            } else if (index === 9) {
              colSpan = 'lg:col-span-4';
              rowSpan = 'h-72 sm:h-80';
            } else if (index === 10) {
              colSpan = 'lg:col-span-6';
              rowSpan = 'h-80 sm:h-96';
            } else if (index === 11) {
              colSpan = 'lg:col-span-6';
              rowSpan = 'h-80 sm:h-96';
            }

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${colSpan} ${rowSpan} border border-[#A8B69A]/20 hover:border-white/50 transition-all duration-300 shadow-sm`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#A8B69A] uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{photo.location}</span>
                    <span>·</span>
                    <span>{photo.district}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-medium leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#F5F3EA]/70 font-light mt-1 line-clamp-1 group-hover:line-clamp-2 transition-all">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image viewer"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center max-w-2xl px-4 text-white">
              <div className="text-xs uppercase tracking-widest text-[#A8B69A] mb-1">
                {selectedPhoto.category} · {selectedPhoto.location}, {selectedPhoto.district}
              </div>
              <h3 className="font-serif text-2xl font-medium">{selectedPhoto.title}</h3>
              <p className="text-sm text-[#F5F3EA]/80 font-light mt-1">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
