import Section from '../Section'

function CertificationsSection() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      className="bg-slate-950"
      contentClassName="w-full"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
          <h3 className="text-xl font-semibold text-white">DBMS Certification</h3>
          <p className="mt-3 text-slate-300 sm:text-lg">
            Built a stronger understanding of relational database design, normalization,
            transaction handling, SQL querying, and the role of database systems in reliable
            application development.
          </p>
        </article>
      </div>
    </Section>
  )
}

export default CertificationsSection