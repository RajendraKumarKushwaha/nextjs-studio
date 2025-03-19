import Testimonials from "../components/Testimoinals";

export const metadata = {
    title: "Client Testimonials | Memories World Photography Studio, Rewa",
    description:
      "Hear what our happy clients have to say about their experience with Memories World Photography Studio. Real reviews and feedback from Rewa and beyond.",
    keywords: [
      "Photography testimonials Rewa",
      "Client reviews Memories World",
      "Photography feedback",
      "Best photographer Rewa reviews",
      "Happy clients photography studio",
      "Memories World Photography",
      "Customer experience photography",
      "Rewa photography testimonials",
      "Photo studio feedback",
    ],
    openGraph: {
      title: "Testimonials - Memories World Photography",
      description:
        "Read real client reviews and experiences with Memories World Studio. Trusted by families, couples, and professionals in Rewa.",
      url: "https://www.memoriesworld.site/testimonials",
      siteName: "Memories World Photography",
      images: [
        {
          url: "https://www.memoriesworld.site/testimonials-og.jpg", // Create this OG image
          width: 1200,
          height: 630,
          alt: "Client Testimonials - Memories World Studio",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
  
export default function TestimonialPage(){
    return <Testimonials/>
}