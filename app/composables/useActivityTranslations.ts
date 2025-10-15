export const useActivityTranslations = () => {
  const { locale } = useI18n();

  // Activity type translations
  const activityTypes: Record<string, { en: string; fr: string }> = {
    trekking: { en: "trekking", fr: "randonnée" },
    paragliding: { en: "paragliding", fr: "parapente" },
    surfing: { en: "surfing", fr: "surf" },
  };

  // Country translations (slug stays the same, but display name changes)
  const countries: Record<string, { en: string; fr: string; slug: string }> = {
    nepal: { en: "Nepal", fr: "Népal", slug: "nepal" },
    morocco: { en: "Morocco", fr: "Maroc", slug: "morocco" },
  };

  /**
   * Get localized activity type slug
   */
  const getActivityTypeSlug = (activityEn: string): string => {
    if (locale.value === "fr") {
      return activityTypes[activityEn]?.fr || activityEn;
    }
    return activityEn;
  };

  /**
   * Get activity type from localized slug
   */
  const getActivityTypeFromSlug = (slug: string): string => {
    if (locale.value === "fr") {
      // Find the English key for the French slug
      for (const [key, value] of Object.entries(activityTypes)) {
        if (value.fr === slug) return key;
      }
    }
    return slug;
  };

  /**
   * Get localized country name
   */
  const getCountryName = (countrySlug: string): string => {
    const country = countries[countrySlug];
    if (!country) return countrySlug;
    return locale.value === "fr" ? country.fr : country.en;
  };

  /**
   * Build activity path with locale-aware slugs
   */
  const buildActivityPath = (
    country: string,
    activityType: string,
    slug: string
  ): string => {
    const localizedActivity = getActivityTypeSlug(activityType);
    return `/${country}/${localizedActivity}/${slug}`;
  };

  /**
   * Build activity type path
   */
  const buildActivityTypePath = (
    country: string,
    activityType: string
  ): string => {
    const localizedActivity = getActivityTypeSlug(activityType);
    return `/${country}/${localizedActivity}`;
  };

  return {
    activityTypes,
    countries,
    getActivityTypeSlug,
    getActivityTypeFromSlug,
    getCountryName,
    buildActivityPath,
    buildActivityTypePath,
  };
};
