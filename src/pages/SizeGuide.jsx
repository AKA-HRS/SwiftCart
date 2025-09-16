import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
} from '../components/animations/motionVariants'
import Container from '../components/layout/Container'
import Icon from '../components/common/Icon'
import Button from '../components/common/Button'

const SizeGuide = () => {
  const [activeCategory, setActiveCategory] = useState('clothing')

  const categories = [
    { id: 'clothing', name: 'Clothing', icon: 'shirt' },
    { id: 'shoes', name: 'Shoes', icon: 'shoe' },
    { id: 'accessories', name: 'Accessories', icon: 'watch' },
  ]

  const sizeCharts = {
    clothing: {
      title: 'Clothing Size Chart',
      description: 'Measure your body to find the perfect fit',
      measurements: ['Chest', 'Waist', 'Hip', 'Inseam'],
      sizes: [
        {
          size: 'XS',
          chest: '32-34"',
          waist: '26-28"',
          hip: '34-36"',
          inseam: '30"',
        },
        {
          size: 'S',
          chest: '34-36"',
          waist: '28-30"',
          hip: '36-38"',
          inseam: '30"',
        },
        {
          size: 'M',
          chest: '36-38"',
          waist: '30-32"',
          hip: '38-40"',
          inseam: '32"',
        },
        {
          size: 'L',
          chest: '38-40"',
          waist: '32-34"',
          hip: '40-42"',
          inseam: '32"',
        },
        {
          size: 'XL',
          chest: '40-42"',
          waist: '34-36"',
          hip: '42-44"',
          inseam: '34"',
        },
        {
          size: 'XXL',
          chest: '42-44"',
          waist: '36-38"',
          hip: '44-46"',
          inseam: '34"',
        },
      ],
    },
    shoes: {
      title: 'Shoe Size Chart',
      description: 'Find your perfect shoe size',
      measurements: ['US', 'UK', 'EU', 'CM'],
      sizes: [
        { size: '6', us: '6', uk: '5', eu: '38', cm: '23.5' },
        { size: '6.5', us: '6.5', uk: '5.5', eu: '39', cm: '24' },
        { size: '7', us: '7', uk: '6', eu: '40', cm: '24.5' },
        { size: '7.5', us: '7.5', uk: '6.5', eu: '40.5', cm: '25' },
        { size: '8', us: '8', uk: '7', eu: '41', cm: '25.5' },
        { size: '8.5', us: '8.5', uk: '7.5', eu: '42', cm: '26' },
        { size: '9', us: '9', uk: '8', eu: '42.5', cm: '26.5' },
        { size: '9.5', us: '9.5', uk: '8.5', eu: '43', cm: '27' },
        { size: '10', us: '10', uk: '9', eu: '44', cm: '27.5' },
        { size: '10.5', us: '10.5', uk: '9.5', eu: '44.5', cm: '28' },
        { size: '11', us: '11', uk: '10', eu: '45', cm: '28.5' },
        { size: '11.5', us: '11.5', uk: '10.5', eu: '45.5', cm: '29' },
        { size: '12', us: '12', uk: '11', eu: '46', cm: '29.5' },
      ],
    },
    accessories: {
      title: 'Accessories Size Chart',
      description: 'Size guide for watches, jewelry, and other accessories',
      measurements: ['Size', 'Wrist', 'Neck', 'Description'],
      sizes: [
        {
          size: 'XS',
          wrist: '5.5-6"',
          neck: '13-14"',
          description: 'Extra Small',
        },
        { size: 'S', wrist: '6-6.5"', neck: '14-15"', description: 'Small' },
        { size: 'M', wrist: '6.5-7"', neck: '15-16"', description: 'Medium' },
        { size: 'L', wrist: '7-7.5"', neck: '16-17"', description: 'Large' },
        {
          size: 'XL',
          wrist: '7.5-8"',
          neck: '17-18"',
          description: 'Extra Large',
        },
      ],
    },
  }

  const measuringTips = [
    {
      title: 'How to Measure Your Chest',
      description:
        'Measure around the fullest part of your chest, keeping the tape measure parallel to the ground.',
      icon: 'user',
    },
    {
      title: 'How to Measure Your Waist',
      description:
        'Measure around your natural waistline, which is typically the narrowest part of your torso.',
      icon: 'user',
    },
    {
      title: 'How to Measure Your Hips',
      description:
        'Measure around the fullest part of your hips, about 7-9 inches below your waist.',
      icon: 'user',
    },
    {
      title: 'How to Measure Your Inseam',
      description:
        'Measure from the crotch to the bottom of your ankle bone on the inside of your leg.',
      icon: 'user',
    },
  ]

  const currentChart = sizeCharts[activeCategory]

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
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={fadeInUp}
            >
              Size Guide
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Find the perfect fit with our comprehensive size charts and
              measuring guides.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div className="flex justify-center mb-12" variants={fadeInUp}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <Icon name={category.icon} size="sm" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Size Chart */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12"
            variants={fadeInUp}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {currentChart.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {currentChart.description}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Size
                      </th>
                      {currentChart.measurements.map(measurement => (
                        <th
                          key={measurement}
                          className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white"
                        >
                          {measurement}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentChart.sizes.map((size, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                          {size.size}
                        </td>
                        {currentChart.measurements.map(measurement => (
                          <td
                            key={measurement}
                            className="py-3 px-4 text-gray-600 dark:text-gray-400"
                          >
                            {size[measurement.toLowerCase().replace(' ', '')]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Measuring Tips */}
          <motion.div
            className="mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              variants={fadeInUp}
            >
              How to Measure
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {measuringTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                      <Icon
                        name={tip.icon}
                        size="md"
                        className="text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General Tips */}
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-12"
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
                  General Sizing Tips
                </h3>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Always measure yourself while wearing the type of
                    undergarments you'll wear with the item
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Use a flexible measuring tape for accurate measurements
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    If you're between sizes, we recommend sizing up for comfort
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="check"
                      size="sm"
                      className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                    />
                    Different brands may have slightly different sizing, so
                    always check the specific product's size chart
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Still unsure about sizing?
              </h2>
              <p className="text-primary-100 mb-6">
                Our customer service team is here to help you find the perfect
                fit.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="px-8"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Us for Help
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default SizeGuide
