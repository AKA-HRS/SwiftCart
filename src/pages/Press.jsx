import React from 'react'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Button from '../components/common/Button'

const Press = () => {
  const pressReleases = [
    {
      date: '2024-01-15',
      title: 'Modern Store Announces $50M Series B Funding Round',
      summary:
        'Company plans to expand internationally and enhance AI-powered shopping experience.',
      category: 'Funding',
    },
    {
      date: '2023-12-10',
      title: 'Modern Store Launches Sustainability Initiative',
      summary:
        'New program focuses on carbon-neutral shipping and eco-friendly packaging.',
      category: 'Sustainability',
    },
    {
      date: '2023-11-22',
      title: 'Modern Store Partners with Leading Fashion Brands',
      summary: 'Exclusive partnerships bring premium brands to the platform.',
      category: 'Partnerships',
    },
    {
      date: '2023-10-05',
      title: 'Modern Store Introduces AI-Powered Recommendations',
      summary:
        'New machine learning technology personalizes shopping experience.',
      category: 'Technology',
    },
  ]

  const mediaCoverage = [
    {
      outlet: 'TechCrunch',
      title: 'Modern Store Raises $50M to Revolutionize E-commerce',
      date: '2024-01-16',
      url: '#',
    },
    {
      outlet: 'Forbes',
      title: 'How Modern Store is Using AI to Transform Online Shopping',
      date: '2023-12-15',
      url: '#',
    },
    {
      outlet: 'Wired',
      title: "The Future of E-commerce: A Look at Modern Store's Innovation",
      date: '2023-11-30',
      url: '#',
    },
    {
      outlet: 'Business Insider',
      title: "Modern Store's Sustainability Push Sets New Industry Standard",
      date: '2023-10-20',
      url: '#',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      email: 'sarah@modernstore.com',
      bio: 'Former VP at Amazon with 15+ years in e-commerce.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      email: 'michael@modernstore.com',
      bio: 'Ex-Google engineer leading our technology innovation.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Marketing',
      email: 'emily@modernstore.com',
      bio: 'Brand marketing expert with experience at top consumer companies.',
    },
  ]

  const assets = [
    {
      name: 'Company Logo',
      description: 'High-resolution logo files in various formats',
      download: '#',
    },
    {
      name: 'Product Images',
      description: 'High-quality product photography and lifestyle images',
      download: '#',
    },
    {
      name: 'Team Photos',
      description: 'Professional headshots of our leadership team',
      download: '#',
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand guidelines and style guide',
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
              Press & Media
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Stay updated with the latest news, press releases, and media
              coverage about Modern Store.
            </motion.p>
          </div>

          {/* Press Releases */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
              variants={fadeInUp}
            >
              Press Releases
            </motion.h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                          {release.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {release.summary}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:ml-6 mt-4 lg:mt-0"
                      onClick={() => (window.location.href = '/contact')}
                    >
                      Read More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Coverage */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
              variants={fadeInUp}
            >
              Media Coverage
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaCoverage.map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                        <span className="font-medium">{article.outlet}</span>
                        <span>•</span>
                        <span>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(article.url, '_blank')}
                  >
                    Read Article
                    <Icon name="chevronRight" size="sm" className="ml-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Kit */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
              variants={fadeInUp}
            >
              Media Kit
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assets.map((asset, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {asset.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {asset.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(asset.download, '_blank')}
                    >
                      Download
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
              variants={fadeInUp}
            >
              Press Contacts
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm transition-colors duration-200"
                  >
                    {member.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-primary-100 mb-8 text-lg">
                For press inquiries, interview requests, or media kit access,
                please contact our press team.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Press Team
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Press
