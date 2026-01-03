"use client";

import { FitPreference } from "@/app/data/types";

interface FitSliderProps {
  value: FitPreference;
  onChange: (value: FitPreference) => void;
}

const FIT_OPTIONS: { value: FitPreference; label: string; description: string }[] = [
  { 
    value: "slim", 
    label: "Slim", 
    description: "Close to body, tailored look" 
  },
  { 
    value: "regular", 
    label: "Regular", 
    description: "Comfortable, classic fit" 
  },
  { 
    value: "relaxed", 
    label: "Relaxed", 
    description: "Loose, easy movement" 
  },
];

export default function FitSlider({ value, onChange }: FitSliderProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        {FIT_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex-1 py-3 px-4 text-center transition-all ${
              value === option.value
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            } ${
              option.value === "slim" 
                ? "rounded-l-xl" 
                : option.value === "relaxed" 
                  ? "rounded-r-xl" 
                  : ""
            }`}
          >
            <div className="text-sm font-medium">{option.label}</div>
          </button>
        ))}
      </div>
      
      {/* Description for selected fit */}
      <div className="text-center">
        <p className="text-xs text-gray-500">
          {FIT_OPTIONS.find(o => o.value === value)?.description}
        </p>
      </div>
      
      {/* Visual indicator */}
      <div className="flex items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" className={`w-5 h-5 ${value === 'slim' ? 'text-black' : 'text-gray-300'}`} fill="currentColor">
          <path d="M12 2C9.24 2 7 4.24 7 7v3c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V7c0-2.76-2.24-5-5-5zm-3 8V7c0-1.66 1.34-3 3-3s3 1.34 3 3v3H9z"/>
          <rect x="9" y="12" width="6" height="10" rx="1"/>
        </svg>
        <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
          <div 
            className="absolute h-full bg-black rounded-full transition-all duration-300"
            style={{ 
              width: value === 'slim' ? '33%' : value === 'regular' ? '66%' : '100%' 
            }}
          />
        </div>
        <svg viewBox="0 0 24 24" className={`w-6 h-6 ${value === 'relaxed' ? 'text-black' : 'text-gray-300'}`} fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9c0-3.87-3.13-7-7-7zm-5 10V9c0-2.76 2.24-5 5-5s5 2.24 5 5v3H7z"/>
          <rect x="7" y="14" width="10" height="8" rx="1"/>
        </svg>
      </div>
    </div>
  );
}
