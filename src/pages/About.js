// import React from 'react';
// import Footer from '../components/Footer';
// import Header from '../components/Header';

// const About = () => {
//   return (
//     <div className="bg-white text-gray-900">
//       <Header />
//       <header className="py-10 text-center bg-[#f3ead0]">
//         <h1 className="text-[30px] font-semibold">About Us</h1>
//         <nav className="text-xs text-[#6b5e3c] mt-1">
//           <ul className="inline-flex space-x-2 justify-center items-center">
//             <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
//             <li>|</li>
//             <li><a className="hover:text-red-400 transition-colors duration-200" href="#">About</a></li>
//           </ul>
//         </nav>
//       </header>

//       <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//           <p className="text-gray-600 mb-4">
//             Welcome to Capital Shop, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, style, and comfort.
//           </p>
//           <p className="text-gray-600 mb-4">
//             Founded in 2024, Capital Shop has come a long way from its beginnings. When we first started out, our passion for fashion drove us to start this business.
//           </p>
//           <p className="text-gray-600">
//             We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//           <p className="text-gray-600 mb-4">
//             At Capital Shop, we believe that everyone deserves to look and feel their best. Our mission is to provide high-quality fashion at affordable prices.
//           </p>
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-3">Our Values</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>• Quality First</li>
//               <li>• Customer Satisfaction</li>
//               <li>• Affordable Fashion</li>
//               <li>• Sustainable Practices</li>
//               <li>• Innovation in Style</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default About; 

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
// import Image from 'next/image'; // This line is removed

const About = () => {
  const teamMembers = [
    {
      name: 'Dwyane John',
      role: 'Founder & CEO',
      bio: 'With over 15 years in the fashion industry, Alex founded Capital Shop to bring quality fashion to everyone.',
      img: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Creative Director',
      bio: 'Sarah leads our design team with a vision for modern, sustainable fashion that doesn\'t compromise on style.',
      img: 'https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      bio: 'Michael ensures our supply chain runs smoothly and ethically, from sourcing to delivery.',
      img: 'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg'
    }
  ];

  const stats = [
    { value: '250K+', label: 'Happy Customers' },
    { value: '50+', label: 'Brand Partners' },
    { value: '100%', label: 'Authentic Products' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-[30px] font-semibold">About Us</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">About</a></li>
          </ul>
        </nav>
      </header>
            
      <div className="max-w-[full] ml-40 mr-40 px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6">Redefining Fashion Since 2024</h2>
            <p className="text-gray-600 mb-6">
              Capital Shop began with a simple idea: to make high-quality fashion accessible to everyone. 
              What started as a small boutique in New York has grown into a global e-commerce platform 
              serving customers in over 50 countries.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey has been fueled by passion, innovation, and an unwavering commitment to 
              customer satisfaction. We carefully curate our collections to bring you the latest trends 
              without compromising on quality or ethical standards.
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200">
                Shop Now
              </button>
              <button className="border border-gray-300 py-2 px-6 rounded-md hover:bg-gray-50 transition duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Replaced Next.js Image with standard <img> tag */}
            <img 
              src="https://img.freepik.com/free-photo/tailor-designer-working-team_1098-21531.jpg" 
              alt="Capital Shop Team" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-4xl font-semibold text-red-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg order-last md:order-first"
          >
            {/* Replaced Next.js Image with standard <img> tag */}
            <img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Our Mission" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6">Our Mission & Vision</h2>
            <p className="text-gray-600 mb-6">
              At Capital Shop, we're committed to revolutionizing the fashion industry by making 
              sustainable, high-quality clothing accessible to everyone. We believe fashion should 
              be ethical without sacrificing style or affordability.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Quality First:</strong> We meticulously inspect every product to ensure it meets our high standards.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Customer Centric:</strong> Your satisfaction guides every decision we make.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Sustainable Practices:</strong> We're committed to reducing our environmental footprint at every step.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Innovation:</strong> Constantly evolving to bring you the latest in fashion and technology.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Community:</strong> Building relationships with our customers, partners, and team members.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 w-full">
                  {/* Replaced Next.js Image with standard <img> tag */}
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-red-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-gray-50 rounded-xl p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-6">
                We recognize our responsibility to the planet and are committed to sustainable practices 
                throughout our supply chain. From eco-friendly packaging to partnering with ethical 
                manufacturers, we're constantly working to reduce our environmental impact.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>100% recyclable packaging materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Carbon-neutral shipping options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Ethically sourced materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Partnerships with fair-trade organizations</span>
                </li>
              </ul>
              <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200">
                Learn About Our Initiatives
              </button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Replaced Next.js Image with standard <img> tag */}
              <img 
                src="https://img.freepik.com/free-vector/flat-design-illustration-sustainable-fashion-concept_52683-55505.jpg" 
                alt="Sustainability" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;