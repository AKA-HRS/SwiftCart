import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../components/animations/motionVariants'
import Container from '../components/layout/Container'

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:

• Personal information (name, email address, phone number)
• Payment information (credit card details, billing address)
• Account credentials (username, password)
• Communication preferences
• Product reviews and feedback

We also automatically collect certain information when you use our services, including:
• Device information (IP address, browser type, operating system)
• Usage data (pages visited, time spent, click patterns)
• Location data (general geographic location)
• Cookies and similar tracking technologies`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

• Process and fulfill your orders
• Provide customer support and respond to inquiries
• Send you important updates about your account and orders
• Improve our products and services
• Personalize your shopping experience
• Send marketing communications (with your consent)
• Prevent fraud and ensure security
• Comply with legal obligations
• Conduct analytics and research`,
    },
    {
      title: 'Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

• With service providers who assist us in operating our business (payment processors, shipping companies, customer support)
• With your explicit consent
• To comply with legal obligations or court orders
• To protect our rights, property, or safety, or that of our users
• In connection with a business transfer or acquisition
• With analytics providers to help us understand how our services are used

All third parties are required to maintain the confidentiality of your information and are prohibited from using it for any other purpose.`,
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• SSL encryption for data transmission
• Secure servers and databases
• Regular security audits and updates
• Access controls and authentication
• Employee training on data protection
• Incident response procedures

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
    },
    {
      title: 'Your Rights and Choices',
      content: `You have certain rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information
• Portability: Request transfer of your data to another service
• Restriction: Request limitation of processing in certain circumstances
• Objection: Object to processing for direct marketing purposes
• Withdrawal of consent: Withdraw consent where processing is based on consent

To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.`,
    },
    {
      title: 'Cookies and Tracking',
      content: `We use cookies and similar technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:

• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Provide personalized content and recommendations
• Improve website functionality and performance
• Enable social media features

You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website. For more information, please see our Cookie Policy.`,
    },
    {
      title: 'Data Retention',
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Specifically:

• Account information: Retained while your account is active and for a reasonable period thereafter
• Order information: Retained for at least 7 years for tax and legal compliance
• Marketing data: Retained until you opt out or for 3 years of inactivity
• Support communications: Retained for 3 years for quality assurance

We will securely delete or anonymize your information when it is no longer needed.`,
    },
    {
      title: 'International Transfers',
      content: `Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws by:

• Using standard contractual clauses approved by relevant authorities
• Implementing appropriate safeguards and security measures
• Ensuring recipient countries provide adequate protection
• Obtaining your explicit consent where required

We will only transfer your information to countries that provide an adequate level of protection or where we have implemented appropriate safeguards.`,
    },
    {
      title: "Children's Privacy",
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:

• Posting the updated policy on our website
• Sending you an email notification
• Displaying a prominent notice on our website

Your continued use of our services after any changes constitutes acceptance of the updated policy. We encourage you to review this policy periodically.`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <Container>
        <motion.div
          className="py-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={fadeInUp}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </motion.p>
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-500 mt-4"
              variants={fadeInUp}
            >
              Last updated: January 15, 2024
            </motion.p>
          </div>

          {/* Introduction */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Modern Store ("we," "our," or "us") is committed to protecting
              your privacy and personal information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services. Please
              read this policy carefully to understand our practices regarding
              your personal information.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {section.title}
                </h2>
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            className="bg-primary-600 rounded-2xl p-12 text-white text-center mt-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-primary-100 mb-8 text-lg">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@modernstore.com"
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  privacy@modernstore.com
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+1-555-0123"
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  +1 (555) 012-3456
                </a>
              </div>
              <div>
                <strong>Address:</strong>
                <div className="text-primary-200">
                  123 Commerce Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Privacy
