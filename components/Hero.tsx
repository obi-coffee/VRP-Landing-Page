'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const VIDEO_URL =
  'https://tastcoffee.com/cdn/shop/videos/c/vp/1d2d041a7bb641768fb04243fb10cd2d/1d2d041a7bb641768fb04243fb10cd2d.HD-1080p-7.2Mbps-40602647.mp4?v=0'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
            <span className="block font-mono font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
              Your Coffee
            </span>
            <span className="block font-serif italic text-white/80 text-[clamp(1.5rem,4vw,3rem)] leading-tight mt-2">
              deserves to be
            </span>
            <span className="block font-mono font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
              Found.
            </span>
          </h1>

          <div className="bg-tast-pink text-white max-w-xl mx-auto p-8 mt-10">
            <p className="font-mono text-xs uppercase tracking-widest mb-3 opacity-80">
              tāst &bull; platform
            </p>
            <p className="font-serif text-lg leading-relaxed italic">
              A specialty coffee discovery app connecting roasters with the
              people who&apos;ll love their beans most.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#apply"
              className="inline-block font-serif italic text-lg text-white border-b border-white/40 pb-1 hover:border-tast-pink hover:text-tast-pink transition-colors duration-200"
            >
              Become a Founding Partner
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
    </section>
  )
}
