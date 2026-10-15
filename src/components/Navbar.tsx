import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenFinder: () => void;
  activeSection: string;
  onNavigateHome?: (sectionHref?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFinder, activeSection, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Explore', href: '#explore' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Journal', href: '#journal' },
    { label: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome(href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F3EA]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#A8B69A]/30 text-[#183D32]'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <Compass className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-45 ${
            isScrolled ? 'text-[#183D32]' : 'text-[#F5F3EA]'
          }`} />
          <span className="font-serif tracking-widest text-lg sm:text-xl font-semibold uppercase">
            Maharashtra Trails
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-200 tracking-wide whitespace-nowrap shrink-0 ${
                  isScrolled
                    ? isActive
                      ? 'text-[#183D32] font-semibold border-b-2 border-[#183D32] pb-0.5'
                      : 'text-[#252C26]/80 hover:text-[#183D32]'
                    : isActive
                    ? 'text-white font-semibold border-b-2 border-white pb-0.5'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenFinder}
            className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md transition-all duration-200 whitespace-nowrap shrink-0 ${
              isScrolled
                ? 'bg-[#183D32] text-[#F5F3EA] hover:bg-[#183D32]/90 shadow-sm'
                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            <span>Find Your Escape</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          className={`md:hidden p-2 rounded-md transition-colors ${
            isScrolled ? 'text-[#183D32] hover:bg-[#183D32]/10' : 'text-white hover:bg-white/10'
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F3EA] text-[#183D32] border-b border-[#A8B69A]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium py-2 border-b border-[#A8B69A]/20 hover:text-[#647A52] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFinder();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold bg-[#183D32] text-[#F5F3EA] rounded-md shadow-sm"
            >
              <span>Find Your Escape</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
