/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
export default function WorkImagesSection({ content }: { content: any }) {
  const rows: any[][] = content.reduce(
    (acc: any[][], item: any, index: number) => {
      if (index % 3 === 0) {
        acc.push(content.slice(index, index + 3));
      }
      return acc;
    },
    [],
  );

  return (
    <div className="bg-gray-900">
      {rows.map((row: any[], rowIndex: number) => (
        <div key={rowIndex} className="flex flex-wrap">
          {row.map((item: any, index: number) => {
            const isFull = index === 2;

            return (
              <div key={index} className={isFull ? "w-full" : "w-1/2"}>
                <Image
                  src={item.src}
                  width={526}
                  height={526}
                  alt={`Galleryimage${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
