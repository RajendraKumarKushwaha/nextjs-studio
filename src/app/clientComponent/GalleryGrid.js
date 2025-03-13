"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function GalleryGrid({ data }) {
  const [expanded, setExpanded] = useState({});

  const toggle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {data.map((category, index) => (
        <motion.div
          key={index}
          className="mb-16 p-6 bg-white rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(expanded[index]
              ? category.images
              : category.images.slice(0, 5)
            ).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow transition-all"
              >
                <img
                  src={img}
                  alt={`${category.title} ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {category.images.length > 5 && (
            <div className="mt-6 text-center">
              <Button
                onClick={() => toggle(index)}
                className="bg-gray-900 hover:bg-gray-700 text-white rounded-full px-6 py-2"
              >
                {expanded[index] ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </motion.div>
      ))}
    </>
  );
}
