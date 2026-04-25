import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

type NavLink = {
  label: string
  href: string
}

type NavbarProps = {
  links: NavLink[]
  theme: Theme
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
      <nav className="w-full px-4 py-2 md:px-12 md:py-4 lg:px-20">
        <div className="flex min-h-11 items-center justify-between gap-3 md:min-h-0 md:gap-4">
          <a href="#hero" className="text-base font-semibold tracking-wide text-cyan-600 dark:text-cyan-300 md:text-lg">
            Portfolio
          </a>
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        <div className="relative mt-2 md:mt-0">
          <ul className="flex min-h-11 items-center gap-3 overflow-x-auto whitespace-nowrap pr-1 text-sm md:min-h-0 md:justify-end md:gap-6 md:text-base">
            {links.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-2 text-slate-700 transition-all duration-300 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300 md:min-h-10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-linear-to-r from-white/85 to-transparent dark:from-slate-950/85 md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-linear-to-l from-white/85 to-transparent dark:from-slate-950/85 md:hidden" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar