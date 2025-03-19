'use client';

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GalleryGrid({ data }) {
  const [expanded, setExpanded] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleExpand = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const openModal = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCategory(null);
    setCurrentIndex(0);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === currentCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="space-y-16">
        {data.map((category, index) => {
          const isExpanded = expanded[category.title];
          const visibleImages = isExpanded
            ? category.images
            : category.images.slice(0, 5);

          return (
            <div key={index}>
              <h3 className="text-2xl text-center font-semibold mb-6 text-gray-800">
                {category.title}
              </h3>
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {visibleImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${category.title} ${idx + 1}`}
                    className="w-full rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out cursor-pointer"
                    onClick={() => openModal(category, idx)}
                  />
                ))}
              </div>
              {category.images.length > 5 && (
                <div className="mt-4 text-center">
                  <Button
                    onClick={() => toggleExpand(category.title)}
                    className="cursor-pointer"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && currentCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeModal}
          >
            <X size={30} />
          </button>
          <button
            className="absolute left-4 text-white"
            onClick={showPrev}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={currentCategory.images[currentIndex]}
            alt="Full"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-lg"
          />
          <button
            className="absolute right-4 text-white"
            onClick={showNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
