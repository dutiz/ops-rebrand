/* eslint-disable @typescript-eslint/no-explicit-any */
import blog from "@/utils/blog.json";
import SingleBlogHeadingSection from "@/components/sections/SingleBlogHeadingSection";
export default async function SingleBlog({ params }: any) {
  const resolvedParams = await params;

  const post = blog.posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return <div>Post not found: {resolvedParams.slug}</div>;
  }

  return (
    <>
      <SingleBlogHeadingSection post={post} />
    </>
  );
}
