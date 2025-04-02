import { Camera, Image, Users, Video, Calendar, Star, Heart, Smile, Film, PartyPopper, MonitorPlay } from "lucide-react"
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
    title: "Pre-Wedding Shoot",
    description: "Beautifully crafted shoots that narrate your love story.",
    icon: <Heart className="w-8 h-8 text-white" />,
  },
  {
    title: "Candid Shoot",
    description: "Capturing spontaneous moments filled with genuine emotion.",
    icon: <Smile className="w-8 h-8 text-white" />,
  },
  {
    title: "Cinematic Shoot",
    description: "Creating stunning visual stories that evoke emotion.",
    icon: <Film className="w-8 h-8 text-white" />,
  },
  {
    title: "Event Shoot",
    description: "Capturing the joy and connection at your special gatherings.",
    icon: <PartyPopper className="w-8 h-8 text-white" />,
  },
  {
    title: "Drone/LED Screen",
    description: "High-quality visuals for your events and presentations.",
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
  },
]

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-50  py-16">
      <section className="text-center mb-12 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-gray-800 mb-4">
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
