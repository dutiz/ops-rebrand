"use client";

import Link from "next/link";
import Image from "next/image";

interface WorkPageCardProps {
  cover: string;
  title: string;
  slug: string;
}

export default function WorkPageCard({
  cover,
  title,
  slug,
}: WorkPageCardProps) {
  return (
    <Link href={`/work/${slug}`} className="flex-1">
      <div className="relative flex items-end overflow-hidden py-17 pt-32 md:pt-120 mb-3">
        <Image
          src={cover}
          width={1200}
          height={1200}
          alt="Work Image"
          className="absolute inset-0 -z-20 h-auto w-full"
        />
        <div className="container">
          <div className="max-w-7xl">
            <span className="text-4xl font-bold text-white font-sans md:text-8xl">
              {title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
