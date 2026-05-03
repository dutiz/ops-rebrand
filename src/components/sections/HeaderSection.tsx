"use client";

import Link from "next/link";
import { motion } from "motion/react";
import content from "@/utils/content.json";
import SVG from "react-inlinesvg";
import { useRef } from "react";
import Slider from "../Slider";

interface PartnersItem {
  svg: string;
  href: string;
}

export default function Section() {
  const { headerSection } = content;
  const { aboutSection } = content;
  const ref = useRef(null);

  // 🎯 TEXT SLIDE UP
  return (
    <div ref={ref} className="dark:bg-gray-900 bg-white relative top-0">
      {/* 🔥 WRAPPER KRYESOR */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex md:flex-row flex-col min-h-[200vh]"
      >
        <div className="md:w-1/2 w-full">
          <motion.div className="sticky top-0 flex items-center">
            <Slider items={headerSection.slides} />
          </motion.div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="sticky mt-10 md:mt-32 flex flex-col gap-y-24 justify-center px-6 md:px-12">
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
                className="mt-9 font-sans text-black dark:text-white text-[80px] md:text-[144px] leading-none"
                dangerouslySetInnerHTML={{
                  __html: headerSection.heading,
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1
                className="-mt-23 font-sans text-black dark:text-white text-[80px] md:text-[144px] leading-none"
                dangerouslySetInnerHTML={{
                  __html: headerSection.heading2,
                }}
              />
            </motion.div>
            <motion.div
              className="mt-auto pb-0 md:pb-16"
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
                  __html: headerSection.subheading,
                }}
              />
            </motion.div>
            <div className="w-full flex flex-col gap-y-0 md:gap-y-8">
              <motion.div
                className="mt-auto pb-4 md:pb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                  {aboutSection.title}
                </p>
              </motion.div>
              <motion.div
                className="mt-auto pb-4 md:pb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h1 className="mt-4 md:mt-8 text-black dark:text-white text-[64px] md:text-[80px] lg:text-[96px] font-sans leading-none uppercase">
                  {aboutSection.subtitle}
                </h1>
              </motion.div>
              <motion.div
                className="mt-auto pb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="mt-2 text-gray-800 dark:text-gray-300 text-2xl">
                  {aboutSection.description}
                </p>
              </motion.div>
              <motion.div
                className="mt-auto pb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/about"
                  className="text-black dark:text-white text-xl underline font-bold"
                >
                  More About Us
                </Link>
              </motion.div>
              <motion.div
                className="mt-auto pb-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="mt-14 font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                  {aboutSection.partners.title}
                </p>
              </motion.div>
              <div className="mb-16">
                {aboutSection.partners.items
                  .reduce(
                    (
                      rows: PartnersItem[][],
                      item: PartnersItem,
                      index: number,
                    ) => {
                      if (index % 2 === 0) {
                        rows.push(
                          aboutSection.partners.items.slice(index, index + 2),
                        );
                      }
                      return rows;
                    },
                    [],
                  )
                  .map((row: PartnersItem[], rowIndex: number) => (
                    <div key={rowIndex} className="flex flex-row gap-x-8">
                      {row.map((partner, index) => (
                        <motion.div
                          key={index}
                          className="mt-2 "
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <Link href={partner.href} target="_blank">
                            <SVG
                              src={`/svg/${partner.svg}.svg`}
                              className="fill-current text-black dark:text-white w-27.75 h-auto mb-5"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
