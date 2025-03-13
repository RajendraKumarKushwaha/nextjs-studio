import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./components/Hero";
import AboutPage from "./components/About";
import PortfolioPage from "./components/Portfolio";
import Services from "./components/Services";
import Gallery from "./components/Gallary";
import Testimonials from "./components/Testimoinals";
import Contact from "./components/Contact";

export default function Home() {
  return (
  <>
  <Hero/>
  <AboutPage/>
  <PortfolioPage/>
  <Services/>
  <Gallery/>
  <Testimonials/>
  <Contact/>
  </>
  );
}
