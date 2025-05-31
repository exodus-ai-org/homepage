import { motion } from 'framer-motion'

export function FooterScreen() {
  return (
    <div className="space-y-16 px-8 py-16">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-8 text-6xl font-black text-white">
          Smooth as butter
        </h2>
        <p className="text-xl leading-relaxed text-gray-300">
          Lenis is a lightweight, robust, and performant smooth scroll library.
          It&apos;s designed to be simple to use and easy to integrate into your
          projects.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-8 text-6xl font-black text-white">Features</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-400">Lightweight</h3>
            <p className="text-gray-300">
              Only a few kilobytes gzipped, Lenis won&apos;t bloat your bundle.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-400">Performant</h3>
            <p className="text-gray-300">
              Optimized for 60fps smooth scrolling on all devices.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-400">Customizable</h3>
            <p className="text-gray-300">
              Fine-tune the scrolling behavior to match your design.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-400">Easy to use</h3>
            <p className="text-gray-300">
              Simple API that works out of the box with sensible defaults.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl pb-32"
      >
        <h2 className="mb-8 text-6xl font-black text-white">Get started</h2>
        <div className="rounded-lg bg-gray-900 p-6">
          <code className="text-lg text-pink-400">
            npm install @studio-freight/lenis
          </code>
        </div>
      </motion.section>
    </div>
  )
}
