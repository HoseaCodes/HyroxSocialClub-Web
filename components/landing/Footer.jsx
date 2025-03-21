import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Paragraph from "./Paragraph";
import { useState } from 'react';

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Feature Highlights", href: "#" },
  { name: "Download", href: "#" },
];
const footerItems = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Conditions", href: "/terms" },
];
const socialItems = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];
const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [snowKey, setSnowKey] = useState(0);

  const regenerateSnow = () => {
    setSnowKey(prevKey => prevKey + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    try {
      setStatus('loading');
      setMessage('');
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully joined the waitlist!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
        console.error('Error details:', data);
      }
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again later.');
    }
  };
  return (
    <section 
      className="bg-footer-image rounded-[35px] overflow-hidden bg-[#1A1F2E] bg-center bg-full"
    >
      <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-5 pt-20 justify-center items-center pb-10 relative">
        {/* Snowfall Animation Styles */}
        <style jsx>{`
          @keyframes snowfall {
            0% {
              transform: translateY(-10px) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(60px) rotate(360deg);
              opacity: 0;
            }
          }
          
          .animate-snowfall {
            animation: snowfall linear forwards;
            animation-iteration-count: 1;
          }
        `}</style>

        <h2 className="text-white text-[30px] sm:text-[40px] font-bold leading-[45px]">
          PhysiquePro AI
        </h2>
        <Paragraph
          color="text-white"
          style="text-center mx-auto w-[90%] lg:w-[30%]"
        >
          Join thousands of early adopters and experience the future of fitness.
        </Paragraph>

        <form
          onSubmit={handleSubmit} 
          className="max-w-[300px] sm:max-w-[545px] rounded-2xl mx-auto flex items-center bg-[#313443]"
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-transparent h-[46px] sm:h-[70px] w-[254px] sm:w-[475px] px-5 sm:px-10 focus:outline-none text-white text-[13px] sm:text-base font-normal"
          />
          <button
            type="submit"
            className="bg-[#3B82F6] rounded-e-2xl h-[46px] sm:h-[70px] w-[46px] sm:w-[70px] flex items-center justify-center">
            <IoSend color="#fff" className="sm:text-xl text-base" />
          </button>
        </form>
        {message && (
        <div
          className={`mt-3 px-4 py-2 rounded text-center ${
            status === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {message}
        </div>
      )}
      
      {status === 'success' && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Check your inbox for a confirmation email! If you don&apos;t see it, please check your spam folder.
        </p>
      )}

        <ul className="flex gap-5 sm:gap-10 text-white items-center mt-10 mb-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-[13px] sm:text-base lg:text-xl font-normal sm:font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-b border-[#FFFFFF4D] flex items-center justify-between w-full py-5 bg-[#1A1F2E] flex-col sm:flex-row gap-5">
          <p className="text-white text-center text-[13px] sm:text-xl font-normal sm:font-medium hidden lg:block">
            © 2025{" "}
            <span className="font-normal sm:font-bold">PhysiquePro AI</span>
          </p>
          <ul className="flex gap-10 text-white items-center">
            {footerItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[13px] sm:text-base lg:text-xl font-normal sm:font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className=" gap-5 text-white items-center hidden sm:flex">
            {socialItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-[13px] sm:text-xl font-normal sm:font-medium text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#3B82F6] border border-[#FFFFFF33] hover:border-[#3B82F6]"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-white text-center text-[13px] sm:text-xl font-normal sm:font-medium lg:hidden block border-b border-[#FFFFFF4D] w-full pt-2 pb-5">
          © 2025{" "}
          <span className="font-normal sm:font-bold">PhysiquePro AI</span>
        </p>
        <ul className="flex gap-5 text-white items-center sm:hidden ">
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-[13px] sm:text-xl font-normal sm:font-medium text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#3B82F6] border border-[#FFFFFF33] hover:border-[#3B82F6]"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
        
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={regenerateSnow}
        >
          <p className="text-white text-center text-[11px] sm:text-sm font-normal mt-5 opacity-70">
            Powered by {""} ❄️{" "}
            <a className="text-[#14B5B8] hover:text-[#0de8ed] transition-colors duration-300 font-medium" href="https://ambitiousconcept.com/" target="_blank" rel="noopener noreferrer">
              Ambitious Concepts
            </a> 
            {""} ❄️{" "}
          </p>
          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div key={snowKey} className="snowflakes opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="snowflake absolute animate-snowfall" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 200}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 5}s`,
                  opacity: Math.random(),
                  fontSize: `${Math.random() * 10 + 8}px`
                }}>
                  ❄️
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;