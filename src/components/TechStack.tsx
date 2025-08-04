'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { technologies } from '@/data/tech'
import Image from 'next/image'

export default function TechStack() {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return

      const container = carouselRef.current
      container.scrollLeft += direction

      const maxScroll = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll || container.scrollLeft <= 0) {
        setDirection((prev) => -prev)
      }
    }, 15)

    return () => clearInterval(interval)
  }, [direction])

  return (
    <section id="technology" className="py-24 bg-muted/5">
      <Container>
        <SectionHeading
          title="Technology Stack"
          subtitle="Tools that I use to code, build and implement"
        />

        <div className="mt-10 overflow-hidden perspective-1000">
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-scroll scroll-smooth no-scrollbar px-4 py-4"
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-background shadow-md rounded-xl p-4 min-w-[120px] h-[120px] flex flex-col items-center justify-center transform transition-transform hover:rotate-y-12 hover:scale-105 duration-300"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={52}
                  height={52}
                  className="object-contain mb-2"
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
