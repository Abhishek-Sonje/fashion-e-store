"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Category {
  name: string;
  image: string;
  href: string;
}

const DEFAULT_CATEGORIES: Category[] = [
  { name: "SAREE", image: "/Assets/traditional/SAREE.jpg", href: "/traditional/saree" },
  { name: "LEHENGA", image: "/Assets/traditional/LEHENGA.jpg", href: "/traditional/lehenga" },
  { name: "SUITS", image: "/Assets/traditional/SUITS.jpg", href: "/traditional/suits" },
  { name: "POSHAKH", image: "/Assets/traditional/POSHAKH.jpg", href: "/traditional/poshakh" },
];

interface ShopByCategoryProps {
  categories?: Category[];
}

export default function ShopByCategory({ categories = DEFAULT_CATEGORIES }: ShopByCategoryProps) {
  return (
    <section id="shop-by-category" className="w-full py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-medium text-center mb-6 mt-6  uppercase tracking-wide">
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
