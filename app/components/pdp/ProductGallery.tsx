"use client";

import { useState } from "react";
import Image from "next/image";


// Simple utility if cn doesn't exist, I'll just use template strings or implement it inline
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 h-full sticky top-24 max-w-xl mx-auto">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={classNames(
              "relative w-20 h-24 md:w-full md:aspect-[3/4] flex-shrink-0 border transition-all duration-200",
              selectedImage === img ? "border-black ring-1 ring-black" : "border-transparent hover:border-gray-300"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative bg-gray-50 group">
        <Image
          src={selectedImage}
          alt="Product Main View"
          // width={200}
          // height={200}
          fill
          className="object-cover"
          priority
        />
        {/* Helper text or zoom hint could go here */}
      </div>
    </div>
  );
}
