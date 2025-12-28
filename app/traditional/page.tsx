import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import NewArrivals from "@/app/components/NewArrivals";
import SareeSection from "@/app/components/ProductSection";
import LehengaSection from "../components/LehengaSection";
import SuitsSection from "../components/SuitsSection";
import PoshakhSection from "../components/PoshakhSection";
import BlouseSection from "../components/BlouseSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Traditional Collection | Neha Rajput - Fashion Designer",
  description: "Explore our exquisite traditional wear collection featuring Sarees, Lehengas, Suits, and Poshakh. Handcrafted with love for every celebration.",
};


import {
  TRADITIONAL_CATEGORIES,
  TRADITIONAL_NEW_ARRIVALS,
  FEATURED_SAREES,
  FEATURED_LEHENGAS,
  FEATURED_SUITS,
  FEATURED_POSHAKH,
} from "@/app/data";
import ProductSection from "@/app/components/ProductSection";

export default function TraditionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero />
      <ShopByCategory categories={TRADITIONAL_CATEGORIES} />
      <NewArrivals title="New Arrivals" products={TRADITIONAL_NEW_ARRIVALS} />
      <ProductSection
        title="Saree"
        subtitle="Every saree tells a story of elegance."
        products={FEATURED_SAREES}
        columns={4}
      />
      <ProductSection title="Lehenga" subtitle="Every lehenga tells a story of elegance." products={FEATURED_LEHENGAS} columns={4} seeAllHref="/traditional/lehenga" />
      <ProductSection title="Suits" subtitle="Elegant suits for every occasion." products={FEATURED_SUITS} columns={4} seeAllHref="/traditional/suits" />
      <ProductSection title="Poshakh" subtitle="Traditional poshakh for timeless beauty." products={FEATURED_POSHAKH} columns={4} seeAllHref="/traditional/poshakh"/>
      <Footer />
    </main>
  );
}
