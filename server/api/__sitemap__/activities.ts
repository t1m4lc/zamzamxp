/**
 * Sitemap handler for activity pages
 * Generates URLs for:
 * - Individual activity pages (e.g., /morocco/trekking/sahara-trek)
 * - Activity type listing pages (e.g., /morocco/trekking)
 */
export default defineSitemapEventHandler(async () => {
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const activityTypesByLocale = new Map<string, Set<string>>();
  const activitiesDir = join(process.cwd(), "content", "activities");

  /**
   * Recursively walks through the activities directory
   * to find all activity markdown files
   */
  async function walkDir(dir: string, basePath: string = "") {
    try {
      const entries = await readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        const relativePath = basePath
          ? `${basePath}/${entry.name}`
          : entry.name;

        if (entry.isDirectory()) {
          await walkDir(fullPath, relativePath);
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
          const pathParts = relativePath.replace(".md", "").split("/");

          // Expected structure: locale/country/activityType/slug
          if (pathParts.length === 4) {
            const locale = pathParts[0];
            const country = pathParts[1];
            const activityType = pathParts[2];
            const slug = pathParts[3];

            // Track activity types for generating listing pages
            const activityTypeKey = `${locale}:${country}/${activityType}`;
            if (!activityTypesByLocale.has(activityTypeKey)) {
              activityTypesByLocale.set(activityTypeKey, new Set());
            }

            // Add individual activity page
            urls.push(
              asSitemapUrl({
                loc: `/${country}/${activityType}/${slug}`,
                lastmod: new Date(),
                changefreq: "monthly",
                priority: 0.8,
              })
            );
          }
        }
      }
    } catch (error) {
      console.error("Error walking activities directory:", error);
    }
  }

  // Scan all activity files
  await walkDir(activitiesDir);

  // Add activity type listing pages
  activityTypesByLocale.forEach((_, activityTypeKey) => {
    const [locale, path] = activityTypeKey.split(":");
    urls.push(
      asSitemapUrl({
        loc: `/${path}`,
        lastmod: new Date(),
        changefreq: "weekly",
        priority: 0.9,
      })
    );
  });

  return urls;
});
