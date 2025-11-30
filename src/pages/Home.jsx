// sections/Home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

// Import images like you mentioned
import image1 from "../assets/images/image 1.png";
import image2 from "../assets/images/image 2.png";
import image3 from "../assets/images/image 3.png";
import image4 from "../assets/images/image 4.png";
import image5 from "../assets/images/image 5.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: image1,
      title: "Welcome to Our World",
      subtitle: "Discover amazing experiences and create unforgettable memories"
    },
    {
      id: 2,
      image: image2,
      title: "Premium Services",
      subtitle: "Experience the finest with our exclusive offerings"
    },
    {
      id: 3,
      image: image3,
      title: "Unforgettable Moments",
      subtitle: "Create memories that last a lifetime"
    },
    {
      id: 4,
      image: image4,
      title: "Luxury Experiences",
      subtitle: "Indulge in extraordinary adventures"
    },
    {
      id: 5,
      image: image5,
      title: "Your Journey Begins",
      subtitle: "Start your extraordinary experience today"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16">
      {/* Unique Slider Container */}
      <div className="relative h-screen w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Main Image with Overlay */}
            <div className="relative w-full h-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/4 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-bounce" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black hover:bg-gray-100 border-white"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Unique Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Custom Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;