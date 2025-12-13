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

export default function TraditionalPage() {
  const TradionalArrival = [
    {
      id: 1,
      title: "SILK SAREE",
      price: "₹75,000",
      image: "/Assets/traditional/silk_saree.jpg",
    },
    {
      id: 2,
      title: "HANDCRAFTED KURTA SET",
      price: "₹32,290",
      image: "/Assets/traditional/handcrafted_kurta_set.jpg",
    },
    {
      id: 3,
      title: "CASUAL RED FLORAL DRESS",
      price: "₹17,209",
      image: "/Assets/traditional/casual_red_floral_dress.jpg",
    },
  ];
  const sarees = [
  {
    id: 1,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 2,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 3,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
  },
  {
    id: 4,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
  },
];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero />
      <ShopByCategory />
      <NewArrivals title="New Arrivals" products={TradionalArrival} />
      <SareeSection 
        title="Saree"
        subtitle="Every saree tells a story of elegance."
        products={sarees}
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
