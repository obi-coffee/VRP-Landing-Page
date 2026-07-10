'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

type GateState = 'idle' | 'checking' | 'wrong' | 'granted'

export default function Gate() {
  const router = useRouter()
  const [state, setState] = useState<GateState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('checking')

    const password = new FormData(e.currentTarget).get('password')

    try {
      const res = await fetch('/api/gate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setState('wrong')
        return
      }

      setState('granted')
      setTimeout(() => {
        router.push('/')
        router.refresh()
      }, 1600)
    } catch {
      setState('wrong')
    }
  }

  return (
    <main className="min-h-screen bg-rich-black flex flex-col items-center justify-center px-6">
      <div className="mb-12">
        <Logo variant="ivory" />
      </div>

      {state === 'granted' ? (
        <div className="text-center" role="status" aria-live="polite">
          <p className="font-handwritten text-tast-pink text-[clamp(3rem,10vw,6rem)] leading-none">
            yes you can!
          </p>
        </div>
      ) : (
        <div className="w-full max-w-sm text-center">
          <p className="font-editorial italic text-white/80 text-2xl mb-10">
            Can I kick it?
          </p>

          <form onSubmit={handleSubmit} noValidate>
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
              onChange={() => state === 'wrong' && setState('idle')}
              className="w-full bg-transparent border-b border-white/30 py-3 text-center font-mono text-base text-white placeholder:text-white/30 tracking-widest focus:border-tast-pink focus:outline-none transition-colors"
            />

            <p
              className={`font-mono text-xs uppercase tracking-wider mt-4 h-4 transition-opacity ${
                state === 'wrong' ? 'text-tast-pink opacity-100' : 'opacity-0'
              }`}
              role="alert"
            >
              nope. try again.
            </p>

            <button
              type="submit"
              disabled={state === 'checking'}
              className="mt-8 bg-tast-pink text-white font-mono text-xs uppercase tracking-wider px-12 py-4 rounded-full hover:bg-tast-red transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === 'checking' ? 'Checking...' : 'Enter'}
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
