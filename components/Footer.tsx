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
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto text-center">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2 font-sans text-sm">
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
              <li>
                <a
                  href="https://instagram.com/tastcoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rich-black/70 hover:text-tast-pink transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rich-black/40 mb-4">
              Get Help
            </h4>
            <ul className="space-y-2 font-sans text-sm">
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
        <div className="opacity-40 mb-4">
          <Logo />
        </div>
        <p className="font-sans text-xs text-rich-black/40">
          &copy; 2026 In Great Taste, LLC
        </p>
      </div>
    </footer>
  )
}
