"use client";

import content from "@/utils/content.json";
import ServiceCard from "../ServiceCard";

export default function ServiceSection() {
  const { serviceSection } = content;
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between py-24">
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-300 text-2xl italic">
              {serviceSection.title}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-gambeta text-gray-300 text-2xl italic">
              {serviceSection.number}
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 mb-25">
          <div className="flex flex-col gap-y-8 w-full">
            <h1 className="font-sans text-[320px] text-white uppercase leading-none">
              {serviceSection.subtitle}
            </h1>
            <p className="mt-2 text-white text-7xl">
              {serviceSection.description}
            </p>
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
