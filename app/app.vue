<template>
    <NuxtLoadingIndicator color="#FF6B35" />
    <Header />
    <NuxtPage />
    <Footer />
    <WhatsAppBubble />
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s | Zamzam Experience - Fair Travel with Local Guides',
})
</script>
