import Image from "next/image";
import content from "@/utils/content.json";

export default function Footer() {
  const { footer } = content;
  return (
    <div className="bg-white">
      <div className="container py-24">
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
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col gap-y-8 w-1/4">
            {footer.nav.map((item) => (
              <div key={item.href}>
                <p className="text-black">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
