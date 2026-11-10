import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="proyectos" className="py-24 px-4 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-3xl font-bold mb-12 text-center"
        >
          <span className="text-emerald-400">/</span> proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
              className="border border-border bg-card p-6 sm:p-8 flex flex-col group hover:border-emerald-500/50 transition-colors"
            >
              <h3 className="font-mono text-xl font-bold leading-snug mb-3">{project.title}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <ul className="space-y-1 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="font-mono text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-0.5" aria-hidden="true">›</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.demo || project.github) && (
                <div className="mt-6 flex flex-wrap gap-5 font-mono text-sm">
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 underline underline-offset-4">Ver proyecto <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 underline underline-offset-4">Ver código <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
