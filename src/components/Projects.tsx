"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import Modal from "./Modal";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const selectedProject = openIndex !== null ? projects[openIndex] : null;

  return (
    <section id="projects" className="py-24 bg-muted/5">
      <Container>
        <SectionHeading
          title="Recent projects by me"
          subtitle="What I've built and shipped"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setOpenIndex(index)}
              className="relative group rounded-2xl overflow-hidden border border-border cursor-pointer"
            >
              {/* Blurred preview background */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-70 transition group-hover:blur-sm"
                style={{
                  backgroundImage: `url(https://image.thum.io/get/width/900/crop/800/${project.liveUrl})`,
                }}
              />

              <Card className="relative z-10 h-full p-6 bg-background/80 backdrop-blur-xl shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="text-xs px-2 py-1 bg-muted rounded-full border text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-4">
                  <Button size="sm" className="w-full">
                    Preview
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal popup with full project preview */}
      {selectedProject && (
        <Modal isOpen={true} onClose={() => setOpenIndex(null)}>
          <h2 className="text-2xl font-semibold mb-2">
            {selectedProject.name}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {selectedProject.description}
          </p>
          <ul className="flex flex-wrap gap-2 mb-6">
            {selectedProject.tech.map((tech, i) => (
              <li
                key={i}
                className="text-xs px-2 py-1 bg-muted rounded-full border text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
            <iframe
              src={selectedProject.liveUrl}
              title="Please click  the live preview button if preview not available"
              className="w-full h-full border-none"
              loading="lazy"
              allow="fullscreen"
            ></iframe>
          </div>
          <div className="flex gap-4">
            <a
              href={selectedProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button size="sm" className="w-full">
                Live Demo
              </Button>
            </a>
            <a
              href={selectedProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" size="sm" className="w-full">
                GitHub Repo
              </Button>
            </a>
          </div>
        </Modal>
      )}
      <div className="mt-12 w-full flex flex-col gap-4 items-center">
        <h3 className="text-lg text-orange-400">View more here</h3>
      <a
              href={'https://github.com/AjayGodara2417'}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Button variant="outline" size="lg" className="hover:border-2">
                GitHub
              </Button>
            </a>
      </div>
    </section>
  );
}
