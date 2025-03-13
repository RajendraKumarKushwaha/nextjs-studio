import { Camera, Image, Users, Video, Calendar, Star } from "lucide-react"
import ServiceCard from "../clientComponent/ServiceCard"


export const metadata = {
  title: "Services - StudioName",
  description: "Explore the photography and videography services we offer at StudioName.",
}

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing every precious moment of your special day with elegance and artistry.",
    icon: <Camera className="w-8 h-8 text-white" />,
  },
  {
    title: "Event Coverage",
    description: "From birthdays to corporate events, we cover it all with perfection.",
    icon: <Calendar className="w-8 h-8 text-white" />,
  },
  {
    title: "Portfolio Shoot",
    description: "Professional portfolio sessions tailored to your unique style and personality.",
    icon: <Image className="w-8 h-8 text-white" />,
  },
  {
    title: "Pre-Wedding Shoot",
    description: "Beautifully crafted shoots that narrate your love story.",
    icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    title: "Video Production",
    description: "Cinematic videography for weddings, events, and creative storytelling.",
    icon: <Video className="w-8 h-8 text-white" />,
  },
  {
    title: "Photo Editing",
    description: "High-quality retouching and post-processing to make your photos shine.",
    icon: <Star className="w-8 h-8 text-white" />,
  },
]

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Services 📷
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We offer a wide range of photography and videography services to capture your best moments.
        </p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>
    </main>
  )
}
