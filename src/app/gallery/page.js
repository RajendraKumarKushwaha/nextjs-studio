import Gallery from "../components/Gallary";

export const metadata = {
    title: "Gallery | Memories World Photography - Rewa's Best Photo Studio",
    description:
      "Explore our stunning gallery showcasing wedding, pre-wedding, maternity, and candid photoshoots by Memories World Photography Studio in Rewa.",
    keywords: [
      "Photography Gallery Rewa",
      "Wedding Photos Rewa",
      "Pre-Wedding Shoot Rewa",
      "Maternity Photoshoot Rewa",
      "Candid Photography Rewa",
      "Memories World Studio",
      "Best Photo Studio Rewa",
      "Professional Photographer Rewa",
      "Photo Gallery Rewa",
      "Photoshoot Samples Rewa",
      "Rewa Wedding Photographer",
      "Photography Portfolio Rewa"
    ],
    openGraph: {
      title: "Photography Gallery - Memories World Studio",
      description:
        "View beautiful and professional photographs captured by Memories World Studio. Discover our gallery for inspiration and quality.",
      url: "https://www.memoriesworld.site/gallery",
      siteName: "Memories World Photography",
      images: [
        {
          url: "https://www.memoriesworld.site/gallery-og.jpg", // Add this image in /public
          width: 1200,
          height: 630,
          alt: "Gallery - Memories World Photography Studio",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };

  
export default function GalleryPage(){
    return <Gallery/>
}