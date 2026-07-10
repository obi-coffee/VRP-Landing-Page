'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Logo from '@/components/Logo'
import { HERO_VIDEO_URL } from '@/lib/constants'

// idle → checking → (wrong) → fadeout → granted → leaving
type Phase = 'idle' | 'checking' | 'wrong' | 'fadeout' | 'granted' | 'leaving'

// 16:9 dark rich-black placeholder shown until the video paints its first frame
const POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='100%25' height='100%25' fill='%231A1A1A'/%3E%3C/svg%3E"

export default function Gate() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [mounted, setMounted] = useState(false)

  // Gentle fade-in on arrival
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPhase('checking')

    const password = new FormData(e.currentTarget).get('password')

    try {
      const res = await fetch('/api/gate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setPhase('wrong')
        return
      }

      // form fades out → message eases in → whole screen fades → enter site.
      // Hard navigation (not router.push) so the middleware re-checks the
      // fresh cookie — the client router may have cached the pre-auth
      // redirect for '/'.
      setPhase('fadeout')
      setTimeout(() => setPhase('granted'), 400)
      setTimeout(() => setPhase('leaving'), 2100)
      setTimeout(() => {
        window.location.assign('/')
      }, 2800)
    } catch {
      setPhase('wrong')
    }
  }

  const showForm = phase === 'idle' || phase === 'checking' || phase === 'wrong'
  const showMessage = phase === 'granted' || phase === 'leaving'

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Rich-black fallback — lowest layer, matches the poster */}
      <div className="absolute inset-0 z-0 bg-rich-black" aria-hidden="true" />

      {/* Background video — above fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        className="absolute inset-0 z-[1] w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay — above video, below content */}
      <div className="absolute inset-0 z-[2] bg-rich-black/40" aria-hidden="true" />

      {/* Exit curtain — fades everything to rich black before the site loads */}
      <div
        className={`absolute inset-0 z-20 bg-rich-black pointer-events-none transition-opacity duration-700 ease-in-out ${
          phase === 'leaving' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Content — fades in on mount */}
      <div
        className={`relative z-10 flex flex-col items-center transition-opacity duration-700 ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`mb-12 transition-all duration-500 ease-in-out ${
            showMessage ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          <Logo variant="ivory" />
        </div>

        {/* Stacked layers so the form and the message crossfade in place */}
        <div className="relative w-full max-w-sm min-h-[260px]">
          {/* The ask */}
          <div
            className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-500 ease-in-out ${
              showForm
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-3 pointer-events-none'
            }`}
          >
            <p className="font-editorial italic text-white/80 text-2xl mb-10">
              Good morning. What&apos;s the magic word(s)?
            </p>

            <form onSubmit={handleSubmit} noValidate className="w-full">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoFocus
                autoComplete="off"
                placeholder="password"
                onChange={() => phase === 'wrong' && setPhase('idle')}
                className="w-full bg-transparent border-b border-white/30 py-3 text-center font-mono text-base text-white placeholder:text-white/30 tracking-widest focus:border-tast-pink focus:outline-none transition-colors duration-300"
              />

              <p
                className={`font-mono text-xs uppercase tracking-wider mt-4 h-4 transition-opacity duration-300 ${
                  phase === 'wrong' ? 'text-tast-pink opacity-100' : 'opacity-0'
                }`}
                role="alert"
              >
                nope. try again.
              </p>

              <button
                type="submit"
                disabled={phase !== 'idle' && phase !== 'wrong'}
                className="mt-8 bg-tast-pink text-white font-mono text-xs uppercase tracking-wider px-12 py-4 rounded-full hover:bg-tast-red transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {phase === 'checking' ? 'Checking...' : 'Enter'}
              </button>
            </form>
          </div>

          {/* The answer */}
          <div
            className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ease-out ${
              showMessage
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
            }`}
            role="status"
            aria-live="polite"
          >
            <p className="font-handwritten text-tast-pink text-[clamp(3rem,10vw,6rem)] leading-none whitespace-nowrap">
              yes you can!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
