"use client"

import { motion } from "framer-motion"

function getInitial(direction) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 40 }
    case "down":
      return { opacity: 0, y: -40 }
    case "left":
      return { opacity: 0, x: 40 }
    case "right":
      return { opacity: 0, x: -40 }
    default:
      return { opacity: 0, y: 40 }
  }
}

export default function AnimateOnScroll({ children, direction = "up", delay = 0 }) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
