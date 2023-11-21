import React, { useState } from 'react';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => setCollapsed(!collapsed);

  return (
    <nav className="bg-gray-800 shadow-lg p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 mr-4"
          />
          <span className="text-xl font-semibold">My Logo</span>
        </div>
        <div className={`flex space-x-4 ${collapsed ? 'hidden' : ''}`}>
          <div className={`flex items-center ${
            collapsed ? 'animate-left-out duration-300' : 'animate-left-in duration-300'
          }`}>
            <a href="/about" className="text-white hover:text-gray-300 p-2 text-lg font-medium rounded-md">
              About
            </a>
            <a href="/services" className="text-white hover:text-gray-300 p-2 text-lg font-medium rounded-md">
              Services
            </a>
          </div>
          <div className={`flex items-center ${
            collapsed ? 'animate-right-out duration-300 delay-700' : 'animate-right-in duration-300'
          }`}>
            <a href="/contact" className="text-white hover:text-gray-300 p-2 text-lg font-medium rounded-md">
              Contact
            </a>
            <a href="/login" className="text-white hover:text-gray-300 p-2 text-lg font-medium rounded-md">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;