'use client'

import { motion } from 'framer-motion'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { Card } from './ui/Card'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/5">
      <Container>
        <SectionHeading
          title="Professional Experience"
          subtitle="Real-world impact through hands-on development"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {experiences.map(({ company, role, icon: Icon, duration, highlights }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="transition-all rounded-2xl"
            >
              <Card className="h-full p-6 bg-background/70 border border-muted rounded-2xl backdrop-blur-sm shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold leading-tight">
                    {company}
                  </h3>
                </div>

                <p className="text-sm font-medium text-muted-foreground mb-4 italic">
                  {role} — {duration}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
