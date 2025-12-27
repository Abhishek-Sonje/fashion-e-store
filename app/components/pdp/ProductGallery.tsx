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
    <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:gap-6 sticky top-24">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 md:max-h-[720px] flex-shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={classNames(
              "relative w-20 h-24 md:w-full md:aspect-[3/4] flex-shrink-0 border transition-all duration-200",
              selectedImage === img
                ? "border-black ring-1 ring-black"
                : "border-transparent hover:border-gray-300"
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

      {/* Main Image (fixed container height to avoid stretching) */}
      <div className="flex-1 relative bg-gray-50 group w-full h-[520px] md:h-[640px] lg:h-[720px]">
        <Image
          src={selectedImage}
          alt="Product Main View"
          fill
          className="object-contain p-2"
          priority
        />
      </div>
    </div>
  );
}
