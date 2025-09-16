import React from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'

const About = () => {
  const values = [
    {
      title: 'Quality First',
      description:
        'We never compromise on quality. Every product is carefully selected and tested to meet our high standards.',
      icon: 'star',
    },
    {
      title: 'Customer Focus',
      description:
        'Our customers are at the heart of everything we do. We listen, learn, and continuously improve.',
      icon: 'user',
    },
    {
      title: 'Innovation',
      description:
        'We embrace new technologies and trends to bring you the latest and greatest products.',
      icon: 'grid',
    },
    {
      title: 'Sustainability',
      description:
        "We're committed to responsible business practices and environmental stewardship.",
      icon: 'heart',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description:
        'Passionate about creating exceptional shopping experiences.',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description:
        'Leading our technology innovation and platform development.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description:
        'Creating beautiful, user-friendly experiences for our customers.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      description:
        'Ensuring smooth operations and exceptional customer service.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize online shopping.',
    },
    {
      year: '2021',
      title: 'First Million Customers',
      description: 'Reached our first million satisfied customers worldwide.',
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded to serve customers in over 50 countries.',
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched our comprehensive sustainability program.',
    },
    {
      year: '2024',
      title: 'AI-Powered Experience',
      description: 'Introduced AI-driven personalization and recommendations.',
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              variants={fadeInUp}
            >
              About Modern Store
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              We're passionate about bringing you the best products at great
              prices, with exceptional customer service that makes shopping a
              pleasure.
            </motion.p>
          </div>

          {/* Mission Statement */}
          <motion.div
            className="bg-primary-600 rounded-2xl p-12 text-white text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              To make quality products accessible to everyone, everywhere, while
              providing an exceptional shopping experience that exceeds
              expectations and builds lasting relationships with our customers.
            </p>
          </motion.div>

          {/* Values */}
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
              Our Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                      <Icon
                        name={value.icon}
                        size="lg"
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
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
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                  variants={fadeInUp}
                >
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
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
              Our Journey
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>
              {milestones.map((milestone, index) => (
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
                      <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              By the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  2M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Countries Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  10K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Products Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Customer Support
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default About
