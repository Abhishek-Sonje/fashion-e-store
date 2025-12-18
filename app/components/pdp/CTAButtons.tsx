"use client";

import { MessageCircle, ShoppingBag, Heart, CreditCard } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="space-y-4 pt-6 border-t border-gray-100">
      <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded flex items-center justify-center gap-2 font-medium tracking-wide transition-colors uppercase text-sm">
        <MessageCircle className="w-5 h-5" />
        Order on Whatsapp
      </button>

      <div className="flex gap-4">
        <button className="flex-1 bg-black hover:bg-gray-800 text-white py-3.5 px-6 rounded flex items-center justify-center gap-2 font-medium tracking-wide transition-colors uppercase text-sm">
          <ShoppingBag className="w-4 h-4" />
          Add To Cart
        </button>
        <button className="p-3.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
       {/* BNPL / Payment Shortcuts */}
      <div className="bg-black text-white p-3 rounded flex items-center justify-between px-4 cursor-pointer hover:bg-gray-900 transition-colors">
         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span>Buy Now</span>
         </div>
         <div className="flex items-center gap-1 opacity-80">
            {/* Simple representation of payment icons */}
            <CreditCard className="w-4 h-4"/>
            <span className="text-[10px]">UPI / Cards</span>
         </div>
      </div>
    </div>
  );
}
