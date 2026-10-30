import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { HERO_VIDEO_URL } from '@/lib/constants'

const POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='100%25' height='100%25' fill='%231A1A1A'/%3E%3C/svg%3E"

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero — brand-level, audience-agnostic */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          <div className="absolute inset-0 z-0 bg-rich-black" aria-hidden="true" />
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
          <div
            className="absolute inset-0 z-[2] bg-rich-black/50"
            aria-hidden="true"
          />

          <div className="relative z-10 px-6 pt-24 pb-16 flex flex-col items-center flex-1 w-full">
            <ScrollReveal className="text-center max-w-4xl mx-auto my-auto">
              <h1 className="mb-6">
                <span className="block font-sans font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
                  Discover Coffee
                </span>
                <span className="block font-sans font-bold uppercase text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
                  You&apos;ll Love.
                </span>
              </h1>

              <p className="font-editorial italic text-white/80 text-[clamp(1.25rem,3vw,2rem)] leading-tight mt-4 max-w-2xl mx-auto">
                tāst is the platform specialty coffee deserves &mdash; connecting
                the people who roast it with the people who drink it.
              </p>

              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="/roasters"
                  className="inline-block bg-tast-pink text-white font-mono text-xs uppercase tracking-wider px-10 py-4 rounded-full hover:bg-tast-red transition-colors duration-200"
                >
                  I&apos;m a Roaster
                </a>
                <a
                  href="/beta"
                  className="inline-block text-white font-mono text-xs uppercase tracking-wider border border-white/40 px-10 py-4 rounded-full hover:border-tast-pink hover:text-tast-pink transition-colors duration-200"
                >
                  I&apos;m Coffee Curious
                </a>
              </div>

              <p className="mt-12 font-serif text-base text-white/50 max-w-lg mx-auto leading-relaxed">
                Whether you roast it or just drink too much of it &mdash;
                there&apos;s a place for you here.
              </p>
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

        {/* Brief value overview */}
        <section className="py-24 md:py-32 px-6 bg-rich-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] leading-snug mb-10">
                Wine has Vivino. Film has Letterboxd.
                <br className="hidden md:block" /> Coffee has tāst.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p className="font-serif text-lg leading-relaxed text-white/80 max-w-2xl mx-auto mb-12">
                A place to discover specialty coffee, remember what you loved,
                find the best cafes near you, and buy directly from the roasters
                who make it. Built by people who actually drink it.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="font-mono font-bold uppercase text-tast-pink text-xs tracking-widest mb-4">
                    For Roasters
                  </h3>
                  <p className="font-serif text-white/70 leading-relaxed mb-6">
                    Put your coffee in front of people whose taste already matches
                    it. No pay-to-play, no algorithm rent. Just great coffee
                    finding the right drinkers.
                  </p>
                  <a
                    href="/roasters"
                    className="inline-block font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
                  >
                    Become a Partner &rarr;
                  </a>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="font-mono font-bold uppercase text-tast-pink text-xs tracking-widest mb-4">
                    For Coffee Lovers
                  </h3>
                  <p className="font-serif text-white/70 leading-relaxed mb-6">
                    Scan a bag and see what others tasted. Search a city and find
                    the shop worth walking to. Save the recipe that finally worked.
                  </p>
                  <a
                    href="/beta"
                    className="inline-block font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
                  >
                    Join the Beta &rarr;
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="font-sans font-bold text-3xl text-rich-black mb-1">16+</p>
                  <p className="font-mono text-xs uppercase tracking-wider text-rich-black/40">
                    Roaster Partners
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-3xl text-rich-black mb-1">1,000+</p>
                  <p className="font-mono text-xs uppercase tracking-wider text-rich-black/40">
                    Cafes
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-3xl text-rich-black mb-1">500</p>
                  <p className="font-mono text-xs uppercase tracking-wider text-rich-black/40">
                    Beta Testers
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
