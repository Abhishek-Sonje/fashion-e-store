"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

// Simplified ProductCard for the grid
function SimilarProductCard({ product }: { product: any }) {
  return (
     <div className="group relative flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-3">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-gray-700 hover:text-red-500">
           <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-1">
         <h3 className="text-[10px] font-serif tracking-widest uppercase text-gray-900 line-clamp-1">
            <Link href={`/product/${product.id}`}>{product.title}</Link>
         </h3>
         <div className="flex justify-between items-center text-xs">
            <span className="font-medium text-gray-600">
               {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
            </span>
         </div>
      </div>
     </div>
  );
}

export default function SimilarProducts({ products }: { products: any[] }) {
  return (
    <section className="py-16 border-t border-gray-100">
       <h2 className="text-center font-serif text-xl tracking-widest uppercase mb-10 text-gray-900">
          Similar Products
       </h2>
       
       <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10">
          {products.map(product => (
             <SimilarProductCard key={product.id} product={product} />
          ))}
       </div>
    </section>
  );
}
