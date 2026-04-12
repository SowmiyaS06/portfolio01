type NavLink = {
  label: string
  href: string
}

type NavbarProps = {
  links: NavLink[]
}

function Navbar({ links }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-lg">
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-cyan-300">
          Portfolio
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm md:gap-6 md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-200 transition-all duration-300 hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar