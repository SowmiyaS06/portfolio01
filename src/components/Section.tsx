import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

type SectionProps = {
  id: string
  title: string
  children?: ReactNode
  className?: string
  contentClassName?: string
}

function Section({ id, title, children, className = '', contentClassName = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`w-full scroll-mt-20 border-b border-slate-200 px-6 py-20 md:px-12 md:py-28 lg:px-20 dark:border-white/10 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-cyan-700 md:text-4xl dark:text-cyan-300">{title}</h2>
        <div className={`text-slate-700 dark:text-slate-300 ${contentClassName}`}>{children}</div>
      </div>
    </motion.section>
  )
}

export default Section