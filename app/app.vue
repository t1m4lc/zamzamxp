<template>
    <NuxtLoadingIndicator color="#FF6B35" />
    <Header />
    <NuxtPage />
    <LazyFooter />
    <LazyWhatsAppBubble v-if="!isBlogPage" />
</template>

<script setup lang="ts">
const route = useRoute()
const { locale, locales } = useI18n()

// Global SEO configuration
useSeoMeta({
  titleTemplate: "%s",
  ogSiteName: "Zamzam Experience",
  ogLocale: computed(() => locale.value),
  ogLocaleAlternate: computed(() => {
    const alternates = locales.value
      .filter((loc: string | { code: string }) => {
        const code = typeof loc === 'string' ? loc : loc.code
        return code !== locale.value
      })
      .map((loc: string | { code: string }) => typeof loc === 'string' ? loc : loc.code)
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

// Detect if we're on a blog page (hide WhatsApp bubble on blog)
const isBlogPage = computed(() => route.path.startsWith('/blog'))
</script>
