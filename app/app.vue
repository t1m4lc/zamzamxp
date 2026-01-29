<template>
    <NuxtLoadingIndicator color="#FF6B35" />
    <Header />
    <NuxtPage />
    <LazyFooter />
    <!-- <LazyWhatsAppBubble v-if="!isBlogPage" /> -->
    <SpeedInsights />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

// Get route and i18n at the top level
const route = useRoute()
const { locale, locales } = useI18n()

// Check if current page is a blog page
const isBlogPage = computed(() => {
  return route.path.includes('/blog')
})

// Global SEO configuration
useSeoMeta({
  titleTemplate: "%s",
  ogSiteName: "Zamzam Experience",
  ogLocale: computed(() => locale.value),
  ogLocaleAlternate: computed(() => {
    const alternates = locales.value
      .filter((loc) => {
        const code = typeof loc === 'string' ? loc : loc.code
        return code !== locale.value
      })
      .map((loc) => typeof loc === 'string' ? loc : loc.code)
    return alternates
  }),
  // Bing and SEO enhancements
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
})

// Base URL for the site
const baseUrl = "https://zamzamxp.com"

// Set dynamic language attribute and canonical URL
// Note: hreflang tags removed because no_prefix strategy means all locales share the same URL
// This would cause all hreflang tags to point to identical URLs, confusing search engines
useHead({
  htmlAttrs: {
    lang: locale,
  },
  link: computed(() => [
    // Canonical URL - the single authoritative version of this page
    {
      rel: "canonical",
      href: `${baseUrl}${route.path}`,
    },
  ]),
})

// Watch for locale changes and update HTML lang attribute
watch(locale, (newLocale) => {
  if (import.meta.client) {
    document.documentElement.setAttribute('lang', newLocale)
  }
})
</script>
