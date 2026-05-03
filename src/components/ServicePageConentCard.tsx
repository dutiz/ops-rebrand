/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";
export default function ServicePageConentCard({
  serviceItem,
}: {
  serviceItem: any;
}) {
  const ref = useRef(null);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-17">
        <div className="flex flex-row gap-4">
          <div className="w-2/5">
            <Image
              src={`/images/${serviceItem.img1}.png`}
              width={526}
              height={526}
              alt={serviceItem.img1}
              className="w-full h-131.5 object-cover"
              loading="eager"
            />
          </div>
          <div className="w-3/5">
            <Image
              src={`/images/${serviceItem.img2}.png`}
              width={658}
              height={526}
              alt={serviceItem.img2}
              className="w-full h-131.5 object-cover"
              loading="eager"
            />
          </div>
        </div>
        <div
          ref={ref}
          className="bg-white dark:bg-gray-900 md:py-20 py-10 px-10 container max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex md:flex-row flex-col min-h-[200vh]"
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
                  <h1 className="font-sans text-[80px] md:text-[128px] text-black dark:text-white leading-none uppercase">
                    {serviceItem.title1}
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
                  <h1 className="mt-2 font-sans text-[80px] md:text-[128px] text-black dark:text-white leading-none uppercase">
                    {serviceItem.title2}
                  </h1>
                </motion.div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="sticky top-0 flex flex-col justify-center px-0 md:px-12 mt-5 md:mt-0">
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
                  <p className="text-black dark:text-white font-semibold text-3xl md:text-5xl ">
                    {serviceItem.description}
                  </p>
                </motion.div>
                {serviceItem.meta.map(
                  (
                    item: { title: string; description: string },
                    index: number,
                  ) => (
                    <div
                      key={index}
                      className="py-12 border-b border-gray-800 dark:border-gray-300"
                    >
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
                        <h2 className="text-black dark:text-white font-semibold text-3xl">
                          {item.title}
                        </h2>
                        <p className="mt-4 text-gray-800 dark:text-gray-300">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
