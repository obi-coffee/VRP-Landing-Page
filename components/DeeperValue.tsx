import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    title: '12 Months Free',
    description:
      'On any paid tier. The 15% commission is waived for your entire first year.',
  },
  {
    title: 'Priority Placement',
    description:
      'During the launch period, founding partners get prime visibility in search and discovery.',
  },
  {
    title: 'Direct Product Input',
    description:
      'Shape the features that matter to you. Your feedback goes straight to the team building this.',
  },
  {
    title: 'Founding Partner Badge',
    description:
      'Permanent. Like the first edition of a great book \u2014 it never loses its value.',
  },
]

const timeline = [
  {
    date: 'May 2026',
    label: 'Partner Onboarding',
    detail: 'Profiles set up, products listed',
  },
  {
    date: 'Jul 2026',
    label: 'Beta Launch',
    detail: '500 users, first ratings & reviews',
  },
  {
    date: 'Oct 2026',
    label: 'Public Launch',
    detail: '50 VRPs, App Store release, marketing push',
  },
  {
    date: 'Dec 2026',
    label: 'Scale',
    detail: '100K users, 100 VRPs, first consumer intelligence reports',
  },
]

export default function DeeperValue() {
  return (
    <section className="py-24 md:py-32 px-6 bg-london-fog">
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <ScrollReveal>
          <h2 className="font-editorial text-[clamp(1.5rem,4vw,2.75rem)] text-center leading-snug max-w-3xl mx-auto mb-24">
            We&apos;re building the definitive platform for specialty coffee
            discovery but it doesn&apos;t work without you.
          </h2>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal>
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
            The Road Ahead
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
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-[15px] h-[15px] rounded-full bg-tast-pink/20 border-2 border-tast-pink flex-shrink-0"
                    aria-hidden="true"
                  />

                  <div className="pl-8 md:pl-0 md:w-1/2">
                    <p className="font-mono text-xs font-bold text-tast-pink uppercase tracking-wider mb-1">
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
