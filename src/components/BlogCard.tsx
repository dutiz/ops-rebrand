/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <div className="flex flex-col w-full lg:w-1/3">
      <div className="bg-gray-100 dark:bg-gray-600 group hover:bg-gray-600 dark:hover:bg-gray-100 transition-all ease-in-out duration-700">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-16">
            <p className="font-gambeta text-gray-800 dark:text-gray-300 group-hover:text-gray-300 dark:group-hover:text-gray-800 text-2xl italic">
              ( {post.date} )
            </p>
            <h2 className="font-sans text-3xl mt-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-gray-800">
              {post.title}
            </h2>
            <p className="mt-2 text-xl text-gray-800 dark:text-gray-300 group-hover:text-gray-300 dark:group-hover:text-gray-800">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
