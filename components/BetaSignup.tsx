'use client'

import { useState, type FormEvent } from 'react'
import ScrollReveal from './ScrollReveal'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function BetaSignup() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
    }

    try {
      const res = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Submission failed')
      setState('success')
      form.reset()
    } catch {
      setState('error')
    }
  }

  return (
    <section id="beta" className="py-24 md:py-32 px-6 bg-rich-black">
      <ScrollReveal className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-tast-pink mb-4">
          For Coffee Lovers
        </p>
        <h2 className="font-sans font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white mb-4">
          Be the First to Taste.
        </h2>
        <p className="font-serif text-lg text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
          We&apos;re building a better way to discover specialty coffee.
          Drop your email and we&apos;ll let you know when the beta is ready.
        </p>

        {state === 'success' ? (
          <div className="py-6">
            <p className="font-editorial italic text-xl text-tast-pink mb-2">
              You&apos;re on the list.
            </p>
            <p className="font-sans text-sm text-white/50">
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                name="firstName"
                type="text"
                required
                placeholder="First name"
                className="bg-white/10 border border-white/20 rounded-full px-5 py-3 font-sans text-base text-white placeholder:text-white/30 focus:border-tast-pink focus:outline-none transition-colors"
                aria-label="First name"
              />
              <input
                name="lastName"
                type="text"
                required
                placeholder="Last name"
                className="bg-white/10 border border-white/20 rounded-full px-5 py-3 font-sans text-base text-white placeholder:text-white/30 focus:border-tast-pink focus:outline-none transition-colors"
                aria-label="Last name"
              />
            </div>
            <div className="flex gap-3">
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 font-sans text-base text-white placeholder:text-white/30 focus:border-tast-pink focus:outline-none transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={state === 'submitting'}
                className="bg-tast-pink text-white font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-tast-red transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {state === 'submitting' ? 'Joining...' : 'Join Beta'}
              </button>
            </div>

            {state === 'error' && (
              <p className="mt-4 font-sans text-sm text-tast-pink" role="alert">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="mt-4 font-sans text-xs text-white/30">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        )}
      </ScrollReveal>
    </section>
  )
}
