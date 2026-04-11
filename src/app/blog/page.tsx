"use client";
import blog from "@/utils/blog.json";
import BlogCard from "@/components/BlogCard";
import BlogHeaderSection from "@/components/sections/BlogHeaderSection";

interface BlogPostInterface {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  subtitle1: string;
  content1: string;
  subtitle2: string;
  content2: string;
  subtitle3: string;
  content3: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

export default function BlogPage() {
  return (
    <>
      {/* Blog Header Section */}
      <BlogHeaderSection />
      {/* Blog List Section */}
      <div className="bg-gray-600">
        {blog.posts
          .reduce(
            (
              rows: BlogPostInterface[][],
              _post: BlogPostInterface,
              index: number,
            ) => {
              if (index % 3 === 0) {
                rows.push(blog.posts.slice(index, index + 3)); // 👈 3 këtu
              }
              return rows;
            },
            [],
          )
          .map((row: BlogPostInterface[], rowIndex: number) => (
            <div key={rowIndex} className="flex md:flex-row flex-col gap-0">
              {row.map((item: BlogPostInterface) => (
                <BlogCard
                  key={item.id} // 👈 mos përdor index
                  post={item}
                />
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
