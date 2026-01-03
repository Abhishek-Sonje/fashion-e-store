"use client";

import { useState } from "react";
import { Edit2, Trash2, Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { 
  MeasurementProfile, 
  Measurement, 
  FitPreference,
  MEASUREMENT_FIELDS 
} from "@/app/data/types";
import FitSlider from "./FitSlider";

interface MeasurementProfileCardProps {
  profile: MeasurementProfile;
  isEditing: boolean;
  onEdit: () => void;
  onCancelEdit: () => void;
  onSave: (updates: Partial<Omit<MeasurementProfile, "id" | "createdAt">>) => void;
  onDelete: () => void;
}

export default function MeasurementProfileCard({
  profile,
  isEditing,
  onEdit,
  onCancelEdit,
  onSave,
  onDelete,
}: MeasurementProfileCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [editName, setEditName] = useState(profile.name);
  const [editFit, setEditFit] = useState<FitPreference>(profile.fitPreference);
  const [editNotes, setEditNotes] = useState(profile.notes || "");
  const [editMeasurements, setEditMeasurements] = useState<Measurement[]>(
    profile.measurements
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleSave = () => {
    onSave({
      name: editName,
      fitPreference: editFit,
      notes: editNotes,
      measurements: editMeasurements,
    });
  };

  const handleMeasurementChange = (fieldId: string, value: number) => {
    setEditMeasurements((prev) => {
      const existing = prev.find((m) => m.fieldId === fieldId);
      if (existing) {
        return prev.map((m) =>
          m.fieldId === fieldId ? { ...m, value } : m
        );
      }
      return [...prev, { fieldId, value, unit: "cm" as const }];
    });
  };

  // Get measurement summary (first 3 fields)
  const measurementSummary = profile.measurements.slice(0, 3);

  if (isEditing) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Name
            </label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fit Preference
            </label>
            <FitSlider value={editFit} onChange={setEditFit} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Measurements
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MEASUREMENT_FIELDS.kurta.slice(0, 6).map((field) => {
                const measurement = editMeasurements.find(
                  (m) => m.fieldId === field.id
                );
                return (
                  <div key={field.id}>
                    <label className="block text-xs text-gray-500 mb-1">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      value={measurement?.value || ""}
                      onChange={(e) =>
                        handleMeasurementChange(
                          field.id,
                          parseFloat(e.target.value) || 0
                        )
                      }
                      placeholder="cm"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes
            </label>
            <textarea
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              placeholder="Any additional notes..."
              rows={2}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={onCancelEdit}
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium text-gray-900">
                {profile.name}
              </h3>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                {profile.fitPreference} fit
              </span>
            </div>
            
            {/* Measurement Summary */}
            {measurementSummary.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-3">
                {measurementSummary.map((m) => {
                  const fieldLabel = MEASUREMENT_FIELDS.kurta.find(
                    (f) => f.id === m.fieldId
                  )?.label || m.fieldId;
                  return (
                    <span
                      key={m.fieldId}
                      className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                    >
                      {fieldLabel}: {m.value} {m.unit}
                    </span>
                  );
                })}
                {profile.measurements.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{profile.measurements.length - 3} more
                  </span>
                )}
              </div>
            )}
            
            <p className="text-xs text-gray-400 mt-3">
              Last updated: {formatDate(profile.updatedAt)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Edit"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expandable Details */}
        {profile.measurements.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-amber-600 hover:text-amber-800 mt-4 transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-3 h-3" />
                Hide all measurements
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3" />
                View all measurements
              </>
            )}
          </button>
        )}

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {profile.measurements.map((m) => {
                const field = MEASUREMENT_FIELDS.kurta.find(
                  (f) => f.id === m.fieldId
                );
                return (
                  <div
                    key={m.fieldId}
                    className="bg-gray-50 rounded-lg px-3 py-2"
                  >
                    <p className="text-xs text-gray-500">
                      {field?.label || m.fieldId}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {m.value} {m.unit}
                    </p>
                  </div>
                );
              })}
            </div>
            {profile.notes && (
              <div className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                <span className="text-xs text-gray-400 block mb-1">Notes:</span>
                {profile.notes}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
