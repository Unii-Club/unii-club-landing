
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ForStudentsPage from './pages/ForStudentsPage';
import CampusAmbassadorPage from './pages/CampusAmbassadorPage';
import ForCollegesPage from './pages/ForCollegesPage';
import ForCompaniesPage from './pages/ForCompaniesPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
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
    <BrowserRouter>
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
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Unii.club</h3>
            <p className="text-gray-400 text-sm">
              Building the future of student success through verified experiences and AI-powered guidance.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">For Students</h4>
            <ul className="space-y-2">
              <li><Link to="/students" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">Student Platform</Link></li>
              <li><Link to="/ambassador" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">Campus Ambassador</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">For Organizations</h4>
            <ul className="space-y-2">
              <li><Link to="/colleges" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">For Colleges</Link></li>
              <li><Link to="/companies" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">For Companies</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:devashish@unii.club" className="text-gray-400 hover:text-brand-purple transition-colors">
                devashish@unii.club
              </a>
            </div>
            <p className="text-center text-base text-gray-500">
              &copy; {new Date().getFullYear()} Unii.club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
