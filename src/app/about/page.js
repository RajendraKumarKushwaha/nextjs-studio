import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About Us - StudioName",
  description: "Learn more about our photography studio, team and journey.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white pt-20 pb-10">
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
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/301977/pexels-photo-301977.jpeg"
            alt="Studio Work"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            StudioName is a creative space where photography meets passion. From weddings to corporate events, portraits to product shoots — we blend creativity, lighting, and moments to tell your story through stunning visuals.
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
          Let's make your moments timeless. Book your session with us today!
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
