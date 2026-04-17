import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, GraduationCap, MapPin, Languages } from 'lucide-react'

const facts = [
  {
    icon: GraduationCap,
    text: 'B.Sc. Computer Science Engineering — CUCEI, UdeG (egreso jun. 2026)',
  },
  { icon: MapPin, text: 'Guadalajara, Jalisco, MX' },
  { icon: Cpu, text: 'Test Technician en Sanmina SCI (feb. 2025 — presente)' },
  { icon: Code2, text: '4 proyectos full-stack · Inglés intermedio' },
  { icon: Languages, text: 'Inglés intermedio' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="sobre-mi" className="px-4 py-24" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center font-mono text-3xl font-bold"
        >
          <span className="text-emerald-400">/</span> sobre mí
        </motion.h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-6 font-mono leading-relaxed">
              Estudiante de Ingenieria en Informática en CUCEI (UdeG) con experiencia real en
              entornos de producción en Sanmina, desarrollando scripts de automatización Python y
              trabajando con sistemas MES industriales.
            </p>
            <p className="text-muted-foreground mb-6 font-mono leading-relaxed">
              He desarrollado aplicaciones full-stack utilizando principalmente React, Node.js y
              MongoDB, integrando soluciones de inteligencia artificial para diferentes proyectos.
              Experiencia diseñando APIs, trabajando con bases de datos y construyendo aplicaciones
              escalables orientadas a resolver problemas reales.
            </p>

            <p className="text-muted-foreground font-mono leading-relaxed">
              Busco un rol junior como Software Engineer (backend o full-stack) donde pueda
              contribuir desde el primer día y seguir creciendo en diseño de sistemas y desarrollo
              de aplicaciones modernas.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {facts.map(({ icon: Icon, text }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 font-mono text-sm"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-muted-foreground">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
