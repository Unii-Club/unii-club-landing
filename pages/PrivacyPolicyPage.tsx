import React from 'react';
import { FadeIn, ShinyText } from '../components/ui';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Privacy <ShinyText>Policy</ShinyText>
            </h1>
            <p className="mt-4 text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </FadeIn>

        <div className="space-y-8 bg-dark-card border border-dark-border p-8 md:p-12 rounded-2xl">
          <FadeIn delay={200}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                At Unii.club, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={300}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Name, email address, and contact information</li>
                    <li>Educational background and institution details</li>
                    <li>Profile information and preferences</li>
                    <li>Club memberships, projects, and activities</li>
                    <li>Skills, achievements, and portfolio data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Usage Information</h3>
                  <p>We automatically collect certain information about your device and how you interact with our platform:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Device information (browser type, operating system)</li>
                    <li>Log data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={400}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience and provide AI-powered career guidance</li>
                <li>Facilitate connections between students, colleges, and companies</li>
                <li>Verify your skills and experiences</li>
                <li>Send you updates, notifications, and marketing communications</li>
                <li>Analyze usage patterns and optimize platform performance</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={500}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed">
                <p>We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong className="text-white">With Educational Institutions:</strong> When you're affiliated with a college using our platform</li>
                  <li><strong className="text-white">With Potential Employers:</strong> When you apply for opportunities or opt-in to recruitment features</li>
                  <li><strong className="text-white">With Service Providers:</strong> Third-party vendors who help us operate our platform</li>
                  <li><strong className="text-white">For Legal Compliance:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={600}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={700}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
              <p className="text-gray-400 leading-relaxed mb-2">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your account and data</li>
                <li><strong className="text-white">Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong className="text-white">Cookie Preferences:</strong> Manage cookie settings in your browser</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:devashish@unii.club" className="text-brand-purple hover:text-brand-blue transition-colors">devashish@unii.club</a>.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={800}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When you delete your account, we will delete or anonymize your personal information within a reasonable timeframe.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={900}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Our platform is intended for users who are at least 13 years old. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1000}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-gray-400 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1100}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1200}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p><strong className="text-white">Email:</strong> <a href="mailto:devashish@unii.club" className="text-brand-purple hover:text-brand-blue transition-colors">devashish@unii.club</a></p>
                <p className="mt-2"><strong className="text-white">Website:</strong> <a href="https://unii.club" className="text-brand-purple hover:text-brand-blue transition-colors">unii.club</a></p>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
