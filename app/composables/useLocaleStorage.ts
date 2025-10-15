/**
 * Composable to manage locale in localStorage
 * Note: Must be called within a component setup function
 */
export const useLocaleStorage = () => {
  const { locale, setLocale, locales } = useI18n();
  const LOCALE_STORAGE_KEY = "zamzam_locale";

  /**
   * Save locale to localStorage and update i18n
   */
  const saveLocale = (newLocale: "en" | "fr") => {
    if (import.meta.client) {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
    setLocale(newLocale);
  };

  /**
   * Get stored locale from localStorage
   */
  const getStoredLocale = (): string | null => {
    if (import.meta.client) {
      return localStorage.getItem(LOCALE_STORAGE_KEY);
    }
    return null;
  };

  return {
    saveLocale,
    getStoredLocale,
    LOCALE_STORAGE_KEY,
  };
};

/**
 * Initialize locale from localStorage or browser settings
 * This is a standalone function that can be called in plugins
 */
export const initLocaleFromStorage = () => {
  if (!import.meta.client) return "en";

  const LOCALE_STORAGE_KEY = "zamzam_locale";
  const supportedLocales = ["en", "fr"];

  // Try to get from localStorage first
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (storedLocale && supportedLocales.includes(storedLocale)) {
    return storedLocale;
  }

  // Fallback to browser language
  const browserLang = navigator.language?.split("-")[0];

  if (browserLang && supportedLocales.includes(browserLang)) {
    localStorage.setItem(LOCALE_STORAGE_KEY, browserLang);
    return browserLang;
  }

  // Default to English
  localStorage.setItem(LOCALE_STORAGE_KEY, "en");
  return "en";
};
