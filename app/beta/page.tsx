import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BetaSignup from '@/components/BetaSignup'
import ScrollReveal from '@/components/ScrollReveal'
import VideoHero from '@/components/VideoHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Beta — tāst Coffee',
  description:
    'Be the first to try tāst — the app that helps you discover specialty coffee, find great cafes, and remember what you loved.',
}

export default function BetaPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <VideoHero videoSrc="/videos/beta.mp4">
          <div className="pt-32 pb-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <p className="font-mono text-xs uppercase tracking-widest text-tast-pink mb-4">
                  For Coffee Lovers
                </p>
                <h1 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-6">
                  A better way to discover
                  <br className="hidden md:block" /> specialty coffee.
                </h1>
                <p className="font-serif text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
                  tāst helps you find great coffee, remember what you loved, and
                  buy directly from the people who roast it. We&apos;re in beta
                  &mdash; and we want you in.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </VideoHero>

        {/* What You Can Do */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight text-center mb-4">
                Three things you can&apos;t do anywhere else.
              </h2>
              <p className="font-handwritten text-2xl text-tast-pink text-center mb-16">
                yet.
              </p>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal>
                <div className="flex gap-6 md:gap-10 items-start">
                  <span
                    className="font-mono font-bold text-tast-pink/30 text-4xl md:text-5xl leading-none flex-shrink-0"
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl md:text-2xl mb-3">
                      Discover coffee matched to your taste.
                    </h3>
                    <p className="font-serif text-rich-black/80 leading-relaxed">
                      Scan a bag and see what other people tasted in it. Get
                      recommendations based on what you actually like &mdash; not
                      what an algorithm wants to sell you.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex gap-6 md:gap-10 items-start">
                  <span
                    className="font-mono font-bold text-tast-pink/30 text-4xl md:text-5xl leading-none flex-shrink-0"
                    aria-hidden="true"
                  >
                    02
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl md:text-2xl mb-3">
                      Find cafes worth the trip.
                    </h3>
                    <p className="font-serif text-rich-black/80 leading-relaxed">
                      Search any city and find the shops people actually recommend.
                      Save the ones you want to try. Rate the ones you know.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex gap-6 md:gap-10 items-start">
                  <span
                    className="font-mono font-bold text-tast-pink/30 text-4xl md:text-5xl leading-none flex-shrink-0"
                    aria-hidden="true"
                  >
                    03
                  </span>
                  <div>
                    <h3 className="font-editorial text-xl md:text-2xl mb-3">
                      Dial in your brew.
                    </h3>
                    <p className="font-serif text-rich-black/80 leading-relaxed">
                      Build a recipe, log your brews, and fine-tune until it&apos;s
                      right. Keep a record of what worked &mdash; and what
                      didn&apos;t.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Who's behind it */}
        <section className="py-20 px-6 bg-london-fog">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-editorial text-[clamp(1.5rem,4vw,2.5rem)] leading-snug mb-6">
                Built by roasters, for everyone.
              </h2>
              <p className="font-serif text-lg text-rich-black/70 leading-relaxed max-w-2xl mx-auto mb-8">
                tāst is built with 16+ specialty roasters from across the country
                &mdash; from Olympia to Atlanta to Austin. The coffee on the
                platform is real, the roasters are verified, and every order ships
                direct from the people who made it.
              </p>
              <p className="font-serif text-lg text-rich-black/70 leading-relaxed max-w-2xl mx-auto">
                No subscriptions you didn&apos;t ask for. No mystery boxes.
                Just great coffee and the people behind it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Beta Signup */}
        <BetaSignup />
      </main>
      <Footer />
    </>
  )
}
