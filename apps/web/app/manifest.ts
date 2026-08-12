import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amir Motefaker",
    short_name: "Amir",
    description: "AI products, technology, digital ecosystems and innovation.",
    start_url: "/fa",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/assets/profile/amir-motefaker.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}