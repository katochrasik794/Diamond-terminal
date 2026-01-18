const MobileFooter = ({ activeView, onViewChange }) => {
    return (
      <div className="md:hidden flex h-[60px] bg-[#0b1219] border-t border-gray-800 w-full flex-shrink-0 z-50">
        <div className="flex w-full items-center justify-around h-full">
          {/* Home */}
          <button 
            onClick={() => onViewChange('home')}
            className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${activeView === 'home' ? 'text-[#2196f3]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24px" width="24px">
               <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"></path>
               <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"></path>
            </svg>
            <span className="text-[10px] font-medium">Home</span>
          </button>
  
          {/* Chart */}
          <button 
            onClick={() => onViewChange('chart')}
            className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${activeView === 'chart' ? 'text-[#2196f3]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="24px" width="24px">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"></path>
            </svg>
            <span className="text-[10px] font-medium">Chart</span>
          </button>
  
          {/* Trade */}
          <button 
            onClick={() => onViewChange('trade')}
            className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${activeView === 'trade' ? 'text-[#2196f3]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="21px" width="21px">
               <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"></path>
            </svg>
            <span className="text-[10px] font-medium">Trade</span>
          </button>
  
          {/* History */}
          <button 
            onClick={() => onViewChange('history')}
            className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${activeView === 'history' ? 'text-[#2196f3]' : 'text-gray-400 hover:text-gray-200'}`}
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="21px" width="21px">
               <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
               <path d="M3 3v5h5"></path>
               <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
               <path d="M16 16h5v5"></path>
            </svg>
            <span className="text-[10px] font-medium">History</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default MobileFooter;
  
