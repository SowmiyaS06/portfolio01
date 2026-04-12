import { motion } from 'framer-motion'
import profileImage from '../../assets/profile.jpeg'
import { fadeUp, staggerContainer, staggerItem } from '../../lib/motion'

function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-orange-900"
    >
      <div className="hero-gradient-flow absolute inset-[-25%] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_48%)]" />
      <div className="relative flex min-h-screen w-full items-center justify-center px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <motion.div
          className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-1 md:mb-2">
            <div className="overflow-hidden rounded-full bg-white/5 p-2 shadow-[0_0_48px_rgba(34,211,238,0.32)] ring-1 ring-cyan-300/30 transition-all duration-300 hover:scale-105">
              <img
                src={profileImage}
                alt="Sowmiya S profile"
                loading="eager"
                decoding="async"
                className="h-40 w-40 rounded-full border-4 border-cyan-400 object-cover object-[center_22%] scale-[1.35] shadow-2xl shadow-cyan-500/35 sm:h-48 sm:w-48 md:h-52 md:w-52"
              />
            </div>
          </motion.div>
          <motion.h1 variants={staggerItem} className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
            Sowmiya S
          </motion.h1>
          <motion.h2 variants={staggerItem} className="text-lg font-medium text-slate-200 sm:text-xl md:text-3xl">
            <span className="typing-role">Full-Stack Developer | AI Enthusiast</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            <p>
              I build AI-driven and full-stack applications that blend intelligent features with
              practical, user-friendly interfaces.
            </p>
            <p>
              My work focuses on turning ideas into reliable digital products that solve real
              problems, support better decisions, and create smoother everyday workflows.
            </p>
          </motion.div>
          <motion.p variants={staggerItem} className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
            I care about shipping thoughtful software that is easy to use, technically sound,
            and genuinely useful for the people who depend on it.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-6 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-white/5 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-cyan-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        variants={staggerItem}
        initial="hidden"
        animate="visible"
        className="subtle-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-200/85 transition-all duration-300 hover:text-cyan-100"
        aria-label="Scroll to About section"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M6 9.5 12 15.5 18 9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  )
}

export default HeroSection