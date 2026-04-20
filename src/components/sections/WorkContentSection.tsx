/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
export default function WorkContentSection({ content }: { content: any }) {
  const ref = useRef(null);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-17">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="w-full">
            <Image
              src={content.cover}
              width={526}
              height={526}
              alt={content.title}
              className="w-full h-131.5 object-cover"
              loading="eager"
            />
          </div>
        </div>
        <div
          ref={ref}
          className="bg-white dark:bg-gray-900 py-20 container max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex md:flex-row flex-col min-h-screen"
          >
            <div className="md:w-1/2 w-full">
              <div className="sticky top-20 flex-col items-center">
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
                  <h1 className="font-sans text-[128px] text-black dark:text-white leading-none uppercase">
                    {content.headline1}
                  </h1>
                </motion.div>
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
                  <h1 className="mt-2 font-sans text-[128px] text-black dark:text-white leading-none uppercase">
                    {content.headline2}
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="sticky top-0 flex flex-col justify-center px-6 md:px-12">
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
                  <p className="text-black dark:text-white font-semibold text-5xl ">
                    {content.text1}
                  </p>
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
                  <p
                    className="text-gray-800 dark:text-gray-300 text-lg mt-6"
                    dangerouslySetInnerHTML={{
                      __html: content.text2,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
