import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-cyan-400 shadow-lg" />
              <span className="text-white text-xl font-semibold tracking-tight">weavy</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-white/90 hover:text-white py-2" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
