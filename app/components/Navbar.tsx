"use client";

import { useState, useEffect } from "react";
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
import { usePathname } from "next/navigation";
import CartDropdown from "./CartDropdown";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, openCart, closeCart } = useCart();
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
      ? "text-xs font-serif font-semibold tracking-widest uppercase underline underline-offset-6 text-black whitespace-nowrap"
      : "text-xs font-serif font-medium tracking-widest uppercase text-black hover:underline underline-offset-6 transition-colors whitespace-nowrap";

  useEffect(() => {
    let lastState = false;

    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 80 && !lastState) {
        setIsScrolled(true);
        lastState = true;
      }

      if (y < 30 && lastState) {
        setIsScrolled(false);
        lastState = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        flex items-center justify-between relative
        transition-all duration-300
        ${isScrolled ? "h-14" : "h-20"}
      `}
      >
        <div className="shrink-0 w-24">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <div
            className={`transition-all duration-300
            ${
              isScrolled
                ? "opacity-0 scale-95 pointer-events-none"
                : "opacity-100 scale-100"
            }
          `}
          >
            <Image
              src="/nameLogo.png"
              alt="Neha Rajput"
              width={280}
              height={50}
              priority
            />
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center space-x-8
            transition-all duration-300
            ${
              isScrolled
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 relative">
          <Link
            href="/search"
            className="hover:opacity-70 transition-opacity"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </Link>
          <Link
            href="/account"
            className="hidden md:block hover:opacity-70 transition-opacity"
            title="Account"
          >
            <User className="w-5 h-5" />
          </Link>
          <Link
            href="/wishlist"
            className="hidden md:block hover:opacity-70 transition-opacity"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
          </Link>
          <button
            aria-label="Open cart"
            onClick={() => (isOpen ? closeCart() : openCart())}
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <CartDropdown />
          <Link
            href="https://wa.me/919420087800"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={`hidden md:block border-t border-gray-50
        transition-all duration-300
        ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-12 opacity-100"}
      `}
      >
        <nav className="h-full flex items-center justify-center space-x-10">
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
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
