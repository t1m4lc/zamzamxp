/**
 * Sitemap handler for blog pages
 * Generates URLs for:
 * - Individual blog posts (e.g., /blog/top-5-trekking-destinations-nepal)
 * - Blog index page (/blog)
 */
export default defineSitemapEventHandler(async () => {
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const blogDir = join(process.cwd(), "content", "blog");

  try {
    const entries = await readdir(blogDir, { withFileTypes: true });

    // Add individual blog post URLs
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md")) {
        const slug = entry.name.replace(".md", "");

        urls.push(
          asSitemapUrl({
            loc: `/blog/${slug}`,
            lastmod: new Date(),
            changefreq: "weekly",
            priority: 0.7,
          })
        );
      }
    }
  } catch (error) {
    console.error("Error reading blog directory:", error);
  }

  // Add blog index page
  urls.push(
    asSitemapUrl({
      loc: "/blog",
      lastmod: new Date(),
      changefreq: "daily",
      priority: 0.9,
    })
  );

  return urls;
});
