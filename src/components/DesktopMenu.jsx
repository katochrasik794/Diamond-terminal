
import OneClickTradingModal from './OneClickTradingModal';
import { useState } from 'react';

const DesktopMenu = ({ isOpen, onClose, theme, toggleTheme }) => {
  const [showOneClickModal, setShowOneClickModal] = useState(false);
  const [oneClickEnabled, setOneClickEnabled] = useState(false);

  if (!isOpen && !showOneClickModal) return null;

  const handleMenuClick = (action) => {
      // If the action is opening the modal, we don't close the menu yet, OR we do?
      // User said "when i click on any option inside the desktop menu then its closed automatically"
      // BUT if I open the modal, the menu should probably close so the modal is the focus.
      
      if (action === 'oneClick') {
          // If already enabled, just toggle off without modal? Or always show modal?
          // Usually disabling doesn't need disclaimer.
          if (oneClickEnabled) {
              setOneClickEnabled(false);
          } else {
              setShowOneClickModal(true);
          }
          // Close the menu
          onClose();
      } else {
          // Perform action
          if (typeof action === 'function') action();
          // Close menu
          onClose();
      }
  };

  const handleModalAccept = () => {
      setOneClickEnabled(true);
  };

  return (
    <>
      {/* Modal is rendered outside the menu container so it stays even if menu closes */}
      {showOneClickModal && (
          <OneClickTradingModal 
              onClose={() => setShowOneClickModal(false)} 
              onAccept={handleModalAccept}
          />
      )}

      {/* Only render menu overlay/content if isOpen is true */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-transparent" 
            onClick={onClose}
          />
          <div className="absolute top-[44px] left-4 z-50 w-[280px] bg-[#273649] rounded-b-md shadow-lg text-gray-200 border border-[#2a2e39] font-sans">
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#2a2e39]">
              <div className="text-[16px] text-white font-normal mb-1">DEMODXB11</div>
              <div className="text-[14px] text-gray-400">
                <span className="font-semibold text-white">101209</span>
                <span className="italic"> - The Diamond Markets </span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {/* One Click Trading */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center justify-between group"
                onClick={() => handleMenuClick('oneClick')}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M11.71 17.99C8.53 17.84 6 15.22 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63C15.48 9.31 13.89 8 12 8c-2.21 0-4 1.79-4 4 0 1.89 1.31 3.48 3.08 3.89zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10m-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98z" fill="currentColor"></path>
                  </svg>
                  <span className="text-[15px]">One Click Trading</span>
                </div>
                {/* Toggle Switch */}
                <div className={`relative inline-block w-8 h-4 rounded-full transition-colors ${oneClickEnabled ? 'bg-blue-600' : 'bg-gray-600'}`}>
                   <div className={`absolute top-0 bg-white w-4 h-4 rounded-full shadow-sm transition-transform duration-200 ease-in-out transform ${oneClickEnabled ? 'translate-x-full left-0' : 'left-0'}`}></div>
                </div>
              </div>

              {/* Light/Dark Theme */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick(toggleTheme)}
              >
                 {theme === 'dark' ? (
                    // Sun Icon (Light Mode)
                    <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z" fill="currentColor"></path>
                    </svg>
                 ) : (
                    // Moon Icon (Dark Mode)
                    <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" fill="currentColor"></path>
                    </svg>
                 )}
                 <span className="text-[15px]">{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
              </div>

              {/* Language */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center justify-between group"
                onClick={() => handleMenuClick()}
              >
                <div className="flex items-center gap-3">
                   <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                     <path d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z" fill="currentColor"></path>
                   </svg>
                   <span className="text-[15px]">Language</span>
                </div>
                <svg className="w-[18px] h-[18px] text-gray-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="m10 17 5-5-5-5z" fill="currentColor"></path>
                </svg>
              </div>

              {/* Help */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick()}
              >
                 <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                   <path d="M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4" fill="currentColor"></path>
                 </svg>
                 <span className="text-[15px]">Help</span>
              </div>

              {/* Privacy Policy */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick()}
              >
                 <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                   <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45c1.29-1.94 1.07-4.58-.64-6.29-1.95-1.95-5.12-1.95-7.07 0s-1.95 5.12 0 7.07c1.71 1.71 4.35 1.92 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11 7 3.11zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3" fill="currentColor"></path>
                 </svg>
                 <span className="text-[15px]">Privacy Policy</span>
              </div>

              {/* Term & Condition */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick()}
              >
                 <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                   <path d="M14.17 5 19 9.83V19H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M7 15h10v2H7zm0-4h10v2H7zm0-4h7v2H7z" fill="currentColor"></path>
                 </svg>
                 <span className="text-[15px]">Term & Condition</span>
              </div>

              {/* Contact us */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick()}
              >
                 <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                   <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z" fill="currentColor"></path>
                 </svg>
                 <span className="text-[15px]">Contact us</span>
              </div>

              {/* About */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick()}
              >
                 <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                   <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" fill="currentColor"></path>
                 </svg>
                 <span className="text-[15px]">About</span>
              </div>

              {/* Logout */}
              <div 
                className="px-4 py-[10px] hover:bg-[#2a2e39] cursor-pointer flex items-center gap-3 group"
                onClick={() => handleMenuClick()}
              >
                 <svg className="w-[22px] h-[22px] text-gray-400 group-hover:text-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                   <path d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5z" fill="currentColor"></path>
                 </svg>
                 <span className="text-[15px]">Logout</span>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DesktopMenu;
