export default defineSitemapEventHandler(async () => {
  // Dynamically import file system utilities
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const activityTypesByLocale = new Map<string, Set<string>>();

  // Define the content directories
  const activitiesDir = join(process.cwd(), "content", "activities");
  const blogDir = join(process.cwd(), "content", "blog");

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

  // Walk blog directory for blog posts
  async function walkBlogDir(dir: string) {
    try {
      const entries = await readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isFile() && entry.name.endsWith(".md")) {
          // Extract slug from filename
          const slug = entry.name.replace(".md", "");

          // Add blog post URL
          urls.push(
            asSitemapUrl({
              loc: `/blog/${slug}`,
              changefreq: "weekly",
              priority: 0.7,
            })
          );
        }
      }
    } catch (error) {
      console.error("Error walking blog directory:", error);
    }
  }

  // Process activities
  await walkDir(activitiesDir);

  // Process blog posts
  await walkBlogDir(blogDir);

  // Add blog index page
  urls.push(
    asSitemapUrl({
      loc: "/blog",
      changefreq: "daily",
      priority: 0.9,
    })
  );

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
