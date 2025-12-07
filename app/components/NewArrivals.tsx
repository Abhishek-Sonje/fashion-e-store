"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "SILK SAREE",
    price: "₹75,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 2,
    title: "HANDCRAFTED KURTA SET",
    price: "₹32,290",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 3,
    title: "CASUAL RED FLORAL DRESS",
    price: "₹17,209",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">
          New Arrivals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-gray-100 bg-gray-50 mb-4 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:-translate-y-1">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm font-medium tracking-wide uppercase text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="#"
          className="inline-block px-12 py-3 border border-gray-900 rounded-full text-sm font-medium tracking-widest hover:bg-black hover:text-white transition-colors uppercase underline underline-offset-4"
        >
          See All
        </Link>
      </div>
    </section>
  );
}
