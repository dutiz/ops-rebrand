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
    <div className="bg-gray-600">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex flex-col gap-y-8 w-1/2">
          <Image
            src={`/images/${img}.png`}
            width={540}
            height={800}
            className="w-full h-auto"
            alt={`${img}`}
          />
        </div>
        <div className="flex relative flex-col gap-y-8 w-1/2 p-24 ">
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
            <h1 className="text-white font-sans text-[128px] leading-none uppercase">
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
            <h1 className="text-white font-sans text-[128px] leading-none uppercase">
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
              className="mt-2 font-bold text-gray-400 text-4xl"
              dangerouslySetInnerHTML={{ __html: children }}
            />
          </motion.div>
          <motion.div
            className="mt-auto flex md:flex-row flex-col gap-x-12 w-full pb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col w-1/2">
              <p className="text-2xl text-white font-bold">
                {meta.list[0].name}
              </p>
              <p className="mt-4 text-2xl text-white font-bold">
                {meta.list[2].name}
              </p>
            </div>

            <div className="flex flex-col w-1/2">
              <p className="text-2xl text-white font-bold">
                {meta.list[1].name}
              </p>
              <p className="mt-4 text-2xl text-white font-bold">
                {meta.list[3].name}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-600 h-full">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex relative flex-col gap-y-8 w-1/2 p-24 ">
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
            <h1 className="text-white font-sans text-[128px] leading-none uppercase">
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
            <h1 className="text-white font-sans text-[128px] leading-none uppercase">
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
              className="mt-2 font-bold text-gray-400 text-4xl"
              dangerouslySetInnerHTML={{ __html: children }}
            />
          </motion.div>
          <motion.div
            className="mt-auto flex md:flex-row flex-col gap-x-12 w-full pb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col w-1/2">
              <p className="text-2xl text-white font-bold">
                {meta.list[0].name}
              </p>
              <p className="mt-4 text-2xl text-white font-bold">
                {meta.list[2].name}
              </p>
            </div>

            <div className="flex flex-col w-1/2">
              <p className="text-2xl text-white font-bold">
                {meta.list[1].name}
              </p>
              <p className="mt-4 text-2xl text-white font-bold">
                {meta.list[3].name}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-8 w-1/2">
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
