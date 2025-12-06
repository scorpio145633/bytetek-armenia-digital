import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('legal.terms.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('legal.terms.lastUpdated')}: January 2021
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              PLEASE READ THE FOLLOWING CAREFULLY BEFORE ACCEPTING THESE TERMS AND ACCESSING, USING AND/OR REGISTERING FOR THE BYTE TECH WEBSITE, PLATFORM OR SERVICES.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              By creating an Account in ByteTech as an Authorized User and/or by accessing and using the ByteTech Platform or website, www.bytetech.am (the "Site"), you accept these Terms of Service (the "Terms"), and you acknowledge that you, on your own behalf as an individual and/or on behalf of your employer or another legal entity (collectively, "you" or "your"), have read and understood and agree to comply with these Terms, and are entering into a binding legal agreement with ByteTech and/or, where applicable, one of its group companies or affiliates ("ByteTech", "us", "we" or "our"). If you are creating an Account, you are entering into these Terms on behalf of your team, company, organization or any other entity that you either represent or belong to (the "Organization"), and you represent and warrant that you have full authority to bind your Organization to these Terms. If you do not agree to comply with and be bound by these Terms or do not have authority to bind your Organization, please do not accept these Terms or access or use the Platform. To the extent allowed under applicable law, you hereby waive any applicable rights to require or receive an original (non-electronic) signature or delivery of non-electronic records of these Terms.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              If you have executed a written contract, service order or other agreement with ByteTech governing your access to and use of the Platform, then the terms of such agreement will govern and will supersede these Terms in the event of any conflict or inconsistency; except for the terms herein that refer to your access to, use of and/or registration for the Site or our Platform, all of which shall remain in effect. All capitalized terms used herein shall have the meanings given for such terms herein.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Your Use of The Services</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1.1.</strong> Our online platform is served to produce searches for accounts on social networks that are publicly available. In particular, the online platform enables you to evaluate the quality of a user's subscribers and thereby distinguish real subscribers from those being automatically and dishonestly generated. After the Services have been provided to you, you are provided with the report (hereinafter "The Report").
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1.2.</strong> ByteTech provides you with a limited, non-exclusive, non-transferable, personal and non-assignable permission to use the Site. Accordingly, you agree that you will not reproduce, duplicate, copy, sell, trade or resell the Services for any purpose. You must not obscure, alter, remove or delete any copyright or other proprietary notices contained in the Services. You will not copy, modify, adapt, translate or otherwise create derivative works of any of the Services obtained from the Site. You warrant that you will not attempt or assist others to attempt or actually reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of the software. You agree to comply with all applicable laws and regulations in your use of and access to the Site and Services.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1.3.</strong> You will be required to successfully sign up for a personal account (the "Personal Account") and be issued with a username and password login ("User ID") in order to use the Services. If you are issued with a User ID, you shall keep your User ID secure and shall not share your User ID with anyone else, and you shall not collect or harvest any personal data of any other user of ByteTech, including account names. ByteTech reserves the right to disable any Personal Account issued to you at any time at ByteTech's sole discretion. If ByteTech disables access to a Personal Account issued to you, you may be prevented from accessing ByteTech, your account details or any Campaigns that are associated with your account.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1.4.</strong> By registering with ByteTech you agree to receive emails, including but not limited to: newsletters, product updates, opportunities. You will be able to unsubscribe from each group.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1.5.</strong> Direct notification of data subjects is impossible (due to the huge amount of data) and under Art. 14. paragraph 5 (b) GDPR ByteTech is not obliged to notify Blogger/Influencer directly. Also, there is a notification via the website and in the privacy policy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1.6.</strong> You consider it reasonable and agree that you responsibly use, transfer and process the personal data transferred to you from ByteTech. From the moment the data is transferred to you, we cannot reasonably assume what your true purpose is. Therefore, we warn you that if the data received from us is used illegally or outside the scope of legitimate interest, you will be held liable for violation of the provisions of the GDPR and any applicable data protection legislation.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong>1.7.</strong> You consider it reasonable and agree that you are responsible to notify the data subject that you ordered the processing of their personal data and receive a report from ByteTech, which contains the following data: profile name, avatar, a profile description, likes, commenters, e-mail, audience type, topics and interests of the audience, age of the audience, earnings, history of profile development, the authenticity of the audience set.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Provision of the Services</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>2.1.</strong> ByteTech is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the Services which ByteTech provides may change from time to time without prior notice to you.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>2.2.</strong> As part of this continuing innovation, you acknowledge and agree that ByteTech may permanently or temporarily stop providing the Services (or any features within the Services) to you or to users generally at ByteTech sole discretion, without prior notice to you.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>2.3.</strong> You can access most of the service on the platform without login, but when you use the marketing service and the membership service, it is required to successfully sign up for an account and be issued with a username and password login ("User ID") in order to use the Services.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>2.4.</strong> By registering to ByteTech you agree to receive emails, including but not limited to: campaign messages, product updates, promotions. You will be able to unsubscribe from each group.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong>2.5.</strong> You acknowledge and agree that ByteTech can disable access to Services for non-payment or other material breach of the Terms, and you may be prevented from accessing your files or other content which is contained in the ByteTech Site or Services.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Your Passwords and Account Security</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>3.1.</strong> You agree and understand that you are responsible for maintaining the confidentiality of passwords associated with any account you use to access the Services.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>3.2.</strong> You agree that you will be solely responsible for all activities that occur under your account.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong>3.3.</strong> ByteTech uses YouTube, Google Connect, "Sign in with YouTube", "Sign in with Google", and other authentication methods for authorization of users. If your YouTube account, Google account or any other account used for registration and/or signing in the Services is deleted or non-functional, you may no longer be able to access the Services.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Privacy Policy</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>4.1.</strong> We comply with the General Data Protection Regulation EU 2016/679 (GDPR). Click Privacy Policy to learn more.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>4.2.</strong> Important information for data controllers: you acknowledge that when processing personal data of individuals, you may become a data controller and you must comply with GDPR.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong>4.3.</strong> You agree that ByteTech may use aggregated and anonymised data derived from the data provided by you or collected by the program analytics such as user behaviour and activities for its own statistics, for auditing, for the purposes of product and market research and analytics, and for benchmarks and other analyses. ByteTech may publish such anonymised data and share them with third parties; however, ByteTech will not directly or indirectly transfer any data received from you to (or use such data in connection with) any ad network, ad exchange, data broker, or other advertising or monetization related toolset.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Membership Services</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              ByteTech offers various membership tiers with different features and capabilities. Details of each membership level, including pricing and included services, are available on our pricing page. By subscribing to a membership, you agree to the terms specific to that membership tier.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Auto-renewed Subscription Agreement</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Subscriptions are automatically renewed at the end of each billing period unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings. Upon cancellation, you will retain access to the Services until the end of your current billing period.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Advertisements</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Some of our Services may be supported by advertising revenue and may display advertisements and promotions. These advertisements may be targeted to the content of information stored on the Services, queries made through the Services or other information. The manner, mode and extent of advertising by ByteTech are subject to change without specific notice to you.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Indemnification</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              You agree to indemnify, defend, and hold harmless ByteTech, its officers, directors, employees, agents, licensors, and suppliers from and against all claims, losses, liabilities, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the Services using your account.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Amendments to the Terms</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              ByteTech reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on the Site. Your continued use of the Services after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide by them.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Cancellation or Termination</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              ByteTech may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Social Media Data Sources</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              The data source is the public data of social media. If you don't want to show your channel data, please contact business@bytetech.am to delete.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Disclaimer and Warranties</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. BYTETECH DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Contact Us</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-primary font-medium mt-2">
              📧 business@bytetech.am
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
