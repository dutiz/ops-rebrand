"use client";

import { motion } from "motion/react";
import content from "@/utils/content.json";

export default function BlogHeaderSection() {
  const { blogPage } = content;
  return (
    <div className="bg-white dark:bg-gray-900 py-17">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="mt-10 font-sans uppercase text-[80px] lg:text-[240px] text-black dark:text-white">
            {blogPage.title}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mt-2 text-black dark:text-white font-semibold text-3xl lg:text-7xl">
            {blogPage.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
