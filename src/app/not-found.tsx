import Link from "next/link";
import content from "@/utils/content.json";

export default function NotFound() {
  const { notFoundPage } = content;
  return (
    <div className="bg-gray-900 h-screen flex items-center">
      <div className="mx-auto max-w-7xl">
        <div className=" my-37.5">
          <div className="mx-auto max-w-7xl">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
              <div className="w-full text-center">
                <h1 className="font-sans text-[140px] font-extrabold text-gray-100">
                  {notFoundPage.title}
                </h1>
                <p
                  className="mt-2 text-gray-300 text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: notFoundPage.description,
                  }}
                />
                <Link
                  href="/"
                  className="inline-block mt-8 px-4 py-6.5 bg-white text-gray-900 text-lg font-bold rounded-[40px]"
                >
                  {notFoundPage.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
