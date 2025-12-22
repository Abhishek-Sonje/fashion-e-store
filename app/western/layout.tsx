import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Western Collection | Neha Rajput - Fashion Designer",
  description: "Discover our stunning Western wear collection featuring Dresses, Tops, Bottoms, and Coord Sets. Modern styles for the contemporary woman.",
};

export default function WesternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
