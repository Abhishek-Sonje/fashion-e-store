"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import VariantSelector from "./VariantSelector";
import CTAButtons from "./CTAButtons";
import { useCart } from "@/app/context/CartContext";
import ProductAccordion from "./ProductAccordion";

interface ProductInfoProps {
  product: any; // Using any for flexibility with the demo data structure, ideally strictly typed
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors.find((c: any) => c.selected)?.name || product.colors[0]?.name
  );
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]?.id
  );
  const { addItem, openCart } = useCart();

  // Calculate total price
  const variantPrice =
    product.variants.find((v: any) => v.id === selectedVariant)?.price || 0;
  const totalPrice = product.price + variantPrice;

  return (
    <div className="flex flex-col h-full">
      {/* Header Info */}
      <div className="border-b border-gray-100 pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xs font-serif text-gray-500 uppercase tracking-widest mb-2">
              Neha Rajput
            </h2>
            <h1 className="text-2xl font-serif font-medium text-gray-900 mb-2 leading-tight">
              {product.title}
            </h1>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xl font-medium tracking-wide">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(totalPrice)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(product.originalPrice)}
            </span>
          )}
        </div>

        <p className="text-xs text-gray-500 font-serif italic">
          Inclusive of All Taxes. Shipping calculated at checkout.
        </p>
      </div>

      {/* Selectors */}
      <VariantSelector
        colors={product.colors}
        variants={product.variants}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
      />

      {/* Dynamic message based on selection */}
      <div className="mt-6 mb-2 text-xs text-gray-500 font-serif">
        {selectedVariant === "v2"
          ? "Submit Measurements NOW or LATER (+4 days, for your chosen stitching option."
          : ""}
      </div>

      <CTAButtons
        onAddToCart={() => {
          const variant = product.variants.find(
            (v: any) => v.id === selectedVariant
          );
          const priceNum = (product.priceNum ?? 0) + (variant?.price ?? 0);
          addItem({
            id: product.id,
            name: product.title,
            color: selectedColor,
            size: product.sizes?.[0] ?? "One Size",
            price: priceNum,
            quantity: 1,
            image: product.image ?? product.images?.[0],
            variantId: selectedVariant,
          });
          openCart();
        }}
      />

      {/* Meta */}
      <div className="mt-6 space-y-1 text-xs text-gray-500 tracking-wide">
        <p>SKU: {product.sku}</p>
        <p
          className={
            product.stockStatus === "In Stock"
              ? "text-green-600"
              : "text-red-500"
          }
        >
          Availability: {product.stockStatus}
        </p>
      </div>

      <ProductAccordion />
    </div>
  );
}
