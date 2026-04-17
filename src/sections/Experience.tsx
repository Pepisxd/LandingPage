import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/data/experience'

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experiencia" className="py-24 px-4 border-t border-border" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-3xl font-bold mb-12 text-center"
        >
          <span className="text-emerald-400">/</span> experiencia
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[7px]" />

          <div className="space-y-10 pl-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-mono font-bold text-base">{job.company}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                </div>
                <p className="font-mono text-sm text-emerald-400 mb-3">{job.role}</p>

                {job.bullets.length > 0 && (
                  <ul className="space-y-1">
                    {job.bullets.map((b) => (
                      <li key={b} className="font-mono text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
