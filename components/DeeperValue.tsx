import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    title: '$0 for 12 Months',
    description:
      'No platform fees for your entire first year — and a 15% commission, the lowest in the category, locked while we prove this works together.',
  },
  {
    title: 'Priority Placement',
    description:
      'During the launch period, founding partners get prime visibility in search and discovery — while the platform is loudest.',
  },
  {
    title: 'A Seat in the Brain Trust',
    description:
      'Founding partners shape the roadmap. Ask our partners: half the features on this page started as their ideas.',
  },
  {
    title: 'Founding Partner Badge',
    description:
      'Permanent. Like the first edition of a great book — it never loses its value.',
  },
  {
    title: 'Refer a Roaster, Skip 6 Months of Fees',
    description:
      'Know a roaster who belongs here? When they join, you get six months of fees waived. This whole thing is a network effect — we’d rather pay you than an ad platform.',
  },
  {
    title: 'How Does tāst Make Money, If Not From You?',
    description:
      'Fair question — the best roasters always ask it. Three ways: the marketplace commission, a consumer membership, and — with our partners, down the road — the consumer-insight reports this industry has never had. Because the platform doesn’t live on roaster fees, we never have to squeeze them.',
  },
]

const timeline = [
  {
    date: 'Spring ’26',
    status: 'done' as const,
    label: 'Founding Cohort Forming',
    detail: 'Partners from Olympia to Portrait to Goshen signed. Profiles built, products listed.',
  },
  {
    date: 'Now',
    status: 'now' as const,
    label: 'Beta',
    detail: '500 testers — half of them coffee professionals — scanning, rating, and buying. First ratings and reviews.',
  },
  {
    date: 'Oct 2026',
    status: 'next' as const,
    label: 'Public Launch',
    detail: 'App Store release, 51 founding partners, and a marketing push aimed well beyond coffee media.',
  },
  {
    date: 'Dec 2026',
    status: 'next' as const,
    label: 'Scale',
    detail: '100K users, 100 roaster partners, and the first consumer-intelligence reports — built with founding partners, for founding partners.',
  },
]

export default function DeeperValue() {
  return (
    <section className="py-24 md:py-32 px-6 bg-london-fog">
      <div className="max-w-5xl mx-auto">
        {/* Intro — the 51-seat story */}
        <ScrollReveal>
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-center mb-6">
            51 founding seats.
          </h2>
          <p className="font-handwritten text-2xl text-tast-pink text-center mb-8">
            here&apos;s why that number.
          </p>
          <p className="font-serif text-lg text-rich-black/80 leading-relaxed text-center max-w-2xl mx-auto mb-24">
            The biggest marketplace in specialty coffee works with 50 roasters.
            We intend to launch with 51 &mdash; the largest verified roster of
            specialty roasters on the internet, on day one. Petty? A little.
            Motivating? Extremely.
          </p>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal>
          <h3 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 text-center mb-16">
            What Founding Partners Get
          </h3>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-32">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="font-mono font-bold uppercase text-tast-pink text-xs tracking-widest mb-3">
                  {b.title}
                </h3>
                <p className="font-serif text-rich-black/80 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <h3 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 text-center mb-16">
            Where This Stands
          </h3>
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-tast-pink/20"
              aria-hidden="true"
            />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.date}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    i % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse md:text-right'
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-[15px] h-[15px] rounded-full border-2 border-tast-pink flex-shrink-0 ${
                      item.status === 'done'
                        ? 'bg-tast-pink'
                        : item.status === 'now'
                          ? 'bg-tast-pink animate-pulse'
                          : 'bg-tast-pink/20'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="pl-8 md:pl-0 md:w-1/2">
                    <p className="font-mono text-xs font-bold text-tast-pink uppercase tracking-wider mb-1">
                      {item.status === 'done' && (
                        <span aria-hidden="true">&#10003;&nbsp;</span>
                      )}
                      {item.date}
                    </p>
                    <p className="font-editorial text-xl mb-1">{item.label}</p>
                    <p className="font-sans text-sm text-rich-black/60">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
