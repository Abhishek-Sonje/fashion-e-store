import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessories Collection | Neha Rajput - Fashion Designer",
  description: "Complete your look with our exquisite Accessories collection. Necklaces, Earrings, Bangles, and Designer Bags crafted with elegance.",
};

export default function AccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
