import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Button from '../components/common/Button'

const Investors = () => {
  const financialHighlights = [
    {
      metric: 'Revenue Growth',
      value: '150%',
      period: 'YoY 2023',
      description:
        'Strong revenue growth driven by customer acquisition and retention',
    },
    {
      metric: 'Customer Base',
      value: '2M+',
      period: 'Active Users',
      description: 'Growing customer base across 50+ countries',
    },
    {
      metric: 'Gross Margin',
      value: '65%',
      period: 'Q4 2023',
      description: 'Healthy margins supported by operational efficiency',
    },
    {
      metric: 'Market Share',
      value: '12%',
      period: 'E-commerce',
      description: 'Growing market share in key product categories',
    },
  ]

  const fundingRounds = [
    {
      round: 'Series B',
      amount: '$50M',
      date: 'January 2024',
      lead: 'Sequoia Capital',
      participants: [
        'Andreessen Horowitz',
        'General Catalyst',
        'Index Ventures',
      ],
      use: 'International expansion and AI development',
    },
    {
      round: 'Series A',
      amount: '$20M',
      date: 'March 2022',
      lead: 'Andreessen Horowitz',
      participants: ['General Catalyst', 'Index Ventures'],
      use: 'Product development and team expansion',
    },
    {
      round: 'Seed',
      amount: '$5M',
      date: 'June 2020',
      lead: 'Index Ventures',
      participants: ['Y Combinator', 'First Round'],
      use: 'Initial product development and market validation',
    },
  ]

  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      background: 'Former VP at Amazon, 15+ years in e-commerce',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      background: 'Ex-Google engineer, AI and machine learning expert',
      linkedin: '#',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CFO',
      background: 'Former Goldman Sachs, 12+ years in finance',
      linkedin: '#',
    },
    {
      name: 'David Kim',
      role: 'COO',
      background: 'Former Uber operations leader, scaling expert',
      linkedin: '#',
    },
  ]

  const documents = [
    {
      name: 'Q4 2023 Earnings Report',
      type: 'PDF',
      size: '2.3 MB',
      date: '2024-01-15',
      download: '#',
    },
    {
      name: 'Investor Presentation',
      type: 'PDF',
      size: '5.1 MB',
      date: '2024-01-10',
      download: '#',
    },
    {
      name: 'Annual Report 2023',
      type: 'PDF',
      size: '8.7 MB',
      date: '2023-12-31',
      download: '#',
    },
    {
      name: 'Corporate Governance',
      type: 'PDF',
      size: '1.2 MB',
      date: '2023-12-15',
      download: '#',
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
              Investor Relations
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Building the future of e-commerce through innovation, growth, and
              sustainable value creation for our shareholders.
            </motion.p>
          </div>

          {/* Financial Highlights */}
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
              Financial Highlights
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {highlight.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                      {highlight.period}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {highlight.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Funding History */}
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
              Funding History
            </motion.h2>
            <div className="space-y-6">
              {fundingRounds.map((round, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {round.round}
                        </h3>
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {round.amount}
                        </span>
                        <span className="text-gray-500 dark:text-gray-500">
                          {round.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        <strong>Lead Investor:</strong> {round.lead}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        <strong>Use of Funds:</strong> {round.use}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Participating Investors:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {round.participants.map((participant, pIndex) => (
                        <span
                          key={pIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                        >
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Team */}
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
              Leadership Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="user"
                        size="lg"
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {leader.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {leader.background}
                      </p>
                      <a
                        href={leader.linkedin}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm transition-colors duration-200"
                      >
                        View LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investor Documents */}
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
              Investor Documents
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                        <Icon
                          name="edit"
                          size="md"
                          className="text-red-600 dark:text-red-400"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {doc.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(doc.download, '_blank')}
                    >
                      Download
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Investor Inquiries</h2>
              <p className="text-primary-100 mb-8 text-lg">
                For investor relations questions, financial information, or
                meeting requests, please contact our investor relations team.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <strong>Investor Relations Email:</strong>{' '}
                  <a
                    href="mailto:investors@modernstore.com"
                    className="text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    investors@modernstore.com
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
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Investor Relations
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Investors
