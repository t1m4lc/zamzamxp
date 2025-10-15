/**
 * Composable to handle locale-aware routing
 */
export const useLocaleRoutes = () => {
  const { locale } = useI18n();

  /**
   * Route name translations
   * Maps English routes to their translated equivalents
   */
  const routeTranslations: Record<string, Record<string, string>> = {
    about: {
      en: "about",
      fr: "a-propos",
    },
    contact: {
      en: "contact",
      fr: "contact",
    },
    destinations: {
      en: "destinations",
      fr: "destinations",
    },
    terms: {
      en: "terms",
      fr: "conditions",
    },
    privacy: {
      en: "privacy",
      fr: "confidentialite",
    },
  };

  /**
   * Country name translations
   */
  const countryTranslations: Record<string, Record<string, string>> = {
    nepal: {
      en: "nepal",
      fr: "nepal",
    },
    morocco: {
      en: "morocco",
      fr: "maroc",
    },
  };

  /**
   * Activity name translations
   */
  const activityTranslations: Record<string, Record<string, string>> = {
    trekking: {
      en: "trekking",
      fr: "trekking",
    },
    paragliding: {
      en: "paragliding",
      fr: "parapente",
    },
    surfing: {
      en: "surfing",
      fr: "surf",
    },
  };

  /**
   * Get translated route name
   */
  const getLocalizedRoute = (routeKey: string): string => {
    const translations = routeTranslations[routeKey];
    if (!translations) return routeKey;
    return translations[locale.value] || translations["en"] || routeKey;
  };

  /**
   * Get translated country name
   */
  const getLocalizedCountry = (countryKey: string): string => {
    const translations = countryTranslations[countryKey];
    if (!translations) return countryKey;
    return translations[locale.value] || translations["en"] || countryKey;
  };

  /**
   * Get translated activity name
   */
  const getLocalizedActivity = (activityKey: string): string => {
    const translations = activityTranslations[activityKey];
    if (!translations) return activityKey;
    return translations[locale.value] || translations["en"] || activityKey;
  };

  /**
   * Reverse lookup: Get key from localized value
   */
  const getRouteKey = (localizedValue: string): string => {
    for (const [key, translations] of Object.entries(routeTranslations)) {
      if (Object.values(translations).includes(localizedValue)) {
        return key;
      }
    }
    return localizedValue;
  };

  /**
   * Get country key from localized value
   */
  const getCountryKey = (localizedValue: string): string => {
    for (const [key, translations] of Object.entries(countryTranslations)) {
      if (Object.values(translations).includes(localizedValue)) {
        return key;
      }
    }
    return localizedValue;
  };

  /**
   * Get activity key from localized value
   */
  const getActivityKey = (localizedValue: string): string => {
    for (const [key, translations] of Object.entries(activityTranslations)) {
      if (Object.values(translations).includes(localizedValue)) {
        return key;
      }
    }
    return localizedValue;
  };

  /**
   * Build a localized path
   */
  const buildLocalePath = (path: string): string => {
    // Don't add locale prefix for default locale (English)
    if (locale.value === "en") {
      return path;
    }

    // Add locale prefix for non-default locales
    return `/${locale.value}${path}`;
  };

  /**
   * Get content path for current locale
   * Returns 'fr/activities' for French, 'activities' for English
   */
  const getContentPath = (): string => {
    if (locale.value === "fr") {
      return "fr/activities";
    }
    return "activities";
  };

  return {
    getLocalizedRoute,
    getLocalizedCountry,
    getLocalizedActivity,
    getRouteKey,
    getCountryKey,
    getActivityKey,
    buildLocalePath,
    getContentPath,
    routeTranslations,
    countryTranslations,
    activityTranslations,
  };
};
