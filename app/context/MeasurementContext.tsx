"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Measurement, MeasurementProfile, FitPreference, GarmentType } from "@/app/data/types";

const STORAGE_KEY = "mtm_measurement_profiles";

interface MeasurementContextValue {
  // Saved profiles
  profiles: MeasurementProfile[];
  addProfile: (profile: Omit<MeasurementProfile, "id" | "createdAt" | "updatedAt">) => MeasurementProfile;
  updateProfile: (id: string, updates: Partial<Omit<MeasurementProfile, "id" | "createdAt">>) => void;
  deleteProfile: (id: string) => void;
  getProfile: (id: string) => MeasurementProfile | undefined;

  // Current session measurements (temporary, before saving)
  currentMeasurements: Measurement[];
  currentFitPreference: FitPreference;
  currentNotes: string;
  setCurrentMeasurements: (measurements: Measurement[]) => void;
  setCurrentFitPreference: (fit: FitPreference) => void;
  setCurrentNotes: (notes: string) => void;
  clearCurrentMeasurements: () => void;

  // For product-specific MTM flow
  pendingProductId: number | null;
  setPendingProductId: (id: number | null) => void;
  pendingGarmentType: GarmentType | null;
  setPendingGarmentType: (type: GarmentType | null) => void;
}

const MeasurementContext = createContext<MeasurementContextValue | undefined>(undefined);

function generateId(): string {
  return `profile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function MeasurementProvider({ children }: { children: React.ReactNode }) {
  const [profiles, setProfiles] = useState<MeasurementProfile[]>([]);
  const [currentMeasurements, setCurrentMeasurements] = useState<Measurement[]>([]);
  const [currentFitPreference, setCurrentFitPreference] = useState<FitPreference>("regular");
  const [currentNotes, setCurrentNotes] = useState<string>("");
  const [pendingProductId, setPendingProductId] = useState<number | null>(null);
  const [pendingGarmentType, setPendingGarmentType] = useState<GarmentType | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProfiles(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load measurement profiles:", e);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage when profiles change
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
      } catch (e) {
        console.error("Failed to save measurement profiles:", e);
      }
    }
  }, [profiles, isHydrated]);

  const addProfile = useCallback((
    profile: Omit<MeasurementProfile, "id" | "createdAt" | "updatedAt">
  ): MeasurementProfile => {
    const now = new Date().toISOString();
    const newProfile: MeasurementProfile = {
      ...profile,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    setProfiles((prev) => [...prev, newProfile]);
    return newProfile;
  }, []);

  const updateProfile = useCallback((
    id: string,
    updates: Partial<Omit<MeasurementProfile, "id" | "createdAt">>
  ) => {
    setProfiles((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, ...updates, updatedAt: new Date().toISOString() }
          : p
      )
    );
  }, []);

  const deleteProfile = useCallback((id: string) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const getProfile = useCallback((id: string): MeasurementProfile | undefined => {
    return profiles.find((p) => p.id === id);
  }, [profiles]);

  const clearCurrentMeasurements = useCallback(() => {
    setCurrentMeasurements([]);
    setCurrentFitPreference("regular");
    setCurrentNotes("");
    setPendingProductId(null);
    setPendingGarmentType(null);
  }, []);

  const value: MeasurementContextValue = {
    profiles,
    addProfile,
    updateProfile,
    deleteProfile,
    getProfile,
    currentMeasurements,
    currentFitPreference,
    currentNotes,
    setCurrentMeasurements,
    setCurrentFitPreference,
    setCurrentNotes,
    clearCurrentMeasurements,
    pendingProductId,
    setPendingProductId,
    pendingGarmentType,
    setPendingGarmentType,
  };

  return (
    <MeasurementContext.Provider value={value}>
      {children}
    </MeasurementContext.Provider>
  );
}

export function useMeasurements() {
  const ctx = useContext(MeasurementContext);
  if (!ctx) {
    throw new Error("useMeasurements must be used within MeasurementProvider");
  }
  return ctx;
}
