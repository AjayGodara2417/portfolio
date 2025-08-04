"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-background">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* LEFT TEXT SECTION */}
          <div className="text-center lg:text-left flex-1">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I&apos;m <span className="text-orange-400">Ajay Godara</span>{" "}
              —&nbsp;&nbsp;
              <span className="text-primary">
                Building digital experiences
              </span>{" "}
              that leave a lasting impression.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-orange-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I craft scalable, responsive, and elegant web applications using
              modern tools like Next.js, Tailwind CSS, and Framer Motion.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href={"#contact"} rel="noopener noreferrer">
                <Button size="lg">Get In Touch</Button>
              </a>
              <a href={"#projects"} rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            className="flex-1 w-full max-w-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Image
              src="/aj.png"
              alt="Hero illustration"
              width={900}
              height={800}
              className="lg:ml-16"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
