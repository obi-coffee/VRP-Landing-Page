import ScrollReveal from './ScrollReveal'

const segments = [
  {
    title: 'Just you and a roaster?',
    body: 'Skip building a website. Your VRP page can be your entire storefront — catalog, story, checkout, done.',
  },
  {
    title: 'Growing?',
    body: 'Your coffee deserves drinkers beyond your delivery radius. Reach people across the country whose taste profiles already match your roasts.',
  },
  {
    title: 'At grocery scale?',
    body: 'A home for the micro-lots and experiments your volume channels can’t justify. Park the fun stuff somewhere it makes money and lands in the right hands.',
  },
]

export default function WhoItsFor() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-editorial text-[clamp(1.5rem,4vw,2.75rem)] text-center leading-snug max-w-3xl mx-auto mb-20">
            Built for every size of serious.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {segments.map((seg, i) => (
            <ScrollReveal key={seg.title}>
              <div className={`stagger-${i + 1} text-center md:text-left`}>
                <h3 className="font-handwritten text-2xl text-tast-pink mb-4">
                  {seg.title}
                </h3>
                <p className="font-serif text-rich-black/80 leading-relaxed">
                  {seg.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
