// i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"; // English translations
import ar from "./locales/ar.json"; // Arabic translations

i18next.use(initReactI18next).init({
  lng: "en", // default language
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  interpolation: {
    escapeValue: false, // not needed for React
  },
});

export default i18next;
