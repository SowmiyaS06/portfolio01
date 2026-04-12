function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/70 to-amber-500/20 px-6 py-16 shadow-2xl shadow-cyan-950/30 md:px-10 md:py-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center md:gap-8">
        <p className="hero-reveal hero-reveal-1 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Portfolio
        </p>
        <h1 className="hero-reveal hero-reveal-2 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Sowmiya S
        </h1>
        <h2 className="hero-reveal hero-reveal-3 text-lg font-medium text-slate-200 sm:text-xl md:text-2xl">
          Full-Stack Developer | AI Enthusiast
        </h2>
        <p className="hero-reveal hero-reveal-4 mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          I build intelligent, scalable, and user-focused AI-powered applications that solve
          real-world problems with clean code and thoughtful design.
        </p>
        <div className="hero-reveal hero-reveal-5 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection