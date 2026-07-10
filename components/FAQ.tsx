import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'How do orders actually reach us?',
    a: 'Through your own Shopify, via Shopify Connect. A tāst sale shows up in your POS like any other order — same fulfillment flow, same customer data, money direct to you. The commission is netted automatically; you’ll never see an invoice.',
  },
  {
    q: 'We’re not on Shopify. Are we out?',
    a: 'No — Stripe Connect covers non-Shopify stores. It takes slightly more setup on your side, and we’ll walk through it together.',
  },
  {
    q: 'What does it cost?',
    a: 'For founding partners: no platform fees for 12 months. No listing fee either — just a 15% commission on marketplace sales, the lowest in the category, locked for your entire first year. You keep 85% of every sale, plus the customer relationship.',
  },
  {
    q: 'What do you need from us?',
    a: 'A hero image, your logo files, and a yes. We build your page from your existing site; you approve it. New products sync automatically after that.',
  },
  {
    q: 'Do we control what’s listed?',
    a: 'Completely. Go broad with your whole catalog, or keep it tight — just your micro-lots and experiments. Minimum five products; the mix is yours.',
  },
  {
    q: 'Does inventory stay in sync?',
    a: 'Instantly, both directions. Sold out on your site means sold out on tāst.',
  },
  {
    q: 'What happens after year one?',
    a: 'At month ten, we talk. Choose a tier that fits your scale, or walk — no penalty, no hard feelings. The agreement is two pages; you’ll read it in less time than a cupping.',
  },
  {
    q: 'How does tāst survive on 15%?',
    a: 'Because roaster fees aren’t the business. Consumer memberships and (eventually) industry insight reports carry the platform — so we can play a volume game instead of a margin game. Rising tide, all ships.',
  },
  {
    q: 'Will our existing reviews come with us?',
    a: 'Yes — verified reviews from your site sync to your VRP page.',
  },
  {
    q: 'Who’s behind this?',
    a: 'Three co-founders who’ve spent two years as roasters themselves — a creative director, an artist, and a 12-time New York Times bestselling author. Independently funded. No VC clock, no exit pressure — accountable to partners, not investors.',
  },
]

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6 bg-london-fog">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-center mb-4">
            The Questions Every Owner Asks.
          </h2>
          <p className="font-handwritten text-2xl text-tast-pink text-center mb-16">
            asked by roasters, answered honestly.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="divide-y divide-rich-black/10 border-y border-rich-black/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-editorial text-lg md:text-xl leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="font-mono text-tast-pink text-xl leading-none mt-1 transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="font-serif text-rich-black/80 leading-relaxed mt-4 pr-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
