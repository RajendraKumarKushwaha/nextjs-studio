import Services from "../components/Services";

export const metadata = {
    title: "Our Services | Memories World Photography Studio - Rewa",
    description:
      "Discover premium photography services by Memories World Studio in Rewa. From weddings to candid shoots, we capture your memories beautifully.",
    keywords: [
      "Photography Services Rewa",
      "Wedding Photography Rewa",
      "Pre-Wedding Photoshoot Rewa",
      "Maternity Photography Rewa",
      "Candid Photography Rewa",
      "Photo Studio Rewa",
      "Best Photographer in Rewa",
      "Affordable Photoshoot Rewa",
      "Studio Services Rewa",
      "Professional Photography Rewa"
    ],
    openGraph: {
      title: "Our Photography Services - Memories World",
      description:
        "Explore a wide range of photography services offered by Memories World Studio including wedding, maternity, pre-wedding, and candid shoots.",
      url: "https://www.memoriesworld.site/services",
      siteName: "Memories World Photography",
      images: [
        {
          url: "https://www.memoriesworld.site/services-og.jpg", // Add this image in /public folder
          width: 1200,
          height: 630,
          alt: "Photography Services by Memories World",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
  
export default function ServicePage(){
    return <Services/>
}