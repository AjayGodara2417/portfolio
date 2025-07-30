import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={cn('mb-12', alignment, className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  )
}
