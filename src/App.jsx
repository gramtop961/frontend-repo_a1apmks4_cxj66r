import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} weavy — Automation Marketing Agency</p>
          <div className="flex items-center gap-4 text-white/60">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
