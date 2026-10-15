import React, { useEffect, useState } from 'react';
import { X, Clock, Calendar, User, ArrowLeft, ArrowRight, Compass, CheckCircle2, Bookmark, Share2 } from 'lucide-react';
import { BlogStory, Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { BLOGS } from '../data/blogs';

interface BlogModalProps {
  story: BlogStory | null;
  onClose: () => void;
  onSelectDestination?: (dest: Destination) => void;
  onSelectStory?: (story: BlogStory) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  story,
  onClose,
  onSelectDestination,
  onSelectStory,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (story) {
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
  }, [story, onClose]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  if (!story) return null;

  // Find linked destination if available
  const relatedDest = story.relatedDestinationId
    ? DESTINATIONS.find((d) => d.id === story.relatedDestinationId)
    : null;

  // Find other stories
  const otherStories = BLOGS.filter((b) => b.id !== story.id).slice(0, 2);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F5F3EA] text-[#252C26] rounded-2xl shadow-2xl overflow-hidden my-6 border border-[#A8B69A]/30 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Reading Progress Bar */}
        <div className="w-full bg-[#A8B69A]/20 h-1 fixed top-0 left-0 right-0 z-30">
          <div
            className="bg-[#183D32] h-1 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Top Header Toolbar */}
        <div className="p-4 sm:px-8 border-b border-[#A8B69A]/20 flex items-center justify-between bg-[#F5F3EA] shrink-0 z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#183D32] hover:text-[#647A52] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#806B50] font-mono hidden sm:inline">
              Field Edition · {story.readTime}
            </span>
            <button
              onClick={onClose}
              aria-label="Close story"
              className="w-8 h-8 rounded-full bg-[#183D32]/10 hover:bg-[#183D32] text-[#183D32] hover:text-[#F5F3EA] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Story Reader Container */}
        <div
          onScroll={handleScroll}
          className="overflow-y-auto p-6 sm:p-12 space-y-10"
        >
          {/* Article Header */}
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#647A52] font-semibold block">
              {story.category}
            </span>
            <h1 id="blog-modal-title" className="font-serif text-3xl sm:text-5xl text-[#183D32] font-medium leading-[1.15] text-balance">
              {story.title}
            </h1>
            <p className="text-base sm:text-lg text-[#806B50] font-light italic leading-relaxed">
              {story.subtitle}
            </p>

            {/* Author info (Zero-Pill rule: unboxed text) */}
            <div className="pt-4 border-t border-[#A8B69A]/30 flex items-center gap-3 text-xs text-[#806B50]">
              <span className="font-semibold text-[#183D32]">{story.author.name}</span>
              <span aria-hidden="true">·</span>
              <span>{story.author.role}</span>
              <span aria-hidden="true">·</span>
              <span>{story.publishedDate}</span>
            </div>
          </div>

          {/* Large Hero Photograph */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#A8B69A]/30 max-h-[500px]">
            <img
              src={story.image}
              alt={story.alt}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Editorial Body */}
          <article className="max-w-2xl mx-auto space-y-8 text-base text-[#252C26]/90 font-light leading-relaxed">
            {/* Introduction */}
            <p className="text-lg sm:text-xl font-serif text-[#183D32] leading-relaxed italic border-l-2 border-[#647A52] pl-6 py-1">
              "{story.content.introduction}"
            </p>

            {/* Structured Sections */}
            {story.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 pt-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-medium tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Practical Field Tips Block */}
                {section.fieldTips && section.fieldTips.length > 0 && (
                  <div className="my-6 p-5 bg-white rounded-xl border border-[#A8B69A]/40 shadow-xs">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#647A52] mb-3 flex items-center gap-1.5">
                      <Compass className="w-4 h-4" />
                      Field Notes & Guide Advice
                    </div>
                    <ul className="space-y-2">
                      {section.fieldTips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-[#252C26]/80">
                          <span className="text-[#647A52] font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Key Takeaways */}
            <div className="mt-12 p-6 bg-[#183D32] text-[#F5F3EA] rounded-xl">
              <h3 className="font-serif text-xl font-medium text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#A8B69A]" />
                Essential Takeaways
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F5F3EA]/90 font-light">
                {story.content.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#A8B69A] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Destination Shortcut */}
            {relatedDest && onSelectDestination && (
              <div className="mt-8 p-6 bg-white rounded-xl border border-[#A8B69A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#806B50] font-semibold block">
                    Featured Destination
                  </span>
                  <h4 className="font-serif text-xl text-[#183D32] font-semibold">
                    {relatedDest.name} ({relatedDest.district})
                  </h4>
                  <p className="text-xs text-[#252C26]/70 mt-1">
                    Elevation: {relatedDest.elevationMeters}m · Difficulty: {relatedDest.difficulty}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onSelectDestination(relatedDest);
                  }}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#183D32] text-[#F5F3EA] rounded-md hover:bg-[#647A52] transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  View Full Trail Guide
                </button>
              </div>
            )}
          </article>

          {/* Related Field Notes Section */}
          <div className="max-w-2xl mx-auto pt-10 border-t border-[#A8B69A]/30">
            <h3 className="font-serif text-xl text-[#183D32] mb-6">More Field Notes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherStories.map((other) => (
                <div
                  key={other.id}
                  onClick={() => onSelectStory && onSelectStory(other)}
                  className="group bg-white p-4 rounded-xl border border-[#A8B69A]/20 hover:border-[#647A52] transition-all cursor-pointer shadow-xs"
                >
                  <span className="text-[10px] uppercase tracking-wider text-[#806B50] font-medium block mb-1">
                    {other.category}
                  </span>
                  <h4 className="font-serif text-base text-[#183D32] group-hover:text-[#647A52] font-semibold line-clamp-2 leading-snug">
                    {other.title}
                  </h4>
                  <div className="mt-3 text-xs text-[#806B50] flex items-center justify-between">
                    <span>{other.readTime}</span>
                    <span className="font-semibold text-[#183D32] flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
