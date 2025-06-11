// import React, { useState } from 'react';
// import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: 'How do I track my order?',
//       answer: 'You can track your order by logging into your account and visiting the Orders section. There you\'ll find tracking information for all your recent orders.'
//     },
//     {
//       question: 'What is your return policy?',
//       answer: 'We offer a 30-day return policy for all unused items in their original packaging. Simply initiate a return from your account or contact our customer service team.'
//     },
//     {
//       question: 'Do you ship internationally?',
//       answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can check shipping rates during checkout.'
//     },
//     {
//       question: 'How can I change or cancel my order?',
//       answer: 'Orders can be modified or cancelled within 1 hour of placement. Please contact our customer service team immediately if you need to make changes.'
//     },
//     {
//       question: 'What payment methods do you accept?',
//       answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various local payment methods depending on your location.'
//     },
//     {
//       question: 'How do I find my size?',
//       answer: 'Each product page includes a detailed size guide. You can also check our general size guide in the Help section for more information.'
//     },
//     {
//       question: 'Are the items authentic?',
//       answer: 'Yes, all items sold on Capital Shop are 100% authentic. We work directly with brands and authorized distributors to ensure authenticity.'
//     },
//     {
//       question: 'Do you offer gift wrapping?',
//       answer: 'Yes, we offer gift wrapping services for a small additional fee. You can select this option during checkout.'
//     }
//   ];

//   const toggleQuestion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-white text-gray-900">
//         <Header/>
//         <header className="py-10 text-center bg-[#f3ead0]">
//             <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
//             <nav className="text-xs text-[#6b5e3c] mt-1">
//             <ul className="inline-flex space-x-2 justify-center items-center">
//                 <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
//                 <li>|</li>
//                 <li><a className="hover:text-red-400 transition-colors duration-200" href="#">FAQ</a></li>
//             </ul>
//             </nav>
//         </header>
    
//       <div className="max-w-7xl mx-auto mt-10 mb-10">
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border rounded-lg overflow-hidden"
//             >
//               <button
//                 className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
//                 onClick={() => toggleQuestion(index)}
//               >
//                 <span className="font-semibold text-gray-900">{faq.question}</span>
//                 {openIndex === index ? (
//                   <FiChevronUp className="text-gray-500" />
//                 ) : (
//                   <FiChevronDown className="text-gray-500" />
//                 )}
//               </button>
              
//               {openIndex === index && (
//                 <div className="p-4 bg-gray-50 border-t">
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 p-6 bg-gray-50 rounded-lg">
//           <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
//           <p className="text-gray-600 mb-4">
//             Can't find the answer you're looking for? Please chat to our friendly team.
//           </p>
//           <button
//             onClick={() => window.location.href = '/contact'}
//             className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default FAQ; 

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTruck, FiRefreshCw, FiCreditCard, FiShield, FiMail, FiPackage } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: 'Orders & Shipping',
      icon: <FiTruck className="text-red-600 text-xl" />,
      questions: [
        {
          question: 'How do I track my order?',
          answer: 'You can track your order by logging into your account and visiting the Orders section. We also send regular email updates with tracking information. For international orders, tracking becomes available 24-48 hours after shipment.'
        },
        {
          question: 'What shipping options are available?',
          answer: 'We offer several shipping options: Standard (3-5 business days), Express (2-3 business days), and Overnight (1 business day). International shipping typically takes 7-14 business days depending on destination.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can check shipping rates and estimated delivery times during checkout before placing your order.'
        }
      ]
    },
    {
      title: 'Returns & Exchanges',
      icon: <FiRefreshCw className="text-red-600 text-xl" />,
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for all unused items in their original condition with tags attached. Sale items have a 14-day return window. Returns are free for U.S. customers; international returns are subject to a $7.95 return shipping fee.'
        },
        {
          question: 'How do I initiate a return?',
          answer: 'You can initiate a return through your account dashboard or by contacting our customer service team. We\'ll provide a prepaid return label (for U.S. customers) and instructions for packaging your return.'
        },
        {
          question: 'How long does it take to process a refund?',
          answer: 'Once we receive your return, processing takes 3-5 business days. Refunds are issued to your original payment method. Please allow additional time for your bank to process the refund, which typically appears within 5-10 business days.'
        }
      ]
    },
    {
      title: 'Payments & Security',
      icon: <FiCreditCard className="text-red-600 text-xl" />,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Capital Shop Gift Cards. We also offer installment payment options through Afterpay and Klarna.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely. We use industry-standard SSL encryption to protect your data. We don\'t store credit card information on our servers. All payments are processed through PCI-compliant payment gateways.'
        },
        {
          question: 'Do you offer gift cards?',
          answer: 'Yes! Capital Shop Gift Cards are available in amounts from $25-$500. They never expire and can be used online. Gift cards are delivered via email within 2 hours of purchase.'
        }
      ]
    },
    {
      title: 'Product & Sizing',
      icon: <FiPackage className="text-red-600 text-xl" />,
      questions: [
        {
          question: 'How do I find my size?',
          answer: 'Each product page includes detailed size charts with measurements. We also provide model measurements and "fit tips" for each item. If you\'re between sizes, we recommend sizing up for a looser fit or down for a more fitted look.'
        },
        {
          question: 'Are your products authentic?',
          answer: 'Yes, all items sold on Capital Shop are 100% authentic. We work directly with brands and authorized distributors. Every item is inspected by our quality control team before shipping.'
        },
        {
          question: 'Do you offer plus sizes?',
          answer: 'We carry an extensive selection of plus sizes (up to 4X) across many of our collections. You can filter by size when browsing. If you don\'t see your size available, please contact us as we may be able to special order it.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const combinedIndex = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === combinedIndex ? null : combinedIndex);
  };

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">FAQ</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">FAQ</a></li>
          </ul>
        </nav>
      </header>

      <div className="max-w-[full] ml-40 mr-40 px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Help Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <FiTruck className="text-red-600 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Track Order</h3>
            <p className="text-gray-600 text-sm">Follow your package journey</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <FiRefreshCw className="text-red-600 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Returns</h3>
            <p className="text-gray-600 text-sm">Easy return process</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <FiShield className="text-red-600 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Payment Security</h3>
            <p className="text-gray-600 text-sm">Safe checkout</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <FiMail className="text-red-600 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">We're here to help</p>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openIndex === `${categoryIndex}-${questionIndex}` ? (
                        <FiChevronUp className="text-gray-500" />
                      ) : (
                        <FiChevronDown className="text-gray-500" />
                      )}
                    </button>
                    
                    {openIndex === `${categoryIndex}-${questionIndex}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 bg-gray-50 border-t"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-200"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our customer care team is available 24/7 to answer your questions. 
              Reach out to us via live chat, email, or phone for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.location.href = '/contact'}
                className="bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition duration-200"
              >
                Contact Support
              </button>
              <button
                onClick={() => window.location.href = '/live-chat'}
                className="bg-gray-900 text-white py-3 px-8 rounded-md hover:bg-gray-800 transition duration-200"
              >
                Start Live Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;