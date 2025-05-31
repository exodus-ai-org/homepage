import { LazyLoadImage } from '@/components/lazy-load-image'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'

export function Features() {
  return (
    <motion.section className="flex flex-col items-center justify-center">
      <LazyLoadImage
        src="/screenshots/deep-research-dark.png"
        alt="DeepResearchDark"
        className="w-[1260px] rounded-[70px]"
      />
      <Tabs defaultValue="deepResearch" className="mt-8">
        <TabsList>
          <TabsTrigger value="deepResearch">Deep Research</TabsTrigger>
          <TabsTrigger value="weather">Weather</TabsTrigger>
          <TabsTrigger value="routings">Routings</TabsTrigger>
          <TabsTrigger value="placings">Placings</TabsTrigger>
          <TabsTrigger value="webSearch">Web Search</TabsTrigger>
          <TabsTrigger value="mcp">MCP</TabsTrigger>
        </TabsList>
      </Tabs>
    </motion.section>
  )
}
