import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Say yes.',
    body: 'The founding partner agreement is two pages of the least legalese you’ve ever read. Twelve months. At month ten we sit down and decide together whether it’s working. If it isn’t — no harm, no foul.',
  },
  {
    number: '02',
    title: 'We build your page. You do almost nothing.',
    body: 'We build your Verified Roaster Page from your existing site — story, products, photography, reviews. You look it over, we polish, it goes live. The complete list of what we’ll ever ask you for: a hero image and your logo files.',
  },
  {
    number: '03',
    title: 'Orders land in your Shopify like any other order.',
    body: 'tāst connects through Shopify Connect. Every sale hits your POS as a normal order — your fulfillment, your customer relationship, your money, direct. We never touch your product and we never hold your cash. Inventory syncs instantly. New releases appear automatically. Customers cover shipping. Not on Shopify? Stripe Connect has you covered.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-london-fog">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-center mb-4">
            Frictionless means frictionless.
          </h2>
          <p className="font-handwritten text-2xl text-tast-pink text-center mb-20">
            here&apos;s the whole thing.
          </p>
        </ScrollReveal>

        <div className="space-y-16 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number}>
              <div className={`flex gap-6 md:gap-10 stagger-${i + 1}`}>
                <span
                  className="font-mono font-bold text-tast-pink/30 text-4xl md:text-5xl leading-none flex-shrink-0"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-editorial text-xl md:text-2xl mb-3">
                    {step.title}
                  </h3>
                  <p className="font-serif text-rich-black/80 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
