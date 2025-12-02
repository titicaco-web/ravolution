import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Ravolution website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Services</h2>
              <p>
                Ravolution provides intellectual property management services, including patent portfolio development, technology licensing, and innovation platform services. Our offerings include but are not limited to xPortMatch, VoiceProtector, and CommunicaringSchool platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property Rights</h2>
              <p>
                All content, trademarks, patents, and intellectual property displayed on this website are owned by Ravolution AB or its licensors. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
              <p className="mt-4">
                Our patent portfolios and technology solutions are protected under Swedish and international intellectual property laws. Unauthorized use of our patented technologies may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. User Obligations</h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate and complete information when submitting inquiries or applications</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems or data</li>
                <li>Respect the confidentiality of any proprietary information shared during business discussions</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Licensing and Partnership Terms</h2>
              <p>
                Any licensing agreements, partnerships, or business arrangements are subject to separate written agreements. The information provided on this website is for informational purposes only and does not constitute a binding offer or contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Confidentiality</h2>
              <p>
                Any confidential information shared during business discussions, including but not limited to technical specifications, business plans, and financial information, shall be treated as confidential and not disclosed to third parties without written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                Ravolution shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amounts paid by you for our services, if any.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Ravolution, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Sweden. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Stockholm, Sweden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Modifications to Terms</h2>
              <p>
                Ravolution reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services after any modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Contact Information</h2>
              <p>
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>Ravolution AB</strong></p>
                <p>Kungsgatan 9, 111 43 Stockholm, Sweden</p>
                <p>Email: info@ravolution.se</p>
                <p>Phone: +46 76 945 66 00</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
