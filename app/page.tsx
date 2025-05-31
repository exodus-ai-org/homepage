'use client'

import { ReactLenis } from 'lenis/react'
import { CallingToolsScreen } from './components/calling-tools-screen'
import { DeepResearchScreen } from './components/deep-research'
import { MainScreen } from './components/main-screen'
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
      <main className="min-h-[600dvh]">
        <MainScreen />
        <ProvidersScreen />
        <CallingToolsScreen />
        <DeepResearchScreen />
        {/* <ImageZoomSection />
        <SplitParallax />
        <ScrollFadeSection />
        <FooterScreen /> */}
      </main>
    </ReactLenis>
  )
}
