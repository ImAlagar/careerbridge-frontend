import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, GraduationCap, Target, Globe, Award, Star, Quote } from 'lucide-react';
import Button from '../components/Button';

// Import images
import aboutMain from "../assets/images/about-banner.jpg";
import teamImage from "../assets/images/team-meeting.jpg";
import successImage from "../assets/images/student-success.jpg";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Personalized Guidance",
      description: "Tailored counseling for each student's unique aspirations"
    },
    {
      icon: Target,
      title: "Proven Success",
      description: "95% admission success rate with top universities"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Partnerships with 50+ universities worldwide"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "15+ years of combined experience in education consulting"
    }
  ];

  const stats = [
    { number: '1000+', label: 'Students Guided' },
    { number: '50+', label: 'Universities' },
    { number: '10+', label: 'Countries' },
    { number: '98%', label: 'Success Rate' }
  ];

  const floatingVariants = {
    float: {
      y: [-15, 15, -15],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen px-6  py-20 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute top-32 right-20 w-16 h-16 bg-purple-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-40 left-20 w-20 h-20 bg-green-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 3 }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-orange-200/20 rounded-full backdrop-blur-sm"
        />

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4"
        >
          <GraduationCap size={32} className="text-blue-300/40" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/3"
        >
          <Target size={28} className="text-purple-300/40" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200"
              >
                <Award size={20} className="text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold font-poppins">Trusted Since 2010</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins leading-tight">
                Your Bridge to
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Global Education
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-lato">
                At CareerBridge, we transform educational aspirations into global opportunities through 
                personalized guidance and expert counseling for studying abroad.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        variants={pulseVariants}
                        animate="pulse"
                        className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"
                      >
                        <Icon size={24} className="text-blue-600" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-900 font-montserrat mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm font-lato">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <h4 className="text-2xl font-bold text-blue-600 font-poppins mb-1">{stat.number}</h4>
                    <p className="text-gray-600 text-sm font-lato">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 font-semibold flex-1"
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            {/* Main Image */}
            <motion.div
              variants={imageVariants}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img 
                src={aboutMain} 
                alt="CareerBridge Team" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500" size={20} />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Rated 4.9/5</p>
                    <p className="text-gray-600 text-xs">By 500+ Students</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary Images Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={teamImage} 
                  alt="Expert Team" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-white" />
                    <h4 className="text-white font-semibold font-montserrat text-sm">Expert Team</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={successImage} 
                  alt="Student Success" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <Target size={16} className="text-white" />
                    <h4 className="text-white font-semibold font-montserrat text-sm">Success Stories</h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10">
                <Quote size={24} className="text-white/50 mb-3" />
                <p className="text-blue-100 leading-relaxed font-lato mb-4">
                  "Our mission is to bridge the gap between academic dreams and career excellence by providing 
                  customized counseling that helps students unlock their full potential."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Target size={16} />
                  </div>
                  <span className="text-white/80 font-semibold text-sm">CareerBridge Mission</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;