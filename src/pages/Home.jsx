import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { Send, CheckCircle } from 'lucide-react';
import FloatingInput from '../components/FloatingInput';

// Import only the first image
import image1 from "../assets/images/canada.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    phoneNumber: "",
    email: "",
    intakeYear: "",
    intakeMonth: "",
    studyCountry: "",
    currentState: "",
    currentCity: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Refs for form inputs
  const formRef = useRef(null);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    
    if (formErrors[key]) {
      setFormErrors({
        ...formErrors,
        [key]: ""
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.studentName.trim()) errors.studentName = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone number is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("access_key", "7a0948d7-296d-439a-b602-bc53cd306459");
      formDataToSubmit.append("student_name", formData.studentName);
      formDataToSubmit.append("phone_number", formData.phoneNumber);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("intake", `${formData.intakeMonth} ${formData.intakeYear}`);
      formDataToSubmit.append("study_country", formData.studyCountry);
      formDataToSubmit.append("current_state", formData.currentState);
      formDataToSubmit.append("current_city", formData.currentCity);
      formDataToSubmit.append("from_name", "Study Abroad Inquiry");
      formDataToSubmit.append("replyto", formData.email);
      formDataToSubmit.append("subject", `New Study Inquiry - ${formData.studentName}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        setFormData({ 
          studentName: "",
          phoneNumber: "",
          email: "",
          intakeYear: "",
          intakeMonth: "",
          studyCountry: "",
          currentState: "",
          currentCity: "",
        });
        
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      const subject = encodeURIComponent(`Study Inquiry - ${formData.studentName}`);
      const body = encodeURIComponent(
        `Student Name: ${formData.studentName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\nIntake: ${formData.intakeMonth} ${formData.intakeYear}\nCountry to Study: ${formData.studyCountry}\nState: ${formData.currentState}\nCity: ${formData.currentCity}`
      );
      window.location.href = `mailto:info@careerbridge.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16">
      {/* Static Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          {/* Main Image with Overlay */}
          <div className="relative w-full h-full">
            <img
              src={image1}
              alt="Take the First Step to STUDY ABROAD"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <>
              {/* Desktop overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent hidden md:block" />
              {/* Mobile overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 md:hidden" />
            </>
          </div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center justify-center">
              {/* Left Side - Title & Features - HIDE ON MOBILE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white pr-8 hidden lg:block"
              >
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 drop-shadow-2xl font-poppins leading-tight"
                >
                  Take the First Step to STUDY ABROAD
                </motion.h1>
                
                {/* Features List */}
                <div className="space-y-4 mb-10">
                  {[
                    "Courses starting from ₹8 Lakhs*",
                    "Scholarship worth ₹10,00,000*",
                    "Offer letter in less than 48 hours*"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-4 h-4 bg-white rounded-full mt-1 flex-shrink-0" />
                      <span className="text-lg md:text-xl font-lato font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-lg font-poppins">
                  Start your Study Abroad Journey
                </h2>
              </motion.div>

              {/* Right Side - Compact Form - FULL WIDTH ON MOBILE */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-xl p-5 md:p-5 shadow-xl w-full max-w-md mx-auto"
                ref={formRef}
              >
                {/* Mobile Title - Only shown on mobile */}
                <div className="lg:hidden mb-4 text-center">
                  <h1 className="text-gray-800 text-xl font-semibold font-poppins leading-tight tracking-wide animate-gradient bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent bg-300%">
                    Start your Study Abroad Journey
                  </h1>
                  <p className="text-gray-600 text-sm mt-2 font-lato">
                    Fill the form to get free consultation
                  </p>
                </div>

                {/* Desktop Title - Hidden on mobile */}
                <div className='hidden lg:flex items-center justify-center mt-4'>
                  <h1 className='text-gray-800 text-2xl md:text-3xl font-semibold font-poppins leading-tight'>
                    Start your Study Abroad <br /> 
                    <span className='block text-center font-bungee text-3xl md:text-4xl tracking-wide animate-gradient bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent bg-300%'>
                      Journey
                    </span>
                  </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 mt-3 lg:mt-5">
                  <FloatingInput
                    label="Student Name*"
                    value={formData.studentName}
                    onChange={(v) => handleInputChange("studentName", v)}
                    error={formErrors.studentName}
                  />

                  <FloatingInput
                    type="email"
                    label="Enter Email Address*"
                    value={formData.email}
                    onChange={(v) => handleInputChange("email", v)}
                    error={formErrors.email}
                  />

                  <FloatingInput
                    type="tel"
                    label="Mobile number*"
                    value={formData.phoneNumber}
                    onChange={(v) => handleInputChange("phoneNumber", v)}
                    error={formErrors.phoneNumber}
                  />

                  {/* Intake Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <FloatingInput
                      label="Intake Month"
                      value={formData.intakeMonth}
                      onChange={(v) => handleInputChange("intakeMonth", v)}
                    />

                    <FloatingInput
                      type="number"
                      label="Intake Year"
                      value={formData.intakeYear}
                      onChange={(v) => handleInputChange("intakeYear", v)}
                    />
                  </div>

                  <FloatingInput
                    label="Country Intend to Study"
                    value={formData.studyCountry}
                    onChange={(v) => handleInputChange("studyCountry", v)}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <FloatingInput
                      label="Current State"
                      value={formData.currentState}
                      onChange={(v) => handleInputChange("currentState", v)}
                    />

                    <FloatingInput
                      label="Current City"
                      value={formData.currentCity}
                      onChange={(v) => handleInputChange("currentCity", v)}
                    />
                  </div>

                  {/* Success Message */}
                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-50 border border-green-200 rounded-md p-3"
                      >
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-green-700 text-sm">
                            Thank you! Our team will contact you shortly.
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Book your free consultation
                      </span>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;