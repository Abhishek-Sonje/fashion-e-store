"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import MTMBadge from "./MTMBadge";

export default function CartDropdown() {
  const { items, total, isOpen, closeCart, updateQty, removeItem } = useCart();
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) {
        closeCart();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, closeCart]);

  return (
    <div
      ref={panelRef}
      className={`absolute right-0 top-full mt-3 w-[380px] max-w-[90vw] bg-white border shadow-xl rounded-lg overflow-hidden transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="p-4 border-b flex items-center justify-between">
        <p className="font-serif text-sm">
          Your Shopping Bag ({items.length}{" "}
          {items.length === 1 ? "Item" : "Items"})
        </p>
        <button
          aria-label="Close"
          onClick={closeCart}
          className="p-1 rounded hover:bg-gray-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-h-72 overflow-auto divide-y">
        {items.length === 0 ? (
          <div className="p-6 text-center text-sm text-gray-500">
            Your cart is empty.
          </div>
        ) : (
          items.map((item) => (
            <div key={`${item.id}-${item.variantId}-${item.isMTM ? 'mtm' : 'std'}`} className="p-4 flex gap-3">
              <div className="relative w-16 h-20 shrink-0 bg-gray-50 border">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {/* MTM indicator on image */}
                {item.isMTM && (
                  <div className="absolute top-0 left-0 bg-amber-500 text-white text-[8px] font-bold px-1.5 py-0.5">
                    MTM
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Colour: {item.color} • Size: {item.size}
                </p>
                
                {/* MTM Badge */}
                {item.isMTM && (
                  <div className="mt-1.5">
                    <MTMBadge
                      isMTM={item.isMTM}
                      measurementsPending={item.measurementsPending}
                      measurements={item.measurements}
                      productId={item.id}
                      compact
                    />
                  </div>
                )}
                
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="px-3 py-0.5"
                    >
                      −
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="px-3 py-0.5"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm font-sans">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-1 text-xs underline text-gray-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total</span>
          <span className="font-sans font-medium">
            ₹{total.toLocaleString()}
          </span>
        </div>
        <p className="text-[11px] text-gray-500 mt-1">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <Link
            href="/cart"
            onClick={closeCart}
            className="text-center bg-black text-white py-2 rounded-full text-sm"
          >
            View Shopping Cart
          </Link>
          <Link
            href="/checkout/contact"
            onClick={closeCart}
            className="text-center border py-2 rounded-full text-sm"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
