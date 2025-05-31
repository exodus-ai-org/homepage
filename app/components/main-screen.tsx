import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Github, Heart } from 'lucide-react'

export function MainScreen() {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Large Lenis Text */}
      <motion.div style={{ y, opacity }} className="relative z-10">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gradient-to-br from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-[20vw] leading-none font-black tracking-tight text-transparent"
          style={{
            textShadow: '0 0 40px rgba(244, 114, 182, 0.3)',
            filter: 'drop-shadow(0 10px 20px rgba(244, 114, 182, 0.2))',
            transform: 'perspective(1000px) rotateX(15deg)'
          }}
        >
          Exodus
        </motion.h1>
      </motion.div>

      {/* Bottom Right Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute right-8 bottom-8 text-right"
      >
        {/* <div className="text-white text-4xl font-black tracking-wider">
        SMOOTH SCROLL
      </div> */}
        <div className="mt-2 text-sm text-gray-400">
          © {new Date().getFullYear()} Yancey Inc.
        </div>
      </motion.div>

      {/* Bottom Left Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-8 flex gap-4"
      >
        <Button className="flex items-center gap-2 bg-pink-500 text-white hover:bg-pink-600">
          <Github className="h-4 w-4" />
          GITHUB
        </Button>
        <Button className="flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700">
          <Download className="h-4 w-4" />
          DOWNLOAD
        </Button>
        <Button className="flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700">
          <Heart className="h-4 w-4" />
          SPONSOR
        </Button>
      </motion.div>
    </div>
  )
}
