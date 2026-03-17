"use client";

import content from "@/utils/content.json";
import ProjectCard from "../ProjectCard";

interface ProjectItem {
  img: string;
  title: string;
  year: string;
}

export default function ProjectSection() {
  const { projectSection } = content;
  return (
    <div className="bg-gray-600">
      <div className="mx-auto max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between py-24">
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-300 text-2xl italic">
              {projectSection.title}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-300 text-2xl italic">
              {projectSection.number}
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 pb-25">
          <div className="flex flex-col gap-y-8 w-full">
            <h1 className="font-sans text-[320px] text-white uppercase leading-none">
              {projectSection.subtitle}
            </h1>
            <p className="mt-2 text-white text-7xl">
              {projectSection.description}
            </p>
          </div>
        </div>
      </div>
      {projectSection.items
        .reduce((rows: ProjectItem[][], item: ProjectItem, index: number) => {
          if (index % 2 === 0) {
            rows.push(projectSection.items.slice(index, index + 2));
          }
          return rows;
        }, [])
        .map((row: ProjectItem[], rowIndex: number) => (
          <div key={rowIndex} className="flex md:flex-row flex-col">
            {row.map((item: ProjectItem, i: number) => (
              <ProjectCard
                key={i}
                img={item.img}
                title={item.title}
                year={item.year}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
