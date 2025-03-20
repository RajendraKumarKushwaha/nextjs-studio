import AnimatedTestimonials from "../clientComponent/AnimateTestimonials"

const testimonials = [
  {
    name: "Riya Sharma",
    feedback: "They captured our wedding beautifully. Every shot felt magical! Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Aman Verma",
    feedback: "Amazing pre-wedding shoot! They made us feel comfortable and the photos were outstanding.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Neha Singh",
    feedback: "Their maternity shoot was so warm and personal. Memories to cherish forever!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedTestimonials key={index}>
              <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-2">"{testimonial.feedback}"</p>
                <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
              </div>
            </AnimatedTestimonials>
          ))}
        </div>
      </div>
    </section>
  )
}
