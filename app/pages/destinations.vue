<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5"></div>
      <div class="container mx-auto px-6 relative">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl mb-6">
            {{ $t('destinations.title') }}
          </h1>
          <p class="text-xl text-slate-600 mb-8">
            {{ $t('destinations.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Destinations Grid -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Nepal Card -->
          <NuxtLink :to="getCountryPath('nepal')" class="block group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div class="aspect-[4/3] overflow-hidden">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80"
                  alt="Nepal - Himalayan Adventures"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="xs:100vw sm:50vw md:50vw lg:33vw xl:33vw"
                  placeholder
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <h3 class="text-xl font-semibold text-slate-900">{{ $t('countries.nepal') }}</h3>
                </div>
                <p class="text-slate-600 mb-4">
                  {{ $t('destinations.nepalDesc') }}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="activity in nepalData.activities" :key="activity" class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">{{ $t(`activities.${activity.toLowerCase()}`) }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 text-sm">{{ nepalData.count }} {{ $t('destinations.experiences') }}</span>
                  <span class="text-slate-900 font-medium group-hover:translate-x-1 transition-transform">{{ $t('destinations.explore') }} →</span>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Morocco Card -->
          <NuxtLink :to="getCountryPath('morocco')" class="block group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div class="aspect-[4/3] overflow-hidden">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80"
                  alt="Morocco - Atlantic Coast Surfing"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="xs:100vw sm:50vw md:50vw lg:33vw xl:33vw"
                  placeholder
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <h3 class="text-xl font-semibold text-slate-900">{{ $t('countries.morocco') }}</h3>
                </div>
                <p class="text-slate-600 mb-4">
                  {{ $t('destinations.moroccoDesc') }}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="activity in moroccoData.activities" :key="activity" class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">{{ $t(`activities.${activity.toLowerCase()}`) }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 text-sm">{{ moroccoData.count }} {{ $t('destinations.experiences') }}</span>
                  <span class="text-slate-900 font-medium group-hover:translate-x-1 transition-transform">{{ $t('destinations.explore') }} →</span>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Coming Soon Card -->
          <div class="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200">
            <div class="aspect-[4/3] flex items-center justify-center bg-slate-100">
              <div class="text-center p-6">
                <div class="text-5xl mb-4">🌎</div>
                <h3 class="text-xl font-semibold text-slate-500 mb-2">{{ $t('destinations.comingSoon.title') }}</h3>
                <p class="text-slate-400">{{ $t('destinations.comingSoon.subtitle') }}</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-slate-500 mb-4">
                {{ $t('destinations.comingSoon.description') }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-slate-400 text-sm">{{ $t('destinations.comingSoon.expanding') }}</span>
                <span class="text-slate-400 font-medium">{{ $t('destinations.comingSoon.stayTuned') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Destinations Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-4">
            {{ $t('destinations.whyChoose.title') }}
          </h2>
          <p class="text-lg text-slate-600">
            {{ $t('destinations.whyChoose.subtitle') }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Compass class="size-5 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ $t('destinations.whyChoose.expertTitle') }}</h3>
            <p class="text-slate-600">
              {{ $t('destinations.whyChoose.expertDesc') }}
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck class="size-5 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ $t('destinations.whyChoose.safetyTitle') }}</h3>
            <p class="text-slate-600">
              {{ $t('destinations.whyChoose.safetyDesc') }}
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart class="size-5 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ $t('destinations.whyChoose.authenticTitle') }}</h3>
            <p class="text-slate-600">
              {{ $t('destinations.whyChoose.authenticDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-semibold text-slate-900 mb-4">
            {{ $t('destinations.cta.title') }}
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            {{ $t('destinations.cta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as-child
              size="lg"
              class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-8 py-3 text-base font-medium text-white transition-all"
            >
              <NuxtLink to="/contact">
                {{ $t('destinations.cta.planTrip') }}
              </NuxtLink>
            </Button>
            <Button
              as-child
              size="lg"
              variant="outline"
              class="rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <a :href="'https://wa.me/' + APP_CONFIG.company.whatsapp" target="_blank" rel="noopener">
                {{ $t('destinations.cta.whatsapp') }}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/components/ui/card'
import { Compass, ShieldCheck, Heart } from 'lucide-vue-next'
import { APP_CONFIG } from '~/config/constants'

const { getCountryPath } = useLocalizedRoutes()
const { locale } = useI18n()

// Fetch all content to get countries dynamically
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

// Extract countries and count experiences per country based on current locale
const countriesData = computed(() => {
  if (!allContent.value) return []
  
  const content = allContent.value as any[]
  // Filter by current locale first - check if path contains the locale directory
  const localeContent = content.filter((exp: any) => {
    const path = exp.path || exp._path || ''
    // Match patterns like /activities/en/, /activities/fr/, /activities/nl/
    return path.includes(`/activities/${locale.value}/`) || path.includes(`activities/${locale.value}/`)
  })
  
  // Extract unique countries
  const countries = [...new Set(localeContent.map((exp: any) => exp.country))].filter(Boolean)
  
  return countries.map(country => {
    const countryExperiences = localeContent.filter((item: any) => item.country === country)
    const count = countryExperiences.length
    
    // Extract unique activities for this country
    const activities = [...new Set(countryExperiences.map((exp: any) => exp.activity))].filter(Boolean)
    
    return {
      slug: country,
      name: country.charAt(0).toUpperCase() + country.slice(1),
      count,
      activities: activities.map(act => act.charAt(0).toUpperCase() + act.slice(1))
    }
  })
})

// Quick accessors for existing country cards
const nepalData = computed(() => 
  countriesData.value.find(c => c.slug === 'nepal') || { count: 0, activities: [] }
)
const moroccoData = computed(() => 
  countriesData.value.find(c => c.slug === 'morocco') || { count: 0, activities: [] }
)

const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.destinations.title'),
  description: () => t('seo.destinations.description'),
  ogTitle: () => t('seo.destinations.ogTitle'),
  ogDescription: () => t('seo.destinations.ogDescription'),
  ogType: "website",
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineWebPage({
    "@type": "CollectionPage",
    name: "Adventure Destinations",
    description:
      "Browse our collection of adventure travel destinations around the world",
  }),
])
</script>