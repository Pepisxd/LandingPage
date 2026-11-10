import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'TIMEGATE — control de asistencia',
    description: 'Sistema de asistencia biométrica sin conexión, desarrollado para una operación de producción en Sanmina.',
    stack: ['Next.js', 'TypeScript', 'SQLite', 'C# / .NET', 'Docker'],
    highlights: ['Uso por 45 colaboradores y aproximadamente 90 registros diarios', 'Reglas de turnos, horas extra y aprobación administrativa', 'Migraciones probadas en un equipo espejo y respaldos cifrados'],
  },
  {
    title: 'LearnJN — plataforma educativa',
    description: 'Plataforma full-stack para un curso universitario de Jupyter Notebook, con contenidos y ejercicios apoyados por IA.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'IA'],
    highlights: ['6 capítulos, 13 lecciones en video y panel de administración', 'Autenticación, verificación de correo y rutas protegidas', 'Modelo Qwen3 ajustado con LoRA para ejercicios'],
    demo: 'https://jupyter-course.vercel.app',
    github: 'https://github.com/Pepisxd/jupyter-course',
  },
  {
    title: 'Sistema de clínica pediátrica',
    description: 'Proyecto universitario para administrar citas, expedientes y acceso por roles.',
    stack: ['React', 'Python', 'SQL'],
    highlights: ['Flujos de citas y expedientes médicos', 'Acceso por roles para el personal', 'Base de datos relacional en tercera forma normal'],
    github: 'https://github.com/Pepisxd/clinica_pediatra',
  },
  {
    title: 'Mantenimiento de equipos — Sanmina',
    description: 'Aplicación interna desarrollada en equipo para gestionar mantenimiento y seguimiento de equipos.',
    stack: ['Aplicación web', 'Mantenimiento', 'Producción'],
    highlights: ['Aplicación en producción para 13 máquinas', 'Listas de verificación e historial de equipos', 'Proyecto aprobado por el comité Kaizen'],
  },
]
