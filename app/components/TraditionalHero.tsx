"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function TraditionalHero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("shop-by-category");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      <div className="absolute inset-0">
        
        <div className="relative w-full h-full bg-gray-200">
           <Image
            src="/Assets/traditional/traditional_header.jpg"
            alt="Traditional Collection Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleScroll}
          className="group bg-white rounded-full p-3 shadow-lg border border-gray-900 transition-transform duration-300 hover:scale-110 focus:outline-none"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 text-gray-900 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
}
