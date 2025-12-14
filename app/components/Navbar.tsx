"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { Cinzel_Decorative } from "next/font/google";
import { usePathname } from "next/navigation";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "TRADITIONAL", href: "/traditional" },
    { name: "WESTERN", href: "/western" },
    { name: "ACCESSORIES", href: "/accessories" },
    { name: "RENTALS", href: "/rentals" },
    { name: "READY TO SHIP", href: "/ready-to-ship" },
  ];
  const linkClass = (href: string) =>
    pathname === href
      ? "text-md font-serif font-semibold tracking-widest uppercase underline underline-offset-6 text-black"
      : "text-md font-serif font-medium tracking-widest uppercase text-black hover:underline underline-offset-6 transition-colors";

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        <div className="shrink-0 w-24">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Neha Rajput Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-black"
          >
            <div className="relative">
              <Image
                src="/nameLogo.png"
                alt="Neha Rajput Logo"
                width={280}
                height={50}
                // className={`${cinzelDecorative.className} object-contain`}
                
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <button title="search" className="hover:text-gray-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button title="user account" className="hidden md:block hover:text-gray-600 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button title="wishlist" className="hidden md:block hover:text-gray-600 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button title="shopping bag" className="hover:text-gray-600 transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button title="messages" className="hover:text-green-600 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div className="hidden md:block border-t border-gray-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={linkClass(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                <User className="w-4 h-4" /> <span>Account</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-medium text-gray-600">
                <Heart className="w-4 h-4" /> <span>Wishlist</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
