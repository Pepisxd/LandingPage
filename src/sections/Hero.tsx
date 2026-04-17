import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const titleWords = ['Hola,', 'soy', 'Jose', '(Pepe)']

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24">

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-400/50 ring-4 ring-emerald-400/10">
          <img
            src="/avatar.jpg"
            alt="Jose (Pepe)"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              target.parentElement!.classList.add('bg-emerald-400/10', 'flex', 'items-center', 'justify-center')
              target.parentElement!.innerHTML = '<span class="font-mono text-2xl font-bold text-emerald-400">JP</span>'
            }}
          />
        </div>
        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-background" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-2 mb-8 text-sm font-mono text-emerald-400 border border-emerald-400/30 px-4 py-2 rounded-full"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Disponible para internship / posición junior
      </motion.div>

      <motion.h1
        initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="inline-block mx-2 md:mx-4"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 mb-12"
      >
        CS Engineer · Full-Stack Developer
        <br />
        <span className="text-sm opacity-70">CUCEI, Universidad de Guadalajara — egreso est. jun. 2026</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button
          size="lg"
          className="rounded-none font-mono bg-emerald-500 hover:bg-emerald-500/90 text-black"
          asChild
        >
          <a href="#contacto">
            Contactar <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-none font-mono"
          asChild
        >
          <a href="/cv.pdf" download>
            <Download className="mr-2 w-4 h-4" /> Descargar CV
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex gap-6 mt-12"
      >
        <a
          href="https://github.com/pepisxd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/pepisxd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:josealbertoorpp@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaEnvelope className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
