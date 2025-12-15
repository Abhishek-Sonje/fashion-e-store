"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";

export type SareeProduct = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export type SareeBanner = {
  id: number;
  image: string;
  alt?: string;
};

interface SareeProductDisplayProps {
  products: SareeProduct[];
  banners: SareeBanner[];
  viewMode: "4-col" | "2-col";
}

// Extracted BannerCard component - Takes 6 columns (2 product widths)
function BannerCard({ banner }: { banner: SareeBanner }) {
  return (
    <div className="col-span-6  relative min-h-[200px] max-h-[365px]">
      <Image
        src={banner.image}
        alt={banner.alt ?? "Promotional banner"}
        // fill
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 80vw, 50vw"
      />
    </div>
  );
}

function ProductCard({
  item,
  isLiked,
  viewMode,
  onLikeToggle,
}: {
  item: SareeProduct;
  isLiked: boolean;
  viewMode: "4-col" | "2-col";
  onLikeToggle: () => void;
}) {
  const colSpan = viewMode === "2-col" ? "col-span-6" : "col-span-3";

  return (
    <div className={`${colSpan} group relative flex flex-col h-full`}>
      {/* Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100 mb-4 rounded-sm">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes={
            viewMode === "2-col"
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          }
          priority={viewMode === "2-col"}
        />

        {/* Quick Add Overlay */}
        {viewMode === "2-col" && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              type="button"
              className="w-full bg-black text-white uppercase tracking-widest text-xs py-3 hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-left space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xs font-serif tracking-widest uppercase text-gray-900 line-clamp-1">
            <Link href={`/product/${item.id}`}>{item.title}</Link>
          </h3>
          <button
            type="button"
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            onClick={onLikeToggle}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? "text-red-500 fill-red-500" : "text-gray-700"
              }`}
            />
          </button>
        </div>
        <p className="text-sm text-gray-500 tracking-wide font-medium">
          {item.price}
        </p>
      </div>
    </div>
  );
}

export default function SareeProductDisplay({
  products,
  banners,
  viewMode,
}: SareeProductDisplayProps) {
  const safeProducts = products ?? [];
  const safeBanners = banners ?? [];
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  // Memoize the toggle function
  const toggleLike = useCallback((id: number) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

 
  const layout = useMemo(() => {
    const result: React.ReactNode[] = [];
    let productIndex = 0;
    let bannerIndex = 0;
   
    let bannerPosition: "right" | "left" = "right";

    while (productIndex < safeProducts.length) {
      
      for (let i = 0; i < 8 && productIndex < safeProducts.length; i++) {
        const product = safeProducts[productIndex];
        result.push(
          <ProductCard
            key={`product-${product.id}`}
            item={product}
            isLiked={likedIds.has(product.id)}
            viewMode={viewMode}
            onLikeToggle={() => toggleLike(product.id)}
          />
        );
        productIndex++;
      }

       

      const hasAvailableBanner = bannerIndex < safeBanners.length;
      const hasProductsForBannerRow = productIndex + 1 < safeProducts.length; 
      const hasProductsAfterBannerRow = productIndex + 2 < safeProducts.length;  

      if (
        viewMode === "4-col" &&
        hasAvailableBanner &&
        hasProductsForBannerRow &&
        hasProductsAfterBannerRow
      ) {
        const banner = safeBanners[bannerIndex];

        if (bannerPosition === "right") {
         
          for (let i = 0; i < 2 && productIndex < safeProducts.length; i++) {
            const product = safeProducts[productIndex];
            result.push(
              <ProductCard
                key={`product-${product.id}`}
                item={product}
                isLiked={likedIds.has(product.id)}
                viewMode={viewMode}
                onLikeToggle={() => toggleLike(product.id)}
              />
            );
            productIndex++;
          }

           
          result.push(
            <BannerCard key={`banner-${banner.id}`} banner={banner} />
          );

          bannerIndex++;
          bannerPosition = "left";  
        } else {
           
          result.push(
            <BannerCard key={`banner-${banner.id}`} banner={banner} />
          );

         
          for (let i = 0; i < 2 && productIndex < safeProducts.length; i++) {
            const product = safeProducts[productIndex];
            result.push(
              <ProductCard
                key={`product-${product.id}`}
                item={product}
                isLiked={likedIds.has(product.id)}
                viewMode={viewMode}
                onLikeToggle={() => toggleLike(product.id)}
              />
            );
            productIndex++;
          }

          bannerIndex++;
          bannerPosition = "right";  
        }
      } else if (productIndex < safeProducts.length) {
        
        const product = safeProducts[productIndex];
        result.push(
          <ProductCard
            key={`product-${product.id}`}
            item={product}
            isLiked={likedIds.has(product.id)}
            viewMode={viewMode}
            onLikeToggle={() => toggleLike(product.id)}
          />
        );
        productIndex++;
      }
    }

    return result;
  }, [safeProducts, safeBanners, likedIds, viewMode, toggleLike]);

  
  const gridClass = "grid-cols-12";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div
        className={`grid ${gridClass} gap-x-8 gap-y-12 transition-all duration-500 ease-in-out`}
      >
        {layout}
      </div>
    </section>
  );
}
