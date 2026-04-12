import Section from '../Section'

function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      className="min-h-screen bg-white/90 flex items-center dark:bg-slate-900/90"
      contentClassName="w-full"
    >
      <div className="w-full max-w-3xl space-y-8 text-center md:text-left">
        <div className="space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          <p>
            I am Sowmiya S, a B.Tech Information Technology student with a CGPA of 8.52.
            My academic path has built a strong foundation in problem solving, software
            fundamentals, and disciplined project work.
          </p>
          <p>
            I build full-stack applications and explore AI features that make products more
            responsive, more intelligent, and more helpful to users. I enjoy working across the
            frontend, backend, and data layers to create complete solutions rather than isolated
            pieces of software.
          </p>
          <p>
            My goal is to grow into a software developer who contributes to real production
            systems, learns quickly from team environments, and delivers work that is both
            technically solid and genuinely useful.
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-50/70 p-6 text-center md:text-left dark:border-cyan-300/15 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300">What I’m currently learning</h3>
          <p className="mt-3 text-slate-700 sm:text-lg dark:text-slate-300">
            Advanced React patterns, backend API design, prompt engineering, and database design
            for applications that need to scale smoothly.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection