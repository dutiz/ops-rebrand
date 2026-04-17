"use client";
import content from "@/utils/content.json";
import { motion } from "motion/react";

export default function AboutContentSection() {
  const { aboutContentSection } = content;
  return (
    <div className="bg-white dark:bg-gray-900 py-17">
      <div className="container max-w-7xl mx-auto">
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
          <h1 className="font-sans uppercase text-[200px] text-center text-black dark:text-white leading-none">
            {aboutContentSection.part1}
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
          <h1 className="mt-4 font-sans uppercase text-[200px] text-center text-black dark:text-white leading-none">
            {aboutContentSection.part2}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
