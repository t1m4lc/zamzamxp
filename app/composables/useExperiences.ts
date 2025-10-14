export const useExperiences = () => {
  /**
   * Extract unique activities from a list of experiences
   */
  const extractActivitiesFromExperiences = (experiences: any[]) => {
    const activities = new Set<string>();
    experiences.forEach((exp: any) => {
      if (!exp._path || typeof exp._path !== "string") return;
      const parts = exp._path.split("/");
      if (parts.length >= 3 && parts[2]) {
        activities.add(parts[2]);
      }
    });
    return Array.from(activities);
  };

  /**
   * Extract unique countries from a list of experiences
   */
  const extractCountriesFromExperiences = (experiences: any[]) => {
    const countries = new Set<string>();
    experiences.forEach((exp: any) => {
      if (!exp._path || typeof exp._path !== "string") return;
      const parts = exp._path.split("/");
      if (parts.length >= 2 && parts[1]) {
        countries.add(parts[1]);
      }
    });
    return Array.from(countries);
  };

  /**
   * Extract slug from path
   */
  const extractSlug = (path: string) => {
    if (!path || typeof path !== "string") return "";
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  /**
   * Extract activity from path
   */
  const extractActivity = (path: string) => {
    if (!path || typeof path !== "string") return "";
    const parts = path.split("/");
    return parts.length >= 3 ? parts[2] : "";
  };

  /**
   * Extract country from path
   */
  const extractCountry = (path: string) => {
    if (!path || typeof path !== "string") return "";
    const parts = path.split("/");
    return parts.length >= 2 ? parts[1] : "";
  };

  return {
    extractActivitiesFromExperiences,
    extractCountriesFromExperiences,
    extractSlug,
    extractActivity,
    extractCountry,
  };
};
