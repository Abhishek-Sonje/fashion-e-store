import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { MeasurementProvider } from "./context/MeasurementContext";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});
const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neha Rajput - Fashion Designer",
  description:
    "Crafted for celebration - Explore traditional, western, and custom fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${cinzel.variable} antialiased`}
      >
        <CartProvider>
          <MeasurementProvider>
            {children}
          </MeasurementProvider>
        </CartProvider>
      </body>
    </html>
  );
}
