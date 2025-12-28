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
    <div className="space-y-4">
      {/* Colors */}
      <div className="flex flex-row gap-3 items-center ">
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
      <div className="flex items-center justify-between text-sm  font-serif">
        <div className="inline-flex gap-6"><span className="font-bold">Size: </span> <span className="px-6 py-2 rounded-md bg-black text-white">One Size</span></div>
         
         <button className="underline hover:text-black">View Size Guide</button>
      </div>
      {/* Stitching Variants */}
      <div className="flex flex-row gap-2 items-center ">
  <h3 className="text-sm font-serif font-bold mb-3">Variant:</h3>

  <div className="flex gap-4">
    {variants.map((v) => (
      <label
        key={v.id}
        className={`flex-col flex items-center gap-3 cursor-pointer rounded-xl border py-3 px-2 transition-all
          ${
            selectedVariant === v.id
              ? "border-black blackbg- "
              : " text-gray-700 hover:border-gray-900"
          }
        `}
      >
        {/* Visible radio */}
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
