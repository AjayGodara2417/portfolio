// src/data/experience.js

import { Briefcase, NotepadTextDashedIcon } from 'lucide-react'

export const experiences = [
  {
    company: 'QuadraticEdge',
    role: 'Web & App Developer',
    icon: NotepadTextDashedIcon,
    duration: '15 July 2025 - Current*',
    highlights: [
      'Learning while developing Udhyam Bazaar App using React Native for cross platform compatability',
      'Code and maintained responsive UIs for live products like Udhyam Info solutions using Next.js, React.js, and TypeScript.',
      'Create a newer version of the UI from scratch for the better Ui & user experiuence through smart and interactive web design',
      'Optimizing the web app through seprating client side and server side rendering.',
    ],
  },{
    company: 'Cropsly Solutions',
    role: 'Web Developer',
    icon: Briefcase,
    duration: '6 January 2025 – 5 July 2025',
    highlights: [
      'Built and maintained responsive UIs for live products like RunHotel using Next.js, React.js, and TypeScript.',
      'Integrated REST APIs to enable dynamic templates and discount-enabled payment flows, improving engagement and efficiency.',
      'Enhanced performance by optimizing SSR and CSR, reducing load times and improving scalability.',
      'Collaborated in an Agile team using Jira and contributed reusable UI components for early-stage apps like Tabla Tunes.',
    ],
  },
]
