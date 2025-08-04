'use client'

import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/data/faqs'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-background">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Need help? We’ve got answers."
        />

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto mt-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg mb-3 shadow-sm">
              <AccordionTrigger className="px-4 py-3 text-left text-base font-medium hover:bg-muted/40 transition-colors rounded-lg w-full">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
