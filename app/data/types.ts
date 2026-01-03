
// SHARED TYPE DEFINITIONS


export interface Product {
  id: number;
  title: string;
  price: string;          // Formatted string like "₹75,000"
  priceNum?: number;      // Numeric value for filtering (optional)
  image: string;
  category?: string;      // e.g., "saree", "lehenga", "suits"
  color?: string;
  size?: string;
  fabric?: string;
  inStock?: boolean;
  description?: string;
  sku?: string;
}

export interface Category {
  name: string;
  image: string;
  href: string;
}

export interface Banner {
  id: number;
  image: string;
  alt?: string;
}

export interface ProductDetail extends Product {
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  stockStatus?: string;
  images: string[];
  colors: { name: string; value: string; selected?: boolean }[];
  fabrics: string[];
  sizes: string[];
  variants: { id: string; label: string; price: number }[];
  isMTMEnabled?: boolean;
  mtmConfig?: MTMConfig;
}

// =====================
// MTM (Made-to-Measure) Types
// =====================

export type MeasurementUnit = 'cm' | 'inch';
export type FitPreference = 'slim' | 'regular' | 'relaxed';
export type GarmentType = 'kurta' | 'blouse' | 'lehenga' | 'poshakh' | 'saree';

export interface MeasurementField {
  id: string;
  label: string;
  description: string;
  minCm: number;
  maxCm: number;
  required: boolean;
}

export interface Measurement {
  fieldId: string;
  value: number;
  unit: MeasurementUnit;
}

export interface MeasurementProfile {
  id: string;
  name: string;
  measurements: Measurement[];
  fitPreference: FitPreference;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MTMConfig {
  garmentType: GarmentType;
  requiredFields: string[];
  optionalFields: string[];
  additionalPrice: number;
  estimatedDays: number;
}

// Standard measurement fields by garment type
export const MEASUREMENT_FIELDS: Record<GarmentType, MeasurementField[]> = {
  kurta: [
    { id: 'chest', label: 'Chest', description: 'Measure around the fullest part of your chest', minCm: 60, maxCm: 150, required: true },
    { id: 'waist', label: 'Waist', description: 'Measure around your natural waistline', minCm: 50, maxCm: 140, required: true },
    { id: 'hip', label: 'Hip', description: 'Measure around the fullest part of your hips', minCm: 60, maxCm: 160, required: true },
    { id: 'shoulder', label: 'Shoulder Width', description: 'Measure from shoulder edge to shoulder edge', minCm: 30, maxCm: 60, required: true },
    { id: 'sleeve', label: 'Sleeve Length', description: 'Measure from shoulder to wrist', minCm: 40, maxCm: 80, required: true },
    { id: 'length', label: 'Garment Length', description: 'Measure from shoulder to desired length', minCm: 50, maxCm: 150, required: true },
    { id: 'neck', label: 'Neck', description: 'Measure around the base of your neck', minCm: 30, maxCm: 55, required: false },
  ],
  blouse: [
    { id: 'chest', label: 'Chest', description: 'Measure around the fullest part of your chest', minCm: 60, maxCm: 130, required: true },
    { id: 'waist', label: 'Waist', description: 'Measure around your natural waistline', minCm: 50, maxCm: 120, required: true },
    { id: 'shoulder', label: 'Shoulder Width', description: 'Measure from shoulder edge to shoulder edge', minCm: 30, maxCm: 50, required: true },
    { id: 'sleeve', label: 'Sleeve Length', description: 'Measure from shoulder to desired sleeve end', minCm: 10, maxCm: 70, required: true },
    { id: 'length', label: 'Blouse Length', description: 'Measure from shoulder to desired length', minCm: 30, maxCm: 60, required: true },
    { id: 'armhole', label: 'Armhole', description: 'Measure around the armhole opening', minCm: 30, maxCm: 55, required: false },
  ],
  lehenga: [
    { id: 'waist', label: 'Waist', description: 'Measure around your natural waistline', minCm: 50, maxCm: 140, required: true },
    { id: 'hip', label: 'Hip', description: 'Measure around the fullest part of your hips', minCm: 60, maxCm: 160, required: true },
    { id: 'length', label: 'Lehenga Length', description: 'Measure from waist to floor or desired length', minCm: 80, maxCm: 120, required: true },
  ],
  poshakh: [
    { id: 'chest', label: 'Chest', description: 'Measure around the fullest part of your chest', minCm: 60, maxCm: 150, required: true },
    { id: 'waist', label: 'Waist', description: 'Measure around your natural waistline', minCm: 50, maxCm: 140, required: true },
    { id: 'hip', label: 'Hip', description: 'Measure around the fullest part of your hips', minCm: 60, maxCm: 160, required: true },
    { id: 'shoulder', label: 'Shoulder Width', description: 'Measure from shoulder edge to shoulder edge', minCm: 30, maxCm: 60, required: true },
    { id: 'sleeve', label: 'Sleeve Length', description: 'Measure from shoulder to wrist', minCm: 40, maxCm: 80, required: true },
    { id: 'length', label: 'Garment Length', description: 'Measure from shoulder to desired length', minCm: 100, maxCm: 180, required: true },
  ],
  saree: [
    { id: 'chest', label: 'Chest (for blouse)', description: 'Measure around the fullest part of your chest', minCm: 60, maxCm: 130, required: true },
    { id: 'waist', label: 'Waist (for blouse)', description: 'Measure around your natural waistline', minCm: 50, maxCm: 120, required: true },
    { id: 'shoulder', label: 'Shoulder Width', description: 'Measure from shoulder edge to shoulder edge', minCm: 30, maxCm: 50, required: true },
    { id: 'sleeve', label: 'Sleeve Length', description: 'Measure from shoulder to desired sleeve end', minCm: 10, maxCm: 70, required: true },
    { id: 'length', label: 'Blouse Length', description: 'Measure from shoulder to desired length', minCm: 30, maxCm: 60, required: true },
  ],
};
