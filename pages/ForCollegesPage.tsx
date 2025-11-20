import React, { useState } from 'react';
import { Button, FadeIn, Card, ShinyText, Modal } from '../components/ui';

const BenefitItem = ({ title, description }: { title: string, description: string }) => (
    <Card>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </Card>
);

const ForCollegesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
            <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                The <ShinyText>Operating System</ShinyText> for Student Success.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
                Empower your students, streamline your campus activities, and transform your placement outcomes. Unii.club is the single platform to manage your practical learning ecosystem and enhance your institution's reputation.
            </p>
            </div>
        </FadeIn>
        
        <div className="mt-20">
            <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
                    Move from Reactive Placements to Proactive Development
                </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={200}><BenefitItem title="Foster a Vibrant Club Culture" description="Provide your faculty and students with a structured, easy-to-use platform to create and manage high-impact clubs." /></FadeIn>
                <FadeIn delay={300}><BenefitItem title="Gain Unprecedented Insights" description="Our analytics dashboard gives you a real-time view of student engagement, skill development, and campus-wide trends. Identify skill gaps before they become a problem." /></FadeIn>
                <FadeIn delay={400}><BenefitItem title="Boost Placement Rates" description="By helping students build verified, practical portfolios, you make them exponentially more attractive to recruiters, directly improving your placement statistics." /></FadeIn>
                <FadeIn delay={500}><BenefitItem title="Enhance Your Brand" description="A vibrant campus life and strong placement record are your most powerful marketing tools. Showcase your success on our platform to attract the best new students." /></FadeIn>
            </div>
        </div>
        
        <FadeIn delay={600} className="mt-24 text-center bg-dark-card border border-dark-border rounded-2xl p-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Partner with Us to Build the Future of Education.
            </h2>
            <div className="mt-8 flex justify-center">
                <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Request a Free Demo</Button>
            </div>
        </FadeIn>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Partner with Unii.club">
          <div className="space-y-6">
            <div className="flex items-start space-x-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg p-4">
              <img src="/logo.png" alt="Unii.club" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Request a Demo</h3>
                <p className="text-gray-400 text-sm">Learn how Unii.club can transform your institution</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400">
                We'd love to show you how Unii.club can help your institution foster a vibrant club culture,
                gain unprecedented insights into student development, and boost placement rates.
              </p>

              <div>
                <h4 className="font-semibold text-white mb-3">What to Include in Your Email:</h4>
                <ul className="ml-4 space-y-2 text-gray-400 text-sm list-disc">
                  <li><strong className="text-white">College/University Name:</strong> Your institution's official name</li>
                  <li><strong className="text-white">Your Role:</strong> Your position at the institution (e.g., Dean, HOD, Placement Officer)</li>
                  <li><strong className="text-white">Contact Information:</strong> Best phone number and email to reach you</li>
                  <li><strong className="text-white">Current Challenges:</strong> What challenges you're facing with student development or placements</li>
                  <li><strong className="text-white">Student Strength:</strong> Approximate number of students</li>
                  <li><strong className="text-white">Preferred Demo Time:</strong> Your availability for a demo call</li>
                </ul>
              </div>

              <div className="bg-dark-card/50 border border-dark-border rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-3">Send your request to:</p>
                <a
                  href="mailto:support@unii.club?subject=College Partnership Inquiry - [Your College Name]"
                  className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-purple transition-colors font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@unii.club
                </a>
                <p className="text-gray-400 text-sm mt-2 font-semibold">Subject: "College Partnership Inquiry - [Your College Name]"</p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 text-sm font-semibold mb-1">⏱️ Response Time</p>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours to schedule a personalized demo</p>
              </div>

              <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-4">
                <p className="text-white text-sm font-semibold mb-2">🎯 What You'll Learn:</p>
                <ul className="text-gray-400 text-sm space-y-1 list-disc ml-4">
                  <li>How to manage all campus clubs on one platform</li>
                  <li>Real-time analytics on student engagement and skill development</li>
                  <li>Strategies to improve placement outcomes</li>
                  <li>Integration with existing campus systems</li>
                  <li>Pricing and implementation timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
    </div>
  );
};

export default ForCollegesPage;