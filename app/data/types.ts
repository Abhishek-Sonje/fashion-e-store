
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
}
