'use client'

import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download, Github, Heart } from 'lucide-react'

const featureTags = [
  'MCP',
  'RAG',
  'Artifacts',
  'AI Agents',
  'Deep Research',
  'Multi-Provider'
]

export function MainScreen() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0])

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-60 -left-60 h-[700px] w-[700px] rounded-full bg-purple-700/25 blur-[140px]" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[120px]" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/3 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="animate-blob animation-delay-3000 absolute top-10 right-1/3 h-[300px] w-[300px] rounded-full bg-pink-700/15 blur-[100px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Hero content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center px-4 text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Open Source · MIT License
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-[15vw] leading-none font-black tracking-tight md:text-[12vw] lg:text-[10vw]"
          style={{
            backgroundImage:
              'linear-gradient(160deg, #ffffff 0%, #f0ecff 55%, #e2daff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 60px rgba(168, 85, 247, 0.15))'
          }}
        >
          Exodus
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="mb-8 max-w-2xl text-base text-white/50 sm:text-lg md:text-xl"
        >
          The modern AI ChatBot featuring MCP, Artifacts, RAG, AI Agents,
          <br className="hidden sm:block" /> Deep Research, and more — all in
          one open-source app.
        </motion.p>

        {/* Feature tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {featureTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40 backdrop-blur-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button asChild className="h-11 gap-2 rounded-full bg-white px-6 font-semibold text-black hover:bg-white/90">
            <a href="https://github.com/exodus-ai-org/exodus" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 gap-2 rounded-full border-white/20 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <a href="#download">
              <Download className="h-4 w-4" />
              Download
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-11 gap-2 rounded-full px-6 text-white/50 hover:bg-white/5 hover:text-white"
          >
            <a href="https://github.com/sponsors/YanceyOfficial" target="_blank" rel="noopener noreferrer">
              <Heart className="h-4 w-4" />
              Sponsor
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-white/20" />
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute right-6 bottom-6 text-xs text-white/20"
      >
        © {new Date().getFullYear()} Yancey Inc.
      </motion.div>
    </div>
  )
}
