import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShopByCategorySection from "./components/ShopByCategorySection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import TailoredSection from "./components/TailoredSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white">
      <Navbar />
      <HeroSection />
      <ShopByCategorySection />
      <NewArrivalsSection />
      <TailoredSection />
    </main>
  );
}
