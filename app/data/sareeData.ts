import { Product, Banner } from "./types";

// ===============================
// BASE SAREE PRODUCTS (for Saree Listing Page)
// ===============================

const baseSarees = [
  { id: 1, title: "Kanjivaram Silk Saree", price: "₹12,499", image: "/Assets/traditional/silk_saree.jpg" },
  { id: 2, title: "Banarasi Georgette Saree", price: "₹8,995", image: "/Assets/traditional/casual_red_floral_dress.jpg" },
  { id: 3, title: "Handwoven Cotton Saree", price: "₹3,450", image: "/Assets/traditional/designer_blouse.jpg" },
  { id: 4, title: "Designer Net Saree", price: "₹15,000", image: "/Assets/traditional/wedding_lehenga.jpg" },
  { id: 5, title: "Chanderi Silk Saree", price: "₹6,750", image: "/Assets/traditional/bridal_necklace_set.jpg" },
  { id: 6, title: "Mysore Silk Saree", price: "₹9,200", image: "/Assets/traditional/jhumka_with_choker.jpg" },
  { id: 7, title: "Tussar Silk Saree", price: "₹11,000", image: "/Assets/traditional/silk_saree.jpg" },
  { id: 8, title: "Satin Crepe Saree", price: "₹4,999", image: "/Assets/traditional/handcrafted_kurta_set.jpg" },
  { id: 9, title: "Kanjivaram Silk Saree", price: "₹12,499", image: "/Assets/traditional/silk_saree.jpg" },
  { id: 10, title: "Banarasi Georgette Saree", price: "₹8,995", image: "/Assets/traditional/casual_red_floral_dress.jpg" },
  { id: 11, title: "Handwoven Cotton Saree", price: "₹3,450", image: "/Assets/traditional/designer_blouse.jpg" },
  { id: 12, title: "Designer Net Saree", price: "₹15,000", image: "/Assets/traditional/wedding_lehenga.jpg" },
  { id: 13, title: "Chanderi Silk Saree", price: "₹6,750", image: "/Assets/traditional/bridal_necklace_set.jpg" },
  { id: 14, title: "Mysore Silk Saree", price: "₹9,200", image: "/Assets/traditional/jhumka_with_choker.jpg" },
  { id: 15, title: "Tussar Silk Saree", price: "₹11,000", image: "/Assets/traditional/silk_saree.jpg" },
  { id: 16, title: "Satin Crepe Saree", price: "₹4,999", image: "/Assets/traditional/handcrafted_kurta_set.jpg" },
  { id: 17, title: "Tussar Silk Saree", price: "₹11,000", image: "/Assets/traditional/silk_saree.jpg" },
  { id: 18, title: "Satin Crepe Saree", price: "₹4,999", image: "/Assets/traditional/handcrafted_kurta_set.jpg" },
  { id: 19, title: "Tussar Silk Saree", price: "₹11,000", image: "/Assets/traditional/silk_saree.jpg" },
  { id: 20, title: "Satin Crepe Saree", price: "₹4,999", image: "/Assets/traditional/handcrafted_kurta_set.jpg" },
];

// ===============================
// FILTER OPTIONS
// ===============================

export const SAREE_COLORS = ["Red", "Blue", "Green", "Gold", "Black", "Pink", "Purple", "Maroon", "Teal", "Beige"];
export const SAREE_SIZES = ["S", "M", "L", "XL", "Free"];

// Utility to extract fabric from title
export function fabricFromTitle(title: string): string {
  if (/Georgette/i.test(title)) return "Georgette";
  if (/Cotton/i.test(title)) return "Cotton";
  if (/Net/i.test(title)) return "Net";
  if (/Chanderi/i.test(title)) return "Chanderi";
  if (/Mysore/i.test(title)) return "Silk";
  if (/Tussar/i.test(title)) return "Tussar Silk";
  if (/Satin/i.test(title)) return "Satin";
  if (/Banarasi/i.test(title)) return "Banarasi";
  if (/Kanjivaram/i.test(title)) return "Silk";
  return "Silk";
}

// Utility to parse INR price string to number
export function parseINR(s: string): number {
  return Number(s.replace(/[^0-9]/g, ""));
}

// ===============================
// ENRICHED SAREE DATA (with filters)
// ===============================

export interface SareeProduct extends Product {
  priceNum: number;
  color: string;
  size: string;
  fabric: string;
  inStock: boolean;
}

export const SAREE_PRODUCTS: SareeProduct[] = baseSarees.map((b, i) => ({
  id: b.id,
  title: b.title,
  price: b.price,
  priceNum: parseINR(b.price),
  image: b.image,
  color: SAREE_COLORS[i % SAREE_COLORS.length],
  size: SAREE_SIZES[i % SAREE_SIZES.length],
  fabric: fabricFromTitle(b.title),
  inStock: i % 5 !== 0, // every 5th item out of stock
  category: "saree",
}));

// ===============================
// SAREE PAGE BANNERS
// ===============================

export const SAREE_BANNERS: Banner[] = [
  { id: 1, image: "/Assets/traditional/traditionalHeader1.jpg" },
  { id: 2, image: "/Assets/traditional/traditionalHeader2.jpg" },
  { id: 3, image: "/Assets/traditional/traditionalHeader3.jpg" },
];
