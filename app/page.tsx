'use client'

import { ReactLenis } from 'lenis/react'
import { CallingToolsScreen } from './components/calling-tools-screen'
import { DeepResearchScreen } from './components/deep-research'
import { FeaturesGrid } from './components/features-grid'
import { FooterScreen } from './components/footer-screen'
import { MainScreen } from './components/main-screen'
import { Nav } from './components/nav'
import { ProvidersScreen } from './components/providers-screen'

export default function LenisWebsite() {
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
      <main>
        <MainScreen />
        <ProvidersScreen />
        <FeaturesGrid />
        <CallingToolsScreen />
        <DeepResearchScreen />
        <FooterScreen />
      </main>
    </ReactLenis>
  )
}
