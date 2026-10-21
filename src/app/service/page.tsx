import ProcessHeaderSection from "@/components/sections/ProcessHeaderSection";
import ServiceHeaderSection from "@/components/sections/ServiceHeaderSection";
import ServicePageConentCard from "@/components/ServicePageConentCard";
import ProcessContentCard from "@/components/ProcessContentCard";
import content from "@/utils/content.json";
import { mergeMetaData } from "@/utils/seo";
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

export const metadata = mergeMetaData({
  title: "Branding Services | Strategy, Identity & Design | Meroe Studio",
  description:
    "Explore our branding services including brand strategy, identity design, and rebranding for modern businesses.",
  keywords:
    "branding services, brand strategy services, brand identity design, logo design services, rebranding services",
  openGraph: {
    title: "Branding Services | Strategy, Identity & Design",
    description:
      "Explore our branding services including brand strategy, identity design, and rebranding for modern businesses.",
  },
});
