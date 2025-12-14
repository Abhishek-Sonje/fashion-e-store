
import Navbar from "./components/Navbar";
import TraditionalHero from "./components/TraditionalHero";
import ShopByCategory from "./components/ShopByCategory";
import NewArrivals from "./components/NewArrivals";
import TailoredSection from "./components/TailoredSection";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SareeSection from "./components/ProductSection";
const HOME_HERO_IMAGES = [
  "/Assets/traditional/header2.jpg",
  "/Assets/traditional/heroImage1.jpg",
  "/Assets/traditional/heroImage2.jpg",
  "/Assets/traditional/heroImage3.jpg"
];
const Newproducts = [
    {
      id:1,
      title: "Silk Saree",
      price: "₹75,000",
      image: "/Assets/traditional/newArrival1.jpg",
    },
    {
      id:2,
      title: "Handcrafted Kurta Set",
      price: "₹45,000",
      image: "/Assets/traditional/newArrival2.jpg",
    },
    {
      id:3,
      title: "Embroidered Lehenga",
      price: "₹1,20,000",
      image: "/Assets/traditional/newArrival3.jpg",
    },
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
const rentalData = [
  {
    id: 1,
    title: "WEDDING LEHENGA",
    price: "₹5,000",
    image: "/Assets/traditional/rental1.jpg",
    alt: "rental1",
  },
  {
    id: 2,
    title: "DESIGNER BLOUSE",
    price: "₹5,000",
    image: "/Assets/traditional/rental2.jpg",
    alt: "rental2",
  },
  {
    id: 3,
    title: "BRIDAL NECKLACE SET",
    price: "₹5,000",
    image: "/Assets/traditional/rental3.jpg",
    alt: "rental3",
  },
  {
    id: 4,
    title: "JHUMKA WITH CHOKER",
    price: "₹5,000",
    image: "/Assets/traditional/rental4.jpg",
    alt: "rental4",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <TraditionalHero images={HOME_HERO_IMAGES} />
      <ShopByCategory categories={HOME_CATEGORIES} />
      <NewArrivals 
      title="New Arrivals"
      products={Newproducts}
      />
      <TailoredSection />
      <SareeSection
              title="Rental"
              subtitle="Designer Outfits and Timeless Jewellery, Rented Just for You."
              products={rentalData}
              columns={4}
            />
  
      <AboutUs/>
      <Services/>
      <Footer/>
    </div>
  );
}
