/**
 * Sitemap handler for activity pages
 * Generates URLs ONLY for canonical (English) activity pages:
 * - Individual activity pages (e.g., /morocco/surfing/taghazout-surf)
 * - Activity type listing pages (e.g., /morocco/surfing)
 *
 * Translated URLs are accessible but not included in sitemap
 * to avoid duplicate content and redirect issues with Google indexing.
 */
export default defineSitemapEventHandler(async () => {
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const activityTypesByEnglish = new Map<string, Set<string>>();
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

            // Only process English locale for sitemap (canonical URLs)
            if (locale === "en") {
              // Track activity types for generating listing pages
              const activityTypeKey = `${country}/${activityType}`;
              if (!activityTypesByEnglish.has(activityTypeKey)) {
                activityTypesByEnglish.set(activityTypeKey, new Set());
              }

              // Add individual activity page (canonical English URL)
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
      }
    } catch (error) {
      console.error("Error walking activities directory:", error);
    }
  }

  // Scan all activity files
  await walkDir(activitiesDir);

  // Add activity type listing pages (canonical English URLs)
  activityTypesByEnglish.forEach((_, path) => {
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
