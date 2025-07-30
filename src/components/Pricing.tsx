'use client'

import { pricingPlans } from '@/data/pricing'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { Card } from './ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose a plan that fits your business"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="transition-shadow hover:shadow-2xl rounded-2xl"
            >
              <Card
                className={`h-full flex flex-col justify-between p-6 ${
                  plan.highlighted
                    ? 'border border-primary shadow-lg scale-[1.02] bg-muted/10'
                    : 'border border-border bg-card'
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {plan.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={plan.highlighted ? 'default' : 'outline'}
                  className="mt-6 w-full"
                >
                  {plan.highlighted ? 'Get Started' : 'Choose Plan'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
