import PortfolioPage from "../components/Portfolio";

export const metadata = {
    title: "Portfolio | Memories World Photography Studio - Rewa",
    description:
      "Explore the stunning photography portfolio of Memories World Studio in Rewa. From weddings to maternity shoots, view our creative and professional work.",
    keywords: [
      "Photography Portfolio Rewa",
      "Best Photographers in Rewa",
      "Memories World Portfolio",
      "Wedding Photography Rewa",
      "Maternity Shoots Rewa",
      "Candid Photography Rewa",
      "Pre-Wedding Portfolio Rewa",
      "Rewa Photo Studio Portfolio"
    ],
    openGraph: {
      title: "Our Photography Portfolio - Memories World",
      description:
        "Take a look at our finest work! Discover how Memories World Photography Studio captures timeless memories through our professional portfolio.",
      url: "https://www.memoriesworld.site/portfolio",
      siteName: "Memories World Photography",
      images: [
        {
          url: "https://www.memoriesworld.site/portfolio-og.jpg", // make sure this exists in /public
          width: 1200,
          height: 630,
          alt: "Memories World Portfolio",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
  
export default function Portfolio(){
    return <PortfolioPage/>
}