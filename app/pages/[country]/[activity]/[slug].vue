<template>
  <!-- Empty State -->
  <div v-if="!experience" class="min-h-screen flex items-center justify-center bg-slate-50">
    <div class="container mx-auto px-4 py-20">
      <div class="max-w-2xl mx-auto text-center">
        <div class="mb-8">
          <Icon name="mdi:compass-off-outline" class="h-24 w-24 text-slate-300 mx-auto" />
        </div>
        <h1 class="text-4xl font-black text-slate-900 mb-4">
          Experience not found
        </h1>
        <p class="text-lg text-slate-600 mb-8">
          We couldn't find the experience you're looking for. It may have been moved or doesn't exist yet.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as-child size="lg" class="rounded-full bg-orange-500 px-8 font-bold hover:bg-orange-600">
            <NuxtLink :to="`/${country}/${activity}`">
              <Icon name="mdi:arrow-left" class="mr-2 h-5 w-5" />
              <span class="capitalize">Back to {{ activity }}</span>
            </NuxtLink>
          </Button>
          <Button as-child size="lg" variant="outline" class="rounded-full border-2 border-slate-300 font-bold hover:bg-slate-100">
            <NuxtLink to="/destinations">
              <Icon name="mdi:map-marker" class="mr-2 h-5 w-5" />
              All Destinations
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <!-- Sticky CTA Bar (Mobile) -->
    <div class="fixed bottom-0 left-0 right-0 z-40 border-t bg-white p-4 shadow-2xl lg:hidden">
      <div class="flex items-center justify-between gap-3">
        <div class="flex-shrink-0">
          <div class="text-xs font-medium text-slate-500">From</div>
          <div class="text-2xl font-black text-orange-600">${{ experience.price }}</div>
          <div class="text-xs font-medium text-slate-600">
            <span v-if="experience.minGroupSize && experience.minGroupSize > 1">
              Min. {{ experience.minGroupSize }} {{ experience.minGroupSize === 2 ? 'person' : 'people' }}
            </span>
            <span v-else>
              Per person
            </span>
          </div>
        </div>
        <Button as-child size="lg" class="rounded-full bg-orange-500 px-6 font-bold flex-shrink-0">
          <a :href="whatsappUrl" target="_blank" rel="noopener">
            Book Now
          </a>
        </Button>
      </div>
    </div>

    <!-- Hero Image -->
    <section class="relative h-[60vh] overflow-hidden">
      <NuxtImg :src="experience.image" :alt="experience.title" class="h-full w-full object-cover" sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" placeholder loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

      <!-- Title Overlay -->
      <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div class="container mx-auto">
          <div class="mb-4 flex flex-wrap gap-3">
            <Badge class="bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-md">
              {{ experience.difficulty }}
            </Badge>
            <Badge class="bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-md">
              {{ experience.duration }}
            </Badge>
          </div>
          <h1 class="mb-4 text-4xl font-black lg:text-6xl">
            {{ experience.title }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Quick Info Bar -->
    <section class="border-b bg-slate-50 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center space-x-2">
            <Icon name="material-symbols:schedule-outline" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.duration }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="material-symbols:speed-outline" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.difficulty }}</span>
          </div>
          <div class="flex items-center space-x-2" v-if="experience.minGroupSize">
            <Icon name="material-symbols:group-outline" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">Min. {{ experience.minGroupSize }} {{ experience.minGroupSize === 1 ? 'person' : 'people' }}</span>
          </div>
          <div class="flex items-center space-x-2" v-else-if="experience.groupSize">
            <Icon name="material-symbols:group-outline" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.groupSize }}</span>
          </div>
          <div class="flex items-center space-x-2" v-if="experience.bestTime">
            <Icon name="material-symbols:calendar-month-outline" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.bestTime }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid gap-12 lg:grid-cols-3">
          <!-- Main Column -->
          <div class="lg:col-span-2 space-y-12">
            <!-- Overview -->
            <div>
              <h2 class="mb-6 text-3xl font-black text-slate-900">Overview</h2>
              <div class="prose prose-lg max-w-none">
                <p class="text-lg leading-relaxed text-slate-700">
                  {{ experience.description }}
                </p>
              </div>
            </div>

            <!-- Highlights -->
            <div v-if="experience.highlights && experience.highlights.length">
              <h2 class="mb-6 text-3xl font-black text-slate-900">Highlights</h2>
              <div class="grid gap-4 md:grid-cols-2">
                <div v-for="(highlight, index) in experience.highlights" :key="index" class="flex items-start space-x-3 rounded-2xl bg-orange-50 p-4">
                  <Icon name="mdi:star" class="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span class="font-medium text-slate-900">{{ highlight }}</span>
                </div>
              </div>
            </div>

            <!-- Image Gallery -->
            <div v-if="experience.gallery && experience.gallery.length">
              <h2 class="mb-6 text-3xl font-black text-slate-900">Gallery</h2>
              <div class="space-y-4">
                <!-- First 6 images -->
                <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div v-for="(image, index) in experience.gallery.slice(0, 6)" :key="index" class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-slate-100">
                    <NuxtImg :src="image" :alt="`${experience.title} - Image ${index + 1}`" class="h-full w-full object-cover transition-transform hover:scale-110" sizes="xs:50vw sm:50vw md:33vw lg:25vw xl:20vw" placeholder loading="lazy" />
                  </div>
                </div>
                
                <!-- Collapsible for remaining images -->
                <Collapsible v-if="experience.gallery.length > 6" v-slot="{ open }">
                  <CollapsibleTrigger class="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-slate-600 font-medium transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                    <Icon name="mdi:image-multiple" class="h-4 w-4" />
                    <span class="text-sm">{{ open ? 'Show less' : `Show ${experience.gallery.length - 6} more ${experience.gallery.length - 6 === 1 ? 'photo' : 'photos'}` }}</span>
                    <Icon name="mdi:chevron-down" class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': open }" />
                  </CollapsibleTrigger>
                  <CollapsibleContent class="mt-4 overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                      <div v-for="(image, index) in experience.gallery.slice(6)" :key="index + 6" class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-slate-100">
                        <NuxtImg :src="image" :alt="`${experience.title} - Image ${index + 7}`" class="h-full w-full object-cover transition-transform hover:scale-110" sizes="xs:50vw sm:50vw md:33vw lg:25vw xl:20vw" placeholder loading="lazy" />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <!-- Itinerary -->
            <div v-if="parsedItinerary && parsedItinerary.length">
              <h2 class="mb-6 text-3xl font-black text-slate-900">Itinerary</h2>
              <Accordion type="single" collapsible class="space-y-4">
                <AccordionItem v-for="(item, index) in parsedItinerary" :key="index" :value="`item-${index}`" class="rounded-2xl border-2 border-slate-200 px-6">
                  <AccordionTrigger class="text-left hover:no-underline">
                    <div class="flex items-center space-x-4">
                      <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-white">
                        {{ index + 1 }}
                      </div>
                      <span class="font-bold text-slate-900">{{ item.title }}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent class="ml-14 pt-2 text-slate-600">
                    {{ item.content }}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <!-- Included / Not Included -->
            <div v-if="experience.included || experience.notIncluded">
              <h2 class="mb-6 text-3xl font-black text-slate-900">What's Included</h2>
              <div class="grid gap-6 md:grid-cols-2">
                <!-- Included -->
                <Card v-if="experience.included" class="rounded-3xl border-2 border-green-200 bg-green-50 p-6">
                  <h3 class="mb-4 flex items-center space-x-2 font-bold text-green-900">
                    <Icon name="mdi:check-circle" class="h-6 w-6" />
                    <span>Included</span>
                  </h3>
                  <ul class="space-y-2">
                    <li v-for="(item, index) in experience.included" :key="index" class="flex items-start space-x-2 text-sm text-green-900">
                      <Icon name="mdi:check" class="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </Card>

                <!-- Not Included -->
                <Card v-if="experience.notIncluded" class="rounded-3xl border-2 border-slate-200 bg-slate-50 p-6">
                  <h3 class="mb-4 flex items-center space-x-2 font-bold text-slate-900">
                    <Icon name="mdi:close-circle" class="h-6 w-6" />
                    <span>Not Included</span>
                  </h3>
                  <ul class="space-y-2">
                    <li v-for="(item, index) in experience.notIncluded" :key="index" class="flex items-start space-x-2 text-sm text-slate-700">
                      <Icon name="mdi:close" class="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            <!-- Content Body -->
            <div v-if="contentData?.body" class="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-900 prose-strong:font-bold prose-ul:text-slate-700 prose-li:text-slate-700">
              <ContentRenderer :value="contentData" />
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-24 space-y-6">
              <!-- Booking Card -->
              <Card class="rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm">
                <div class="mb-4 text-center">
                  <div class="mb-2 text-sm font-semibold text-slate-600 text">Starting from</div>
                  <div class="mb-2 text-5xl font-black text-slate-900">${{ experience.price }}</div>
                  <div class="text-xs text-slate-600">Per person</div>
                  <div v-if="experience.minGroupSize && experience.minGroupSize > 1" class="mt-2 text-xs font-medium text-slate-500">{{ experience.minGroupSize }} {{ experience.minGroupSize === 2 ? 'person' : 'people' }} minimum</div>
                  <div v-if="experience.privatePrice" class="mt-1 text-xs text-orange-600">
                    <Icon name="mdi:star" class="inline-block h-3 w-3" />
                    Private booking available
                  </div>
                </div>

                <div class="space-y-4 text-center">
                  <Button as-child size="lg" class="w-full rounded-full bg-orange-500 py-6 font-bold shadow-lg hover:bg-orange-600">
                    <a :href="whatsappUrl" target="_blank" rel="noopener">
                      <Icon name="mdi:whatsapp" class="mr-2 h-5 w-5" />
                      Book on WhatsApp
                    </a>
                  </Button>

                  <Button as-child size="lg" variant="outline" class="w-full rounded-full border-2 border-slate-300 font-bold hover:bg-slate-100">
                    <NuxtLink to="/contact">
                      <Icon name="mdi:email" class="mr-2 h-5 w-5" />
                      Email Us
                    </NuxtLink>
                  </Button>

                  <!-- Pricing Options Link -->
                  <Dialog>
                    <DialogTrigger as-child>
                      <button class="mt-2 cursor-pointer text-sm text-orange-600 hover:text-orange-700 underline decoration-dotted underline-offset-2 transition-colors">
                        <Icon name="mdi:currency-usd" class="mr-1 inline-block h-4 w-4" />
                        View all pricing options
                      </button>
                    </DialogTrigger>
                    <DialogContent class="sm:max-w-md rounded-3xl">
                      <DialogHeader>
                        <DialogTitle class="text-2xl font-black text-slate-900">Pricing Options</DialogTitle>
                        <DialogDescription class="text-slate-600">
                          Choose the option that works best for you. All prices are per person.
                        </DialogDescription>
                      </DialogHeader>
                      <div class="mt-4 space-y-3">
                        <div v-for="(discount, index) in groupDiscounts" :key="index" class="flex items-center justify-between rounded-2xl border-2 p-4" :class="discount.isPrivate ? 'border-orange-200 bg-orange-50' : (discount.discount > 0 ? 'border-green-200 bg-green-50' : 'border-slate-200 bg-slate-50')">
                          <div class="flex items-center space-x-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white" :class="discount.isPrivate ? 'bg-orange-500' : (discount.discount > 0 ? 'bg-green-500' : 'bg-slate-400')">
                              <Icon :name="discount.isPrivate ? 'mdi:account' : 'mdi:account-multiple'" class="h-5 w-5" />
                            </div>
                            <div>
                              <div class="font-bold text-slate-900">{{ discount.label }}</div>
                              <div v-if="discount.isPrivate" class="text-xs font-semibold text-orange-600">
                                Premium experience
                              </div>
                              <div v-else-if="discount.discount > 0" class="text-xs font-semibold text-green-600">
                                {{ discount.discount }}% OFF
                              </div>
                              <div v-else class="text-xs text-slate-500">
                                Base price (min. 2)
                              </div>
                            </div>
                          </div>
                          <div class="text-right">
                            <div class="text-2xl font-black text-slate-900">
                              ${{ calculatePriceForGroup(experience, discount) }}
                            </div>
                            <div v-if="discount.discount > 0 && !discount.isPrivate" class="text-xs text-slate-500 line-through">
                              ${{ experience.price }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>

              <!-- Trust Badges -->
              <Card class="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 class="mb-4 font-semibold text-slate-900">Why Book With Us</h3>
                <div class="space-y-4 text-sm">
                  <div class="flex items-start space-x-3">
                    <Icon name="mdi:cash" class="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-900" />
                    <div>
                      <div class="font-semibold text-slate-900">Best Market Prices</div>
                      <div class="text-slate-600">We guarantee the best prices on the market - unbeatable value for your adventure!</div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="mdi:handshake" class="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-900" />
                    <div>
                      <div class="font-semibold text-slate-900">Fair Remuneration</div>
                      <div class="text-slate-600">Our partners are paid fairly - <NuxtLink to="/about" class="text-[#FF6B35] hover:underline">see our values</NuxtLink></div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="mdi:leaf" class="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-900" />
                    <div>
                      <div class="font-semibold text-slate-900">Eco-Friendly</div>
                      <div class="text-slate-600">Sustainable tourism practices</div>
                    </div>
                  </div>
                </div>
              </Card>


            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Your Referee Section -->
    <section v-if="experience.referee" class="bg-slate-50 py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="mb-12 text-center text-4xl font-black text-slate-900">{{ experience.referee.title || 'Meet Your Referee' }}</h2>
          <Card class="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white">
            <div class="grid gap-8 p-8 md:grid-cols-3">
              <div class="md:col-span-1">
                <div class="aspect-square overflow-hidden rounded-2xl bg-slate-100">
                  <NuxtImg v-if="experience.referee.image" :src="experience.referee.image" :alt="experience.referee.name" class="h-full w-full object-cover" sizes="xs:100vw sm:100vw md:33vw lg:25vw xl:20vw" placeholder loading="lazy" />
                  <div v-else class="flex h-full items-center justify-center text-7xl">
                    {{ experience.referee.emoji || '👨‍🏫' }}
                  </div>
                </div>
              </div>
              <div class="md:col-span-2">
                <h3 class="mb-2 text-2xl font-semibold text-slate-900">{{ experience.referee.name || 'Passionate Professionals' }}</h3>
                <div v-if="experience.referee.badges" class="mb-4 flex flex-wrap gap-2">
                  <Badge v-for="(badge, index) in experience.referee.badges" :key="index" class="bg-slate-900 text-white font-medium text-xs">
                    {{ badge }}
                  </Badge>
                </div>
                <p class="mb-6 leading-relaxed text-slate-700">
                  {{ experience.referee.description || 'Our referees are passionate locals who know every detail of their craft. They love sharing their expertise and ensuring your safety and enjoyment are the top priorities.' }}
                </p>
                <div v-if="experience.referee.details" class="space-y-2 text-sm text-slate-600">
                  <div v-for="(detail, index) in experience.referee.details" :key="index" class="flex items-center space-x-2">
                    <Icon :name="detail.icon || 'mdi:check'" class="h-4 w-4 text-orange-500" />
                    <span>{{ detail.text }}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-black text-slate-900">Traveler Reviews</h2>
          <div class="flex items-center justify-center space-x-2">
            <div class="flex">
              <Icon v-for="i in 5" :key="i" name="mdi:star" class="h-6 w-6 text-yellow-400" />
            </div>
            <span class="text-lg font-bold text-slate-900">4.9/5 from 50+ reviews</span>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard 
            v-for="(review, index) in activityReviews" 
            :key="index"
            :testimonial="{
              name: review.name,
              initials: review.initials,
              location: review.location,
              quote: review.quote,
              rating: review.rating,
              adventure: experience.title,
              color: 'slate',
              rotation: 0
            }" 
          />
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-slate-900 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center text-white">
          <h2 class="mb-4 text-4xl font-black lg:text-5xl">
            Ready to Book {{ experience.title }}?
          </h2>
          <div class="mb-2 text-6xl font-black text-orange-500">${{ experience.price }}</div>
          <div class="mb-8 text-lg text-slate-400">
            <span v-if="experience.minGroupSize && experience.minGroupSize > 1">
              Minimum {{ experience.minGroupSize }} {{ experience.minGroupSize === 2 ? 'person' : 'people' }} · Per person
            </span>
            <span v-else>
              Per person
            </span>
          </div>
          <p class="mb-10 text-xl leading-relaxed text-slate-300">
            Don't miss out on this incredible adventure. Spots fill up quickly!
          </p>

          <Button as-child size="lg" class="rounded-full bg-orange-500 px-12 py-8 text-xl font-bold text-white shadow-2xl transition-all hover:bg-orange-600 hover:scale-105">
            <a :href="whatsappUrl" target="_blank" rel="noopener">
              <Icon name="mdi:whatsapp" class="mr-2 h-7 w-7" />
              Book Now on WhatsApp
            </a>
          </Button>

          <div class="mt-8 text-sm text-slate-400">
            Questions? Contact us anytime at hello@zamzamxp.com
          </div>
        </div>
      </div>
    </section>

    <!-- Related Activities -->
    <section v-if="relatedActivities.length" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-black text-slate-900">You Might Also Like</h2>
          <p class="text-lg text-slate-600">
            <span v-if="relatedActivities.some(exp => exp.activity === activity && exp.country === country)">
              More <span class="capitalize">{{ activity }}</span> adventures in <span class="capitalize">{{ country }}</span>
            </span>
            <span v-else-if="relatedActivities.some(exp => exp.country === country)">
              Explore more adventures in <span class="capitalize">{{ country }}</span>
            </span>
            <span v-else>
              Similar <span class="capitalize">{{ activity }}</span> experiences worldwide
            </span>
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ExperienceCard v-for="relatedExp in relatedActivities" :key="relatedExp.slug" :experience="relatedExp" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { APP_CONFIG } from '~/config/constants'

interface RefereeDetail {
  title?: string
  name?: string
  image?: string
  emoji?: string
  badges?: string[]
  description?: string
  details?: Array<{ icon?: string; text: string }>
}

interface ExperienceDetail {
  title: string
  description: string
  price: number
  privatePrice?: number
  duration: string
  difficulty: string
  groupSize: string
  minGroupSize?: number
  image: string
  bestTime?: string
  highlights: string[]
  gallery: string[]
  included: string[]
  notIncluded: string[]
  itinerary: Array<{ title: string; content: string }>
  body?: any
  minElevation?: string
  maxElevation?: string
  referee?: RefereeDetail
}

const route = useRoute()
const { country, activity, slug } = route.params
const { extractSlug } = useExperiences()

// First try to load from content
const { data: contentData } = await useAsyncData(`experience-${country}-${activity}-${slug}`, async () => {
  try {
    // Query all content and find by slug, country and activity
    const allContent = await queryCollection('content').all()

    // Find the matching content by comparing extracted slug, country and activity
    const found = allContent.find((item: any) => {
      const itemSlug = extractSlug(item.path || '')
      return itemSlug === String(slug) &&
        item.country === String(country) &&
        item.activity === String(activity)
    })

    return found || null
  } catch (error) {
    console.error('Error loading experience:', error)
    return null
  }
})

// Transform content data
const experience = computed(() => {
  if (!contentData.value) return null

  // Ensure arrays are properly handled
  const ensureArray = (value: any) => {
    if (!value) return []
    if (Array.isArray(value)) return value
    if (typeof value === 'string') return [value]
    return []
  }

  // Use data from content file
  const data = contentData.value as any
  return {
    title: data.title,
    description: data.description,
    price: data.price,
    duration: data.duration,
    difficulty: data.difficulty,
    groupSize: data.groupSize,
    minGroupSize: data.minGroupSize,
    image: data.image,
    bestTime: data.bestTime,
    highlights: ensureArray(data.highlights),
    gallery: ensureArray(data.gallery),
    included: ensureArray(data.included),
    notIncluded: ensureArray(data.notIncluded),
    itinerary: ensureArray(data.itinerary),
    body: data.body,
    minElevation: data.minElevation,
    maxElevation: data.maxElevation,
    referee: data.referee
  } as ExperienceDetail
})

// Get activity-specific reviews from markdown
const activityReviews = computed(() => {
  const data = contentData.value as any
  if (!data?.reviews || !Array.isArray(data.reviews) || data.reviews.length === 0) {
    // Fallback reviews if not defined in markdown
    return [
      {
        name: 'Happy Traveler',
        initials: 'HT',
        location: 'International',
        quote: 'Amazing experience! Professional guides and unforgettable memories. Highly recommend this adventure to anyone looking for authentic experiences...',
        rating: 5
      },
      {
        name: 'Adventure Seeker',
        initials: 'AS',
        location: 'USA',
        quote: 'One of the best trips I\'ve ever done! Everything was well-organized, the guide was knowledgeable, and the scenery was breathtaking...',
        rating: 5
      },
      {
        name: 'Nature Lover',
        initials: 'NL',
        location: 'Europe',
        quote: 'Exceeded all expectations! The attention to detail and care for our safety was impressive. Would definitely book again...',
        rating: 5
      }
    ]
  }
  return data.reviews
})

// Parse itinerary from the data
const parsedItinerary = computed(() => {
  return experience.value?.itinerary || []
})

// Get related activities dynamically from content
const { data: relatedExps } = await useAsyncData(`related-${country}-${slug}`, async () => {
  try {
    const allExp = await queryCollection('content').all()

    // Filter out current experience
    const otherExperiences = allExp.filter((exp: any) => extractSlug(exp.path) !== String(slug))

    // Prioritize: same activity, same country first
    const sameActivity = otherExperiences.filter((exp: any) =>
      exp.activity === String(activity) &&
      exp.country === String(country)
    )

    // Then: other activities in same country
    const sameCountry = otherExperiences.filter((exp: any) =>
      exp.country === String(country) &&
      exp.activity !== String(activity)
    )

    // Finally: same activity in other countries
    const sameActivityOtherCountry = otherExperiences.filter((exp: any) =>
      exp.activity === String(activity) &&
      exp.country !== String(country)
    )

    // Combine and limit to 3
    const combined = [...sameActivity, ...sameCountry, ...sameActivityOtherCountry].slice(0, 3)

    return combined.map((exp: any) => ({
      title: exp.title,
      description: exp.description,
      price: exp.price,
      duration: exp.duration,
      difficulty: exp.difficulty,
      groupSize: exp.groupSize,
      image: exp.image,
      country: exp.country || '',
      activity: exp.activity || '',
      slug: extractSlug(exp.path) || ''
    }))
  } catch (error) {
    return []
  }
})

const relatedActivities = computed(() => {
  return relatedExps.value || []
})

// Get group discounts for current activity
const groupDiscounts = computed(() => {
  const activityType = String(activity)
  const discounts = APP_CONFIG.groupDiscounts[activityType as keyof typeof APP_CONFIG.groupDiscounts]
    || APP_CONFIG.groupDiscounts.default
  return discounts
})

// Calculate discounted price
const calculateDiscountedPrice = (basePrice: number, discount: number) => {
  const discountedPrice = basePrice - (basePrice * discount / 100)
  return Math.round(discountedPrice)
}

// Calculate price for group considering private pricing
const calculatePriceForGroup = (exp: any, discount: any) => {
  if (discount.isPrivate && exp.privatePrice) {
    return exp.privatePrice
  }
  return calculateDiscountedPrice(exp.price, discount.discount)
}

// WhatsApp URL with dynamic message
const whatsappUrl = computed(() => {
  const phoneNumber = APP_CONFIG.company.whatsapp
  const message = experience.value
    ? `Hi! I'm interested in ${experience.value.title} - ${experience.value.duration} for $${experience.value.price}`
    : "Hi! I'm interested in your tours"

  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
})

if (experience.value) {
  const exp = experience.value
  const countryStr = String(country)
  const activityStr = String(activity)
  const countryName = countryStr.charAt(0).toUpperCase() + countryStr.slice(1)
  const activityName = activityStr.charAt(0).toUpperCase() + activityStr.slice(1)

  useSeoMeta({
    title: `${exp.title} - ${exp.duration} | Zamzam Experience`,
    description: `${exp.description} Book this ${exp.difficulty} ${activityStr} tour in ${countryStr}. From $${exp.price}. Expert local guides and sustainable tourism.`,
    ogTitle: exp.title,
    ogDescription: exp.description,
    ogImage: exp.image,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: exp.title,
    twitterDescription: exp.description,
    twitterImage: exp.image,
  })

  useSchemaOrg([
    defineProduct({
      name: exp.title,
      description: exp.description,
      image: exp.image,
      offers: {
        "@type": "Offer",
        price: exp.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `https://zamzamxp.com/${countryStr}/${activityStr}/${slug}`,
      },
    }),
    defineBreadcrumb({
      itemListElement: [
        { name: "Home", item: "/" },
        { name: countryName, item: `/${countryStr}` },
        { name: activityName, item: `/${countryStr}/${activityStr}` },
        { name: exp.title, item: `/${countryStr}/${activityStr}/${slug}` },
      ],
    }),
  ])
}
</script>

<style scoped>
/* Ensure smooth scroll behavior for anchor links */
:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  scroll-margin-top: 6rem;
}

/* Smooth scrolling for the entire page */
:deep(*) {
  scroll-behavior: smooth;
}
</style>
