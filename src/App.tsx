import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryIntro } from './components/StoryIntro';
import { CategoryShowcase } from './components/CategoryShowcase';
import { DestinationSection } from './components/DestinationSection';
import { DestinationModal } from './components/DestinationModal';
import { NatureGallery } from './components/NatureGallery';
import { JournalSection } from './components/JournalSection';
import { BlogModal } from './components/BlogModal';
import { ResponsibleTrekking } from './components/ResponsibleTrekking';
import { TrailFinderModal } from './components/TrailFinderModal';
import { Footer } from './components/Footer';
import { Destination, BlogStory, TrailCategory } from './types';
import { DESTINATIONS } from './data/destinations';
import { BLOGS } from './data/blogs';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedStory, setSelectedStory] = useState<BlogStory | null>(null);
  const [finderOpen, setFinderOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'explore', 'destinations', 'journal', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EA] text-[#252C26] flex flex-col font-sans selection:bg-[#647A52] selection:text-white">
      {/* Aesthetic Slim Navigation */}
      <Navbar
        onOpenFinder={() => setFinderOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Full-screen Hero Section with Real Sahyadri Photography */}
        <Hero
          onExploreClick={handleExploreClick}
          onFinderClick={() => setFinderOpen(true)}
        />

        {/* Every Trail Has a Story Narrative Section */}
        <StoryIntro />

        {/* Find Your Kind of Wild Category Showcase */}
        <CategoryShowcase
          onSelectCategory={(cat: TrailCategory) => handleCategorySelect(cat)}
          selectedCategory={selectedCategory}
        />

        {/* Destination Section — All 16 Sahyadri Trails */}
        <DestinationSection
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* Nature Photography Gallery — Where the Mountains Take Over */}
        <NatureGallery />

        {/* Field Notes from the Sahyadris — 10 Complete Blogs / Travel Magazine */}
        <JournalSection
          onSelectStory={(story) => setSelectedStory(story)}
        />

        {/* Responsible Stewardship & Safety */}
        <ResponsibleTrekking />
      </main>

      {/* Deep Forest-Green Footer */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onOpenFinder={() => setFinderOpen(true)}
      />

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onSelectStory={(storyId) => {
          const st = BLOGS.find((b) => b.id === storyId);
          if (st) setSelectedStory(st);
        }}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onSelectStory={(story) => setSelectedStory(story)}
      />

      {/* Interactive Trail Finder Modal */}
      <TrailFinderModal
        isOpen={finderOpen}
        onClose={() => setFinderOpen(false)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
      />
    </div>
  );
}
