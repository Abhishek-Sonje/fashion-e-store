"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TRADITIONAL_CATEGORIES, Category } from "@/app/data";

interface ShopByCategoryProps {
  categories?: Category[];
}

export default function ShopByCategory({
  categories = TRADITIONAL_CATEGORIES,
}: ShopByCategoryProps) {
  return (
    <section
      id="shop-by-category"
      className="w-full py-10 sm:py-12 md:py-16 bg-white scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-8 md:mb-10 uppercase tracking-wide">
          Shop By Category
        </h2>

        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] gap-2">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              layout
              initial={{ flex: 1 }}
              whileHover={{ flex: 3 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative relative-flex group overflow-hidden cursor-pointer rounded-lg"
            >
              <Link href={category.href} className="absolute inset-0 block">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-8 md:pb-12">
                  <motion.h3
                    layout="position"
                    className="text-white text-lg md:text-2xl font-medium tracking-widest uppercase drop-shadow-md text-center px-2"
                  >
                    {category.name}
                  </motion.h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
