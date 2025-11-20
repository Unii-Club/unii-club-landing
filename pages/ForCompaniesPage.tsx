import React, { useState } from 'react';
import { Button, FadeIn, Card, ShinyText, Modal } from '../components/ui';

const ForCompaniesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Hire <ShinyText>Proven Skill</ShinyText>, Not Just Potential.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              Stop sifting through thousands of unverified resumes. Unii.club gives you direct access to a pipeline of student talent with portfolios of verified, hands-on project experience.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-20">
          <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
                The End of Guesswork in Campus Hiring.
              </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={200}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Access Verified, High-Fidelity Profiles</h3>
                      <p className="text-gray-400">Every student profile is a rich portfolio of their club work, project contributions, and hackathon performance, verified by faculty mentors.</p>
                  </Card>
              </FadeIn>
              <FadeIn delay={300}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Hire Based on Skills, Not Keywords</h3>
                      <p className="text-gray-400">Our intelligent search and matching engine allows you to find candidates based on the actual skills they have demonstrated, not just what they list on a resume.</p>
                  </Card>
              </FadeIn>
              <FadeIn delay={400}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Reduce Hiring Costs & Time</h3>
                      <p className="text-gray-400">Drastically shorten your screening process. Our platform pre-vets candidates, so you only interview students who have already proven they can do the work.</p>
                  </Card>
              </FadeIn>
              <FadeIn delay={500}>
                  <Card className="h-full">
                      <h3 className="text-xl font-bold text-white mb-2">Engage with Future Talent</h3>
                      <p className="text-gray-400">Sponsor hackathons, post challenges, and build your brand directly with a community of India's most ambitious and proactive students.</p>
                  </Card>
              </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={600} className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build Your Future Team Today.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>Get Started</Button>
              <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Contact Sales</Button>
          </div>
        </FadeIn>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hire Verified Talent">
        <div className="space-y-6">
          <div className="flex items-start space-x-3 bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
            <img src="/logo.png" alt="Unii.club" className="w-12 h-12 rounded-lg" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Partner with Unii.club</h3>
              <p className="text-gray-400 text-sm">Access verified student talent for your hiring needs</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">
              Connect with talented students who have proven their skills through real projects, hackathons,
              and club activities. Let us help you build your team with verified, high-quality talent.
            </p>

            <div>
              <h4 className="font-semibold text-white mb-3">What to Include in Your Email:</h4>
              <ul className="ml-4 space-y-2 text-gray-400 text-sm list-disc">
                <li><strong className="text-white">Company Name:</strong> Your organization's name</li>
                <li><strong className="text-white">Industry & Size:</strong> Your industry and company size</li>
                <li><strong className="text-white">Your Role:</strong> Your position (e.g., HR Manager, Tech Recruiter, Founder)</li>
                <li><strong className="text-white">Contact Information:</strong> Best phone number and email</li>
                <li><strong className="text-white">Hiring Needs:</strong> Roles you're looking to fill (internships, full-time, project-based)</li>
                <li><strong className="text-white">Skills Required:</strong> Technical skills or domains you're interested in</li>
                <li><strong className="text-white">Timeline:</strong> When you're looking to hire</li>
                <li><strong className="text-white">Volume:</strong> Approximate number of hires</li>
              </ul>
            </div>

            <div className="bg-dark-card/50 border border-dark-border rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-3">Send your inquiry to:</p>
              <a
                href="mailto:support@unii.club?subject=Company Partnership Inquiry - [Your Company Name]"
                className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-brand-purple transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@unii.club
              </a>
              <p className="text-gray-400 text-sm mt-2 font-semibold">Subject: "Company Partnership Inquiry - [Your Company Name]"</p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 text-sm font-semibold mb-1">⏱️ Response Time</p>
              <p className="text-gray-400 text-sm">We'll respond within 24 hours to discuss your hiring needs</p>
            </div>

            <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-lg p-4">
              <p className="text-white text-sm font-semibold mb-2">🎯 How We Help You:</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc ml-4">
                <li>Access to verified student profiles with proven project experience</li>
                <li>Skill-based matching using our intelligent search engine</li>
                <li>Pre-vetted candidates to reduce screening time</li>
                <li>Direct engagement through hackathons and challenges</li>
                <li>Flexible hiring options: internships, full-time, or project-based</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <p className="text-purple-400 text-sm font-semibold mb-2">💼 Partnership Options:</p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc ml-4">
                <li><strong className="text-white">Recruitment Partner:</strong> Access to our talent pool for hiring</li>
                <li><strong className="text-white">Hackathon Sponsor:</strong> Engage with students through challenges</li>
                <li><strong className="text-white">Campus Brand Partner:</strong> Build your employer brand with students</li>
                <li><strong className="text-white">Enterprise Partner:</strong> Custom solutions for large-scale hiring</li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ForCompaniesPage;