import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Cookie className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cookies Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies help us provide you with a better experience by remembering your preferences and settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To enable certain functions of our website</li>
              <li>To provide analytics and track website usage</li>
              <li>To store your preferences and settings</li>
              <li>To personalize your experience</li>
              <li>To improve our services and website performance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality and user experience.
                </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personal features. They may also be used to provide services you have requested.
                </p>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies collect information about how you use our website, such as which pages you visit most often. This data is used to optimize our website and make it easier for you to navigate.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties may include analytics providers, advertising networks, and social media platforms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. How to Control Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.</li>
              <li><strong>Browser Add-ons:</strong> You can use browser add-ons or extensions to manage cookies and tracking.</li>
              <li><strong>Opt-Out Links:</strong> Some third-party services provide direct opt-out mechanisms for their cookies.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Please note that if you choose to block or delete cookies, some features of our website may not function properly, and your user experience may be affected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Cookie Duration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies can be either "session cookies" or "persistent cookies":
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="mt-4 p-6 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong> info@bytetech.am<br />
                <strong>Address:</strong> G. Hovsepyan 24/3, Panaroma resort, Yerevan, Armenia
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. More Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For more information about cookies and how they work, you can visit:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>All About Cookies: <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a></li>
              <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org</a></li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
