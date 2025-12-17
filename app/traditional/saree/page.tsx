"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SareeFilter from "@/app/components/SareeFilter";
import SareeProductDisplay, {
  SareeProduct,
} from "@/app/components/SareeProductDisplay";

// Base demo data (price as labelled string); we'll enrich with attributes below
const baseSarees = [
  {
    id: 1,
    title: "Kanjivaram Silk Saree",
    price: "₹12,499",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 2,
    title: "Banarasi Georgette Saree",
    price: "₹8,995",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
  {
    id: 3,
    title: "Handwoven Cotton Saree",
    price: "₹3,450",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 4,
    title: "Designer Net Saree",
    price: "₹15,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 5,
    title: "Chanderi Silk Saree",
    price: "₹6,750",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
  },
  {
    id: 6,
    title: "Mysore Silk Saree",
    price: "₹9,200",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
  },
  {
    id: 7,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 8,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 9,
    title: "Kanjivaram Silk Saree",
    price: "₹12,499",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 10,
    title: "Banarasi Georgette Saree",
    price: "₹8,995",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
  },
  {
    id: 11,
    title: "Handwoven Cotton Saree",
    price: "₹3,450",
    image: "/Assets/traditional/designer_blouse.jpg",
  },
  {
    id: 12,
    title: "Designer Net Saree",
    price: "₹15,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
  },
  {
    id: 13,
    title: "Chanderi Silk Saree",
    price: "₹6,750",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
  },
  {
    id: 14,
    title: "Mysore Silk Saree",
    price: "₹9,200",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
  },
  {
    id: 15,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 16,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 17,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 18,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 19,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 20,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 21,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 22,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 23,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 24,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 25,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 26,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 27,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 28,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 29,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 30,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 31,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 32,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
  {
    id: 33,
    title: "Tussar Silk Saree",
    price: "₹11,000",
    image: "/Assets/traditional/silk_saree.jpg",
  },
  {
    id: 34,
    title: "Satin Crepe Saree",
    price: "₹4,999",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
  },
];

const parseINR = (s: string) => Number(s.replace(/[^0-9]/g, ""));
const colors = [
  "Red",
  "Blue",
  "Green",
  "Gold",
  "Black",
  "Pink",
  "Purple",
  "Maroon",
  "Teal",
  "Beige",
];
const sizes = ["S", "M", "L", "XL", "Free"];
const fabricFromTitle = (title: string) => {
  if (/Georgette/i.test(title)) return "Georgette";
  if (/Cotton/i.test(title)) return "Cotton";
  if (/Net/i.test(title)) return "Net";
  if (/Chanderi/i.test(title)) return "Chanderi";
  if (/Mysore/i.test(title)) return "Silk";
  if (/Tussar/i.test(title)) return "Tussar Silk";
  if (/Satin/i.test(title)) return "Satin";
  if (/Banarasi/i.test(title)) return "Banarasi";
  if (/Kanjivaram/i.test(title)) return "Silk";
  return "Silk";
};

const sareesData: SareeProduct[] = baseSarees.map((b, i) => ({
  id: b.id,
  title: b.title,
  price:
    typeof b.price === "string"
      ? parseINR(b.price)
      : (b.price as unknown as number),
  image: b.image,
  color: colors[i % colors.length],
  size: sizes[i % sizes.length],
  fabric: fabricFromTitle(b.title),
  inStock: i % 5 !== 0, // every 5th item out of stock
}));

const banners = [
  {
    id: 1,
    image: "/Assets/traditional/traditionalHeader1.jpg",
  },
  {
    id: 2,
    image: "/Assets/traditional/traditionalHeader2.jpg",
  },
  {
    id: 3,
    image: "/Assets/traditional/traditionalHeader3.jpg",
  },
];

export default function SareePage() {
  const [viewMode, setViewMode] = useState<"4-col" | "2-col">("4-col");
  type PriceBucket =
    | "under-5000"
    | "5000-10000"
    | "10000-15000"
    | "15000-plus"
    | null;
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [priceBucket, setPriceBucket] = useState<PriceBucket>(null);
  const [inStockOnly, setInStockOnly] = useState(false);

  const available = {
    colors: Array.from(new Set(sareesData.map((p) => p.color))).sort(),
    sizes: Array.from(new Set(sareesData.map((p) => p.size))).sort(),
    fabrics: Array.from(new Set(sareesData.map((p) => p.fabric))).sort(),
  };

  const priceInBucket = (price: number) => {
    switch (priceBucket) {
      case "under-5000":
        return price < 5000;
      case "5000-10000":
        return price >= 5000 && price <= 10000;
      case "10000-15000":
        return price > 10000 && price <= 15000;
      case "15000-plus":
        return price > 15000;
      default:
        return true;
    }
  };

  const filteredProducts = sareesData.filter((p) => {
    if (inStockOnly && !p.inStock) return false;
    if (selectedColors.length && !selectedColors.includes(p.color))
      return false;
    if (selectedSizes.length && !selectedSizes.includes(p.size)) return false;
    if (selectedFabrics.length && !selectedFabrics.includes(p.fabric))
      return false;
    if (!priceInBucket(p.price)) return false;
    return true;
  });

  const clearAll = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedFabrics([]);
    setPriceBucket(null);
    setInStockOnly(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <SareeFilter
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalResults={filteredProducts.length}
        available={available}
        selectedColors={selectedColors}
        onColorsChange={setSelectedColors}
        selectedSizes={selectedSizes}
        onSizesChange={setSelectedSizes}
        selectedFabrics={selectedFabrics}
        onFabricsChange={setSelectedFabrics}
        priceBucket={priceBucket}
        onPriceBucketChange={setPriceBucket}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
        onClearAll={clearAll}
      />

      <SareeProductDisplay
        products={filteredProducts}
        viewMode={viewMode}
        banners={banners}
      />

      <Footer />
    </main>
  );
}
