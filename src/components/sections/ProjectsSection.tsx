import Section from '../Section'

function ProjectsSection() {
  const projects = [
    {
      title: 'AI-Powered Interview Simulator',
      description: 'Real-time AI mock interviews with feedback.',
      techStack: ['React', 'Node.js', 'AI APIs'],
    },
    {
      title: 'VEL Super Market (E-commerce)',
      description:
        'Full-stack app with authentication and admin dashboard.',
      techStack: ['React', 'Express', 'MongoDB'],
    },
    {
      title: 'Smart Meeting Analysis Platform',
      description:
        'Converts meetings into summaries and action points.',
      techStack: ['React', 'Python', 'NLP'],
    },
    {
      title: 'Git Workflow & Version Control Project',
      description:
        'Demonstrates Git branching, merging, and commit tracking. Shows understanding of version control and DevOps basics.',
      techStack: ['Git', 'GitHub', 'DevOps Basics'],
    },
  ]

  return (
    <Section
      id="projects"
      title="Projects"
      className="min-h-screen bg-slate-900/90 flex items-center"
      contentClassName="w-full"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-cyan-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-900/30"
          >
            <div>
              <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
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

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-300 hover:text-slate-950"
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection