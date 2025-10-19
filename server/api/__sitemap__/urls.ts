/**
 * Legacy sitemap handler - deprecated
 *
 * This file is kept for backwards compatibility but returns an empty array.
 * All sitemap URLs are now handled by dedicated handlers:
 * - activities.ts: Activity pages and listings
 * - blog.ts: Blog posts and blog index
 * - countries.ts: Country landing pages
 */
export default defineSitemapEventHandler(() => {
  // Return empty array as we're using dedicated sitemap sources
  return [];
});
