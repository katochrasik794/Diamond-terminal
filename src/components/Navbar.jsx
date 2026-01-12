import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0b1219] border-b border-gray-800 h-[44px] flex items-center">
      <div className="flex items-center justify-between px-3 w-full h-full">
        {/* Left Section - Menu, Logo & Actions */}
        <div className="flex items-center">
          {/* Hamburger Menu */}
          <button
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700 mx-2"></div>

          {/* Logo */}
          <a href="https://thediamondmarkets.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-white rounded-sm w-6 h-6 transform rotate-45 ml-1">
              <div className="w-2.5 h-2.5 bg-[#0b1219] rounded-full"></div>
            </div>
            <span className="text-gray-200 font-semibold text-sm tracking-wide ml-1">Diamond Markets</span>
          </a>

          {/* Red/Blue Toggle */}
          <div className="ml-3 flex items-center bg-gray-700/50 rounded overflow-hidden h-4 w-8 border border-gray-600">
            <div className="w-1/2 h-full bg-red-500/80"></div>
            <div className="w-1/2 h-full bg-blue-500/80"></div>
          </div>

          {/* Action Buttons Group (Moved from Center) */}
          <div className="flex items-center gap-4">
            {/* New Order Button */}
            <button className="flex items-center gap-2 group">
              <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500">
                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                 </svg>
              </div>
              <span className="text-orange-400 font-medium text-sm group-hover:text-orange-300 transition-colors">New Order</span>
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-700"></div>

            {/* Orders/Documents Button */}
            <button
              className="p-1 text-blue-500 hover:text-blue-400 transition-colors"
              aria-label="Orders"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-700"></div>

            {/* Grid/Layout Button */}
            <button
              className="p-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Layout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-700"></div>
          </div>
        </div>

        {/* Right Section - Utility Buttons */}
        <div className="flex items-center gap-4">
          {/* One Click Trading */}
          <button
            className="p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="One Click Trading"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
               <path fill="none" d="M0 0h24v24H0z"></path>
               <path d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81l.63 2.1zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z"></path>
            </svg>
          </button>

          {/* Fullscreen Button */}
          <button
            className="p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Fullscreen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
