export default defineSitemapEventHandler(() => {
  const urls: any[] = [];

  const countries = [
    { en: "nepal", fr: "nepal", nl: "nepal", es: "nepal" },
    { en: "morocco", fr: "maroc", nl: "marokko", es: "marruecos" },
  ];

  countries.forEach((country) => {
    const uniqueCountries = new Set(Object.values(country));
    uniqueCountries.forEach((countryPath) => {
      urls.push(
        asSitemapUrl({
          loc: `/${countryPath}`,
          lastmod: new Date(),
          changefreq: "weekly",
          priority: 0.95,
        })
      );
    });
  });

  return urls;
});
