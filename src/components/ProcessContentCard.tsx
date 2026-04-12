import Image from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProcessContentCard({
  processItem,
}: {
  processItem: any;
}) {
  return (
    <div className="bg-gray-600">
      <div className="flex lg:flex-row flex-col items-start justify-center gap-0">
        <div className="w-1/2">
          <Image
            src={`/images/${processItem.img}.png`}
            alt={processItem.title}
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 p-24">
          <h1 className="text-white text-[120px] font-bold font-sans">
            {processItem.number}
          </h1>
          <p className="font-gambeta mt-16 text-gray-300 text-2xl italic">
            {processItem.meta}
          </p>
          <h2 className="mt-8 text-[64px] text-white font-semibold leading-none">
            {processItem.title}
          </h2>
          <p
            className="mt-4 text-gray-300"
            dangerouslySetInnerHTML={{ __html: processItem.description }}
          />
        </div>
      </div>
    </div>
  );
}
