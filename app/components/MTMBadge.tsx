"use client";

import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Measurement } from "@/app/data/types";

interface MTMBadgeProps {
  isMTM?: boolean;
  measurementsPending?: boolean;
  measurements?: Measurement[];
  productId?: number;
  compact?: boolean;
}

export default function MTMBadge({
  isMTM,
  measurementsPending,
  measurements,
  productId,
  compact = false,
}: MTMBadgeProps) {
  if (!isMTM) return null;

  if (measurementsPending) {
    return (
      <div className={`${compact ? "inline-flex" : "flex"} items-center gap-2`}>
        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 ${compact ? "" : "flex-shrink-0"}`}>
          <AlertCircle className="w-3 h-3" />
          Measurements Pending
        </span>
        {productId && (
          <Link
            href={`/measurements?productId=${productId}&returnUrl=/cart`}
            className="text-xs text-amber-600 underline hover:text-amber-800 transition-colors"
          >
            Add Now
          </Link>
        )}
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700`}>
      <Check className="w-3 h-3" />
      {compact ? "MTM" : "Measurements Added"}
    </span>
  );
}
