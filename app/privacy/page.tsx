import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — tāst Coffee',
  description: 'How tāst Coffee collects, uses and protects your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto prose-terms">
          <h1 className="font-sans font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-2">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-12">
            Effective: October 1, 2026 · Last Updated: October 16, 2026
          </p>

          <div className="space-y-4 font-serif text-base leading-relaxed text-rich-black/80">
            <p>
              This Privacy Policy explains how In Great Taste LLC
              (&ldquo;tāst,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) collects, uses, shares and protects information
              when you use the tāst website at tastcoffee.com, the tāst mobile
              application, the tāst Roaster sales channel for Shopify, and any
              related services (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              By using our Services you agree to the collection and use of
              information as described in this policy. If you do not agree,
              please do not use the Services.
            </p>
          </div>

          <Section number={1} title="Information we collect">
            <p>
              <strong>Information you provide directly.</strong>
            </p>
            <ul>
              <li>
                <strong>Roaster Partner applications:</strong> roastery name,
                contact name, email address, phone number, business location,
                website URL, Instagram handle, year founded, how you heard about
                tāst, areas of interest and any additional notes you include.
              </li>
              <li>
                <strong>Beta sign-ups:</strong> first name, last name and email
                address.
              </li>
              <li>
                <strong>General inquiries:</strong> any information you include
                when you email us.
              </li>
              <li>
                <strong>App account:</strong> when you create a tāst account, we
                collect your name, email address and any profile information you
                choose to add, such as taste preferences and saved coffees.
              </li>
            </ul>

            <p>
              <strong>Information collected automatically.</strong>
            </p>
            <ul>
              <li>
                <strong>Usage data:</strong> pages visited, features used, search
                queries, coffees viewed or saved, and interactions with roaster
                profiles.
              </li>
              <li>
                <strong>Device and browser data:</strong> IP address, browser
                type and version, operating system, device type and screen size.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> we use cookies
                and local storage to keep you signed in, remember your
                preferences and understand how the Services are used. You can
                control cookies through your browser settings, but some features
                may not work correctly without them.
              </li>
            </ul>

            <p>
              <strong>Information from third parties.</strong>
            </p>
            <ul>
              <li>
                <strong>Shopify:</strong> for Roaster Partners who install the
                tāst sales channel, we receive product, inventory, location and
                order data from Shopify as described in our{' '}
                <a href="/terms" className="text-tast-pink hover:underline">
                  Sales Channel Terms
                </a>
                .
              </li>
            </ul>
          </Section>

          <Section number={2} title="How we use your information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>
                provide, operate and improve the Services, including coffee
                discovery, recommendations and roaster profiles;
              </li>
              <li>
                process and review Roaster Partner applications;
              </li>
              <li>
                notify beta sign-ups when the app is ready for testing;
              </li>
              <li>
                calculate and bill commissions on orders placed through the tāst
                sales channel;
              </li>
              <li>
                send transactional emails such as application confirmations,
                order notifications and account updates;
              </li>
              <li>
                send product updates and announcements you have opted into (you
                can unsubscribe at any time);
              </li>
              <li>
                monitor for fraud, abuse and violations of our terms;
              </li>
              <li>
                comply with legal obligations.
              </li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your data
              to train machine-learning models.
            </p>
          </Section>

          <Section number={3} title="How we share your information">
            <p>
              We share information only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers.</strong> We use third-party services
                to help operate the Services, including Shopify (e-commerce
                platform), Resend (transactional email), Google Workspace
                (internal operations) and hosting providers. These providers
                access your data only to perform services on our behalf and are
                contractually required to protect it.
              </li>
              <li>
                <strong>Roaster Partners.</strong> When you place an order
                through tāst, the Roaster Partner who fulfils your order
                receives your name, shipping address and email through Shopify
                checkout, as they are the seller of record.
              </li>
              <li>
                <strong>Legal requirements.</strong> We may disclose information
                if required by law, regulation, legal process or governmental
                request, or to protect the rights, property or safety of tāst,
                our users or the public.
              </li>
              <li>
                <strong>Business transfers.</strong> If tāst is involved in a
                merger, acquisition or sale of assets, your information may be
                transferred as part of that transaction. We will notify you
                before your information becomes subject to a different privacy
                policy.
              </li>
            </ul>
          </Section>

          <Section number={4} title="Data retention">
            <p>
              We retain your information for as long as your account is active or
              as needed to provide the Services. If you request deletion of your
              account, we will delete your personal information within thirty
              (30) days, except where we are required to retain it for legal,
              accounting or fraud-prevention purposes.
            </p>
            <p>
              For Roaster Partners who uninstall the tāst sales channel, we
              delete Shopify store data within thirty (30) days as described in
              our{' '}
              <a href="/terms" className="text-tast-pink hover:underline">
                Sales Channel Terms
              </a>
              .
            </p>
          </Section>

          <Section number={5} title="Data security">
            <p>
              We use commercially reasonable technical and organizational
              measures to protect your information, including encryption in
              transit (TLS) and at rest, access controls and regular security
              reviews. However, no method of transmission or storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section number={6} title="Your rights and choices">
            <p>
              Depending on where you live, you may have the right to:
            </p>
            <ul>
              <li>
                access, correct or delete the personal information we hold about
                you;
              </li>
              <li>
                object to or restrict certain processing of your data;
              </li>
              <li>
                withdraw consent where processing is based on consent;
              </li>
              <li>
                request a portable copy of your data;
              </li>
              <li>
                opt out of marketing communications at any time by clicking
                &ldquo;unsubscribe&rdquo; in any email or by contacting us.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a
                href="mailto:legal@tastcoffee.com"
                className="text-tast-pink hover:underline"
              >
                legal@tastcoffee.com
              </a>
              . We will respond within thirty (30) days.
            </p>
          </Section>

          <Section number={7} title="Children's privacy">
            <p>
              The Services are not directed to children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If we learn that we have collected information from a child
              under 13, we will delete it promptly. If you believe a child has
              provided us with personal information, please contact us at{' '}
              <a
                href="mailto:legal@tastcoffee.com"
                className="text-tast-pink hover:underline"
              >
                legal@tastcoffee.com
              </a>
              .
            </p>
          </Section>

          <Section number={8} title="California residents">
            <p>
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) provides you with additional rights, including the right
              to know what personal information we collect and how we use it, the
              right to request deletion, and the right not to be discriminated
              against for exercising your rights. We do not sell personal
              information as defined by the CCPA.
            </p>
            <p>
              To submit a request, email{' '}
              <a
                href="mailto:legal@tastcoffee.com"
                className="text-tast-pink hover:underline"
              >
                legal@tastcoffee.com
              </a>{' '}
              with the subject line &ldquo;CCPA Request.&rdquo;
            </p>
          </Section>

          <Section number={9} title="Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will notify you by email or by posting a
              notice on the Services at least thirty (30) days before the changes
              take effect. Your continued use of the Services after the effective
              date constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section number={10} title="Contact us">
            <p>
              If you have questions about this Privacy Policy or how we handle
              your data, contact us at:
            </p>
            <p>
              In Great Taste LLC
              <br />
              <a
                href="mailto:legal@tastcoffee.com"
                className="text-tast-pink hover:underline"
              >
                legal@tastcoffee.com
              </a>
              {' · '}
              <a
                href="mailto:hello@tastcoffee.co"
                className="text-tast-pink hover:underline"
              >
                hello@tastcoffee.co
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
