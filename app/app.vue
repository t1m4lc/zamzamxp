<template>
    <NuxtLoadingIndicator color="#FF6B35" />
    <Header />
    <NuxtPage />
    <Footer />
    <SpeedInsights />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
// Get route at the top level
const route = useRoute()

// Global SEO configuration
useSeoMeta({
  titleTemplate: "%s | Zamzam Experience",
  ogSiteName: "Zamzam Experience",
  twitterSite: "@zamzamxp", // Update with your actual Twitter handle when available
})

// Set default language and canonical URL
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "canonical",
      href: () => `https://zamzamxp.com${route.path}`,
    },
  ],
})
</script>
