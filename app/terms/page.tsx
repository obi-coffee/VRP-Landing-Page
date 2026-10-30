import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import VideoHero from '@/components/VideoHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Channel Terms — tāst Coffee',
  description:
    'tāst Sales Channel Terms for Shopify Merchants.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <VideoHero videoSrc="/videos/terms.mp4">
          <div className="pt-32 pb-16 px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-sans font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white mb-2">
                Sales Channel Terms
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-white/50">
                For Shopify Merchants
              </p>
            </div>
          </div>
        </VideoHero>
        <article className="max-w-3xl mx-auto prose-terms pt-12 pb-24 px-6">

          <div className="space-y-4 font-serif text-base leading-relaxed text-rich-black/80">
            <p>
              <strong className="font-sans text-sm text-rich-black/50">Effective Date:</strong>{' '}
              October 1, 2026
              <br />
              <strong className="font-sans text-sm text-rich-black/50">Last Updated:</strong>{' '}
              October 16, 2026
            </p>

            <p>
              These terms govern your use of the tāst Roaster sales channel app
              for Shopify (the &ldquo;Channel&rdquo;). They are an agreement between In
              Great Taste LLC, a Delaware limited liability company
              (&ldquo;tāst,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), and the business
              that installs the Channel (&ldquo;you&rdquo; or
              &ldquo;Roaster&rdquo;). By installing or using the Channel you agree to
              these terms and to our{' '}
              <a
                href="/privacy"
                className="text-tast-pink hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            <p>
              If you have also signed a Founding Roaster Partner Agreement or
              other Verified Roaster Partner agreement with us (your &ldquo;Partner
              Agreement&rdquo;), that agreement governs your commercial relationship
              with tāst. These terms govern the Channel specifically. If the two
              conflict on how the Channel bills, publishes or handles data, these
              terms control; on every other commercial term, your Partner
              Agreement controls.
            </p>
          </div>

          <Section number={1} title="What the Channel does">
            <p>
              The Channel connects your Shopify store to tāst, a consumer coffee
              discovery app. Products you publish to the Channel appear on tāst,
              on your roastery&apos;s profile and in coffee discovery. When a tāst
              user buys one of your products, they pay in{' '}
              <strong>your own Shopify checkout</strong>. The order is created in
              your Shopify admin, attributed to the tāst channel, and you fulfil
              it as you would any other order.
            </p>
            <p>
              <strong>You are the seller of record.</strong> tāst does not take
              possession of products, does not hold customer funds, and is not a
              party to the sale between you and the buyer. You set your prices,
              shipping rates, tax settings and return policy in Shopify, and you
              are responsible for fulfilment, product quality, food-safety
              compliance and customer service for your orders.
            </p>
          </Section>

          <Section number={2} title="Eligibility and approval">
            <p>
              The Channel is available to independent specialty coffee roasters
              who:
            </p>
            <ul>
              <li>roast their own coffee and sell it under their own brand;</li>
              <li>
                operate a Shopify store serving the United States market in U.S.
                dollars;
              </li>
              <li>
                have been approved as a Verified Roaster Partner by tāst.
              </li>
            </ul>
            <p>
              <strong>How approval works.</strong> When you connect your tāst
              account in the Channel, you either sign in to an approved tāst
              roaster account or submit a roastery application. We review every
              application against our published criteria for specialty roasters
              and aim to respond within five business days. While your
              application is pending, the Channel shows your account status as{' '}
              <em>Pending review</em>; your products will not appear on tāst
              until you are approved.
            </p>
            <p>
              <strong>If your application is declined.</strong> We will tell you
              why in writing. You may reply to that notice with additional
              information or ask for a second review by emailing{' '}
              <a href="mailto:roasters@tastcoffee.com" className="text-tast-pink hover:underline">
                roasters@tastcoffee.com
              </a>{' '}
              with the subject line &ldquo;Appeal.&rdquo; A different member of our team
              will review your application and respond within ten business days.
              That decision is final for 90 days, after which you may apply
              again.
            </p>
          </Section>

          <Section number={3} title="Charges">
            <p>
              <strong>Free to install.</strong> There is no subscription fee and
              no listing fee for the Channel.
            </p>
            <p>
              <strong>15% commission on tāst orders.</strong> tāst charges a
              commission of fifteen percent (15%) of the order subtotal — the
              price of the products after discounts and before tax and
              shipping — on each order that a buyer places through tāst. Orders
              that come from your Online Store, point of sale, or any other
              channel are not charged.
            </p>
            <p>
              <strong>Billed through Shopify.</strong> The commission is billed
              through Shopify App Pricing and appears on your Shopify invoice as
              a usage charge for the &ldquo;Roaster Partner&rdquo; plan. You approve the
              plan when you install the Channel. We do not charge your card, send
              invoices, or collect commission through any other method. The usage
              meter counts the order subtotal in U.S. dollars at a rate of $0.15
              per dollar, which is the same as 15% of the subtotal.
            </p>
            <p>
              <strong>Refunds.</strong> When you refund products on a tāst order,
              we credit the commission on the refunded product amount in the same
              billing cycle, or the next one if the cycle has closed. Shipping
              refunds carry no commission and no credit.
            </p>
            <p>
              <strong>Changes.</strong> We may change the commission rate or add
              plans with at least thirty (30) days&apos; notice by email and in the
              Channel. Any new or changed charge takes effect only after you
              approve it in Shopify.
            </p>
          </Section>

          <Section number={4} title="Publishing and your content">
            <p>
              You choose which products to publish to the Channel from Shopify.
              By publishing a product you grant tāst a non-exclusive,
              royalty-free licence to display its title, description, images,
              price, availability and variants on tāst and in tāst marketing
              that features your roastery, for as long as the product is
              published. You represent that you have the right to grant this
              licence and that your listings are accurate and comply with
              applicable labelling and advertising law.
            </p>
            <p>
              tāst may decline to display, or may remove, a product that is not
              coffee or coffee-related, is mislabelled, or conflicts with our
              content standards. We will tell you when we do and why.
            </p>
            <p>
              Shopify remains the source of truth for your products, prices and
              inventory. If a product cannot be published, the Channel shows the
              reason in the Publishing section of the app.
            </p>
          </Section>

          <Section number={5} title="Data">
            <p>
              <strong>What we access.</strong> To operate the Channel we access
              your products, inventory, locations, publications, and the orders
              created through the tāst channel. We use this data only to run the
              Channel: to display your products on tāst, to show tāst orders in
              your Roaster Portal, and to calculate commission. We do not sell
              it, share it with other roasters, or use it to train
              machine-learning models.
            </p>
            <p>
              <strong>Buyer data.</strong> Information a buyer gives you at
              checkout (name, address, email) is collected by Shopify under your
              store&apos;s privacy policy. You may use it to fulfil the order and as
              your own privacy policy permits. Information a buyer gives tāst in
              the tāst app is governed by the tāst Privacy Policy.
            </p>
            <p>
              <strong>Deletion.</strong> If you uninstall the Channel or ask us
              in writing, we delete the Shopify data we hold for your store
              within thirty (30) days, except commission records we are required
              to keep for accounting.
            </p>
          </Section>

          <Section number={6} title="Disconnecting and uninstalling">
            <p>
              You can disconnect your tāst account from the Channel at any time
              from the app, without contacting us. Disconnecting removes the
              tāst sales channel from your store and takes your products off
              tāst. You can reconnect later with the same account. Uninstalling
              the app has the same effect. Commission already incurred on orders
              placed before you disconnect remains payable through Shopify.
            </p>
          </Section>

          <Section number={7} title="Suspension and termination">
            <p>
              We may suspend or remove your access to the Channel if you breach
              these terms, if we receive credible reports of food-safety,
              labelling or review-integrity violations, if your Partner Agreement
              ends, or if required by law. Where practical we will tell you first
              and give you a chance to fix the problem. You may contest a
              suspension by emailing{' '}
              <a href="mailto:roasters@tastcoffee.com" className="text-tast-pink hover:underline">
                roasters@tastcoffee.com
              </a>
              ; we will respond within ten business days.
            </p>
          </Section>

          <Section number={8} title="Reviews">
            <p>
              Buyers may rate and review your products on tāst. We moderate
              reviews under our consumer Terms of Service. You may report a
              review you believe is fabricated or violates our content standards,
              but you may not require removal of a review because it is
              unfavourable, and you may not post, solicit or pay for reviews of
              your own products.
            </p>
          </Section>

          <Section number={9} title="Disclaimers and liability">
            <p className="uppercase text-xs leading-relaxed tracking-wide">
              The Channel is provided &ldquo;as is.&rdquo; We do not warrant that it will
              be uninterrupted or error-free, or that listing on tāst will
              produce any level of sales. To the maximum extent permitted by law,
              neither party is liable to the other for indirect, incidental,
              consequential or punitive damages, and tāst&apos;s total liability
              under these terms is limited to the commission you paid us in the
              twelve months before the claim. These limits do not apply to
              liability that cannot be limited by law.
            </p>
            <p>
              You will indemnify tāst against third-party claims arising from
              your products, your listings, or your breach of these terms or
              applicable law.
            </p>
          </Section>

          <Section number={10} title="General">
            <p>
              These terms are governed by the laws of the State of Delaware.
              Disputes will be resolved as set out in your Partner Agreement or,
              if you have none, in the state or federal courts located in
              Delaware. We may update these terms with thirty (30) days&apos; notice
              by email and in the Channel; continued use after that date means
              you accept the update. Shopify is not a party to these terms. Your
              use of Shopify is governed by Shopify&apos;s own terms.
            </p>
          </Section>

          <Section number={11} title="Contact">
            <p>
              In Great Taste LLC · Attn: Roaster Partnerships
              <br />
              <a href="mailto:roasters@tastcoffee.com" className="text-tast-pink hover:underline">
                roasters@tastcoffee.com
              </a>
              {' · '}
              <a href="mailto:legal@tastcoffee.com" className="text-tast-pink hover:underline">
                legal@tastcoffee.com
              </a>
            </p>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  )
}

function Section({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="font-sans font-bold text-xl mb-4">
        <span className="font-mono text-xs text-rich-black/40 mr-2">
          {number}.
        </span>
        {title}
      </h2>
      <div className="space-y-4 font-serif text-base leading-relaxed text-rich-black/80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_strong]:font-sans [&_strong]:text-rich-black [&_strong]:text-sm [&_em]:text-rich-black/60">
        {children}
      </div>
    </section>
  )
}
