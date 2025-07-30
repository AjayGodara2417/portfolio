'use client'

import { Container } from './ui/Container'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const socials = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="bg-muted/10 py-12 border-t border-border text-muted-foreground">
      <Container>
        <div className="grid gap-8 md:grid-cols-3 items-start text-center md:text-left">
          {/* Branding */}
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-foreground">ADmyBRAND AI</h4>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-center md:gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm relative group hover:text-primary transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
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
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform text-muted-foreground hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
