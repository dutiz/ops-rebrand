"use client";

import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  year: string;
}

export default function ProjectCard({ img, title, year }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-1/2">
      <Image
        src={`/images/${img}.png`}
        width={540}
        height={800}
        className="w-full h-auto"
        alt={img}
      />
      <div className="flex md:flex-row flex-col items-center justify-between p-8">
        <div className="flex flex-col">
          <p className="text-black dark:text-white font-bold text-4xl">
            {title}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-gambeta text-gray-800 dark:text-gray-300 text-2xl italic">
            ( {year} )
          </p>
        </div>
      </div>
    </div>
  );
}
