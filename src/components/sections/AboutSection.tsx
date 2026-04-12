import Section from '../Section'

function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-left">
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I am Sowmiya S, a B.Tech Information Technology student with a CGPA of 8.52.
        </p>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I am deeply interested in Web Development, DBMS, and AI, and I enjoy exploring how
          these areas connect to solve meaningful problems.
        </p>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          My passion is building real-world applications that are practical, scalable, and
          impactful for users.
        </p>
      </div>
    </Section>
  )
}

export default AboutSection