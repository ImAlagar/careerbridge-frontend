import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, MessageCircle, Target, FileEdit, 
  Rocket, DollarSign, FileCheck, Home,
  ChevronRight
} from 'lucide-react';
import Button from '../components/Button';

const services = [
  {
    title: 'Profile Analysis',
    description: 'We assess your academic background, achievements, and goals to create a personalized plan.',
    icon: BarChart3,
    color: 'blue',
    bgColor: 'bg-blue-50',
    hoverBg: 'hover:bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200'
  },
  {
    title: 'Personal Counselling',
    description: 'Our expert counsellors guide you in making informed decisions based on your aspirations.',
    icon: MessageCircle,
    color: 'purple',
    bgColor: 'bg-purple-50',
    hoverBg: 'hover:bg-purple-100',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200'
  },
  {
    title: 'University Shortlisting',
    description: 'We help you choose the best-fit universities based on your profile and career goals.',
    icon: Target,
    color: 'green',
    bgColor: 'bg-green-50',
    hoverBg: 'hover:bg-green-100',
    textColor: 'text-green-600',
    borderColor: 'border-green-200'
  },
  {
    title: 'Document Fine-Tuning',
    description: 'We refine your SOP, LOR, and resume to ensure they make a strong impact.',
    icon: FileEdit,
    color: 'orange',
    bgColor: 'bg-orange-50',
    hoverBg: 'hover:bg-orange-100',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200'
  },
  {
    title: 'Application & Admission',
    description: 'We assist in completing and submitting applications for smooth admission process.',
    icon: Rocket,
    color: 'indigo',
    bgColor: 'bg-indigo-50',
    hoverBg: 'hover:bg-indigo-100',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200'
  },
  {
    title: 'Funding Assistance',
    description: 'We help identify scholarship opportunities and guide through education loans.',
    icon: DollarSign,
    color: 'amber',
    bgColor: 'bg-amber-50',
    hoverBg: 'hover:bg-amber-100',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200'
  },
  {
    title: 'Visa Documentation',
    description: 'We assist in preparing all necessary visa documentation for seamless transition.',
    icon: FileCheck,
    color: 'teal',
    bgColor: 'bg-teal-50',
    hoverBg: 'hover:bg-teal-100',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200'
  },
  {
    title: 'Accommodation Support',
    description: 'We help find suitable and affordable accommodation options for comfortable stay.',
    icon: Home,
    color: 'slate',
    bgColor: 'bg-slate-50',
    hoverBg: 'hover:bg-slate-100',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-200'
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Floating animation variants for background elements
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Pulse animation for icons
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Text animation variants
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-20 right-20 w-16 h-16 bg-purple-200/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-green-200/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
          className="absolute bottom-10 right-10 w-12 h-12 bg-orange-200/20 rounded-full"
        />

        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-300/10 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-300/10 rotate-45"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-green-300/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h2>
          
          <motion.p
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive support throughout your educational journey abroad
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${service.bgColor} ${service.hoverBg} ${service.borderColor} hover:border-${service.color}-300 hover:shadow-xl backdrop-blur-sm`}
              >
                {/* Icon with animation */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 shadow-inner`}
                >
                  <ServiceIcon 
                    size={28} 
                    className={service.textColor}
                  />
                </motion.div>

                {/* Content with staggered animation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 ${service.textColor}`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Hover Arrow with animation */}
                  <motion.div
                    animate={{ x: isHovered ? 8 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`flex items-center ${service.textColor} text-sm font-medium`}
                  >
                    <motion.span
                      animate={{ opacity: isHovered ? 1 : 0.8 }}
                    >
                      Learn more
                    </motion.span>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={16} className="ml-1" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Animated Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  className={`absolute inset-0 rounded-2xl bg-${service.color}-500 transition-all duration-500 pointer-events-none`}
                />

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`absolute -top-2 -right-2 w-4 h-4 bg-${service.color}-400 rounded-full shadow-lg`}
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className={`absolute -bottom-2 -left-2 w-3 h-3 bg-${service.color}-400 rounded-full shadow-lg`}
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;