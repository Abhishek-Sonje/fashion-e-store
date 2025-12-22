import { ProductDetail, Product } from "./types";

 

const ALL_PRODUCTS_DETAIL: Record<number, ProductDetail> = {
  
  1: {
    id: 1,
    title: "PINK CHIFFON HANDWORK SAREE",
    price: "₹4,000",
    priceNum: 4000,
    originalPrice: 5000,
    rating: 4.5,
    reviewCount: 12,
    description: "Elegant Pink Chiffon Saree with intricate handwork details. Perfect for weddings and festive occasions. Includes a matching unstitched blouse piece.",
    sku: "NR-SAREE-001",
    stockStatus: "In Stock",
    image: "/Assets/traditional/silk_saree.jpg",
    images: ["/Assets/traditional/silk_saree.jpg", "/Assets/traditional/silk_saree.jpg"],
    colors: [{ name: "Pink", value: "#FFC0CB", selected: true }, { name: "Gold", value: "#FFD700", selected: false }],
    fabrics: ["Viscose Chiffon"],
    sizes: ["One Size"],
    variants: [{ id: "v1", label: "Un-stitched Fabric", price: 0 }, { id: "v2", label: "Made To Measurements", price: 800 }],
    category: "saree",
  },
  2: {
    id: 2,
    title: "BANARASI GEORGETTE SAREE",
    price: "₹8,995",
    priceNum: 8995,
    originalPrice: 10000,
    rating: 4.7,
    reviewCount: 28,
    description: "Luxurious Banarasi Georgette Saree with traditional motifs. Ideal for special occasions and celebrations.",
    sku: "NR-SAREE-002",
    stockStatus: "In Stock",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
    images: ["/Assets/traditional/casual_red_floral_dress.jpg", "/Assets/traditional/casual_red_floral_dress.jpg"],
    colors: [{ name: "Red", value: "#DC143C", selected: true }, { name: "Maroon", value: "#800000", selected: false }],
    fabrics: ["Georgette"],
    sizes: ["One Size"],
    variants: [{ id: "v1", label: "Un-stitched Fabric", price: 0 }, { id: "v2", label: "Made To Measurements", price: 1000 }],
    category: "saree",
  },
  3: {
    id: 3,
    title: "HANDWOVEN COTTON SAREE",
    price: "₹3,450",
    priceNum: 3450,
    originalPrice: 4000,
    rating: 4.3,
    reviewCount: 15,
    description: "Beautiful handwoven cotton saree with delicate patterns. Lightweight and comfortable for everyday elegance.",
    sku: "NR-SAREE-003",
    stockStatus: "In Stock",
    image: "/Assets/traditional/designer_blouse.jpg",
    images: ["/Assets/traditional/designer_blouse.jpg", "/Assets/traditional/designer_blouse.jpg"],
    colors: [{ name: "Beige", value: "#F5F5DC", selected: true }],
    fabrics: ["Cotton"],
    sizes: ["One Size"],
    variants: [{ id: "v1", label: "Un-stitched Fabric", price: 0 }],
    category: "saree",
  },
  4: {
    id: 4,
    title: "DESIGNER NET SAREE",
    price: "₹15,000",
    priceNum: 15000,
    originalPrice: 18000,
    rating: 4.8,
    reviewCount: 42,
    description: "Stunning designer net saree with intricate embroidery. Perfect for weddings and grand celebrations.",
    sku: "NR-SAREE-004",
    stockStatus: "In Stock",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    images: ["/Assets/traditional/wedding_lehenga.jpg", "/Assets/traditional/wedding_lehenga.jpg"],
    colors: [{ name: "Pink", value: "#FFC0CB", selected: true }, { name: "Peach", value: "#FFDAB9", selected: false }],
    fabrics: ["Net"],
    sizes: ["One Size"],
    variants: [{ id: "v1", label: "Un-stitched Fabric", price: 0 }, { id: "v2", label: "Made To Measurements", price: 1500 }],
    category: "saree",
  },
  5: {
    id: 5,
    title: "CHANDERI SILK SAREE",
    price: "₹6,750",
    priceNum: 6750,
    originalPrice: 8000,
    rating: 4.6,
    reviewCount: 22,
    description: "Exquisite Chanderi silk saree with traditional zari work. A perfect blend of elegance and tradition.",
    sku: "NR-SAREE-005",
    stockStatus: "In Stock",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    images: ["/Assets/traditional/bridal_necklace_set.jpg", "/Assets/traditional/bridal_necklace_set.jpg"],
    colors: [{ name: "Gold", value: "#FFD700", selected: true }],
    fabrics: ["Chanderi Silk"],
    sizes: ["One Size"],
    variants: [{ id: "v1", label: "Un-stitched Fabric", price: 0 }],
    category: "saree",
  },
  // Lehengas & Wedding Wear
  101: {
    id: 101,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    priceNum: 75000,
    originalPrice: 85000,
    rating: 4.9,
    reviewCount: 56,
    description: "Magnificent bridal lehenga with heavy embroidery and traditional craftsmanship. Make your special day unforgettable.",
    sku: "NR-LEH-001",
    stockStatus: "In Stock",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    images: ["/Assets/traditional/wedding_lehenga.jpg", "/Assets/traditional/wedding_lehenga.jpg"],
    colors: [{ name: "Red", value: "#DC143C", selected: true }, { name: "Maroon", value: "#800000", selected: false }],
    fabrics: ["Raw Silk", "Net"],
    sizes: ["S", "M", "L", "XL"],
    variants: [{ id: "v1", label: "Standard", price: 0 }, { id: "v2", label: "Custom Fit", price: 5000 }],
    category: "lehenga",
  },
  // Blouses
  102: {
    id: 102,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    priceNum: 15200,
    originalPrice: 18000,
    rating: 4.5,
    reviewCount: 18,
    description: "Intricately designed blouse with modern patterns. Pairs beautifully with any saree or lehenga.",
    sku: "NR-BLS-001",
    stockStatus: "In Stock",
    image: "/Assets/traditional/designer_blouse.jpg",
    images: ["/Assets/traditional/designer_blouse.jpg", "/Assets/traditional/designer_blouse.jpg"],
    colors: [{ name: "Gold", value: "#FFD700", selected: true }],
    fabrics: ["Silk"],
    sizes: ["S", "M", "L", "XL"],
    variants: [{ id: "v1", label: "Standard", price: 0 }, { id: "v2", label: "Custom Fit", price: 800 }],
    category: "blouse",
  },
  // Accessories
  103: {
    id: 103,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    priceNum: 19000,
    originalPrice: 22000,
    rating: 4.8,
    reviewCount: 34,
    description: "Stunning bridal necklace set with kundan and pearl work. Complete your bridal look with this elegant piece.",
    sku: "NR-ACC-001",
    stockStatus: "In Stock",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    images: ["/Assets/traditional/bridal_necklace_set.jpg", "/Assets/traditional/bridal_necklace_set.jpg"],
    colors: [{ name: "Gold", value: "#FFD700", selected: true }],
    fabrics: [],
    sizes: ["One Size"],
    variants: [],
    category: "accessories",
  },
  104: {
    id: 104,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    priceNum: 12000,
    originalPrice: 14000,
    rating: 4.7,
    reviewCount: 29,
    description: "Traditional jhumka earrings with matching choker. Handcrafted with precision for the perfect ethnic look.",
    sku: "NR-ACC-002",
    stockStatus: "In Stock",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
    images: ["/Assets/traditional/jhumka_with_choker.jpg", "/Assets/traditional/jhumka_with_choker.jpg"],
    colors: [{ name: "Gold", value: "#FFD700", selected: true }],
    fabrics: [],
    sizes: ["One Size"],
    variants: [],
    category: "accessories",
  },
};


export const PRODUCT_DETAIL: ProductDetail = ALL_PRODUCTS_DETAIL[1];

 

export const SIMILAR_PRODUCTS: Product[] = [
  { id: 2, title: "BANARASI GEORGETTE SAREE", price: "₹8,995", image: "/Assets/traditional/casual_red_floral_dress.jpg", category: "saree" },
  { id: 3, title: "HANDWOVEN COTTON SAREE", price: "₹3,450", image: "/Assets/traditional/designer_blouse.jpg", category: "saree" },
  { id: 4, title: "DESIGNER NET SAREE", price: "₹15,000", image: "/Assets/traditional/wedding_lehenga.jpg", category: "saree" },
  { id: 5, title: "CHANDERI SILK SAREE", price: "₹6,750", image: "/Assets/traditional/bridal_necklace_set.jpg", category: "saree" },
];

 

export function getProductById(id: number): ProductDetail | undefined {
 
  if (ALL_PRODUCTS_DETAIL[id]) {
    return ALL_PRODUCTS_DETAIL[id];
  }
  
   
  const fallbackImages: Record<string, string> = {
    default: "/Assets/traditional/silk_saree.jpg",
  };
  
  return {
    id,
    title: `Product #${id}`,
    price: "₹5,000",
    priceNum: 5000,
    originalPrice: 6000,
    rating: 4.5,
    reviewCount: 10,
    description: "This product is currently being updated. Please check back soon for full details.",
    sku: `NR-PROD-${id}`,
    stockStatus: "In Stock",
    image: fallbackImages.default,
    images: [fallbackImages.default],
    colors: [{ name: "Default", value: "#808080", selected: true }],
    fabrics: ["Cotton"],
    sizes: ["One Size"],
    variants: [],
    category: "general",
  };
}

export function getSimilarProducts(productId: number): Product[] {
 
  const currentProduct = ALL_PRODUCTS_DETAIL[productId];
  if (currentProduct) {
    return Object.values(ALL_PRODUCTS_DETAIL)
      .filter(p => p.id !== productId && p.category === currentProduct.category)
      .slice(0, 4)
      .map(p => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        category: p.category,
      }));
  }
  
  return SIMILAR_PRODUCTS.filter((p) => p.id !== productId);
}

