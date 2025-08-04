'use client'

import {
  Github,
  Linkedin,
  Mail,
  XIcon,
  Instagram,
} from 'lucide-react'
import { motion } from 'framer-motion'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/AjayGodara2417',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ajay-godara-2b05b4210/',
    icon: Linkedin,
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/AjayGodara2417',
    icon: XIcon,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/thenameisajaygodara',
    icon: Instagram,
  },
  {
    name: 'Email',
    url: 'mailto:agodara771@gmail.com',
    icon: Mail,
  },
]

export default function SocialLinks() {
  return (
    <section className="py-16 bg-muted/5" id="socials">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Connect with Me
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socials.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-4 bg-card rounded-xl border border-border hover:shadow-lg transition duration-300 text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-6 w-6 mb-2 group-hover:scale-110 transition" />
                <span className="text-xs font-medium">{item.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
