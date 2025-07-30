'use client'

import { motion } from 'framer-motion'
import { features } from '@/data/features'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { Card } from './ui/Card'

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/10">
      <Container>
        <SectionHeading
          title="Powerful Features to Supercharge Your Marketing"
          subtitle="Everything you need to run better campaigns, faster."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="transition-shadow hover:shadow-xl rounded-2xl"
            >
              <Card className="h-full flex flex-col gap-4 items-start p-6">
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
