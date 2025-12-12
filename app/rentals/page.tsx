"use client";

import Navbar from "@/app/components/Navbar";
import TraditionalHero from "@/app/components/TraditionalHero";
import ShopByCategory from "@/app/components/ShopByCategory";
import Footer from "@/app/components/Footer";
import NewArrivals from "@/app/components/NewArrivals";
import SareeSection from "@/app/components/SareeSection";
export default function RentalsPage() {
  const heroImages = [
    "/Assets/traditional/rental_cat.jpg",
    "/Assets/traditional/rental1.jpg",
    "/Assets/traditional/rental2.jpg",
  ];

  const categories = [
    {
      name: "WEDDING",
      image: "/Assets/traditional/rental1.jpg",
      href: "/category/wedding-rental",
    },
    {
      name: "PARTY",
      image: "/Assets/traditional/rental2.jpg",
      href: "/category/party-rental",
    },
    {
      name: "JEWELLERY",
      image: "/Assets/traditional/rental4.jpg",
      href: "/category/jewellery-rental",
    },
    {
      name: "GROOM",
      image: "/Assets/traditional/rental_cat.jpg",
      href: "/category/groom-rental",
    },
  ];
  const wedding = [
    {
      id: 1,
      title: "Bridal Red Lehenga",
      price: "₹7,999",
      image: "/Assets/rentals/wedding/wedding1.jpg",
    },
    {
      id: 2,
      title: "Royal Silk Saree",
      price: "₹5,499",
      image: "/Assets/rentals/wedding/wedding2.jpg",
    },
    {
      id: 3,
      title: "Heavy Embroidered Lehenga",
      price: "₹9,299",
      image: "/Assets/rentals/wedding/wedding3.jpg",
    },
    {
      id: 4,
      title: "Golden Bridal Kanjivaram",
      price: "₹6,850",
      image: "/Assets/rentals/wedding/wedding4.jpg",
    },
  ];

  const party = [
    {
      id: 1,
      title: "Shimmer Evening Gown",
      price: "₹3,499",
      image: "/Assets/rentals/party/party1.jpg",
    },
    {
      id: 2,
      title: "Party Wear Saree",
      price: "₹2,950",
      image: "/Assets/rentals/party/party2.jpg",
    },
    {
      id: 3,
      title: "Designer Cocktail Dress",
      price: "₹4,250",
      image: "/Assets/rentals/party/party3.jpg",
    },
    {
      id: 4,
      title: "Glitter Sequin Lehenga",
      price: "₹3,899",
      image: "/Assets/rentals/party/party4.jpg",
    },
  ];

  const jewellery = [
    {
      id: 1,
      title: "Kundan Bridal Set",
      price: "₹1,299",
      image: "/Assets/rentals/jewellery/jewellery1.jpg",
    },
    {
      id: 2,
      title: "Pearl Necklace Set",
      price: "₹999",
      image: "/Assets/rentals/jewellery/jewellery2.jpg",
    },
    {
      id: 3,
      title: "Diamond Look Choker",
      price: "₹1,499",
      image: "/Assets/rentals/jewellery/jewellery3.jpg",
    },
    {
      id: 4,
      title: "Traditional Temple Jewellery",
      price: "₹1,799",
      image: "/Assets/rentals/jewellery/jewellery4.jpg",
    },
  ];

  const groom = [
    {
      id: 1,
      title: "Sherwani for Groom",
      price: "₹4,999",
      image: "/Assets/rentals/groom/groom1.jpg",
    },
    {
      id: 2,
      title: "Classic Indo-Western Suit",
      price: "₹3,850",
      image: "/Assets/rentals/groom/groom2.jpg",
    },
    {
      id: 3,
      title: "Traditional Kurta Set",
      price: "₹2,799",
      image: "/Assets/rentals/groom/groom3.jpg",
    },
    {
      id: 4,
      title: "Royal Velvet Sherwani",
      price: "₹5,499",
      image: "/Assets/rentals/groom/groom4.jpg",
    },
  ];
  const CommonArrival = [
    {
      id: 1,
      title: "BRIDAL DESIGNER LEHENGA",
      price: "₹8,500",
      image: "/Assets/rentals/arrival1.jpg",
    },
    {
      id: 2,
      title: "SEQUIN PARTY GOWN",
      price: "₹3,200",
      image: "/Assets/rentals/arrival2.jpg",
    },
    {
      id: 3,
      title: "KUNDAN NECKLACE SET",
      price: "₹1,299",
      image: "/Assets/rentals/arrival3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TraditionalHero images={heroImages} />
      <ShopByCategory categories={categories} />
      <NewArrivals title="New Arrivals" products={CommonArrival} />
      <SareeSection
        title="Wedding Collection"
        subtitle="Elegance for your special day."
        products={wedding}
        columns={4}
      />
      <SareeSection
        title="Party Wear Collection"
        subtitle="Shine bright at every celebration."
        products={party}
        columns={4}
      />
      <SareeSection
        title="Jewellery Collection"
        subtitle="Complete your look with stunning accessories."
        products={jewellery}
        columns={4}
      />
      <SareeSection
        title="Groom Collection"
        subtitle="Traditional and modern outfits for men."
        products={groom}
        columns={4}
      />

      <Footer />
    </main>
  );
}
