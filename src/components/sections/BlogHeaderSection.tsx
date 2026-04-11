"use client";

import { motion } from "motion/react";
import content from "@/utils/content.json";

export default function BlogHeaderSection() {
    const { blogPage } = content;
    return (
  <div className="bg-gray-900 py-17">
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
          <h1 className="font-sans uppercase text-[240px] text-white">
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
          <p className="mt-2 text-white font-semibold text-7xl">
            {blogPage.description}
          </p>
        </motion.div>
      </div>
    </div>
    );
}
