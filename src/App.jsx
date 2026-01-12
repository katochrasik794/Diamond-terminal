import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1e]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center">
          Diamond Markets Trading Platform
        </h1>
        <p className="text-gray-400 text-center mt-4">
          Your professional trading interface
        </p>
      </main>
    </div>
  )
}

export default App
