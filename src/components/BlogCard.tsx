/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <div className="flex flex-col w-1/3">
      <div className="bg-gray-600 group hover:bg-white">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-16">
            <p className="font-gambeta text-gray-400 text-2xl italic">
              ( {post.date} )
            </p>
            <h2 className="font-sans text-3xl mt-8 text-white group-hover:text-black">
              {post.title}
            </h2>
            <p className="text-xl text-gray-400">{post.excerpt}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
