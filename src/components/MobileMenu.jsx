import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex font-sans">
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div 
                className={`relative w-[300px] h-full bg-[#333333] text-white flex flex-col shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Header Section */}
                <div className="px-5 pt-8 pb-2 flex flex-col items-start bg-[#333333]">
                    {/* Logo */}
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <div className="w-5 h-5 bg-[#2196f3] transform rotate-45 flex items-center justify-center">
                            <div className="w-2 h-2 bg-black/20 rounded-full"></div>
                        </div>
                    </div>
                    
                    <h6 className="text-[18px] font-bold mb-1 text-white">DEMODXB11</h6>
                    <span className="text-[13px] text-gray-400 font-medium mb-6">Account ID : 101209</span>
                    
                    {/* Manage Account Row */}
                    <button className="w-full flex items-center justify-between py-2 text-white hover:bg-white/5 transition-colors group">
                        <span className="text-[17px] font-bold">Manage Account</span>
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </button>
                </div>

                <div className="h-[1px] bg-gray-600 w-full"></div>

                {/* List Items */}
                <div className="flex-1 overflow-y-auto">
                    {[
                        { label: 'Reports' },
                        { label: 'Journal' },
                        { label: 'News' },
                        { label: 'Alerts' },
                        { label: 'Settings' },
                        { label: 'About Us' },
                        { label: 'Logout' }
                    ].map((item, index) => (
                        <button 
                            key={index}
                            className="w-full flex items-center justify-between px-5 py-2 hover:bg-white/5 transition-colors text-left"
                        >
                            <span className="text-[17px] font-bold text-white">{item.label}</span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
