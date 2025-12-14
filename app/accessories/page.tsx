"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";
import SareeSection from "../components/ProductSection";
import NewArrivals from "../components/NewArrivals";
export default function AccessoriesPage() {
  const heroImages = [
    "/Assets/accessories/accessoriesHero1.jpg",
    "/Assets/accessories/accessoriesHero2.jpg",
    "/Assets/accessories/accessoriesHero3.jpg",
  ];
  const necklaces = [
  {
    id: 1,
    title: "PEARL STATEMENT NECKLACE",
    price: "₹6,499",
    image: "/Assets/accessories/necklaces/necklace1.jpg",
  },
  {
    id: 2,
    title: "GOLD LAYERED CHAIN",
    price: "₹3,299",
    image: "/Assets/accessories/necklaces/necklace3.jpg",
  },
  {
    id: 3,
    title: "CRYSTAL PENDANT NECKACE",
    price: "₹4,150",
    image: "/Assets/accessories/necklaces/necklace2.jpg",
  },
  {
    id: 4,
    title: "EMERALD CHOKER NECKLACE",
    price: "₹5,999",
    image: "/Assets/accessories/necklaces/necklace4.jpg",
  },
];

const earrings = [
  {
    id: 1,
    title: "GOLD HOOP EARRINGS",
    price: "₹1,999",
    image: "/Assets/accessories/earrings/earring3.jpg",
  },
  {
    id: 2,
    title: "PEARL DROP EARRINGS",
    price: "₹2,450",
    image: "/Assets/accessories/earrings/earring2.jpg",
  },
  {
    id: 3,
    title: "CRYSTAL STUD EARRINGS",
    price: "₹1,299",
    image: "/Assets/accessories/earrings/earring1.jpg",
  },
  {
    id: 4,
    title: "EMBELLISHED CHANDELIER EARRINGS",
    price: "₹3,100",
    image: "/Assets/accessories/earrings/earring4.jpg",
  },
];

const bangles = [
  {
    id: 1,
    title: "GOLD PLATED BANGLES",
    price: "₹5,899",
    image: "/Assets/accessories/bangles/bangle4.jpg",
  },
  {
    id: 2,
    title: "KUNDAN EMBELLISHED BANGLES",
    price: "₹7,299",
    image: "/Assets/accessories/bangles/bangle3.jpg",
  },
  {
    id: 3,
    title: "OXIDIZED SILVER BANGLES",
    price: "₹3,750",
    image: "/Assets/accessories/bangles/bangle2.jpg",
  },
  {
    id: 4,
    title: "MEENAKARI DESIGN BANGLES",
    price: "₹4,499",
    image: "/Assets/accessories/bangles/bangle4.jpg",
  },
];

const bags = [
  {
    id: 1,
    title: "DESIGNER CLUTCH BAG",
    price: "₹4,499",
    image: "/Assets/accessories/bags/bag2.jpg",
  },
  {
    id: 2,
    title: "EMBROIDERED POTLI BAG",
    price: "₹3,200",
    image: "/Assets/accessories/bags/bag4.jpg",
  },
  {
    id: 3,
    title: "MINIMAL SLING BAG",
    price: "₹2,750",
    image: "/Assets/accessories/bags/bag1.jpg",
  },
  {
    id: 4,
    title: "LEATHER CROSSBODY BAG",
    price: "₹3,899",
    image: "/Assets/accessories/bags/bag3.jpg",
  },
];

  const accessoriesNewArrivals = [
    {
      id: 1,
      title: "PEARL-ENCRUSTED HAIR CLIP",
      price: "₹1,299",
      image: "/Assets/accessories/Arrival1.jpg",
    },
    {
      id: 2,
      title: "CRYSTAL CHOKER NECKLACE",
      price: "₹3,899",
      image: "/Assets/accessories/Arrival2.jpg",
    },
    {
      id: 3,
      title: "MINI BEADED HANDBAG",
      price: "₹2,499",
      image: "/Assets/accessories/Arrival3.jpg",
    },
  ];

  const categories = [
    {
      name: "NECKLACES",
      image: "/Assets/traditional/bridal_necklace_set.jpg",
      href: "/category/necklaces",
    },
    {
      name: "EARRINGS",
      image: "/Assets/traditional/jhumka_with_choker.jpg",
      href: "/category/earrings",
    },
    {
      name: "BANGLES",
      image: "/Assets/western/accessories_cat.jpg",
      href: "/category/bangles",
    },
    {
      name: "BAGS",
      image: "/Assets/western/western_cat.jpg",
      href: "/category/bags",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero images={heroImages} />
      <ShopByCategory categories={categories} />
      <NewArrivals products={accessoriesNewArrivals} />
      <SareeSection
  title="Necklaces"
  subtitle="Finely crafted pieces for every occasion."
  products={necklaces}
  columns={4}
/>
<SareeSection
  title="Earrings"
  subtitle="Elegant designs that complete your look."
  products={earrings}
  columns={4}
/>
<SareeSection
  title="Bangles"
  subtitle="A touch of tradition with modern style."
  products={bangles}
  columns={4}
/>
<SareeSection
  title="Bags"
  subtitle="Carry elegance with you."
  products={bags}
  columns={4}
/>

      <Footer />
    </main>
  );
}
