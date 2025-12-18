
import Navbar from "./components/Navbar";
import TraditionalHero from "./components/TraditionalHero";
import ShopByCategory from "./components/ShopByCategory";
import NewArrivals from "./components/NewArrivals";
import TailoredSection from "./components/TailoredSection";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SareeSection from "./components/ProductSection";

// Import centralized data
import {
  HOME_HERO_IMAGES,
  HOME_CATEGORIES,
  HOME_NEW_ARRIVALS,
  RENTAL_PRODUCTS,
} from "./data";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TraditionalHero images={HOME_HERO_IMAGES} />
      <ShopByCategory categories={HOME_CATEGORIES} />
      <NewArrivals title="New Arrivals" products={HOME_NEW_ARRIVALS} />
      <TailoredSection />
      <SareeSection
        title="Rental"
        subtitle="Designer Outfits and Timeless Jewellery, Rented Just for You."
        products={RENTAL_PRODUCTS}
        columns={4}
      />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}
