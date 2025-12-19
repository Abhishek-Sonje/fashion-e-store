"use client";

import { useState } from "react";
import { CartTypes, cartItems as initialCart } from "../data/sareeData";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import { FEATURED_SAREES } from "../data";
import Footer from "../components/Footer";
import PaymentHub from "../components/pdp/PaymentHub";
import Link from "next/link";

export default function Cart() {
  const [items, setItems] = useState<CartTypes[]>(initialCart);

  const updateQty = (id: number, type: "inc" | "dec") => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 font-serif">
        <h1 className="text-3xl md:text-4xl text-center mb-12">Your Cart</h1>

        <div className="hidden md:grid grid-cols-12 text-gray-400 text-sm border-b pb-4">
          <div className="col-span-6">PRODUCT</div>
          <div className="col-span-3 text-center">QUANTITY</div>
          <div className="col-span-3 text-right">TOTAL</div>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-8 border-b"
          >
            <div className="md:col-span-6 flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 md:w-32 object-cover"
              />
              <div>
                <h3 className="text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Colour: {item.color}
                </p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="mt-2 font-sans">₹{item.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="md:col-span-3 flex md:justify-center">
              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={() => updateQty(item.id, "dec")}
                  className="px-4 py-1"
                >
                  −
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, "inc")}
                  className="px-4 py-1"
                >
                  +
                </button>
              </div>
            </div>

            <div className="md:col-span-3 text-right">
              <p className="font-sans">
                ₹{(item.price * item.quantity).toLocaleString()}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-sm underline mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="flex-1">
            <label className="block mb-2">Add Order Note</label>
            <textarea
              className="w-full border p-3 min-h-[120px]"
              placeholder="How can we help you ?"
            />
          </div>

          <div className="flex-1 md:text-right">
            <h2 className="text-xl font-medium">
              Total: ₹{total.toLocaleString()}
            </h2>
            <p className="text-gray-400 mt-2">
              Tax Included. Shipping Calculated At Checkout.
            </p>

            <Link href={"/checkout/contact"} className="mt-6 inline-flex gap-2 items-center font-semibold bg-black text-white px-5 py-2 rounded-full w-full md:w-auto">
              BUY NOW <PaymentHub/>
            </Link>
          </div>
        </div>
      </div>
      <ProductSection
        title="Similar Products"
        products={FEATURED_SAREES}
        columns={4}
      />
      <Footer />
    </div>
  );
}
