import Section from '../Section'

function HighlightsSection() {
  return (
    <Section
      id="highlights"
      title="Highlights"
      className="bg-slate-900/90"
      contentClassName="w-full"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
          <h3 className="text-xl font-semibold text-white">Presented Technical Papers</h3>
          <ul className="mt-4 space-y-3 text-slate-300 sm:text-lg">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              <span>AI in Gaming</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              <span>Hyperloop Technology</span>
            </li>
          </ul>
          <p className="mt-5 text-slate-300">
            These presentations strengthened the way I research ideas, organize technical
            insights, and communicate complex concepts with clarity.
          </p>
        </article>

        <article className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-6 shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
          <h3 className="text-xl font-semibold text-white">Problem Solving and Leadership</h3>
          <p className="mt-4 text-slate-300 sm:text-lg">
            I am known for breaking down complex tasks into manageable steps, staying calm under
            pressure, and helping teams stay organized during collaborative work. I value clear
            communication, dependable execution, and a practical approach to leadership.
          </p>
        </article>
      </div>
    </Section>
  )
}

export default HighlightsSection