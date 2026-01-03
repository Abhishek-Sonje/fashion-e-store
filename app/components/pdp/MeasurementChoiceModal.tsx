"use client";

import { X, Ruler, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

interface MeasurementChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  productTitle: string;
  onAddLater: () => void;
}

export default function MeasurementChoiceModal({
  isOpen,
  onClose,
  productId,
  productTitle,
  onAddLater,
}: MeasurementChoiceModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleAddNow = () => {
    // Navigate to measurement page with return URL
    const returnUrl = encodeURIComponent(`/product/${productId}`);
    router.push(`/measurements?productId=${productId}&returnUrl=${returnUrl}`);
    onClose();
  };

  const handleAddLater = () => {
    onAddLater();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-5 border-b border-amber-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-serif font-semibold text-gray-900">
            Made to Measure
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {productTitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600 text-center">
            When would you like to provide your measurements?
          </p>

          {/* Option 1: Add Now */}
          <button
            onClick={handleAddNow}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-xl p-5 text-left transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Add Measurements Now</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Enter your body measurements using our guided visual tool
                </p>
              </div>
            </div>
          </button>

          {/* Option 2: Add Later */}
          <button
            onClick={handleAddLater}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl p-5 text-left transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Add Measurements Later</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Add to cart now and provide measurements during checkout
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            You can also use saved measurements from your profile
          </p>
        </div>
      </div>
    </div>
  );
}
