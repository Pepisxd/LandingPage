import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'LearnJN',
    description:
      'Plataforma educativa full-stack para practicar Python con ejercicios generados por IA. Integra Jupyter Notebooks con OpenAI API para generación inteligente de contenido.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI API'],
    highlights: [
      'Ejercicios de código generados dinámicamente con IA',
      'Auth JWT restringido a @alumnos.udg.mx vía Brevo',
      'Deploy distribuido: Vercel (frontend) + Railway (backend)',
      'Arquitectura distribuida en la nube con Cloudflare R2',
    ],
    github: 'https://github.com/Pepisxd',
  },
  {
    title: 'Pediatric Clinic System',
    description:
      'Aplicación multi-rol para gestión médica y de pacientes. Implementa predicción de enfermedades a partir de síntomas con IA usando Python y backend SQL.',
    stack: ['React', 'Python', 'SQL', 'Machine Learning'],
    highlights: [
      'Sistema de roles para médicos y personal administrativo',
      'Predicción de enfermedades con ML a partir de síntomas',
      'Gestión completa de expedientes de pacientes',
    ],
    github: 'https://github.com/Pepisxd',
  },
  {
    title: 'Sportify',
    description:
      'Web app móvil de análisis deportivo con integración REST API para datos en tiempo real. Predicciones de resultados de partidos con ML.',
    stack: ['React', 'REST API', 'Machine Learning', 'JavaScript'],
    highlights: [
      'Datos deportivos en tiempo real vía REST API',
      'Autenticación de usuarios',
      'Predicciones de partidos con modelos ML',
    ],
    github: 'https://github.com/Pepisxd',
  },
  {
    title: 'Sistema de Mantenimiento — Sanmina',
    description:
      'Sistema web interno para gestión de mantenimiento del departamento de pruebas. Digitaliza checklists, historial y evidencia fotográfica de equipos.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Checklists por equipo con historial completo',
      'Tracking de técnicos y asignación de tareas',
      'Carga de evidencia fotográfica',
      'Complementa sistema corporativo existente',
    ],
  },
]
