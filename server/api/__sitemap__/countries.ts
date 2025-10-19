/**
 * Sitemap handler for country pages
 * Generates URLs for country landing pages in all supported locales
 * Examples: /nepal, /morocco, /maroc, /marokko, /marruecos
 */
export default defineSitemapEventHandler(() => {
  const urls: any[] = [];

  // Country slugs by locale
  const countries = [
    { en: "nepal", fr: "nepal", nl: "nepal", es: "nepal" },
    { en: "morocco", fr: "maroc", nl: "marokko", es: "marruecos" },
  ];

  // Generate URLs for each unique country slug
  countries.forEach((country) => {
    const uniqueCountries = new Set(Object.values(country));

    uniqueCountries.forEach((countryPath) => {
      urls.push(
        asSitemapUrl({
          loc: `/${countryPath}`,
          lastmod: new Date(),
          changefreq: "weekly",
          priority: 0.95, // High priority for country pages
        })
      );
    });
  });

  return urls;
});
