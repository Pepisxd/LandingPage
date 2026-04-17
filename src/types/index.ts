export interface Project {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  github?: string
  demo?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}
