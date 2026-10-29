import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beta Tester Home — tāst Coffee',
  description:
    'Everything you need for the tāst beta test. Download the app, see the schedule, and send us feedback.',
}

const SCHEDULE = [
  {
    week: 'Week 1',
    focus: 'Get in, look around. Tell us your first impressions.',
  },
  {
    week: 'Week 2',
    focus: 'Coffee discovery: Scan something, save something, buy something.',
  },
  {
    week: 'Week 3',
    focus: 'Cafe finder: Find a new shop you want to try.',
  },
  {
    week: 'Week 4',
    focus:
      'Recipes: Dial in your brewing method of choice. Then, tell us your final impressions.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How long is the beta?',
    a: 'Four weeks.',
  },
  {
    q: 'How much time does this take?',
    a: 'As much as you want on the app itself. About ten minutes a week on feedback.',
  },
  {
    q: 'Is the coffee I buy real?',
    a: 'Yes. We have partnerships with trusted roasters (many of whom are participating in this test). Your order will be shipped directly, just like any other purchase.',
  },
  {
    q: 'Will I lose access after the beta?',
    a: "Nope. You were here first, and you're here to stay.",
  },
  {
    q: 'Can I invite someone?',
    a: "Yes! We'll send a referral form in week four.",
  },
  {
    q: "Something's broken and I'm stuck.",
    a: 'Email us at hello@tastcoffee.co and we’ll help.',
  },
]

export default function BetaHomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-rich-black pt-32 pb-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-tast-pink mb-4">
              Beta Tester Home
            </p>
            <h1 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] leading-tight text-white mb-6">
              Welcome to the tāst test.
            </h1>
            <p className="font-serif text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Here&apos;s everything you need for the journey ahead.
              Thanks for your time and your honesty.
            </p>
          </div>
        </section>

        {/* Get the App */}
        <section className="py-20 px-6 bg-london-fog">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Step 1</SectionLabel>
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-8">
              Get it on your phone
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-rich-black/10">
                <h3 className="font-sans font-bold text-lg mb-3">iPhone</h3>
                <p className="font-serif text-base text-rich-black/70 leading-relaxed mb-4">
                  Download TestFlight from the App Store first. Then tap our
                  invite link to download the latest version of tāst.
                </p>
                <a
                  href="#"
                  className="inline-block font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
                >
                  TestFlight Invite Link
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-rich-black/10">
                <h3 className="font-sans font-bold text-lg mb-3">Android</h3>
                <p className="font-serif text-base text-rich-black/70 leading-relaxed mb-4">
                  Tap the link to join the closed test on Google Play. You may
                  need to accept the tester invitation before the app appears.
                </p>
                <a
                  href="#"
                  className="inline-block font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
                >
                  Google Play Testing Link
                </a>
              </div>
            </div>

            <p className="font-serif text-sm text-rich-black/50 mt-6 text-center">
              Not working? Email{' '}
              <a
                href="mailto:hello@tastcoffee.co"
                className="text-tast-pink hover:underline"
              >
                hello@tastcoffee.co
              </a>{' '}
              and tell us what phone you have and what went wrong.
            </p>
          </div>
        </section>

        {/* What We Need You to Try */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Step 2</SectionLabel>
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-4">
              Three features. Four weeks.
            </h2>
            <div className="space-y-8 mt-10">
              <FeatureCard
                title="Find"
                description="Search cafes, save the ones you want to try, rate the ones you know. If your favorite shop is missing, tell us."
              />
              <FeatureCard
                title="Discover"
                description="Scan a bag, see what other people tasted, add your own notes, and order something that catches your eye. If a bag won't scan, tell us which one."
              />
              <FeatureCard
                title="Taste"
                description="Build a recipe, brew it, dial it in. If the instructions don't match how you brew, tell us."
              />
            </div>
          </div>
        </section>

        {/* The Schedule */}
        <section className="py-20 px-6 bg-london-fog">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>The Schedule</SectionLabel>
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-10">
              What&apos;s coming, and when
            </h2>
            <div className="space-y-4">
              {SCHEDULE.map((item) => (
                <div
                  key={item.week}
                  className="flex gap-6 items-baseline border-b border-rich-black/10 pb-4"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-tast-pink whitespace-nowrap min-w-[5rem]">
                    {item.week}
                  </span>
                  <p className="font-serif text-base text-rich-black/70 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-serif text-sm text-rich-black/50 mt-6">
              We&apos;ll email you about twice a week. Every survey has five
              questions, except the last one, which is a bit longer.
            </p>
          </div>
        </section>

        {/* Give Feedback */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Feedback</SectionLabel>
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-8">
              Where to send your feedback
            </h2>

            <div className="space-y-6">
              <FeedbackRow
                label="Feature surveys"
                text="We'll send you these links each week."
              />
              <FeedbackRow
                label="General feedback"
                text="One form for everything else, open during the whole beta."
                linkText="Feedback Form"
                href="#"
              />
              <FeedbackRow
                label="Reply to any email"
                text="It doesn't even have to be a full sentence. Just tell us what you're thinking."
              />
            </div>

            <div className="mt-10 bg-tast-pink/5 border border-tast-pink/20 rounded-2xl p-8 text-center">
              <p className="font-editorial italic text-xl text-rich-black/80">
                There is no such thing as feedback that&apos;s too small.
              </p>
              <p className="font-serif text-sm text-rich-black/50 mt-2">
                &ldquo;This button felt weird&rdquo; is valuable input. We&apos;ll take it all.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-london-fog">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-sans font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight mb-10">
              Common questions
            </h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.q}
                  className="border-b border-rich-black/10 pb-6"
                >
                  <h3 className="font-sans font-bold text-base mb-2">
                    {item.q}
                  </h3>
                  <p className="font-serif text-base text-rich-black/70 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-tast-pink mb-4">
      {children}
    </p>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex gap-6 items-start">
      <span className="font-sans font-bold text-2xl text-tast-pink min-w-[5rem]">
        {title}
      </span>
      <p className="font-serif text-base text-rich-black/70 leading-relaxed pt-1">
        {description}
      </p>
    </div>
  )
}

function FeedbackRow({
  label,
  text,
  linkText,
  href,
}: {
  label: string
  text: string
  linkText?: string
  href?: string
}) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-baseline border-b border-rich-black/10 pb-4">
      <span className="font-mono text-xs uppercase tracking-wider text-rich-black/40 min-w-[10rem]">
        {label}
      </span>
      <p className="font-serif text-base text-rich-black/70 leading-relaxed">
        {text}
        {linkText && href && (
          <>
            {' '}
            <a
              href={href}
              className="text-tast-pink hover:underline"
            >
              {linkText}
            </a>
          </>
        )}
      </p>
    </div>
  )
}
