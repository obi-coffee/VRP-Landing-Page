import ScrollReveal from './ScrollReveal'

export default function ClosingCTA() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] leading-snug mb-4">
            Your beans. Their palates.
          </h2>
          <p className="font-serif italic text-[clamp(1.75rem,4.5vw,3.5rem)] text-tast-pink leading-snug mb-12">
            We&apos;ll make the introduction.
          </p>
          <a
            href="#apply"
            className="inline-block bg-tast-pink text-white font-mono text-sm uppercase tracking-wider px-10 py-4 hover:bg-tast-red transition-colors duration-200"
          >
            Apply Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
