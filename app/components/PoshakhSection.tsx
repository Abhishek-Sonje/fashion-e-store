"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const sarees = [
  {
    id: 1,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 2,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 3,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
  },
  {
    id: 4,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
  },
];

export default function PoshakhSection() {
  return (
    <section className=" max-w-6xl mx-auto px-4">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-px bg-gray-300 mx-auto my-10"></div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4">
          Poshakh
        </h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">
          Every saree tells a story of elegance.
        </p>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sarees.map((item) => (
          <div key={item.id} className="group relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-gray-100 bg-gray-50 mb-4 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:-translate-y-1">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm font-medium tracking-wide uppercase text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.price}</p>
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
