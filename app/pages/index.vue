<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section with Globe Background -->
    <section class="relative bg-gradient-to-b from-slate-50 to-white" style="padding-bottom: 350px; padding-top: 40px;">
      <!-- Globe Background - Positioned lower -->
      <div class="absolute left-0 right-0 flex items-end justify-center pointer-events-none" style="top: 35%; transform: translateY(0);">
        <div class="relative w-full h-[700px] lg:h-[900px] max-w-[900px] lg:max-w-[1100px]">
          <Globe />
        </div>
      </div>

      <!-- Hero Content -->
      <div class="container mx-auto px-6 relative z-10 flex items-start pt-10 lg:pt-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-semibold leading-tight text-slate-900 lg:text-6xl mb-6">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="text-xl text-slate-600 mb-8">
            {{ $t('home.hero.subtitle') }}
          </p>
          <Button
            as-child
            size="lg"
            class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-8 py-3 text-base font-medium text-white transition-all shadow-lg hover:shadow-xl"
          >
            <NuxtLink to="/destinations">
              {{ $t('home.hero.cta') }}
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-6 lg:py-12">
      <div class="container mx-auto px-6">
        <div class="mb-12 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold text-slate-900 mb-4">
            {{ $t('home.tagline') }}
          </h2>
          <p class="text-lg text-slate-600">
            {{ $t('home.taglineDesc') }}
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake class="size-6 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ $t('home.fairForEveryone') }}</h3>
            <p class="text-slate-600">
              {{ $t('home.fairForEveryoneDesc') }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users class="size-6 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ $t('home.passionateLocals') }}</h3>
            <p class="text-slate-600">
              {{ $t('home.passionateLocalsDesc') }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf class="size-6 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ $t('home.sustainableTourism') }}</h3>
            <p class="text-slate-600">
              {{ $t('home.sustainableTourismDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="overflow-x-hidden pt-12">
      <div class="relative flex w-full flex-col items-center justify-center overflow-x-hidden">

        <div class="mb-12 text-center">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            {{ $t('home.testimonials') }}
          </h2>
          <p class="text-slate-600">
            {{ $t('home.testimonialsDesc') }}
          </p>
        </div>

        <Marquee :pause-on-hover="true" class="[--duration:30s] mb-6">
          <Card v-for="review in firstRowReviews" :key="review.initials" class="mx-3 w-[350px] p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <div :class="[review.avatarClass, 'w-12 h-12 rounded-full flex items-center justify-center font-medium text-white']">
                {{ review.initials }}
              </div>
              <div class="ml-3">
                <div class="font-medium text-slate-900">{{ review.name }}</div>
                <div class="text-sm text-slate-500">{{ review.location }}</div>
              </div>
            </div>
            <p class="text-slate-600">
              {{ review.text }}
            </p>
          </Card>
        </Marquee>

        <Marquee :pause-on-hover="true" :reverse="true" class="[--duration:30s]">
          <Card v-for="review in secondRowReviews" :key="review.initials" class="mx-3 w-[350px] p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <div :class="[review.avatarClass, 'w-12 h-12 rounded-full flex items-center justify-center font-medium text-white']">
                {{ review.initials }}
              </div>
              <div class="ml-3">
                <div class="font-medium text-slate-900">{{ review.name }}</div>
                <div class="text-sm text-slate-500">{{ review.location }}</div>
              </div>
            </div>
            <p class="text-slate-600">
              {{ review.text }}
            </p>
          </Card>
        </Marquee>
      </div>
    </section>

    <!-- Team/Partners Section -->
    <section class="py-20 lg:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Super Passionate Guides
          </h2>
          <p class="text-lg text-slate-600">
            Meet the passionate locals who'll make your journey unforgettable
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6">
          <div 
            v-for="member in teamMembers" 
            :key="member.id" 
            class="group relative w-[calc(50%-12px)] md:w-1/3 lg:w-1/6"
          >
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-1 hover:scale-105 transition-all duration-300">
              <div class="relative aspect-square overflow-hidden rounded-xl bg-white">
          <NuxtImg 
            :src="member.image" 
            :alt="member.name"
            class="h-full w-full grayscale hover:grayscale-0  object-cover transition-all duration-500 group-hover:scale-110"
            sizes="xs:50vw sm:50vw md:33vw lg:16vw xl:16vw"
            placeholder
            loading="lazy"
          />
              </div>
            </div>
            
            <!-- Info Card -->
            <div class="mt-3 text-center">
              <h3 class="font-semibold text-slate-900 text-sm">{{ member.name }}</h3>
              <p class="text-xs text-slate-500 mb-1">{{ member.role }}</p>
              <div class="flex items-center justify-center gap-1">
          <Star class="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span class="text-xs font-medium text-slate-600">{{ member.rating }}</span>
          <span class="text-xs text-slate-400">({{ member.reviews }} {{ $t('home.stats.reviews') }})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-800 mb-2">
              <NumberTicker :value="100" :decimal-places="0" />+
            </div>
            <div class="text-xs md:text-sm text-slate-600">{{ $t('home.stats.happyTravelers') }}</div>
          </div>
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-800 mb-2">
              <NumberTicker :value="totalCountries" :decimal-places="0" />
            </div>
            <div class="text-xs md:text-sm text-slate-600">{{ $t('home.stats.countries') }}</div>
          </div>
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-800 mb-2">
              <NumberTicker :value="totalActivities" :decimal-places="0" />
            </div>
            <div class="text-xs md:text-sm text-slate-600">{{ $t('home.stats.activities') }}</div>
          </div>
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-800 mb-2">
              <NumberTicker :value="4.9" :decimal-places="1" />★
            </div>
            <div class="text-xs md:text-sm text-slate-600">{{ $t('home.stats.averageRating') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            {{ $t('home.destinationsSection.title') }}
          </h2>
          <p class="text-lg text-slate-600">
            {{ $t('home.destinationsSection.subtitle') }}
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-3 md:gap-6 max-w-4xl mx-auto">
          <NuxtLink 
            v-for="destination in destinations" 
            :key="destination.name"
            :to="destination.link"
            class="group relative overflow-hidden rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center gap-2 md:gap-4 px-2 md:px-3 py-2 md:py-3 pr-4 md:pr-8">
              <!-- Country Flag Emoji -->
              <div class="w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-50 text-2xl md:text-4xl">
                {{ destination.flag }}
              </div>
              <!-- Country Name -->
              <div class="flex items-center gap-1 md:gap-2">
                <span class="font-semibold text-slate-900 text-base md:text-lg">{{ destination.name }}</span>
                <ChevronRight class="h-4 w-4 md:h-5 md:w-5 text-slate-400 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-semibold text-slate-900 mb-4">
            {{ $t('home.finalCta.title') }}
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            {{ $t('home.finalCta.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              as-child
              size="lg"
              class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-8 py-3 text-base font-medium text-white transition-all shadow-lg hover:shadow-xl"
            >
              <NuxtLink to="/contact">
                {{ $t('home.finalCta.contactUs') }}
              </NuxtLink>
            </Button>
            <Button
              as-child
              size="lg"
              variant="outline"
              class="rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <a :href="`https://wa.me/${APP_CONFIG.company.whatsapp}`" target="_blank" rel="noopener">
                {{ $t('home.finalCta.whatsapp') }}
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
import { Card } from '~/components/ui/card'
import Globe from '~/components/ui/globe/Globe.vue'
import { Marquee } from '~/components/ui/marquee'
import { NumberTicker } from '~/components/ui/number-ticker'
import { APP_CONFIG } from '~/config/constants'
import { Handshake, Users, Leaf, ChevronRight, Star } from 'lucide-vue-next'

const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.home.title'),
  description: () => t('seo.home.description'),
})

const firstRowReviews = computed(() => [
  {
    initials: "IT",
    name: "Isabelle Taen",
    location: "France",
    text: t('home.reviews.isabelle'),
    avatarClass: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    initials: "SR",
    name: "Samuel Rowland-Jones",
    location: "UK",
    text: t('home.reviews.samuel'),
    avatarClass: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    initials: "L",
    name: "Lisa",
    location: "Netherlands",
    text: t('home.reviews.lisa'),
    avatarClass: "bg-gradient-to-br from-purple-400 to-purple-600"
  },
])

const secondRowReviews = computed(() => [
  {
    initials: "MJ",
    name: "Michael Johnson",
    location: "Canada",
    text: t('home.reviews.michael'),
    avatarClass: "bg-gradient-to-br from-orange-400 to-orange-600"
  },
  {
    initials: "AK",
    name: "Anna Kowalski",
    location: "Poland",
    text: t('home.reviews.anna'),
    avatarClass: "bg-gradient-to-br from-pink-400 to-pink-600"
  },
  {
    initials: "DM",
    name: "David Martinez",
    location: "Spain",
    text: t('home.reviews.david'),
    avatarClass: "bg-gradient-to-br from-teal-400 to-teal-600"
  },
])

// Count activities and countries dynamically from content
const { data: activities } = await useAsyncData('activities-count', async () => {
  try {
    const allContent = await queryCollection('content').all()
    // Transform path to _path for compatibility
    return allContent.map((item: any) => ({ ...item, _path: item.path }))
  } catch (error) {
    console.error('Error loading activities:', error)
    return []
  }
})
const totalActivities = computed(() => (activities.value?.length || 3) / totalCountries.value)

const totalCountries = computed(() => {
    return 2
})

const teamMembers = [
  {
    id: 1,
    name: "Sandip Sodari",
    role: "Nepal Trek Guide",
    image: "/images/pages/sandip-guide.jpeg",
    rating: "5.0",
    reviews: 89,
  },
    {
    id: 3,
    name: "Hassan Alami",
    role: "Morocco Surf Instructor",
    image: "/images/pages/hassan-alami-morocco-surf-instructor.jpg",
    rating: "4.9",
    reviews: 156,
  },
  {
    id: 2,
    name: "Biswash Gurung",
    role: "Paragliding Instructor",
    image: "/images/pages/biswash-gurung-paragliding.png",
    rating: "4.9",
    reviews: 44,
  },
  {
    id: 4,
    name: "Mohammed Sahli",
    role: "Morocco Surf Instructor",
    image: "/images/pages/mohammed-sahli-morocco-surf-instructor.jpg",
    rating: "5.0",
    reviews: 8,
  },
 
]

const destinations = [
  {
    name: "Nepal",
    flag: "🇳🇵",
    image: "/images/pages/nepal-hero.jpg",
    link: "/nepal"
  },
  {
    name: "Morocco",
    flag: "🇲🇦",
    image: "/images/pages/morocco-hero.jpg",
    link: "/morocco"
  }
]

useSeoMeta({
  title: "Fair Adventure Travel with Local Guides | Zamzam Experience",
  description:
    "Discover authentic adventure experiences with passionate local guides. Fair prices, sustainable tourism, and unforgettable trekking, paragliding, and surfing adventures worldwide.",
  ogTitle: "Fair Adventure Travel with Local Guides | Zamzam Experience",
  ogDescription:
    "Travel that's fair for everyone. Expert-guided adventure tours with honest pricing and sustainable tourism practices.",
  ogImage: "/images/og-home.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Fair Adventure Travel with Local Guides | Zamzam Experience",
  twitterDescription:
    "Discover authentic adventures with local guides. Fair prices, sustainable tourism.",
  twitterImage: "/images/og-home.jpg",
})

defineOgImageComponent("NuxtSeo", {
  title: "Zamzam Experience",
  description: "Travel that's fair for everyone",
  theme: "#FF6B35",
})
</script>
