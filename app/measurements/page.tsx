"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useMeasurements } from "@/app/context/MeasurementContext";
import { useCart } from "@/app/context/CartContext";
import { 
  MEASUREMENT_FIELDS, 
  GarmentType, 
  Measurement, 
  MeasurementUnit,
  FitPreference,
  MeasurementProfile 
} from "@/app/data/types";
import { getProductById } from "@/app/data";
import BodyDiagram from "@/app/components/measurements/BodyDiagram";
import MeasurementForm from "@/app/components/measurements/MeasurementForm";

function MeasurementPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("productId");
  const returnUrl = searchParams.get("returnUrl");
  
  const { 
    setCurrentMeasurements, 
    setCurrentFitPreference,
    setCurrentNotes,
    addProfile,
    profiles 
  } = useMeasurements();
  
  const { addItem, openCart } = useCart();

  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [fitPreference, setFitPreference] = useState<FitPreference>("regular");
  const [notes, setNotes] = useState("");
  const [unit, setUnit] = useState<MeasurementUnit>("cm");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [saveAsProfile, setSaveAsProfile] = useState(false);
  const [profileName, setProfileName] = useState("");
  
  // Get product info and determine garment type
  const product = productId ? getProductById(parseInt(productId)) : null;
  const garmentType: GarmentType = product?.category?.toLowerCase() as GarmentType || "kurta";
  const fields = MEASUREMENT_FIELDS[garmentType] || MEASUREMENT_FIELDS.kurta;

  const handleMeasurementChange = (fieldId: string, value: number) => {
    setMeasurements(prev => {
      const existing = prev.find(m => m.fieldId === fieldId);
      if (existing) {
        return prev.map(m => 
          m.fieldId === fieldId ? { ...m, value, unit } : m
        );
      }
      return [...prev, { fieldId, value, unit }];
    });
  };

  const handleSave = () => {
    // Save to context
    setCurrentMeasurements(measurements);
    setCurrentFitPreference(fitPreference);
    setCurrentNotes(notes);
    
    // Optionally save as profile
    if (saveAsProfile && profileName.trim()) {
      addProfile({
        name: profileName.trim(),
        measurements,
        fitPreference,
        notes,
      });
    }

    // Add to cart if product context exists
    if (product && productId) {
      addItem({
        id: product.id,
        name: product.title,
        color: product.colors?.[0]?.name,
        size: "Made to Measure",
        price: (product.priceNum || 0) + 800,
        quantity: 1,
        image: product.image || product.images?.[0] || "",
        isMTM: true,
        measurements,
        measurementsPending: false,
        fitPreference,
      });
      openCart();
    }
    
    // Navigate back
    if (returnUrl) {
      router.push(decodeURIComponent(returnUrl));
    } else {
      router.push("/");
    }
  };

  const isFormValid = () => {
    const requiredFields = fields.filter(f => f.required);
    return requiredFields.every(f => 
      measurements.some(m => m.fieldId === f.id && m.value > 0)
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-3">
            Made to Measure
          </h1>
          {product && (
            <p className="text-gray-600">
              Enter your measurements for: <span className="font-medium">{product.title}</span>
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Follow the visual guide and enter your body measurements below
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Body Diagram */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <h2 className="text-lg font-serif font-semibold mb-6">Measurement Guide</h2>
            <BodyDiagram 
              garmentType={garmentType} 
              activeField={activeField}
              fields={fields}
            />
            
            {/* Active field info */}
            {activeField && (
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm font-medium text-amber-800">
                  {fields.find(f => f.id === activeField)?.label}
                </p>
                <p className="text-xs text-amber-600 mt-1">
                  {fields.find(f => f.id === activeField)?.description}
                </p>
              </div>
            )}
          </div>

          {/* Right: Measurement Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <MeasurementForm
              fields={fields}
              measurements={measurements}
              unit={unit}
              fitPreference={fitPreference}
              notes={notes}
              profiles={profiles}
              onUnitChange={setUnit}
              onMeasurementChange={handleMeasurementChange}
              onFitChange={setFitPreference}
              onNotesChange={setNotes}
              onFieldFocus={setActiveField}
              onFieldBlur={() => setActiveField(null)}
              onLoadProfile={(profile: MeasurementProfile) => {
                setMeasurements(profile.measurements);
                setFitPreference(profile.fitPreference);
                setNotes(profile.notes || "");
              }}
            />

            {/* Save as Profile Option */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveAsProfile}
                  onChange={(e) => setSaveAsProfile(e.target.checked)}
                  className="w-4 h-4 accent-black rounded"
                />
                <span className="text-sm text-gray-700">
                  Save these measurements as a profile for future orders
                </span>
              </label>
              
              {saveAsProfile && (
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="Profile name (e.g., 'My Regular Fit')"
                  className="mt-3 w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleSave}
                disabled={!isFormValid()}
                className={`w-full py-4 rounded-xl font-medium text-sm tracking-wide transition-all ${
                  isFormValid()
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Save Measurements & Add to Cart
              </button>
              
              <button
                onClick={() => router.back()}
                className="w-full py-4 rounded-xl font-medium text-sm tracking-wide border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function MeasurementPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading measurements...</p>
        </div>
      </main>
    }>
      <MeasurementPageContent />
    </Suspense>
  );
}
