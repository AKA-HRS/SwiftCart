import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operations' },
    { id: 'sales', name: 'Sales' },
  ]

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description:
        'Join our engineering team to build amazing user experiences with React, TypeScript, and modern web technologies.',
      requirements: [
        '3+ years of experience with React and TypeScript',
        'Strong understanding of modern CSS and responsive design',
        'Experience with state management libraries (Redux, Zustand)',
        'Knowledge of testing frameworks (Jest, React Testing Library)',
        'Experience with CI/CD pipelines and deployment',
      ],
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '2-4 years',
      description:
        'Create beautiful, intuitive designs that delight our customers and drive business growth.',
      requirements: [
        '2+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Strong portfolio showcasing user-centered design',
        'Experience with design systems and component libraries',
        'Understanding of accessibility principles',
      ],
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4-6 years',
      description:
        'Lead our digital marketing efforts across multiple channels to drive growth and brand awareness.',
      requirements: [
        '4+ years of digital marketing experience',
        'Experience with Google Ads, Facebook Ads, and other platforms',
        'Strong analytical skills and data-driven mindset',
        'Experience with marketing automation tools',
        'Excellent communication and project management skills',
      ],
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description:
        'Help our customers succeed and grow by providing exceptional support and building lasting relationships.',
      requirements: [
        '2+ years of customer success or support experience',
        'Excellent communication and problem-solving skills',
        'Experience with CRM systems (Salesforce, HubSpot)',
        'Strong empathy and customer-first mindset',
        'Ability to work in a fast-paced environment',
      ],
    },
    {
      id: 5,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '1-2 years',
      description:
        'Drive new business growth by identifying and qualifying potential customers.',
      requirements: [
        '1+ years of sales or business development experience',
        'Strong communication and interpersonal skills',
        'Experience with sales tools (Salesforce, Outreach)',
        'Goal-oriented and self-motivated',
        "Bachelor's degree or equivalent experience",
      ],
    },
  ]

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'We offer competitive salaries and equity packages.',
      icon: 'star',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance.',
      icon: 'heart',
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours.',
      icon: 'user',
    },
    {
      title: 'Learning & Development',
      description:
        'Budget for conferences, courses, and professional development.',
      icon: 'edit',
    },
    {
      title: 'Team Events',
      description: 'Regular team building events and company retreats.',
      icon: 'grid',
    },
    {
      title: 'Unlimited PTO',
      description: 'Take time off when you need it to recharge.',
      icon: 'check',
    },
  ]

  const filteredJobs =
    selectedDepartment === 'all'
      ? jobOpenings
      : jobOpenings.filter(job => job.department === selectedDepartment)

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
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              We're building the future of e-commerce. Join us in creating
              amazing experiences for millions of customers worldwide.
            </motion.p>
          </div>

          {/* Benefits */}
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
              Why Work With Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                      <Icon
                        name={benefit.icon}
                        size="md"
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Job Openings */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              variants={fadeInUp}
            >
              Open Positions
            </motion.h2>

            {/* Department Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              variants={fadeInUp}
            >
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedDepartment === dept.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </motion.div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="primary" size="sm">
                          {job.department}
                        </Badge>
                        <Badge variant="secondary" size="sm">
                          {job.location}
                        </Badge>
                        <Badge variant="success" size="sm">
                          {job.type}
                        </Badge>
                        <Badge variant="outline" size="sm">
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      size="lg"
                      className="lg:ml-4"
                      onClick={() => (window.location.href = '/contact')}
                    >
                      Apply Now
                    </Button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {job.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start text-gray-600 dark:text-gray-400"
                        >
                          <Icon
                            name="check"
                            size="sm"
                            className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div className="text-center py-12" variants={fadeInUp}>
                <Icon
                  name="user"
                  size="xl"
                  className="text-gray-400 dark:text-gray-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No positions available
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We don't have any open positions in this department right now.
                  Check back later or join our talent pool!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Don't see a role that fits?
              </h2>
              <p className="text-primary-100 mb-8 text-lg">
                We're always looking for talented people to join our team. Send
                us your resume and let us know how you'd like to contribute.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Send Us Your Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Careers
