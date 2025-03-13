// app/gallery/GallerySection.jsx

import { GalleryGrid } from "../clientComponent/GalleryGrid";

const galleryData = [
  {
    title: "Wedding Photography",
    images: [
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      
      // more...
    ],
  },
  {
    title: "Pre-Wedding Photography",
    images: [
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg",
      // ...
    ],
  },
  {
    title: "Maternity Photography",
    images: [
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      // ...
    ],
  },
  {
    title: "Candid Photography",
    images: [
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      "https://images.pexels.com/photos/3775138/pexels-photo-3775138.jpeg",
      // ...
    ],
  },
];

export default function Gallery() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Photography Gallery
        </h2>
        <GalleryGrid data={galleryData} />
      </div>
    </section>
  );
}
