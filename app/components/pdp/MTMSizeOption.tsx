"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface MTMSizeOptionProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
  isMTMEnabled: boolean;
  onMTMSelect: () => void;
}

export default function MTMSizeOption({
  sizes,
  selectedSize,
  onSizeChange,
  isMTMEnabled,
  onMTMSelect,
}: MTMSizeOptionProps) {
  const isMTMSelected = selectedSize === "MTM";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-serif font-bold">Size:</h3>
        <button className="text-sm underline hover:text-black text-gray-600">
          View Size Guide
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Standard Sizes */}
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm transition-all ${
              selectedSize === size && !isMTMSelected
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
          >
            {size}
          </button>
        ))}

        {/* Made to Measure Option */}
        {isMTMEnabled && (
          <button
            onClick={() => {
              onSizeChange("MTM");
              onMTMSelect();
            }}
            className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm transition-all flex items-center gap-2 ${
              isMTMSelected
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-600"
                : "bg-white text-amber-700 border-amber-400 hover:border-amber-600 hover:bg-amber-50"
            }`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
              <circle cx="7" cy="6" r="2" fill="currentColor" />
              <circle cx="17" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="18" r="2" fill="currentColor" />
            </svg>
            Made to Measure
          </button>
        )}
      </div>

      {/* MTM Helper Text */}
      {isMTMSelected && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800">
                Get this piece tailored perfectly to your body
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Provide your measurements for a custom fit made just for you
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
