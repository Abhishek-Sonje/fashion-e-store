"use client";

import { useState, useMemo } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SareeFilter from "@/app/components/SareeFilter";
import SareeProductDisplay from "@/app/components/SareeProductDisplay";

// Import centralized data
import { SAREE_PRODUCTS, SAREE_BANNERS, SareeProduct } from "@/app/data";

export default function SuitsPage() {
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

  const available = useMemo(
    () => ({
      colors: Array.from(new Set(SAREE_PRODUCTS.map((p) => p.color))).sort(),
      sizes: Array.from(new Set(SAREE_PRODUCTS.map((p) => p.size))).sort(),
      fabrics: Array.from(new Set(SAREE_PRODUCTS.map((p) => p.fabric))).sort(),
    }),
    []
  );

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

  const filteredProducts = useMemo(() => {
    return SAREE_PRODUCTS.filter((p: SareeProduct) => {
      if (inStockOnly && !p.inStock) return false;
      if (selectedColors.length && !selectedColors.includes(p.color))
        return false;
      if (selectedSizes.length && !selectedSizes.includes(p.size)) return false;
      if (selectedFabrics.length && !selectedFabrics.includes(p.fabric))
        return false;
      if (!priceInBucket(p.priceNum)) return false;
      return true;
    });
  }, [
    selectedColors,
    selectedSizes,
    selectedFabrics,
    priceBucket,
    inStockOnly,
  ]);

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
        banners={SAREE_BANNERS}
      />

      <Footer />
    </main>
  );
}
