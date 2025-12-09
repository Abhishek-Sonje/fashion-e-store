"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";

export default function WesternPage() {
  const heroImages = [
    "/Assets/western/western_cat.jpg",
    "/Assets/traditional/casual_red_floral_dress.jpg",
    "/Assets/western/accessories_cat.jpg" 
  ];

  const categories = [
    { name: "DRESSES", image: "/Assets/traditional/casual_red_floral_dress.jpg", href: "/category/dresses" },
    { name: "TOPS", image: "/Assets/western/western_cat.jpg", href: "/category/tops" },
    { name: "BOTTOMS", image: "/Assets/traditional/handcrafted_kurta_set.jpg", href: "/category/bottoms" }, // Using placeholder
    { name: "COORDS", image: "/Assets/western/accessories_cat.jpg", href: "/category/coords" },
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
