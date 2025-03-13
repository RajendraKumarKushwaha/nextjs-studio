export default function Contact() {
    return (
      <section className="w-full py-16 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.020837473503!2d81.30084927591896!3d22.611029732836716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3986ae4f74c3b1b3%3A0xc145af80847e7744!2sRewa%2C%20Madhya%20Pradesh%20486001!5e0!3m2!1sen!2sin!4v1710320813453!5m2!1sen!2sin"
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
                <p className="text-gray-600">123 Main Street, Near Clock Tower, Rewa, Madhya Pradesh 486001</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Contact Info</h3>
                <p className="text-gray-600">📞 +91 98765 43210</p>
                <p className="text-gray-600">✉️ support@yourstudio.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  