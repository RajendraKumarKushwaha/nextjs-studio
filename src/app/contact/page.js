import Contact from "../components/Contact";

export const metadata = {
  title: "Contact Us | Memories World Photography Studio, Rewa",
  description:
    "Get in touch with Memories World Studio in Rewa for wedding, pre-wedding, maternity, and candid photography services. Book your session today.",
  keywords: [
    "Contact photographer Rewa",
    "Photography studio contact",
    "Book photo shoot Rewa",
    "Wedding photography contact Rewa",
    "Pre-wedding shoot Rewa",
    "Best photographer Rewa",
    "Photography booking Rewa",
    "Memories World contact",
    "Family shoot booking Rewa",
    "Photography services Rewa",
  ],
  openGraph: {
    title: "Contact - Memories World Photography",
    description:
      "We are just a message away. Reach out to Memories World Photography Studio in Rewa to book your session or ask questions.",
    url: "https://www.memoriesworld.site/contact",
    siteName: "Memories World Photography",
    images: [
      {
        url: "https://www.memoriesworld.site/contact-og.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Contact Memories World Photography Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  )
}