import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import NewArrivals from "@/app/components/NewArrivals";
import SareeSection from "@/app/components/SareeSection";

export default function TraditionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero />
      <ShopByCategory />
      <NewArrivals />
      <SareeSection />
      {/* Additional space at bottom or footer can go here later */}
      <div className="pb-24"></div>
    </main>
  );
}
