"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";

export default function ReadyToShipPage() {
  const heroImages = [
    "/Assets/traditional/ready_to_ship_cat.jpg",
    "/Assets/traditional/newArrival1.jpg",
    "/Assets/traditional/newArrival2.jpg"
  ];

  const categories = [
    { name: "IMMEDIATE", image: "/Assets/traditional/newArrival1.jpg", href: "/category/immediate" },
    { name: "EXPRESS", image: "/Assets/traditional/newArrival2.jpg", href: "/category/express" },
    { name: "NEXT DAY", image: "/Assets/traditional/newArrival3.jpg", href: "/category/next-day" },
    { name: "GIFTING", image: "/Assets/traditional/ready_to_ship_cat.jpg", href: "/category/gifting" },
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
