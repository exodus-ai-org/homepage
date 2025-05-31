import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SplitParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      ref={ref}
      className="flex h-screen overflow-hidden bg-gray-900 text-white"
    >
      <motion.div
        style={{ y: leftY }}
        className="flex w-1/2 items-center justify-center text-3xl"
      >
        Move Up
      </motion.div>
      <motion.div
        style={{ y: rightY }}
        className="flex w-1/2 items-center justify-center text-3xl"
      >
        Move Down
      </motion.div>
    </section>
  )
}
