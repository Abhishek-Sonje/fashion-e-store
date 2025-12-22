import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentals | Neha Rajput - Fashion Designer",
  description: "Rent designer outfits and timeless jewelry for your special occasions. Premium quality rentals at affordable prices.",
};

export default function RentalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
