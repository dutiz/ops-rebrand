import WorkPageHeaderSection from "@/components/sections/WorkPageHeaderSection";
import WorkPageCard from "@/components/WorkPageCard";
import { mergeMetaData } from "@/utils/seo";
import works from "@/utils/works.json";

export default function work() {
  return (
    <>
      {/* Work Page Header Section  */}
      <WorkPageHeaderSection />

      {/* Work Page Card */}
      {works.works.map((work) => (
        <WorkPageCard
          key={work.id}
          cover={work.cover}
          title={work.title}
          slug={work.slug}
        />
      ))}
    </>
  );
}

export const metadata = mergeMetaData({
  title: "Branding Portfolio | Our Work & Case Studies | One Percent Studio",
  description:
    "Explore our branding projects, case studies, and brand identity work for startups and businesses worldwide.",
  keywords:
    "branding portfolio, brand identity portfolio, logo design portfolio, branding projects, case studies branding",
  openGraph: {
    title: "Branding Portfolio | Our Work & Case Studies",
    description:
      "Explore our branding projects, case studies, and brand identity work for startups and businesses worldwide.",
  },
});
