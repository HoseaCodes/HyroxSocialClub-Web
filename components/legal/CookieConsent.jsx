/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

const CookieConsent = ({ onAccept, onDecline }) => {
  console.log("CookieConsent component rendered");
  
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 9999 }} // Force a high z-index
    >
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-start md:items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-gray-700">
              <h3 className="text-lg font-medium text-gray-900 mb-1">We use cookies</h3>
              <p className="text-sm md:text-base">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept", you consent to our use of cookies as described in our{' '}
                <a href="/privacy" onClick={() => document.getElementById('privacy-tab')?.click()} className="text-blue-600 hover:text-blue-800 font-medium">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 w-full md:w-auto">
            <button
              onClick={() => {
                console.log("Decline clicked");
                onDecline();
              }}
              className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={() => {
                console.log("Accept clicked");
                onAccept();
              }}
              className="flex-1 md:flex-none px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;