import Image from "next/image"

export const metadata = {
  title: "Portfolio - StudioName",
  description: "Check out our stunning photography work across events, weddings, and more.",
}

const portfolioItems = [
  {
    title: "Wedding Moments",
    image:
      "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg",
  },
  {
    title: "Couple Shoot",
    image:
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
  },
  {
    title: "Product Photography",
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
  {
    title: "Event Highlights",
    image:
      "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
  },
  {
    title: "Portrait Shoot",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    title: "Fashion Shoot",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
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
              className="object-cover w-full h-[300px] transform group-hover:scale-105 transition duration-300"
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
