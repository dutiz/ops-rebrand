import ProcessHeaderSection from "@/components/sections/ProcessHeaderSection";
import ServiceHeaderSection from "@/components/sections/ServiceHeaderSection";
import ServicePageConentCard from "@/components/ServicePageConentCard";
import ProcessContentCard from "@/components/ProcessContentCard";
import content from "@/utils/content.json";
export default function page() {
  const { servicePage } = content;
  const { processSection } = content;
  return (
    <>
      {/* ServiceHeaderSection */}
      <ServiceHeaderSection />
      {/* ServiceContent */}
      {servicePage.items.map((item, index) => (
        <ServicePageConentCard key={index} serviceItem={item} />
      ))}
      {/* Process Header Section */}
      <ProcessHeaderSection />
      {/* Process Content */}
      {processSection.items.map((item, index) => (
        <ProcessContentCard key={index} processItem={item} />
      ))}
    </>
  );
}
