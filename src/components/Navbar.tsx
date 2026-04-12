import { useEffect, useState } from 'react'

type NavLink = {
  label: string
  href: string
}

type NavbarProps = {
  links: NavLink[]
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Navbar({ links, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-200/80 backdrop-blur-lg transition-all duration-500 ease-in-out dark:border-white/10 ${
        scrolled
          ? 'bg-white/80 shadow-lg shadow-slate-300/30 dark:bg-slate-950/88 dark:shadow-slate-950/20'
          : 'bg-white/55 dark:bg-slate-950/65'
      }`}
    >
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-cyan-600 dark:text-cyan-300">
          Portfolio
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300/80 bg-white/70 p-2 text-slate-700 transition-all duration-300 hover:scale-105 hover:bg-white dark:border-cyan-300/30 dark:bg-slate-900/70 dark:text-cyan-200 dark:hover:bg-slate-900"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M20.2 14.6A8.5 8.5 0 1 1 9.4 3.8a7 7 0 1 0 10.8 10.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm md:gap-6 md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-700 transition-all duration-300 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar