"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export const ACCENTS = [
  { name: "Green", hex: "#4ade80" },
  { name: "Blue", hex: "#7dd3fc" },
  { name: "Amber", hex: "#f5b94a" },
  { name: "Violet", hex: "#c4b5fd" },
] as const;

const STORAGE_KEY = "vansh-accent";

type AccentContextValue = { accent: string; setAccent: (hex: string) => void };

const AccentContext = createContext<AccentContextValue>({
  accent: ACCENTS[0].hex,
  setAccent: () => {},
});

/** Holds the visitor's chosen accent colour and writes it to the --accent CSS variable. */
export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<string>(ACCENTS[0].hex);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && ACCENTS.some((a) => a.hex === saved)) setAccentState(saved);
    } catch {
      /* storage unavailable: keep the default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  const setAccent = useCallback((hex: string) => {
    setAccentState(hex);
    try {
      window.localStorage.setItem(STORAGE_KEY, hex);
    } catch {
      /* ignore */
    }
  }, []);

  return <AccentContext.Provider value={{ accent, setAccent }}>{children}</AccentContext.Provider>;
}

export const useAccent = () => useContext(AccentContext);
