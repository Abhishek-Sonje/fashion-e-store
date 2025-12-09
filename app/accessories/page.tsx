"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";

export default function AccessoriesPage() {
  const heroImages = [
    "/Assets/western/accessories_cat.jpg",
    "/Assets/traditional/bridal_necklace_set.jpg",
    "/Assets/traditional/jhumka_with_choker.jpg"
  ];

  const categories = [
    { name: "NECKLACES", image: "/Assets/traditional/bridal_necklace_set.jpg", href: "/category/necklaces" },
    { name: "EARRINGS", image: "/Assets/traditional/jhumka_with_choker.jpg", href: "/category/earrings" },
    { name: "BANGLES", image: "/Assets/western/accessories_cat.jpg", href: "/category/bangles" },
    { name: "BAGS", image: "/Assets/western/western_cat.jpg", href: "/category/bags" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero images={heroImages} />
      <ShopByCategory categories={categories} />
      <Footer />
    </main>
  );
}
