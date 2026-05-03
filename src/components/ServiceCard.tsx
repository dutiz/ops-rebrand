/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ServiceCardProps {
  img?: string;
  title1?: string;
  title2?: string;
  children?: any;
  meta?: any;
  left?: boolean;
}

export default function ServiceCard({
  img,
  title1,
  title2,
  children,
  meta,
  left,
}: ServiceCardProps) {
  return left ? (
    <div className="bg-gray-100 dark:bg-gray-600">
      <div className="flex md:flex-row flex-col gap-0">
        <div className="flex flex-col gap-y-0 w-full lg:w-1/2">
          <Image
            src={`/images/${img}.png`}
            width={540}
            height={800}
            className="w-full h-auto"
            alt={`${img}`}
          />
        </div>
        <div className="flex relative flex-col gap-y-8 w-full lg:w-1/2 lg:p-24 p-10">
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
            <h1 className="text-black dark:text-white font-sans text-[64px] lg:text-[128px] leading-none uppercase">
              {title1}
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
            <h1 className="text-black dark:text-white font-sans text-[64px] lg:text-[128px] leading-none uppercase">
              {title2}
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
            <p
              className="mt-2 font-bold text-gray-800 dark:text-gray-400 text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: children }}
            />
          </motion.div>
          <motion.div
            className="mt-auto flex md:flex-row flex-col gap-x-12 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col w-full">
              <p className="font-gambeta text-gray-800 dark:text-gray-300 text-xl lg:text-2xl italic">
                {meta.title}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-2 flex md:flex-row flex-col gap-x-12 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[0].name}
              </p>
              <p className="mt-4 text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[2].name}
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[1].name}
              </p>
              <p className="mt-4 text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[3].name}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-100 dark:bg-gray-600 h-full">
      <div className="flex md:flex-row flex-col gap-0">
        <div className="flex relative flex-col gap-y-8 w-full lg:w-1/2 lg:p-24 p-10">
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
            <h1 className="text-black dark:text-white font-sans text-[64px] lg:text-[128px] leading-none uppercase">
              {title1}
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
            <h1 className="text-black dark:text-white font-sans text-[64px] lg:text-[128px] leading-none uppercase">
              {title2}
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
            <p
              className="mt-2 font-bold text-gray-800 dark:text-gray-400 text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: children }}
            />
          </motion.div>
          <motion.div
            className="mt-auto flex md:flex-row flex-col gap-x-12 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col w-full">
              <p className="font-gambeta text-gray-800 dark:text-gray-300 text-xl lg:text-2xl italic">
                {meta.title}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-2 flex md:flex-row flex-col gap-x-12 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[0].name}
              </p>
              <p className="mt-4 text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[2].name}
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[1].name}
              </p>
              <p className="mt-4 text-xl lg:text-2xl text-black dark:text-white font-bold">
                {meta.list[3].name}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-8 w-full lg:w-1/2 order-first lg:order-0">
          <Image
            src={`/images/${img}.png`}
            width={540}
            height={800}
            className="w-full h-auto"
            alt={`${img}`}
          />
        </div>
      </div>
    </div>
  );
}
