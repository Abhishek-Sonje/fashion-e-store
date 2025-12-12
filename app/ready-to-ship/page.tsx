"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";
import NewArrivals from "../components/NewArrivals";
import SareeSection from "../components/SareeSection";
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

 const express = [
  {
    id: 1,
    title: "EMBROIDERED PARTY SAREE",
    price: "₹3,499",
    image: "/Assets/rentals/party/party2.jpg",
  },
  {
    id: 2,
    title: "LIGHTWEIGHT GEORGETTE SAREE",
    price: "₹2,899",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 3,
    title: "TRENDY EVENING GOWN",
    price: "₹4,199",
    image: "/Assets/rentals/party/party1.jpg",
  },
  {
    id: 4,
    title: "CASUAL PRINTED KURTA",
    price: "₹1,599",
    image: "/Assets/rentals/groom/groom3.jpg",
  },
];


 const immediate = [
  {
    id: 1,
    title: "READY-MADE LEHENGA SET",
    price: "₹5,299",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 2,
    title: "DESIGNER BLOUSE & SAREE",
    price: "₹3,999",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 3,
    title: "WESTERN PARTY DRESS",
    price: "₹2,750",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
  {
    id: 4,
    title: "KIDS FESTIVE WEAR",
    price: "₹1,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
];


 const nextDay = [
  {
    id: 1,
    title: "SOFT SILK SAREE",
    price: "₹4,899",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 2,
    title: "MEN'S KURTA SET",
    price: "₹2,999",
    image: "/Assets/rentals/groom/groom1.jpg",
  },
  {
    id: 3,
    title: "INDO-WESTERN SUIT",
    price: "₹3,799",
    image: "/Assets/rentals/groom/groom2.jpg",
  },
  {
    id: 4,
    title: "CASUAL SUMMER DRESS",
    price: "₹1,850",
    image: "/Assets/rentals/groom/groom4.jpg",
  },
];


 const gifting = [
  {
    id: 1,
    title: "PREMIUM GIFT BOX SAREE",
    price: "₹2,499",
    image: "/Assets/gift/gift1.jpg",
  },
  {
    id: 2,
    title: "JEWELLERY GIFT HAMPER",
    price: "₹1,799",
    image: "/Assets/gift/gift2.jpg",
  },
  {
    id: 3,
    title: "PERFUME & ACCESSORIES SET",
    price: "₹1,299",
    image: "/Assets/gift/gift3.jpg",
  },
  {
    id: 4,
    title: "SURPRISE GIFT BOX",
    price: "₹999",
    image: "/Assets/gift/gift4.jpg",
  },
];

   const ReadyToShipArrival = [
  {
    id: 1,
    title: "EXPRESS SHIPPING SAREE",
    price: "₹3,499",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 2,
    title: "NEXT DAY SILK SAREE",
    price: "₹4,899",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
  {
    id: 3,
    title: "PREMIUM GIFTING BOX",
    price: "₹2,499",
    image: "/Assets/gift/gift2.jpg",
  },
];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero images={heroImages} />
      <ShopByCategory categories={categories} />
      <NewArrivals products={ReadyToShipArrival}/> 
      <SareeSection
  title="Express Delivery"
  subtitle="Ships within hours."
  products={express}
  columns={4}
/>
<SareeSection
  title="Immediate Delivery"
  subtitle="Dispatched instantly."
  products={immediate}
  columns={4}
/>
<SareeSection
  title="Next Day Delivery"
  subtitle="Fast and reliable shipping."
  products={nextDay}
  columns={4}
/>
<SareeSection
  title="Gifting"
  subtitle="Perfect gifts delivered quickly."
  products={gifting}
  columns={4}
/>

      <Footer />
    </main>
  );
}
