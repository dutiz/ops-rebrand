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
  title: "About Us | One Percent Studio",
  description:
    "Learn more about One Percent Studio, our mission, values, and the team behind our branding services.",
  keywords:
    "about one percent studio, branding agency, brand strategy, brand identity design",
  openGraph: {
    title: "About Us | One Percent Studio",
    description:
      "Learn more about One Percent Studio, our mission, values, and the team behind our branding services.",
  },
});
