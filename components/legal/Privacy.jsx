/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Tab from '../Tab'
import { motion } from 'framer-motion'
import CookieConsent from './CookieConsent'
import IPDMCANotices from './IPDMCANotices'
import PrivacyPolicy from './PrivacyPolicy'
import TermsPolicy from './TermsPolicy'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link'

export default function Privacy({
    activeTab,
    setActiveTab
}) {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [consentStatus, setConsentStatus] = useState('checking');
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy?activeTab=privacy" },
    { name: "Terms of Service", href: "/privacy?activeTab=terms" },
    { name: "IP / DMCA Notices", href: "/privacy?activeTab=intellectual" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  ];

  useEffect(() => {   
    try {
      // Check localStorage with error handling
      const cookieConsent = localStorage.getItem('cookieConsentPPA');
      
      if (!cookieConsent) {
        setConsentStatus('not-found');
        
        // Shorter delay for testing
        const timer = setTimeout(() => {
          console.log("Timeout completed, showing banner");
          setShowCookieBanner(true);
          setConsentStatus('showing-banner');
        }, 1000);
        
        return () => {
          console.log("Clearing timeout");
          clearTimeout(timer);
        };
      } else {
        setConsentStatus('already-consented');
      }
    } catch (error) {
      console.error("Error checking localStorage:", error);
      setConsentStatus('error');
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieConsent = (accepted) => {
    console.log("Consent handled:", accepted ? "accepted" : "declined");
    try {
      localStorage.setItem('cookieConsentPPA', accepted ? 'accepted' : 'declined');
      setConsentStatus(accepted ? 'accepted' : 'declined');
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
    setShowCookieBanner(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Add a small debug indicator if you need it */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 right-0 bg-yellow-100 text-xs p-1 z-50">
          Cookie status: {consentStatus}
        </div>
      )}
      <Head>
        <title>{activeTab === 'terms' ? 'Terms of Service' : activeTab === 'privacy' ? 'Privacy Policy' : 'Intellectual Property Notice' } | PhysiqueProAI</title>
        <meta name="description" content="PhysiqueProAI legal documents" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              PhysiqueProAI
            </div>
            <p className="text-gray-600 mt-2 text-lg">AI-powered fitness coaching</p>
          </div>
        </motion.div>
        <motion.div 
          className="border-b border-gray-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex space-x-8 justify-center sm:justify-start">
            <Tab 
              label="Terms of Service" 
              active={activeTab === 'terms'} 
              onClick={() => setActiveTab('terms')} 
              className="py-3 px-4 text-base font-medium"
            />
            <Tab 
              label="Privacy Policy" 
              active={activeTab === 'privacy'} 
              onClick={() => setActiveTab('privacy')} 
              className="py-3 px-4 text-base font-medium"
            />
            <Tab
              label="Intellectual Property Notice"
              active={activeTab === 'intellectual'}
              onClick={() => setActiveTab('intellectual')}
              className="py-3 px-4 text-base font-medium"
            />
          </div>
        </motion.div>
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {activeTab === 'terms' && <TermsPolicy />}
          {activeTab === 'privacy' && <PrivacyPolicy />}
          {activeTab === 'intellectual' && <IPDMCANotices />}
        </motion.div>
      </div>
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">PhysiqueProAI</h2>
            <p className="text-gray-600 mt-2">AI-powered fitness coaching</p>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} PhysiqueProAI. All rights reserved.
            </div>
            
            <div>
              <ul className="flex flex-wrap justify-center gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-600 hover:text-blue-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {showCookieBanner && (
        <CookieConsent onAccept={() => handleCookieConsent(true)} onDecline={() => handleCookieConsent(false)} />
      )}
    </div>
  )
}