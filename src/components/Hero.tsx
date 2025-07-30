'use client'

import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:pt-64 md:py-32 bg-background">
      <Container className="text-center flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Supercharge Your <span className="text-primary">Marketing</span> with AI
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-muted-foreground max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ADmyBRAND helps you automate, analyze, and optimize every aspect of your marketing campaigns with cutting-edge AI tools.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">See Live Demo</Button>
        </motion.div>

        {/* <motion.img
          src="/hero-illustration.png"
          alt="Hero Illustration"
          className="mt-12 w-full max-w-3xl rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        /> */}
      </Container>
    </section>
  )
}
