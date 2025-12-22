"use client";

import { use } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductGallery from "@/app/components/pdp/ProductGallery";
import ProductInfo from "@/app/components/pdp/ProductInfo";
import SimilarProducts from "@/app/components/pdp/SimilarProducts";

import { getProductById, getSimilarProducts, PRODUCT_DETAIL } from "@/app/data";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const productId = parseInt(id, 10);
  
  // Fetch product by ID, fallback to demo product if not found
  const product = getProductById(productId) || PRODUCT_DETAIL;
  const similarProducts = getSimilarProducts(productId);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        
          <div>
            <ProductGallery images={product.images} />
          </div>


          <div>
            <ProductInfo product={product} />
          </div>
        </div>


        <SimilarProducts products={similarProducts} />
      </div>

      <Footer />
    </main>
  );
}
