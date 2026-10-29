import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're On the List — tāst Coffee",
  description:
    "You're on the tāst waitlist. We'll email you the morning we go live.",
}

export default function WaitlistPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-rich-black pt-32 pb-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-tast-pink mb-4">
              Waitlist Confirmed
            </p>
            <h1 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-6">
              You&apos;re on the list.
            </h1>
            <p className="font-serif text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              You&apos;re probably here because you like coffee (or because you
              know nothing about coffee, but you like learning).
            </p>
          </div>
        </section>

        {/* What You're Waiting For */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-8">
              What you&apos;re waiting for
            </h2>
            <p className="font-serif text-lg text-rich-black/70 leading-relaxed max-w-2xl mx-auto mb-12">
              An app to find great coffee and great cafes. Scan a bag and see
              what other people tasted in it. Search a city and find the shop
              worth walking to. Save the recipe that finally worked.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg mx-auto">
              <Stat label="Roaster partners" value="16+" />
              <Stat label="Cafes" value="1,000+" />
              <div className="col-span-2 md:col-span-1 flex justify-center">
                <div className="text-center">
                  <p className="font-editorial italic text-2xl text-tast-pink">
                    It&apos;s gonna tāst great.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* While You Wait */}
        <section className="py-20 px-6 bg-london-fog">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-10 text-center">
              While you wait
            </h2>

            <div className="space-y-8">
              <WaitCard
                label="Follow along"
                description="We're building this in public and would love to have you join us."
                linkText="@tastcoffee on Instagram"
                href="https://www.instagram.com/tastcoffeeco/"
              />
              <WaitCard
                label="Drink something good"
                description="We've been roasting coffee for a couple of years."
                linkText="Shop tāst Coffee"
                href="https://tastcoffee.com"
              />
              <WaitCard
                label="Bring a friend"
                description="Forward this page to the friend who loves coffee, too."
              />
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-20 px-6 bg-rich-black text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-lg text-white/60 leading-relaxed mb-6">
              We&apos;ll email you the morning tāst goes live.
            </p>
            <p className="font-editorial italic text-2xl text-white">
              We&apos;ll see you very soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="font-sans font-bold text-3xl text-rich-black mb-1">
        {value}
      </p>
      <p className="font-mono text-xs uppercase tracking-wider text-rich-black/40">
        {label}
      </p>
    </div>
  )
}

function WaitCard({
  label,
  description,
  linkText,
  href,
}: {
  label: string
  description: string
  linkText?: string
  href?: string
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-rich-black/10">
      <h3 className="font-sans font-bold text-lg mb-2">{label}</h3>
      <p className="font-serif text-base text-rich-black/70 leading-relaxed">
        {description}
      </p>
      {linkText && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}
