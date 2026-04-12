import { motion } from 'framer-motion'
import Section from '../Section'
import { staggerContainer, staggerItem } from '../../lib/motion'

function SkillsSection() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      description: 'Strong foundations in structured programming, object-oriented thinking, and problem solving.',
      items: ['C', 'C++', 'Java'],
    },
    {
      title: 'Frontend Development',
      description: 'Build responsive interfaces and interactive user experiences with a clean component approach.',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Backend Development',
      description: 'Work with server-side logic, API flows, and application structure that supports real features.',
      items: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      title: 'Databases',
      description: 'Use relational and NoSQL data models to organize information and support application workflows.',
      items: ['Oracle SQL', 'MongoDB'],
    },
    {
      title: 'Tools & Technologies',
      description: 'Depend on practical tooling for development, collaboration, and shipping work efficiently.',
      items: ['Git', 'VS Code', 'Tailwind CSS', 'AI APIs'],
    },
  ]

  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-slate-950"
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
            className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <h3 className="text-lg font-semibold text-cyan-300">{group.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {group.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-slate-200">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100"
                >
                  {item}
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