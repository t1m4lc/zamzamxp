/**
 * Sitemap handler for blog pages
 *
 * All blog posts from all locales are included because each has a unique slug:
 * - EN: /blog/surfing-essaouira-complete-guide
 * - FR: /blog/surf-essaouira-guide-complet
 * - ES: /blog/guia-surf-essaouira-completa
 * - NL: /blog/surfen-essaouira-complete-gids
 *
 * These are distinct URLs that should all be indexed by Google.
 */
export default defineSitemapEventHandler(async () => {
  const { readFile, readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const blogDir = join(process.cwd(), "content", "blog");

  try {
    const entries = await readdir(blogDir, { withFileTypes: true });

    // Add all blog post URLs (all locales have unique slugs)
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md")) {
        const filePath = join(blogDir, entry.name);
        const content = await readFile(filePath, "utf-8");
        const slug = entry.name.replace(".md", "");

        // Extract date from frontmatter for lastmod
        const dateMatch = content.match(/date:\s*["']?([^"'\n]+)["']?/);
        const lastmod = dateMatch ? new Date(dateMatch[1]) : new Date();

        urls.push(
          asSitemapUrl({
            loc: `/blog/${slug}`,
            lastmod: lastmod,
            changefreq: "monthly",
            priority: 0.7,
          }),
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
      changefreq: "weekly",
      priority: 0.8,
    }),
  );

  return urls;
});
