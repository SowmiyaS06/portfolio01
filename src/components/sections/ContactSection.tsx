import Section from '../Section'

function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      className="min-h-screen bg-slate-950 flex items-center"
      contentClassName="w-full"
    >
      <div className="w-full max-w-4xl space-y-8 text-center">
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          Feel free to reach out for collaborations, projects, or opportunities.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:sowmiyaselvaraj9025@gmail.com"
            className="rounded-2xl border border-cyan-300/20 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Email</p>
            <p className="mt-2 text-lg font-medium text-white">sowmiyaselvaraj9025@gmail.com</p>
          </a>
          <a
            href="tel:+919025363352"
            className="rounded-2xl border border-cyan-300/20 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Phone</p>
            <p className="mt-2 text-lg font-medium text-white">+91 90253 63352</p>
          </a>
          <a
            href="https://github.com/SowmiyaS06"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-cyan-300/20 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">GitHub</p>
            <p className="mt-2 text-lg font-medium text-white">github.com/SowmiyaS06</p>
          </a>
          <a
            href="https://www.linkedin.com/in/sowmiya-selvaraj-540240377/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-cyan-300/20 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">LinkedIn</p>
            <p className="mt-2 text-lg font-medium text-white">linkedin.com/in/sowmiya-selvaraj-540240377</p>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection