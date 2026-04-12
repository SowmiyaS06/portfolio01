import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children?: ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/10 py-16">
      <h2 className="text-3xl font-semibold tracking-tight text-cyan-300">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  )
}

export default Section