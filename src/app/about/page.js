import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About Us | Memories World Photography Studio - Rewa",
  description:
    "Learn about Memories World Photography Studio in Rewa. We are passionate about capturing the most memorable moments of your life with creativity and care.",
  keywords: [
    "About Photography Studio Rewa",
    "Memories World About",
    "Best Photographers Rewa",
    "Photography Journey Rewa",
    "Photo Studio Team Rewa",
    "Meet Our Photographers",
    "Photography Experts Rewa"
  ],
  openGraph: {
    title: "About Us - Memories World Photography Studio",
    description:
      "Memories World is a team of passionate photographers dedicated to making your moments timeless. Learn more about our story and vision.",
    url: "https://www.memoriesworld.site/about",
    siteName: "Memories World Photography",
    images: [
      {
        url: "https://www.memoriesworld.site/about-og.jpg", // Add this image to /public
        width: 1200,
        height: 630,
        alt: "About Memories World",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white pt-16">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-slate-100 via-white to-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Studio 📸
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are passionate storytellers with a lens — capturing moments that matter, freezing emotions, and crafting visual art through photography.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src="https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/about/rajjan.jpg"
              alt="Studio Work"
              fill
              className="rounded-xl shadow-md object-cover object-top"
            />
          </div>


        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-start lg:text-start">
          <h2 className="text-3xl text-center md:text-start lg:text-start font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Memories world is a creative space where photography meets passion. From weddings to corporate events, portraits to product shoots — we blend creativity, lighting, and moments to tell your story through stunning visuals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is made up of experienced photographers, editors, and creatives who love what they do. Every picture we take is backed with emotion and expertise.
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-slate-100 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">10+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">500+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">1000+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">4.9★</h3>
            <p className="text-gray-600 mt-2">Client Rating</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Capture Your Special Moments?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Lets make your moments timeless. Book your session with us today!
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition"
        >
          Book Now
        </Link>
      </section>
    </main>
  )
}
