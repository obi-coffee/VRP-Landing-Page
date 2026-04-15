'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const VIDEO_URL =
  'https://tastcoffee.com/cdn/shop/videos/c/vp/1d2d041a7bb641768fb04243fb10cd2d/1d2d041a7bb641768fb04243fb10cd2d.HD-1080p-7.2Mbps-40602647.mp4?v=0'

const ROASTERS = [
  { name: 'Olympia Coffee Roasting', city: 'Olympia', state: 'WA' },
  { name: 'Blueprint Coffee', city: 'St. Louis', state: 'MO' },
  { name: 'Small Planes Coffee', city: 'Washington', state: 'DC' },
  { name: 'Sepia Coffee Project', city: 'Detroit', state: 'MI' },
  { name: 'Apiary Coffee Roasters', city: 'Washington', state: 'DC' },
  { name: 'Portrait Coffee', city: 'Atlanta', state: 'GA' },
  { name: 'Goodboybob', city: 'California', state: '' },
]

function TickerContent() {
  return (
    <>
      <span className="font-handwritten text-white text-lg md:text-xl whitespace-nowrap mx-4">
        Who all gon&apos; be there?
      </span>
      <span className="text-tast-pink mx-2" aria-hidden="true">&bull;</span>
      {ROASTERS.map((r) => (
        <span key={r.name} className="whitespace-nowrap">
          <span className="font-mono text-xs uppercase tracking-wider text-white">
            {r.name}, {r.city}{r.state ? `, ${r.state}` : ''}
          </span>
          <span className="text-tast-pink mx-4" aria-hidden="true">&bull;</span>
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* London Fog fallback — lowest layer */}
      <div className="absolute inset-0 z-0 bg-london-fog" aria-hidden="true" />

      {/* Background video — above fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 z-[1] w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay — above video, below content */}
      <div
        className="absolute inset-0 z-[2] bg-rich-black/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 pt-24 pb-16 flex flex-col items-center flex-1 w-full">
        <ScrollReveal className="text-center max-w-4xl mx-auto my-auto">
          <h1 className="mb-8">
            <span className="block font-sans font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
              The Platform
            </span>
            <span className="block font-sans font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
              Specialty Coffee
            </span>
            <span className="block font-sans font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
              Deserves.
            </span>
            <span className="block font-editorial italic text-white/80 text-[clamp(1.25rem,3vw,2rem)] leading-tight mt-4">
              built by people who actually drink it.
            </span>
          </h1>

          <div className="max-w-2xl mx-auto mt-10">
            <p className="font-serif text-lg leading-relaxed text-white/80 italic">
              The world doesn&apos;t need more coffee. It needs a better way to
              discover, remember, and share the great coffee already out there.
              Your coffee.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#apply"
              className="inline-block font-editorial italic text-lg text-white border-b border-white/40 pb-1 hover:border-tast-pink hover:text-tast-pink transition-colors duration-200"
            >
              Become a Founding Roaster Partner
            </a>
          </div>
        </ScrollReveal>

        <div className="scroll-indicator mt-auto pt-12">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            className="opacity-60"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Roaster ticker */}
      <div className="relative z-10 bg-rich-black/60 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
        <div className="ticker-track" aria-label="Verified Roaster Partners">
          <TickerContent />
          <TickerContent />
        </div>
      </div>
    </section>
  )
}
