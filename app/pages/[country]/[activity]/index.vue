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
            <div v-else class="py-20 text-center">
              <h3 class="mb-2 text-xl font-semibold text-slate-900">No experiences available</h3>
              <p class="text-slate-600">Check back soon for new adventures!</p>
            </div>
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
import { Card } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
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
const activity = route.params.activity as string

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

// Mock data for experiences (to be replaced with proper content system)
const getExperiences = (country: string, activity: string): ContentItem[] => {
  const experienceData: Record<string, Record<string, ContentItem[]>> = {
    nepal: {
      trekking: [
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
          title: "Langtang Valley Trek",
          description: "Beautiful valley trek with stunning mountain views and authentic Tamang culture.",
          price: 699,
          duration: "10 Days",
          difficulty: "Moderate",
          groupSize: "6-12 people",
          image: "https://images.unsplash.com/photo-1486022662195-42e47e8a6cc3?w=800&auto=format&fit=crop&q=80",
          _path: "/nepal/trekking/langtang-valley",
          slug: "langtang-valley"
        }
      ],
      paragliding: [
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
        },
        {
          title: "Pokhara Tandem Paragliding",
          description: "Experience the thrill of paragliding over Pokhara with views of the Annapurna range.",
          price: 149,
          duration: "1 Day",
          difficulty: "Easy",
          groupSize: "2-6 people",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
          _path: "/nepal/paragliding/pokhara-tandem",
          slug: "pokhara-tandem"
        }
      ]
    },
    morocco: {
      surfing: [
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
  }
  
  return experienceData[country]?.[activity] || []
}

const experiences = ref<ContentItem[]>(getExperiences(country, activity))

useSeoMeta({
  title: `${activity.charAt(0).toUpperCase() + activity.slice(1)} in ${countryName}`,
  description: activityDescription,
})
</script>
