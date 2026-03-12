import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function ScrollItemWrapper({
  children,
  className,
  id
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('mx-auto max-w-[980px] px-6', className)}>
      {children}
    </section>
  )
}
