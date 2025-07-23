import React from 'react'
import reactLogo from '../assets/logo.jpg'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import "../index.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white ">
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-24 font-mono'>
          <div className='mr-4 md:mr-32'>
            <img src={reactLogo} className="h-10 md:h-12" alt="logo" />
          </div>
          <div className='hidden md:flex space-x-6 lg:space-x-8 items-center'>
            {['Destinations', 'Hotels', 'Flights', 'Bookings', 'Login', 'Sign Up'].map((item) => (
              <div 
                key={item}
                className='relative group hover:text-amber-300 hover:cursor-pointer transition-colors duration-300'
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
            <div className='relative group'>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className='text-amber-400 bg-transparent border-none appearance-none focus:outline-none cursor-pointer pr-6'
              >
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="ES">ES</option>
              </select>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button 
              onClick={toggleMenu}
              className='text-gray-700 hover:text-amber-300 focus:outline-none transition-colors duration-300'
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-4 px-2 shadow-lg rounded-lg`}>
          {['Destinations', 'Hotels', 'Flights', 'Bookings', 'Login', 'Sign Up'].map((item) => (
            <div 
              key={item}
              className='py-3 px-4 hover:bg-amber-50 hover:text-amber-300 rounded-md cursor-pointer transition-colors duration-300'
            >
              {item}
            </div>
          ))}
          <div className='py-3 px-4'>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className='text-amber-400 bg-transparent border border-amber-200 rounded-md px-3 py-1 focus:outline-none cursor-pointer'
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar