export default defineSitemapEventHandler(async () => {
  // Dynamically import file system utilities
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const activityTypesByLocale = new Map<string, Set<string>>();

  // Define the content directory path
  const contentDir = join(process.cwd(), "content", "activities");

  // Helper function to recursively read directories
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
          // Parse the relative path to extract components
          const pathParts = relativePath.replace(".md", "").split("/");

          if (pathParts.length === 4) {
            // pathParts: [locale, country, activityType, slug]
            const locale = pathParts[0];
            const country = pathParts[1];
            const activityType = pathParts[2];
            const slug = pathParts[3];

            // Build URLs for ALL locales (en, fr, nl)
            // Track activity type pages per locale
            const activityTypeKey = `${locale}:${country}/${activityType}`;
            if (!activityTypesByLocale.has(activityTypeKey)) {
              activityTypesByLocale.set(activityTypeKey, new Set());
            }

            // Add the individual experience page
            const experienceUrl = `/${country}/${activityType}/${slug}`;
            urls.push(
              asSitemapUrl({
                loc: experienceUrl,
                changefreq: "monthly",
                priority: 0.8,
              })
            );
          }
        }
      }
    } catch (error) {
      console.error("Error walking directory:", error);
    }
  }

  await walkDir(contentDir);

  // Add activity type pages (e.g., /morocco/surfing, /maroc/surf, /marokko/surfen)
  activityTypesByLocale.forEach((_, activityTypeKey) => {
    const [locale, path] = activityTypeKey.split(":");
    urls.push(
      asSitemapUrl({
        loc: `/${path}`,
        changefreq: "weekly",
        priority: 0.9,
      })
    );
  });

  return urls;
});
