"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import VariantSelector from "./VariantSelector";
import CTAButtons from "./CTAButtons";
import { useCart } from "@/app/context/CartContext";
import { useMeasurements } from "@/app/context/MeasurementContext";
import ProductAccordion from "./ProductAccordion";
import MeasurementChoiceModal from "./MeasurementChoiceModal";
import { GarmentType } from "@/app/data/types";

interface ProductInfoProps {
  product: any;
}

// Map product category to garment type for MTM
function getGarmentType(category?: string): GarmentType {
  switch (category?.toLowerCase()) {
    case "lehenga": return "lehenga";
    case "blouse": return "blouse";
    case "kurta": return "kurta";
    case "poshakh": return "poshakh";
    case "saree": return "saree";
    default: return "kurta";
  }
}

// Check if product supports MTM
function isMTMProduct(category?: string): boolean {
  const mtmCategories = ["saree", "lehenga", "blouse", "kurta", "poshakh"];
  return mtmCategories.includes(category?.toLowerCase() || "");
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors.find((c: any) => c.selected)?.name || product.colors[0]?.name
  );
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]?.id
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || "M"
  );
  const [showMeasurementModal, setShowMeasurementModal] = useState(false);
  
  const { addItem, openCart } = useCart();
  const { 
    currentMeasurements, 
    currentFitPreference,
    setPendingProductId,
    setPendingGarmentType 
  } = useMeasurements();

  const isMTMEnabled = isMTMProduct(product.category);
  const isMTMSelected = selectedSize === "MTM";

  // Calculate total price
  const variantPrice =
    product.variants.find((v: any) => v.id === selectedVariant)?.price || 0;
  const mtmPrice = isMTMSelected ? 800 : 0; // Additional price for MTM
  const totalPrice = product.price + variantPrice + mtmPrice;

  const handleMTMSelect = () => {
    setShowMeasurementModal(true);
  };

  const handleAddToCartWithMTM = (measurementsPending: boolean) => {
    const variant = product.variants.find(
      (v: any) => v.id === selectedVariant
    );
    const priceNum = (product.priceNum ?? 0) + (variant?.price ?? 0) + mtmPrice;
    
    addItem({
      id: product.id,
      name: product.title,
      color: selectedColor,
      size: isMTMSelected ? "Made to Measure" : selectedSize,
      price: priceNum,
      quantity: 1,
      image: product.image ?? product.images?.[0],
      variantId: selectedVariant,
      // MTM fields
      isMTM: isMTMSelected,
      measurements: measurementsPending ? undefined : currentMeasurements,
      measurementsPending: measurementsPending,
      fitPreference: isMTMSelected ? currentFitPreference : undefined,
    });
    openCart();
  };

  const handleAddMeasurementsLater = () => {
    // Add to cart with pending measurements
    handleAddToCartWithMTM(true);
  };

  const handleRegularAddToCart = () => {
    if (isMTMSelected) {
      // If MTM is selected but user clicks add to cart, show modal
      setShowMeasurementModal(true);
      return;
    }
    
    const variant = product.variants.find(
      (v: any) => v.id === selectedVariant
    );
    const priceNum = (product.priceNum ?? 0) + (variant?.price ?? 0);
    
    addItem({
      id: product.id,
      name: product.title,
      color: selectedColor,
      size: selectedSize,
      price: priceNum,
      quantity: 1,
      image: product.image ?? product.images?.[0],
      variantId: selectedVariant,
    });
    openCart();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header Info */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xs font-serif text-black uppercase tracking-widest mb-2">
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
          {isMTMSelected && (
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
              +₹800 MTM
            </span>
          )}
        </div>

        <p className="text-xs text-black font-serif">
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
        sizes={product.sizes?.length > 0 ? product.sizes : ["S", "M", "L", "XL"]}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        isMTMEnabled={isMTMEnabled}
        onMTMSelect={handleMTMSelect}
      />

      {/* Dynamic message based on selection */}
      <div className="mt-6 mb-2 text-sm text-black font-serif">
        {isMTMSelected 
          ? "Custom tailored to your measurements" 
          : "Submit Measurements NOW or LATER"}
      </div>
      <div className="text-sm text-gray-500 font-sans">
        {isMTMSelected 
          ? "+7-10 days for your made-to-measure garment" 
          : "+4 days, for your chosen stitching option."}
      </div>

      <CTAButtons onAddToCart={handleRegularAddToCart} />

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

      {/* Measurement Choice Modal */}
      <MeasurementChoiceModal
        isOpen={showMeasurementModal}
        onClose={() => setShowMeasurementModal(false)}
        productId={product.id}
        productTitle={product.title}
        onAddLater={handleAddMeasurementsLater}
      />
    </div>
  );
}

