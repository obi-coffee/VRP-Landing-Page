import ScrollReveal from './ScrollReveal'

const props = [
  {
    title: 'Qualified Discovery',
    body: 'People find you on tāst because their taste profile matches your coffee — not because you outbid someone. “You said you liked that washed Rwanda — have you tried the one this roaster just released?” No pay to play. Ever. The only algorithm is taste.',
  },
  {
    title: 'Consumer Intelligence',
    body: 'Which coffees resonate, with whom, in which cities, brewed on what. What your customers buy when they aren’t buying yours. Even which cafés around the country are pouring your coffee. The consumer data specialty coffee has never had — shared back with the people who make it.',
  },
  {
    title: 'Your Storefront',
    body: 'A rich Verified Roaster Page you own and control — your story, your sourcing, your full line, your reviews. For the smallest roasters, it can replace a website entirely. For everyone else, it’s a second front door that never closes.',
  },
  {
    title: 'Keep 85¢ of Every Dollar',
    body: 'In year one, 85% of every marketplace sale stays with you — paid direct through your own Shopify, no invoices, no bill-backs. Typical marketplaces take 35–60%. We never need to, and we’ll show you why below.',
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
