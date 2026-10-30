import type { ReactNode } from 'react'

const POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='100%25' height='100%25' fill='%231A1A1A'/%3E%3C/svg%3E"

export default function VideoHero({
  videoSrc,
  children,
}: {
  videoSrc: string
  children: ReactNode
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-rich-black" aria-hidden="true" />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        className="absolute inset-0 z-[1] w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-[2] bg-rich-black/60"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
