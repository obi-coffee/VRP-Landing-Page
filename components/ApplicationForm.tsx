'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const hearAboutOptions = [
  'Instagram',
  'Word of mouth',
  'Trade show / event',
  'Mill City Roasters',
  'Web search',
  'Other',
]

const interestOptions = [
  'Reaching new customers',
  'Consumer taste data & insights',
  'Building our brand profile',
  'The marketplace / direct sales',
  'All of the above',
]

function InputField({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  prefix,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  prefix?: string
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block font-sans text-sm text-rich-black/60 mb-1"
      >
        {label}
        {required && <span className="text-tast-pink ml-1" aria-hidden="true">*</span>}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-0 bottom-2 text-rich-black/40 font-sans text-base">
            {prefix}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`w-full bg-transparent border-b border-rich-black/20 py-2 font-sans text-base text-rich-black placeholder:text-rich-black/30 focus:border-tast-pink focus:outline-none transition-colors ${
            prefix ? 'pl-5' : ''
          }`}
          aria-required={required}
        />
      </div>
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-sans text-sm text-rich-black/60 mb-1"
      >
        {label}
        {required && <span className="text-tast-pink ml-1" aria-hidden="true">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-rich-black/20 py-2 font-sans text-base text-rich-black focus:border-tast-pink focus:outline-none transition-colors appearance-none cursor-pointer"
        defaultValue=""
        aria-required={required}
      >
        <option value="" disabled>
          Select one...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function ApplicationForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Submission failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <section id="apply" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight mb-6">
            We got you.
          </h2>
          <p className="font-serif text-lg text-rich-black/70 mb-10">
            Expect to hear from us within 48 hours. In the meantime, grab a cup
            of something good.
          </p>
          <a
            href="#"
            className="inline-block font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
          >
            Back to top
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="pt-12 pb-24 md:pt-16 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight mb-4">
            Let&apos;s Talk.
          </h2>
          <p className="font-handwritten text-2xl text-tast-pink">
            Tell us about yourself.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Group 1 — The Basics */}
          <fieldset className="border-none p-0 m-0 mb-14">
            <legend className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-8">
              The Basics
            </legend>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <InputField
                label="Roastery Name"
                name="roasteryName"
                required
              />
              <InputField
                label="Contact Name"
                name="contactName"
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                required
              />
              <InputField label="Phone" name="phone" type="tel" />
            </div>
          </fieldset>

          {/* Group 2 — About Your Business */}
          <fieldset className="border-none p-0 m-0 mb-14">
            <legend className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-8">
              About Your Business
            </legend>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <InputField
                label="Location / City, State"
                name="location"
                required
                placeholder="Portland, OR"
              />
              <InputField
                label="Website URL"
                name="website"
                type="url"
                required
                placeholder="https://"
              />
              <InputField
                label="Instagram Handle"
                name="instagram"
                required
                prefix="@"
              />
              <InputField
                label="Year Founded"
                name="yearFounded"
                type="number"
                placeholder="2020"
              />
            </div>
          </fieldset>

          {/* Group 3 — Your Interest */}
          <fieldset className="border-none p-0 m-0 mb-14">
            <legend className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-8">
              Your Interest
            </legend>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <SelectField
                label="How did you hear about tāst?"
                name="hearAbout"
                options={hearAboutOptions}
              />
              <SelectField
                label="What interests you most?"
                name="interest"
                options={interestOptions}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="notes"
                className="block font-sans text-sm text-rich-black/60 mb-1"
              >
                Anything else you&apos;d like us to know?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="w-full bg-transparent border-b border-rich-black/20 py-2 font-sans text-base text-rich-black placeholder:text-rich-black/30 focus:border-tast-pink focus:outline-none transition-colors resize-none"
              />
            </div>
          </fieldset>

          {state === 'error' && (
            <div
              className="mb-6 p-4 bg-tast-pink/10 border border-tast-pink/20 text-rich-black font-sans text-sm"
              role="alert"
            >
              Something went wrong on our end. Try again, or email us directly
              at{' '}
              <a
                href="mailto:hello@tastcoffee.co"
                className="text-tast-pink underline"
              >
                hello@tastcoffee.co
              </a>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="bg-tast-pink text-white font-mono text-xs uppercase tracking-wider px-12 py-4 rounded-full hover:bg-tast-red transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === 'submitting' ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
