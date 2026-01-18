import React from 'react';
import TradingViewWidget from './TradingViewWidget';

const MobileChart = () => {
  return (
    <div className="flex-1 w-full h-full bg-[#131722] relative">
      {/* 
        We use the customized TradingViewWidget which accepts config props.
        We enable the side toolbar to match the user's mobile chart view code/screenshot.
        We match the background color #131722.
      */}
      <TradingViewWidget 
        config={{
          "symbol": "NSE:ABB", 
          "interval": "1", 
          "hide_side_toolbar": false, 
          "hide_top_toolbar": false,
          "details": false, 
          "hotlist": false,
          "calendar": false,
          "backgroundColor": "#131722",
          "enable_publishing": false,
          "hide_legend": false,
          "save_image": true,
          "autosize": true
        }} 
      />
    </div>
  );
};

export default MobileChart;
