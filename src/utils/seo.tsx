/* eslint-disable @typescript-eslint/no-explicit-any */
export const defaultData = {
  title: "Meroe Studio",
  description:
    "Crafting impactful brands and sites that drive growth and success.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meroe Studio",
    type: "website",
    siteName: "Meroe Studio",
    locale: "en_US",
    description:
      "Crafting impactful brands and sites that drive growth and success.",
    images: [
      {
        url: "/images/og_image.jpg",
        alt: "Meroe Studio – Crafting impactful brands and sites that drive growth and success.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export const mergeMetaData = (meta?: any) => {
  if (!meta) return defaultData;
  return mergeDeep(defaultData, meta);
};

const isObject = (item: any) =>
  item && typeof item === "object" && !Array.isArray(item);

const mergeDeep = (target: any, ...sources: any) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};
