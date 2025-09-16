import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Badge from '../components/common/Badge'

const Sustainability = () => {
  const initiatives = [
    {
      title: 'Carbon Neutral Shipping',
      description:
        'All shipments are carbon neutral through verified offset programs.',
      icon: 'star',
      impact: '100% offset',
    },
    {
      title: 'Eco-Friendly Packaging',
      description:
        'Biodegradable and recyclable packaging materials for all orders.',
      icon: 'heart',
      impact: '90% reduction',
    },
    {
      title: 'Renewable Energy',
      description:
        'Our facilities are powered by 100% renewable energy sources.',
      icon: 'sun',
      impact: '100% renewable',
    },
    {
      title: 'Waste Reduction',
      description: 'Comprehensive recycling and waste reduction programs.',
      icon: 'check',
      impact: '75% less waste',
    },
  ]

  const goals = [
    {
      year: '2025',
      title: 'Net Zero Operations',
      description: 'Achieve net zero carbon emissions across all operations.',
      status: 'in-progress',
    },
    {
      year: '2026',
      title: '100% Sustainable Packaging',
      description:
        'All packaging materials will be fully sustainable and recyclable.',
      status: 'planned',
    },
    {
      year: '2027',
      title: 'Circular Economy',
      description: 'Implement comprehensive product lifecycle management.',
      status: 'planned',
    },
    {
      year: '2030',
      title: 'Climate Positive',
      description: 'Remove more carbon from the atmosphere than we produce.',
      status: 'planned',
    },
  ]

  const partnerships = [
    {
      name: 'Carbon Trust',
      description: 'Certified carbon neutral shipping program',
      logo: 'https://via.placeholder.com/150x80/4F46E5/FFFFFF?text=Carbon+Trust',
    },
    {
      name: 'Ocean Cleanup',
      description: 'Supporting ocean plastic removal initiatives',
      logo: 'https://via.placeholder.com/150x80/059669/FFFFFF?text=Ocean+Cleanup',
    },
    {
      name: 'Trees for the Future',
      description: 'Reforestation and community development programs',
      logo: 'https://via.placeholder.com/150x80/DC2626/FFFFFF?text=Trees+Future',
    },
    {
      name: 'Renewable Energy Partners',
      description: 'Clean energy infrastructure development',
      logo: 'https://via.placeholder.com/150x80/EA580C/FFFFFF?text=Renewable+Energy',
    },
  ]

  const stats = [
    {
      number: '2.5M',
      label: 'Trees Planted',
      description: 'Through our reforestation partnerships',
    },
    {
      number: '500K',
      label: 'Tons CO2 Offset',
      description: 'Carbon emissions neutralized',
    },
    {
      number: '90%',
      label: 'Waste Diverted',
      description: 'From landfills through recycling',
    },
    {
      number: '100%',
      label: 'Renewable Energy',
      description: 'Powering our operations',
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
              Sustainability
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              We're committed to building a sustainable future through
              responsible business practices and environmental stewardship.
            </motion.p>
          </div>

          {/* Mission Statement */}
          <motion.div
            className="bg-green-600 rounded-2xl p-12 text-white text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Sustainability Mission
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              To create a positive impact on the planet while delivering
              exceptional value to our customers. We believe that business
              success and environmental responsibility go hand in hand.
            </p>
          </motion.div>

          {/* Impact Stats */}
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
              Our Impact
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                  variants={fadeInUp}
                >
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Initiatives */}
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
              Our Initiatives
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg flex-shrink-0">
                      <Icon
                        name={initiative.icon}
                        size="lg"
                        className="text-green-600 dark:text-green-400"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {initiative.title}
                        </h3>
                        <Badge variant="success" size="sm">
                          {initiative.impact}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Goals Timeline */}
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
              Sustainability Goals
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 dark:bg-green-800"></div>
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  variants={fadeInUp}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-green-600 dark:text-green-400 font-bold text-lg">
                          {goal.year}
                        </div>
                        <Badge
                          variant={
                            goal.status === 'in-progress'
                              ? 'warning'
                              : 'secondary'
                          }
                          size="sm"
                        >
                          {goal.status === 'in-progress'
                            ? 'In Progress'
                            : 'Planned'}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnerships */}
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
              Our Partners
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                  variants={fadeInUp}
                >
                  <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-green-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Sustainability Journey
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Together, we can make a difference. Learn more about our
                sustainability efforts and how you can contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <Icon name="chevronRight" size="sm" className="ml-2" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Partner With Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Sustainability
