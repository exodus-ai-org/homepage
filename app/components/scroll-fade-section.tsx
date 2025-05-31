import { motion } from 'framer-motion'

export default function ScrollFadeSection() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 bg-black">
      {[1, 2, 3].map((n) => (
        <motion.div
          key={n}
          className="rounded-xl bg-white px-6 py-4 text-2xl text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: n * 0.2 }}
          viewport={{ once: true }}
        >
          Item {n}
        </motion.div>
      ))}
    </section>
  )
}
