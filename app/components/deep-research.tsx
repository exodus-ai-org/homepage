'use client'

import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function DeepResearchScreen() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <ScrollItemWrapper
      id="research"
      className="flex flex-col items-center justify-center py-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase"
      >
        Research
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="subsection-headline mb-6 text-center"
      >
        Deep Research.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-16 max-w-xl text-center text-xl text-[#86868b]"
      >
        Web-scale research with automatic source tracking. Get comprehensive,
        cited reports on any topic in minutes — not hours.
      </motion.p>

      <div ref={ref} className="w-full max-w-3xl">
        <motion.div
          style={{ scale, opacity }}
          className="overflow-hidden rounded-3xl shadow-2xl shadow-black/20"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/40 via-black to-indigo-900/40">
            {/* Research UI mockup */}
            <div className="absolute inset-0 flex flex-col p-8">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
                <div className="ml-2 flex-1 rounded-full bg-white/5 py-1.5 text-center text-xs text-white/30">
                  exodus — Deep Research
                </div>
              </div>

              {/* Search query */}
              <div className="mb-6 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">
                <p className="text-sm text-purple-300/80">Research query:</p>
                <p className="mt-1 text-base font-medium text-white/90">
                  &quot;Latest advances in AI reasoning models 2025&quot;
                </p>
              </div>

              {/* Progress steps */}
              <div className="space-y-3">
                {[
                  { label: 'Searching the web', done: true },
                  { label: 'Analyzing 24 sources', done: true },
                  { label: 'Synthesizing findings', done: false }
                ].map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 text-xs ${
                        step.done
                          ? 'border-purple-400 bg-purple-400/20 text-purple-300'
                          : 'border-white/20 bg-white/5 text-white/30'
                      }`}
                    >
                      {step.done ? '✓' : ''}
                    </div>
                    <span
                      className={`text-sm ${step.done ? 'text-white/70' : 'text-white/30'}`}
                    >
                      {step.label}
                    </span>
                    {!step.done && (
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-violet-500"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollItemWrapper>
  )
}
