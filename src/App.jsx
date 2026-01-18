import { useState } from 'react'
import Navbar from './components/Navbar'
import ChartSection from './components/ChartSection'
import RightSidebar from './components/RightSidebar'
import BottomPanel from './components/BottomPanel'
import MobileFooter from './components/MobileFooter'
import MobileHome from './components/MobileHome'
import MobileChart from './components/MobileChart'
import MobileTrade from './components/MobileTrade'
import MobileHistory from './components/MobileHistory'
import './App.css'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable"

function App() {
  // Mobile view state
  const [mobileView, setMobileView] = useState('home');

  // Calculate default width percentage to aim for ~440px width
  // Available width = Window - LeftToolbar(52) - Divider(3) - Padding(8) ≈ Window - 63
  const chromeWidth = 63;
  const targetRightPx = 440;
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const availableWidth = windowWidth - chromeWidth;
  
  // Calculate percentage, clamped reasonably to prevent layout breaking on extreme screen sizes
  // clamping between 5% and 50%
  const rightSize = Math.max(5, Math.min(50, (targetRightPx / availableWidth) * 100));
  const chartSize = 100 - rightSize;

  const getMobileTitle = () => {
    switch(mobileView) {
      case 'chart': return 'Chart';
      case 'trade': return 'Trades';
      case 'history': return 'History';
      default: return 'Quotes';
    }
  };

  const historyIcons = (
    <>
      <button className="text-white hover:text-gray-300 transition-colors">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20">
          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152"></path>
          <path d="m233.38 278.63-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26 33.21 33.21 0 0 1-8.07-7.94z"></path>
        </svg>
      </button>
      <button className="text-white hover:text-gray-300 transition-colors">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4a9 9 0 0 0 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3a9 9 0 0 0-9 9H1z"></path>
        </svg>
      </button>
    </>
  );

  const tradeRightContent = (
    <span className="text-white text-sm font-medium">Total Balance: 1,000,002.08</span>
  );

  return (
    <div className="h-screen flex flex-col bg-[#0f0f1e] overflow-hidden">
      <Navbar 
        title={getMobileTitle()} 
        showMobileIcons={mobileView === 'home'} 
        rightContent={
          mobileView === 'history' ? historyIcons : 
          mobileView === 'trade' ? tradeRightContent : null
        }
      />
      <div className="flex-1 min-h-0 p-1 flex flex-col">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-1 min-h-0 flex-col">
            <div className="flex flex-1 min-h-0">
              <div className="flex-1 min-w-0 h-full">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={chartSize}>
                     <ChartSection />
                  </ResizablePanel>
                  <ResizableHandle className="w-[3px] bg-[#2a2e39] transition-colors duration-200" />
                  <ResizablePanel defaultSize={rightSize} minSize={5}>
                     <RightSidebar />
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
            <div className="h-[3px] bg-[#2a2e39] transition-colors duration-200"></div>
            <div className="h-[210px] flex-shrink-0">
              <BottomPanel />
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex-1 min-h-0 flex flex-col">
          {mobileView === 'home' && <MobileHome />}
          {mobileView === 'chart' && <MobileChart />}
          {mobileView === 'trade' && <MobileTrade />}
          {mobileView === 'history' && <MobileHistory />}
          {/* Fallback/Placeholders for other tabs could go here */}
          {(mobileView !== 'home' && mobileView !== 'chart' && mobileView !== 'trade' && mobileView !== 'history') && <MobileHome />}
        </div>
      </div>
      <MobileFooter activeView={mobileView} onViewChange={setMobileView} />
    </div>
  )
}

export default App
