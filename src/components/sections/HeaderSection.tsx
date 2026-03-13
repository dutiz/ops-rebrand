"use client";
import Image from "next/image";
import content from "@/utils/content.json";

export default function HeaderSection() {
  const { headerSection } = content;
  return (
    <div className="bg-gray-600 overflow-x-hidden relative">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex flex-col gap-y-8 w-1/2 ">
          <Image
            width={540}
            height={800}
            src={headerSection.image}
            sizes="w-full h-screen"
            alt="header-img"
          />
        </div>
        <div className="flex flex-col gap-y-24 w-1/2">
          <h1
            className="mt-9 font-sans text-white text-[144px] leading-none"
            dangerouslySetInnerHTML={{ __html: headerSection.heading }}
          />
          <p
            className="absolute bottom-16 text-4xl font-semibold text-white"
            dangerouslySetInnerHTML={{ __html: headerSection.subheading }}
          />
        </div>
      </div>
    </div>
  );
}
