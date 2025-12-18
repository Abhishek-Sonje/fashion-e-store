"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { FEATURED_LEHENGAS, Product } from "@/app/data";

interface LehengaSectionProps {
  products?: Product[];
}

export default function LehengaSection({
  products = FEATURED_LEHENGAS,
}: LehengaSectionProps) {
  return (
    <section className="py-4 max-w-6xl mx-auto px-4">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-px bg-gray-300 mx-auto my-10"></div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4">
          Lehenga
        </h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">
          Every lehenga tells a story of elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="group relative block"
          >
              <div className="relative aspect-3/4 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 mb-4 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:-translate-y-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  title="like"
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/traditional/lehenga"
            className="inline-block px-6 py-2 border border-gray-900 rounded-full font-serif text-md font-bold tracking-widest hover:bg-black hover:text-white transition-colors uppercase shadow-lg"
          >
            See All
          </Link>
        </div>
      </section>
    );
  }
