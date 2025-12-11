import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, MapPin, Users, GraduationCap, DollarSign, Clock, ArrowRight, Globe, Pause, Play } from 'lucide-react';
import Button from '../components/Button';

// Import all images
import uk from "../assets/images/uk.jpg";
import australia from "../assets/images/australia.jpg";
import usa from "../assets/images/USA.jpg";
import canada from "../assets/images/canada.jpg";
import singapore from "../assets/images/singapore.jpg";
import ireland from "../assets/images/ireland.jpg";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // Refs for form inputs
  const sliderRef = useRef(null);

  const countries = [
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: uk,
      color: 'blue',
      shortDesc: 'Prestigious universities, one-year master\'s programs, excellent healthcare.',
      fullDesc: `The United Kingdom is home to some of the world's most prestigious universities including Oxford, Cambridge, and Imperial College London. With one-year master's programs, excellent healthcare through the NHS, and generous post-study work opportunities.`,
      highlights: [
        { icon: GraduationCap, text: '1-year Master\'s programs' },
        { icon: Users, text: '2-year post-study work visa' },
        { icon: DollarSign, text: 'Scholarships available' },
        { icon: Clock, text: 'Fast visa processing' }
      ],
      stats: { students: '500K+', universities: '160+', employment: '92%' }
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      image: australia,
      color: 'green',
      shortDesc: 'World-class education, flexible courses, work opportunities.',
      fullDesc: `Australia's education system is renowned for its high standards and innovative teaching methods. With universities consistently ranking among the world's best.`,
      highlights: [
        { icon: GraduationCap, text: 'World-class universities' },
        { icon: Users, text: 'Work while studying' },
        { icon: DollarSign, text: 'Post-study work rights' },
        { icon: Clock, text: 'Quality living standards' }
      ],
      stats: { students: '700K+', universities: '43+', employment: '89%' }
    },
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      image: usa,
      color: 'red',
      shortDesc: 'Top-ranked universities, financial aid, post-study work options.',
      fullDesc: `The United States boasts the largest number of top-ranked universities globally, offering unparalleled academic opportunities across diverse fields.`,
      highlights: [
        { icon: GraduationCap, text: 'Ivy League institutions' },
        { icon: Users, text: 'OPT work opportunities' },
        { icon: DollarSign, text: 'Generous scholarships' },
        { icon: Clock, text: 'Diverse programs' }
      ],
      stats: { students: '1M+', universities: '4000+', employment: '95%' }
    },
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      image: canada,
      color: 'red',
      shortDesc: 'Top-tier universities, affordable tuition, high standard of living.',
      fullDesc: `Canada combines academic excellence with affordability, making it an increasingly popular destination for international students.`,
      highlights: [
        { icon: GraduationCap, text: 'Affordable education' },
        { icon: Users, text: 'PR pathways' },
        { icon: DollarSign, text: 'Reasonable costs' },
        { icon: Clock, text: 'Safe environment' }
      ],
      stats: { students: '650K+', universities: '100+', employment: '90%' }
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      image: singapore,
      color: 'red',
      shortDesc: 'World-class universities, strong research innovation.',
      fullDesc: `Singapore's strategic location in Asia, combined with its world-class education system and strong industry connections.`,
      highlights: [
        { icon: GraduationCap, text: 'Research excellence' },
        { icon: Users, text: 'Industry partnerships' },
        { icon: DollarSign, text: 'Global hub' },
        { icon: Clock, text: 'Fast-growing economy' }
      ],
      stats: { students: '65K+', universities: '6+', employment: '88%' }
    },
    {
      id: 'ireland',
      name: 'Ireland',
      flag: '🇮🇪',
      image: ireland,
      color: 'green',
      shortDesc: 'Excellent universities, multinational companies, job opportunities.',
      fullDesc: `Ireland has emerged as a premier European study destination, offering high-quality education at renowned universities.`,
      highlights: [
        { icon: GraduationCap, text: 'European education' },
        { icon: Users, text: 'Tech hub access' },
        { icon: DollarSign, text: 'EU opportunities' },
        { icon: Clock, text: 'Friendly culture' }
      ],
      stats: { students: '35K+', universities: '8+', employment: '87%' }
    }
  ];

  // Create an array with duplicates for seamless looping
  const sliderCountries = [...countries, ...countries];

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const openModal = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    setIsAutoScrolling(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
    document.body.style.overflow = 'unset';
    setIsAutoScrolling(true);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="countries" className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Globes */}
        <motion.div
          animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 right-20 w-16 h-16 bg-purple-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 w-20 h-20 bg-green-200/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-orange-200/20 rounded-full backdrop-blur-sm"
        />

        {/* Floating Map Icons */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Globe size={32} className="text-blue-300/40" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4"
        >
          <MapPin size={28} className="text-purple-300/40" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/3"
        >
          <GraduationCap size={24} className="text-green-300/40" />
        </motion.div>

        {/* Pulsing Elements */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-40 w-8 h-8 bg-cyan-300/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-10 left-40 w-6 h-6 bg-pink-300/20 rounded-full"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-6"
          >
            <Globe size={20} className="text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold font-poppins">Study Destinations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins"
          >
            Explore Global
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Education Hubs
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed"
          >
            Discover world-class education opportunities in the most sought-after study destinations across the globe
          </motion.p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mb-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAutoScroll}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label={isAutoScrolling ? "Pause auto-scroll" : "Play auto-scroll"}
          >
            {isAutoScrolling ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Continuous Marquee Slider */}
        <div className="relative w-full overflow-hidden">
          {isAutoScrolling ? (
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              {sliderCountries.map((country, index) => (
                <motion.div
                  key={`${country.id}-${index}`}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex-shrink-0 w-80"
                >
                  <div 
                    className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    onClick={() => openModal(country)}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={country.image} 
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end text-white p-6">
                      {/* Flag and Name */}
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.span 
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {country.flag}
                        </motion.span>
                        <h3 className="text-2xl font-bold font-poppins">{country.name}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/90 text-sm font-lato leading-relaxed mb-4">
                        {country.shortDesc}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs mb-4">
                        <div className="text-center">
                          <div className="font-bold text-white text-lg font-poppins">{country.stats.students}</div>
                          <div className="text-white/70 font-lato">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg font-poppins">{country.stats.universities}</div>
                          <div className="text-white/70 font-lato">Universities</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg font-poppins">{country.stats.employment}</div>
                          <div className="text-white/70 font-lato">Employment</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between pt-3 border-t border-white/30"
                      >
                        <span className="font-semibold text-sm font-poppins">Discover More</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Color Accent */}
                    <div className={`absolute top-0 left-0 w-2 h-full bg-${country.color}-500`} />

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Manual scroll container when auto-scroll is off
            <div 
              ref={sliderRef}
              className="flex gap-6 py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <div 
                    className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    onClick={() => openModal(country)}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={country.image} 
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end text-white p-6">
                      {/* Flag and Name */}
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.span 
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {country.flag}
                        </motion.span>
                        <h3 className="text-2xl font-bold font-poppins">{country.name}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/90 text-sm font-lato leading-relaxed mb-4">
                        {country.shortDesc}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs mb-4">
                        <div className="text-center">
                          <div className="font-bold text-white text-lg font-poppins">{country.stats.students}</div>
                          <div className="text-white/70 font-lato">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg font-poppins">{country.stats.universities}</div>
                          <div className="text-white/70 font-lato">Universities</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg font-poppins">{country.stats.employment}</div>
                          <div className="text-white/70 font-lato">Employment</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between pt-3 border-t border-white/30"
                      >
                        <span className="font-semibold text-sm font-poppins">Discover More</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Color Accent */}
                    <div className={`absolute top-0 left-0 w-2 h-full bg-${country.color}-500`} />

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-poppins">
              Ready to Begin Your Global Journey?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto font-lato">
              Let our expert counsellors help you choose the perfect study destination and guide you through the entire application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 font-semibold font-poppins"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64">
                <img 
                  src={selectedCountry.image} 
                  alt={selectedCountry.name}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl" />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-10 backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-white" />
                </button>

                {/* Country Info */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{selectedCountry.flag}</span>
                    <div>
                      <h2 className="text-3xl font-bold font-poppins">{selectedCountry.name}</h2>
                      <p className="text-white/80 font-lato">{selectedCountry.shortDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Why Choose {selectedCountry.name}?</h3>
                    <div className="space-y-3">
                      {selectedCountry.highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                              <Icon size={20} className="text-blue-600" />
                            </div>
                            <span className="text-gray-700 font-lato font-medium">{highlight.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Overview</h3>
                    <p className="text-gray-600 leading-relaxed font-lato">
                      {selectedCountry.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Quick Facts</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 font-poppins">{selectedCountry.stats.students}</div>
                      <div className="text-sm text-gray-600 font-lato">International Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 font-poppins">{selectedCountry.stats.universities}</div>
                      <div className="text-sm text-gray-600 font-lato">Universities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 font-poppins">{selectedCountry.stats.employment}</div>
                      <div className="text-sm text-gray-600 font-lato">Employment Rate</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="primary"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 font-poppins"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Countries;