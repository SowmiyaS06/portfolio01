import Section from '../Section'

function SkillsSection() {
  const skillGroups = [
    {
      title: 'Languages',
      items: ['C', 'C++', 'Java'],
    },
    {
      title: 'Web',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Databases',
      items: ['Oracle SQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      items: ['Git', 'VS Code'],
    },
    {
      title: 'Concepts',
      items: ['OOPS', 'DBMS'],
    },
  ]

  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-slate-950"
      contentClassName="w-full"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <h3 className="text-lg font-semibold text-cyan-300">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="rounded-md bg-white/5 px-3 py-2 text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection