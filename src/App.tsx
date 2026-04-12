import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CertificationsSection from './components/sections/CertificationsSection'
import HighlightsSection from './components/sections/HighlightsSection'
import ContactSection from './components/sections/ContactSection'
import FooterSection from './components/sections/FooterSection'

function App() {
  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
    { label: 'Footer', href: '#footer' },
  ]

  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar links={navLinks} />
      <HeroSection />
      <main className="w-full">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <HighlightsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
