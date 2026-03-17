"use client";

import content from "@/utils/content.json";
import SVG from "react-inlinesvg";
import Link from "next/link";

export default function AboutSection() {
  const { aboutSection } = content;
  return (
    <div className="bg-gray-900">
      <div className="container py-25">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col gap-y-8 w-1/2"></div>
          <div className="flex flex-col gap-y-8 w-1/2">
            <p className="font-gambeta text-gray-300 text-2xl italic">
              {aboutSection.title}
            </p>
            <h1 className="mt-8 text-white text-[128px] font-sans leading-none uppercase">
              {aboutSection.subtitle}
            </h1>
            <p className="mt-2 text-gray-300 text-2xl">
              {aboutSection.description}
            </p>
            <Link
              href="/about"
              className="text-white text-xl underline font-bold"
            >
              More About Us
            </Link>
            <p className="mt-14 font-gambeta text-gray-300 text-2xl italic">
              {aboutSection.partners.title}
            </p>
            {aboutSection.partners.items.map((partner, index) => (
              <div key={index}>
                <SVG src={partner.svg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
