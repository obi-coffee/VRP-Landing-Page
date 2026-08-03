import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — tāst Coffee Marketplace Plugin',
  description:
    'How In Great Taste LLC collects, uses, and protects data when roasters connect their Shopify store to the tāst marketplace.',
}

const SECTION_HEADING =
  'font-sans font-semibold text-xl tracking-tight mt-12 mb-4 pt-6 border-t border-rich-black/10'
const BODY = 'font-serif text-[17px] leading-relaxed text-rich-black/90 mb-4'
const LIST = 'font-serif text-[17px] leading-relaxed text-rich-black/90 mb-4 ml-5 list-disc space-y-2'

export default function PrivacyPolicy() {
  return (
    <>
      <main id="main-content" className="bg-london-fog min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
          <a href="/" aria-label="tāst Coffee home" className="inline-block mb-10">
            <Logo />
          </a>

          <h1 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-3">
            Privacy Policy — tāst Coffee Marketplace Plugin
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-raspberry-barete mb-10">
            Effective August 3, 2026 · In Great Taste LLC
          </p>

          <p className={BODY}>
            This policy explains how In Great Taste LLC (&ldquo;tāst,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) collects, uses, and protects data when you install and use the tāst
            Coffee Marketplace Plugin (the &ldquo;Plugin&rdquo;) on your Shopify store. The Plugin
            connects your store to the tāst marketplace so your catalog, inventory, and orders stay
            in sync between the two. We wrote this the way we&rsquo;d want it written for us:
            plainly. If anything here is unclear, write to us at{' '}
            <a href="mailto:hello@tastcoffee.com" className="text-tast-pink hover:text-tast-red transition-colors">
              hello@tastcoffee.com
            </a>{' '}
            and a person will answer.
          </p>

          <h2 className={SECTION_HEADING}>Who this policy covers</h2>
          <p className={BODY}>
            This policy applies to merchants — Verified Roaster Partners who install the Plugin —
            and to the personal information of their customers that passes through the Plugin as
            part of order fulfillment. It covers the Plugin specifically. The tāst consumer
            platform and the tastcoffee.com store have their own privacy policies.
          </p>

          <h2 className={SECTION_HEADING}>What we collect through Shopify&rsquo;s APIs</h2>
          <p className={BODY}>
            When you install the Plugin, we access only what the integration needs to work:
          </p>
          <ul className={LIST}>
            <li>
              <strong>Store information.</strong> Your store name, myshopify domain, store contact
              email, currency, and timezone — used to link your Shopify store to your Verified
              Roaster Partner account.
            </li>
            <li>
              <strong>Product and catalog data.</strong> Product titles, descriptions, images,
              variants, prices, and tags — used to publish and keep your tāst storefront current.
            </li>
            <li>
              <strong>Inventory data.</strong> Stock levels for synced products — used to keep
              availability accurate in both directions, so a bag that sells out in one place shows
              sold out in the other.
            </li>
            <li>
              <strong>Order data.</strong> For orders placed on the tāst marketplace, we create
              orders in your Shopify admin. These include the customer&rsquo;s name, shipping
              address, email address, and the items purchased — the information you need to fulfill
              the order. We also read the fulfillment status of those orders so buyers on tāst can
              see shipping updates.
            </li>
            <li>
              <strong>Usage logs.</strong> Basic technical logs of the Plugin&rsquo;s activity
              (sync events, errors, timestamps) — used for support and to keep the integration
              reliable.
            </li>
          </ul>
          <p className={BODY}>
            We do not access your store&rsquo;s full customer list, your customers&rsquo; payment
            card details, or data from orders that did not originate on tāst.
          </p>

          <h2 className={SECTION_HEADING}>How we use this data</h2>
          <p className={BODY}>
            We use the data described above to operate the integration: publishing your catalog to
            the tāst marketplace, syncing inventory, routing tāst orders to your Shopify admin, and
            reflecting fulfillment status back to buyers. We also use aggregated marketplace
            activity to produce the audience and taste-profile insights available to you as a
            Verified Roaster Partner. We use technical logs to troubleshoot issues and improve the
            Plugin.
          </p>
          <p className={BODY}>
            We do not sell personal data. We do not use your store&rsquo;s data to advertise to you
            or to anyone else, and we do not share your catalog or sales data with other roasters.
          </p>

          <h2 className={SECTION_HEADING}>Who we share data with</h2>
          <p className={BODY}>
            We share data only where the service requires it: with the infrastructure providers
            that host the tāst platform, with the tāst marketplace itself (so buyers can see your
            products and their order status), and where the law requires disclosure. Every provider
            we use is bound by contract to protect your data and use it only to provide services to
            us.
          </p>

          <h2 className={SECTION_HEADING}>Cookies and tracking</h2>
          <p className={BODY}>
            The Plugin does not add cookies, pixels, or tracking scripts to your customer-facing
            storefront.
          </p>

          <h2 className={SECTION_HEADING}>Where data lives</h2>
          <p className={BODY}>
            Data handled by the Plugin is stored and processed in the United States. If you operate
            in the European Economic Area, the United Kingdom, or another region with data-transfer
            requirements, transfers to the United States are protected by appropriate safeguards,
            such as standard contractual clauses.
          </p>

          <h2 className={SECTION_HEADING}>How long we keep data</h2>
          <p className={BODY}>
            We keep your store, catalog, and order data for as long as the Plugin is installed and
            your Verified Roaster Partner account is active. If you uninstall the Plugin, we delete
            your store&rsquo;s data within 30 days of receiving Shopify&rsquo;s shop redaction
            request, except where the law requires us to keep records longer (for example,
            completed order records kept for tax and accounting purposes).
          </p>

          <h2 className={SECTION_HEADING}>Your customers&rsquo; rights, and yours</h2>
          <p className={BODY}>
            The Plugin honors Shopify&rsquo;s mandatory privacy webhooks. When a customer asks you
            for their data or asks to be forgotten, Shopify notifies us automatically and we
            respond accordingly:
          </p>
          <ul className={LIST}>
            <li>
              <strong>Data requests</strong> — we provide the personal data we hold about a
              customer so you can pass it on to them.
            </li>
            <li>
              <strong>Customer redaction</strong> — we delete the personal data we hold about that
              customer, subject to legal retention requirements.
            </li>
            <li>
              <strong>Shop redaction</strong> — after you uninstall, we delete your store&rsquo;s
              data as described above.
            </li>
          </ul>
          <p className={BODY}>
            Depending on where you or your customers live, you may have rights to access, correct,
            delete, or restrict the processing of personal data. To exercise any of these rights,
            or to ask us anything about this policy, email{' '}
            <a href="mailto:hello@tastcoffee.com" className="text-tast-pink hover:text-tast-red transition-colors">
              hello@tastcoffee.com
            </a>
            . We respond to verified requests within 30 days.
          </p>

          <h2 className={SECTION_HEADING}>Security</h2>
          <p className={BODY}>
            Data moves between Shopify and tāst over encrypted connections, access to production
            systems is limited to the people who need it, and API credentials are stored encrypted.
            No system is perfectly secure, but if a breach ever affects your data, we will notify
            you promptly and tell you plainly what happened and what we&rsquo;re doing about it.
          </p>

          <h2 className={SECTION_HEADING}>Changes to this policy</h2>
          <p className={BODY}>
            If we change this policy in a way that matters, we&rsquo;ll update the effective date
            above and notify you by email before the change takes effect. We won&rsquo;t quietly
            move the ground under you.
          </p>

          <h2 className={SECTION_HEADING}>Contact</h2>
          <p className={BODY}>
            In Great Taste LLC
            <br />
            Email:{' '}
            <a href="mailto:hello@tastcoffee.com" className="text-tast-pink hover:text-tast-red transition-colors">
              hello@tastcoffee.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
