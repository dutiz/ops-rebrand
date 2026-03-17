import AboutSection from "@/components/sections/AboutSection";
import HeaderSection from "@/components/sections/HeaderSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      {/* About Section */}
      <AboutSection />
      {/* Project Section */}
      <ProjectSection />
      {/* Service Section */}
      <ServiceSection />
    </>
  );
}
