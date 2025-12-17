"use client";
import { useState } from "react";
import { ChevronDown, LayoutGrid, Columns } from "lucide-react";

type ViewMode = "4-col" | "2-col";
type PriceBucket =
  | "under-5000"
  | "5000-10000"
  | "10000-15000"
  | "15000-plus"
  | null;

interface SareeFilterProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  totalResults: number;
  available: {
    colors: string[];
    sizes: string[];
    fabrics: string[];
  };
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
  selectedSizes: string[];
  onSizesChange: (sizes: string[]) => void;
  selectedFabrics: string[];
  onFabricsChange: (fabrics: string[]) => void;
  priceBucket: PriceBucket;
  onPriceBucketChange: (bucket: PriceBucket) => void;
  inStockOnly: boolean;
  onInStockOnlyChange: (v: boolean) => void;
  onClearAll: () => void;
}

export default function SareeFilter({
  viewMode,
  setViewMode,
  totalResults,
  available,
  selectedColors,
  onColorsChange,
  selectedSizes,
  onSizesChange,
  selectedFabrics,
  onFabricsChange,
  priceBucket,
  onPriceBucketChange,
  inStockOnly,
  onInStockOnlyChange,
  onClearAll,
}: SareeFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const filters = ["Availability", "Price", "Color", "Size", "Fabric"] as const;

  const isChecked = (arr: string[], v: string) => arr.includes(v);
  const toggleInArray = (arr: string[], v: string) =>
    isChecked(arr, v) ? arr.filter((x) => x !== v) : [...arr, v];

  const bucketLabels: Record<Exclude<PriceBucket, null>, string> = {
    "under-5000": "Under ₹5,000",
    "5000-10000": "₹5,000 – ₹10,000",
    "10000-15000": "₹10,000 – ₹15,000",
    "15000-plus": "₹15,000+",
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center font-serif max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-b border-gray-100 mb-8 sticky top-0 bg-white z-10 transition-all">
      <div className="flex flex-wrap gap-4 md:gap-8 items-center w-full md:w-auto mb-4 md:mb-0">
        <div className="md:hidden w-full relative">
          <button
            onClick={() => toggleFilter("mobile")}
            className="w-full flex justify-between items-center border p-2 uppercase tracking-wide text-sm"
          >
            Filters <ChevronDown size={16} />
          </button>
          {activeFilter === "mobile" && (
            <div className="absolute top-full left-0 w-full bg-white border shadow-lg z-20 p-4 space-y-4">
              <div>
                <div className="font-medium uppercase text-xs tracking-widest mb-2">
                  Availability
                </div>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                  />
                  In Stock only
                </label>
              </div>
              <div>
                <div className="font-medium uppercase text-xs tracking-widest mb-2">
                  Price
                </div>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price-mobile"
                      checked={priceBucket === null}
                      onChange={() => onPriceBucketChange(null)}
                    />
                    Any
                  </label>
                  {Object.entries(bucketLabels).map(([k, lbl]) => (
                    <label
                      key={k}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price-mobile"
                        checked={
                          priceBucket === (k as Exclude<PriceBucket, null>)
                        }
                        onChange={() =>
                          onPriceBucketChange(k as Exclude<PriceBucket, null>)
                        }
                      />
                      {lbl}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium uppercase text-xs tracking-widest mb-2">
                  Color
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {available.colors.map((c) => (
                    <label
                      key={c}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(selectedColors, c)}
                        onChange={() =>
                          onColorsChange(toggleInArray(selectedColors, c))
                        }
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium uppercase text-xs tracking-widest mb-2">
                  Size
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {available.sizes.map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(selectedSizes, s)}
                        onChange={() =>
                          onSizesChange(toggleInArray(selectedSizes, s))
                        }
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium uppercase text-xs tracking-widest mb-2">
                  Fabric
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {available.fabrics.map((f) => (
                    <label
                      key={f}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(selectedFabrics, f)}
                        onChange={() =>
                          onFabricsChange(toggleInArray(selectedFabrics, f))
                        }
                      />
                      {f}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <button
                  className="text-xs uppercase tracking-widest underline"
                  onClick={onClearAll}
                >
                  Clear All
                </button>
                <button
                  className="text-xs uppercase tracking-widest"
                  onClick={() => setActiveFilter(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

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

              {activeFilter === filter && (
                <div className="absolute top-full left-0 mt-3 min-w-56 bg-white border border-gray-200 shadow-xl z-20 p-4 animate-in fade-in zoom-in-95 duration-100 rounded-sm">
                  {filter === "Availability" && (
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.checked)}
                      />
                      In Stock only
                    </label>
                  )}
                  {filter === "Price" && (
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price-desktop"
                          checked={priceBucket === null}
                          onChange={() => onPriceBucketChange(null)}
                        />
                        Any
                      </label>
                      {Object.entries(bucketLabels).map(([k, lbl]) => (
                        <label
                          key={k}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="price-desktop"
                            checked={
                              priceBucket === (k as Exclude<PriceBucket, null>)
                            }
                            onChange={() =>
                              onPriceBucketChange(
                                k as Exclude<PriceBucket, null>
                              )
                            }
                          />
                          {lbl}
                        </label>
                      ))}
                    </div>
                  )}
                  {filter === "Color" && (
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {available.colors.map((c) => (
                        <label
                          key={c}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked(selectedColors, c)}
                            onChange={() =>
                              onColorsChange(toggleInArray(selectedColors, c))
                            }
                          />
                          {c}
                        </label>
                      ))}
                    </div>
                  )}
                  {filter === "Size" && (
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      {available.sizes.map((s) => (
                        <label
                          key={s}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked(selectedSizes, s)}
                            onChange={() =>
                              onSizesChange(toggleInArray(selectedSizes, s))
                            }
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  )}
                  {filter === "Fabric" && (
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {available.fabrics.map((f) => (
                        <label
                          key={f}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked(selectedFabrics, f)}
                            onChange={() =>
                              onFabricsChange(toggleInArray(selectedFabrics, f))
                            }
                          />
                          {f}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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

          {activeFilter === "sort" && (
            <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 shadow-xl z-20 p-4 animate-in fade-in zoom-in-95 duration-100 rounded-sm">
              <p className="text-gray-500 text-xs italic">Select sort...</p>

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
        <button
          className="ml-3 text-xs uppercase tracking-widest underline"
          onClick={onClearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
