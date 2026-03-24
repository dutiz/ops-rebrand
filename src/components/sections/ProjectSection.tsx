"use client";

import content from "@/utils/content.json";
import ProjectCard from "../ProjectCard";
import { motion } from "motion/react";

interface ProjectItem {
  img: string;
  title: string;
  year: string;
}

export default function ProjectSection() {
  const { projectSection } = content;
  return (
    <div className="bg-gray-600">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex md:flex-row flex-col justify-between py-24">
            <div className="flex flex-col">
              <p className="font-gambeta text-gray-300 text-2xl italic">
                {projectSection.title}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-gambeta text-gray-300 text-2xl italic">
                {projectSection.number}
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex md:flex-row flex-col gap-4 pb-25">
          <div className="flex flex-col gap-y-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="font-sans text-[320px] text-white uppercase leading-none">
                {projectSection.subtitle}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mt-2 text-white text-7xl">
                {projectSection.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {projectSection.items
        .reduce((rows: ProjectItem[][], item: ProjectItem, index: number) => {
          if (index % 2 === 0) {
            rows.push(projectSection.items.slice(index, index + 2));
          }
          return rows;
        }, [])
        .map((row: ProjectItem[], rowIndex: number) => (
          <div key={rowIndex} className="flex md:flex-row flex-col">
            {row.map((item: ProjectItem, i: number) => (
              <ProjectCard
                key={i}
                img={item.img}
                title={item.title}
                year={item.year}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
