"use client"

import { motion } from "framer-motion"

export default function ServiceCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 space-y-4 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}
