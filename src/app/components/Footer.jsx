import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Studio Name & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Memories World  </h2>
          <p className="text-gray-400">
            Capturing timeless moments with precision and creativity. <br />
            <span className="block mt-2">Your memories, our lens.</span>
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Wedding Photography</li>
            <li>Pre-Wedding Photography</li>
            <li>Maternity Photography</li>
            <li>Candid Photography</li>
            <li>Films & Slow Motion</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about-us" className="hover:underline hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300 text-lg">
            {/* <a href="#" className="hover:text-white"><FaFacebookF /></a> */}
            <a href="https://www.instagram.com/memoriesworld852/profilecard/?igsh=cnFwcjJqOHg0ZG9j" className="hover:text-white"><FaInstagram /></a>
            <a href="https://www.youtube.com/@memoriesworldphotography1056?si=91qVNsh4gL8lnuqH" className="hover:text-white"><FaYoutube /></a>
            {/* <a href="#" className="hover:text-white"><FaTwitter /></a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Memories World Photography. All Rights Reserved. Developed by{" "}
        <a
          href="https://www.techyardweb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          TechYard Web Solutions
        </a>
      </div>

    </footer>
  );
}
