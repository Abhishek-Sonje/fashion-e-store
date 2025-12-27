"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  color?: string;
  size?: string;
  price: number; // numeric
  quantity: number;
  image: string;
  variantId?: string;
};

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, type: "inc" | "dec") => void;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === item.id &&
          i.variantId === item.variantId &&
          i.color === item.color &&
          i.size === item.size
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
    setIsOpen(true);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id: number, type: "inc" | "dec") => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity:
                type === "inc" ? i.quantity + 1 : Math.max(1, i.quantity - 1),
            }
          : i
      )
    );
  };

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQty,
    total,
    isOpen,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
