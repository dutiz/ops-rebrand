"use client";

import content from "@/utils/content.json";
import ServiceCard from "../ServiceCard";
import { motion } from "motion/react";

export default function ServiceSection() {
  const { serviceSection } = content;
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
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
          <div className="flex flex-row justify-between py-24">
            <div className="flex flex-col">
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
                <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                  {serviceSection.title}
                </p>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                {serviceSection.number}
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex md:flex-row flex-col gap-4 mb-25">
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
                {serviceSection.subtitle}
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
              <p className="mt-2 text-black dark:text-white text-3xl lg:text-7xl">
                {serviceSection.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {serviceSection.items.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <ServiceCard
              key={index}
              left
              img={item.img}
              title1={item.title1}
              title2={item.title2}
              meta={item.meta}
            >
              {item.description}
            </ServiceCard>
          );
        } else {
          return (
            <ServiceCard
              key={index}
              img={item.img}
              title1={item.title1}
              title2={item.title2}
              meta={item.meta}
            >
              {item.description}
            </ServiceCard>
          );
        }
      })}
    </div>
  );
}
