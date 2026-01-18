import React from 'react';
import { Clock, BarChart2 } from 'lucide-react';

const MobileHome = () => {
  const data = [
    { 
      symbol: 'DMART Dec25', 
      change: '-0.94%', 
      isPositive: false, 
      time: '11:59:58', 
      spread: '390', 
      bid: '3752.90', 
      low: '3750.70', 
      ask: '3756.80', 
      high: '3818.90' 
    },
    { 
      symbol: 'Silver Mini Feb26', 
      change: '0.53%', 
      isPositive: true, 
      time: '12:23:43', 
      spread: '69', 
      bid: '272176.00', 
      low: '267500', 
      ask: '272245.00', 
      high: '274300' 
    },
    { 
        symbol: 'Silver MCX Mar26', 
        change: '0.48%', 
        isPositive: true, 
        time: '12:23:43', 
        spread: '50', 
        bid: '270250.00', 
        low: '266037', 
        ask: '270300.00', 
        high: '272202' 
    },
    { 
        symbol: 'Gold Feb26', 
        change: '-0.34%', 
        isPositive: false, 
        time: '12:23:42', 
        spread: '23', 
        bid: '141550.00', 
        low: '141311', 
        ask: '141573.00', 
        high: '142206' 
    },
    { 
        symbol: 'ABB Dec25', 
        change: '-0.22%', 
        isPositive: false, 
        time: '11:59:48', 
        spread: '1050', 
        bid: '5154.50', 
        low: '5100.00', 
        ask: '5165.00', 
        high: '5173.00' 
    },
    { 
        symbol: 'ABCAPITAL Dec25', 
        change: '0.22%', 
        isPositive: true, 
        time: '11:59:50', 
        spread: '80', 
        bid: '347.65', 
        low: '346.25', 
        ask: '348.45', 
        high: '350.90' 
    },
    { 
        symbol: 'ADANIENT Dec25', 
        change: '0.34%', 
        isPositive: true, 
        time: '11:59:42', 
        spread: '340', 
        bid: '2212.50', 
        low: '2196.50', 
        ask: '2215.90', 
        high: '2217.80' 
    }
  ];

  const formatPrice = (price) => {
    // Splits price into "main" and "sub" parts (last 2 digits are sub/emphasized in some contexts, but here user wants specific font sizes)
    // User HTML: 3752. (15px) 90 (22px).
    // So split at the decimal point? Or last 2 chars?
    // "3752.90" -> "3752." and "90"
    // "272176.00" -> "272176." and "00"
    if (!price) return { main: '', sub: '' };
    const parts = price.split('.');
    if (parts.length < 2) return { main: price, sub: '' };
    return { main: parts[0] + '.', sub: parts[1] };
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0c53b7] overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-white rounded-t-[24px] pt-6 pb-20">
        {data.map((item, index) => {
          const bidParts = formatPrice(item.bid);
          const askParts = formatPrice(item.ask);

          return (
            <div key={index} className="flex items-center justify-between px-5 py-3  border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              {/* Left Side */}
              <div className="flex flex-col gap-1.5">
                <span className={`text-[11px] font-medium leading-none ${item.isPositive ? 'text-[#00c853]' : 'text-[#ef4444]'}`}>
                  {item.change}
                </span>
                <span className="text-gray-900 text-[16px] font-bold tracking-tight loading-none">
                  {item.symbol}
                </span>
                <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-medium mt-0.5">
                  <span>{item.time}</span>
                  <BarChart2 className="w-3 h-3 text-gray-400" />
                  <span>{item.spread}</span>
                </div>
              </div>

              {/* Right Side - Prices */}
              <div className="flex items-center gap-4">
                {/* Bid / Low */}
                <div className="flex flex-col items-end gap-1">
                  <div className={`flex items-baseline ${item.isPositive ? 'text-[#00c853]' : 'text-[#ef4444]'}`}>
                     <span className="text-[15px] font-bold">{bidParts.main}</span>
                     <span className="text-[20px] font-bold leading-none">{bidParts.sub}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
                    L:<span className="text-gray-500 ml-1">{item.low}</span>
                  </div>
                </div>

                 {/* Ask / High */}
                 <div className="flex flex-col items-end gap-1">
                  <div className={`flex items-baseline ${item.isPositive ? 'text-[#00c853]' : 'text-[#ef4444]'}`}>
                     <span className="text-[15px] font-bold">{askParts.main}</span>
                     <span className="text-[20px] font-bold leading-none">{askParts.sub}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
                    H:<span className="text-gray-500 ml-1">{item.high}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileHome;
