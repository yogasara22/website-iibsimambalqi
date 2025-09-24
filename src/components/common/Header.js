import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside or on menu items
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Close menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-gradient-to-r from-primary-800/90 to-primary-700/90 backdrop-blur-sm py-3 md:py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          {/* Logo Container - Enhanced responsive sizing for tablet */}
          <div className="relative overflow-hidden rounded-full bg-white/90 shadow-md p-1 transition-all duration-300 group-hover:shadow-lg group-hover:bg-white">
            <img 
              src="/images/logo/logo-iibs.svg" 
              alt="Logo IIBS Imam Balqi" 
              className="h-10 w-auto md:h-11 lg:h-12 transition-all duration-300"
            />
          </div>
          
          {/* Text Container - Enhanced responsive design for tablet */}
          <div className="ml-2 md:ml-3 transition-all duration-300">
            {/* Main Title - Responsive sizing for tablet */}
            <span className={`font-bold ${
              scrolled ? 'text-primary-700' : 'text-white drop-shadow-md'
            } text-lg md:text-xl lg:text-xl transition-all duration-300 leading-tight`}>
              IIBS Imam Balqi
            </span>
            
            {/* Subtitle - Visible on tablet and desktop */}
            <p className={`text-xs ${
              scrolled ? 'text-primary-600' : 'text-white/90'
            } font-medium mt-0.5 hidden md:block lg:block transition-all duration-300`}>
              International Islamic Boarding School
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Only visible on large screens (1024px+) */}
        <div className="hidden lg:block">
          <Navigation scrolled={scrolled} />
        </div>

        {/* Mobile & Tablet Menu Button - Enhanced styling */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              scrolled ? 'text-primary-700' : 'text-white'
            } hover:text-primary-300 focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-white/10 active:scale-95`}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 md:h-7 md:w-7 transition-all duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation - Enhanced styling with improved animation */}
      {isMenuOpen && (
        <>
          {/* Backdrop for closing menu when clicking outside */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={handleMenuClose}
          ></div>
          
          {/* Mobile & Tablet Menu */}
          <div className="lg:hidden relative z-50 bg-white shadow-xl border-t border-gray-100 animate-slideDown">
            <div className="px-4 pt-4 pb-6 md:px-6 md:pt-5 md:pb-7">
              <Navigation 
                mobile={true} 
                scrolled={true} 
                onMenuItemClick={handleMenuClose}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;