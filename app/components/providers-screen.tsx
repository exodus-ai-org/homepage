import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { motion } from 'framer-motion'

export function ProvidersScreen() {
  return (
    <ScrollItemWrapper className="flex items-center justify-center">
      <motion.section className="bg-black text-[5rem] text-white">
        Supports mainstream LLMs.
        <div className="flex gap-4">
          <div className="h-10 w-10 bg-[url(/provider-logos/azure-openai.svg)] bg-cover"></div>
          <div className="h-10 w-10 bg-[url(/provider-logos/openai.svg)] bg-cover"></div>
          <div className="h-10 w-10 bg-[url(/provider-logos/gemini.svg)] bg-cover"></div>
          <div className="h-10 w-10 rounded-full bg-white bg-[url(/provider-logos/xai.svg)] bg-cover"></div>
          <div className="h-10 w-10 rounded-full bg-white bg-[url(/provider-logos/anthropic.svg)] bg-cover"></div>
          <div className="h-10 w-10 rounded-full bg-white bg-[url(/provider-logos/ollama.svg)] bg-cover"></div>
        </div>
      </motion.section>
    </ScrollItemWrapper>
  )
}
