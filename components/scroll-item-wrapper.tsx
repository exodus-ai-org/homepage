import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function ScrollItemWrapper({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={cn('min-h-screen mt-[88px] max-w-[980px] mx-auto', className)}>{children}</section>
}
