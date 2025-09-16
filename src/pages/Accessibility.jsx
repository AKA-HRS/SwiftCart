import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Button from '../components/common/Button'

const Accessibility = () => {
  const features = [
    {
      title: 'Keyboard Navigation',
      description: 'Full website navigation using only keyboard controls',
      icon: 'user',
    },
    {
      title: 'Screen Reader Support',
      description: 'Compatible with all major screen reading software',
      icon: 'star',
    },
    {
      title: 'High Contrast Mode',
      description: 'Enhanced visual contrast for better readability',
      icon: 'sun',
    },
    {
      title: 'Text Scaling',
      description: 'Ability to increase text size up to 200%',
      icon: 'edit',
    },
    {
      title: 'Alternative Text',
      description: 'Descriptive alt text for all images and graphics',
      icon: 'grid',
    },
    {
      title: 'Focus Indicators',
      description: 'Clear visual indicators for keyboard focus',
      icon: 'check',
    },
  ]

  const standards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      status: 'Compliant',
    },
    {
      standard: 'Section 508',
      description: 'US federal accessibility standards compliance',
      status: 'Compliant',
    },
    {
      standard: 'ADA',
      description: 'Americans with Disabilities Act compliance',
      status: 'Compliant',
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Compliant',
    },
  ]

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      examples: ['NVDA', 'JAWS', 'VoiceOver', 'TalkBack'],
      description: 'Software that reads website content aloud',
    },
    {
      name: 'Voice Control',
      examples: [
        'Dragon NaturallySpeaking',
        'Voice Control (macOS)',
        'Voice Access (Android)',
      ],
      description: 'Control the website using voice commands',
    },
    {
      name: 'Switch Navigation',
      examples: [
        'Switch Control (iOS)',
        'Switch Access (Android)',
        'External switches',
      ],
      description: 'Navigate using assistive switches or buttons',
    },
    {
      name: 'Magnification',
      examples: ['ZoomText', 'MAGic', 'Built-in browser zoom'],
      description: 'Enlarge content for better visibility',
    },
  ]

  const improvements = [
    {
      area: 'Navigation',
      improvements: [
        'Skip links for main content',
        'Logical tab order',
        'Consistent navigation structure',
        'Breadcrumb navigation',
      ],
    },
    {
      area: 'Content',
      improvements: [
        'Descriptive headings hierarchy',
        'Alternative text for images',
        'Captions for videos',
        'Transcripts for audio content',
      ],
    },
    {
      area: 'Forms',
      improvements: [
        'Clear labels and instructions',
        'Error messages and validation',
        'Logical form flow',
        'Required field indicators',
      ],
    },
    {
      area: 'Interactive Elements',
      improvements: [
        'Sufficient color contrast',
        'Large click targets',
        'Clear focus indicators',
        'Descriptive link text',
      ],
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
              Accessibility Statement
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              We are committed to ensuring digital accessibility for all users,
              including those with disabilities. Our goal is to provide an
              inclusive and accessible experience for everyone.
            </motion.p>
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-500 mt-4"
              variants={fadeInUp}
            >
              Last updated: January 15, 2024
            </motion.p>
          </div>

          {/* Commitment */}
          <motion.div
            className="bg-primary-600 rounded-2xl p-12 text-white text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Accessibility Commitment
            </h2>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Modern Store is committed to providing a website that is
              accessible to the widest possible audience, regardless of
              technology or ability. We actively work to increase the
              accessibility and usability of our website and in doing so adhere
              to many of the available standards and guidelines.
            </p>
          </motion.div>

          {/* Accessibility Features */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Accessibility Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                      <Icon
                        name={feature.icon}
                        size="md"
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Standards Compliance */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Standards Compliance
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {standard.standard}
                    </h3>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Assistive Technologies */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Supported Assistive Technologies
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assistiveTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {tech.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Examples:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.examples.map((example, exampleIndex) => (
                        <span
                          key={exampleIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accessibility Improvements */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
              variants={fadeInUp}
            >
              Accessibility Improvements
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {improvements.map((improvement, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {improvement.area}
                  </h3>
                  <ul className="space-y-2">
                    {improvement.improvements.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <Icon
                          name="check"
                          size="sm"
                          className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Keyboard Shortcuts */}
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-16"
            variants={fadeInUp}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg flex-shrink-0">
                <Icon
                  name="edit"
                  size="md"
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  Keyboard Shortcuts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700 dark:text-blue-300">
                  <div>
                    <strong>Tab:</strong> Navigate forward through interactive
                    elements
                  </div>
                  <div>
                    <strong>Shift + Tab:</strong> Navigate backward through
                    interactive elements
                  </div>
                  <div>
                    <strong>Enter/Space:</strong> Activate buttons and links
                  </div>
                  <div>
                    <strong>Escape:</strong> Close modals and dropdowns
                  </div>
                  <div>
                    <strong>Alt + M:</strong> Skip to main content
                  </div>
                  <div>
                    <strong>Alt + N:</strong> Skip to navigation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feedback and Contact */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Accessibility Feedback
              </h2>
              <p className="text-primary-100 mb-8 text-lg">
                We welcome your feedback on the accessibility of our website. If
                you encounter any accessibility barriers or have suggestions for
                improvement, please let us know.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <strong>Accessibility Email:</strong>{' '}
                  <a
                    href="mailto:accessibility@modernstore.com"
                    className="text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    accessibility@modernstore.com
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
                  <strong>Response Time:</strong> We aim to respond to
                  accessibility feedback within 2 business days.
                </div>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Submit Feedback
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Accessibility
