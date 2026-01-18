
import TradingViewWidget from './TradingViewWidget'

const ChartSection = () => {
  const desktopConfig = {
    "autosize": true,
    "symbol": "NSE:ABB",
    "interval": "1",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "enable_publishing": false,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "details": true,
    "calendar": false,
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650",
    "support_host": "https://www.tradingview.com",
    "backgroundColor": "rgba(19, 23, 34, 1)",
    "gridLineColor": "rgba(42, 46, 57, 0)",
    "toolbar_bg": "#131722",
    "withdateranges": true,
    "hide_volume": false,
    "container_id": "tradingview_desktop"
  };

  return (
    <div className="bg-[#131722] border-r border-[#2a2e39] rounded-none h-full w-full relative overflow-hidden">
      <TradingViewWidget config={desktopConfig} />
    </div>
  )
}

export default ChartSection
