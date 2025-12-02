// components/Footer.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Mail,
  Phone,
  MapPin,
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';

import logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Countries', href: '#countries' },
    { name: 'News & Blog', href: '#blogs' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/careerbridgecouncil', 
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/career_bridge_council/', 
      color: 'hover:text-pink-600' 
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@careerbridgecouncil.com', label: 'Email Address' },
    { icon: Phone, text: '8072395200', label: 'Phone Number' },
    { 
      icon: MapPin, 
      text: 'Old No 25, New No 59, Srinivasa Perumal Sannadhi 1st St, Ganapathy Colony, Royapettah, Chennai, Tamil Nadu 600014', 
      label: 'Address' 
    },
  ];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      return;
    }
    
    setIsSubscribing(true);
    
    try {
      // Using Web3Forms for newsletter subscription
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("access_key", "7a0948d7-296d-439a-b602-bc53cd306459");
      formDataToSubmit.append("email", newsletterEmail);
      formDataToSubmit.append("subject", "Newsletter Subscription - Footer");
      formDataToSubmit.append("message", `New newsletter subscription from footer: ${newsletterEmail}`);
      formDataToSubmit.append("from_name", "CareerBridge Newsletter Footer");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });

      const result = await response.json();

      if (result.success) {
        setSubscribeSuccess(true);
        setNewsletterEmail("");
        setTimeout(() => setSubscribeSuccess(false), 5000);
      } else {
        throw new Error("Newsletter subscription failed");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-gothic" aria-label="Website Footer">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <a
                href="#home"
                aria-label="Go to Home section"
              >
                <img src={logo} alt="Company Logo" className="h-8 w-auto" />
              </a>
            </motion.div>
            <p className="text-gray-600 mb-6 leading-relaxed mt-5">
              Career Bridge Council guides you to academic and career excellence through 
              top universities and global opportunities.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-gray-100 p-2 rounded-lg transition-all duration-200 ${social.color} hover:bg-gray-200 border border-gray-300`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Quick Links Navigation"
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
                    aria-label={`Navigate to ${link.name} section`}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Our Newsletter"
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Our Newsletter</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter to get our news & deals delivered to you.
            </p>
            
            {/* Newsletter Subscription Form */}
            <form onSubmit={handleNewsletterSubmit} className="mt-2" aria-label="Newsletter Subscription">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email for newsletter subscription"
                  className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 hover:from-blue-700 hover:to-purple-700 disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubscribing ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      aria-label="Subscribing to newsletter"
                    />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Newsletter Success Message */}
              {subscribeSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 mt-3 rounded-lg bg-green-50 border border-green-200"
                  role="alert"
                >
                  <p className="flex items-center space-x-2 text-green-700 text-sm">
                    <CheckCircle size={16} aria-hidden="true" />
                    <span>Thank you for subscribing to our newsletter!</span>
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Contact Information"
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 text-gray-600"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg mt-1">
                      <Icon size={16} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="text-sm leading-relaxed" aria-label={item.label}>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-sm flex items-center"
          >
            © {currentYear} Career Bridge Council. All rights reserved. Made with 
            <Heart size={16} className="text-red-500 mx-1" aria-hidden="true"/> 
            by our team.
          </motion.p>

        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;