import WorkPageHeaderSection from "@/components/sections/WorkPageHeaderSection";
import WorkPageCard from "@/components/WorkPageCard";
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
