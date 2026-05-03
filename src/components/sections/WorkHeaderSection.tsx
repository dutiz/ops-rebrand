/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
export default function WorkHeaderSection({ content }: { content: any }) {
  return (
    <div className="bg-white dark:bg-gray-900 pt-17">
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
          <h1 className="font-sans uppercase text-[80px] lg:text-[240px] text-black dark:text-white">
            {content.title}
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
            {content.intro}
          </p>
        </motion.div>
        <div className="flex md:flex-row flex-col py-16 gap-5 lg:gap-32">
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-800 dark:text-gray-300 text-xl lg:text-2xl italic">
              ( Client )
            </p>
            <p className="text-black dark:text-white mt-2 text-2xl lg:text-3xl font-semibold">
              {content.client}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-800 dark:text-gray-300 text-xl lg:text-2xl italic">
              ( Year )
            </p>
            <p className="text-black dark:text-white mt-2 text-2xl lg:text-3xl font-semibold">
              {content.year}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-800 dark:text-gray-300 text-xl lg:text-2xl italic">
              ( Services )
            </p>

            <p className="text-black dark:text-white mt-2 text-2xl lg:text-3xl font-semibold">
              {content.services}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
