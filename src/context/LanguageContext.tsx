"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Load preferred language from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("xgari_lang") as Language;
    if (saved === "en" || saved === "bn") {
      setLang(saved);
    } else {
      setLang("bn"); // Default to bn for powerful local presence
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "bn" : "en";
      localStorage.setItem("xgari_lang", next);
      return next;
    });
  };

  const updateLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("xgari_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: updateLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
