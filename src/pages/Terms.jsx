import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../components/animations/motionVariants'
import Container from '../components/layout/Container'

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using Modern Store's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service ("Terms") govern your use of our website, mobile application, and related services (collectively, the "Service") operated by Modern Store ("us", "we", or "our").

Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.`,
    },
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials on Modern Store's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)
• Attempt to decompile or reverse engineer any software contained on the website
• Remove any copyright or other proprietary notations from the materials

This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`,
    },
    {
      title: 'User Accounts',
      content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.

You agree not to:
• Use false, misleading, or inaccurate information
• Create multiple accounts for the same person
• Share your account credentials with others
• Use another person's account without permission
• Create accounts for automated or bulk purposes

We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`,
    },
    {
      title: 'Product Information and Pricing',
      content: `We strive to provide accurate product information, descriptions, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.

• Product images are for illustrative purposes and may not reflect the exact appearance of the product
• Prices are subject to change without notice
• Product availability is subject to change
• We reserve the right to limit quantities and refuse orders

If a product is not as described, your sole remedy is to return it in unused condition for a refund.`,
    },
    {
      title: 'Orders and Payment',
      content: `When you place an order, you are making an offer to purchase products. We reserve the right to accept or decline your order for any reason.

Payment terms:
• Payment is due at the time of order placement
• We accept major credit cards, PayPal, and other approved payment methods
• All prices are in US dollars unless otherwise specified
• Sales tax will be added where applicable
• We reserve the right to change prices at any time

Order processing:
• Orders are processed within 1-2 business days
• We will send you an email confirmation when your order ships
• Delivery times are estimates and not guaranteed
• Risk of loss transfers to you upon delivery`,
    },
    {
      title: 'Returns and Refunds',
      content: `We want you to be completely satisfied with your purchase. Our return policy is as follows:

• Most items can be returned within 30 days of delivery
• Items must be in original condition with tags attached
• Electronics have a 14-day return window
• Final sale items cannot be returned
• Return shipping is free for eligible returns

Refund process:
• Refunds are processed within 3-5 business days after we receive your return
• Refunds are issued to your original payment method
• Processing time may vary by payment method

For detailed return instructions, please see our Returns page or contact customer service.`,
    },
    {
      title: 'Prohibited Uses',
      content: `You may not use our Service:

• For any unlawful purpose or to solicit others to perform unlawful acts
• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
• To infringe upon or violate our intellectual property rights or the intellectual property rights of others
• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
• To submit false or misleading information
• To upload or transmit viruses or any other type of malicious code
• To spam, phish, pharm, pretext, spider, crawl, or scrape
• For any obscene or immoral purpose
• To interfere with or circumvent the security features of the Service

We reserve the right to terminate your use of the Service for violating any of the prohibited uses.`,
    },
    {
      title: 'Intellectual Property Rights',
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Modern Store and its licensors. The Service is protected by copyright, trademark, and other laws.

Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent. All other trademarks, service marks, and trade names are the property of their respective owners.

You may not:
• Copy, modify, or distribute our content without permission
• Use our trademarks or logos without authorization
• Reverse engineer or attempt to extract source code
• Remove or alter any proprietary notices

Any feedback, comments, or suggestions you provide may be used by us without any obligation to compensate you.`,
    },
    {
      title: 'Privacy Policy',
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.

Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.`,
    },
    {
      title: 'Disclaimer',
      content: `The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:

• Excludes all representations and warranties relating to this website and its contents
• Excludes all liability for damages arising out of or in connection with your use of this website

This includes, without limitation, direct loss, loss of business or profits, damage caused to your computer, computer software, systems and programs, and the data thereon, or any other direct or indirect, consequential and incidental damages.

Nothing in this disclaimer will:
• Limit or exclude our or your liability for death or personal injury
• Limit or exclude our or your liability for fraud or fraudulent misrepresentation
• Limit any of our or your liabilities in any way that is not permitted under applicable law
• Exclude any of our or your liabilities that may not be excluded under applicable law`,
    },
    {
      title: 'Limitation of Liability',
      content: `In no event shall Modern Store, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.

Our total liability to you for all damages shall not exceed the amount you paid us for the Service in the 12 months preceding the claim, or $100, whichever is greater.

Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.`,
    },
    {
      title: 'Governing Law',
      content: `These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.

These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.`,
    },
    {
      title: 'Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.

If you do not agree to the new terms, please stop using the Service.`,
    },
    {
      title: 'Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us:

• Email: legal@modernstore.com
• Phone: +1 (555) 012-3456
• Address: 123 Commerce Street, San Francisco, CA 94105, United States

We will respond to your inquiry within 5 business days.`,
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
              Terms of Service
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Please read these terms carefully before using our service. By
              accessing or using our service, you agree to be bound by these
              terms.
            </motion.p>
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-500 mt-4"
              variants={fadeInUp}
            >
              Last updated: January 15, 2024
            </motion.p>
          </div>

          {/* Terms Sections */}
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
        </motion.div>
      </Container>
    </div>
  )
}

export default Terms
