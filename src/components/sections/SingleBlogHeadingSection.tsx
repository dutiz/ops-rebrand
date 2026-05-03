/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef } from "react";

export default function SingleBlogHeadingSection({ post }: { post: any }) {
  const ref = useRef(null);

  // 🎯 TEXT SLIDE UP
  return (
    <div ref={ref} className="bg-white dark:bg-gray-900">
      {/* 🔥 WRAPPER KRYESOR */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex md:flex-row flex-col min-h-[200vh]"
      >
        <div className="md:w-1/2 w-full">
          <motion.div className="sticky top-0 flex items-center">
            <Image
              width={540}
              height={800}
              src={post.image}
              alt={post.title}
              className="w-full h-auto lg:h-screen lg:object-cover"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="sticky top-0 flex flex-col gap-y-0 lg:gap-y-24 justify-center p-10 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-gambeta text-gray-800 dark:text-gray-300 text-xl lg:text-2xl italic">
                ( {post.date} )
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1
                className="mt-8 lg:mt-0 font-sans text-black dark:text-white text-[50px] lg:text-[72px] md:text-[94px] leading-none"
                dangerouslySetInnerHTML={{
                  __html: post.title,
                }}
              />
            </motion.div>
            <motion.div
              className="lg:mt-auto mt-5 lg:pb-16 pb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className="text-lg lg:text-2xl md:text-4xl font-semibold text-black dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
              />
            </motion.div>
            <div className="w-full flex flex-col py-10 lg:py-24 gap-y-0 lg:gap-y-8">
              <motion.div
                className="lg:mt-auto mt-0 lg:pb-16 pb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1 className="mt-8 text-black dark:text-white text-[32px] lg:text-[64px] font-sans leading-none uppercase">
                  {post.subtitle1}
                </h1>
              </motion.div>
              <motion.div
                className="lg:mt-auto mt-0 lg:pb-16 pb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className="my-5 text-gray-800 dark:text-gray-300 text-base lg:text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: post.content1,
                  }}
                ></p>
              </motion.div>
              <motion.div
                className="mt-0 lg:mt-auto lg:pb-16 pb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1 className="mt-5 text-black dark:text-white text-[32px] lg:text-[64px] font-sans leading-none uppercase">
                  {post.subtitle2}
                </h1>
              </motion.div>
              <motion.div
                className="mt-0 lg:mt-auto lg:pb-16 pb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className="my-5 text-gray-800 dark:text-gray-300 text-base lg:text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: post.content2,
                  }}
                />
              </motion.div>
              <motion.div
                className="mt-0 lg:mt-auto lg:pb-16 pb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1 className="mt-5 text-black dark:text-white text-[32px] lg:text-[64px] font-sans leading-none uppercase">
                  {post.subtitle3}
                </h1>
              </motion.div>
              <motion.div
                className="mt-0 lg:mt-auto lg:pb-16 pb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className="my-5 text-gray-800 dark:text-gray-300 text-base lg:text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: post.content3,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
