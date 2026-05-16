// import AboutSection from "@/components/sections/AboutSection";
import HeaderSection from "@/components/sections/HeaderSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServiceSection from "@/components/sections/ServiceSection";
import { mergeMetaData } from "@/utils/seo";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      {/* About Section */}
      {/* <AboutSection /> */}
      {/* Project Section */}
      <ProjectSection />
      {/* Service Section */}
      <ServiceSection />
    </>
  );
}

export const metadata = mergeMetaData({
  title: "Branding Agency for Startups | One Percent Studio",
  description:
    "We build modern brand identities and strategies for startups and growing businesses worldwide.",
  keywords:
    "branding agency for startups, brand identity design, brand strategy agency, creative branding studio, global branding services",
  openGraph: {
    title: "Branding Agency for Startups | One Percent Studio",
    description:
      "We build modern brand identities and strategies for startups and growing businesses worldwide.",
  },
});
