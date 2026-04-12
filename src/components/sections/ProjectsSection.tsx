import { motion } from 'framer-motion'
import Section from '../Section'
import { staggerContainer, staggerItem } from '../../lib/motion'

function ProjectsSection() {
  const projects = [
    {
      title: 'AI-Powered Interview Simulator',
      description: 'Real-time AI mock interviews with feedback.',
      techStack: ['React', 'Node.js', 'AI APIs'],
      points: [
        'Solves the challenge of preparing for interviews without depending on a live interviewer.',
        'Generates realistic mock questions and gives immediate feedback on answers and communication.',
        'Built with React, Node.js, and AI APIs to create a conversational practice flow.',
        'Stands out by combining practice, assessment, and learning guidance in one experience.',
      ],
    },
    {
      title: 'VEL Super Market (E-commerce)',
      description: 'Full-stack app with authentication and admin dashboard.',
      techStack: ['React', 'Express', 'MongoDB'],
      points: [
        'Addresses the need for a simple and organized grocery shopping experience with secure access.',
        'Includes user authentication, product browsing, shopping flow, and admin dashboard management.',
        'Built with React, Express, and MongoDB to keep the product and order data structured.',
        'Shows a complete full-stack workflow for an e-commerce application.',
      ],
    },
    {
      title: 'Smart Meeting Analysis Platform',
      description: 'Converts meetings into summaries and action points.',
      techStack: ['React', 'Python', 'NLP'],
      points: [
        'Solves the problem of turning long discussions into clear summaries and follow-up actions.',
        'Extracts key points from meeting content so teams can review decisions faster.',
        'Built using React, Python, and NLP concepts for text processing and organization.',
        'Makes meeting outcomes easier to scan, share, and act on after the call ends.',
      ],
    },
    {
      title: 'Git Workflow & Version Control Project',
      description:
        'Demonstrates Git branching, merging, and commit tracking. Shows understanding of version control and DevOps basics.',
      techStack: ['Git', 'GitHub', 'DevOps Basics'],
      points: [
        'Demonstrates disciplined branching, merging, and commit tracking for collaborative development.',
        'Highlights a clear version control workflow that supports team coordination and safe changes.',
        'Built around Git, GitHub, and DevOps basics to reinforce release discipline and repository hygiene.',
        'Shows practical understanding of how teams manage code, history, and collaboration at scale.',
      ],
    },
  ]

  return (
    <Section
      id="projects"
      title="Projects"
      className="min-h-screen bg-slate-900/90 flex items-center"
      contentClassName="w-full"
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={staggerItem}
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-900/30"
          >
            <div>
              <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-300">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-300 hover:text-slate-950"
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}

export default ProjectsSection