
import TradingViewWidget from './TradingViewWidget'

const ChartSection = ({ theme }) => {
  const isDark = theme === 'dark';
  const desktopConfig = {
    "autosize": true,
    "symbol": "NSE:ABB",
    "interval": "1",
    "timezone": "Etc/UTC",
    "theme": isDark ? "dark" : "light",
    "style": "1",
    "locale": "en",
    "enable_publishing": false,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "details": false,
    "calendar": false,
    "show_popup_button": false,
    "popup_width": "1000",
    "popup_height": "650",
    "support_host": "https://www.tradingview.com",
    "backgroundColor": isDark ? "#131722" : "#ffffff",
    "gridLineColor": "rgba(42, 46, 57, 0)",
    "toolbar_bg": isDark ? "#124be9ff" : "#f1f3f6",
    "withdateranges": true,
    "hide_volume": false,
    "container_id": "tradingview_desktop"
  };

  return (
    <div className={`border-r rounded-none h-full w-full relative overflow-hidden transition-colors duration-200 ${isDark ? 'bg-[#131722] border-[#2a2e39]' : 'bg-white border-gray-200'}`}>
      <TradingViewWidget config={desktopConfig} />
    </div>
  )
}

export default ChartSection
