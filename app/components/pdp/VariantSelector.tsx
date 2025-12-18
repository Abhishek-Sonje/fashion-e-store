"use client";

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
}

export default function VariantSelector({
  colors,
  variants,
  selectedVariant,
  onVariantChange,
  selectedColor,
  onColorChange,
}: VariantSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Colors */}
      <div>
        <h3 className="text-sm font-serif font-semibold mb-3">Colors</h3>
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

      {/* Stitching Variants */}
      <div>
        <h3 className="text-sm font-serif font-semibold mb-3">Variant</h3>
        <div className="flex gap-4">
          {variants.map((v) => (
            <button
              key={v.id}
              onClick={() => onVariantChange(v.id)}
              className={`flex-1 py-3 px-4 border text-sm font-medium transition-all text-center rounded-sm ${
                selectedVariant === v.id
                  ? "border-black bg-black text-white"
                  : "border-gray-200 text-gray-700 hover:border-gray-900"
              }`}
            >
              <div className="font-serif">{v.label}</div>
              {v.price > 0 && (
                <div className="text-xs opacity-80 mt-1">+ ₹{v.price}</div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Size Guide / Selection could go here if needed, keeping it simple as per request */}
      <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
         <span>Size: One Size</span>
         <button className="underline hover:text-black">View Size Guide</button>
      </div>
    </div>
  );
}
