import Section from '../Section'

function CertificationsSection() {
  const certifications = [
    {
      title: 'Oracle APEX Cloud Developer Certified Professional',
      provider: 'Oracle University',
      description:
        'Gained hands-on experience in building scalable cloud-based applications using Oracle APEX. Learned database-driven application development, UI design, and deployment in cloud environments.',
      badge: 'Cloud Development',
    },
    {
      title: 'Database Management System',
      provider: 'Infosys Springboard',
      description:
        'Learned core DBMS concepts including SQL, normalization, and database design.',
      badge: 'DBMS',
    },
  ]

  return (
    <Section
      id="certifications"
      title="Certifications"
      className="bg-slate-100 dark:bg-slate-950"
      contentClassName="w-full"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="rounded-2xl border border-cyan-500/20 bg-white p-6 shadow-lg shadow-cyan-700/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-700/20 dark:border-cyan-300/20 dark:bg-slate-900/60 dark:shadow-cyan-950/20 dark:hover:border-cyan-300/40 dark:hover:shadow-cyan-900/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
                  {cert.provider}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-cyan-500/35 bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-300/35 dark:bg-cyan-500/10 dark:text-cyan-200">
                <svg
                  viewBox="0 0 24 24"
                  className="mr-1.5 h-3.5 w-3.5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3 4.5 6v6c0 5 3.2 8.1 7.5 9 4.3-.9 7.5-4 7.5-9V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cert.badge}
              </span>
            </div>
            <p className="mt-4 text-slate-700 sm:text-lg dark:text-slate-300">{cert.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default CertificationsSection