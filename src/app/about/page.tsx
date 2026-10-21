import AboutContentSection from "@/components/sections/AboutContentSection";
import AboutHeaderSection from "@/components/sections/AboutHeaderSection";
import { mergeMetaData } from "@/utils/seo";

export default function page() {
  return (
    <>
      {/* AboutHeaderSection */}
      <AboutHeaderSection />
      {/* AboutContentSection */}
      <AboutContentSection />
    </>
  );
}

export const metadata = mergeMetaData({
  title: "About Us | Meroe Studio",
  description:
    "Learn more about Meroe Studio, our mission, values, and the team behind our branding services.",
  keywords:
    "about Meroe studio, branding agency, brand strategy, brand identity design",
  openGraph: {
    title: "About Us | Meroe Studio",
    description:
      "Learn more about Meroe Studio, our mission, values, and the team behind our branding services.",
  },
});
