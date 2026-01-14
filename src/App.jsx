import Navbar from './components/Navbar'
import ChartSection from './components/ChartSection'
import RightSidebar from './components/RightSidebar'
import BottomPanel from './components/BottomPanel'
import LeftToolbar from './components/LeftToolbar'
import './App.css'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable"

function App() {
  return (
   
    <div className="h-screen flex flex-col bg-[#0f0f1e] overflow-hidden">
      <Navbar />
      <div className="flex-1 min-h-0 p-1 flex flex-col">
        <div className="flex flex-1 min-h-0">
          <div className="flex-shrink-0"> 
             <LeftToolbar />
          </div>
          <div className="w-[3px] bg-[#2a2e39] transition-colors duration-200"></div>
          <div className="flex-1 min-w-0 h-full">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={78}>
                 <ChartSection />
              </ResizablePanel>
              <ResizableHandle className="w-[3px] bg-[#2a2e39] transition-colors duration-200" />
              <ResizablePanel defaultSize={22} minSize={10}>
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
    </div>
    
  )
}

export default App
