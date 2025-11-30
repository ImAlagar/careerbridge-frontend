// components/navbar/DesktopNavbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import logo from "../../assets/images/logo.png";

const DesktopNavbar = ({ navItems, scrolled, activeLink, handleNavClick }) => {
  const handleGetStarted = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block science-gothic-uniquifier ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-xl' 
          : 'bg-gray-700'
      }`}
      role="navigation"
      aria-label="Desktop main navigation"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <a
              href="#home"
              onClick={() => handleNavClick('#home', 'home')}
              aria-label="Go to Home section"
            >
              <img src={logo} alt="Company Logo" className="h-8 w-auto" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeLink === item.id;
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="relative"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`Navigate to ${item.name} section`}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-500 group ${
                      scrolled
                        ? isActive
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-800 hover:text-blue-600 font-medium'
                        : isActive
                          ? 'text-white font-semibold'
                          : 'text-white hover:text-white font-medium'
                    }`}
                  >
                    {item.name}
                    
                    {/* Wave Underline */}
                    <svg 
                      className={`absolute -bottom-1 left-0 w-full h-2 transform group-hover:scale-100 transition-transform duration-500 ${
                        isActive ? 'scale-100' : 'scale-0'
                      }`}
                      viewBox="0 0 100 15"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M0,8 Q25,3 50,8 T100,8"
                        stroke={scrolled ? (isActive ? "#3b82f6" : "#6b7280") : (isActive ? "#ffffff" : "#9ca3af")}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isActive ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    </svg>
                    
                    {/* Bubbles effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      aria-hidden="true"
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Get Started Button */}
          <Button
            onClick={handleGetStarted}
            size="sm"
            variant={scrolled ? "primary" : "secondary"}
            className="font-semibold rounded-full"
            aria-label="Scroll to Contact section"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default DesktopNavbar;
