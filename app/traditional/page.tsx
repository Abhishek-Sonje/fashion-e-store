import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import NewArrivals from "@/app/components/NewArrivals";
import SareeSection from "@/app/components/SareeSection";
import LehengaSection from "../components/LehengaSection";
import SuitsSection from "../components/SuitsSection";
import PoshakhSection from "../components/PoshakhSection";
import BlouseSection from "../components/BlouseSection";
import Footer from "../components/Footer";

export default function TraditionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero />
      <ShopByCategory />
      <NewArrivals />
      <SareeSection />
      <LehengaSection/>
      <SuitsSection/>
      <PoshakhSection/>
      <BlouseSection/>
      <Footer/>
      
      
    </main>
  );
}
