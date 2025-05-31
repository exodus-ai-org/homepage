import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ImageZoomSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  return (
    <section
      ref={ref}
      className="flex h-screen items-center justify-center bg-black"
    >
      <motion.img
        src="https://edge.yancey.app/beg/3o9hovnh-1731643180511.jpg"
        alt="Zoom"
        style={{ scale }}
        className="w-1/2 rounded-2xl object-cover shadow-xl"
      />
    </section>
  )
}
