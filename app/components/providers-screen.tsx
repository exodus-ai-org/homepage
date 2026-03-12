'use client'

import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { motion } from 'framer-motion'

const providers = [
  { name: 'Azure OpenAI', logo: '/provider-logos/azure-openai.svg', bg: false },
  { name: 'OpenAI', logo: '/provider-logos/openai.svg', bg: false },
  { name: 'Gemini', logo: '/provider-logos/gemini.svg', bg: false },
  { name: 'xAI Grok', logo: '/provider-logos/xai.svg', bg: true },
  { name: 'Anthropic', logo: '/provider-logos/anthropic.svg', bg: true },
  { name: 'Ollama', logo: '/provider-logos/ollama.svg', bg: true }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
}

export function ProvidersScreen() {
  return (
    <ScrollItemWrapper
      id="providers"
      className="flex flex-col justify-center py-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase"
      >
        Multi-Provider
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="subsection-headline mb-6"
      >
        Supports mainstream LLMs.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-16 max-w-lg text-xl text-[#86868b]"
      >
        Connect to the AI model that works best for your workflow. Switch
        between providers seamlessly — no configuration required.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="flex flex-wrap gap-5"
      >
        {providers.map((provider) => (
          <motion.div
            key={provider.name}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.06 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group flex flex-col items-center gap-3"
          >
            <div
              className={`relative flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-[22px] border border-black/8 bg-white/90 shadow-sm shadow-black/5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/10 dark:border-white/10 dark:bg-white/8 dark:group-hover:bg-white/12`}
            >
              <div
                className={`h-14 w-14 bg-contain bg-center bg-no-repeat ${provider.bg ? 'rounded-lg bg-white p-1' : ''}`}
                style={{ backgroundImage: `url(${provider.logo})` }}
              />
            </div>
            <span className="group-hover:text-foreground text-xs font-medium text-[#86868b] transition-colors duration-200">
              {provider.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-sm text-[#86868b]"
      >
        + more providers coming soon
      </motion.p>
    </ScrollItemWrapper>
  )
}
