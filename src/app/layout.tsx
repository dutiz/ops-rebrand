import { Inter, Anton_SC } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { mergeMetaData } from "../utils/seo";

const antonSC = Anton_SC({
  variable: "--font-anton-sc-sans-serif",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${antonSC.variable} ${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = mergeMetaData();