'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/Button'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save to localStorage (for demo only, replace with API call if needed)
    localStorage.setItem('contactFormSubmission', JSON.stringify(form))
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="We&apos;d love to hear from you."

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
              ✅ Thanks for contacting us! We&apos;ll get back to you soon.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="mt-8 max-w-xl mx-auto space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Input
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Textarea
                  required
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
