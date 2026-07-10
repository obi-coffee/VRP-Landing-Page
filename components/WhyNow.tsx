import ScrollReveal from './ScrollReveal'

export default function WhyNow() {
  return (
    <section className="py-24 md:py-32 px-6 bg-rich-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-editorial text-[clamp(1.75rem,4.5vw,3rem)] leading-snug mb-10">
            Wine has Vivino. Film has Letterboxd.
            <br className="hidden md:block" /> Books have Goodreads. Vinyl has
            Discogs.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-serif text-lg leading-relaxed text-white/80 max-w-2xl mx-auto mb-8">
            Coffee &mdash; a bigger market than nearly all of them &mdash; has
            nothing. No place where someone who just tasted something great can
            find out what it was, remember it, and buy it again. No place where
            your next customer can discover you without an algorithm you have
            to pay rent to.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-serif text-lg leading-relaxed text-white/80 max-w-2xl mx-auto mb-12">
            75% of coffee drinkers discover new brands through social media
            &mdash; rented reach on platforms nobody can predict. Most never
            buy from a roaster more than a few miles from home. Your next
            thousand customers can&apos;t find you. Not because your coffee
            isn&apos;t good enough &mdash; because nothing exists to introduce
            them.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-editorial italic text-[clamp(1.25rem,3vw,1.75rem)] text-tast-pink leading-snug">
            tāst is that introduction. Built with roasters from day one &mdash;
            not another subscription box, not another shelf to get lost on.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
