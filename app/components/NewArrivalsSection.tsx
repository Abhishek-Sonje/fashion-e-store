"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function NewArrivalsSection() {
  const products = [
    {
      name: "Silk Saree",
      price: "₹75,000",
      image: "/Assets/traditional/newArrival1.jpg",
    },
    {
      name: "Handcrafted Kurta Set",
      price: "₹45,000",
      image: "/Assets/traditional/newArrival2.jpg",
    },
    {
      name: "Embroidered Lehenga",
      price: "₹1,20,000",
      image: "/Assets/traditional/newArrival3.jpg",
    },
  ];

  return (
    <section className="w-full py-4 bg-white">
      <div className="max-w-7xl mx-auto px-42 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center mb-6 mt-6 uppercase tracking-wide">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-2 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-md mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 font-semibold">{product.price}</p>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-5 h-5 text-gray-900 hover:fill-current hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="inline-block px-6 py-2 border border-gray-900 rounded-full font-serif text-md font-bold tracking-widest hover:bg-black hover:text-white transition-colors uppercase shadow-lg">
            SEE ALL
          </button>
        </div>
      </div>
    </section>
  );
}
