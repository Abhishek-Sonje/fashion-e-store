"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="text-xs font-serif font-bold tracking-widest uppercase text-gray-900 group-hover:text-gray-600 transition-colors">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm text-gray-600 leading-relaxed font-serif">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion() {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <AccordionItem title="Product Details">
        <ul className="list-disc pl-4 space-y-1">
           <li>Fabric: Premium Viscose Chiffon</li>
           <li>Work: Intricate Handwork (Zardosi & Pearl)</li>
           <li>Occasion: Wedding / Festival</li>
           <li>Includes: Saree with unstitched blouse piece</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Delivery Time">
        <p>Estimated delivery within 5-7 business days. Express shipping available at checkout.</p>
      </AccordionItem>
      <AccordionItem title="Need Help?">
        <p>Contact our support team at support@neharajput.com or WhatsApp us using the button above.</p>
      </AccordionItem>
    </div>
  );
}
