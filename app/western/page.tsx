"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";
import NewArrivals from "../components/NewArrivals";
import ProductSection from "../components/ProductSection";

export default function WesternPage() {
  const heroImages = [
    "/Assets/western/westernHero1.jpg",
    "/Assets/western/westernHero2.jpg",
    "/Assets/western/westernHero3.jpg",
  ];

  const categories = [
    {
      name: "DRESSES",
      image: "/Assets/traditional/casual_red_floral_dress.jpg",
      href: "/category/dresses",
    },
    {
      name: "TOPS",
      image: "/Assets/western/western_cat.jpg",
      href: "/category/tops",
    },
    {
      name: "BOTTOMS",
      image: "/Assets/traditional/handcrafted_kurta_set.jpg",
      href: "/category/bottoms",
    }, 
    {
      name: "COORDS",
      image: "/Assets/western/accessories_cat.jpg",
      href: "/category/coords",
    },
  ];
  const tops = [
    {
      id: 1,
      title: "PUFF-SLEEVE COTTON TOP",
      price: "₹3,299",
      image: "/Assets/western/top1.jpg",
    },
    {
      id: 2,
      title: "RIBBED HIGH-NECK TOP",
      price: "₹2,499",
      image: "/Assets/western/top2.jpg",
    },
    {
      id: 3,
      title: "SATIN DRAPED TOP",
      price: "₹4,199",
      image: "/Assets/western/top3.jpg",
    },
    {
      id: 4,
      title: "RUFFLED CHIFFON BLOUSE",
      price: "₹3,899",
      image: "/Assets/western/top4.jpg",
    },
  ];
  const bottoms = [
    {
      id: 1,
      title: "HIGH-WAIST WIDE-LEG PANTS",
      price: "₹4,899",
      image: "/Assets/western/bottom1.jpg",
    },
    {
      id: 2,
      title: "PLEATED MINI SKIRT",
      price: "₹2,999",
      image: "/Assets/western/bottom2.jpg",
    },
    {
      id: 3,
      title: "STRAIGHT-FIT JEANS",
      price: "₹3,750",
      image: "/Assets/western/top3.jpg",
    },
    {
      id: 4,
      title: "SATIN MAXI SKIRT",
      price: "₹5,499",
      image: "/Assets/western/top4.jpg",
    },
  ];
  const coords = [
    {
      id: 1,
      title: "SATIN COORD SET",
      price: "₹8,900",
      image: "/Assets/western/coords.jpg",
    },
    {
      id: 2,
      title: "CROP BLAZER COORD",
      price: "₹11,299",
      image: "/Assets/western/coords.jpg",
    },
    {
      id: 3,
      title: "KNIT LOUNGE COORD",
      price: "₹6,750",
      image: "/Assets/western/coords.jpg",
    },
    {
      id: 4,
      title: "FLORAL PRINT COORD",
      price: "₹7,399",
      image: "/Assets/western/coords.jpg",
    },
  ];

  const westernDresses = [
    {
      id: 1,
      title: "SATIN SLIP DRESS",
      price: "₹13,500",
      image: "/Assets/western/dress1.jpg",
    },
    {
      id: 2,
      title: "RUCHED BODYCON DRESS",
      price: "₹9,999",
      image: "/Assets/western/dress2.jpg",
    },
    {
      id: 3,
      title: "FLORAL SUMMER MIDI DRESS",
      price: "₹7,450",
      image: "/Assets/western/dress3.jpg",
    },
    {
      id: 4,
      title: "PUFF-SLEEVE A-LINE DRESS",
      price: "₹8,299",
      image: "/Assets/western/dress4.jpg",
    },
  ];

  const newArrivals = [
    {
      id: 1,
      title: "RUFFLED GEORGETTE DRESS",
      price: "₹11,499",
      image: "/Assets/western/western_cat.jpg",
    },
    {
      id: 2,
      title: "DESIGNER SATIN SLIP DRESS",
      price: "₹13,250",
      image: "/Assets/western/new2.jpg",
    },
    {
      id: 3,
      title: "PUFF-SLEEVE COTTON TOP",
      price: "₹4,199",
      image: "/Assets/western/new3.jpg",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero images={heroImages} />
      <ShopByCategory categories={categories} />
      <NewArrivals title="New Arrivals" products={newArrivals} />
      <ProductSection
        title="Dresses"
        subtitle="Elegance meets modern style."
        products={westernDresses}
        columns={4}
      />
      <ProductSection
        title="Tops"
        subtitle="Chic styles for every mood."
        products={tops}
        columns={4}
      />
      <ProductSection
        title="Bottoms"
        subtitle="Comfort meets contemporary fashion."
        products={bottoms}
        columns={4}
      />
      
      
      <ProductSection
        title="Coords"
        subtitle="Perfectly paired outfits for effortless style."
        products={coords}
        columns={4}
      />

      <Footer />
    </main>
  );
}
