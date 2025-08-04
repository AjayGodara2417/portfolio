'use client'

import { Container } from './ui/Container'
import { Instagram, Linkedin, Github, X } from 'lucide-react'
import Link from 'next/link'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technology' },
  { label: 'Contact Me', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/AjayGodara2417' },
  { icon: X, href: 'https://x.com/AjayGodara2417' },
  { icon: Instagram, href: 'https://instagram.com/thenameisajaygodara' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ajay-godara-2b05b4210/' },
]

export default function Footer() {
  return (
    <footer className="bg-muted/10 py-12 border-t border-border text-muted-foreground">
      <Container>
        <div className="grid gap-8 md:grid-cols-3 items-start text-center md:text-left">
          {/* Branding */}
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-foreground hover:text-orange-400">Ajay Godara</h4>
            <p className="text-sm hover:text-orange-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-center md:gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm relative group hover:text-orange-400 transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:bg-orange-400" />
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 hover:text-orange-400 transition-transform text-muted-foreground " />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
