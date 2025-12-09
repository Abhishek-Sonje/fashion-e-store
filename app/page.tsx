"use client";

import Navbar from "./components/Navbar";
import TraditionalHero from "./components/TraditionalHero";
import ShopByCategory from "./components/ShopByCategory";
import NewArrivalsSection from "./components/NewArrivalsSection";
import TailoredSection from "./components/TailoredSection";
import RentalSection from "./components/RentalSection";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import Footer from "./components/Footer";

const HOME_HERO_IMAGES = [
  "/Assets/traditional/header2.jpg",
  "/Assets/traditional/header.jpg",
  "/Assets/traditional/wedding_lehenga.jpg"
];

const HOME_CATEGORIES = [
  {
    name: "TRADITIONAL",
    image: "/Assets/traditional/traditional_cat.jpg",
    href: "/traditional"
  },
  {
    name: "WESTERN",
    image: "/Assets/western/western_cat.jpg",
    href: "/western"
  },
  {
    name: "ACCESSORIES",
    image: "/Assets/western/accessories_cat.jpg",
    href: "/accessories"
  },
  {
    name: "RENTALS",
    image: "/Assets/traditional/rental_cat.jpg",
    href: "/rentals"
  },
  {
    name: "READY TO SHIP",
    image: "/Assets/traditional/ready_to_ship_cat.jpg",
    href: "/ready-to-ship"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white">
      <Navbar />
      <TraditionalHero images={HOME_HERO_IMAGES} />
      <ShopByCategory categories={HOME_CATEGORIES} />
      <NewArrivalsSection />
      <TailoredSection />
      <RentalSection/>
      <AboutUs/>
      <Services/>
      <Footer/>
    </main>
  );
}
