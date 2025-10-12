<template>
  <div>
    <!-- Hero Section with Aurora Background -->
    <AuroraBackground class="min-h-screen flex items-center">
      <section class="relative py-24 lg:py-32 w-full">
        <div class="container mx-auto px-6">
          <div class="max-w-2xl">
            <h1 class="text-5xl font-semibold leading-tight text-slate-900 lg:text-6xl mb-6">
              Discover unforgettable adventures around the world
            </h1>
            <p class="text-xl text-slate-600 mb-8">
              Expertly curated experiences for adventurous travelers seeking authentic connections with nature and culture.
            </p>
            <Button
              as-child
              size="lg"
              class="rounded-lg bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              <NuxtLink to="/destinations">
                Explore Destinations
              </NuxtLink>
            </Button>
          </div>
        </div>
      </section>
    </AuroraBackground>

    <!-- Destinations Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Explore destinations
          </h2>
          <p class="text-lg text-slate-600">
            Handpicked locations for your next adventure
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Nepal Card -->
          <NuxtLink to="/nepal" class="block group">
            <div class="relative">
              <div class="aspect-square overflow-hidden rounded-2xl mb-3">
                <NuxtImg
                  src="/images/nepal-hero.jpg"
                  alt="Nepal Adventures"
                  class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div class="space-y-1">
                <h3 class="text-lg font-semibold text-slate-900">Nepal</h3>
                <p class="text-sm text-slate-600">Himalayan trekking & paragliding</p>
                <p class="text-sm text-slate-500">From $799</p>
              </div>
            </div>
          </NuxtLink>

          <!-- Morocco Card -->
          <NuxtLink to="/morocco" class="block group">
            <div class="relative">
              <div class="aspect-square overflow-hidden rounded-2xl mb-3">
                <NuxtImg
                  src="/images/morocco-hero.jpg"
                  alt="Morocco Adventures"
                  class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div class="space-y-1">
                <h3 class="text-lg font-semibold text-slate-900">Morocco</h3>
                <p class="text-sm text-slate-600">Atlantic surfing & culture</p>
                <p class="text-sm text-slate-500">From $599</p>
              </div>
            </div>
          </NuxtLink>
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
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Local expertise</h3>
            <p class="text-slate-600">
              Our guides are local experts who know every trail and hidden gem.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Small groups</h3>
            <p class="text-slate-600">
              Maximum 12 people per group for personalized attention.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Safety first</h3>
            <p class="text-slate-600">
              Licensed, insured, and equipped with comprehensive safety protocols.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Traveler reviews
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card class="p-6 bg-white border border-slate-200 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700">
                SJ
              </div>
              <div class="ml-3">
                <div class="font-medium text-slate-900">Sarah Johnson</div>
                <div class="text-sm text-slate-500">USA</div>
              </div>
            </div>
            <p class="text-slate-600">
              The Everest Base Camp trek was life-changing. Our guide was incredible and the views were beyond words.
            </p>
          </Card>
          <Card class="p-6 bg-white border border-slate-200 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700">
                MS
              </div>
              <div class="ml-3">
                <div class="font-medium text-slate-900">Marco Silva</div>
                <div class="text-sm text-slate-500">Brazil</div>
              </div>
            </div>
            <p class="text-slate-600">
              Learning to surf in Taghazout was amazing. The instructors were patient and I made friends for life.
            </p>
          </Card>
          <Card class="p-6 bg-white border border-slate-200 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-700">
                EC
              </div>
              <div class="ml-3">
                <div class="font-medium text-slate-900">Emma Clarke</div>
                <div class="text-sm text-slate-500">UK</div>
              </div>
            </div>
            <p class="text-slate-600">
              Paragliding over Pokhara with the Annapurnas in view was absolutely breathtaking. Professional team.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Team/Partners Section -->
    <section class="py-20 lg:py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-semibold text-slate-900 mb-3">
            Meet our team
          </h2>
          <p class="text-lg text-slate-600">
            Expert guides and travel specialists dedicated to your adventure
          </p>
        </div>
        <div class="flex justify-center">
          <div class="flex -space-x-4">
            <div v-for="member in teamMembers" :key="member.id" class="group relative">
              <NuxtImg 
                :src="member.image" 
                :alt="member.name"
                class="w-14 h-14 border-2 border-white rounded-full object-cover transition-transform group-hover:scale-110 group-hover:z-10"
                loading="lazy"
              />
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                <div class="font-medium">{{ member.name }}</div>
                <div class="text-xs text-slate-300">{{ member.role }}</div>
              </div>
            </div>
          </div>
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
              class="rounded-lg bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 transition-colors"
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
import { Card, CardContent } from '~/components/ui/card'
import { AuroraBackground } from '~/components/ui/aurora-background'

const teamMembers = [
  {
    id: 1,
    name: "Raj Sharma",
    role: "Nepal Trek Guide",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Travel Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Hassan Alami",
    role: "Morocco Surf Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Maya Chen",
    role: "Adventure Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "David Cooper",
    role: "Paragliding Instructor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Amira Bensaid",
    role: "Cultural Guide",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
  },
]

useSeoMeta({
  title: 'Home',
  description: 'Discover unforgettable adventure travel experiences around the world. Expert-guided tours, authentic cultural immersion, and memories that last a lifetime.',
  ogImage: '/images/og-home.jpg',
})
</script>
