import type { Theme } from '../hooks/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggleTheme: () => void
}

function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
  const isDark = theme === 'dark'
  const toggleLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <label className="group relative inline-flex cursor-pointer select-none items-center" title={toggleLabel}>
      <span className="sr-only">{toggleLabel}</span>
      <input
        type="checkbox"
        checked={isDark}
        onChange={onToggleTheme}
        aria-label={toggleLabel}
        className="peer sr-only"
      />

      <span className="relative inline-flex h-11 w-20 items-center rounded-full border border-slate-300/70 bg-linear-to-r from-sky-100 to-amber-100 px-1 text-slate-800 shadow-sm transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-md peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-500/70 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white peer-checked:border-cyan-300/30 peer-checked:from-slate-800 peer-checked:to-slate-900 peer-checked:text-cyan-100 peer-checked:shadow-cyan-900/20 peer-focus-visible:peer-checked:ring-cyan-300 peer-focus-visible:peer-checked:ring-offset-slate-950">
        <span className="pointer-events-none absolute top-1 left-1 h-9 w-9 rounded-full bg-white shadow-md transition-transform duration-500 ease-out peer-checked:translate-x-8 dark:bg-slate-100" />

        <span className="relative z-10 flex w-full items-center justify-between px-1">
          <span className="transition-all duration-300 peer-checked:scale-75 peer-checked:opacity-40" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="scale-75 opacity-40 transition-all duration-300 peer-checked:scale-100 peer-checked:opacity-100" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M20.2 14.6A8.5 8.5 0 1 1 9.4 3.8a7 7 0 1 0 10.8 10.8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </span>
    </label>
  )
}

export default ThemeToggle
