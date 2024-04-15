// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <a href="/" className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-0 hover:text-gray-300 transition-colors duration-300">My Blog</a>
        <nav className="flex items-center">
          <a href="/" className="text-gray-300 hover:text-white mr-4 transition-colors duration-300 cursor-pointer">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">About</a> 
        </nav>
        <div className="relative">
          <input
            type="text"
            className="bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500 rounded-lg px-4 py-2"
            placeholder="Search..."
          />
          <button className="absolute right-0 top-0 mt-3 mr-4 focus:outline-none">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.707,20.293l-5.02-5.02c1.278-1.564,2.05-3.548,2.05-5.725c0-4.971-4.029-9-9-9s-9,4.029-9,9 s4.029,9,9,9c2.177,0,4.161-0.772,5.725-2.05l5.02,5.02c0.391,0.391,1.023,0.391,1.414,0 C22.098,21.316,22.098,20.684,21.707,20.293z M11,18c-4.963,0-9-4.037-9-9s4.037-9,9-9s9,4.037,9,9S15.963,18,11,18z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
