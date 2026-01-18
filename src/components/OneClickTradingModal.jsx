import React, { useState } from 'react';

const OneClickTradingModal = ({ onClose, onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-none"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden font-sans">
        {/* Header */}
        <div className="bg-[#0c53b7] px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-lg font-medium">One Click Trading - Disclaimer</h2>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-gray-700 text-[14px] leading-relaxed max-h-[70vh] overflow-y-auto">
          <p>
            You are about to activate One Click Trading mode.By clicking "I Accept these Terms and Conditions" below, you acknowledge that you have read and understood the following terms and conditions, and you agree to be bound hereby.
          </p>

          <p>
            You can activate or deactivate One Click Trading mode from the menu of your web terminal.
          </p>

          <div>
             <p className="mb-2">The One Click Trading mode for order submission is a one-step process. Your order will be submitted when you:</p>
             <ul className="list-disc pl-5 space-y-1">
                 <li>tap either bid (SELL) or ask (BUY) price buttons on the One Click Trading panel of a chart</li>
                 <li>tap Sell, Close, Buy or order placing buttons in the Depth of Market window</li>
                 <li>close positions or delete orders in the Trade tab</li>
             </ul>
          </div>

          <p className="uppercase font-medium text-gray-600 border border-transparent">
             THERE WILL BE NO SUBSEQUENT CONFIRMATION PROMPT FOR YOU TO CLICK. YOU WILL NOT BE ABLE TO WITHDRAW OR CHANGE YOUR ORDER ONCE YOU CLICK. UNDER NORMAL MARKET CONDITIONS AND SYSTEM PERFORMANCE. A MARKET ORDER WILL BE PROMPTLY FILLED
          </p>

          {/* Checkbox */}
          <div className="flex items-center pt-2 gap-3 cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
             <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${isChecked ? 'bg-[#0c53b7] border-[#0c53b7]' : 'border-gray-400 bg-white'}`}>
                 {isChecked && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
             </div>
             <span className="text-gray-900 select-none font-medium">I Accept these Terms and Conditions</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex items-center justify-end gap-3 border-t bg-gray-50">
           <button 
             onClick={onClose}
             className="px-6 py-2 rounded text-[#0c53b7] font-medium border border-[#0c53b7] hover:bg-blue-50 transition-colors uppercase text-sm"
           >
             Cancel
           </button>
           <button 
             onClick={() => {
                if (isChecked) {
                    onAccept();
                    onClose();
                }
             }}
             disabled={!isChecked}
             className={`px-6 py-2 rounded font-bold uppercase text-sm shadow-sm transition-all ${isChecked ? 'bg-[#0c53b7] hover:bg-[#0a469a] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
           >
             Accept
           </button>
        </div>
      </div>
    </div>
  );
};

export default OneClickTradingModal;
