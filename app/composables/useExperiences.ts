export const useExperiences = () => {
  /**
   * Extract unique activities from a list of experiences
   * Path format: "nepal/trekking/annapurna-circuit" or "/nepal/trekking/annapurna-circuit"
   * Extracts: "trekking"
   */
  const extractActivitiesFromExperiences = (experiences: any[]) => {
    const activities = new Set<string>();
    experiences.forEach((exp: any) => {
      if (!exp._path || typeof exp._path !== "string") return;
      const parts = exp._path.split("/").filter(Boolean);
      if (parts.length >= 2 && parts[1]) {
        activities.add(parts[1]);
      }
    });
    return Array.from(activities);
  };

  /**
   * Extract unique countries from a list of experiences
   * Path format: "nepal/trekking/annapurna-circuit" or "/nepal/trekking/annapurna-circuit"
   * Extracts: "nepal"
   */
  const extractCountriesFromExperiences = (experiences: any[]) => {
    const countries = new Set<string>();
    experiences.forEach((exp: any) => {
      if (!exp._path || typeof exp._path !== "string") return;
      const parts = exp._path.split("/").filter(Boolean);
      if (parts.length >= 1 && parts[0]) {
        countries.add(parts[0]);
      }
    });
    return Array.from(countries);
  };

  /**
   * Extract slug from path
   */
  const extractSlug = (path: string) => {
    if (!path || typeof path !== "string") return "";
    const parts = path.split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  };

  /**
   * Extract activity from path
   * Path format: "nepal/trekking/annapurna-circuit" or "/nepal/trekking/annapurna-circuit"
   * Returns: "trekking"
   */
  const extractActivity = (path: string) => {
    if (!path || typeof path !== "string") return "";
    const parts = path.split("/").filter(Boolean);
    return parts.length >= 2 ? parts[1] : "";
  };

  /**
   * Extract country from path
   * Path format: "nepal/trekking/annapurna-circuit" or "/nepal/trekking/annapurna-circuit"
   * Returns: "nepal"
   */
  const extractCountry = (path: string) => {
    if (!path || typeof path !== "string") return "";
    const parts = path.split("/").filter(Boolean);
    return parts.length >= 1 ? parts[0] : "";
  };

  return {
    extractActivitiesFromExperiences,
    extractCountriesFromExperiences,
    extractSlug,
    extractActivity,
    extractCountry,
  };
};
