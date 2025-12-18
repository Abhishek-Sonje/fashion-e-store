import { ProductDetail, Product } from "./types";

// ===============================
// SINGLE PRODUCT DETAIL (PDP)
// ===============================

export const PRODUCT_DETAIL: ProductDetail = {
  id: 1,
  title: "PINK CHIFFON HANDWORK SAREE",
  price: "₹4,000",
  priceNum: 4000,
  originalPrice: 5000,
  rating: 4.5,
  reviewCount: 12,
  description:
    "Elegant Pink Chiffon Saree with intricate handwork details. Perfect for weddings and festive occasions. Includes a matching unstitched blouse piece. The fabric is lightweight, breathable, and easy to drape, making it suitable for all-day wear.",
  sku: "NR-SAREE-001",
  stockStatus: "In Stock",
  image: "/Assets/traditional/silk_saree.jpg",
  images: [
    "/Assets/traditional/silk_saree.jpg",
    "/Assets/traditional/casual_red_floral_dress.jpg",
    "/Assets/traditional/designer_blouse.jpg",
    "/Assets/traditional/wedding_lehenga.jpg",
  ],
  colors: [
    { name: "Pink", value: "#FFC0CB", selected: true },
    { name: "Green", value: "#008000", selected: false },
    { name: "Gold", value: "#FFD700", selected: false },
  ],
  fabrics: ["Viscose Chiffon"],
  sizes: ["One Size"],
  variants: [
    { id: "v1", label: "Un-stitched Fabric", price: 0 },
    { id: "v2", label: "Made To Measurements", price: 800 },
  ],
  category: "saree",
};

// ===============================
// SIMILAR PRODUCTS (PDP)
// ===============================

export const SIMILAR_PRODUCTS: Product[] = [
  {
    id: 2,
    title: "BANARASI GEORGETTE SAREE",
    price: "₹8,995",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
    fabric: "Georgette",
    color: "Red",
    size: "One Size",
    inStock: true,
    category: "saree",
  },
  {
    id: 3,
    title: "HANDWOVEN COTTON SAREE",
    price: "₹3,450",
    image: "/Assets/traditional/designer_blouse.jpg",
    fabric: "Cotton",
    color: "Beige",
    size: "One Size",
    inStock: true,
    category: "saree",
  },
  {
    id: 4,
    title: "DESIGNER NET SAREE",
    price: "₹15,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    fabric: "Net",
    color: "Pink",
    size: "One Size",
    inStock: true,
    category: "saree",
  },
  {
    id: 5,
    title: "CHANDERI SILK SAREE",
    price: "₹6,750",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    fabric: "Silk",
    color: "Gold",
    size: "One Size",
    inStock: true,
    category: "saree",
  },
];

// ===============================
// HELPER: Get product by ID
// In future, this can be replaced by a database call
// ===============================

export function getProductById(id: number): ProductDetail | undefined {
  // For now, returns the same demo product
  // When you connect a database, fetch from there
  if (id === 1) return PRODUCT_DETAIL;
  
  // Fallback: return demo product with modified ID
  return { ...PRODUCT_DETAIL, id };
}

export function getSimilarProducts(productId: number): Product[] {
  // Filter out the current product and return others
  return SIMILAR_PRODUCTS.filter((p) => p.id !== productId);
}
