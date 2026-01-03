"use client";

import MTMSizeOption from "./MTMSizeOption";

interface VariantOption {
  id: string;
  label: string;
  price: number;
}

interface ColorOption {
  name: string;
  value: string;
  selected?: boolean;
}

interface VariantSelectorProps {
  colors: ColorOption[];
  variants: VariantOption[];
  selectedVariant: string;
  onVariantChange: (id: string) => void;
  selectedColor: string;
  onColorChange: (color: string) => void;
  // MTM props
  sizes?: string[];
  selectedSize?: string;
  onSizeChange?: (size: string) => void;
  isMTMEnabled?: boolean;
  onMTMSelect?: () => void;
}

export default function VariantSelector({
  colors,
  variants,
  selectedVariant,
  onVariantChange,
  selectedColor,
  onColorChange,
  sizes = ["S", "M", "L", "XL"],
  selectedSize = "M",
  onSizeChange,
  isMTMEnabled = true,
  onMTMSelect,
}: VariantSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Colors */}
      <div className="flex flex-row gap-3 items-center">
        <h3 className="text-sm font-serif font-bold mb-3">Colors:</h3>
        <div className="flex items-center gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorChange(color.name)}
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedColor === color.name
                  ? "border-black p-0.5"
                  : "border-transparent"
              }`}
              title={color.name}
            >
              <span
                className="w-full h-full rounded-full border border-gray-200"
                style={{ backgroundColor: color.value }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center flex-row gap-2 text-sm font-serif">
        <span className="font-bold">Fabric:</span> Viscose Chiffon
      </div>

      {/* Size Selection with MTM Option */}
      <MTMSizeOption
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={onSizeChange || (() => {})}
        isMTMEnabled={isMTMEnabled}
        onMTMSelect={onMTMSelect || (() => {})}
      />

      {/* Stitching Variants */}
      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-sm font-serif font-bold mb-3">Variant:</h3>
        <div className="flex gap-4">
          {variants.map((v) => (
            <label
              key={v.id}
              className={`flex-col flex items-center gap-3 cursor-pointer rounded-xl border py-3 px-2 transition-all
              ${
                selectedVariant === v.id
                  ? "border-black"
                  : "text-gray-700 hover:border-gray-900"
              }
            `}
            >
              <input
                type="radio"
                name="variant"
                value={v.id}
                checked={selectedVariant === v.id}
                onChange={() => onVariantChange(v.id)}
                className="mt-1 accent-black"
              />
              <div className="text-center">
                <div className="font-serif text-sm font-medium">{v.label}</div>
                {v.price > 0 && (
                  <div
                    className={`text-xs mt-1 ${
                      selectedVariant === v.id ? "opacity-80" : "text-gray-500"
                    }`}
                  >
                    + ₹{v.price}
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

