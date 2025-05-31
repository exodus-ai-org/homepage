import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function DeepResearchScreen() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <ScrollItemWrapper className="flex flex-col items-center justify-center">
      <p className="subsection-headline">Deep Research</p>

      <div ref={ref}>
        <motion.img
          src="https://www.apple.com/v/macbook-pro/as/images/overview/continuity/mac_iphone__fi0qt3xixziq_large.jpg"
          alt="Mac + iPhone"
          // style={{ scale }}
          // className="w-1/2 rounded-2xl object-cover shadow-xl"
        />
      </div>
    </ScrollItemWrapper>
  )
}
