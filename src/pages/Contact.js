import { useState } from 'react';
import { FaHome, FaMobileAlt, FaEnvelope, FaExclamation } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('Message sent successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-3xl font-semibold">Contact Us</h1> {/* Changed to 3xl */}
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Contact</a></li> {/* Updated text from Cart to Contact */}
          </ul>
        </nav>
      </header>
      <div className="max-w-[full] ml-40 mr-40 px-4 py-12"> {/* Added px-4 py-12 for consistent spacing */}
        {/* Google Maps Section */}
        <div className="bg-gray-200 h-64 md:h-96 flex flex-col justify-center items-center text-center">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89323470835!2d77.06889972250038!3d28.527280343925776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Our Location in Delhi"
            ></iframe>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:justify-between ml-24 mr-24">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-1 max-w-3xl">
            <h2 className="font-semibold text-lg mb-4">Get in Touch</h2>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="w-full border border-gray-300 text-xs text-gray-700 resize-none h-28 p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            ></textarea>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="flex-1 border border-gray-300 text-xs text-gray-700 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 border border-gray-300 text-xs text-gray-700 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="w-full border border-gray-300 text-xs text-gray-700 p-2 mb-6 focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
            <button
              type="submit"
              className="text-xs text-red-700 border border-red-700 px-6 py-2 hover:bg-red-700 hover:text-white transition"
            >
              Send
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-10 md:mt-0 md:ml-12 flex flex-col gap-6 text-xs text-gray-700 max-w-xs">
            <div className="flex items-start gap-3">
              <FaHome className="mt-1 text-gray-600 text-[24px]" />
              <div>
                <p className="font-semibold text-[16px] text-gray-900">Connaught Place, New Delhi</p>
                <p className='text-[14px] mt-1'>Delhi, India 110001</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMobileAlt className="mt-1 text-gray-600 text-[24px]" />
              <div>
                <p className="font-semibold text-[16px] text-gray-900">+91 11 2336 5358</p>
                <p className='text-[14px] mt-1'>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-gray-600 text-[24px]" />
              <div>
                <p className="font-semibold text-[16px] text-gray-900">capitalshop@gmail.com</p>
                <p className='text-[14px] mt-1'>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;