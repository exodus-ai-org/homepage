'use client'

import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { motion } from 'framer-motion'
import { BotIcon, Cpu, Database, FileText, Layers, Search } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'MCP Support',
    description:
      'Connect to any Model Context Protocol server. Extend AI capabilities with tools, resources, and custom prompts.',
    gradient: 'from-purple-500/15 to-violet-500/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/10'
  },
  {
    icon: FileText,
    title: 'Artifacts',
    description:
      'Generate and preview rich content inline — code, charts, diagrams, and interactive React components.',
    gradient: 'from-blue-500/15 to-cyan-500/5',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/10'
  },
  {
    icon: Database,
    title: 'RAG',
    description:
      'Upload documents and query them with AI. Retrieval-Augmented Generation for accurate, source-cited answers.',
    gradient: 'from-emerald-500/15 to-green-500/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/10'
  },
  {
    icon: BotIcon,
    title: 'AI Agents',
    description:
      'Autonomous agents that plan, reason, and act. Multi-step task automation powered by cutting-edge LLMs.',
    gradient: 'from-orange-500/15 to-amber-500/5',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    glow: 'group-hover:shadow-orange-500/10'
  },
  {
    icon: Search,
    title: 'Deep Research',
    description:
      'Web-scale research with automatic source tracking. Get comprehensive, cited reports on any topic.',
    gradient: 'from-pink-500/15 to-rose-500/5',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    glow: 'group-hover:shadow-pink-500/10'
  },
  {
    icon: Cpu,
    title: 'Multi-Provider',
    description:
      'Switch between OpenAI, Anthropic, Gemini, xAI, and local Ollama models. Your AI, your choice.',
    gradient: 'from-indigo-500/15 to-blue-500/5',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    glow: 'group-hover:shadow-indigo-500/10'
  }
]

export function FeaturesGrid() {
  return (
    <ScrollItemWrapper id="features" className="py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase"
      >
        Capabilities
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="subsection-headline mb-4"
      >
        Everything you need.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-16 max-w-xl text-xl text-[#86868b]"
      >
        A complete AI assistant built for power users and developers — packed
        with modern capabilities right out of the box.
      </motion.p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.gradient} p-6 shadow-xl ${feature.glow} backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-2xl`}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="mb-4 inline-block"
            >
              <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
            </motion.div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#86868b]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ScrollItemWrapper>
  )
}
