
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ForStudentsPage from './pages/ForStudentsPage';
import CampusAmbassadorPage from './pages/CampusAmbassadorPage';
import ForCollegesPage from './pages/ForCollegesPage';
import ForCompaniesPage from './pages/ForCompaniesPage';
import AboutUsPage from './pages/AboutUsPage';
import HeroParticles from './components/HeroParticles';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      {/* Background color layer  */}
      <div className="fixed inset-0 -z-20 bg-dark-bg" />
      {/* Particles layer */}
      <HeroParticles />
      {/* Content layer */}
      <div className="relative z-0 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<ForStudentsPage />} />
            <Route path="/ambassador" element={<CampusAmbassadorPage />} />
            <Route path="/colleges" element={<ForCollegesPage />} />
            <Route path="/companies" element={<ForCompaniesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:devashish@unii.club" className="text-gray-400 hover:text-brand-purple transition-colors">
              devashish@unii.club
            </a>
          </div>
          {/* Add social links here if needed */}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} Unii.club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default App;
