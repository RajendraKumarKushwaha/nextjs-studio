import Image from "next/image"

export const metadata = {
  title: "Portfolio - StudioName",
  description: "Check out our stunning photography work across events, weddings, and more.",
}

const portfolioItems = [
  {
    title: "Wedding Moments",
    image:
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/wedding/10.jpg",
  },
  {
    title: "Pre-Wedding Moments",
    image:
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
  },
  {
    title: "Haldi Moments",
    image:
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/haldi/2.jpg",
  },
  {
    title: "Fashion Moments",
    image:
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/fashion/8.jpg",
  },
  {
    title: "Kids Moments",
    image:
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/kids/4.jpg",
  },
  {
    title: "Maternity Photography",
    image:
      "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/maternity/17.jpg",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-10">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Portfolio 🎞️
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A collection of our finest work — crafted with creativity, light, and love.
        </p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="object-fill w-full h-[300px] transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
