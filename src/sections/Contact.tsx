import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const links = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'josealbertoorpp@gmail.com',
    href: 'mailto:josealbertoorpp@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Pepisxd',
    href: 'https://github.com/Pepisxd',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pepisxd',
    href: 'https://linkedin.com/in/pepisxd',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contacto" className="py-24 px-4 border-t border-border" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-3xl font-bold mb-4"
        >
          <span className="text-emerald-400">/</span> contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-mono text-muted-foreground mb-12"
        >
          ¿Tienes una oportunidad o quieres platicar? Escríbeme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border px-5 py-3 font-mono text-sm hover:border-emerald-400/50 hover:text-emerald-400 transition-colors group"
            >
              <Icon className="w-4 h-4 text-emerald-400" />
              <span className="text-muted-foreground group-hover:text-emerald-400 transition-colors">
                {value}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="rounded-none font-mono bg-emerald-500 hover:bg-emerald-500/90 text-black"
            asChild
          >
            <a href="mailto:josealbertoorpp@gmail.com">
              Enviar mensaje <FaEnvelope className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
