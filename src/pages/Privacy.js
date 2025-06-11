import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <>
          <p className="mb-4">
            At Capital Shop, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
          </p>
        </>
      )
    },
    {
      title: 'Information We Collect',
      content: (
        <>
          <p className="mb-4">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Create an account on our website</li>
            <li>Place an order for products or services</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Participate in surveys, contests, or promotions</li>
            <li>Contact our customer service team</li>
          </ul>
          <p className="mb-4">
            The types of information we may collect include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Personal identification information (name, email, phone number, etc.)</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information (credit card details are processed securely and not stored)</li>
            <li>Purchase history and preferences</li>
            <li>Device and usage information (IP address, browser type, etc.)</li>
          </ul>
        </>
      )
    },
    {
      title: 'How We Use Your Information',
      content: (
        <>
          <p className="mb-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website and services</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service, updates, and marketing</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      )
    },
    {
      title: 'Sharing Your Information',
      content: (
        <>
          <p className="mb-4">
            We may share your information with third parties in the following situations:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as payment processing, order fulfillment, data analysis, email delivery, hosting services, and marketing assistance.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.
            </li>
          </ul>
          <p>
            We do not sell your personal information to third parties for their marketing purposes without your explicit consent.
          </p>
        </>
      )
    },
    {
      title: 'Data Security',
      content: (
        <>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal information. These measures include:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>SSL encryption for data transmission</li>
            <li>Secure servers and firewalls</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Limited access to personal information on a need-to-know basis</li>
          </ul>
          <p>
            Despite our safeguards, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </>
      )
    },
    {
      title: 'Your Rights',
      content: (
        <>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>The right to access and receive a copy of your personal data</li>
            <li>The right to rectify any inaccurate or incomplete data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict or object to processing of your data</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided below. We may need to verify your identity before responding to your request.
          </p>
        </>
      )
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: (
        <>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
          </p>
          <p className="mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
          <p>
            We use cookies for various purposes including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Authentication and security</li>
            <li>Preferences and settings</li>
            <li>Analytics and performance</li>
            <li>Advertising and marketing</li>
          </ul>
        </>
      )
    },
    {
      title: 'Changes to This Policy',
      content: (
        <>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">Privacy Policy</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Privacy</a></li>
          </ul>
        </nav>
      </header>
      <div className="max-w-[full] ml-40 mr-40 px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Last Updated: June 1, 2024
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            This Privacy Policy describes how Capital Shop ("we," "us," or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from www.capitalshop.com (the "Site") or otherwise communicate with us.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
              <div className="text-gray-600">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Your Privacy Matters to Us</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're committed to protecting your personal information and being transparent about how we use it. If you have any concerns or questions about your privacy, please don't hesitate to reach out.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-200"
          >
            Contact Our Privacy Team
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;