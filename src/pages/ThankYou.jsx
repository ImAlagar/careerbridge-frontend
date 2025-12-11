// pages/ThankYou.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Get data from localStorage
    const data = localStorage.getItem('formSubmissionData');
    if (data) {
      setFormData(JSON.parse(data));
      localStorage.removeItem('formSubmissionData');
    }
  }, []);

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 text-center font-montserrat"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-3 font-gothic">
            Thank You{formData?.studentName ? `, ${formData.studentName}` : ''}!
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 font-lato">
            Your study abroad inquiry has been submitted successfully.
            Our education counselor will contact you within 24 hours.
          </p>

          <div className="space-y-4 mb-8">
            {formData && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 rounded-xl p-6 text-left font-urbanist"
              >
                <h3 className="font-semibold text-gray-800 mb-3 text-xl font-poppins">
                  📋 Your Details:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500 text-sm font-semibold font-montserrat">Student Name</p>
                    <p className="text-gray-800 text-lg font-medium font-lato">{formData.studentName}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500 text-sm font-semibold font-montserrat">Email Address</p>
                    <p className="text-gray-800 text-lg font-medium font-lato">{formData.email}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500 text-sm font-semibold font-montserrat">Phone Number</p>
                    <p className="text-gray-800 text-lg font-medium font-lato">{formData.phoneNumber}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500 text-sm font-semibold font-montserrat">Preferred Country</p>
                    <p className="text-gray-800 text-lg font-medium font-lato">{formData.studyCountry}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-6 font-lato italic">
              "The world is a book, and those who do not travel read only a page."
              <span className="block text-sm mt-1 font-montserrat">- Saint Augustine</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:scale-105 transition-all duration-300 font-bold font-poppins text-lg"
            >
              ← Back to Home
            </Link>
            
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl hover:shadow-lg hover:shadow-gray-200 hover:scale-105 transition-all duration-300 font-bold font-poppins text-lg"
            >
              Submit Another Inquiry
            </Link>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <p className="text-gray-400 text-sm font-jakarta">
              Need immediate assistance? Call us at <span className="text-blue-500 font-bold">+918072395200</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;