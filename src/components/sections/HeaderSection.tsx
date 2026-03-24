"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import content from "@/utils/content.json";
import SVG from "react-inlinesvg";
import { useRef } from "react";
export default function Section() {
  const { headerSection } = content;
  const { aboutSection } = content;
  const ref = useRef(null);

  // 🎯 TEXT SLIDE UP
  return (
    <div ref={ref} className="bg-gray-900">
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
              src={headerSection.image}
              alt="header-img"
              className="w-full h-screen object-cover"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="sticky top-0 flex flex-col gap-y-24 justify-center px-6 md:px-12">
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
                className="mt-9 font-sans text-white text-[72px] md:text-[144px] leading-none"
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
                className="-mt-23 font-sans text-white text-[72px] md:text-[144px] leading-none"
                dangerouslySetInnerHTML={{
                  __html: headerSection.heading2,
                }}
              />
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
              <p
                className="text-2xl md:text-4xl font-semibold text-white"
                dangerouslySetInnerHTML={{
                  __html: headerSection.subheading,
                }}
              />
            </motion.div>
            <div className="w-1/2 flex flex-col gap-y-8">
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
                <p className="font-gambeta text-gray-300 text-2xl italic">
                  {aboutSection.title}
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
                <h1 className="mt-8 text-white text-[128px] font-sans leading-none uppercase">
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
                <p className="mt-2 text-gray-300 text-2xl">
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
                  className="text-white text-xl underline font-bold"
                >
                  More About Us
                </Link>
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
                <p className="mt-14 font-gambeta text-gray-300 text-2xl italic">
                  {aboutSection.partners.title}
                </p>
              </motion.div>
              {aboutSection.partners.items.map((partner, index) => (
                <motion.div
                  key={index}
                  className="mt-auto pb-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div>
                    <SVG src={partner.svg} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
