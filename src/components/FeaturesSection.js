import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const featureData = [
  {
    icon: ['fas', 'truck'],
    title: 'Fast & Free Delivery',
    description: 'Free delivery on all orders',
  },
  {
    icon: ['fas', 'credit-card'],
    title: 'Secure Payment',
    description: 'Free delivery on all orders',
  },
  {
    icon: ['fas', 'money-bill-wave'],
    title: 'Money Back Guarantee',
    description: 'Free delivery on all orders',
  },
  {
    icon: ['fas', 'headset'],
    title: 'Online Support',
    description: 'Free delivery on all orders',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className={`flex-1 flex flex-col items-center justify-center py-6 px-4 text-center ${
              index !== featureData.length - 1 ? 'sm:border-r border-gray-300' : ''
            }`}
          >
            <FontAwesomeIcon
              icon={feature.icon}
              className="text-gray-900 mb-6 text-xl"
              style={{ fontSize: '50px' }}
            />
            <p className="text-[18px] font-semibold text-gray-900 mb-2">{feature.title}</p>
            <p className="text-[14px] text-gray-500">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
