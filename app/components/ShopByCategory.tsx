"use client";

import Image from "next/image";
import Link from "next/link";
const categories = [
  { name: "SAREE", image: "/Assets/traditional/SAREE.jpg", href: "#saree" },
  { name: "LEHENGA", image: "/Assets/traditional/LEHENGA.jpg", href: "#" },
  { name: "SUITS", image: "/Assets/traditional/SUITS.jpg", href: "#" },
  { name: "POSHAKH", image: "/Assets/traditional/POSHAKH.jpg", href: "#" },
];

export default function ShopByCategory() {
  return (
    <section id="shop-by-category" className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-medium text-center mb-12 uppercase tracking-wide">
          Shop By Category
        </h2>

        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] gap-1 md:gap-0">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="relative flex-1 group overflow-hidden cursor-pointer bg-gray-200 border-r border-white last:border-r-0"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-8 md:pb-12">
                <h3 className="text-white text-lg md:text-xl font-medium tracking-widest uppercase drop-shadow-md text-center px-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
