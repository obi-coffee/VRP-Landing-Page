import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { HERO_VIDEO_URL } from '@/lib/constants'
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
      className={`${spaceMono.variable} ${caveat.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="video"
          href={HERO_VIDEO_URL}
          type="video/mp4"
        />
      </head>
      <body className="bg-london-fog text-rich-black font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
