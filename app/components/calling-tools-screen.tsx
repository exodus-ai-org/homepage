'use client'

import { Tab } from '@/components/tab'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MbpProfile } from './mbp-profile'

const tabs = [
  { label: 'Weather', value: 'weather' },
  { label: 'Routings', value: 'routings' },
  { label: 'Placings', value: 'placings' },
  { label: 'Web Search', value: 'webSearch' }
]

// Map each tab to its screenshot — swap in real images as you add them
const tabImages: Record<string, string> = {
  weather: '/mbp-profile/google-maps-routing-light.jpg',
  routings: '/mbp-profile/google-maps-routing-light.jpg',
  placings: '/mbp-profile/google-maps-routing-light.jpg',
  webSearch: '/mbp-profile/google-maps-routing-light.jpg'
}

export function CallingToolsScreen() {
  const [value, setValue] = useState('weather')

  return (
    <section id="tools" className="bg-black py-24">
      {/* Text block — constrained width */}
      <div className="mx-auto max-w-[980px] px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase"
        >
          Built-in Tools
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="subsection-headline mb-6 text-white"
        >
          Link AI with realities.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-xl text-[#86868b]"
        >
          Intelligent tools are seamlessly integrated to bring AI closer to the
          real world — checking weather, planning routes, finding places, or
          searching the web in real time.
        </motion.p>
      </div>

      {/* MacBook + tabs */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 flex flex-col items-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <MbpProfile src={tabImages[value]} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-8">
          <Tab value={value} handleTabChange={setValue} tabs={tabs} />
        </div>
      </motion.div>
    </section>
  )
}
