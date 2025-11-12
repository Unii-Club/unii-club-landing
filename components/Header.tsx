
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const mainLinks = [
  { name: 'Home', path: '/' },
  { name: 'Campus Ambassador', path: '/ambassador' },
  { name: 'About Us', path: '/about' },
];

const dropdownLinks = [
  { name: 'For Students', path: '/students' },
  { name: 'For Colleges', path: '/colleges' },
  { name: 'For Companies', path: '/companies' },
];


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
    }, 200);
  };


  const linkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClass = "text-white bg-white/10";
  const inactiveLinkClass = "text-gray-400 hover:text-white hover:bg-white/5";
  
  const dropdownLinkClass = "block px-4 py-2 text-sm text-gray-300 hover:bg-dark-card hover:text-white w-full text-left";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/98 backdrop-blur-2xl border-b border-dark-border shadow-lg' : 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Backing Badge */}
        <div className="flex items-center justify-center py-2 border-b border-dark-border/50">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full text-blue-300 font-semibold border border-blue-500/30 text-[10px] md:text-xs whitespace-nowrap">
                Backed by Google for Startups
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full text-orange-300 font-semibold border border-orange-500/30 text-[10px] md:text-xs whitespace-nowrap">
                AWS Startup Program
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 text-white text-2xl font-bold hover:text-brand-purple transition-colors">
              Unii.club
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                  {link.name}
                </NavLink>
              ))}
              {/* Dropdown */}
              <div className="relative" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                <button className={`${linkClass} ${inactiveLinkClass} flex items-center gap-1`}>
                  Join Us
                  <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-52 rounded-lg shadow-2xl bg-dark-bg/95 backdrop-blur-xl ring-1 ring-dark-border overflow-hidden">
                    <div className="py-2">
                      {dropdownLinks.map(link => (
                         <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsDropdownOpen(false)}
                            className={({ isActive }) => `${dropdownLinkClass} ${isActive ? 'bg-brand-purple/20 text-brand-purple' : ''}`}
                          >
                           {link.name}
                         </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://app.unii.club/login" className="text-gray-300 hover:bg-dark-card hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">Log In</a>
            <a href="https://app.unii.club/register" className="bg-gradient-to-r from-brand-purple to-violet-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-violet-600 hover:to-brand-purple transition-all transform hover:scale-105 shadow-lg hover:shadow-brand-purple/50">Sign Up for Free</a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-dark-card inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          {/* Backdrop blur overlay - positioned below navbar but above content */}
          <div className="md:hidden fixed inset-0 top-[88px] bg-black/80 backdrop-blur-md z-40" onClick={() => setIsOpen(false)} />

          {/* Mobile menu */}
          <div className="md:hidden fixed left-0 right-0 top-[88px] bg-dark-bg backdrop-blur-3xl z-50 max-h-[calc(100vh-88px)] overflow-y-auto shadow-2xl border-b border-dark-border" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block ${linkClass} text-base ${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 mt-2 border-t border-dark-border">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Join Us</p>
                <div className="mt-1 space-y-1">
                {dropdownLinks.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `block ${linkClass} text-base ${isActive ? activeLinkClass : inactiveLinkClass}`}
                    >
                        {link.name}
                    </NavLink>
                ))}
                </div>
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700 px-2 space-y-2">
            <a href="https://app.unii.club/login" className="w-full text-center text-gray-300 hover:bg-dark-card hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition-all">Log In</a>
            <a href="https://app.unii.club/register" className="w-full text-center bg-gradient-to-r from-brand-purple to-violet-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:from-violet-600 hover:to-brand-purple transition-all shadow-lg">Sign Up for Free</a>
          </div>

          {/* Mobile Backing Badges */}
          <div className="px-4 py-4 border-t border-dark-border/50">
            <p className="text-xs text-gray-500 mb-2 text-center">Backed by:</p>
            <div className="flex flex-col gap-2">
              <span className="text-center px-3 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full text-blue-300 text-xs font-semibold border border-blue-500/30">
                Google for Startups
              </span>
              <span className="text-center px-3 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full text-orange-300 text-xs font-semibold border border-orange-500/30">
                AWS Startup Program
              </span>
            </div>
          </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
