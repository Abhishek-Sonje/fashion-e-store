"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SareeFilter from "@/app/components/SareeFilter";
import SareeProductDisplay, {
  SareeProduct,
} from "@/app/components/SareeProductDisplay";

// Dummy Data
const sareesData: SareeProduct[] = [
  {
    id: 1,
    title: "Kanjivaram Silk Saree",
    price: "₹12,499",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 2,
    title: "Banarasi Georgette Saree",
    price: "₹8,995",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
  {
    id: 3,
    title: "Handwoven Cotton Saree",
    price: "₹3,450",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 4,
    title: "Designer Net Saree",
    price: "₹15,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 5,
    title: "Chanderi Silk Saree",
    price: "₹6,750",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
  },
  {
    id: 6,
    title: "Mysore Silk Saree",
    price: "₹9,200",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
  },
  {
    id: 7,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 8,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 9,
    title: "Kanjivaram Silk Saree",
    price: "₹12,499",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 10,
    title: "Banarasi Georgette Saree",
    price: "₹8,995",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
  {
    id: 11,
    title: "Handwoven Cotton Saree",
    price: "₹3,450",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 12,
    title: "Designer Net Saree",
    price: "₹15,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 13,
    title: "Chanderi Silk Saree",
    price: "₹6,750",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
  },
  {
    id: 14,
    title: "Mysore Silk Saree",
    price: "₹9,200",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
  },
  {
    id: 15,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 16,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 17,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 18,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 19,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 20,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 21,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 22,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 23,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 24,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 25,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 26,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 27,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 28,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 29,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 30,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 31,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 32,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 33,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 34,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
];


const banners = [
  {
    id: 1,
    image: "/Assets/traditional/traditionalHeader1.jpg",
  },
  {
    id: 2,
    image: "/Assets/traditional/traditionalHeader2.jpg",
  },
  {
    id: 3,
    image: "/Assets/traditional/traditionalHeader3.jpg",
  },
];

export default function SareePage() {
  const [viewMode, setViewMode] = useState<"4-col" | "2-col">("4-col");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

     

      <SareeFilter
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalResults={sareesData.length}
      />

      <SareeProductDisplay
        products={sareesData}
        viewMode={viewMode}
        banners={banners}
      />

      <Footer />
    </main>
  );
}
