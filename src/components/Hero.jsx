import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* animated radial glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-120px,rgba(59,130,246,0.35),transparent_70%)]" />
        {/* subtle moving gradient beams */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[1200px] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400"
          animate={{
            x: [0, 30, -20, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="container mx-auto px-6 pt-20 pb-8 md:pt-28 md:pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              variants={item}
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/30 shadow-[0_0_0_1px_rgba(147,197,253,0.15)_inset] backdrop-blur-sm"
            >
              Full‑Stack Developer
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Building modern, playful, high‑impact apps
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-blue-200/80 leading-relaxed"
            >
              I design and develop end‑to‑end products that feel fast, polished, and fun. Explore selected work, the stack I love, and ways to collaborate.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={{ y: -1, boxShadow: '0 8px 30px rgba(59,130,246,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition will-change-transform"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-white/10"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-2"
            >
              {['FastAPI', 'React', 'MongoDB', 'Spline'].map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                  className="text-xs text-blue-200/80 bg-white/5 ring-1 ring-white/10 px-2.5 py-1 rounded-full"
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Spline with framing, parallax tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, rotate: -0.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[360px] md:h-[520px]"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{ perspective: 1000 }}
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 80, damping: 10 }}
            >
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[0_0_80px_rgba(59,130,246,0.35)_inset]" />
            {/* Accent orbs */}
            <motion.div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
            <motion.div className="absolute -left-6 bottom-6 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 hidden md:flex items-center gap-2 text-blue-200/60"
        >
          <div className="h-5 w-px bg-gradient-to-b from-transparent via-blue-400/60 to-transparent" />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
