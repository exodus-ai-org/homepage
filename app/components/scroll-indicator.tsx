'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        zIndex: 10,
        backgroundColor: '#ff0088'
      }}
    />
  )
}
