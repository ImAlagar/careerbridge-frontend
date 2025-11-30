// components/navbar/GradientUnderline.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GradientUnderline = ({ isActive, scrolled }) => {
  return (
    <>
      {/* Main Gradient Line */}
      <motion.span
        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 transition-all duration-500 group-hover:w-full ${
          isActive ? 'w-full' : ''
        }`}
        initial={false}
        animate={{ width: isActive ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow Effect */}
      {isActive && (
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-600/20 blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

// Usage in your nav link:
// <GradientUnderline isActive={isActive} scrolled={scrolled} />