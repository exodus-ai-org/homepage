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

      <div>
        <h3>Planning</h3>
        <p>
          Deep Research transforms your prompt into a personalized multi-point
          research plan
        </p>
      </div>

      <div>
        <h3>Searching</h3>
        <p>
          Deep Research autonomously searches and deeply browses the web to find
          relevant, up-to-date information
        </p>
      </div>

      <div>
        <h3>Reasoning</h3>
        <p>
          Deep Research shows its thoughts as it reasons over information
          gathered iteratively and thinks before making its next move
        </p>
      </div>

      <div>
        <h3>Reporting</h3>
        <p>
          Deep Research provides comprehensive custom research reports with more
          detail and insights, generated in minutes and available as an Audio
          Overview, saving you hours of time
        </p>
      </div>
    </ScrollItemWrapper>
  )
}
