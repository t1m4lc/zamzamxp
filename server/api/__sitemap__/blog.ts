export default defineSitemapEventHandler(async () => {
  const { readdir } = await import("fs/promises");
  const { join } = await import("path");

  const urls: any[] = [];
  const blogDir = join(process.cwd(), "content", "blog");

  try {
    const entries = await readdir(blogDir, { withFileTypes: true });

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
