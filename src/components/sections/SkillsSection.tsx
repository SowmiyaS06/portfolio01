import { motion } from 'framer-motion'
import Section from '../Section'
import { staggerContainer, staggerItem } from '../../lib/motion'

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'

type SkillItem = {
  name: string
  level: SkillLevel
  progress: number
}

const levelClassMap: Record<SkillLevel, string> = {
  Beginner:
    'bg-slate-200 text-slate-700 dark:bg-slate-700/70 dark:text-slate-100',
  Intermediate:
    'bg-amber-100 text-amber-800 dark:bg-amber-500/25 dark:text-amber-200',
  Advanced:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/25 dark:text-emerald-200',
}

function SkillsSection() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      description: 'Strong foundations in structured programming, object-oriented thinking, and problem solving.',
      items: [
        { name: 'C', level: 'Intermediate' as SkillLevel, progress: 75 },
        { name: 'C++', level: 'Intermediate' as SkillLevel, progress: 75 },
        { name: 'Java', level: 'Intermediate' as SkillLevel, progress: 72 },
      ],
    },
    {
      title: 'Frontend Development',
      description: 'Build responsive interfaces and interactive user experiences with a clean component approach.',
      items: [
        { name: 'HTML', level: 'Advanced' as SkillLevel, progress: 85 },
        { name: 'CSS', level: 'Advanced' as SkillLevel, progress: 80 },
        { name: 'JavaScript', level: 'Intermediate' as SkillLevel, progress: 70 },
        { name: 'React', level: 'Intermediate' as SkillLevel, progress: 75 },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Work with server-side logic, API flows, and application structure that supports real features.',
      items: [
        { name: 'Node.js', level: 'Intermediate' as SkillLevel, progress: 68 },
        { name: 'Express', level: 'Intermediate' as SkillLevel, progress: 66 },
        { name: 'REST APIs', level: 'Intermediate' as SkillLevel, progress: 70 },
      ],
    },
    {
      title: 'Databases',
      description: 'Use relational and NoSQL data models to organize information and support application workflows.',
      items: [
        { name: 'Oracle SQL', level: 'Advanced' as SkillLevel, progress: 78 },
        { name: 'MongoDB', level: 'Intermediate' as SkillLevel, progress: 65 },
      ],
    },
    {
      title: 'Tools & Technologies',
      description: 'Depend on practical tooling for development, collaboration, and shipping work efficiently.',
      items: [
        { name: 'Git', level: 'Intermediate' as SkillLevel, progress: 70 },
        { name: 'VS Code', level: 'Advanced' as SkillLevel, progress: 85 },
        { name: 'Tailwind CSS', level: 'Intermediate' as SkillLevel, progress: 72 },
        { name: 'AI APIs', level: 'Beginner' as SkillLevel, progress: 55 },
      ],
    },
  ] as { title: string; description: string; items: SkillItem[] }[]

  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-slate-100 dark:bg-slate-950"
      contentClassName="w-full"
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillGroups.map((group) => (
          <motion.article
            key={group.title}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="rounded-2xl border border-cyan-500/20 bg-white p-6 shadow-lg shadow-cyan-700/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 dark:border-cyan-300/20 dark:bg-slate-900/60 dark:shadow-cyan-950/20 dark:hover:border-cyan-300/40"
          >
            <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300">{group.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {group.description}
            </p>
            <ul className="mt-5 space-y-2 text-slate-700 dark:text-slate-200">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-3 text-sm font-medium text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${levelClassMap[item.level]}`}
                      >
                        {item.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                        {item.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-300/80 dark:bg-slate-700/80">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}

export default SkillsSection