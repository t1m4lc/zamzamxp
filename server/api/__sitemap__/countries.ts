/**
 * Sitemap handler for country pages
 * Generates URLs ONLY for canonical country pages (English versions)
 * The same pages are accessible via translated slugs but should not be in sitemap
 * to avoid duplicate content and redirect issues with Google indexing.
 *
 * Canonical URLs: /nepal, /morocco
 * Accessible but not in sitemap: /maroc, /marokko, /marruecos
 */
export default defineSitemapEventHandler(() => {
  const urls: any[] = [];

  // Only canonical (English) country slugs
  const canonicalCountries = ["nepal", "morocco"];

  // Generate URLs only for canonical country slugs
  canonicalCountries.forEach((countrySlug) => {
    urls.push(
      asSitemapUrl({
        loc: `/${countrySlug}`,
        lastmod: new Date(),
        changefreq: "weekly",
        priority: 0.95, // High priority for country pages
      })
    );
  });

  return urls;
});
