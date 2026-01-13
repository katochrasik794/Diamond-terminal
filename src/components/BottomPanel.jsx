import React, { useRef } from 'react'

// Icons as components for cleaner usage
const TradeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22px" width="22px">
    <g><path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path><path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"></path><path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"></path><path d="M5.562,8.062a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,8.062Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,4.062Z"></path><path d="M5.562,14.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,14.5Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,10.5Z"></path><path d="M5.562,20.938a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,20.938Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,16.938Z"></path></g>
  </svg>
)

const NetTradeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="22px" width="22px">
    <path d="M200,154a29.87,29.87,0,0,0-19.5,7.23L154.88,141.3A29.83,29.83,0,0,0,158,128a30.52,30.52,0,0,0-.22-3.6L174,119a30,30,0,1,0-4-15,30.52,30.52,0,0,0,.22,3.6L154,113a29.91,29.91,0,0,0-32.42-14.31l-8.14-18.3a30,30,0,1,0-11,4.88l8.14,18.3A29.92,29.92,0,0,0,102.06,143L74,168a30.08,30.08,0,1,0,8,9L110,152a29.91,29.91,0,0,0,37.47-1.23l25.62,19.93A30,30,0,1,0,200,154Zm0-68a18,18,0,1,1-18,18A18,18,0,0,1,200,86ZM78,56A18,18,0,1,1,96,74,18,18,0,0,1,78,56ZM56,210a18,18,0,1,1,18-18A18,18,0,0,1,56,210Zm72-64a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm72,56a18,18,0,1,1,18-18A18,18,0,0,1,200,202Z"></path>
  </svg>
)

const HistoryIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22px" width="22px">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092zm-3.361-.97l.708-.707L8 7.792V4H7v4l.146.354 3 3z"></path>
  </svg>
)

const AlertsIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22px" width="22px"><path d="M289.7 403c-6.1 0-11.4 4.2-12.7 10.2-1 4.5-2.7 8.2-5 10.9-1.3 1.5-5.1 5.9-16.1 5.9-11 0-14.8-4.5-16.1-5.9-2.3-2.7-4-6.4-5-10.9-1.3-6-6.6-10.2-12.7-10.2-8.4 0-14.5 7.8-12.7 15.9 5 22.3 21 37.1 46.5 37.1s41.5-14.7 46.5-37.1c1.8-8.1-4.4-15.9-12.7-15.9zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.3-10.8-24.6-24-24.6h-.6c-13.2 0-24 11.3-24 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.1 0 25.4-18.8 15.6-31.8zm-39 5.8H139.8c-3.8 0-5.8-4.4-3.3-7.3 7-8 14.7-18.5 21-33.4 9.6-22.6 14.3-51.5 14.3-88.2 0-37.3 7-66.5 20.9-86.8 12.4-18.2 27.9-25.1 38.7-27.6 8.4-2 14.4-5.8 18.6-10.5 3.2-3.6 8.7-3.8 11.9-.2 5.1 5.7 12 9.1 18.8 10.7 10.8 2.5 26.3 9.4 38.7 27.6 13.9 20.3 20.9 49.5 20.9 86.8 0 36.7 4.7 65.6 14.3 88.2 6.5 15.2 14.4 25.9 21.5 33.9 2.2 2.7.4 6.8-3.1 6.8z"></path></svg>
)

const MailBoxIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22px" width="22px"><rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m112 160 144 112 144-112"></path></svg>
)

const ReportIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22px" width="22px"><path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"></path><path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"></path></svg>
)

const NewsIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22px" width="22px"><path fill="none" strokeLinejoin="round" strokeWidth="32" d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328"></path><path fill="none" strokeLinejoin="round" strokeWidth="32" d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48z"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"></path><path d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z"></path></svg>
)

const JournalsIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22px" width="22px"><path fillRule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"></path><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"></path><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"></path></svg>
)

const AccountsIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="22px" width="22px"><path d="M176,150h32a14,14,0,0,0,14-14V104a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H86V78H96a14,14,0,0,0,14-14V32A14,14,0,0,0,96,18H64A14,14,0,0,0,50,32V64A14,14,0,0,0,64,78H74V192a22,22,0,0,0,22,22h66v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V192a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H96a10,10,0,0,1-10-10V126h76v10A14,14,0,0,0,176,150ZM62,64V32a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H64A2,2,0,0,1,62,64ZM174,192a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Zm0-88a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Z"></path></svg>
)

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
)

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
)

const BottomPanel = () => {
    // Data from the user's snippet
    const trades = [
        { ticket: '3392908', time: '29-12-2025 07:24:24', type: 'Buy', amount: '1.00', symbol: 'VEDL Dec25', open: '610.65', current: '607.00', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-3.66', comment: '--' },
        { ticket: '3392907', time: '29-12-2025 07:24:10', type: 'Buy', amount: '1.00', symbol: 'VEDL Dec25', open: '610.60', current: '607.00', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-3.61', comment: 'Order Trigger' },
        { ticket: '3392904', time: '29-12-2025 05:59:57', type: 'Sell', amount: '1.00', symbol: 'CUMMINSIND Dec25', open: '4381.90', current: '4408.80', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-26.91', comment: 'One-click trading' },
        { ticket: '3392903', time: '29-12-2025 05:59:54', type: 'Buy', amount: '1.00', symbol: 'BOSCHLTD Dec25', open: '35915.00', current: '35650.00', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-265.01', comment: 'One-click trading' },
        { ticket: '3392902', time: '29-12-2025 05:59:07', type: 'Buy', amount: '1.00', symbol: 'BAJAJFINSV Dec25', open: '2006.40', current: '2035.40', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '+28.99', comment: 'One-click trading' },
        { ticket: '3392901', time: '29-12-2025 05:59:06', type: 'Sell', amount: '1.00', symbol: 'AXISBANK Dec25', open: '1221.40', current: '1245.40', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-24.01', comment: 'One-click trading' },
        { ticket: '3392899', time: '29-12-2025 05:59:02', type: 'Sell', amount: '1.00', symbol: 'ASHOKLEY Dec25', open: '174.64', current: '178.57', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-3.94', comment: 'One-click trading' },
        { ticket: '3392898', time: '29-12-2025 05:59:00', type: 'Buy', amount: '1.00', symbol: 'AMBUJACEM Dec25', open: '552.60', current: '549.85', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '-2.76', comment: 'One-click trading' },
        { ticket: '3392897', time: '29-12-2025 05:58:58', type: 'Sell', amount: '1.00', symbol: 'ADANIENT Dec25', open: '2230.80', current: '2215.90', sl: '--', tp: '--', comm: '-0.01', swap: '0.00', pl: '+14.89', comment: 'One-click trading' }
    ]

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
    <div className="flex h-full w-full bg-[#131722] text-white border-t border-[#2a2e39] font-sans">
      {/* Sidebar - Tabs */}
      <div className="w-[50px] flex-shrink-0 flex flex-col items-center border-r border-[#2a2e39] bg-[#131722] py-1">
         
         {/* Up Arrow */}
         <button onClick={scrollUp} className="w-full flex items-center justify-center py-1 hover:text-white text-gray-400 hover:bg-[#2a2e39]">
            <ChevronUpIcon />
         </button>

         <div ref={scrollRef} className="flex-1 w-full flex flex-col items-center gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
             {/* Using Buttons for tabs */}
             {[
                 { Icon: TradeIcon, active: true },
                 { Icon: NetTradeIcon },
                 { Icon: HistoryIcon },
                 { Icon: AlertsIcon },
                 { Icon: MailBoxIcon, badge: true },
                 { Icon: ReportIcon },
                 { Icon: NewsIcon },
                 { Icon: JournalsIcon },
                 { Icon: AccountsIcon },
             ].map((item, index) => (
                 <button 
                    key={index} 
                    className={`w-[40px] h-[34px] flex-shrink-0 flex items-center justify-center rounded hover:bg-[#2a2e39] transition-colors relative ${item.active ? 'text-white' : 'text-gray-500'}`}
                 >
                    <item.Icon />
                    {item.badge && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>}
                 </button>
             ))}
         </div>

         {/* Down Arrow */}
         <button onClick={scrollDown} className="w-full flex items-center justify-center py-1 hover:text-white text-gray-400 hover:bg-[#2a2e39]">
            <ChevronDownIcon />
         </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#131722]">
        {/* Table Container */}
        <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse min-w-[1200px]">
                <thead className="sticky top-0 bg-[#131722] z-10 text-xs text-gray-400 font-semibold shadow-sm">
                    <tr className="h-[42px] border-b border-[#2a2e39]">
                        <th className="p-2 w-[40px] text-center"><input type="checkbox" className="accent-blue-500" /></th>
                        <th className="p-2 font-medium">Ticket</th>
                        <th className="p-2 font-medium">Date/Time</th>
                        <th className="p-2 font-medium">Type</th>
                        <th className="p-2 font-medium">Amount</th>
                        <th className="p-2 font-medium">Symbol</th>
                        <th className="p-2 font-medium">Open Price</th>
                        <th className="p-2 font-medium">Current Price</th>
                        <th className="p-2 font-medium">S/L</th>
                        <th className="p-2 font-medium">T/P</th>
                        <th className="p-2 font-medium">Commission</th>
                        <th className="p-2 font-medium">Swap</th>
                        <th className="p-2 font-medium">P/L</th>
                        <th className="p-2 font-medium">Comment</th>
                        <th className="p-2 font-medium w-[80px] text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {trades.map((trade, idx) => (
                        <tr key={idx} className="h-[47px] border-b border-[#2a2e39]/50 hover:bg-[#2a2e39]/30 transition-colors">
                            <td className="p-2 text-center"><input type="checkbox" className="accent-blue-500" /></td>
                            <td className="p-2 text-white">{trade.ticket}</td>
                            <td className="p-2 text-white font-mono">{trade.time}</td>
                            <td className={`p-2 font-medium ${trade.type === 'Buy' ? 'text-[#00c853]' : 'text-red-500'}`}>{trade.type}</td>
                            <td className="p-2 text-white">{trade.amount}</td>
                            <td className="p-2 text-white">{trade.symbol}</td>
                            <td className="p-2 text-white">{trade.open}</td>
                            <td className="p-2 text-white">{trade.current}</td>
                            <td className="p-2 text-gray-500">{trade.sl}</td>
                            <td className="p-2 text-gray-500">{trade.tp}</td>
                            <td className="p-2 text-white">{trade.comm}</td>
                            <td className="p-2 text-white">{trade.swap}</td>
                            <td className={`p-2 font-medium ${trade.pl.startsWith('+') || (trade.pl !== '--' && parseFloat(trade.pl) >= 0) ? 'text-[#00c853]' : 'text-red-500'}`}>
                                {trade.pl}
                            </td>
                            <td className="p-2 text-gray-400">{trade.comment}</td>
                            <td className="p-2">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="text-gray-400 hover:text-white">
                                        <svg viewBox="0 0 24 24" height="15px" width="15px" fill="currentColor">
                                            <g><path d="M14.5,12c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,-0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,-0 2.5,1.12 2.5,2.5Zm-1,-0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,-0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5Z"></path><path d="M14.5,4.563c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,-0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,-0 2.5,1.12 2.5,2.5Zm-1,-0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,-0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5Z"></path><path d="M14.5,19.437c0,1.38 -1.12,2.5 -2.5,2.5c-1.38,0 -2.5,-1.12 -2.5,-2.5c0,-1.38 1.12,-2.5 2.5,-2.5c1.38,0 2.5,1.12 2.5,2.5Zm-1,0c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5Z"></path></g>
                                        </svg>
                                    </button>
                                    <button className="text-gray-400 hover:text-white">
                                        <svg viewBox="0 0 24 24" height="15px" width="15px" fill="currentColor"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {/* Pending Orders Row */}
                    <tr className="h-[47px] bg-[#1a1e29] border-b border-[#2a2e39]/50">
                        <td className="p-2 text-center">
                            <input type="checkbox" className="accent-blue-500" />
                        </td>
                        <td className="p-2 text-white font-medium" colSpan={3}>Pending Orders</td>
                        <td className="p-2 text-white">10.00</td>
                        <td colSpan={5}></td>
                        <td className="p-2 text-white font-bold">-0.10</td>
                        <td className="p-2 text-white">0.00</td>
                        <td className="p-2 text-white bg-[#1e2330]">-253.53</td>
                        <td colSpan={2}></td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Footer Status Bar */}
        <div className="h-[35px] flex-shrink-0 bg-[#151924] border-t border-[#2a2e39] flex items-center justify-between px-3">
             <div className="flex items-center">
                <div className="bg-[#1e2330] border border-[#2a2e39] rounded px-3 py-1 flex items-center">
                   <input 
                    type="text" 
                    placeholder="Symbol name or Ticket ID" 
                    className="bg-transparent text-xs text-white placeholder-gray-500 outline-none w-[150px]"
                   />
                </div>
             </div>
             
             <div className="flex items-center gap-4 text-[11px] font-bold text-gray-300">
                <span>Balance: <span className="text-white">1,000,002.08</span></span>
                <span>Credit: <span className="text-white">0.00</span></span>
                <span>Floating PL: <span className="text-white">-253.53</span></span>
                <span>Equity: <span className="text-white">999,748.55</span></span>
                <span>Used Margin: <span className="text-white">1,587.04</span></span>
                <span>Free Margin: <span className="text-white">998,161.51</span></span>
                <span>Margin Level: <span className="text-white">62,994.54%</span></span>
             </div>
        </div>
      </div>
    </div>
  )
}

export default BottomPanel
