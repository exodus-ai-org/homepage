'use client'

import { ReactLenis } from 'lenis/react'
import { Nav } from './nav'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        duration: 1.2,
        smoothWheel: true
      }}
    >
      <Nav />
      <main>{children}</main>
    </ReactLenis>
  )
}
