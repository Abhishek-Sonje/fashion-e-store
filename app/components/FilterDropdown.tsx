"use client";

import Image from "next/image";
import { useState, ReactNode } from "react";

type FilterDropdownProps = {
  label: string;
  children: ReactNode;
};

export function FilterDropdown({ label, children }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 uppercase tracking-wide"
      >
        {label}
        <Image
          src="/down.png"
          alt="Dropdown"
          width={15}
          height={15}
          className={`transition-transform ${open ? "rotate-270" : "rotate-90"}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 w-56 bg-white border shadow-lg z-20 p-4">
          {children}
        </div>
      )}
    </div>
  );
}
