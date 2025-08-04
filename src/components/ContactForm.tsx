'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/Button'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    localStorage.setItem('contactFormSubmission', JSON.stringify(form))

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_hj1dnvh',
          'template_m68n9hc',
          formRef.current,
          '8ILQkbUtUigc7sF11'
        )
        .then(() => {
          setSubmitted(true)
          setForm({ name: '', email: '', message: '' })
        })
        .catch((error) => {
          console.error('EmailJS Error:', error)
        })
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/10">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="I'd love to hear from you."
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center text-green-600 mt-6 text-lg font-medium"
            >
              ✅ Thanks for contacting me! I&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="mt-8 max-w-xl mx-auto space-y-4"
            >
              <Input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
              <Textarea
                required
                name="message"
                placeholder="Write your message here..."
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
