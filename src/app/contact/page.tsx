"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { mergeMetaData } from "@/utils/seo";
import content from "@/utils/content.json";

export default function page() {
  const { contactPage } = content;
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex lg:flex-row flex-col items-start justify-center gap-0">
        <div className="w-full lg:w-1/2">
          <Image
            src={`/images/${contactPage.img}.png`}
            alt={contactPage.img}
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 p-19">
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
              className="mt-9 uppercase font-sans text-black dark:text-white text-[72px] md:text-[144px] leading-none"
              dangerouslySetInnerHTML={{
                __html: contactPage.title1,
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
              className="mt-4 uppercase font-sans text-black dark:text-white text-[72px] md:text-[144px] leading-none"
              dangerouslySetInnerHTML={{
                __html: contactPage.title2,
              }}
            />
          </motion.div>
          <form>
            <div className="mt-10 flex lg:flex-row flex-col items-start justify-center gap-x-8">
              <div className="w-full lg:w-1/2">
                <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                  {contactPage.metaName}
                </p>
                <input
                  type="text"
                  placeholder={contactPage.namePlaceholder}
                  className="mt-2 w-full px-4 py-3 bg-gray-100 dark:bg-gray-600 placeholder-gray-800 dark:placeholder-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
                <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
                  {contactPage.metaEmail}
                </p>
                <input
                  type="email"
                  placeholder={contactPage.emailPlaceholder}
                  className="mt-2 w-full px-4 py-3 bg-gray-100 dark:bg-gray-600 placeholder-gray-800 dark:placeholder-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6 flex lg:flex-row flex-col items-start justify-center gap-0">
              <div className="w-full">
                <textarea
                  placeholder={contactPage.messagePlaceholder}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-600 placeholder-gray-800 dark:placeholder-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full font-semibold mt-6 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-2xl rounded-xl transition-colors duration-300"
                >
                  {contactPage.button}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const metadata = mergeMetaData({
  title: "Contact | One Percent Studio - Branding Agency",
  description:
    "Get in touch with a global branding agency to build a powerful and modern brand.",
  keywords:
    "hire branding agency, contact branding studio, branding services for startups, work with branding agency",
  openGraph: {
    title: "Contact | One Percent Studio - Branding Agency",
    description:
      "Get in touch with a global branding agency to build a powerful and modern brand.",
  },
});
