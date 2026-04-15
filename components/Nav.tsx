'use client'

import { useEffect, useState, useRef } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > 50)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden
          ? '-translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="tāst Coffee home">
          <Logo variant="ivory" />
        </a>
        <a
          href="#apply"
          className="font-mono text-xs uppercase tracking-wider text-white border border-white/30 px-5 py-2 rounded-full hover:border-tast-pink hover:text-tast-pink transition-colors duration-200"
        >
          Apply
        </a>
      </div>
    </nav>
  )
}
