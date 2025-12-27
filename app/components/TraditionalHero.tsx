"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  images?: string[];
}

const DEFAULT_IMAGES = [
  "/Assets/traditional/traditionalHeader1.jpg",
  "/Assets/traditional/traditionalHeader2.jpg",
  "/Assets/traditional/traditionalHeader3.jpg",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function TraditionalHero({
  images = DEFAULT_IMAGES,
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  const handleScroll = () => {
    const nextSection = document.getElementById("shop-by-category");
    const header = document.querySelector("header");
    const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
    if (nextSection) {
      const top = nextSection.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt="Traditional Collection Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />{" "}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:m-16 text-white z-10">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-left mb-6 drop-shadow-lg display-flex flex-col space-y-4"
        >
          <div>Crafted For </div>
          <div>Celebration</div>
        </motion.h1>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={handleScroll}
          className=" text-white font-bold text-2xl sm:text-3xl md:text-4xl font-serif text-center uppercase tracking-wider transition-colors duration-300 text-shadow-md/20 text-shadow-slate-600 cursor-pointer"
        >
          Explore Now
        </motion.h1>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleScroll}
          className="group bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 transition-transform duration-300 hover:scale-110 focus:outline-none hover:bg-white/20"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 text-white animate-bounce group-hover:animate-none" />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              idx === currentImageIndex
                ? "bg-white w-6 md:w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
