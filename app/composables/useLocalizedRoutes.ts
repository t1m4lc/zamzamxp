/**
 * Composable for handling localized route parameters
 * Maps translated URL slugs to standardized values and vice versa
 */
export const useLocalizedRoutes = () => {
  const { t, locale } = useI18n();

  /**
   * Get the localized slug for a country
   * Example: getCountrySlug('nepal') -> 'nepal' (EN), 'népal' (FR), 'nepal' (NL)
   */
  const getCountrySlug = (countryKey: string): string => {
    return t(`countrySlug.${countryKey}`);
  };

  /**
   * Get the localized slug for an activity
   * Example: getActivitySlug('surfing') -> 'surfing' (EN), 'surf' (FR), 'surfen' (NL)
   */
  const getActivitySlug = (activityKey: string): string => {
    return t(`activitySlug.${activityKey}`);
  };

  /**
   * Generate a localized path for a country page
   * Example: getCountryPath('nepal') -> '/nepal' (EN), '/népal' (FR), '/nepal' (NL)
   */
  const getCountryPath = (countryKey: string): string => {
    return `/${getCountrySlug(countryKey)}`;
  };

  /**
   * Generate a localized path for an activity page
   * Example: getActivityPath('morocco', 'surfing') -> '/morocco/surfing' (EN), '/maroc/surf' (FR)
   */
  const getActivityPath = (countryKey: string, activityKey: string): string => {
    return `/${getCountrySlug(countryKey)}/${getActivitySlug(activityKey)}`;
  };

  /**
   * Generate a localized path for an experience detail page
   */
  const getExperiencePath = (
    countryKey: string,
    activityKey: string,
    slug: string
  ): string => {
    return `/${getCountrySlug(countryKey)}/${getActivitySlug(activityKey)}/${slug}`;
  };

  return {
    getCountrySlug,
    getActivitySlug,
    getCountryPath,
    getActivityPath,
    getExperiencePath,
  };
};
