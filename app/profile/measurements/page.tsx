"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Check, X } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useMeasurements } from "@/app/context/MeasurementContext";
import MeasurementProfileCard from "@/app/components/measurements/MeasurementProfileCard";
import { MeasurementProfile, FitPreference, MEASUREMENT_FIELDS } from "@/app/data/types";

export default function MyMeasurementsPage() {
  const { profiles, addProfile, updateProfile, deleteProfile } = useMeasurements();
  const [isCreating, setIsCreating] = useState(false);
  const [newProfileName, setNewProfileName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleCreateProfile = () => {
    if (!newProfileName.trim()) return;
    
    addProfile({
      name: newProfileName.trim(),
      measurements: [],
      fitPreference: "regular" as FitPreference,
      notes: "",
    });
    
    setNewProfileName("");
    setIsCreating(false);
  };

  const handleDeleteProfile = (id: string) => {
    if (confirm("Are you sure you want to delete this measurement profile?")) {
      deleteProfile(id);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">
              My Measurements
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Save and manage your body measurements for made-to-measure orders
            </p>
          </div>
          
          {!isCreating && (
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Profile
            </button>
          )}
        </div>

        {/* Create New Profile */}
        {isCreating && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-amber-200">
            <h3 className="text-lg font-medium mb-4">Create New Profile</h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
                placeholder="Profile name (e.g., 'My Regular Fit')"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                autoFocus
              />
              <button
                onClick={handleCreateProfile}
                disabled={!newProfileName.trim()}
                className="px-5 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setNewProfileName("");
                }}
                className="px-5 py-3 border border-gray-200 rounded-xl text-sm hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              After creating, you can add measurements by editing the profile
            </p>
          </div>
        )}

        {/* Profiles List */}
        {profiles.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No saved measurements
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Create your first measurement profile to speed up future made-to-measure orders
            </p>
            <button
              onClick={() => setIsCreating(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create Your First Profile
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {profiles.map((profile) => (
              <MeasurementProfileCard
                key={profile.id}
                profile={profile}
                isEditing={editingId === profile.id}
                onEdit={() => setEditingId(profile.id)}
                onCancelEdit={() => setEditingId(null)}
                onSave={(updates) => {
                  updateProfile(profile.id, updates);
                  setEditingId(null);
                }}
                onDelete={() => handleDeleteProfile(profile.id)}
              />
            ))}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-6">
          <h3 className="font-medium text-amber-800 mb-2">How to use measurement profiles</h3>
          <ul className="text-sm text-amber-700 space-y-2">
            <li>• Create profiles for different fit preferences (Slim, Regular, Relaxed)</li>
            <li>• When ordering made-to-measure items, select a saved profile for quick checkout</li>
            <li>• Update your profiles as needed to ensure the perfect fit every time</li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
