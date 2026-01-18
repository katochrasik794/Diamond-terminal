import React, { useState } from 'react';

const MobileHistory = () => {
    const [activeTab, setActiveTab] = useState('trades');

    const historyStats = [
        { label: 'Total Amount', value: '0.00' },
        { label: 'Deposit', value: '0.00' },
        { label: 'Withdrawal', value: '0.00' },
        { label: 'Adjustment', value: '0.00' },
        { label: 'Credit In', value: '0.00' },
        { label: 'Credit Out', value: '0.00' },
    ];

    return (
        <div className="flex-1 overflow-hidden bg-[#131722] text-white flex flex-col font-sans">
             <div className="p-4 pb-2">
                
                {/* Tabs */}
                <div className="flex items-center justify-between border-b border-gray-800 mb-4">
                    <div className="flex gap-6">
                        <button 
                            className={`pb-3 text-sm font-medium border-b-[2px] transition-colors relative top-[1px] ${activeTab === 'trades' ? 'border-[#2196f3] text-[#2196f3]' : 'border-transparent text-gray-400'}`}
                            onClick={() => setActiveTab('trades')}
                        >
                            Trades
                        </button>
                         <button 
                            className={`pb-3 text-sm font-medium border-b-[2px] transition-colors relative top-[1px] ${activeTab === 'orders' ? 'border-[#2196f3] text-[#2196f3]' : 'border-transparent text-gray-400'}`}
                            onClick={() => setActiveTab('orders')}
                        >
                            Orders
                        </button>
                        <button 
                            className={`pb-3 text-sm font-medium border-b-[2px] transition-colors relative top-[1px] ${activeTab === 'transaction' ? 'border-[#2196f3] text-[#2196f3]' : 'border-transparent text-gray-400'}`}
                            onClick={() => setActiveTab('transaction')}
                        >
                            Transaction
                        </button>
                    </div>
                     <button className="pb-3 text-white">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20"><path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29 448 448"></path></svg>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {historyStats.map((item, index) => (
                        <div key={index} className="flex justify-between">
                            <span className="text-xs text-gray-400">{item.label}</span>
                            <span className="text-xs font-medium text-white">{item.value}</span> 
                        </div>
                    ))}
                </div>
             </div>

             {/* Content Area */}
             <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                 <p className="text-sm font-medium text-gray-400">No data available</p>
             </div>
        </div>
    );
};

export default MobileHistory;
