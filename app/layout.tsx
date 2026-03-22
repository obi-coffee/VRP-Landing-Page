import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const spaceMono = localFont({
  src: [
    {
      path: '../public/fonts/space-mono-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/space-mono-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
  display: 'swap',
})

const dmSans = localFont({
  src: [
    {
      path: '../public/fonts/dm-sans-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/dm-sans-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/dm-sans-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
})

const caveat = localFont({
  src: [
    {
      path: '../public/fonts/caveat-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/caveat-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-handwritten',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Become a Verified Roaster Partner — tāst Coffee',
  description:
    'tāst is building the definitive platform for specialty coffee discovery. Apply to become a founding roaster partner.',
  openGraph: {
    title: 'Become a Verified Roaster Partner — tāst Coffee',
    description:
      'tāst is building the definitive platform for specialty coffee discovery. Apply to become a founding roaster partner.',
    type: 'website',
    siteName: 'tāst Coffee',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <body className="bg-london-fog text-rich-black font-body antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
