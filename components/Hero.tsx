import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-london-fog">
      <ScrollReveal className="text-center max-w-4xl mx-auto">
        <h1 className="mb-8">
          <span className="block font-mono font-bold uppercase text-tast-pink text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
            Your Coffee
          </span>
          <span className="block font-serif italic text-rich-black text-[clamp(1.5rem,4vw,3rem)] leading-tight mt-2">
            deserves to be
          </span>
          <span className="block font-mono font-bold uppercase text-tast-pink text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
            Found.
          </span>
        </h1>

        <div className="bg-tast-pink text-white max-w-xl mx-auto p-8 mt-10">
          <p className="font-mono text-xs uppercase tracking-widest mb-3 opacity-80">
            tāst &bull; platform
          </p>
          <p className="font-serif text-lg leading-relaxed italic">
            A specialty coffee discovery app connecting roasters with the people
            who&apos;ll love their beans most.
          </p>
        </div>

        <div className="mt-12">
          <a
            href="#apply"
            className="inline-block font-serif italic text-lg text-rich-black border-b border-rich-black/30 pb-1 hover:border-tast-pink hover:text-tast-pink transition-colors duration-200"
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
          stroke="#2D2D2D"
          strokeWidth="1.5"
          className="opacity-40"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
