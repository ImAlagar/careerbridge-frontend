import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

// Import blog images
import usaDeadline from "../assets/images/usaapplicationdeadline.jpg";
import ucasExtra from "../assets/images/ucasextrabeign.jpg";
import decision from "../assets/images/decision.png";
import replyMail from "../assets/images/replymail1.jpg";
import vacancy from "../assets/images/vacancy.jpg";
import chosenUniversities from "../assets/images/choosenuniversities.jpeg";
import application from "../assets/images/application.jpg";
import replyTime from "../assets/images/replytime.jpeg";
import lastDate from "../assets/images/lastdate.jpg";
import clearing from "../assets/images/clearing.jpg";

const Blogs = () => {
  const blogs = [
    {
      image: usaDeadline,
      date: '26 January 2025',
      title: 'The general UCAS application deadline for most undergraduate courses (before 6 pm UK time)',
      type: 'deadline',
      month: 'JAN'
    },
    {
      image: ucasExtra,
      date: '25 February 2025',
      title: 'UCAS Extra begins.',
      type: 'update',
      month: 'FEB'
    },
    {
      image: decision,
      date: '19 May 2025',
      title: 'Usually, decisions are back from universities for 26 January applications on this date.',
      type: 'decision',
      month: 'MAY'
    },
    {
      image: replyMail,
      date: '9 June 2025',
      title: 'You need to reply to the offers by this date, if you received all decisions by 19 May.',
      type: 'deadline',
      month: 'JUN'
    },
    {
      image: vacancy,
      date: '5 July 2025',
      title: 'UCAS Clearing opens with vacancies beginning to be published',
      type: 'update',
      month: 'JUL'
    },
    {
      image: chosenUniversities,
      date: '30 June 2025',
      title: 'If an application is sent by 6 pm UK time on this day, it will send to the chosen universities or colleges.',
      type: 'deadline',
      month: 'JUN'
    },
    {
      image: application,
      date: '14 July 2025',
      title: 'University decisions for applications submitted by 30 June are back.',
      type: 'decision',
      month: 'JUL'
    },
    {
      image: replyTime,
      date: '21 July 2025',
      title: 'This is the date that you will need to have replied to offers by (if you received all decisions by 14 July).',
      type: 'deadline',
      month: 'JUL'
    },
    {
      image: lastDate,
      date: '28 September 2025',
      title: 'Last date for applications for 2025 entry.',
      type: 'deadline',
      month: 'SEP'
    },
    {
      image: clearing,
      date: '18 October 2025',
      title: 'The deadline for adding Clearing choices.',
      type: 'deadline',
      month: 'OCT'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'deadline': return 'bg-gradient-to-r from-red-500 to-orange-500';
      case 'update': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'decision': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'deadline': return Clock;
      case 'update': return TrendingUp;
      case 'decision': return BookOpen;
      default: return Calendar;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="blogs" className="min-h-screen py-8 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 md:top-20 left-4 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-blue-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 md:bottom-40 right-4 md:right-20 w-8 h-8 md:w-12 md:h-12 bg-purple-200/20 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-4 md:mb-6"
          >
            <BookOpen size={16} className="text-blue-600" />
            <span className="text-blue-700 text-xs md:text-sm font-semibold font-poppins">UCAS Timeline 2025</span>
          </motion.div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 font-poppins">
            Application Journey
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg md:text-2xl lg:text-3xl">
              Timeline & Deadlines
            </span>
          </h2>
          
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed px-2">
            Follow your path to success with our comprehensive UCAS application timeline for 2025 entry.
          </p>
        </motion.div>

        {/* Mobile Timeline - Cards Layout */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            {blogs.map((blog, index) => {
              const Icon = getTypeIcon(blog.type);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  {/* Image with Month Badge */}
                  <div className="relative h-40">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {blog.month} 2025
                    </div>
                    <div className={`absolute top-3 right-3 ${getTypeColor(blog.type)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                      <Icon size={12} />
                      <span>{blog.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 font-montserrat mb-2 leading-tight">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-lato mb-3">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold cursor-pointer group text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop Timeline - Original Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="hidden md:block max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200"></div>
            
            {blogs.map((blog, index) => {
              const Icon = getTypeIcon(blog.type);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-row items-center justify-between mb-12 ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Image Section */}
                  <div className={`w-5/12 ${isEven ? 'text-left' : 'text-right'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative ${isEven ? 'mr-8' : 'ml-8'}`}
                    >
                      <div className="w-full h-56 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {blog.month} 2025
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Center */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Content Section */}
                  <div className={`w-5/12 ${isEven ? 'text-right pl-8' : 'text-left pr-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`inline-block ${isEven ? 'text-right' : 'text-left'}`}
                    >
                      <div className={`${getTypeColor(blog.type)} text-white px-4 py-2 rounded-2xl mb-3 inline-flex items-center gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <Icon size={16} />
                        <span className="font-semibold text-sm">{blog.type.toUpperCase()}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 font-montserrat mb-2 leading-tight">
                        {blog.title}
                      </h3>
                      <div className={`flex items-center gap-2 text-gray-500 text-sm font-lato ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <Calendar size={14} />
                        <span>{blog.date}</span>
                      </div>
                      <motion.div
                        whileHover={{ x: isEven ? -5 : 5 }}
                        className={`inline-flex items-center gap-2 text-blue-600 font-semibold cursor-pointer group mt-3 ${isEven ? 'flex-row-reverse' : ''}`}
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} className={`transition-transform ${isEven ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 md:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 md:w-12 md:h-12 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg md:text-3xl font-bold mb-3 md:mb-4 font-poppins">
                Stay On Track With Your Application
              </h3>
              <p className="text-blue-100 text-sm md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto font-lato">
                Get personalized reminders and expert guidance throughout your UCAS application journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-sm md:text-base w-full sm:w-auto"
                >
                  Get Personal Timeline
                </Button>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;