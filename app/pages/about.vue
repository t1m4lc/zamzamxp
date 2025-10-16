<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5"></div>
      <div class="container mx-auto px-4 relative">
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="mb-6 text-5xl font-semibold text-slate-900 lg:text-6xl">
            Who we are
          </h1>
          <p class="text-xl leading-relaxed text-slate-600 lg:text-2xl">
            Connecting travelers with passionate local guides for authentic adventures around the world.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl">
          <h2 class="mb-8 text-3xl font-semibold text-slate-900">Our Story</h2>
          <div class="prose prose-lg space-y-6 text-slate-700">
            <p>
              Zamzam Experience was born from a simple observation: around the world, talented local guides are passionate about sharing their culture and activities, but struggle to connect with travelers in a fair and equitable way.
            </p>
            <p>
              We’re building a new kind of travel agency – one that puts local communities first, ensures fair compensation for guides and partners, and delivers authentic experiences that benefit everyone involved.
            </p>
            <p>
              Every adventure we offer creates meaningful connections, supports sustainable tourism, and helps preserve the destinations we love exploring.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-slate-50 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-4xl font-black text-slate-900 lg:text-5xl">
            Our Values
          </h2>
          <p class="text-lg text-slate-600">
            What drives everything we do
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">Authentic Local Experiences</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              Every adventure is designed and led by locals who share their genuine culture, stories, and perspectives.
            </p>
          </Card>

          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">Eco-Friendly & Sustainable</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              We minimize environmental impact, respect local cultures, and ensure tourism benefits communities long-term.
            </p>
          </Card>

          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">Fair Remuneration</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              Our partners receive fair compensation for their work. We believe in equitable tourism that benefits everyone.
            </p>
          </Card>

          <Card class="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
            <h3 class="mb-3 text-lg font-semibold text-slate-900">Best Market Prices</h3>
            <p class="text-sm leading-relaxed text-slate-600">
              Quality experiences at fair prices. We hate tourist traps - you pay what's right for quality service.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Founder -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <Card class="overflow-hidden rounded-2xl border border-slate-200">
            <div class="grid gap-12 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <div class="mb-6 aspect-square overflow-hidden rounded-2xl">
                                  <img 
                    class="rounded-2xl object-cover w-full h-full" 
                    src="/images/pages/timothy-alcaide-founder.jpg" 
                    alt="Profile picture of Timothy Alchin"
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <div class="mb-2 text-sm font-medium text-slate-600">Founder</div>
                <h2 class="mb-4 text-3xl font-semibold text-slate-900">Timothy Alcaide</h2>
                <p class="mb-4 leading-relaxed text-slate-700">
                  I’m a software engineer who quit my job in 2024 to travel the world. Passionate about adventure sports and mountains, I explored Madagascar, Thailand, Vietnam, Nepal, and Morocco.
                </p>
                <p class="mb-4 leading-relaxed text-slate-700">
                  Everywhere I went, I met incredible local guides who were passionate about their craft but struggled to find clients fairly. That's why I created Zamzam Experience in 2025.
                </p>
                <p class="mb-6 leading-relaxed text-slate-700">
                  (Fun fact: "zamzam" is a Nepali word meaning "let's go!" – it perfectly captures our spirit of adventure.)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Local Partners -->
    <section class="bg-slate-50 py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-6 text-3xl font-semibold text-slate-900">
            Our local partners
          </h2>
          <p class="mb-12 text-lg leading-relaxed text-slate-600">
            We work exclusively with passionate local guides, family-run accommodations, and small businesses. When you travel with us, you're directly supporting the people who call these places home.
          </p>

          <div class="grid gap-8 md:grid-cols-3">
            <div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 class="mb-2 text-lg font-semibold text-slate-900">Local Guides</h3>
              <p class="text-sm text-slate-600">
                Passionate professionals who know every trail, wave, and hidden gem in their region.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 class="mb-2 text-lg font-semibold text-slate-900">Local Businesses</h3>
              <p class="text-sm text-slate-600">
                Family-run operations that provide authentic accommodations and services.
              </p>
            </div>

            <div class="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 class="mb-2 text-lg font-semibold text-slate-900">Community Partners</h3>
              <p class="text-sm text-slate-600">
                Cooperatives and organizations dedicated to sustainable, community-based tourism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equity & Impact -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-3xl font-semibold text-slate-900">
              Our commitment to fair tourism
            </h2>
            <p class="text-lg text-slate-600">
              Tourism should benefit everyone, especially local communities
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <Card class="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 class="mb-4 flex items-center space-x-2 text-xl font-semibold text-slate-900">
                <Banknote class="h-6 w-6 text-green-600" />
                <span>Fair Remuneration</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                All our partners receive fair compensation for their services. We believe in equitable partnerships where everyone benefits.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Fair wages for all partners</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Transparent pricing</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Direct partnerships with locals</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-sm p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Users class="h-7 w-7 text-[#FF6B35]" />
                <span>Community Focus</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                We prioritize working with local businesses and family-run operations, ensuring tourism revenue stays within the community.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                  <span>Direct partnerships with local families</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                  <span>Support for small local businesses</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                  <span>Revenue stays in local communities</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-sm p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <Leaf class="h-7 w-7 text-green-600" />
                <span>Environmental Care</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                We operate carbon-neutral adventures, participate in trail maintenance, and educate travelers on Leave No Trace principles.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Carbon offset partnerships</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Weekly trail cleanups</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Plastic-free operations</span>
                </li>
              </ul>
            </Card>

            <Card class="rounded-3xl border-2 border-slate-200 bg-white/95 backdrop-blur-sm p-8">
              <h3 class="mb-4 flex items-center space-x-2 text-2xl font-bold text-slate-900">
                <UserCheck class="h-7 w-7 text-purple-600" />
                <span>Inclusive Opportunities</span>
              </h3>
              <p class="mb-4 leading-relaxed text-slate-700">
                We're committed to working with diverse partners and supporting inclusive tourism. As we grow, we aim to create more opportunities for underrepresented groups in adventure tourism.
              </p>
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>Open to all qualified guides</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>Building diverse partnerships</span>
                </li>
                <li class="flex items-start space-x-2">
                  <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                  <span>Equal opportunity approach</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white/95 backdrop-blur-sm py-20 border-y">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="mb-2 text-5xl font-semibold text-slate-900">
              <NumberTicker :value="100" :decimal-places="0" />+
            </div>
            <div class="text-lg text-slate-600">Happy Customers</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-5xl font-semibold text-slate-900">
              <NumberTicker :value="10" :decimal-places="0" />+
            </div>
            <div class="text-lg text-slate-600">Local Partners</div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-5xl font-semibold text-slate-900">
              <NumberTicker :value="2" :decimal-places="0" />+
            </div>
            <div class="text-lg text-slate-600">Countries</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 lg:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Join Our Next Adventure
          </h2>
          <p class="mb-10 text-xl leading-relaxed text-slate-600">
            Be part of a travel community that creates positive impact
          </p>
          <Button
            as-child
            size="lg"
            class="rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-12 py-6 text-base font-medium shadow-lg hover:shadow-xl"
          >
            <NuxtLink to="/contact">
              Get in Touch
              <ArrowRight class="ml-2 h-5 w-5" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { NumberTicker } from '~/components/ui/number-ticker'
import { Banknote, Check, Users, Leaf, UserCheck, ArrowRight } from 'lucide-vue-next'

useSeoMeta({
  title: "About Us - Fair Adventure Travel | Zamzam Experience",
  description:
    "Learn about Zamzam Experience: connecting travelers with local guides for authentic adventures. Fair prices, sustainable tourism, and meaningful cultural experiences since 2025.",
  ogTitle: "About Zamzam Experience - Fair Adventure Travel",
  ogDescription:
    "Our mission: authentic adventures that benefit travelers, guides, and local communities.",
  ogType: "website",
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  defineOrganization({
    name: "Zamzam Experience",
    description:
      "Connecting travelers with passionate local guides for authentic adventures around the world",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Timothy Alcaide",
      jobTitle: "Founder",
    },
  }),
  defineWebPage({
    "@type": "AboutPage",
    name: "About Zamzam Experience",
  }),
])
</script>
