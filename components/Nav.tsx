'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-london-fog/90 backdrop-blur-md shadow-sm'
          : 'bg-london-fog'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="tāst Coffee home">
          <Logo />
        </a>
        <a
          href="#apply"
          className="font-mono text-sm uppercase tracking-wider text-rich-black border border-rich-black/20 px-5 py-2 hover:border-tast-pink hover:text-tast-pink transition-colors duration-200"
        >
          Apply
        </a>
      </div>
    </nav>
  )
}
