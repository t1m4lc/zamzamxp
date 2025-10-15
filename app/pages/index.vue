<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section with Globe Background -->
    <section class="relative bg-white overflow-hidden" style="padding-bottom: 250px; padding-top: 40px;">
      <!-- Globe Background - Positioned lower -->
      <div class="absolute left-0 right-0 flex items-end justify-center pointer-events-none" style="top: 35%; transform: translateY(0);">
        <div class="relative w-full h-[600px] lg:h-[800px] max-w-[800px] lg:max-w-[1000px]">
          <Globe class="scale-110 opacity-20" />
        </div>
      </div>

      <!-- Hero Content -->
      <div class="container mx-auto px-6 relative z-10 flex items-start pt-10 lg:pt-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-semibold leading-tight text-slate-900 lg:text-6xl mb-6">
            Travel that's fair for everyone
          </h1>
          <p class="text-xl text-slate-600 mb-8">
            Discover the best adventure experiences with passionate local guides. Pay honest prices. Support sustainable tourism. Real adventures, happy communities.
          </p>
          <Button
            as-child
            size="lg"
            class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-8 py-3 text-base font-medium text-white transition-all shadow-lg hover:shadow-xl"
          >
            <NuxtLink to="/destinations">
              Explore Destinations
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="mb-12 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold text-slate-900 mb-4">
            A Different Kind of Travel Agency
          </h2>
          <p class="text-lg text-slate-600">
            We believe travel should enrich everyone – the traveler, the guide, and the community.
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:handshake" class="h-8 w-8 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Fair for everyone</h3>
            <p class="text-slate-600">
              Local guides get paid fairly. You get honest prices. Everyone wins.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:account-group" class="h-8 w-8 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Passionate locals</h3>
            <p class="text-slate-600">
              Our guides love what they do and can't wait to share it with you.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:leaf" class="h-8 w-8 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Sustainable tourism</h3>
            <p class="text-slate-600">
              Eco-friendly practices that protect the places we love to explore.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="overflow-x-hidden">
      <div class="relative flex w-full flex-col items-center justify-center overflow-x-hidden">

        <div class="mb-12 text-center">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Traveler reviews
          </h2>
          <p class="text-slate-600">
            See what our adventurers have to say
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
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          <Icon name="mdi:star" class="h-3 w-3 text-yellow-500" />
          <span class="text-xs font-medium text-slate-600">{{ member.rating }}</span>
          <span class="text-xs text-slate-400">({{ member.trips }} trips)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-900 mb-2">
              <NumberTicker :value="100" :decimal-places="0" />+
            </div>
            <div class="text-xs md:text-sm text-slate-600">Happy Travelers</div>
          </div>
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-900 mb-2">
              <NumberTicker :value="totalCountries" :decimal-places="0" />
            </div>
            <div class="text-xs md:text-sm text-slate-600">Countries</div>
          </div>
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-900 mb-2">
              <NumberTicker :value="totalActivities" :decimal-places="0" />
            </div>
            <div class="text-xs md:text-sm text-slate-600">Activities</div>
          </div>
          <div class="text-center p-3 md:p-6">
            <div class="text-2xl md:text-4xl font-semibold text-slate-900 mb-2">
              <NumberTicker :value="4.9" :decimal-places="1" />★
            </div>
            <div class="text-xs md:text-sm text-slate-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Explore our destinations
          </h2>
          <p class="text-lg text-slate-600">
            Discover amazing adventures in breathtaking locations around the world
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
                <Icon name="mdi:chevron-right" class="h-4 w-4 md:h-5 md:w-5 text-slate-400 transition-transform group-hover:translate-x-1" />
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
            Ready to start planning?
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            Get in touch with our team to discuss your adventure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              as-child
              size="lg"
              class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-8 py-3 text-base font-medium text-white transition-all shadow-lg hover:shadow-xl"
            >
              <NuxtLink to="/contact">
                Contact Us
              </NuxtLink>
            </Button>
            <Button
              as-child
              size="lg"
              variant="outline"
              class="rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
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
import { Card } from '~/components/ui/card'
import Globe from '~/components/ui/globe/Globe.vue'
import { Marquee } from '~/components/ui/marquee'
import { NumberTicker } from '~/components/ui/number-ticker'

useSeoMeta({
  title: 'Zamzam Experience - Adventure Travel with Fair Prices & Local Guides',
  description: 'A new kind of travel agency connecting you with passionate local guides. Fair prices, sustainable tourism, and authentic adventures in Nepal, Morocco & beyond.',
})

const firstRowReviews = [
  {
    initials: "IT",
    name: "Isabelle Taen",
    location: "France",
    text: "I did the 12-days Manaslu circuit trekking, and it was absolutely spectacular! Stunning views, truly a memory for life. Sandip is an amazing guide, who knows a lot about nature, culture, and the mountains. I always felt safe with him.",
    avatarClass: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    initials: "SR",
    name: "Samuel Rowland-Jones",
    location: "UK",
    text: "We just completed the Annapurna Circuit trek with Tilicho Lake. Sandip was incredible! Every guesthouse he chose exceeded our expectations. He checked in constantly on how we were feeling and paced the trek perfectly.",
    avatarClass: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    initials: "L",
    name: "Lisa",
    location: "Netherlands",
    text: "The Annapurna Circuit including Tilicho Lake was truly once-in-a-lifetime. Sandip made everything smooth and memorable. He knows so much about the area, nature, and history. He always put our safety first and has a great sense of humor!",
    avatarClass: "bg-gradient-to-br from-purple-400 to-purple-600"
  },
]

const secondRowReviews = [
  {
    initials: "MJ",
    name: "Michael Johnson",
    location: "Canada",
    text: "The Everest Base Camp trek was the adventure of a lifetime! Sandip's knowledge of the Khumbu region is exceptional. He paced us perfectly for acclimatization and shared incredible stories about Sherpa culture along the way.",
    avatarClass: "bg-gradient-to-br from-orange-400 to-orange-600"
  },
  {
    initials: "AK",
    name: "Anna Kowalski",
    location: "Poland",
    text: "Standing at Everest Base Camp was surreal! Sandip made sure we were well-prepared and safe throughout the journey. The teahouses were cozy, the views breathtaking, and his enthusiasm was contagious. Highly recommend!",
    avatarClass: "bg-gradient-to-br from-pink-400 to-pink-600"
  },
  {
    initials: "DM",
    name: "David Martinez",
    location: "Spain",
    text: "Everest Base Camp exceeded every expectation! Sandip's attention to detail and care for our wellbeing made all the difference. From Namche Bazaar to Kala Patthar, every moment was unforgettable. A true professional!",
    avatarClass: "bg-gradient-to-br from-teal-400 to-teal-600"
  },
]

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
const totalActivities = computed(() => activities.value?.length || 10)

// Count unique countries (folders in content directory)
const totalCountries = computed(() => {
  if (!activities.value) return 2
  const countries = new Set(activities.value.map((item: any) => item._path?.split('/')[1]).filter(Boolean))
  return countries.size
})

const teamMembers = [
  {
    id: 1,
    name: "Sandip Sodari",
    role: "Nepal Trek Guide",
    image: "/images/pages/sandip-guide.jpeg",
    rating: "5.0",
    trips: 89,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Travel Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    rating: "4.9",
    trips: 44,
  },
  {
    id: 3,
    name: "Hassan Alami",
    role: "Morocco Surf Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: "4.9",
    trips: 156,
  },
  {
    id: 4,
    name: "Maya Chen",
    role: "Adventure Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    rating: "5.0",
    trips: 93,
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
