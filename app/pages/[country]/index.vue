<template>
  <div>
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

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            v-for="activity in activities"
            :key="activity.title"
            :activity="activity"
          />
        </div>
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

    <!-- Featured Experiences -->
    <section class="py-20 lg:py-24 bg-slate-50" v-if="featuredExperiences && featuredExperiences.length > 0">
      <div class="container mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Featured experiences
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExperienceCard
            v-for="(experience, index) in featuredExperiences"
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
              activity: experience._path?.split('/')[2] || '',
              slug: experience.slug || ''
            }"
          />
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
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'

interface ContentItem {
  title?: string
  description?: string
  price?: number
  duration?: string
  difficulty?: string
  groupSize?: string
  image?: string
  _path?: string
  slug?: string
}

const route = useRoute()
const country = route.params.country as string

// Country-specific data
const countryData: Record<string, any> = {
  nepal: {
    name: 'Nepal',
    description: 'Experience world-class trekking and paragliding adventures in the Himalayas.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&auto=format&fit=crop&q=80',
    activities: [
      {
        title: 'Trekking',
        description: 'Multi-day treks through the Himalayas with stunning mountain views',
        link: '/nepal/trekking',
        image: '/images/nepal-trekking.jpg',
        color: 'orange' as const
      },
      {
        title: 'Paragliding',
        description: 'Soar above valleys with the Annapurna range as your backdrop',
        link: '/nepal/paragliding',
        image: '/images/nepal-paragliding.jpg',
        color: 'sky' as const
      }
    ]
  },
  morocco: {
    name: 'Morocco',
    description: 'Discover Atlantic coast surfing combined with rich Moroccan culture.',
    heroImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&auto=format&fit=crop&q=80',
    activities: [
      {
        title: 'Surfing',
        description: 'Learn to surf or improve your skills on Morocco\'s perfect waves',
        link: '/morocco/surfing',
        image: '/images/morocco-surfing.jpg',
        color: 'sky' as const
      }
    ]
  }
}

const data = countryData[country] || countryData.nepal
const countryName = data.name
const countryDescription = data.description
const heroImage = data.heroImage
const activities = data.activities

// Mock data for featured experiences (to be replaced with proper content system)
const getFeaturedExperiences = (country: string): ContentItem[] => {
  const experienceData: Record<string, ContentItem[]> = {
    nepal: [
      {
        title: "Everest Base Camp Trek",
        description: "Experience the world's most iconic trek. Journey through Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes to reach the foot of Mount Everest.",
        price: 1299,
        duration: "12 Days",
        difficulty: "Challenging",
        groupSize: "6-12 people",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80",
        _path: "/nepal/trekking/everest-base-camp",
        slug: "everest-base-camp"
      },
      {
        title: "Annapurna Circuit Trek",
        description: "Classic high-altitude trek around the Annapurna massif with diverse landscapes and cultures.",
        price: 899,
        duration: "14 Days",
        difficulty: "Challenging",
        groupSize: "6-12 people",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
        _path: "/nepal/trekking/annapurna-circuit",
        slug: "annapurna-circuit"
      },
      {
        title: "Everest Tandem Paragliding",
        description: "Soar above the Himalayas with experienced pilots and witness Mount Everest from the sky.",
        price: 299,
        duration: "1 Day",
        difficulty: "Easy",
        groupSize: "2-4 people",
        image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&auto=format&fit=crop&q=80",
        _path: "/nepal/paragliding/everest-tandem",
        slug: "everest-tandem"
      }
    ],
    morocco: [
      {
        title: "Taghazout Beginner Surf Camp",
        description: "Perfect for first-time surfers. Learn the basics on gentle waves with experienced instructors in Morocco's surf capital.",
        price: 599,
        duration: "7 Days",
        difficulty: "Easy",
        groupSize: "6-10 people",
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=80",
        _path: "/morocco/surfing/taghazout-beginner",
        slug: "taghazout-beginner"
      },
      {
        title: "Taghazout Intermediate Surf Camp",
        description: "Take your surfing to the next level with advanced techniques and bigger waves.",
        price: 699,
        duration: "7 Days",
        difficulty: "Intermediate",
        groupSize: "6-8 people",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        _path: "/morocco/surfing/taghazout-intermediate",
        slug: "taghazout-intermediate"
      },
      {
        title: "Essaouira Culture & Surf",
        description: "Combine surfing lessons with cultural exploration in the historic coastal city of Essaouira.",
        price: 549,
        duration: "5 Days",
        difficulty: "Easy",
        groupSize: "4-8 people",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80",
        _path: "/morocco/surfing/essaouira-culture",
        slug: "essaouira-culture"
      }
    ]
  }
  
  return experienceData[country] || []
}

const featuredExperiences = ref<ContentItem[]>(getFeaturedExperiences(country))

useSeoMeta({
  title: `Adventures in ${countryName}`,
  description: countryDescription,
})
</script>
