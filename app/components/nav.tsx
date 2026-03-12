'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Download, Github } from 'lucide-react'
import { useState } from 'react'

const links = ['Features', 'Tools', 'Research', 'Providers']

export function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'shadow-lg shadow-purple-950/30 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
      style={
        scrolled
          ? { background: 'linear-gradient(135deg, rgba(15,5,30,0.88) 0%, rgba(10,3,22,0.88) 50%, rgba(12,4,28,0.88) 100%)' }
          : undefined
      }
    >
      {/* Gradient bottom border — only when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      )}

      <div className="mx-auto flex h-[52px] max-w-[980px] items-center justify-between px-4">
        <div className="text-sm font-semibold tracking-tight text-white">
          Exodus
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/exodus-ai-org/exodus"
            className="flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:block">GitHub</span>
          </a>
          <a
            href="#download"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all hover:bg-white/90"
          >
            <Download className="h-3 w-3" />
            Download
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
