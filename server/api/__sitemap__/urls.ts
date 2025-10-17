import { asSitemapUrl, defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
  // Dynamically import file system utilities
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];

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

          if (pathParts.length >= 4) {
            // pathParts: [locale, country, activityType, slug]
            const country = pathParts[1];
            const activityType = pathParts[2];
            const slug = pathParts[3];

            // Build the URL
            const url = `/${country}/${activityType}/${slug}`;

            urls.push(
              asSitemapUrl({
                loc: url,
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

  return urls;
});
