export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-0.5 ${className}`}>
      <span className="font-mono font-bold text-tast-pink text-xl tracking-tight">
        tāst
      </span>
      <span className="font-handwritten text-tast-light-pink text-2xl leading-none">
        Coffee
      </span>
    </span>
  )
}
