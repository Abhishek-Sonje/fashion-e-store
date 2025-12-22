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
} from "@/app/data";

export default function TraditionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero />
      <ShopByCategory categories={TRADITIONAL_CATEGORIES} />
      <NewArrivals title="New Arrivals" products={TRADITIONAL_NEW_ARRIVALS} />
      <SareeSection
        title="Saree"
        subtitle="Every saree tells a story of elegance."
        products={FEATURED_SAREES}
        columns={4}
      />
      <LehengaSection />
      <SuitsSection />
      <PoshakhSection />
      <BlouseSection />
      <Footer />
    </main>
  );
}
