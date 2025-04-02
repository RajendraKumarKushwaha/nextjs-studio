import "./globals.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import WhatsappButton from "./clientComponent/Whatsapp";

export const metadata = {
  title: "Memories World Photography | Best Photography Studio in Rewa",
  description:
    "Memories World is a professional photography studio in Rewa. We specialize in wedding photography, pre-wedding shoots, maternity photography, and candid moments.",
  icons: {
    icon: "/memo_32.png", // Replace with actual favicon path in /public (32x32 recommended)
  },
  keywords: [
    "best Studio in Rewa",
    "best Photography Stuidio in Rewa",
    "Photography Studio Rewa",
    "Wedding Photographer Rewa",
    "Pre-wedding Shoot Rewa",
    "Candid Photography Rewa",
    "Maternity Photography Rewa",
    "Best Photographer in Rewa",
    "Memories World Rewa",
    "Photography Services Rewa",
    "Photo Studio Rewa",
    "Professional Photographer Rewa",
    "Event Photography Rewa",
    "Couple Shoot Rewa",
    "Portfolio Photography Rewa",
    "Birthday Photography Rewa",
    "Outdoor Photoshoot Rewa"
  ],
  openGraph: {
    title: "Memories World Photography Studio",
    description:
      "Capture your moments with Memories World — Rewa's most loved photography studio. We bring emotions to life through the lens.",
    url: "https://www.memoriesworld.site/",
    siteName: "Memories World Photography",
    images: [
      {
        url: "https://www.memoriesworld.site/og-image.jpg", // Add an OG image in /public
        width: 1200,
        height: 630,
        alt: "Memories World Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <head>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-RRGR7JHX8F"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RRGR7JHX8F');
            `,
            }}
          />
        </head>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
