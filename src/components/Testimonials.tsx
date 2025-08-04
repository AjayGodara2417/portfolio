"use client";

import { useState } from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="py-24 bg-muted/10">
      <Container>
        <SectionHeading
          title="My Recruiters Experience"
          subtitle="about me"
        />

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Previous button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="text-muted-foreground hover:text-primary transition"
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>

          {/* Animated testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-xl w-full"
            >
              <Card className="bg-background shadow-xl p-8 flex flex-col items-center text-center gap-4 transition duration-300 rounded-2xl hover:shadow-2xl">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-24 h-24 rounded-full overflow-hidden shadow-md"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    unoptimized // remove this if using real optimized images
                  />
                </motion.div>

                <p className="text-base text-muted-foreground italic">
                  “{testimonial.quote}”
                </p>

                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            aria-label="Next testimonial"
            className="text-muted-foreground hover:text-primary transition"
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
