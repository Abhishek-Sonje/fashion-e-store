import { Category, Product, Banner } from "./types";

// ===============================
// HERO IMAGES
// ===============================

export const HOME_HERO_IMAGES = [
  "/Assets/traditional/header2.jpg",
  "/Assets/traditional/heroImage1.jpg",
  "/Assets/traditional/heroImage2.jpg",
  "/Assets/traditional/heroImage3.jpg",
];

export const TRADITIONAL_HERO_IMAGES = [
  "/Assets/traditional/traditionalHeader1.jpg",
  "/Assets/traditional/traditionalHeader2.jpg",
  "/Assets/traditional/traditionalHeader3.jpg",
];

// ===============================
// MAIN NAVIGATION CATEGORIES (Home Page)
// ===============================

export const HOME_CATEGORIES: Category[] = [
  {
    name: "TRADITIONAL",
    image: "/Assets/traditional/traditional_cat.jpg",
    href: "/traditional",
  },
  {
    name: "WESTERN",
    image: "/Assets/western/western_cat.jpg",
    href: "/western",
  },
  {
    name: "ACCESSORIES",
    image: "/Assets/western/accessories_cat.jpg",
    href: "/accessories",
  },
  {
    name: "RENTALS",
    image: "/Assets/traditional/rental_cat.jpg",
    href: "/rentals",
  },
  {
    name: "READY TO SHIP",
    image: "/Assets/traditional/ready_to_ship_cat.jpg",
    href: "/ready-to-ship",
  },
];

// ===============================
// TRADITIONAL SUB-CATEGORIES (Traditional Page)
// ===============================

export const TRADITIONAL_CATEGORIES: Category[] = [
  { name: "SAREE", image: "/Assets/traditional/SAREE.jpg", href: "/traditional/saree" },
  { name: "LEHENGA", image: "/Assets/traditional/LEHENGA.jpg", href: "/traditional/lehenga" },
  { name: "SUITS", image: "/Assets/traditional/SUITS.jpg", href: "/traditional/suits" },
  { name: "POSHAKH", image: "/Assets/traditional/POSHAKH.jpg", href: "/traditional/poshakh" },
];

// ===============================
// NEW ARRIVALS (Home Page)
// ===============================

export const HOME_NEW_ARRIVALS: Product[] = [
  {
    id: 1,
    title: "Silk Saree",
    price: "₹75,000",
    image: "/Assets/traditional/newArrival1.jpg",
    category: "saree",
  },
  {
    id: 2,
    title: "Handcrafted Kurta Set",
    price: "₹45,000",
    image: "/Assets/traditional/newArrival2.jpg",
    category: "suits",
  },
  {
    id: 3,
    title: "Embroidered Lehenga",
    price: "₹1,20,000",
    image: "/Assets/traditional/newArrival3.jpg",
    category: "lehenga",
  },
];

// ===============================
// NEW ARRIVALS (Traditional Page)
// ===============================

export const TRADITIONAL_NEW_ARRIVALS: Product[] = [
  {
    id: 1,
    title: "SILK SAREE",
    price: "₹75,000",
    image: "/Assets/traditional/silk_saree.jpg",
    category: "saree",
  },
  {
    id: 2,
    title: "HANDCRAFTED KURTA SET",
    price: "₹32,290",
    image: "/Assets/traditional/handcrafted_kurta_set.jpg",
    category: "suits",
  },
  {
    id: 3,
    title: "CASUAL RED FLORAL DRESS",
    price: "₹17,209",
    image: "/Assets/traditional/casual_red_floral_dress.jpg",
    category: "poshakh",
  },
];

// ===============================
// RENTAL PRODUCTS (Home Page)
// ===============================

export const RENTAL_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "WEDDING LEHENGA",
    price: "₹5,000",
    image: "/Assets/traditional/rental1.jpg",
    category: "lehenga",
  },
  {
    id: 2,
    title: "DESIGNER BLOUSE",
    price: "₹5,000",
    image: "/Assets/traditional/rental2.jpg",
    category: "blouse",
  },
  {
    id: 3,
    title: "BRIDAL NECKLACE SET",
    price: "₹5,000",
    image: "/Assets/traditional/rental3.jpg",
    category: "accessories",
  },
  {
    id: 4,
    title: "JHUMKA WITH CHOKER",
    price: "₹5,000",
    image: "/Assets/traditional/rental4.jpg",
    category: "accessories",
  },
];

// ===============================
// FEATURED PRODUCTS (Traditional Page Sections)
// ===============================

export const FEATURED_SAREES: Product[] = [
  {
    id: 1,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    category: "lehenga",
  },
  {
    id: 2,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
    category: "blouse",
  },
  {
    id: 3,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    category: "accessories",
  },
  {
    id: 4,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
    category: "accessories",
  },
];

export const FEATURED_LEHENGAS: Product[] = [
  {
    id: 101,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    category: "lehenga",
  },
  {
    id: 102,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
    category: "blouse",
  },
  {
    id: 103,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    category: "accessories",
  },
  {
    id: 104,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
    category: "accessories",
  },
];

export const FEATURED_SUITS: Product[] = [
  {
    id: 201,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    category: "suits",
  },
  {
    id: 202,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
    category: "blouse",
  },
  {
    id: 203,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    category: "accessories",
  },
  {
    id: 204,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
    category: "accessories",
  },
];

export const FEATURED_POSHAKH: Product[] = [
  {
    id: 301,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    category: "poshakh",
  },
  {
    id: 302,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
    category: "blouse",
  },
  {
    id: 303,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    category: "accessories",
  },
  {
    id: 304,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
    category: "accessories",
  },
];

export const FEATURED_BLOUSES: Product[] = [
  {
    id: 401,
    title: "WEDDING LEHENGA",
    price: "₹75,000",
    image: "/Assets/traditional/wedding_lehenga.jpg",
    category: "blouse",
  },
  {
    id: 402,
    title: "DESIGNER BLOUSE",
    price: "₹15,200",
    image: "/Assets/traditional/designer_blouse.jpg",
    category: "blouse",
  },
  {
    id: 403,
    title: "BRIDAL NECKLACE SET",
    price: "₹19,000",
    image: "/Assets/traditional/bridal_necklace_set.jpg",
    category: "accessories",
  },
  {
    id: 404,
    title: "JHUMKA WITH CHOKER",
    price: "₹12,000",
    image: "/Assets/traditional/jhumka_with_choker.jpg",
    category: "accessories",
  },
];

// ===============================
// BANNERS
// ===============================

export const TRADITIONAL_BANNERS: Banner[] = [
  { id: 1, image: "/Assets/traditional/traditionalHeader1.jpg" },
  { id: 2, image: "/Assets/traditional/traditionalHeader2.jpg" },
  { id: 3, image: "/Assets/traditional/traditionalHeader3.jpg" },
];
