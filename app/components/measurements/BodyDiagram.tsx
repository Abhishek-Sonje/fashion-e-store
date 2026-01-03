"use client";

import { GarmentType, MeasurementField } from "@/app/data/types";

interface BodyDiagramProps {
  garmentType: GarmentType;
  activeField: string | null;
  fields: MeasurementField[];
}

// SVG highlight coordinates for each measurement point
const HIGHLIGHT_POSITIONS: Record<string, { cx: number; cy: number; rx: number; ry: number }> = {
  chest: { cx: 100, cy: 85, rx: 35, ry: 15 },
  waist: { cx: 100, cy: 115, rx: 30, ry: 12 },
  hip: { cx: 100, cy: 145, rx: 35, ry: 15 },
  shoulder: { cx: 100, cy: 55, rx: 40, ry: 8 },
  sleeve: { cx: 45, cy: 100, rx: 8, ry: 35 },
  length: { cx: 100, cy: 170, rx: 20, ry: 45 },
  neck: { cx: 100, cy: 40, rx: 15, ry: 10 },
  armhole: { cx: 65, cy: 75, rx: 12, ry: 12 },
};

export default function BodyDiagram({ garmentType, activeField, fields }: BodyDiagramProps) {
  const getHighlightColor = (fieldId: string) => {
    if (activeField === fieldId) {
      return "rgba(245, 158, 11, 0.4)"; // Amber highlight
    }
    return "transparent";
  };

  const getStrokeColor = (fieldId: string) => {
    if (activeField === fieldId) {
      return "#D97706"; // Amber stroke
    }
    return "transparent";
  };

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 200 280"
        className="w-full max-w-xs"
        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
      >
        {/* Background */}
        <rect x="0" y="0" width="200" height="280" fill="#FEF3C7" rx="12" />
        
        {/* Body silhouette */}
        <g fill="#1F2937" opacity="0.8">
          {/* Head */}
          <ellipse cx="100" cy="25" rx="18" ry="20" />
          
          {/* Neck */}
          <rect x="92" y="40" width="16" height="15" rx="2" />
          
          {/* Body/Torso */}
          <path 
            d="M60 55 Q60 50 70 48 L130 48 Q140 50 140 55 
               L145 120 Q145 140 140 150 
               L138 175 Q135 200 130 220 L120 220 
               Q105 195 100 195 Q95 195 80 220 L70 220 
               Q65 200 62 175 L60 150 
               Q55 140 55 120 Z" 
            fill="#374151"
          />
          
          {/* Left Arm */}
          <path 
            d="M60 55 Q45 60 40 75 L35 130 Q33 140 38 145 
               L42 145 Q48 140 50 130 L55 85 Q57 70 60 60 Z"
            fill="#4B5563"
          />
          
          {/* Right Arm */}
          <path 
            d="M140 55 Q155 60 160 75 L165 130 Q167 140 162 145 
               L158 145 Q152 140 150 130 L145 85 Q143 70 140 60 Z"
            fill="#4B5563"
          />
          
          {/* Legs (for lehenga/full garments) */}
          {(garmentType === "lehenga" || garmentType === "poshakh") && (
            <>
              <path 
                d="M80 220 L75 270 L90 270 L95 225 Q97 223 100 223 
                   Q103 223 105 225 L110 270 L125 270 L120 220 Z"
                fill="#374151"
              />
            </>
          )}
        </g>
        
        {/* Garment overlay based on type */}
        <g>
          {garmentType === "blouse" && (
            <path 
              d="M65 52 Q60 55 58 70 L55 110 Q60 115 70 115 
                 L130 115 Q140 115 145 110 L142 70 Q140 55 135 52 
                 L100 48 L65 52 Z"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
              strokeDasharray="4 2"
              opacity="0.6"
            />
          )}
          
          {garmentType === "kurta" && (
            <path 
              d="M65 52 Q55 55 50 70 L45 140 Q45 150 50 155 
                 L52 200 L80 200 Q88 180 100 180 Q112 180 120 200 
                 L148 200 L150 155 Q155 150 155 140 L150 70 
                 Q145 55 135 52 L100 48 L65 52 Z"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
              strokeDasharray="4 2"
              opacity="0.6"
            />
          )}
          
          {garmentType === "lehenga" && (
            <>
              {/* Choli/Top */}
              <path 
                d="M65 52 Q60 55 58 70 L55 105 Q60 110 70 110 
                   L130 110 Q140 110 145 105 L142 70 Q140 55 135 52 Z"
                fill="none"
                stroke="#D97706"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.6"
              />
              {/* Skirt */}
              <path 
                d="M65 115 Q50 120 45 180 L40 265 L160 265 
                   L155 180 Q150 120 135 115 Z"
                fill="none"
                stroke="#D97706"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.6"
              />
            </>
          )}
        </g>
        
        {/* Measurement highlights */}
        {fields.map((field) => {
          const pos = HIGHLIGHT_POSITIONS[field.id];
          if (!pos) return null;
          
          return (
            <ellipse
              key={field.id}
              cx={pos.cx}
              cy={pos.cy}
              rx={pos.rx}
              ry={pos.ry}
              fill={getHighlightColor(field.id)}
              stroke={getStrokeColor(field.id)}
              strokeWidth="2"
              className="transition-all duration-300"
            />
          );
        })}
        
        {/* Measurement labels */}
        {activeField && HIGHLIGHT_POSITIONS[activeField] && (
          <g>
            <line
              x1={HIGHLIGHT_POSITIONS[activeField].cx + HIGHLIGHT_POSITIONS[activeField].rx + 5}
              y1={HIGHLIGHT_POSITIONS[activeField].cy}
              x2={HIGHLIGHT_POSITIONS[activeField].cx + HIGHLIGHT_POSITIONS[activeField].rx + 30}
              y2={HIGHLIGHT_POSITIONS[activeField].cy}
              stroke="#D97706"
              strokeWidth="1"
            />
            <text
              x={HIGHLIGHT_POSITIONS[activeField].cx + HIGHLIGHT_POSITIONS[activeField].rx + 35}
              y={HIGHLIGHT_POSITIONS[activeField].cy + 4}
              fontSize="10"
              fill="#92400E"
              fontWeight="500"
            >
              {fields.find(f => f.id === activeField)?.label}
            </text>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {fields.map((field) => (
          <div
            key={field.id}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeField === field.id
                ? "bg-amber-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {field.label}
            {field.required && <span className="text-amber-600 ml-1">*</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
