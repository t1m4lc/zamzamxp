<template>
  <div>
    <WhatsAppBubble />
    <!-- Breadcrumb -->
    <section class="border-b bg-slate-50 py-6">
      <div class="container mx-auto px-4">
        <div class="flex items-center space-x-2 text-sm text-slate-600">
          <NuxtLink to="/" class="hover:text-orange-600">{{ $t('common.home') }}</NuxtLink>
          <ChevronRight class="h-4 w-4" />
          <NuxtLink :to="getCountryPath(normalizedCountry)" class="hover:text-orange-600">{{ countryName }}</NuxtLink>
          <ChevronRight class="h-4 w-4" />
          <span class="font-semibold text-slate-900">{{ activityName }}</span>
        </div>
      </div>
    </section>

    <!-- Header -->
    <section class="py-16 lg:py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-semibold text-slate-900 lg:text-5xl mb-4">
            {{ $t('activities.title', { activity: activityName, country: countryName }) }}
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
                {{ $t('activities.count', experiences.length) }}
              </h2>
            </div>

            <!-- Experiences Grid -->
            <div v-if="experiences && experiences.length > 0" class="grid gap-6 md:grid-cols-2">
              <ExperienceCard
                v-for="(experience, index) in experiences"
                :key="experience.slug || index"
                :experience="experience"
              />
            </div>

            <!-- Empty State -->
            <Empty v-else class="py-12">
              <EmptyMedia>
                <Mountain class="h-16 w-16 text-slate-400" />
              </EmptyMedia>
              <EmptyContent>
                <EmptyHeader>
                  <EmptyTitle>{{ $t('activities.noExperiences') }}</EmptyTitle>
                  <EmptyDescription>
                    {{ $t('activities.noExperiencesDesc', { activity: activityName, country: countryName }) }}
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
                  {{ $t('experience.needHelp') }}
                </h3>
                <p class="mb-6 text-slate-600">
                  {{ $t('experience.needHelpDesc') }}
                </p>
                <Button
                  as-child
                  size="lg"
                  class="w-full rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl font-medium"
                >
                  <a :href="'https://wa.me/' + APP_CONFIG.company.whatsapp" target="_blank" rel="noopener">
                    <MessageCircle class="mr-2 h-5 w-5" />
                    {{ $t('experience.chatWhatsApp') }}
                  </a>
                </Button>
              </Card>

              <Card class="rounded-xl border border-slate-200 bg-white p-6 mt-6">
                <h4 class="mb-4 font-semibold text-slate-900">{{ $t('experience.included') }}</h4>
                <ul class="space-y-3 text-sm text-slate-600">
                  <li class="flex items-center gap-2">
                    <CheckCircle class="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{{ $t('experience.includedItems.professionalGuides') }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CheckCircle class="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{{ $t('experience.includedItems.smallGroups') }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CheckCircle class="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{{ $t('experience.includedItems.safetyEquipment') }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CheckCircle class="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{{ $t('experience.includedItems.flexibleBooking') }}</span>
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
import { CheckCircle, ChevronRight, MessageCircle, Mountain } from 'lucide-vue-next'
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
import { APP_CONFIG } from '~/config/constants'

const route = useRoute()
const country = route.params.country as string
const activity = route.params.activity as string

const { locale } = useI18n()
const { t } = useI18n()
const { fetchActivitiesByType, normalizeCountry, normalizeActivity } = useActivitiesByLocale()
const { extractSlug } = useExperiences()
const { getCountryPath } = useLocalizedRoutes()

// Normalize URL parameters to English keys for translation lookup
const normalizedCountry = normalizeCountry(country)
const normalizedActivity = normalizeActivity(activity)

// Translate country and activity names using normalized keys
const countryName = computed(() => t(`countries.${normalizedCountry}`))
const activityName = computed(() => t(`activities.${normalizedActivity}`))
const activityDescription = computed(() => t(`activities.noExperiencesDesc`, { 
  activity: activityName.value, 
  country: countryName.value 
}))

// Fetch experiences dynamically from content based on current locale
const { data: experiencesData } = await useAsyncData(
  `${locale.value}-${country}-${activity}-experiences`, 
  () => fetchActivitiesByType(country, activity),
  {
    watch: [locale]
  }
)

const experiences = computed(() => {
  if (!experiencesData.value || !Array.isArray(experiencesData.value)) return []
  
  return experiencesData.value.map((exp: any) => ({
    title: exp.title,
    description: exp.description,
    price: exp.price,
    duration: exp.duration,
    difficulty: exp.difficulty,
    groupSize: exp.groupSize,
    image: exp.image,
    country: normalizedCountry,
    activity: normalizedActivity,
    slug: extractSlug(exp._path || exp.path)
  }))
})

useSeoMeta({
  title: `${activityName.value} Tours in ${countryName.value} | Zamzam Experience`,
  description: `${activityDescription.value} Book authentic ${activityName.value} adventures with expert local guides. Fair prices and sustainable tourism.`,
  ogTitle: `${activityName.value} in ${countryName.value}`,
  ogDescription: activityDescription.value,
  ogType: "website",
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineWebPage({
    "@type": "CollectionPage",
    name: `${activityName.value} in ${countryName.value}`,
    description: activityDescription.value,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: t('common.home'), item: "/" },
      { name: countryName.value, item: `/${country}` },
      { name: activityName.value, item: `/${country}/${activity}` },
    ],
  }),
])
</script>
