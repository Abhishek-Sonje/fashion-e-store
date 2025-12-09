"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";

export default function RentalsPage() {
  const heroImages = [
    "/Assets/traditional/rental_cat.jpg",
    "/Assets/traditional/rental1.jpg",
    "/Assets/traditional/rental2.jpg"
  ];

  const categories = [
    { name: "WEDDING", image: "/Assets/traditional/rental1.jpg", href: "/category/wedding-rental" },
    { name: "PARTY", image: "/Assets/traditional/rental2.jpg", href: "/category/party-rental" },
    { name: "JEWELLERY", image: "/Assets/traditional/rental4.jpg", href: "/category/jewellery-rental" },
    { name: "GROOM", image: "/Assets/traditional/rental_cat.jpg", href: "/category/groom-rental" },
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
