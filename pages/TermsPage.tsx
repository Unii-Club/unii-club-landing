import React from 'react';
import { FadeIn, ShinyText } from '../components/ui';

const TermsPage: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Terms of <ShinyText>Service</ShinyText>
            </h1>
            <p className="mt-4 text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </FadeIn>

        <div className="space-y-8 bg-dark-card border border-dark-border p-8 md:p-12 rounded-2xl">
          <FadeIn delay={200}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using Unii.club (the "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Platform. We reserve the right to modify these Terms at any time, and your continued use of the Platform constitutes acceptance of any changes.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={300}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
              <p className="text-gray-400 leading-relaxed mb-2">To use Unii.club, you must:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li>Be at least 13 years of age</li>
                <li>Be a student, educational institution, or company authorized to use the Platform</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={400}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Account Registration and Security</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed">
                <p>When you create an account on Unii.club, you agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
                <p className="mt-4">
                  You may not create an account using false information or on behalf of someone else without permission. We reserve the right to suspend or terminate accounts that violate these Terms.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={500}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Content and Conduct</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed">
                <h3 className="text-xl font-semibold text-white">Your Content</h3>
                <p>You retain ownership of any content you submit to the Platform, including your profile, projects, achievements, and portfolio. By submitting content, you grant Unii.club a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content for the purpose of operating and improving the Platform.</p>

                <h3 className="text-xl font-semibold text-white mt-6">Prohibited Conduct</h3>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Upload viruses, malware, or harmful code</li>
                  <li>Violate intellectual property rights</li>
                  <li>Scrape, crawl, or use automated tools to access the Platform</li>
                  <li>Use the Platform for any illegal or unauthorized purpose</li>
                  <li>Interfere with the security or operation of the Platform</li>
                  <li>Post spam, advertisements, or unsolicited communications</li>
                </ul>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={600}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Platform Services</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed">
                <h3 className="text-xl font-semibold text-white">For Students</h3>
                <p>Our Platform provides students with tools to track their club activities, projects, and skills; receive AI-powered career guidance; and build verified portfolios for career advancement.</p>

                <h3 className="text-xl font-semibold text-white mt-4">For Educational Institutions</h3>
                <p>We provide colleges with infrastructure to manage student clubs, track student engagement, and improve placement outcomes through data-driven insights.</p>

                <h3 className="text-xl font-semibold text-white mt-4">For Companies</h3>
                <p>We connect companies with verified, skilled student talent through our platform, streamlining the recruitment process.</p>

                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of the Platform at any time without prior notice.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={700}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Verification and Accuracy</h2>
              <p className="text-gray-400 leading-relaxed">
                While we strive to verify the accuracy of user-submitted information, including skills, projects, and achievements, we cannot guarantee the complete accuracy of all content. Users are responsible for the truthfulness and accuracy of their submissions. Colleges and companies should conduct their own due diligence when evaluating students or candidates through our Platform.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={800}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed">
                <p>
                  All intellectual property rights in the Platform, including its design, code, features, trademarks, and logos, are owned by Unii.club or our licensors. You may not copy, modify, distribute, sell, or reverse engineer any part of the Platform without our express written permission.
                </p>
                <p>
                  If you believe that content on our Platform infringes your intellectual property rights, please contact us at <a href="mailto:devashish@unii.club" className="text-brand-purple hover:text-brand-blue transition-colors">devashish@unii.club</a> with details of the alleged infringement.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={900}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment and Subscriptions</h2>
              <p className="text-gray-400 leading-relaxed">
                Certain features of the Platform may require payment or subscription. By subscribing to a paid plan, you agree to pay all applicable fees as described at the time of purchase. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time with reasonable notice.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1000}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services and Links</h2>
              <p className="text-gray-400 leading-relaxed">
                Our Platform may contain links to third-party websites or services that are not owned or controlled by Unii.club. We are not responsible for the content, privacy policies, or practices of any third-party sites. You access third-party services at your own risk and should review their terms and policies.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1100}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-400 leading-relaxed">
                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1200}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, UNII.CLUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1300}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="text-gray-400 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Unii.club, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or related to your use of the Platform, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1400}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to suspend or terminate your account and access to the Platform at our sole discretion, without notice, for conduct that we believe violates these Terms, is harmful to other users, or is otherwise objectionable. You may terminate your account at any time by contacting us. Upon termination, your right to use the Platform will immediately cease.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1500}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or related to these Terms or the Platform shall be resolved through binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 1996.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1600}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update these Terms from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Platform after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1700}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions or concerns about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-400">
                <p><strong className="text-white">Email:</strong> <a href="mailto:devashish@unii.club" className="text-brand-purple hover:text-brand-blue transition-colors">devashish@unii.club</a></p>
                <p className="mt-2"><strong className="text-white">Website:</strong> <a href="https://unii.club" className="text-brand-purple hover:text-brand-blue transition-colors">unii.club</a></p>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={1800}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
              <p className="text-gray-400 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={1900}>
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Entire Agreement</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Unii.club regarding your use of the Platform and supersede all prior agreements and understandings.
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
