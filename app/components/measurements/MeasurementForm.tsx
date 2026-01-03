"use client";

import { useState } from "react";
import { ChevronDown, User } from "lucide-react";
import { 
  Measurement, 
  MeasurementField, 
  MeasurementUnit, 
  FitPreference,
  MeasurementProfile 
} from "@/app/data/types";
import FitSlider from "./FitSlider";

interface MeasurementFormProps {
  fields: MeasurementField[];
  measurements: Measurement[];
  unit: MeasurementUnit;
  fitPreference: FitPreference;
  notes: string;
  profiles: MeasurementProfile[];
  onUnitChange: (unit: MeasurementUnit) => void;
  onMeasurementChange: (fieldId: string, value: number) => void;
  onFitChange: (fit: FitPreference) => void;
  onNotesChange: (notes: string) => void;
  onFieldFocus: (fieldId: string) => void;
  onFieldBlur: () => void;
  onLoadProfile: (profile: MeasurementProfile) => void;
}

// Convert between cm and inches
function cmToInch(cm: number): number {
  return Math.round(cm / 2.54 * 10) / 10;
}

function inchToCm(inch: number): number {
  return Math.round(inch * 2.54 * 10) / 10;
}

export default function MeasurementForm({
  fields,
  measurements,
  unit,
  fitPreference,
  notes,
  profiles,
  onUnitChange,
  onMeasurementChange,
  onFitChange,
  onNotesChange,
  onFieldFocus,
  onFieldBlur,
  onLoadProfile,
}: MeasurementFormProps) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const getMeasurementValue = (fieldId: string): string => {
    const measurement = measurements.find(m => m.fieldId === fieldId);
    if (!measurement) return "";
    
    // Convert if units don't match
    if (measurement.unit !== unit) {
      return unit === "inch" 
        ? cmToInch(measurement.value).toString()
        : inchToCm(measurement.value).toString();
    }
    return measurement.value.toString();
  };

  const handleInputChange = (fieldId: string, inputValue: string) => {
    const numValue = parseFloat(inputValue);
    if (isNaN(numValue) || numValue < 0) return;
    
    // Always store in current unit
    onMeasurementChange(fieldId, numValue);
  };

  const getFieldRange = (field: MeasurementField) => {
    if (unit === "inch") {
      return {
        min: cmToInch(field.minCm),
        max: cmToInch(field.maxCm),
      };
    }
    return {
      min: field.minCm,
      max: field.maxCm,
    };
  };

  return (
    <div className="space-y-6">
      {/* Header with Unit Toggle and Profile Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-serif font-semibold">Your Measurements</h2>
        
        <div className="flex items-center gap-3">
          {/* Profile Selector */}
          {profiles.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Load Profile</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {profiles.map((profile) => (
                    <button
                      key={profile.id}
                      onClick={() => {
                        onLoadProfile(profile);
                        setShowProfileDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="font-medium">{profile.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {profile.fitPreference} fit
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Unit Toggle */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => onUnitChange("cm")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                unit === "cm"
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              cm
            </button>
            <button
              onClick={() => onUnitChange("inch")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                unit === "inch"
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              inch
            </button>
          </div>
        </div>
      </div>

      {/* Measurement Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field) => {
          const range = getFieldRange(field);
          const value = getMeasurementValue(field.id);
          const numValue = parseFloat(value) || 0;
          const isValid = numValue === 0 || (numValue >= range.min && numValue <= range.max);
          
          return (
            <div key={field.id} className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              <div className="relative">
                <input
                  type="number"
                  value={value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  onFocus={() => onFieldFocus(field.id)}
                  onBlur={onFieldBlur}
                  placeholder={`${range.min} - ${range.max}`}
                  min={range.min}
                  max={range.max}
                  step="0.5"
                  className={`w-full px-4 py-3 pr-12 border rounded-xl text-sm transition-all focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                    !isValid 
                      ? "border-red-300 bg-red-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  {unit}
                </span>
              </div>
              
              {!isValid && (
                <p className="text-xs text-red-500 mt-1">
                  Please enter a value between {range.min} and {range.max} {unit}
                </p>
              )}
              
              <p className="text-xs text-gray-400 mt-1.5">{field.description}</p>
            </div>
          );
        })}
      </div>

      {/* Fit Preference */}
      <div className="pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Fit Preference</h3>
        <FitSlider value={fitPreference} onChange={onFitChange} />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Any specific requirements or adjustments..."
          rows={3}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none hover:border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>
    </div>
  );
}
