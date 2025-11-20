import React from 'react';
import { FadeIn, ShinyText, Card, GlassIcon } from '../components/ui';

const ContactPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Get in <ShinyText>Touch</ShinyText>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
              Have questions or want to learn more about Unii.club? We'd love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FadeIn delay={200}>
            <Card className="h-full">
              <GlassIcon className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </GlassIcon>
              <h3 className="text-xl font-bold text-white mb-2">General Inquiries</h3>
              <p className="text-gray-400 mb-4">
                For general questions about Unii.club, partnerships, or media inquiries.
              </p>
              <a
                href="mailto:devashish@unii.club"
                className="text-brand-purple hover:text-brand-blue transition-colors font-semibold inline-flex items-center"
              >
                devashish@unii.club
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Card>
          </FadeIn>

          <FadeIn delay={300}>
            <Card className="h-full">
              <GlassIcon className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </GlassIcon>
              <h3 className="text-xl font-bold text-white mb-2">Support</h3>
              <p className="text-gray-400 mb-4">
                Need help with the platform? Our support team is here to assist you.
              </p>
              <a
                href="mailto:support@unii.club"
                className="text-brand-purple hover:text-brand-blue transition-colors font-semibold inline-flex items-center"
              >
                support@unii.club
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Card>
          </FadeIn>

          <FadeIn delay={400}>
            <Card className="h-full">
              <GlassIcon className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </GlassIcon>
              <h3 className="text-xl font-bold text-white mb-2">Business & Partnerships</h3>
              <p className="text-gray-400 mb-4">
                Interested in partnering with us or learning about our enterprise solutions?
              </p>
              <a
                href="mailto:devashish@unii.club"
                className="text-brand-purple hover:text-brand-blue transition-colors font-semibold inline-flex items-center"
              >
                devashish@unii.club
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Card>
          </FadeIn>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <FadeIn delay={500}>
            <div className="bg-dark-card border border-dark-border p-8 md:p-12 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Connect With Our Founder</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/DP.png"
                    alt="Devashish Jaiswal"
                    className="rounded-full shadow-lg aspect-square object-cover border-4 border-brand-purple/30 mx-auto md:mx-0 max-w-xs"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Devashish Jaiswal</h3>
                    <p className="text-brand-purple font-semibold">Founder & CEO</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Connect with Devashish to discuss collaborations, share feedback, or learn more about the vision behind Unii.club.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                      href="https://linkedin.com/in/devajais/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all rounded-lg font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="mailto:devashish@unii.club"
                      className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple text-white hover:bg-brand-blue transition-all rounded-lg font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <FadeIn delay={600}>
            <div className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/30 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-white mb-3">Looking for Something Else?</h3>
              <p className="text-gray-400 mb-6">
                Check out our <a href="/privacy-policy" className="text-brand-purple hover:text-brand-blue transition-colors font-semibold">Privacy Policy</a> or <a href="/terms" className="text-brand-purple hover:text-brand-blue transition-colors font-semibold">Terms of Service</a> for more information about how we handle your data and use of our platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center px-6 py-2 border border-dark-border text-gray-300 hover:text-white hover:border-brand-purple transition-all rounded-lg"
                >
                  About Us
                </a>
                <a
                  href="/students"
                  className="inline-flex items-center px-6 py-2 border border-dark-border text-gray-300 hover:text-white hover:border-brand-purple transition-all rounded-lg"
                >
                  For Students
                </a>
                <a
                  href="/colleges"
                  className="inline-flex items-center px-6 py-2 border border-dark-border text-gray-300 hover:text-white hover:border-brand-purple transition-all rounded-lg"
                >
                  For Colleges
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
