import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShopByCategorySection from "./components/ShopByCategorySection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import TailoredSection from "./components/TailoredSection";
import RentalSection from "./components/RentalSection";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white">
      <Navbar />
      <HeroSection />
      <ShopByCategorySection />
      <NewArrivalsSection />
      <TailoredSection />
      <RentalSection/>
      <AboutUs/>
      <Services/>
      <Footer/>
    </main>
  );
}
