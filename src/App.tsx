import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import FooterSection from './components/sections/FooterSection'

function App() {
  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Footer', href: '#footer' },
  ]

  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar links={navLinks} />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
