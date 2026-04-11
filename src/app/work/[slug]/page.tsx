/* eslint-disable @typescript-eslint/no-explicit-any */
import WorkContentSection from "@/components/sections/WorkContentSection";
import WorkHeaderSection from "@/components/sections/WorkHeaderSection";
import WorkImagesSection from "@/components/sections/WorkImagesSection";
import works from "@/utils/works.json";

export default async function singleproject({ params }: any) {
  const resolvedParams = await params;
  const work = works.works.find((p) => p.slug === resolvedParams.slug);
  if (!work) {
    return <div>Work not found: {resolvedParams.slug}</div>;
  }

  return (
    <>
      {/* Work Header Section  */}
      <WorkHeaderSection content={work} />
      {/* Work Content Section  */}
      <WorkContentSection content={work} />
      {/* Work Image Section */}
      <WorkImagesSection content={work.gallery} />
    </>
  );
}
