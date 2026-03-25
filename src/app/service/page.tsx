import ServiceHeaderSection from "@/components/sections/ServiceHeaderSection";
import ServicePageConentCard from "@/components/ServicePageConentCard";
import content from "@/utils/content.json";
export default function page() {
  const { servicePage } = content;
  return (
    <>
      {/* ServiceHeaderSection */}
      <ServiceHeaderSection />
      {/* ServiceContent */}
      {servicePage.items.map((item, index) => (
        <ServicePageConentCard key={index} serviceItem={item} />
      ))}
    </>
  );
}
