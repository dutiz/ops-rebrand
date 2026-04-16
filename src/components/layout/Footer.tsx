/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import content from "@/utils/content.json";
import Link from "next/link";

export default function Footer() {
  const { footer } = content;
  return (
    <div className="bg-white">
      <div className="container py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col gap-y-8 w-full">
              <Image
                src={`/images/${footer.img}.png`}
                width={827}
                height={320}
                alt="logo-img"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mt-8 flex md:flex-row flex-col gap-4">
            <div className="flex flex-col w-1/4">
              <p className="font-gambeta mb-8 text-gray-800 text-2xl italic">
                {footer.nav.meta}
              </p>
              {footer.nav.items.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="mt-4 text-2xl text-gray-900 font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-1/4">
              <p className="font-gambeta mb-8 text-gray-800 text-2xl italic">
                {footer.cms.meta}
              </p>
              {footer.cms.items.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="mt-4 text-2xl text-gray-900 font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-1/4">
              <p className="font-gambeta mb-8 text-gray-800 text-2xl italic">
                {footer.utilityPages.meta}
              </p>
              {footer.utilityPages.items.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="mt-4 text-2xl text-gray-900 font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col w-1/4">
              <p className="font-gambeta mb-8 text-gray-800 text-2xl italic">
                {footer.socials.meta}
              </p>
              {footer.socials.items.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className="mt-4 text-2xl text-gray-900 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
