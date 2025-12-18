"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductGallery from "@/app/components/pdp/ProductGallery";
import ProductInfo from "@/app/components/pdp/ProductInfo";
import SimilarProducts from "@/app/components/pdp/SimilarProducts";

// Import centralized data
import { PRODUCT_DETAIL, SIMILAR_PRODUCTS } from "@/app/data";

export default function ProductPage() {
  // In future, use the ID from params to fetch product from database
  // For now, use demo data
  const product = PRODUCT_DETAIL;
  const similarProducts = SIMILAR_PRODUCTS;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column: Gallery */}
          <div>
            <ProductGallery images={product.images} />
          </div>

          {/* Right Column: Details */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Similar Products */}
        <SimilarProducts products={similarProducts} />
      </div>

      <Footer />
    </main>
  );
}
