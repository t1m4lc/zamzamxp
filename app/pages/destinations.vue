<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-24 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10"></div>
      <div class="container mx-auto px-6 relative">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl mb-6">
            Explore Our Destinations
          </h1>
          <p class="text-xl text-slate-600 mb-8">
            Discover breathtaking adventures in carefully selected destinations around the world
          </p>
        </div>
      </div>
    </section>

    <!-- Destinations Grid -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-6">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Nepal Card -->
          <NuxtLink to="/nepal" class="block group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div class="aspect-[4/3] overflow-hidden">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80"
                  alt="Nepal - Himalayan Adventures"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <h3 class="text-xl font-semibold text-slate-900">Nepal</h3>
                </div>
                <p class="text-slate-600 mb-4">
                  Experience world-class trekking and paragliding adventures in the Himalayas with stunning mountain views.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Trekking</span>
                  <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Paragliding</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 text-sm">{{ nepalCount }} experiences</span>
                  <span class="text-slate-900 font-medium group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Morocco Card -->
          <NuxtLink to="/morocco" class="block group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div class="aspect-[4/3] overflow-hidden">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80"
                  alt="Morocco - Atlantic Coast Surfing"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <h3 class="text-xl font-semibold text-slate-900">Morocco</h3>
                </div>
                <p class="text-slate-600 mb-4">
                  Discover Atlantic coast surfing combined with rich Moroccan culture in charming coastal towns.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Surfing</span>
                  <span class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Culture</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500 text-sm">{{ moroccoCount }} experiences</span>
                  <span class="text-slate-900 font-medium group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- Coming Soon Card -->
          <div class="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200">
            <div class="aspect-[4/3] flex items-center justify-center bg-slate-100">
              <div class="text-center p-6">
                <div class="text-5xl mb-4">🌎</div>
                <h3 class="text-xl font-semibold text-slate-500 mb-2">More Destinations</h3>
                <p class="text-slate-400">Coming Soon</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-slate-500 mb-4">
                We're constantly adding new exciting experiences. Stay tuned for more adventures!
              </p>
              <div class="flex items-center justify-between">
                <span class="text-slate-400 text-sm">Expanding soon</span>
                <span class="text-slate-400 font-medium">Stay tuned</span>
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
            Why Choose Our Destinations
          </h2>
          <p class="text-lg text-slate-600">
            We carefully select each destination based on unique experiences, safety, and authentic cultural connections
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:compass" class="h-8 w-8 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Expert Curation</h3>
            <p class="text-slate-600">
              Each destination is handpicked for its unique experiences and natural beauty.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:shield-check" class="h-8 w-8 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Safety First</h3>
            <p class="text-slate-600">
              All destinations meet high safety standards with local emergency support.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:heart" class="h-8 w-8 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Authentic Experiences</h3>
            <p class="text-slate-600">
              Connect with local communities through meaningful interactions.
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
            Ready to Start Your Adventure?
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            Contact our travel specialists to plan your perfect adventure in any of our amazing destinations.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as-child
              size="lg"
              class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-8 py-3 text-base font-medium text-white transition-all"
            >
              <NuxtLink to="/contact">
                Plan My Trip
              </NuxtLink>
            </Button>
            <Button
              as-child
              size="lg"
              variant="outline"
              class="rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
                WhatsApp Us
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
import { APP_CONFIG } from '~/config/constants'

const { extractCountriesFromExperiences } = useExperiences()

// Fetch all content to get countries dynamically
const { data: allContent } = await useAsyncData('all-content', async () => {
  return await queryCollection('content').all()
})

// Extract countries and count experiences per country
const countriesData = computed(() => {
  if (!allContent.value) return []
  
  const countries = extractCountriesFromExperiences(allContent.value.map((exp: any) => ({ ...exp, _path: exp.path })))
  
  return countries.map(country => {
    const count = allContent.value.filter((item: any) => 
      item.path?.includes(`/${country}/`)
    ).length
    
    return {
      slug: country,
      name: country.charAt(0).toUpperCase() + country.slice(1),
      count
    }
  })
})

// Quick accessors for existing country cards
const nepalCount = computed(() => 
  countriesData.value.find(c => c.slug === 'nepal')?.count || 0
)
const moroccoCount = computed(() => 
  countriesData.value.find(c => c.slug === 'morocco')?.count || 0
)

useSeoMeta({
  title: 'Our Destinations - ZamZam Experience',
  description: 'Explore our carefully curated adventure destinations. From Nepal\'s Himalayas to Morocco\'s Atlantic coast, discover your next adventure.',
})
</script>