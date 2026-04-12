import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  children?: ReactNode
  className?: string
  contentClassName?: string
}

function Section({ id, title, children, className = '', contentClassName = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-20 border-b border-white/10 px-6 py-20 md:px-12 md:py-28 lg:px-20 ${className}`}
    >
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight text-cyan-300 md:text-4xl">{title}</h2>
        <div className={`text-slate-300 ${contentClassName}`}>{children}</div>
      </div>
    </section>
  )
}

export default Section