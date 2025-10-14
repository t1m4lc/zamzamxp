<template>
  <div>
    <!-- Breadcrumb -->
    <section class="border-b bg-slate-50 py-6">
      <div class="container mx-auto px-4">
        <div class="flex items-center space-x-2 text-sm text-slate-600">
          <NuxtLink to="/" class="hover:text-orange-600">Home</NuxtLink>
          <Icon name="mdi:chevron-right" class="h-4 w-4" />
          <NuxtLink :to="`/${country}`" class="hover:text-orange-600 capitalize">{{ country }}</NuxtLink>
          <Icon name="mdi:chevron-right" class="h-4 w-4" />
          <span class="font-semibold text-slate-900 capitalize">{{ activity }}</span>
        </div>
      </div>
    </section>

    <!-- Header -->
    <section class="py-16 lg:py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-semibold text-slate-900 lg:text-5xl mb-4 capitalize">
            {{ activity }} in {{ countryName }}
          </h1>
          <p class="text-lg text-slate-600">
            {{ activityDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- Experiences Grid -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="mb-8" v-if="experiences && experiences.length > 0">
              <h2 class="text-2xl font-semibold text-slate-900">
                {{ experiences.length }} {{ experiences.length === 1 ? 'experience' : 'experiences' }}
              </h2>
            </div>

            <!-- Experiences Grid -->
            <div v-if="experiences && experiences.length > 0" class="grid gap-6 md:grid-cols-2">
              <ExperienceCard
                v-for="(experience, index) in experiences"
                :key="experience.slug || index"
                :experience="{
                  title: experience.title || '',
                  description: experience.description || '',
                  price: experience.price || 0,
                  duration: experience.duration || '',
                  difficulty: experience.difficulty || '',
                  groupSize: experience.groupSize || '',
                  image: experience.image || '',
                  country: country,
                  activity: activity,
                  slug: experience.slug || ''
                }"
              />
            </div>

            <!-- Empty State -->
            <Empty v-else class="py-12">
              <EmptyMedia>
                <Icon :name="getActivityIcon(activity)" class="h-16 w-16 text-slate-400" />
              </EmptyMedia>
              <EmptyContent>
                <EmptyHeader>
                  <EmptyTitle>No Experiences Yet</EmptyTitle>
                  <EmptyDescription>
                    We're currently adding {{ activity }} experiences in {{ countryName }}. Check back soon for exciting new adventures!
                  </EmptyDescription>
                </EmptyHeader>
              </EmptyContent>
            </Empty>
          </div>

          <!-- Sidebar CTA -->
          <div class="lg:col-span-1">
            <div class="sticky top-24">
              <Card class="rounded-xl border border-slate-200 p-8 bg-slate-50">
                <h3 class="mb-3 text-xl font-semibold text-slate-900">
                  Need help choosing?
                </h3>
                <p class="mb-6 text-slate-600">
                  Not sure which adventure is right for you? Our team can help.
                </p>
                <Button
                  as-child
                  size="lg"
                  class="w-full rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl font-medium"
                >
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
                    <Icon name="mdi:whatsapp" class="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </Card>

              <Card class="rounded-xl border border-slate-200 bg-white p-6 mt-6">
                <h4 class="mb-4 font-semibold text-slate-900">What's included</h4>
                <ul class="space-y-3 text-sm text-slate-600">
                  <li class="flex items-start space-x-2">
                    <Icon name="mdi:check-circle" class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Professional guides included</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <Icon name="mdi:check-circle" class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Small group sizes (max 12)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <Icon name="mdi:check-circle" class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>All safety equipment provided</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <Icon name="mdi:check-circle" class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Flexible booking & cancellation</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { 
  Empty, 
  EmptyContent, 
  EmptyDescription, 
  EmptyHeader, 
  EmptyMedia, 
  EmptyTitle 
} from '~/components/ui/empty'

const route = useRoute()
const country = route.params.country as string
const activity = route.params.activity as string

const { 
  extractSlug 
} = useExperiences()

// Activity-specific data
const activityData: Record<string, any> = {
  trekking: {
    description: 'Multi-day treks through pristine mountain landscapes with experienced guides'
  },
  paragliding: {
    description: 'Soar above breathtaking landscapes with certified tandem pilots'
  },
  surfing: {
    description: 'Learn to surf or improve your skills on perfect Atlantic waves'
  }
}

const data = activityData[activity] || activityData.trekking
const activityDescription = data.description

const countryName = country.charAt(0).toUpperCase() + country.slice(1)

// Helper function to get icon based on activity
const getActivityIcon = (activityType: string) => {
  const icons: Record<string, string> = {
    trekking: 'mdi:hiking',
    paragliding: 'mdi:paragliding',
    surfing: 'mdi:surfing',
    climbing: 'mdi:climbing',
    skiing: 'mdi:ski'
  }
  return icons[activityType] || 'mdi:map-marker-path'
}

// Fetch experiences dynamically from content
const { data: experiencesData } = await useAsyncData(`${country}-${activity}-experiences`, async () => {
  const allExperiences = await queryCollection('content').all()
  
  // Filter by country and activity using metadata fields
  return allExperiences.filter((exp: any) => 
    exp.country === country && exp.activity === activity
  )
})

const experiences = computed(() => {
  if (!experiencesData.value) return []
  
  return experiencesData.value.map((exp: any) => ({
    title: exp.title,
    description: exp.description,
    price: exp.price,
    duration: exp.duration,
    difficulty: exp.difficulty,
    groupSize: exp.groupSize,
    image: exp.image,
    country: country,
    activity: activity,
    slug: extractSlug(exp.path)
  }))
})

const activityTitle = activity.charAt(0).toUpperCase() + activity.slice(1)

useSeoMeta({
  title: `${activityTitle} Tours in ${countryName} | Zamzam Experience`,
  description: `${activityDescription} Book authentic ${activity} adventures with expert local guides. Fair prices and sustainable tourism.`,
  ogTitle: `${activityTitle} in ${countryName}`,
  ogDescription: activityDescription,
  ogType: "website",
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineWebPage({
    "@type": "CollectionPage",
    name: `${activityTitle} in ${countryName}`,
    description: activityDescription,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: "Home", item: "/" },
      { name: countryName, item: `/${country}` },
      { name: activityTitle, item: `/${country}/${activity}` },
    ],
  }),
])
</script>
