"use client";
import { motion } from "motion/react";
import content from "@/utils/content.json";

export default function ProcessHeaderSection() {
  const { processSection } = content;
  return (
    <div className="bg-white dark:bg-gray-900 px-4 lg:px-0">
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
          <div className="flex flex-row justify-between py-12 lg:py-24">
            <div className="flex flex-col">
              <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                {processSection.title}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                {processSection.number}
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
              <h1 className="font-sans text-[80px] md:text-[320px] text-black dark:text-white uppercase leading-none">
                {processSection.subtitle}
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
              <p className="mt-2 text-black dark:text-white text-3xl md:text-7xl">
                {processSection.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
