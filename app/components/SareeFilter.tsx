"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, LayoutGrid, Columns } from "lucide-react";

type ViewMode = "4-col" | "2-col";

interface SareeFilterProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  totalResults: number;
}

export default function SareeFilter({
  viewMode,
  setViewMode,
  totalResults,
}: SareeFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const filters = ["Availability", "Price", "Color", "Size", "Fabric"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center font-serif max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-b border-gray-100 mb-8 sticky top-0 bg-white z-10 transition-all">
      {/* Left Side: Filters */}
      <div className="flex flex-wrap gap-4 md:gap-8 items-center w-full md:w-auto mb-4 md:mb-0">
        <div className="md:hidden w-full relative">
          <button
            onClick={() => toggleFilter("mobile")}
            className="w-full flex justify-between items-center border p-2 uppercase tracking-wide text-sm"
          >
            Filters <ChevronDown size={16} />
          </button>
          {activeFilter === "mobile" && (
            <div className="absolute top-full left-0 w-full bg-white border shadow-lg z-20 p-4">
              <p className="text-gray-500 text-sm mb-2">Filter Options</p>
              {filters.map((f) => (
                <div key={f} className="py-2 border-b last:border-0">
                  {f}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Inline Filters */}
        <div className="hidden md:flex flex-row gap-6">
          {filters.map((filter) => (
            <div key={filter} className="relative group">
              <button
                className="inline-flex items-center gap-1 font-medium uppercase tracking-wide text-sm hover:text-gray-600 transition-colors"
                onClick={() => toggleFilter(filter)}
              >
                {filter}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeFilter === filter ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Placeholder */}
              {activeFilter === filter && (
                <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 shadow-xl z-20 p-4 animate-in fade-in zoom-in-95 duration-100 rounded-sm">
                  <p className="text-gray-500 text-xs italic">
                    Select {filter}...
                  </p>
                  {/* Placeholder items */}
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />{" "}
                      Option 1
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />{" "}
                      Option 2
                    </label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Results & View Toggle */}
      <div className="flex gap-4 md:gap-6 items-center w-full md:w-auto justify-between md:justify-end">
        <span className="uppercase tracking-widest text-sm text-gray-500">
          {totalResults} Results
        </span>

        <span className="text-gray-300">|</span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("2-col")}
            className={`p-1.5 rounded-md transition-all ${
              viewMode === "2-col"
                ? "bg-gray-100 text-black"
                : "text-gray-400 hover:text-gray-800"
            }`}
            title="2 Columns"
          >
            <Columns size={18} />
          </button>
          <button
            onClick={() => setViewMode("4-col")}
            className={`p-1.5 rounded-md transition-all ${
              viewMode === "4-col"
                ? "bg-gray-100 text-black"
                : "text-gray-400 hover:text-gray-800"
            }`}
            title="4 Columns"
          >
            <LayoutGrid size={18} />
          </button>
        </div>

        <div className="relative ml-2">
          <button
            className="inline-flex items-center gap-1 uppercase tracking-wide text-sm font-medium hover:text-gray-600"
            onClick={() => toggleFilter("sort")}
          >
            Sort
            <ChevronDown size={14} />
          </button>
          {/* Dropdown Placeholder */}
          {activeFilter === "sort" && (
            <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 shadow-xl z-20 p-4 animate-in fade-in zoom-in-95 duration-100 rounded-sm">
              <p className="text-gray-500 text-xs italic">Select sort...</p>
              {/* Placeholder items */}
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />{" "}
                  Option 1
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />{" "}
                  Option 2
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
