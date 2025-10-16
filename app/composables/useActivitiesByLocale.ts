export const useActivitiesByLocale = () => {
  const { locale } = useI18n();

  /**
   * Mapping from translated URL slugs to English folder names
   * This allows URLs like /maroc/surf (FR) to map to /morocco/surfing folders
   */
  const countryMapping: Record<string, string> = {
    // English
    morocco: "morocco",
    nepal: "nepal",
    // French (no accents in URLs)
    maroc: "morocco",
    // Dutch
    marokko: "morocco",
  };

  const activityMapping: Record<string, string> = {
    // English
    surfing: "surfing",
    trekking: "trekking",
    paragliding: "paragliding",
    // French (no accents in URLs)
    surf: "surfing",
    randonnee: "trekking",
    parapente: "paragliding",
    // Dutch
    surfen: "surfing",
    trekken: "trekking",
  };

  /**
   * Convert translated URL slug to English folder name
   */
  const normalizeCountry = (country: string): string => {
    return countryMapping[country.toLowerCase()] || country;
  };

  /**
   * Convert translated URL slug to English folder name
   */
  const normalizeActivity = (activity: string): string => {
    return activityMapping[activity.toLowerCase()] || activity;
  };

  /**
   * Fetch all activities for the current locale
   */
  const fetchActivities = async () => {
    const allContent = await queryCollection("content").all();
    const activities = allContent.filter((item: any) => {
      return item.path?.includes(`activities/${locale.value}/`);
    });

    return activities;
  };

  /**
   * Fetch activities by country for the current locale
   */
  const fetchActivitiesByCountry = async (country: string) => {
    const normalizedCountry = normalizeCountry(country);

    const allContent = await queryCollection("content").all();
    const activities = allContent.filter((item: any) => {
      return (
        item.country === normalizedCountry &&
        item.path?.includes(`activities/${locale.value}/`)
      );
    });

    return activities;
  };

  /**
   * Fetch activities by country and activity type for the current locale
   */
  const fetchActivitiesByType = async (
    country: string,
    activityType: string
  ) => {
    const normalizedCountry = normalizeCountry(country);
    const normalizedActivity = normalizeActivity(activityType);

    const allContent = await queryCollection("content").all();

    const activities = allContent.filter((item: any) => {
      const matchCountry = item.country === normalizedCountry;
      const matchActivity = item.activity === normalizedActivity;
      const matchLocale = item.path?.includes(`activities/${locale.value}/`);

      return matchCountry && matchActivity && matchLocale;
    });

    return activities;
  };

  /**
   * Fetch a single activity by slug for the current locale
   */
  const fetchActivityBySlug = async (
    country: string,
    activityType: string,
    slug: string
  ) => {
    const normalizedCountry = normalizeCountry(country);
    const normalizedActivity = normalizeActivity(activityType);

    try {
      const allContent = await queryCollection("content").all();

      const activity = allContent.find((item: any) => {
        return (
          item.country === normalizedCountry &&
          item.activity === normalizedActivity &&
          item.path?.includes(`activities/${locale.value}/`) &&
          item.path?.endsWith(`/${slug}`)
        );
      });

      return activity || null;
    } catch (error) {
      console.error(
        `Activity not found: ${country}/${activityType}/${slug} in locale ${locale.value}`,
        error
      );
      return null;
    }
  };

  /**
   * Get available locales for a specific activity path
   * This helps determine which language versions exist for an activity
   */
  const getAvailableLocales = async (
    country: string,
    activityType: string,
    slug: string
  ) => {
    const normalizedCountry = normalizeCountry(country);
    const normalizedActivity = normalizeActivity(activityType);
    const locales = ["en", "fr", "nl"];
    const available: string[] = [];

    const allContent = await queryCollection("content").all();

    for (const loc of locales) {
      const exists = allContent.some((item: any) => {
        return (
          item.country === normalizedCountry &&
          item.activity === normalizedActivity &&
          item.path?.includes(`activities/${loc}/`) &&
          item.path?.endsWith(`/${slug}`)
        );
      });

      if (exists) {
        available.push(loc);
      }
    }

    return available;
  };

  return {
    fetchActivities,
    fetchActivitiesByCountry,
    fetchActivitiesByType,
    fetchActivityBySlug,
    getAvailableLocales,
    normalizeCountry,
    normalizeActivity,
  };
};
