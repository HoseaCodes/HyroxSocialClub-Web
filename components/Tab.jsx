import React from 'react';

const Tab = ({ label, active, onClick, className = '' }) => {
  return (
    <button
      id={`${label.toLowerCase().replace(/\s+/g, '-')}-tab`}
      className={`${
        active 
          ? 'border-b-2 border-blue-500 text-blue-600' 
          : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      } font-medium transition-colors duration-200 focus:outline-none ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;