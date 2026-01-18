import React, { useState } from 'react';

const MobileTrade = () => {
    const [activeTab, setActiveTab] = useState('trades');

    const tradeData = {
        totalBalance: '1,000,002.08',
        pl: '-253.53',
        freeMargin: '998,161.51',
        equity: '999,748.55',
        usedMargin: '1,587.04',
        credit: '0.00',
        marginLevel: '62994.54%',
        positions: [
            { symbol: 'AXISBANK Dec25', type: 'Sell', size: '1.00', open: '1221.40', current: '1245.40', pl: '-24.01', isProfit: false },
            { symbol: 'BAJAJFINSV Dec25', type: 'Buy', size: '1.00', open: '2006.40', current: '2035.40', pl: '28.99', isProfit: true },
            { symbol: 'BOSCHLTD Dec25', type: 'Buy', size: '1.00', open: '35915.00', current: '35650.00', pl: '-265.01', isProfit: false },
            { symbol: 'CUMMINSIND Dec25', type: 'Sell', size: '1.00', open: '4381.90', current: '4408.80', pl: '-26.91', isProfit: false },
            { symbol: 'VEDL Dec25', type: 'Buy', size: '1.00', open: '610.60', current: '607.00', pl: '-3.61', isProfit: false },
            { symbol: 'VEDL Dec25', type: 'Buy', size: '1.00', open: '610.65', current: '607.00', pl: '-3.66', isProfit: false },
            { symbol: 'ABB Dec25', type: 'Sell', size: '1.00', open: '5197.50', current: '5165.00', pl: '32.49', isProfit: true },
            { symbol: 'ADANIENT Dec25', type: 'Sell', size: '1.00', open: '2230.80', current: '2215.90', pl: '14.89', isProfit: true },
            { symbol: 'AMBUJACEM Dec25', type: 'Buy', size: '1.00', open: '552.60', current: '549.85', pl: '-2.76', isProfit: false },
            { symbol: 'ASHOKLEY Dec25', type: 'Sell', size: '1.00', open: '174.64', current: '178.57', pl: '-3.94', isProfit: false },
        ]
    };

    return (
        <div className="flex-1 overflow-hidden bg-[#131722] text-white flex flex-col font-sans">
            {/* Header / Summary Section */}
            <div className="p-4 pb-2">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    <div className="flex justify-between">
                        <span className="text-xs text-gray-400">P/L</span>
                        <span className="text-xs font-medium text-[#ef4444]">{tradeData.pl}</span> 
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Free Margin</span>
                        <span className="text-xs font-medium">{tradeData.freeMargin}</span>
                    </div>
                    
                    <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Equity</span>
                        <span className="text-xs font-medium">{tradeData.equity}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Used Margin</span>
                        <span className="text-xs font-medium">{tradeData.usedMargin}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Credit</span>
                        <span className="text-xs font-medium">{tradeData.credit}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Margin Level</span>
                        <span className="text-xs font-medium">{tradeData.marginLevel}</span>
                    </div>
                </div>
                
                {/* Tabs & Sort Button */}
                <div className="flex items-center justify-between border-b border-gray-800 mt-2">
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
                    </div>
                    <button className="p-2 text-white">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20"><path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29 448 448"></path></svg>
                    </button>
                </div>
            </div>

            {/* List */}
             <div className="flex-1 overflow-y-auto">
                {tradeData.positions.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border-b border-gray-800 hover:bg-[#1e222d] transition-colors">
                        <div className="flex flex-col gap-1">
                             <div className="flex items-baseline gap-2">
                                <span className="text-sm font-medium text-white">{item.symbol.split(' ')[0]} <span className="text-xs text-gray-400 font-normal">{item.symbol.split(' ').slice(1).join(' ')}</span></span>
                                <span className={`text-xs ${item.type === 'Buy' ? 'text-[#2196f3]' : 'text-[#ef4444]'}`}>{item.type} {item.size}</span>
                             </div>
                             <div className="text-xs text-gray-500">
                                {item.open} <span className="text-gray-600">→</span> <span className="text-white">{item.current}</span>
                             </div>
                        </div>
                        <div className="flex items-center gap-3">
                             <span className={`text-sm font-medium ${item.isProfit ? 'text-[#00c853]' : 'text-[#ef4444]'}`}>{item.pl}</span>
                             <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    );
};

export default MobileTrade;
