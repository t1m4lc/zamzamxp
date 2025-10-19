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
const switchLocalePath = useSwitchLocalePath()

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

// Build hreflang links for all available locales
const hreflangLinks = computed(() => {
  const links = []
  
  // Add link for each locale
  for (const loc of locales.value) {
    const localeCode = typeof loc === 'string' ? loc : loc.code
    const localePath = switchLocalePath(localeCode)
    
    links.push({
      rel: "alternate",
      hreflang: localeCode,
      href: `${baseUrl}${localePath}`,
    })
  }
  
  // Add x-default for English (default locale)
  links.push({
    rel: "alternate",
    hreflang: "x-default",
    href: `${baseUrl}${switchLocalePath('en')}`,
  })
  
  return links
})

// Set dynamic language attribute and SEO links
useHead({
  htmlAttrs: {
    lang: locale,
  },
  link: computed(() => [
    // Canonical URL
    {
      rel: "canonical",
      href: `${baseUrl}${route.path}`,
    },
    // Hreflang tags for multilingual SEO
    ...hreflangLinks.value,
  ]),
})

// Watch for locale changes and update HTML lang attribute
watch(locale, (newLocale) => {
  if (import.meta.client) {
    document.documentElement.setAttribute('lang', newLocale)
  }
})
</script>
