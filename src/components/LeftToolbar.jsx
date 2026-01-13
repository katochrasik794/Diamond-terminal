import React, { useRef } from 'react';

const ToolbarButton = ({ icon, tooltip, isActive, hasArrow }) => (
  <div className="relative group w-full flex justify-center flex-shrink-0">
    <div className="relative flex items-center justify-center w-8 h-8">
        <button 
            className={`w-10 h-10 flex items-center justify-center rounded hover:bg-[#2a2e39] transition-colors ${isActive ? 'text-[#2962ff]' : 'text-gray-400 hover:text-white'}`}
            title={tooltip}
        >
            {icon}
        </button>
        {hasArrow && (
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg className="w-2 h-2 text-gray-500" viewBox="0 0 10 16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z" fill="currentColor"></path></svg>
            </div>
        )}
    </div>
  </div>
);

const Separator = () => (
    <div className="w-6 h-[1px] bg-[#2a2e39] my-1 mx-auto flex-shrink-0"></div>
);

const LeftToolbar = () => {
  const scrollRef = useRef(null);

  const scrollUp = () => {
      if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: -50, behavior: 'smooth' });
      }
  };

  const scrollDown = () => {
      if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: 50, behavior: 'smooth' });
      }
  };

  return (
    <div className="w-[52px] h-full flex flex-col bg-[#131722] border-r border-[#2a2e39] py-1">
      {/* Scroll Up Arrow */}
      <button onClick={scrollUp} className="w-full flex items-center justify-center py-1 hover:text-white text-gray-400 hover:bg-[#2a2e39] flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>

      <div ref={scrollRef} className="flex-1 w-full flex flex-col items-center gap-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2">
        {/* Cursors */}
        <ToolbarButton 
            hasArrow
            tooltip="Cross"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path d="M18 15h8v-1h-8z"></path><path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z"></path></svg>} 
        />

        {/* Trend Line */}
        <ToolbarButton
            hasArrow
            tooltip="Trend Line"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><g fillRule="nonzero"><path d="M7.354 21.354l14-14-.707-.707-14 14z"></path><path d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path></g></svg>}
        />

        {/* Fib Retracement */}
        <ToolbarButton
            hasArrow
            tooltip="Fib Retracement"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><g fillRule="nonzero"><path d="M3 5h22v-1h-22z"></path><path d="M3 17h22v-1h-22z"></path><path d="M3 11h19.5v-1h-19.5z"></path><path d="M5.5 23h19.5v-1h-19.5z"></path><path d="M3.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path></g></svg>}
        />

        {/* Shapes (Brush) */}
        <ToolbarButton
            hasArrow
            tooltip="Geometric Shapes"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><g fillRule="nonzero"><path d="M1.789 23l.859-.854.221-.228c.18-.19.38-.409.597-.655.619-.704 1.238-1.478 1.815-2.298.982-1.396 1.738-2.776 2.177-4.081 1.234-3.667 5.957-4.716 8.923-1.263 3.251 3.785-.037 9.38-5.379 9.38h-9.211zm9.211-1c4.544 0 7.272-4.642 4.621-7.728-2.45-2.853-6.225-2.015-7.216.931-.474 1.408-1.273 2.869-2.307 4.337-.599.852-1.241 1.653-1.882 2.383l-.068.078h6.853z"></path><path d="M18.182 6.002l-1.419 1.286c-1.031.935-1.075 2.501-.096 3.48l1.877 1.877c.976.976 2.553.954 3.513-.045l5.65-5.874-.721-.693-5.65 5.874c-.574.596-1.507.609-2.086.031l-1.877-1.877c-.574-.574-.548-1.48.061-2.032l1.419-1.286-.672-.741z"></path></g></svg>}
        />

        {/* Text */}
        <ToolbarButton
            hasArrow
            tooltip="Text"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path d="M8 6.5c0-.28.22-.5.5-.5H14v16h-2v1h5v-1h-2V6h5.5c.28 0 .5.22.5.5V9h1V6.5c0-.83-.67-1.5-1.5-1.5h-12C7.67 5 7 5.67 7 6.5V9h1V6.5Z"></path></svg>}
        />

        {/* Patterns (XABCD) */}
        <ToolbarButton
            hasArrow
            tooltip="Patterns"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path d="M20.449 8.505l2.103 9.112.974-.225-2.103-9.112zM13.943 14.011l7.631 4.856.537-.844-7.631-4.856zM14.379 11.716l4.812-3.609-.6-.8-4.812 3.609zM10.96 13.828l-4.721 6.744.819.573 4.721-6.744zM6.331 20.67l2.31-13.088-.985-.174-2.31 13.088zM9.041 7.454l1.995 3.492.868-.496-1.995-3.492z"></path><path d="M8.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path></svg>}
        />

        {/* Prediction (Long Position) */}
        <ToolbarButton
            hasArrow
            tooltip="Prediction"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M4.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 6.5A2.5 2.5 0 0 1 6.95 6H24v1H6.95A2.5 2.5 0 0 1 2 6.5zM4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 16.5a2.5 2.5 0 0 1 4.95-.5h13.1a2.5 2.5 0 1 1 0 1H6.95A2.5 2.5 0 0 1 2 16.5zM22.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-18 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 22.5a2.5 2.5 0 0 1 4.95-.5H24v1H6.95A2.5 2.5 0 0 1 2 22.5z"></path><path fillRule="evenodd" clipRule="evenodd" d="M22.4 8.94l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91z"></path></svg>}
        />
        
        {/* Icon (Smiley) */}
        <ToolbarButton
            hasArrow
            tooltip="Icons"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path d="M4.05 14a9.95 9.95 0 1 1 19.9 0 9.95 9.95 0 0 1-19.9 0ZM14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-3 13.03a.5.5 0 0 1 .64.3 2.5 2.5 0 0 0 4.72 0 .5.5 0 0 1 .94.34 3.5 3.5 0 0 1-6.6 0 .5.5 0 0 1 .3-.64Zm.5-4.53a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg>}
        />

        <Separator />

        {/* Measure */}
        <ToolbarButton
            tooltip="Measure"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path d="M2 9.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5zm0 1h3v2.5h1v-2.5h3.25v3.9h1v-3.9h3.25v2.5h1v-2.5h3.25v3.9h1v-3.9H22v2.5h1v-2.5h3a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-5.5a.5.5 0 0 1 .5-.5z" transform="rotate(-45 14 14)"></path></svg>}
        />

        {/* Zoom In */}
        <ToolbarButton
            tooltip="Zoom In"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path d="M17.646 18.354l4 4 .708-.708-4-4z"></path><path d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"></path><path d="M9 13h7v-1H9z"></path><path d="M13 16V9h-1v7z"></path></svg>}
        />
        
        <Separator />

        {/* Magnet */}
        <ToolbarButton
            hasArrow
            tooltip="Magnet Mode"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><g fillRule="evenodd"><path fillRule="nonzero" d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2zm-3 2a3 3 0 0 1 6 0v10h4V12c0-3.864-3.136-7-7-7s-7 3.136-7 7v10h4V12z"></path><path d="M6.5 18h5v1h-5zm10 0h5v1h-5z"></path></g></svg>}
        />

        {/* Drawing Mode */}
        <ToolbarButton
            tooltip="Stay in Drawing Mode"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><g fillRule="evenodd"><path fillRule="nonzero" d="M23.002 23C23 23 23 18.003 23 18.003L15.998 18C16 18 16 22.997 16 22.997l7.002.003zM15 18.003A1 1 0 0 1 15.998 17h7.004c.551 0 .998.438.998 1.003v4.994A1 1 0 0 1 23.002 24h-7.004A.993.993 0 0 1 15 22.997v-4.994z"></path><path d="M19 20h1v2h-1z"></path><path fillRule="nonzero" d="M22 14.5a2.5 2.5 0 0 0-5 0v3h1v-3a1.5 1.5 0 0 1 3 0v.5h1v-.5z"></path><g fillRule="nonzero"><path d="M3 14.707A1 1 0 0 1 3.293 14L14.439 2.854a1.5 1.5 0 0 1 2.122 0l2.585 2.585a1.5 1.5 0 0 1 0 2.122L8 18.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-3.293zm1 0V18h3.293L18.439 6.854a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L4 14.707z"></path><path d="M13.146 4.854l4 4 .708-.708-4-4zm-9 9l4 4 .708-.708-4-4z"></path><path d="M15.146 6.146l-9 9 .708.708 9-9z"></path></g></g></svg>}
        />

        {/* Lock All */}
        <ToolbarButton
            tooltip="Lock All Drawing Tools"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path fillRule="evenodd" d="M14 6a3 3 0 0 0-3 3v3h8.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 21.5v-7A2.5 2.5 0 0 1 8.5 12H10V9a4 4 0 0 1 8 0h-1a3 3 0 0 0-3-3zm-1 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-2.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 21.5v-7z"></path></svg>}
        />

        {/* Hide All */}
        <ToolbarButton
            hasArrow
            tooltip="Hide all drawings"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path fillRule="evenodd" d="M5 10.76l-.41-.72-.03-.04.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12 2.73 0 4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-2.73 0-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a5.04 5.04 0 01-.15.28 16.01 16.01 0 01-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-3.12 0-5.5-1.75-7.06-3.44a16 16 0 01-2.38-3.38v-.02h-.01L4 10l-.45-.22.01-.02a5.4 5.4 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.88 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16.01 16.01 0 012.38 3.38v.02h.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10 3.6 3.6 0 0013 13.56c2 0 3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zm7.85 12l.8-.8.7.71-.79.8a.5.5 0 000 .7l.59.59c.2.2.5.2.7 0l1.8-1.8.7.71-1.79 1.8a1.5 1.5 0 01-2.12 0l-.59-.59a1.5 1.5 0 010-2.12zM16.5 21.5l-.35-.35a.5.5 0 00-.07.07l-1 1.5-1 1.5a.5.5 0 00.42.78h4a2.5 2.5 0 001.73-.77A2.5 2.5 0 0021 22.5a2.5 2.5 0 00-.77-1.73A2.5 2.5 0 0018.5 20a3.1 3.1 0 00-1.65.58 5.28 5.28 0 00-.69.55v.01h-.01l.35.36zm.39.32l-.97 1.46-.49.72h3.07c.34 0 .72-.17 1.02-.48.3-.3.48-.68.48-1.02 0-.34-.17-.72-.48-1.02-.3-.3-.68-.48-1.02-.48-.35 0-.75.18-1.1.42a4.27 4.27 0 00-.51.4z"></path></svg>}
        />
        
        {/* Remove Drawings */}
        <ToolbarButton
            hasArrow
            tooltip="Remove drawings"
            icon={<svg viewBox="0 0 28 28" width="24" height="24" fill="currentColor"><path fillRule="evenodd" d="M11.5 6a.5.5 0 0 0-.5.5V8h6V6.5a.5.5 0 0 0-.5-.5h-5zM18 8V6.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V8H5.5a.5.5 0 0 0 0 1H7v12.5A2.5 2.5 0 0 0 9.5 24h9a2.5 2.5 0 0 0 2.5-2.5V9h1.5a.5.5 0 0 0 0-1H18zm2 1H8v12.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9zm-8.5 3c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"></path></svg>}
        />

      </div>

      {/* Scroll Down Arrow */}
      <button onClick={scrollDown} className="w-full flex items-center justify-center py-1 hover:text-white text-gray-400 hover:bg-[#2a2e39] flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </div>
  );
};

export default LeftToolbar;
