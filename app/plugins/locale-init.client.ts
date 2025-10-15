/**
 * Plugin to initialize locale from localStorage or browser settings
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) return;

  const i18n = nuxtApp.$i18n as any;
  const LOCALE_STORAGE_KEY = "zamzam_locale";
  const supportedLocales = ["en", "fr"];

  // Try to get from localStorage first
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (storedLocale && supportedLocales.includes(storedLocale)) {
    i18n.setLocale(storedLocale);
    return;
  }

  // Fallback to browser language
  const browserLang = navigator.language?.split("-")[0];

  if (browserLang && supportedLocales.includes(browserLang)) {
    i18n.setLocale(browserLang);
    localStorage.setItem(LOCALE_STORAGE_KEY, browserLang);
    return;
  }

  // Default to English (already set in config, but save to localStorage)
  localStorage.setItem(LOCALE_STORAGE_KEY, "en");
});
