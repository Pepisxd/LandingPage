import { Navbar } from '@/components/Navbar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'
import { useTheme } from '@/hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className={`${theme} min-h-screen bg-background text-foreground`}>
      <Navbar onToggleTheme={toggle} theme={theme} />
      <main className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        <p>Construido con React + TypeScript + Tailwind · José (Pepe)</p>
      </footer>
    </div>
  )
}
