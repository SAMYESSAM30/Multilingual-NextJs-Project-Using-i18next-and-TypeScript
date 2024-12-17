// types/i18next.d.ts
import "react-i18next";

// Add types for translation keys
declare module "react-i18next" {
  interface DefaultTNamespace {
    translation: "translation";
  }

  interface Resources {
    en: typeof import("../locales/en.json");
    ar: typeof import("../locales/ar.json");
  }
}
