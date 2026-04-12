import ScrollReveal from './ScrollReveal'

const props = [
  {
    title: 'Qualified Discovery',
    body: 'Users who find you on tāst already have taste profiles that match your coffee. These aren\u2019t random browsers \u2014 they\u2019re predisposed to love what you roast.',
  },
  {
    title: 'Your Storefront',
    body: 'A beautiful roaster profile with your story, sourcing philosophy, and full product line. Something you control and own.',
  },
  {
    title: 'Consumer Intelligence',
    body: 'See how your coffees perform. Which flavor profiles resonate. What equipment your customers use. Insights you can\u2019t get anywhere else.',
  },
  {
    title: '80\u201390% of Every Sale',
    body: 'Stays with you. Compare that to 40\u201360% through traditional wholesale channels.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-editorial text-[clamp(1.5rem,4vw,2.75rem)] text-center leading-snug max-w-3xl mx-auto mb-20">
            A specialty coffee discovery platform connecting roasters with the
            people who&apos;ll love their products most.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {props.map((prop, i) => (
            <ScrollReveal key={prop.title}>
              <div className={`stagger-${i + 1}`}>
                <h3 className="font-mono font-bold uppercase text-tast-pink text-xs tracking-widest mb-4">
                  {prop.title}
                </h3>
                <p className="font-serif text-rich-black/80 leading-relaxed text-base">
                  {prop.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
