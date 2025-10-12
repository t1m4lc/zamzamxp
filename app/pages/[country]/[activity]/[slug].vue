<template>
  <div v-if="experience">
    <!-- Sticky CTA Bar (Mobile) -->
    <div class="fixed bottom-0 left-0 right-0 z-40 border-t bg-white p-4 shadow-2xl lg:hidden">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-xs text-slate-500">From</div>
          <div class="text-2xl font-black text-orange-600">${{ experience.price }}</div>
        </div>
        <Button
          as-child
          size="lg"
          class="rounded-full bg-orange-500 px-8 font-bold"
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
            Book Now
          </a>
        </Button>
      </div>
    </div>

    <!-- Hero Image -->
    <section class="relative h-[60vh] overflow-hidden">
      <NuxtImg
        :src="experience.image"
        :alt="experience.title"
        class="h-full w-full object-cover"
      />
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
          <!-- Price Sticker -->
          <div class="inline-block rounded-full bg-orange-500 px-6 py-3 text-2xl font-black shadow-xl">
            From ${{ experience.price }}
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Info Bar -->
    <section class="border-b bg-slate-50 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-6 text-sm">
          <div class="flex items-center space-x-2">
            <Icon name="mdi:clock-outline" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.duration }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi:speedometer" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.difficulty }}</span>
          </div>
          <div class="flex items-center space-x-2" v-if="experience.groupSize">
            <Icon name="mdi:account-group" class="h-5 w-5 text-orange-500" />
            <span class="font-semibold text-slate-900">{{ experience.groupSize }}</span>
          </div>
          <div class="flex items-center space-x-2" v-if="experience.bestTime">
            <Icon name="mdi:calendar" class="h-5 w-5 text-orange-500" />
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
                <div
                  v-for="(highlight, index) in experience.highlights"
                  :key="index"
                  class="flex items-start space-x-3 rounded-2xl bg-orange-50 p-4"
                >
                  <Icon name="mdi:star" class="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span class="font-medium text-slate-900">{{ highlight }}</span>
                </div>
              </div>
            </div>

            <!-- Image Gallery -->
            <div v-if="experience.gallery && experience.gallery.length">
              <h2 class="mb-6 text-3xl font-black text-slate-900">Gallery</h2>
              <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div
                  v-for="(image, index) in experience.gallery"
                  :key="index"
                  class="aspect-square overflow-hidden rounded-2xl"
                >
                  <NuxtImg
                    :src="image"
                    :alt="`${experience.title} - Image ${index + 1}`"
                    class="h-full w-full object-cover transition-transform hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Itinerary -->
            <div v-if="parsedItinerary && parsedItinerary.length">
              <h2 class="mb-6 text-3xl font-black text-slate-900">Itinerary</h2>
              <Accordion type="single" collapsible class="space-y-4">
                <AccordionItem
                  v-for="(item, index) in parsedItinerary"
                  :key="index"
                  :value="`item-${index}`"
                  class="rounded-2xl border-2 border-slate-200 px-6"
                >
                  <AccordionTrigger class="text-left hover:no-underline">
                    <div class="flex items-center space-x-4">
                      <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
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
                    <li
                      v-for="(item, index) in experience.included"
                      :key="index"
                      class="flex items-start space-x-2 text-sm text-green-900"
                    >
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
                    <li
                      v-for="(item, index) in experience.notIncluded"
                      :key="index"
                      class="flex items-start space-x-2 text-sm text-slate-700"
                    >
                      <Icon name="mdi:close" class="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            <!-- Content Body -->
            <div class="prose prose-lg max-w-none">
              <ContentRenderer :value="experience" />
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-24 space-y-6">
              <!-- Booking Card -->
              <Card class="rounded-3xl border-2 border-orange-200 bg-orange-50 p-8">
                <div class="mb-6 text-center">
                  <div class="mb-2 text-sm font-semibold text-orange-900">Starting from</div>
                  <div class="mb-4 text-5xl font-black text-orange-600">${{ experience.price }}</div>
                  <div class="text-xs text-orange-900">Per person</div>
                </div>

                <div class="space-y-4">
                  <Button
                    as-child
                    size="lg"
                    class="w-full rounded-full bg-orange-500 py-6 font-bold shadow-xl hover:bg-orange-600"
                  >
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
                      <Icon name="mdi:whatsapp" class="mr-2 h-5 w-5" />
                      Book on WhatsApp
                    </a>
                  </Button>

                  <Button
                    as-child
                    size="lg"
                    variant="outline"
                    class="w-full rounded-full border-2 border-orange-500 font-bold hover:bg-orange-500 hover:text-white"
                  >
                    <NuxtLink to="/contact">
                      <Icon name="mdi:email" class="mr-2 h-5 w-5" />
                      Email Us
                    </NuxtLink>
                  </Button>
                </div>

                <div class="mt-6 space-y-3 border-t border-orange-200 pt-6 text-sm text-orange-900">
                  <div class="flex items-center space-x-2">
                    <Icon name="mdi:check-circle" class="h-4 w-4 text-green-600" />
                    <span>Free cancellation</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Icon name="mdi:check-circle" class="h-4 w-4 text-green-600" />
                    <span>Reserve now, pay later</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Icon name="mdi:check-circle" class="h-4 w-4 text-green-600" />
                    <span>Instant confirmation</span>
                  </div>
                </div>
              </Card>

              <!-- Trust Badges -->
              <Card class="rounded-3xl border-2 border-slate-200 bg-white p-6">
                <h3 class="mb-4 font-bold text-slate-900">Why Book With Us</h3>
                <div class="space-y-4 text-sm">
                  <div class="flex items-start space-x-3">
                    <Icon name="mdi:shield-check" class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <div>
                      <div class="font-semibold text-slate-900">Secure Payments</div>
                      <div class="text-slate-600">Your data is protected</div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="mdi:license" class="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                    <div>
                      <div class="font-semibold text-slate-900">Licensed & Insured</div>
                      <div class="text-slate-600">Fully certified operations</div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <Icon name="mdi:leaf" class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <div>
                      <div class="font-semibold text-slate-900">Eco-Friendly</div>
                      <div class="text-slate-600">Sustainable tourism</div>
                    </div>
                  </div>
                </div>
              </Card>

              <!-- Share -->
              <Card class="rounded-3xl border-2 border-slate-200 bg-white p-6">
                <h3 class="mb-4 font-bold text-slate-900">Share This Adventure</h3>
                <div class="flex space-x-2">
                  <button class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-all hover:bg-sky-500 hover:text-white">
                    <Icon name="mdi:facebook" class="h-5 w-5" />
                  </button>
                  <button class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600 transition-all hover:bg-pink-500 hover:text-white">
                    <Icon name="mdi:instagram" class="h-5 w-5" />
                  </button>
                  <button class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-500 hover:text-white">
                    <Icon name="mdi:twitter" class="h-5 w-5" />
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Your Guide Section -->
    <section class="bg-slate-50 py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="mb-12 text-center text-4xl font-black text-slate-900">Meet Your Guide</h2>
          <Card class="overflow-hidden rounded-3xl border-2 border-orange-200">
            <div class="grid gap-8 p-8 md:grid-cols-3">
              <div class="md:col-span-1">
                <div class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500">
                  <div class="flex h-full items-center justify-center text-7xl text-white">
                    👨‍🏫
                  </div>
                </div>
              </div>
              <div class="md:col-span-2">
                <h3 class="mb-2 text-2xl font-black text-slate-900">Experienced Local Guides</h3>
                <div class="mb-4 flex flex-wrap gap-2">
                  <Badge class="bg-orange-500 font-semibold">15+ Years Experience</Badge>
                  <Badge class="bg-sky-500 font-semibold">Licensed & Certified</Badge>
                  <Badge class="bg-green-500 font-semibold">First Aid Trained</Badge>
                </div>
                <p class="mb-6 leading-relaxed text-slate-700">
                  Our guides are not just experts—they're locals who were born and raised in these mountains/communities. They know every trail, every story, and every hidden gem. With decades of combined experience, your safety and enjoyment are their top priorities.
                </p>
                <div class="space-y-2 text-sm text-slate-600">
                  <div class="flex items-center space-x-2">
                    <Icon name="mdi:star" class="h-4 w-4 text-yellow-400" />
                    <span>Average 4.9/5 rating from travelers</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Icon name="mdi:translate" class="h-4 w-4 text-orange-500" />
                    <span>Fluent in English and local languages</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Icon name="mdi:heart" class="h-4 w-4 text-pink-500" />
                    <span>Passionate about sharing their culture</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-black text-slate-900">Traveler Reviews</h2>
          <div class="flex items-center justify-center space-x-2">
            <div class="flex">
              <Icon v-for="i in 5" :key="i" name="mdi:star" class="h-6 w-6 text-yellow-400" />
            </div>
            <span class="text-lg font-bold text-slate-900">4.9/5 from 150+ reviews</span>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            :testimonial="{
              name: 'John Smith',
              initials: 'JS',
              location: 'Canada',
              quote: 'Absolutely incredible experience! The guide was knowledgeable, the scenery was stunning, and every detail was perfectly planned.',
              rating: 5,
              adventure: experience.title,
              color: 'orange',
              rotation: -1
            }"
          />
          <TestimonialCard
            :testimonial="{
              name: 'Lisa Anderson',
              initials: 'LA',
              location: 'Australia',
              quote: 'This was the highlight of my trip! Professional team, amazing views, and memories that will last forever. Highly recommend!',
              rating: 5,
              adventure: experience.title,
              color: 'sky',
              rotation: 1
            }"
          />
          <TestimonialCard
            :testimonial="{
              name: 'Pierre Dubois',
              initials: 'PD',
              location: 'France',
              quote: 'Outstanding from start to finish. The guides really care about your experience and safety. Would do it again in a heartbeat!',
              rating: 5,
              adventure: experience.title,
              color: 'purple',
              rotation: -2
            }"
          />
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center text-white">
          <h2 class="mb-4 text-4xl font-black lg:text-5xl">
            Ready to Book {{ experience.title }}?
          </h2>
          <div class="mb-8 text-6xl font-black">${{ experience.price }}</div>
          <p class="mb-10 text-xl leading-relaxed">
            Don't miss out on this incredible adventure. Spots fill up quickly!
          </p>

          <Button
            as-child
            size="lg"
            class="rounded-full bg-white px-12 py-8 text-xl font-bold text-orange-600 shadow-2xl transition-all hover:bg-slate-100 hover:scale-105"
          >
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener">
              <Icon name="mdi:whatsapp" class="mr-2 h-7 w-7" />
              Book Now on WhatsApp
            </a>
          </Button>

          <div class="mt-8 text-sm opacity-90">
            Questions? Contact us anytime at hello@zamzamxp.com
          </div>
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

interface ExperienceDetail {
  title: string
  description: string
  price: number
  duration: string
  difficulty: string
  groupSize: string
  image: string
  bestTime?: string
  highlights: string[]
  gallery: string[]
  included: string[]
  notIncluded: string[]
  itinerary: Array<{ title: string; content: string }>
  body?: any
}

const route = useRoute()
const { country, activity, slug } = route.params

// Comprehensive mock data for experience details
const getExperienceDetail = (country: string, activity: string, slug: string): ExperienceDetail | null => {
  const experienceData: Record<string, Record<string, Record<string, ExperienceDetail>>> = {
    nepal: {
      trekking: {
        'everest-base-camp': {
          title: "Everest Base Camp Trek",
          description: "Experience the world's most iconic trek. Journey through Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes to reach the foot of Mount Everest.",
          price: 1299,
          duration: "12 Days",
          difficulty: "Challenging",
          groupSize: "6-12 people",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80",
          bestTime: "March-May, September-November",
          highlights: [
            "Stand at Everest Base Camp (5,364m)",
            "Sunrise view from Kala Patthar",
            "Visit ancient Tengboche Monastery",
            "Experience Sherpa culture",
            "Acclimatization stops in Namche",
            "Cross suspension bridges over roaring rivers"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1486022662195-42e47e8a6cc3?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1464822759844-d150baef493e?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Airport transfers",
            "11 nights accommodation (tea houses)",
            "All meals during trek",
            "Experienced trekking guide",
            "Porter service (1 for 2 people)",
            "TIMS & National Park permits",
            "First aid kit",
            "Group medical kit"
          ],
          notIncluded: [
            "International flights",
            "Nepal visa ($50)",
            "Travel insurance",
            "Personal expenses",
            "Tips for guide/porter",
            "Extra nights in Kathmandu",
            "Personal trekking gear"
          ],
          itinerary: [
            {
              title: "Day 1: Fly to Lukla & Trek to Phakding",
              content: "Start your adventure with a thrilling flight to Lukla (2,840m). Trek 3-4 hours to Phakding, following the Dudh Koshi River through pine forests."
            },
            {
              title: "Day 2: Phakding to Namche Bazaar",
              content: "Trek through beautiful rhododendron forests and cross several suspension bridges. Enter Sagarmatha National Park and climb to Namche Bazaar (3,440m)."
            },
            {
              title: "Day 3: Acclimatization Day in Namche",
              content: "Rest day for acclimatization. Optional hike to Everest View Hotel for stunning mountain views. Explore the Sherpa Museum and local markets."
            },
            {
              title: "Day 4: Namche to Tengboche",
              content: "Trek through beautiful forests with rhododendrons and magnolias. Visit the famous Tengboche Monastery with panoramic views of Everest, Nuptse, and Ama Dablam."
            },
            {
              title: "Day 5: Tengboche to Dingboche",
              content: "Continue trekking through alpine landscapes. Reach Dingboche (4,410m) with spectacular views of Island Peak and Ama Dablam."
            },
            {
              title: "Day 6: Acclimatization Day in Dingboche",
              content: "Another important acclimatization day. Optional hike to Nagarjun Hill for panoramic mountain views."
            },
            {
              title: "Day 7: Dingboche to Lobuche",
              content: "Trek to Lobuche (4,940m) with views of the Khumbu Glacier. Pass memorials to climbers who lost their lives on Everest."
            },
            {
              title: "Day 8: Lobuche to EBC via Gorak Shep",
              content: "Early morning trek to Gorak Shep, then continue to Everest Base Camp (5,364m). Return to Gorak Shep for overnight."
            },
            {
              title: "Day 9: Gorak Shep to Kala Patthar to Pheriche",
              content: "Early morning hike to Kala Patthar (5,545m) for sunrise views of Everest. Descend to Pheriche for overnight."
            },
            {
              title: "Day 10: Pheriche to Namche Bazaar",
              content: "Long descent back to Namche Bazaar. Enjoy the changing landscapes and warmer temperatures."
            },
            {
              title: "Day 11: Namche to Lukla",
              content: "Final day of trekking back to Lukla. Celebration dinner with your guide and porters."
            },
            {
              title: "Day 12: Fly back to Kathmandu",
              content: "Morning flight back to Kathmandu. Free time for shopping or sightseeing in the capital."
            }
          ]
        },
        'annapurna-circuit': {
          title: "Annapurna Circuit Trek",
          description: "Classic high-altitude trek around the Annapurna massif with diverse landscapes and cultures.",
          price: 899,
          duration: "14 Days",
          difficulty: "Challenging",
          groupSize: "6-12 people",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
          bestTime: "March-May, September-November",
          highlights: [
            "Cross Thorong La Pass (5,416m)",
            "Visit sacred Muktinath Temple",
            "Diverse landscapes and cultures",
            "Views of Annapurna and Dhaulagiri ranges",
            "Traditional Gurung and Thakali villages",
            "Natural hot springs in Tatopani"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1486022662195-42e47e8a6cc3?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1464822759844-d150baef493e?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Airport transfers",
            "13 nights accommodation",
            "All meals during trek",
            "Experienced guide",
            "Porter service",
            "Permits and fees"
          ],
          notIncluded: [
            "International flights",
            "Nepal visa",
            "Travel insurance",
            "Personal expenses"
          ],
          itinerary: [
            {
              title: "Day 1: Drive to Besisahar, trek to Bhulbhule",
              content: "Drive from Kathmandu to Besisahar, then begin trekking to Bhulbhule."
            }
          ]
        },
        'langtang-valley': {
          title: "Langtang Valley Trek",
          description: "Beautiful valley trek with stunning mountain views and authentic Tamang culture.",
          price: 699,
          duration: "10 Days",
          difficulty: "Moderate",
          groupSize: "6-12 people",
          image: "https://images.unsplash.com/photo-1486022662195-42e47e8a6cc3?w=1200&auto=format&fit=crop&q=80",
          bestTime: "March-May, September-November",
          highlights: [
            "Explore Langtang Valley",
            "Visit Kyanjin Gompa monastery",
            "Stunning mountain panoramas",
            "Tamang culture experience",
            "Less crowded than other routes"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1486022662195-42e47e8a6cc3?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Transportation",
            "Accommodation",
            "Meals",
            "Guide",
            "Permits"
          ],
          notIncluded: [
            "Flights",
            "Insurance",
            "Personal items"
          ],
          itinerary: [
            {
              title: "Day 1: Drive to Syabrubesi",
              content: "Drive from Kathmandu to Syabrubesi, gateway to Langtang Valley."
            }
          ]
        }
      },
      paragliding: {
        'everest-tandem': {
          title: "Everest Tandem Paragliding",
          description: "Soar above the Himalayas with experienced pilots and witness Mount Everest from the sky.",
          price: 299,
          duration: "1 Day",
          difficulty: "Easy",
          groupSize: "2-4 people",
          image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&auto=format&fit=crop&q=80",
          bestTime: "March-May, September-November",
          highlights: [
            "Bird's eye view of Mount Everest",
            "Professional tandem pilots",
            "Safety briefing included",
            "Photos and videos included",
            "No experience required"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Tandem paragliding flight",
            "Professional pilot",
            "Safety equipment",
            "Photos and videos",
            "Certificate"
          ],
          notIncluded: [
            "Transportation to site",
            "Meals",
            "Insurance"
          ],
          itinerary: [
            {
              title: "Morning: Safety Briefing",
              content: "Meet your pilot and receive comprehensive safety briefing."
            },
            {
              title: "Flight: Soar Above Everest",
              content: "Experience the thrill of paragliding with views of the world's highest peak."
            }
          ]
        },
        'pokhara-tandem': {
          title: "Pokhara Tandem Paragliding",
          description: "Experience the thrill of paragliding over Pokhara with views of the Annapurna range.",
          price: 149,
          duration: "1 Day",
          difficulty: "Easy",
          groupSize: "2-6 people",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
          bestTime: "Year-round",
          highlights: [
            "Views of Annapurna range",
            "Fly over Phewa Lake",
            "Perfect for beginners",
            "Multiple flight options",
            "Professional instruction"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Tandem flight",
            "Equipment",
            "Pilot",
            "Transport to launch site"
          ],
          notIncluded: [
            "Hotel pickup",
            "Meals",
            "Photos (optional extra)"
          ],
          itinerary: [
            {
              title: "Preparation",
              content: "Equipment check and brief training session."
            },
            {
              title: "Flight",
              content: "20-30 minute paragliding flight over beautiful Pokhara."
            }
          ]
        }
      }
    },
    morocco: {
      surfing: {
        'taghazout-beginner': {
          title: "Taghazout Beginner Surf Camp",
          description: "Perfect for first-time surfers. Learn the basics on gentle waves with experienced instructors in Morocco's surf capital.",
          price: 599,
          duration: "7 Days",
          difficulty: "Easy",
          groupSize: "6-10 people",
          image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&auto=format&fit=crop&q=80",
          bestTime: "March-October",
          highlights: [
            "Daily surf lessons with pros",
            "Perfect beginner waves",
            "Beachfront surf house",
            "Yoga sessions included",
            "Explore Moroccan culture",
            "All equipment provided"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "6 nights accommodation (shared rooms)",
            "Daily breakfast & 3 dinners",
            "5 surf lessons (2 hours each)",
            "Wetsuit & surfboard rental",
            "Yoga sessions (3x per week)",
            "Airport transfer from Agadir"
          ],
          notIncluded: [
            "International flights",
            "Lunches & some dinners",
            "Travel insurance",
            "Personal expenses",
            "Additional surf sessions"
          ],
          itinerary: [
            {
              title: "Day 1: Arrival & Orientation",
              content: "Airport pickup, check-in to surf house, welcome dinner and orientation."
            },
            {
              title: "Day 2-6: Surf & Yoga",
              content: "Daily surf lessons, yoga sessions, free time to explore Taghazout."
            },
            {
              title: "Day 7: Departure",
              content: "Final surf session, farewell breakfast, transfer to airport."
            }
          ]
        },
        'taghazout-intermediate': {
          title: "Taghazout Intermediate Surf Camp",
          description: "Take your surfing to the next level with advanced techniques and bigger waves.",
          price: 699,
          duration: "7 Days",
          difficulty: "Intermediate",
          groupSize: "6-8 people",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
          bestTime: "September-April",
          highlights: [
            "Advanced surf coaching",
            "Bigger wave locations",
            "Video analysis sessions",
            "Small group coaching",
            "Multiple surf spots"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Accommodation",
            "Meals",
            "Surf coaching",
            "Equipment",
            "Transport"
          ],
          notIncluded: [
            "Flights",
            "Insurance",
            "Personal items"
          ],
          itinerary: [
            {
              title: "Day 1: Assessment",
              content: "Skill assessment and personalized coaching plan."
            }
          ]
        },
        'essaouira-culture': {
          title: "Essaouira Culture & Surf",
          description: "Combine surfing lessons with cultural exploration in the historic coastal city of Essaouira.",
          price: 549,
          duration: "5 Days",
          difficulty: "Easy",
          groupSize: "4-8 people",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=80",
          bestTime: "Year-round",
          highlights: [
            "UNESCO World Heritage medina",
            "Surf lessons on pristine beaches",
            "Traditional Moroccan cuisine",
            "Local artisan workshops",
            "Coastal town exploration"
          ],
          gallery: [
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80"
          ],
          included: [
            "Accommodation",
            "Surf lessons",
            "Cultural tours",
            "Some meals"
          ],
          notIncluded: [
            "Flights",
            "All meals",
            "Personal expenses"
          ],
          itinerary: [
            {
              title: "Day 1: Arrival & Medina Tour",
              content: "Check-in and guided tour of historic Essaouira medina."
            }
          ]
        }
      }
    }
  }
  
  return experienceData[country]?.[activity]?.[slug] || null
}

// Get experience data
const experience = ref<ExperienceDetail | null>(getExperienceDetail(country as string, activity as string, slug as string))

// Parse itinerary from the data
const parsedItinerary = computed(() => {
  return experience.value?.itinerary || []
})

if (experience.value) {
  useSeoMeta({
    title: experience.value.title,
    description: experience.value.description,
    ogImage: experience.value.image,
  })
}
</script>
