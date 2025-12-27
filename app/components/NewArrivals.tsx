"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/app/data";
import { usePathname } from "next/navigation";

type ProductGridProps = {
  title?: string;
  products: Product[];
  seeAllHref?: string;
};

export default function ProductGrid({
  title = "New Arrivals",
  products,
  seeAllHref = "/traditional",
}: ProductGridProps) {
  const pathname = usePathname();
  const computedSeeAll =
    seeAllHref ||
    (pathname.startsWith("/rentals") ? "/rentals/new-arrival" : "/traditional");
  return (
    <section className="py-10 sm:py-12 md:py-16 max-w-6xl mx-auto px-4 scroll-mt-24 md:scroll-mt-28">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group relative block"
          >
            <div className="relative aspect-3/4 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 mb-4 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:-translate-y-1">
              <Image
                src={product.image}
                alt={product.title}
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
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 md:mt-12 text-center">
        <Link
          href={computedSeeAll}
          className="inline-block px-6 py-2 border border-gray-900 rounded-full font-serif text-md font-bold tracking-widest hover:bg-black hover:text-white transition-colors uppercase shadow-lg"
        >
          See All
        </Link>
      </div>
    </section>
  );
}
