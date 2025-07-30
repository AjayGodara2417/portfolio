'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navItems = ['Features', 'Pricing', 'Testimonials', 'FAQ']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ADmyBRAND AI
        </Link>
        

        <div className='flex items-center space-x-4'>
        <ThemeToggle />
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm relative group hover:text-primary transition">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        </div>

        

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm font-medium">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
