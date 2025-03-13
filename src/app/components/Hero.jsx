"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-br from-white via-slate-100 to-slate-200 flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side */}
        <motion.div 
          className="max-w-xl text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Capture Moments, <br /> Create Memories ✨
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Welcome to StudioName — your trusted photography studio for weddings, events, portfolios and more.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="/portfolio"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition inline-flex items-center gap-2"
            >
              View Portfolio <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="text-black border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition"
            >
              Book a Session
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <img
            src="https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg"
            alt="Photography Hero"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
