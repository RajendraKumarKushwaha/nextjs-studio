export default function Contact() {
  return (
    <section className="w-full  py-16 bg-gray-100 ">
      <div className="container px-4  mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map + Address */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.5755783175227!2d81.31170557412882!3d24.534764358215185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845ba9a2439645%3A0x2e9fd9a523133770!2sMemories%20World%20Studio!5e0!3m2!1sen!2sin!4v1742361817158!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address & Contact */}
            <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
              <p className="text-gray-600">Sirmour Chauraha New Market, Shop No. 74 Rewa (M.P.) 486001</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4">Contact Info</h3>
              <p className="text-gray-600">📞 +91 91315 64568</p>
              <p className="text-gray-600">✉️ memoriesworld0296@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
