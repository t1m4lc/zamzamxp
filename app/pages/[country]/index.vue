<template>
  <div>
    <WhatsAppBubble />
    <!-- Breadcrumb -->
    <div class="border-b bg-white">
      <div class="container mx-auto px-6 py-4">
        <nav class="flex items-center space-x-2 text-sm text-slate-600">
          <NuxtLink to="/" class="hover:text-slate-900 transition-colors">Home</NuxtLink>
          <span>›</span>
          <NuxtLink to="/destinations" class="hover:text-slate-900 transition-colors">Destinations</NuxtLink>
          <span>›</span>
          <span class="text-slate-900 font-medium">{{ countryName }}</span>
        </nav>
      </div>
    </div>

    <!-- Hero Section with Image -->
    <section class="relative h-[70vh] min-h-[500px] flex items-center">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <NuxtImg
          :src="heroImage"
          :alt="`Adventures in ${countryName}`"
          class="h-full w-full object-cover"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
          placeholder
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70"></div>
      </div>

      <!-- Content -->
      <div class="container relative mx-auto px-6">
        <div class="max-w-3xl text-white">
          <h1 class="text-5xl font-semibold lg:text-6xl mb-6">
            Adventures in {{ countryName }}
          </h1>
          <p class="text-xl text-white/90">
            {{ countryDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- Activities Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Activities
          </h2>
        </div>

        <div v-if="activities && activities.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            v-for="activity in activities"
            :key="activity.title"
            :activity="activity"
          />
        </div>

        <Empty v-else class="py-12">
          <EmptyMedia>
            <Mountain class="h-16 w-16 text-slate-400" />
          </EmptyMedia>
          <EmptyContent>
            <EmptyHeader>
              <EmptyTitle>No Activities Available</EmptyTitle>
              <EmptyDescription>
                We're working on adding exciting activities for {{ countryName }}. Check back soon for new adventures!
              </EmptyDescription>
            </EmptyHeader>
          </EmptyContent>
        </Empty>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Why travel with us
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Local Experts</h3>
            <p class="text-slate-600">
              Our guides are local experts who know every trail and hidden gem.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Small Groups</h3>
            <p class="text-slate-600">
              Maximum 12 people per group for personalized attention.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Safety First</h3>
            <p class="text-slate-600">
              Licensed, insured, and equipped with comprehensive safety protocols.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-semibold text-slate-900 mb-4">
            Plan your {{ countryName }} adventure
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            Get in touch with our team to discuss your trip.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              as-child
              size="lg"
              class="rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 px-8 py-3 text-base font-medium text-white hover:from-rose-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              <NuxtLink to="/contact">
                Contact Us
              </NuxtLink>
            </Button>
            <Button
              as-child
              size="lg"
              variant="outline"
              class="rounded-lg border-2 border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              <a :href="`https://wa.me/${APP_CONFIG.company.whatsapp}`" target="_blank" rel="noopener">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { 
  Empty, 
  EmptyContent, 
  EmptyDescription, 
  EmptyHeader, 
  EmptyMedia, 
  EmptyTitle 
} from '~/components/ui/empty'
import { Mountain } from 'lucide-vue-next'

const route = useRoute()
const country = route.params.country as string

const { 
  extractSlug
} = useExperiences()

// Country-specific static data (keep for images and descriptions)
const countryData: Record<string, any> = {
  nepal: {
    name: 'Nepal',
    description: 'Experience world-class trekking and paragliding adventures in the Himalayas.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&auto=format&fit=crop&q=80',
    activityDescriptions: {
      trekking: 'Multi-day treks through the Himalayas with stunning mountain views',
      paragliding: 'Soar above valleys with the Annapurna range as your backdrop'
    },
    activityImages: {
      trekking: '/images/activities/nepal/trekking/nepal-trekking.jpg',
      paragliding: '/images/activities/nepal/paragliding/pokhara-paragliding-tandem.jpg'
    }
  },
  morocco: {
    name: 'Morocco',
    description: 'Discover Atlantic coast surfing combined with rich Moroccan culture.',
    heroImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&auto=format&fit=crop&q=80',
    activityDescriptions: {
      surfing: 'Learn to surf or improve your skills on Morocco\'s perfect waves'
    },
    activityImages: {
      surfing: '/images/activities/morocco/surfing/morocco-surfing.jpg'
    }
  }
}

import { APP_CONFIG } from '~/config/constants'

const data = countryData[country] || countryData.nepal
const countryName = data.name
const countryDescription = data.description
const heroImage = data.heroImage

// Fetch activities dynamically from content
const { data: activityList } = await useAsyncData(`${country}-activities`, async () => {
  try {
    // Query all experiences for this country using metadata
    const allExperiences = await queryCollection('content').all()
    const experiences = allExperiences.filter((exp: any) => exp.country === country)
    
    // Extract unique activities from the experiences
    const activities = [...new Set(experiences.map((exp: any) => exp.activity))].filter(Boolean)
    return activities
  } catch (error) {
    console.error('Error fetching activities:', error)
    return []
  }
})

// Build activities array with dynamic data
const activities = computed(() => {
  if (!activityList.value || activityList.value.length === 0) return []
  
  return activityList.value.map((activity: string) => ({
    title: activity.charAt(0).toUpperCase() + activity.slice(1),
    description: data.activityDescriptions?.[activity] || `Explore ${activity} adventures`,
    link: `/${country}/${activity}`,
    image: data.activityImages?.[activity] || '/images/default-activity.jpg',
    color: activity === 'trekking' ? 'orange' as const : 'sky' as const
  }))
})

useSeoMeta({
  title: `${countryName} Adventure Travel & Tours | Zamzam Experience`,
  description: `${countryDescription} Fair prices, expert local guides, and sustainable tourism in ${countryName}.`,
  ogTitle: `Adventures in ${countryName} | Zamzam Experience`,
  ogDescription: countryDescription,
  ogType: "website",
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineWebPage({
    "@type": "CollectionPage",
    name: `Adventures in ${countryName}`,
    description: countryDescription,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: "Home", item: "/" },
      { name: "Destinations", item: "/destinations" },
      { name: countryName, item: `/${country}` },
    ],
  }),
])
</script>
