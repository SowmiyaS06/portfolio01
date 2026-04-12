import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import Section from '../Section'

function ContactSection() {
  const quickContactButtons = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919025363352',
      icon: <FaWhatsapp className="h-4 w-4" aria-hidden="true" />,
      className:
        'bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sowmiya-selvaraj-540240377',
      icon: <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />,
      className:
        'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700',
    },
    {
      label: 'Email',
      href: 'mailto:sowmiyaselvaraj9025@gmail.com',
      icon: <FaEnvelope className="h-4 w-4" aria-hidden="true" />,
      className:
        'bg-rose-500 text-white hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-600',
    },
  ]

  const contactItems = [
    {
      label: 'Email',
      value: 'sowmiyaselvaraj9025@gmail.com',
      href: 'mailto:sowmiyaselvaraj9025@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 90253 63352',
      href: 'tel:+919025363352',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M7 3h4l1 5-2.5 1.5a16 16 0 0 0 5 5L16 12l5 1v4c0 1-1 2-2 2A16 16 0 0 1 5 5c0-1 1-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sowmiya-selvaraj-540240377',
      href: 'https://www.linkedin.com/in/sowmiya-selvaraj-540240377/',
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.5 8.5H3.7V20h2.8V8.5ZM5.1 7.2A1.6 1.6 0 1 0 5 4a1.6 1.6 0 0 0 .1 3.2ZM20.3 13.4c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1.1-3.2 1.8v-1.8H10V20h2.9v-6c0-1.6.3-3.1 2.2-3.1 1.8 0 1.8 1.7 1.8 3.2V20H20v-6.6Z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/SowmiyaS06',
      href: 'https://github.com/SowmiyaS06',
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5 0 .7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1 1 .1 2.4.9 3 .9.1-.6.4-1 .7-1.2-2.4-.3-4.9-1.2-4.9-5.2 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1a10 10 0 0 1 5.3 0c2-1.3 2.9-1 2.9-1 .6 1.5.2 2.5.1 2.8.7.7 1.1 1.6 1.1 2.7 0 4-2.5 4.9-4.9 5.2.4.3.7.9.7 1.8V21c0 .3.2.5.7.5A10 10 0 0 0 12 2Z" />
        </svg>
      ),
    },
  ]

  return (
    <Section
      id="contact"
      title="Contact"
      className="min-h-screen bg-slate-100 flex items-center dark:bg-slate-950"
      contentClassName="w-full"
    >
      <div className="w-full max-w-4xl space-y-8 text-center">
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          Feel free to reach out for collaborations, projects, or opportunities.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="grid gap-3 sm:grid-cols-3"
        >
          {quickContactButtons.map((button, index) => (
            <motion.a
              key={button.label}
              href={button.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold shadow-md transition-all duration-300 ${button.className}`}
            >
              {button.icon}
              <span>{button.label}</span>
            </motion.a>
          ))}
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="rounded-2xl border border-cyan-500/20 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-50/40 dark:border-cyan-300/20 dark:bg-white/5 dark:hover:border-cyan-300/40 dark:hover:bg-white/10"
            >
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                {item.icon}
                <p className="text-sm uppercase tracking-[0.2em]">{item.label}</p>
              </div>
              <p className="mt-3 break-all text-base font-medium text-slate-900 sm:text-lg dark:text-white">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ContactSection