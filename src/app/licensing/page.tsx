"use client";
import Image from "next/image";
import { motion } from "motion/react";
import content from "@/utils/content.json";

export default function page() {
  const { licensingPage } = content;
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <Image
            src={`/images/slide/${licensingPage.img}.png`}
            width={500}
            height={1000}
            alt={licensingPage.img}
            className="w-auto h-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col gap-y-24 justify-center pt-32 pb-16 px-24 md:px-12">
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
                className="mt-9 font-sans text-black dark:text-white text-[72px] md:text-[144px] leading-none"
                dangerouslySetInnerHTML={{
                  __html: licensingPage.title,
                }}
              />
            </motion.div>
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className="text-2xl md:text-4xl font-semibold text-black dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: licensingPage.description,
                }}
              />
            </motion.div>
            <div className="bg-gray-100 dark:bg-gray-600 p-16">
              <h2 className="font-sans text-4xl uppercase text-black dark:text-white">
                {licensingPage.links.name}
              </h2>
              {licensingPage.links.items.map((item, index) => (
                <div
                  key={index}
                  className="mt-8 flex flex-row justify-between gap-x-8"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-black dark:text-white">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <a
                      href={item.href}
                      className="inline-block text-xl text-black dark:text-white ranimation-border"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.alt}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
