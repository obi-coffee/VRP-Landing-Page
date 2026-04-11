import Image from 'next/image'

export default function Logo({ className = '', variant = 'pink' }: { className?: string; variant?: 'pink' | 'ivory' }) {
  const src = variant === 'ivory' ? '/Logor_Flat_Ivory.svg' : '/Logo_Flat_Pink.svg'
  return (
    <Image
      src={src}
      alt="tāst Coffee"
      width={437}
      height={90}
      className={`h-8 w-auto ${className}`}
      priority
    />
  )
}
