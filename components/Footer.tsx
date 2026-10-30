import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-london-fog border-t border-rich-black/10">
      {/* Stay in the loop */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="font-editorial text-2xl mb-2">Stay in the loop.</p>
        <p className="font-sans text-sm text-rich-black/60 mb-6">
          We&apos;ll send updates as we get closer to launch. No spam, ever.
        </p>
        <a
          href="mailto:hello@tastcoffee.co?subject=Keep%20me%20updated%20on%20t%C4%81st"
          className="inline-block font-mono text-xs uppercase tracking-wider text-tast-pink border-b border-tast-pink/30 pb-1 hover:border-tast-pink transition-colors"
        >
          hello@tastcoffee.co
        </a>
      </div>

      {/* Links */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-4">
              Roasters
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href="/roasters"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Become a Partner
                </a>
              </li>
              <li>
                <a
                  href="https://tastcoffee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  tastcoffee.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-4">
              Beta
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href="/beta"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Join the Beta
                </a>
              </li>
              <li>
                <a
                  href="/beta-home"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Beta Home
                </a>
              </li>
              <li>
                <a
                  href="/waitlist"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Waitlist
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href="/terms"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href="https://www.instagram.com/tastcoffeeco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tastcoffee.co"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  hello@tastcoffee.co
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-rich-black/10 py-8 text-center">
        <div className="opacity-40 mb-4 flex justify-center">
          <Logo />
        </div>
        <p className="font-sans text-xs text-rich-black/40">
          &copy; 2026 In Great Taste, LLC
        </p>
      </div>
    </footer>
  )
}
