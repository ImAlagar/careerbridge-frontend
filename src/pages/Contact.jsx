import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../utils/constants";
import { 
  Clock, 
  CheckCircle, 
  Send, 
  MessageCircle, 
  Calendar, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  User,
  Globe,
  CalendarDays
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    phoneNumber: "",
    email: "",
    intakeYear: "",
    intakeMonth: "",
    studyCountry: "",
    currentState: "",
    currentCity: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    
    // Clear error when user starts typing
    if (formErrors[key]) {
      setFormErrors({
        ...formErrors,
        [key]: ""
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.studentName.trim()) errors.studentName = "Student name is required";
    
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      errors.phoneNumber = "Please enter a valid phone number";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
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
      formDataToSubmit.append("from_name", "CareerBridge Contact Form");
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
          currentCity: ""
        });
        
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Fallback: Open email client
      const subject = encodeURIComponent(`Study Inquiry - ${formData.studentName}`);
      const body = encodeURIComponent(
        `Student Name: ${formData.studentName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\nIntake: ${formData.intakeMonth} ${formData.intakeYear}\nCountry to Study: ${formData.studyCountry}\nState: ${formData.currentState}\nCity: ${formData.currentCity}`
      );
      window.location.href = `mailto:info@careerbridge.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      case 'address':
        // Open Google Maps
        const encodedAddress = encodeURIComponent(value);
        window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
        break;
      default:
        break;
    }
  };

  const getContactIcon = (type) => {
    switch (type) {
      case 'email':
        return Mail;
      case 'phone':
        return Phone;
      case 'address':
        return MapPin;
      default:
        return MessageCircle;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-6 relative overflow-hidden bg-gray-50"
      aria-labelledby="contact-heading"
    >
      {/* SEO and Accessibility Improvements */}
      <meta name="description" content="Contact Career bridge Council Collections" />
      <div aria-live="polite" aria-atomic="true">
        {showSuccess && (
          <div className="sr-only">
            Form submitted successfully. Thank you for your message.
          </div>
        )}
      </div>

      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-10 bg-grid-gray-900/[0.03] bg-[size:60px_60px]" />
        
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/50 blur-3xl rotate-45"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-200/50 blur-3xl rounded-full"
        />
      </motion.div>

      <div className="container mx-auto p-5 max-w-7xl relative z-10">
        <motion.h2 
          id="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 font-poppins"
        >
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Touch</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-center max-w-2xl mx-auto mb-4 text-gray-600 font-lato"
        >
          We're here to help! Contact our education counselors for guidance on your study abroad journey.
        </motion.p>

        {/* Unique Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Service Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="p-2 rounded-full bg-green-100"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 font-poppins">
                    Education Counseling Active
                  </h3>
                  <p className="text-sm text-gray-600 font-lato">
                    Our counselors are available to guide you through your study abroad journey
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-semibold mb-2 text-gray-800 font-poppins"
            >
              Contact Information
            </motion.h3>
            
            {/* Contact info items - Clickable */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CONTACT_INFO.map((item, index) => {
                const IconComponent = getContactIcon(item.type);
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-xl group cursor-pointer bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all text-left w-full"
                    whileHover={{ x: 5 }}
                    onClick={() => handleContactClick(item.type, item.value)}
                    aria-label={`Contact via ${item.type}: ${item.value}`}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 rounded-full relative overflow-hidden bg-gray-100 group-hover:bg-purple-100 transition-all flex-shrink-0"
                      >
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-purple-400/20"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <IconComponent className="w-5 h-5 relative z-10 text-purple-600" aria-hidden="true" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 mb-1 font-poppins">
                          {item.label}
                        </p>
                        <p className="text-gray-600 break-words font-lato">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins">Follow Us</h3>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredSocial(social.name)}
                    onHoverEnd={() => setHoveredSocial(null)}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon 
                      className={`w-5 h-5 transition-colors ${
                        hoveredSocial === social.name ? 'text-purple-600' : 'text-gray-600'
                      }`} 
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Middle Column - Decorative Element */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block lg:col-span-2 relative"
            aria-hidden="true"
          >
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-400/30 via-blue-400/30 to-cyan-400/30" />
            
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + i * 0.2,
                }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400/80"
                style={{ top: `${25 + i * 15}%` }}
              />
            ))}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            ref={formRef}
            className="p-8 rounded-2xl shadow-xl lg:col-span-5 bg-white"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(243, 244, 246, 0.9)),
                   radial-gradient(circle at 20% 80%, rgba(167, 139, 250, 0.1), transparent 40%),
                   radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1), transparent 40%)`
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Student Name Field */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label 
                  htmlFor="studentName" 
                  className="block mb-2 font-medium text-gray-800 font-poppins flex items-center gap-2"
                >
                  <User size={16} aria-hidden="true" />
                  Student Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  value={formData.studentName}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all font-lato ${
                    formErrors.studentName ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                  }`}
                  placeholder="Enter your full name"
                  aria-describedby={formErrors.studentName ? "studentName-error" : undefined}
                />
                {formErrors.studentName && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="studentName-error"
                    className="mt-1 text-sm text-red-600 font-lato"
                  >
                    {formErrors.studentName}
                  </motion.p>
                )}
              </motion.div>

              {/* Phone Number Field */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <label 
                  htmlFor="phoneNumber" 
                  className="block mb-2 font-medium text-gray-800 font-poppins flex items-center gap-2"
                >
                  <Phone size={16} aria-hidden="true" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all font-lato ${
                    formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                  }`}
                  placeholder="Enter your phone number with country code"
                  aria-describedby={formErrors.phoneNumber ? "phoneNumber-error" : undefined}
                />
                {formErrors.phoneNumber && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="phoneNumber-error"
                    className="mt-1 text-sm text-red-600 font-lato"
                  >
                    {formErrors.phoneNumber}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label 
                  htmlFor="email" 
                  className="block mb-2 font-medium text-gray-800 font-poppins flex items-center gap-2"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all font-lato ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                  }`}
                  placeholder="Enter your email address"
                  aria-describedby={formErrors.email ? "email-error" : undefined}
                />
                {formErrors.email && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="email-error"
                    className="mt-1 text-sm text-red-600 font-lato"
                  >
                    {formErrors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Intake - Year and Month */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Intake Month */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <label 
                    htmlFor="intakeMonth" 
                    className="block mb-2 font-medium text-gray-800 font-poppins flex items-center gap-2"
                  >
                    <CalendarDays size={16} aria-hidden="true" />
                    Intake Month
                  </label>
                  <input
                    type="text"
                    id="intakeMonth"
                    value={formData.intakeMonth}
                    onChange={(e) => handleInputChange('intakeMonth', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all font-lato ${
                      formErrors.intakeMonth ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                    }`}
                    placeholder="Enter month (e.g., September)"
                    aria-describedby={formErrors.intakeMonth ? "intakeMonth-error" : undefined}
                  />
                  {formErrors.intakeMonth && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      id="intakeMonth-error"
                      className="mt-1 text-sm text-red-600 font-lato"
                    >
                      {formErrors.intakeMonth}
                    </motion.p>
                  )}
                </motion.div>

                {/* Intake Year */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label 
                    htmlFor="intakeYear" 
                    className="block mb-2 font-medium text-gray-800 font-poppins flex items-center gap-2"
                  >
                    <Calendar size={16} aria-hidden="true" />
                    Intake Year
                  </label>
                  <input
                    type="text"
                    id="intakeYear"
                    value={formData.intakeYear}
                    onChange={(e) => handleInputChange('intakeYear', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all font-lato ${
                      formErrors.intakeYear ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                    }`}
                    placeholder="Enter year (e.g., 2024)"
                    aria-describedby={formErrors.intakeYear ? "intakeYear-error" : undefined}
                  />
                  {formErrors.intakeYear && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      id="intakeYear-error"
                      className="mt-1 text-sm text-red-600 font-lato"
                    >
                      {formErrors.intakeYear}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Country Intend to Study */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <label 
                  htmlFor="studyCountry" 
                  className="block mb-2 font-medium text-gray-800 font-poppins flex items-center gap-2"
                >
                  <Globe size={16} aria-hidden="true" />
                  Country Intend to Study
                </label>
                <input
                  type="text"
                  id="studyCountry"
                  value={formData.studyCountry}
                  onChange={(e) => handleInputChange('studyCountry', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-800 transition-all font-lato ${
                    formErrors.studyCountry ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                  }`}
                  placeholder="Enter country name"
                  aria-describedby={formErrors.studyCountry ? "studyCountry-error" : undefined}
                />
                {formErrors.studyCountry && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="studyCountry-error"
                    className="mt-1 text-sm text-red-600 font-lato"
                  >
                    {formErrors.studyCountry}
                  </motion.p>
                )}
              </motion.div>

              {/* Current State and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Current State */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label 
                    htmlFor="currentState" 
                    className="block mb-2 font-medium text-gray-800 font-poppins"
                  >
                    Current State
                  </label>
                  <input
                    type="text"
                    id="currentState"
                    value={formData.currentState}
                    onChange={(e) => handleInputChange('currentState', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 transition-all focus:border-purple-500 font-lato"
                    placeholder="Enter your state"
                  />
                </motion.div>

                {/* Current City */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <label 
                    htmlFor="currentCity" 
                    className="block mb-2 font-medium text-gray-800 font-poppins"
                  >
                    Current City
                  </label>
                  <input
                    type="text"
                    id="currentCity"
                    value={formData.currentCity}
                    onChange={(e) => handleInputChange('currentCity', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 transition-all focus:border-purple-500 font-lato"
                    placeholder="Enter your city"
                  />
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all disabled:opacity-80 disabled:cursor-not-allowed font-poppins"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    aria-label="Submitting form"
                  />
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={18} aria-hidden="true" />
                  </>
                )}
              </motion.button>

              {/* Success message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mt-4 rounded-lg bg-green-50 border border-green-200"
                  role="alert"
                >
                  <p className="flex items-center space-x-2 text-green-700 font-lato">
                    <MessageCircle size={18} aria-hidden="true" />
                    <span>Thank you for your inquiry! Our education counselor will contact you within 24 hours.</span>
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;