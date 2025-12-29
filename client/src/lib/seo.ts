import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

export function constructMetadata({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = "/images/og-image.jpg", // Ensure you have a default image
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}