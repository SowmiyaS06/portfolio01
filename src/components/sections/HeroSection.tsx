function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-orange-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_48%)]" />
      <div className="relative flex min-h-screen w-full items-center justify-center px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="hero-reveal hero-reveal-1 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
            Sowmiya S
          </h1>
          <h2 className="hero-reveal hero-reveal-2 text-lg font-medium text-slate-200 sm:text-xl md:text-3xl">
            Full-Stack Developer | AI Enthusiast
          </h2>
          <p className="hero-reveal hero-reveal-3 text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            I build intelligent, scalable, and user-focused AI-powered applications that solve
            real-world problems through clean architecture and thoughtful product design.
          </p>
          <div className="hero-reveal hero-reveal-4 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection