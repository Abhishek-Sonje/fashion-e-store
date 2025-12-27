"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { FEATURED_POSHAKH, Product } from "@/app/data";

interface PoshakhSectionProps {
  products?: Product[];
}

export default function PoshakhSection({
  products = FEATURED_POSHAKH,
}: PoshakhSectionProps) {
  return (
    <section className="py-10 sm:py-12 md:py-16 max-w-6xl mx-auto px-4 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-px bg-gray-300 mx-auto my-8 md:my-12"></div>
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-6 md:mb-8">
          Poshakh
        </h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">
          Traditional poshakh for timeless beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

      <div className="mt-10 md:mt-12 text-center">
        <Link
          href="/traditional/poshakh"
          className="inline-block px-6 py-2 border border-gray-900 rounded-full font-serif text-md font-bold tracking-widest hover:bg-black hover:text-white transition-colors uppercase shadow-lg"
        >
          See All
        </Link>
      </div>
    </section>
  );
}
