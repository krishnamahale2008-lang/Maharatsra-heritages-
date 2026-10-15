import React, { useState, useEffect, useCallback } from 'react';
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
import { HomeFAQ } from './components/HomeFAQ';
import { Footer } from './components/Footer';
import { Destination, BlogStory, TrailCategory } from './types';
import { DESTINATIONS } from './data/destinations';
import { BLOGS } from './data/blogs';
import { updateSEO } from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return typeof window !== 'undefined' ? window.location.pathname : '/';
  });
  const [isNotFound, setIsNotFound] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedStory, setSelectedStory] = useState<BlogStory | null>(null);
  const [finderOpen, setFinderOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Helper to find a blog by id, slug, or alias
  const findStory = useCallback((identifier: string): BlogStory | undefined => {
    const clean = identifier.replace(/^\/journal\//, '').replace(/^\//, '');
    return BLOGS.find(
      (b) =>
        b.id === clean ||
        b.slug === clean ||
        (b.aliases && b.aliases.includes(clean))
    );
  }, []);

  // Helper to find a destination by id
  const findDestination = useCallback((identifier: string): Destination | undefined => {
    const clean = identifier.replace(/^\/destinations\//, '').replace(/^\//, '');
    return DESTINATIONS.find((d) => d.id === clean);
  }, []);

  // Centralized router navigation
  const navigate = useCallback((path: string, options?: { replace?: boolean }) => {
    if (typeof window !== 'undefined') {
      if (options?.replace) {
        window.history.replaceState({}, '', path);
      } else {
        window.history.pushState({}, '', path);
      }
      setCurrentPath(path.split('#')[0] || '/');
    }
  }, []);

  // Sync state and SEO based on current URL path
  useEffect(() => {
    const rawPath = currentPath.split('?')[0].split('#')[0];
    const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;

    // 1. Target Page 3: Trekking Safety Guide
    if (
      path === '/journal/trekking-safety-guide' ||
      path === '/journal/first-timers-handbook' ||
      path === '/journal/trekking-safety-in-maharashtra'
    ) {
      const safetyStory = findStory('trekking-safety-guide');
      if (safetyStory) {
        setIsNotFound(false);
        setSelectedStory(safetyStory);
        setSelectedDestination(null);
        updateSEO({
          title: "Trekking Safety in Maharashtra | Beginner's Guide",
          description:
            'Prepare for trekking in Maharashtra with beginner-friendly safety advice, essential gear, weather precautions, responsible trail practices and practical planning tips.',
          canonicalPath: '/journal/trekking-safety-guide',
          ogType: 'article',
          image: safetyStory.image,
          authorName: safetyStory.author.name,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Trekking Safety in Maharashtra: The Beginner's Guide",
            description:
              'Prepare for trekking in Maharashtra with beginner-friendly safety advice, essential gear, weather precautions, responsible trail practices and practical planning tips.',
            author: {
              '@type': 'Person',
              name: safetyStory.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Maharashtra Trails',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': '/journal/trekking-safety-guide',
            },
          },
        });
        return;
      }
    }

    // 2. Target Page 4: Waterfalls in Maharashtra
    if (
      path === '/journal/waterfalls-in-maharashtra' ||
      path === '/journal/monsoon-waterfall-trails' ||
      path === '/journal/waterfalls-and-nature-trails'
    ) {
      const waterfallStory = findStory('waterfalls-in-maharashtra');
      if (waterfallStory) {
        setIsNotFound(false);
        setSelectedStory(waterfallStory);
        setSelectedDestination(null);
        updateSEO({
          title: 'Waterfalls in Maharashtra | Nature & Trekking Guide',
          description:
            'Discover waterfalls and nature trails in Maharashtra, with seasonal guidance, trekking preparation, responsible travel tips and important monsoon safety precautions.',
          canonicalPath: '/journal/waterfalls-in-maharashtra',
          ogType: 'article',
          image: waterfallStory.image,
          authorName: waterfallStory.author.name,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Waterfalls in Maharashtra: Nature & Trekking Guide',
            description:
              'Discover waterfalls and nature trails in Maharashtra, with seasonal guidance, trekking preparation, responsible travel tips and important monsoon safety precautions.',
            author: {
              '@type': 'Person',
              name: waterfallStory.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Maharashtra Trails',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': '/journal/waterfalls-in-maharashtra',
            },
          },
        });
        return;
      }
    }

    // 3. Other Journal Articles
    if (path.startsWith('/journal/')) {
      const story = findStory(path);
      if (story) {
        setIsNotFound(false);
        setSelectedStory(story);
        setSelectedDestination(null);
        updateSEO({
          title: `${story.title} | Maharashtra Trails`,
          description: story.summary,
          canonicalPath: `/journal/${story.slug || story.id}`,
          ogType: 'article',
          image: story.image,
          authorName: story.author.name,
        });
        return;
      } else {
        // Unknown journal slug -> 404
        setIsNotFound(true);
        setSelectedStory(null);
        setSelectedDestination(null);
        updateSEO({
          title: 'Article Not Found (404) | Maharashtra Trails',
          description: 'The requested journal article could not be found.',
          noindex: true,
        });
        return;
      }
    }

    // 4. Target Page 2: Trekking Destinations / Travel Guide
    if (path === '/destinations' || path === '/trekking-places-in-maharashtra') {
      setIsNotFound(false);
      setSelectedStory(null);
      setSelectedDestination(null);
      updateSEO({
        title: 'Trekking Places in Maharashtra | Complete Travel Guide',
        description:
          'Explore trekking places in Maharashtra, from historic hill forts to scenic mountain trails, with route information, difficulty guidance, seasonal tips and preparation advice.',
        canonicalPath: '/destinations',
        ogType: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Trekking Places in Maharashtra',
          description:
            'Explore trekking places in Maharashtra, from historic hill forts to scenic mountain trails, with route information, difficulty guidance, seasonal tips and preparation advice.',
          publisher: {
            '@type': 'Organization',
            name: 'Maharashtra Trails',
          },
        },
      });

      // Scroll to destinations section smoothly
      const el = document.getElementById('destinations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 5. Individual Destination URL
    if (path.startsWith('/destinations/')) {
      const dest = findDestination(path);
      if (dest) {
        setIsNotFound(false);
        setSelectedDestination(dest);
        setSelectedStory(null);
        updateSEO({
          title: `${dest.name} Trek Guide (${dest.district}) | Maharashtra Trails`,
          description: dest.summary,
          canonicalPath: `/destinations/${dest.id}`,
          image: dest.image,
        });
        return;
      } else {
        // Unknown destination slug -> 404
        setIsNotFound(true);
        setSelectedStory(null);
        setSelectedDestination(null);
        updateSEO({
          title: 'Trail Not Found (404) | Maharashtra Trails',
          description: 'The requested trekking destination could not be found.',
          noindex: true,
        });
        return;
      }
    }

    // 6. Target Page 1: Homepage default (exact / or empty)
    if (path === '/' || path === '') {
      setIsNotFound(false);
      setSelectedStory(null);
      setSelectedDestination(null);
      updateSEO({
        title: 'Maharashtra Trails | Trekking Places & Travel Guides',
        description:
          'Discover trekking places in Maharashtra with guides to mountain forts, waterfalls, nature trails, trekking routes, seasonal tips and outdoor adventures.',
        canonicalPath: '/',
        ogType: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Maharashtra Trails',
          description:
            'Discover trekking places in Maharashtra with guides to mountain forts, waterfalls, nature trails, trekking routes, seasonal tips and outdoor adventures.',
          url: typeof window !== 'undefined' ? window.location.origin : '',
        },
      });
      return;
    }

    // 7. Catch-all: Page Not Found (404) for any other invalid route
    setIsNotFound(true);
    setSelectedStory(null);
    setSelectedDestination(null);
    updateSEO({
      title: 'Page Not Found (404) | Maharashtra Trails',
      description: 'The requested page could not be found on Maharashtra Trails.',
      noindex: true,
    });
  }, [currentPath, findStory, findDestination]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track active section for navigation highlighting
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
    navigate('/destinations');
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    navigate('/destinations');
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDestinationClick = (dest: Destination) => {
    navigate(`/destinations/${dest.id}`);
    setSelectedDestination(dest);
  };

  const handleStoryClick = (story: BlogStory) => {
    const slug = story.slug || story.id;
    navigate(`/journal/${slug}`);
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    if (currentPath !== '/' && currentPath !== '/destinations') {
      navigate('/', { replace: true });
    }
    setSelectedDestination(null);
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EA] text-[#252C26] flex flex-col font-sans selection:bg-[#647A52] selection:text-white">
      {/* Aesthetic Slim Navigation */}
      <Navbar
        onOpenFinder={() => setFinderOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Full-screen Hero Section with Real Sahyadri Photography & H1 */}
        <Hero
          onExploreClick={handleExploreClick}
          onFinderClick={() => setFinderOpen(true)}
        />

        {/* Every Trail Has a Story Narrative Section */}
        <StoryIntro />

        {/* Homepage AEO Q&A Section with 2 H2 Questions and Direct Answers */}
        <HomeFAQ
          onNavigateDestinations={() => {
            navigate('/destinations');
            const el = document.getElementById('destinations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onNavigateArticle={(slug) => {
            navigate(`/journal/${slug}`);
          }}
        />

        {/* Find Your Kind of Wild Category Showcase */}
        <CategoryShowcase
          onSelectCategory={(cat: TrailCategory) => handleCategorySelect(cat)}
          selectedCategory={selectedCategory}
        />

        {/* Destination Section — All 16 Sahyadri Trails + 2 AEO Q&A Headings */}
        <DestinationSection
          onSelectDestination={handleDestinationClick}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* Nature Photography Gallery — Where the Mountains Take Over */}
        <NatureGallery />

        {/* Field Notes from the Sahyadris — 10 Complete Blogs / Travel Magazine */}
        <JournalSection
          onSelectStory={handleStoryClick}
        />

        {/* Responsible Stewardship & Safety */}
        <ResponsibleTrekking />
      </main>

      {/* Deep Forest-Green Footer with Leave only footprints closing */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onOpenFinder={() => setFinderOpen(true)}
      />

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={handleCloseModal}
        onSelectStory={(storyId) => {
          const st = findStory(storyId);
          if (st) handleStoryClick(st);
        }}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        story={selectedStory}
        onClose={handleCloseModal}
        onSelectDestination={(dest) => {
          handleDestinationClick(dest);
        }}
        onSelectStory={(story) => {
          handleStoryClick(story);
        }}
      />

      {/* Interactive Trail Finder Modal */}
      <TrailFinderModal
        isOpen={finderOpen}
        onClose={() => setFinderOpen(false)}
        onSelectDestination={(dest) => {
          handleDestinationClick(dest);
        }}
      />
    </div>
  );
}
