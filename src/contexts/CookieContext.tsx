"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

interface CookieContextValue {
  isBannerVisible: boolean;
  isSettingsOpen: boolean;
  preferences: CookiePreferences;
  acceptAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const STORAGE_KEY = "amk-cookie-consent";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieContext = createContext<CookieContextValue | null>(null);

function loadStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch {
    return null;
  }
}

export function CookieProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = loadStoredPreferences();
    if (stored) {
      setPreferences(stored);
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);
    }
  }, []);

  const persist = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true, marketing: true });
  }, [persist]);

  const savePreferences = useCallback(
    (prefs: CookiePreferences) => {
      persist({ ...prefs, necessary: true });
    },
    [persist],
  );

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  const value = useMemo(
    () => ({
      isBannerVisible,
      isSettingsOpen,
      preferences,
      acceptAll,
      savePreferences,
      openSettings,
      closeSettings,
    }),
    [
      isBannerVisible,
      isSettingsOpen,
      preferences,
      acceptAll,
      savePreferences,
      openSettings,
      closeSettings,
    ],
  );

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  );
}

export function useCookieConsent(): CookieContextValue {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieProvider");
  }
  return context;
}
